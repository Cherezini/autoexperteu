"use client";

import NextLink from "next/link";
import { useMemo, useState } from "react";
import { HomeAccordionProvider, HomeAccordionSection } from "@/components/HomeAccordions";

type Locale = "ru" | "en" | "es";

type DropdownSection = {
  id: string;
  title: string;
  items: string[];
};

function getLocale(paramsLocale: unknown): Locale {
  const v = String(paramsLocale || "ru").toLowerCase();
  if (v === "en" || v === "es" || v === "ru") return v;
  return "ru";
}

function copy(locale: Locale) {
  const common = {
    videoSrc: "/media/videos/hero.mp4",
    videoPoster: "/media/images/hero-poster.jpg",
    miniLogo: "/logo_1.png",
  };

  const now = new Date();
  const day = now.getDate();
  const availableSlots = day > 25 ? 1 : day > 18 ? 2 : day > 10 ? 4 : 7;

  const monthNames: Record<Locale, string[]> = {
    ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Декабрь"],
  };
  const currentMonth = monthNames[locale][now.getMonth()];

  if (locale === "en") {
    return {
      ...common,
      urgencyTitle: `Boutique format with a limited number of clients`,
      urgencyMonth: currentMonth,
      urgencyText: "We focus on quality, not quantity. To ensure perfect technical checks and logistics.",
      urgencyBtn: `Book a slot`,
      urgencyRemaining: `Remaining`,
      heroTitle: "Premium car sourcing and turnkey registration in Spain",
      heroText: [
        "Autoexpert EU helps you buy a car in Spain and choose and import a car from Germany or other European Union countries. We source with minimal risk: we offer options within your budget, verify the technical condition and history, rule out restrictions and liens (embargos), and support negotiations and purchase.\nIf you’re considering a car from Germany or other EU countries, we organise sourcing and checks, calculate the total cost, arrange delivery, and handle registration in Spain.",
        "We select vehicles strictly based on your individual request, ensuring the best price-to-quality ratio and meeting all your technical priorities.",
        "Access to closed European B2B auctions and dealer networks allows us to find exclusive options unavailable to private buyers.",
        "Your result — a car legally registered in your name with the DGT, with a transparent history, verified mileage, free of liens and restrictions, optimized taxes, without risks and unnecessary bureaucracy.",
      ],
      needTitle: "Who needs car sourcing in Spain and Germany",
      needList: [
        "Those buying a car in Spain for the first time and wanting to avoid mistakes and unnecessary costs.",
        "Non-residents and those registering a car for themselves or their family and needing correct DGT registration.",
        "Those choosing a car from Germany or other EU countries and wanting transparent calculations and checks before purchase.",
        "Those who value deal safety: legal purity, restriction checks, payment protection.",
        "Ukrainian and Russian-speaking clients in Spain who need clear support and document control.",
      ],
      risksTitle: "What risks we cover when buying a car",
      risksList: [
        "Hidden accidents, condition and mileage not matching the listing.",
        "Legal restrictions: liens, bans, registration restrictions (embargos).",
        "Document and DGT registration mistakes that cause delays and extra costs.",
        "Unexpected taxes and paperwork costs — we calculate the total cost in advance.",
        "Emotional purchase without a strategy — we propose rational options and budget alternatives.",
      ],
      howTitle: "How we work",
      advantagesTitle: "Autoexpert EU advantages",
      questionsTitle: "Still have questions?",
      questionsText: "We’ve collected answers to the most common questions about sourcing, checks, documents and timing.",
      faqBtn: "Go to FAQ",
      startTitle: "Ready to start?",
      startText1:
        "Leave a request — we will assess your case for free and suggest a clear action plan for sourcing and buying in Spain, Germany, or other European Union countries.",
      startText2: "We can also help if you need to register a vehicle with Spain’s DGT.",
      startBtn1: "FILL IN CAR SEARCH FORM",
      startBtn2: "Register a car in Spain",
      howItems: [
        { t: "Application and free preliminary analysis", d: "You leave a request with the model, budget and preferences. We analyze the market for free and confirm the request is realistic in price and trim level." },
        { t: "Request adjustment in the client's favor", d: "If the parameters don’t match the market, we suggest adjustments: budget, trim level, alternative models. Often we find options better than expected." },
        { t: "Contract and start of sourcing", d: "We fix the terms in the contract and start sourcing. We offer at least 10 verified car options and explain the pros and risks of each." },
        { t: "Comprehensive inspection", d: "We carry out technical diagnostics and a legal check: mileage, service history, accidents, restrictions and liens (embargos)." },
        { t: "Purchase, delivery and registration", d: "Depending on the platform where the car is purchased, we assist with the purchase and signing the contract. We organize safe logistics and registration for Spanish plates. We support the process until the result — you receive Spanish plates for the car." },
      ],
      advItems: [
        { t: "Free preliminary application analysis", d: "You pay nothing until we confirm the real feasibility of purchasing a vehicle according to your parameters." },
        { t: "Access to closed B2B auctions in Europe", d: "We work with professional auctions unavailable to private individuals, finding cars in better condition." },
        { t: "Tax optimization and cost calculation", d: "We professionally calculate the registration tax (IEDMT) and find legal ways to reduce the tax burden." },
        { t: "Guaranteed DGT Environmental Label (ZBE)", d: "We select cars of the correct class and handle the DGT sticker for unrestricted city access." },
        { t: "Legal purity and payment protection", d: "We check the car for the absence of liens (embargos) and guarantee transaction transparency." },
      ],
      links: { avtopodbor: "FILL IN CAR SEARCH FORM", registro: "Register a car in Spain." },
    };
  }

  if (locale === "es") {
    return {
      ...common,
      urgencyTitle: `Formato Boutique con un número limitado de clientes`,
      urgencyMonth: currentMonth,
      urgencyText: "Apostamos por la calidad, no por la cantidad. Para asegurar una inspección técnica и logística perfectas.",
      urgencyBtn: `Reservar un slot`,
      urgencyRemaining: `Quedan`,
      heroTitle: "Selección de coches premium y matriculación completa en España",
      heroText: [
        "Autoexpert EU le ayuda a comprar un coche en España и a elegir e importar un coche desde Alemania u otros países de la Unión Europea. Seleccionamos sin riesgos: proponemos opciones según su presupuesto, verificamos el estado técnico и el historial, descartamos cargas и embargos, и le acompañamos en la negociación и la compra.\nSi está considerando un coche de Alemania u otros países de la UE, organizamos la selección и la verificación, calculamos el coste total, gestionamos la entrega и los trámites de matriculación en España.",
        "Seleccionamos vehículos estrictamente bajo su solicitud individual, optimizando su presupuesto и encontrando las mejores ofertas del mercado europeo.",
        "El acceso a subastas B2B europeas cerradas и a redes de concesionarios nos permite encontrar opciones exclusivas no disponibles para compradores particulares.",
        "Su resultado — un coche legalmente matriculado a su nombre en la DGT, con historial transparente, kilometraje real, sin cargas ni restricciones, impuestos optimizados, sin riesgos ni burocracia innecesaria.",
      ],
      needTitle: "¿Para quién es la selección de coche en Alemania?",
      needList: [
        "Para quienes compран un coche en España por primera vez и quieren evitar errores и gastos innecesarios.",
        "Para no residentes и para quienes matriculan el coche a su nombre o para su familia и necesitan una tramitación correcta en la DGT.",
        "Para quienes eligen un coche de Alemania u otros países de la UE и quieren un cálculo transparente и verificación antes de comprar.",
        "Para quienes valoran la seguridad de la operación: legalidad, comprobación de restricciones, protección de pagos.",
        "Para clientes ucranianos и rusoparlantes en España, a quienes les importa un acompañamiento claro и el control de documentos.",
      ],
      risksTitle: "¿Qué riesgos cubrimos al comprar un coche?",
      risksList: [
        "Accidentes ocultos, estado и kilometraje que no coinciden con lo anunciado.",
        "Limitaciones jurídicas: cargas, prohibiciones и restricciones de matriculación (embargos).",
        "Errores en documentos и trámites en la DGT que provocan retrasos и gastos adicionales.",
        "Gastos imprevistos de impuestos и gestiones — calculamos el coste total por adelantado.",
        "Compra “por emociones” sin estrategia — proponemos opciones racionales и alternativas dentro del presupuesto.",
      ],
      howTitle: "Cómo trabajamos",
      advantagesTitle: "Ventajas de Autoexpert EU",
      questionsTitle: "¿Sigues teniendo preguntas?",
      questionsText: "Hemos reunido respuestas a las preguntas más frecuentes sobre selección, comprobaciones и plazos.",
      faqBtn: "Ir a FAQ",
      startTitle: "¿Listo para empezar?",
      startText1:
        "Deje una solicitud — evaluaremos su caso gratuitamente и le propondremos un plan claro para la selección и compra en España, Alemania u otros países de la Unión Europea.",
      startText2: "También podemos ayudarle si necesita matricular un vehículo en la DGT de España.",
      startBtn1: "RELLENAR FORMULARIO DE BÚSQUEDA DE COCHE",
      startBtn2: "Matricular un coche en España",
      howItems: [
        { t: "Solicitud и análisis preliminar gratuito", d: "Usted deja una solicitud con el modelo, el presupuesto и sus preferencias. Analizamos el mercado gratuitamente и confirmamos que la solicitud es realista в precio и equipamiento." },
        { t: "Ajuste de la solicitud a favor del cliente", d: "Si los parámetros no se ajustan al mercado, proponemos ajustes: presupuesto, equipamiento, modelos alternativos. A menudo encontramos opciones mejores de lo esperado." },
        { t: "Contrato e inicio de la búsqueda", d: "Fijamos las condiciones в контракте y comenzamos la búsqueda. Proponemos no menos de 10 opciones de coches verificados и explicamos las ventajas и los riesgos de cada uno." },
        { t: "Verificación integral", d: "Realizamos diagnóstico técnico и verificación jurídica: kilometraje, historial de mantenimiento, accidentes, restricciones и cargas (embargos)." },
        { t: "Compra, entrega и matriculación", d: "Según la plataforma donde se compra el coche, ayudamos en la compra и в la firma del contrato. Organizamos una logística segura и la matriculación con placas españolas. Acompañamos el proceso hasta el resultado: la obtención de las placas españolas del coche." },
      ],
      advItems: [
        { t: "Análisis preliminar gratuito de la solicitud", d: "Usted no paga nada hasta que confirmemos la viabilidad de la compra según sus parámetros." },
        { t: "Acceso a subastas B2B cerradas en Europa", d: "Trabajamos con subastas profesionales no disponibles para particulares para encontrar mejores ofertas." },
        { t: "Optimización de impuestos (IEDMT)", d: "Calculamos el impuesto de matriculación и buscamos formas legales de reducir su carga fiscal." },
        { t: "Garantía de Distintivo Ambiental DGT (ZBE)", d: "Seleccionamos el coche adecuado и tramitamos su pegatina DGT para acceso libre a las ciudades." },
        { t: "Seguridad jurídica и protección de sus pagos", d: "Comprobamos la ausencia de embargos и garantizamos transparencia total в transacciones." },
      ],
      links: { avtopodbor: "RELLENAR FORMULARIO DE BÚSQUEDA DE COCHE", registro: "Matricular un coche в España." },
    };
  }

  // RU
  return {
    ...common,
    urgencyTitle: `Формат Бутик с ограниченным числом клиентов`,
    urgencyMonth: currentMonth,
    urgencyText: "Мы делаем ставку на качество, а не на поток. Чтобы обеспечить идеальную техническую проверку и логистику.",
    urgencyBtn: `Забронировать слот`,
    urgencyRemaining: `Осталось`,
    heroTitle: "Профессиональный автоподбор и полная регистрация авто в Испании",
    heroText: [
      "Autoexpert EU помогает помогает купить автомобиль в Испании, выбрать и пригнать автомобиль из Германии или других стран Европейского союза. Подбираем без рисков: предлагаем варианты под Ваш бюджет, проверяем техническое состояние и историю, исключаем ограничения и залоги (embargos), сопровождаем переговоры и покупку.\nЕсли вы рассматриваете авто из Германии или других стран ЕС — организуем подбор и проверку, просчитываем итоговую стоимость, оранизуем доставку и оформление постановки на учет в  Испании.",
      "Мы специализируемся на подборе автомобиля под индивидуальный запрос, оптимизируя ваш бюджет и находя лучшие предложения на рынке ЕС.",
      "Доступ к закрытым европейским B2B-аукционам и дилерским сетям позволяет нам находить эксклюзивные варианты, недоступные частным покупателям.",
      "Ваш результат — легально зарегистрированный на Ваше имя  в  DGT автомобиль, с прозрачной историей,  реальным пробегом, без залогов и ограничени, отпимизированными  налогами,  без рисков и лишней бюрократии.",
    ],
    needTitle: "Кому нужен подбор авто в Испании, Германии",
    needList: [
      "Тем, кто покупает автомобиль в Испании впервые и хочет избежать ошибок и лишних расходов.",
      "Нерезидентам и тем, кто оформляет авто на себя или на семью и хочет корректную регистрацию в DGT.",
      "Тем, кто выбирает авто из Германии или стран ЕС и хочет прозрачный расчёт и проверку до покупки.",
      "Тем, кто ценит безопасность сделки: юридическая чистота, проверка ограничений, защита платежей.",
      "Украинцам и русскоязычным клиентам в Испании, которым важно понятное сопровождение и контроль документов.",
    ],
    risksTitle: "Какие риски при покупке авто мы закрываем",
    risksList: [
      "Скрытые ДТП, несоответствие состояния и пробега заявленному.",
      "Юридические ограничения: залоги, запреты, ограничения на регистрационные действия (embargos).",
      "Ошибки с документами и регистрацией в DGT, которые приводят к задержкам и дополнительным расходам.",
      "Непредвиденные расходы по налогам и оформлению — заранее считаем итоговую стоимость.",
      "Покупка «на эмоциях» без стратегии — предлагаем рациональные варианты и альтернативы в бюджете.",
    ],
    howTitle: "Как мы работаем",
    advantagesTitle: "Преимущества Autoexpert EU",
    questionsTitle: "Остались вопросы?",
    questionsText: "Собрали ответы на самые частые вопросы про подбор, проверки, документы и сроки.",
    faqBtn: "Перейти в FAQ",
    startTitle: "Готовы начать?",
    startText1:
      "Оставьте заявку — мы бесплатно оценим ваш запрос и предложим понятный план действий по подбору, покупке в Испании, Германии или других странах Евросоюза.",
    startText2: "Мы также поможем, если Вам нужно зарегистрировать автомобиль в DGT Испании .",
    startBtn1: "Заполнить форму подбора авто",
    startBtn2: "Зарегистрировать авто в Испании",
    howItems: [
      { t: "Заявка и бесплатный предварительный анализ", d: "Вы оставляете заявку с моделью, бюджетом и пожеланиями. Мы бесплатно анализируем рынок и подтверждаем, что запрос реалистичен по цене и комплектации." },
      { t: "Корректировка заявки в пользу клиента", d: "Если параметры не соответствуют рынку, предлагаем корректировки: бюджет, комплектация, альтернативные модели. Часто находим варианты выгоднее ожидаемого." },
      { t: "Контракт и начало подбора", d: "Фиксируем условия в контракте и запускаем подбор. Предлагаем не менее 10 -ти вариантов проверенных авто, объясняем плюсы и риски каждого." },
      { t: "Комплексная проверка", d: "Проводим техническую диагностику и юридическую проверку: пробег, история обслуживания, ДТП, ограничения и залоги (embargos)." },
      { t: "Покупка, доставка и регистрация", d: "В зависимости от площадки, на которой приобретается автомобиль, содействуем приобретению и заключению  договора Организуем безопасную логистику и регистрацию автомобиля на испанские номера. Сопровождаем процесс до результата - получения испанских номеров на авто." },
    ],
    advItems: [
      { t: "Бесплатный предварительный анализ заявки", d: "Вы ничего не платите до тех пор, пока мы не подтвердим реальную возможность покупки автомобиля по вашим параметрам." },
      { t: "Доступ к закрытым B2B-аукционам Европы", d: "Мы работаем с профессиональными площадками, недоступными частным лицам. Это позволяет находить авто в лучшем состоянии по честной цене." },
      { t: "Оптимизация налогов и расчет стоимости", d: "Мы профессионально рассчитываем налог на регистрацию (IEDMT) и находим законные способы минимизации затрат еще до покупки." },
      { t: "Гарантия получения экологической метки DGT", d: "Подбираем авто нужного класса и берем на себя получение наклейки для свободного въезда в зоны ZBE всех городов Испании." },
      { t: "Юридическая чистота и защита платежей", d: "Проверяем автомобиль на отсутствие залогов (embargos) и штрафов. Сопровождаем международные переводы и гарантируем прозрачность." },
    ],
    links: { avtopodbor: "Заполнить форму подбора авто", registro: "Зарегистрировать авто в Испании." },
  };
}

function DrivingIcon({ open }: { open: boolean }) {
  return (
    <span className="lg:absolute lg:left-5 lg:top-1/2 lg:-translate-y-1/2 relative mt-2 block pointer-events-none">
      <span className={["inline-block will-change-transform", "translate-x-0", "drive-car", open ? "translate-x-2" : ""].join(" ")}>
        <img src="/vip_car.png" alt="" className="h-20 w-auto object-contain drop-shadow"
 draggable={false} />
      </span>
    </span>
  );
}

function DropdownListGroup({
  sections,
  openId,
  onToggle,
}: {
  sections: DropdownSection[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <section className="mt-10 flex justify-center">
      <div className="w-full max-w-3xl space-y-3">
        <style jsx global>{`
          @keyframes drive {
            0% { transform: translateX(0); }
            70% { transform: translateX(70px); }
            85% { transform: translateX(64px); }
            100% { transform: translateX(67px); }
          }
          .group:hover .drive-car { animation: drive 650ms ease-in-out both; }
        `}</style>

        {sections.map((sec) => {
          const isOpen = openId === sec.id;
          return (
            <div key={sec.id} className="rounded-2xl border bg-white overflow-hidden">
              <button type="button" onClick={() => onToggle(sec.id)} className="group relative w-full px-5 py-4 flex flex-col items-center lg:block">
                <span className="relative z-10 block w-full text-center text-lg font-semibold lg:px-12">{sec.title}</span>
                <DrivingIcon open={isOpen} />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                  <img
                    src="/icons/strelka_abajo.png"
                    alt=""
                    aria-hidden="true"
                    className={"h-7 w-7 transition-transform" + (isOpen ? " rotate-180" : "")}
                  />
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <ul className="list-disc pl-5 space-y-2">
                    {sec.items.map((it, idx) => (
                      <li key={idx} style={{ textAlign: "justify" }}>{it}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = getLocale(params?.locale);
  const C = copy(locale);
  const [dropdownOpenId, setDropdownOpenId] = useState<string | null>(null);
  const [homeAccordionsResetSeed, setHomeAccordionsResetSeed] = useState(0);

  const requestHref = `/${locale}/request`;
  const avtoHref = `/${locale}/avtopodbor`;
  const faqHref = `/${locale}/fao`;
  const registoHref = `/${locale}/registo`;

  const heroBtnSrc = locale === "ru" ? "/rus_glav.png" : locale === "es" ? "/esp_glannay_1.png" : "/eng_glavnay.png";
  const availableSlots = new Date().getDate() > 25 ? 1 : new Date().getDate() > 18 ? 2 : new Date().getDate() > 10 ? 4 : 7;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-2 pb-6">
      {/* HERO SECTION */}
      <section className="-mt-[15px]">
        <div className="relative overflow-hidden rounded-3xl border h-[390px]">
          <video autoPlay loop muted playsInline preload="metadata" poster={C.videoPoster} className="absolute inset-0 h-full w-full object-cover">
            <source src={C.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center translate-y-[36px]">
            <h1 style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }} className="text-balance text-xl font-semibold text-white md:text-3xl drop-shadow-[0_6px_18_rgba(0,0,0,0.95)]">
              {C.heroTitle}
            </h1>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <NextLink href={avtoHref} className="inline-flex items-center justify-center">
                <img src={heroBtnSrc} alt={C.links.avtopodbor} className={"h-auto w-full max-w-[288px]" + (locale === "ru" ? " max-w-[230px]" : "")} />
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      {/* TEXT UNDER HERO (Part 1) */}
      <section className="mt-8 space-y-3 whitespace-pre-line" style={{ textAlign: "justify" }}>
        {C.heroText.slice(0, 2).map((p: string, i: number) => <p key={i}>{p}</p>)}
      </section>

      {/* BOUTIQUE URGENCY BLOCK — ЗЕЛЕНОЕ LED ТАБЛО */}
      <section className="mt-8 flex justify-center">
        <div className="w-full max-w-2xl rounded-2xl border-2 border-[#0B3B73] bg-[#f8fafc] p-4 sm:p-5 text-center shadow-lg relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0B3B73] uppercase tracking-wider">{C.urgencyTitle}</h2>
            <span className="bg-black text-[#B7FF5A] px-5 py-1.5 rounded-lg border border-white/10 inline-block relative font-mono text-lg shadow-md uppercase tracking-widest">
                {C.urgencyMonth}
                <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/20" />
            </span>
          </div>
          <div className="mt-4 overflow-hidden bg-[#111] py-2 rounded-lg border-b-2 border-black/20 shadow-inner relative">
             <div className="animate-marquee whitespace-nowrap inline-block">
                <span className="text-base font-bold text-[#B7FF5A] uppercase tracking-[0.25em] [text-shadow:_0_0_10px_rgba(183,255,90,0.6)] px-8 font-mono">
                  {C.urgencyText}
                </span>
                <span className="text-base font-bold text-[#B7FF5A] uppercase tracking-[0.25em] [text-shadow:_0_0_10px_rgba(183,255,90,0.6)] px-8 font-mono">
                  {C.urgencyText}
                </span>
             </div>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <NextLink href={requestHref} className="group relative inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-10 py-3.5 text-lg font-black text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none overflow-hidden">
              <span className="relative z-10 flex items-center gap-4">
                <span className="uppercase tracking-tighter text-sm sm:text-base">{C.urgencyBtn} {C.urgencyRemaining}</span>
                <span className="bg-black text-[#B7FF5A] px-4 py-1.5 rounded-md border border-white/10 inline-block relative font-mono text-xl shadow-md">
                   {availableSlots}
                   <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/20" />
                </span>
              </span>
              <div className="absolute top-0 -left-[150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-20 transition-transform duration-[1500ms] ease-in-out group-hover:translate-x-[250%]" />
            </NextLink>
          </div>
          <style jsx>{`
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { display: inline-block; animation: marquee 20s linear infinite; }
          `}</style>
        </div>
      </section>

      {/* TEXT UNDER HERO (Part 2) */}
      <section className="mt-8 space-y-3 whitespace-pre-line" style={{ textAlign: "justify" }}>
        {C.heroText.slice(2).map((p: string, i: number) => <p key={i}>{p}</p>)}
      </section>

      {/* DROPDOWN LISTS */}
      <DropdownListGroup sections={[{ id: "need", title: C.needTitle, items: C.needList }, { id: "risks", title: C.risksTitle, items: C.risksList }]} openId={dropdownOpenId} onToggle={(id) => { setDropdownOpenId((prev) => (prev === id ? null : id)); setHomeAccordionsResetSeed((s) => s + 1); }} />

      <div className="home-accordion-section-wrap">
        <style jsx global>{`
          .home-accordion-section-wrap button.group.flex.items-center.justify-center span.absolute.right-5 svg { width: 28px; height: 28px; background-image: url(/icons/strelka_abajo.png); background-size: contain; background-repeat: no-repeat; background-position: center; }
          .home-accordion-section-wrap button.group.flex.items-center.justify-center span.absolute.right-5 svg path { display: none; }
          @media (max-width: 1023px) { .home-accordion-section-wrap button { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 10px !important; padding: 20px !important; height: auto !important; } .home-accordion-section-wrap button span:first-child { position: static !important; order: 1 !important; width: 100% !important; text-align: center !important; } .home-accordion-section-wrap button img:not([src*="strelka"]) { position: static !important; order: 2 !important; margin: 0 auto !important; transform: none !important; } .home-accordion-section-wrap button span.absolute.right-5 { top: 50% !important; transform: translateY(-50%) !important; } }
          @keyframes gradient-move { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .btn-gradient-animate { background: linear-gradient(270deg, #0B3B73, #1e5ca6, #0B3B73); background-size: 200% 200%; animation: gradient-move 3s ease infinite; }
        `}</style>
        <div key={homeAccordionsResetSeed} onClickCapture={() => dropdownOpenId && setDropdownOpenId(null)} className="rounded-3xl bg-slate-100/70 backdrop-blur-[2px] shadow-[0_9px_22px_rgba(15,23,42,0.0125)] px-4 py-6 sm:px-6">
          <HomeAccordionProvider>
            <HomeAccordionSection title={C.howTitle} miniLogo={C.miniLogo} items={C.howItems} />
            <HomeAccordionSection title={C.advantagesTitle} miniLogo={C.miniLogo} items={C.advItems} />
          </HomeAccordionProvider>
        </div>
      </div>

      {/* STILL HAVE QUESTIONS */}
      <section className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="rounded-2xl border bg-white p-5">
            <div className="flex items-center justify-center gap-3">
              <img src="/icons/attencion.png" alt="" className="h-10 w-10 object-contain drop-shadow shrink-0" />
              <h2 className="text-lg font-semibold text-center">{C.questionsTitle}</h2>
            </div>
            <p className="mt-4 whitespace-pre-line" style={{ textAlign: "justify" }}>{C.questionsText}</p>
            <div className="mt-6 flex justify-center">
              <NextLink href={faqHref} className="inline-flex items-center justify-center">
                <img src={locale === "ru" ? "/icons/faq_rus.png" : locale === "es" ? "/icons/esp_faq.png" : "/icons/eng_faq.png"} alt={C.faqBtn} className="h-auto w-full max-w-[320px] drop-shadow" draggable={false} />
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO START */}
      <section className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="rounded-2xl border bg-slate-50 p-5 shadow-[0_8px_18px_rgba(15,23,42,0.10)]">
            <div className="flex items-center justify-center gap-3">
              <img src="/icons/verd.png" alt="" className="h-14 w-14 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] shrink-0" />
              <h2 className="text-lg font-semibold text-center">{C.startTitle}</h2>
            </div>
            <p className="mt-4 whitespace-pre-line" style={{ textAlign: "justify" }}>{C.startText1}</p>
            <p className="mt-3 whitespace-pre-line" style={{ textAlign: "justify" }}>{C.startText2}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <NextLink href={requestHref} className="btn-gradient-animate inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-bold text-white border border-white/15 shadow-[0_14px_28px_rgba(0,0,0,0.32)] hover:brightness-110 active:translate-y-[2px]">{C.startBtn1}</NextLink>
              <NextLink href={registoHref} className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-[#0B3B73] border border-[#0B3B73]/45 shadow-[0_14px_26px_rgba(0,0,0,0.18)] hover:brightness-105 active:translate-y-[2px]">{C.startBtn2}</NextLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
