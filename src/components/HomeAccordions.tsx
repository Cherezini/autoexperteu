"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export type AccordionItem = { t: string; d: React.ReactNode };

type Item = AccordionItem;

type CtxValue = {
  openKey: string | null;
  setOpenKey: (k: string | null) => void;
};

const HomeAccordionContext = React.createContext<CtxValue | null>(null);

// Глобальный fallback-store (используется, если Provider не подключён).
// Нужен, чтобы поведение на главной НЕ ломалось: обе секции должны
// разделять одно состояние и не позволять открыть два пункта одновременно.
type Listener = () => void;
let globalOpenKey: string | null = null;
const globalListeners = new Set<Listener>();

function setGlobalOpenKey(next: string | null) {
  globalOpenKey = next;
  globalListeners.forEach((l) => l());
}

function subscribeGlobal(listener: Listener) {
  globalListeners.add(listener);
  return () => globalListeners.delete(listener);
}

/**
 * Провайдер НЕ обязателен.
 * Но если он есть — оба секции ("Как мы работаем" и "Преимущества") будут
 * делить одно состояние и закрывать друг друга.
 */
export function HomeAccordionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  // Сбрасываем всё при смене страницы (уход/возврат на главную)
  React.useEffect(() => {
    setOpenKey(null);
  }, [pathname]);

  const value = React.useMemo<CtxValue>(() => ({ openKey, setOpenKey }), [openKey]);

  return <HomeAccordionContext.Provider value={value}>{children}</HomeAccordionContext.Provider>;
}

/**
 * Хук с безопасным fallback:
 * если провайдера нет — секция работает автономно (без краша).
 */
function useHomeAccordion(scopeId: string, forceLocal: boolean = false): CtxValue {
  const pathname = usePathname();
  const ctx = React.useContext(HomeAccordionContext);

  // Локальное состояние используется ТОЛЬКО для изолированных вложенных аккордеонов.
  const [localOpenKey, setLocalOpenKey] = React.useState<string | null>(null);

  React.useEffect(() => {
    // сброс при смене страницы для локального (изолированного) режима
    if (forceLocal) setLocalOpenKey(null);
  }, [pathname, forceLocal]);

  // Если есть Provider — работаем через него (кроме принудительно изолированного режима)
  if (ctx && !forceLocal) return ctx;

  // Если Provider нет:
  //  - для НЕ изолированных секций используем общий глобальный store,
  //    чтобы на главной нельзя было открыть две вкладки одновременно.
  //  - для изолированных — локально.
  const openKey = React.useSyncExternalStore(
    subscribeGlobal,
    () => globalOpenKey,
    () => globalOpenKey
  );

  React.useEffect(() => {
    if (!forceLocal) setGlobalOpenKey(null);
  }, [pathname, forceLocal]);

  if (!forceLocal) {
    return {
      openKey,
      setOpenKey: setGlobalOpenKey,
    };
  }

  return {
    openKey: localOpenKey,
    setOpenKey: setLocalOpenKey,
  };
}

export function AccordionProvider({ children }: { children: React.ReactNode }) {
  return <HomeAccordionProvider>{children}</HomeAccordionProvider>;
}

function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className={[
        "grid transition-[grid-template-rows] duration-200 ease-in-out",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      ].join(" ")}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

export function ControlledAccordions({
  scopeId,
  items,
  summaryAlign = "left",
  summaryClassName,
  contentClassName,
  isolated = false,
}: {
  scopeId: string;
  items: { title: React.ReactNode; content: React.ReactNode }[];
  summaryAlign?: "left" | "center";
  summaryClassName?: string;
  contentClassName?: string;
  isolated?: boolean;
}) {
  const { openKey, setOpenKey } = useHomeAccordion(scopeId, isolated);
  const baseKey = `accordion:${scopeId}`;

  const toggle = (idx: number) => {
    const k = `${baseKey}:item:${idx}`;
    setOpenKey(openKey === k ? null : k);
  };

  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = openKey === `${baseKey}:item:${i}`;
        return (
          <div key={i} className="rounded-2xl border bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(i)}
              className={[
                "group relative w-full flex items-center",
                summaryAlign === "center" ? "justify-center text-center" : "justify-between text-left",
                "px-5 py-4 font-semibold select-none",
                "shadow-[0_8px_0_rgba(0,0,0,0.12)]",
                summaryClassName ?? "",
              ].join(" ")}
            >
              <span className={summaryAlign === "center" ? "text-lg" : "text-base"}>{it.title}</span>
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-black/70">
                <Chevron open={isOpen} />
              </span>
            </button>

            <Collapsible open={isOpen}>
              <div className={["px-5 pb-5 pt-5", contentClassName ?? ""].join(" ")}>{it.content}</div>
            </Collapsible>
          </div>
        );
      })}
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      className={[
        "shrink-0 transition-transform duration-200",
        open ? "rotate-180" : "rotate-0",
      ].join(" ")}
    >
      <path
        d="M5 7.5l5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Едущая машинка (НЕ меняем файл иконки).
 * Возвращаем анимацию как была: hover на группе -> CSS animation.
 * +20px к проезду.
 */
function DrivingIcon({ open }: { open: boolean }) {
  return (
    <span className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
      <span
        className={[
          "inline-block will-change-transform",
          "translate-x-0",
          "drive-car", // <-- ВАЖНО: этот класс нужен для CSS hover-анимации
          open ? "translate-x-2" : "",
        ].join(" ")}
      >
        <img
          src="/sport.png"
          alt=""
          className="h-28 w-auto object-contain drop-shadow"
          draggable={false}
        />
      </span>
    </span>
  );
}

function ItemIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="h-6 w-6 object-contain shrink-0 opacity-90"
      draggable={false}
    />
  );
}

export function HomeAccordionSection({
  title,
  miniLogo,
  items,
}: {
  title: string;
  miniLogo: string; // эта иконка будет внутри пунктов
  items: Item[];
}) {
  // стабильный id секции
  const sectionId = React.useId();

  const { openKey, setOpenKey } = useHomeAccordion(sectionId);

  const sectionKey = `section:${sectionId}`;
  const sectionOpen = openKey?.startsWith(sectionKey) ?? false;

  const toggleSection = () => {
    // если секция закрыта — откроем её (без открытого пункта)
    if (!sectionOpen) {
      setOpenKey(sectionKey);
      return;
    }
    // если секция открыта — закрыть всё
    setOpenKey(null);
  };

  const toggleItem = (idx: number) => {
    const itemKey = `${sectionKey}:item:${idx}`;
    if (openKey === itemKey) {
      // закрываем пункт, но секцию оставляем открытой
      setOpenKey(sectionKey);
    } else {
      // открываем пункт (и этим же закрываем всё остальное на странице при наличии Provider)
      setOpenKey(itemKey);
    }
  };

  return (
    <section className="mt-10 flex justify-center">
      <style jsx global>{`
        @keyframes drive {
          0% {
            transform: translateX(0);
          }
          70% {
            transform: translateX(92px); /* было 4.5rem (~72px) -> +20px */
          }
          85% {
            transform: translateX(86px); /* было ~65.6px -> +20px */
          }
          100% {
            transform: translateX(89px); /* было ~68.8px -> +20px */
          }
        }

        /* ВОТ ЭТО возвращает hover-анимацию (без Tailwind-конфига) */
        .group:hover .drive-car {
          animation: drive 650ms ease-in-out both;
        }
      `}</style>

      <div className="w-full max-w-3xl">
        {/* HEADER */}
        <div className="rounded-2xl border bg-white overflow-hidden">
          <button
            type="button"
            onClick={toggleSection}
            className={[
              "group relative w-full flex items-center justify-center",
              "rounded-2xl border-b px-5 py-4 font-semibold select-none",
              "shadow-[0_8px_0_rgba(0,0,0,0.12)]",
              "cursor-pointer",
            ].join(" ")}
          >
            {/* Едущая машинка слева — единственная иконка в заголовке */}
            <DrivingIcon open={sectionOpen} />

            <span className="text-lg text-center">{title}</span>

            {/* наш chevron справа (без “уёбищной” системной стрелки) */}
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-black/70">
              <Chevron open={sectionOpen} />
            </span>
          </button>

          {/* BODY */}
          <div
            className={[
              "px-5 pb-5 pt-5 space-y-3",
              sectionOpen ? "block" : "hidden",
            ].join(" ")}
          >
            {items.map((it, i) => {
              const isOpen = openKey === `${sectionKey}:item:${i}`;
              return (
                <div key={i} className="rounded-xl border bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleItem(i)}
                    className="w-full flex items-center gap-3 px-4 py-4 text-left"
                  >
                    {/* ИКОНКА ВНУТРИ ПУНКТОВ — берём из miniLogo */}
                    <ItemIcon src={miniLogo} />

                    <div className="flex-1 font-semibold">{it.t}</div>

                    <span className="text-black/70">
                      <Chevron open={isOpen} />
                    </span>
                  </button>

                  <div
                    className={[
                      "grid transition-[grid-template-rows] duration-200 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 pt-0">
                        {typeof it.d === "string" ? (
                          <p className="whitespace-pre-line" style={{ textAlign: "justify" }}>
                            {it.d}
                          </p>
                        ) : (
                          <div>{it.d}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
