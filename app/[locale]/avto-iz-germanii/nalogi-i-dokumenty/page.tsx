import Link from "next/link";
import type { Metadata } from "next";

/* ─────────────────────────────────────────────────────────────
   METADATA
───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || "ru";
  const baseUrl = "https://www.autoexperteu.com";
  const pathname = `/${locale}/avto-iz-germanii/nalogi-i-dokumenty`;

  const titles: Record<string, string> = {
    ru: "Налоги и документы при покупке авто из Германии в Испании — IEDMT, ITV, DGT",
    es: "Impuestos y documentos al importar un coche de Alemania a España — IEDMT, ITV, DGT | AutoexpertEU",
    en: "Taxes and documents when importing a car from Germany to Spain — IEDMT, ITV, DGT | AutoexpertEU",
  };
  const descriptions: Record<string, string> = {
    ru: "Какие налоги и документы нужны для регистрации авто из Германии в Испании. IEDMT, ITV, CoC, DGT — полный разбор. Рассчитаем и проверим до покупки.",
    es: "Qué impuestos y documentos necesita para matricular un coche de Alemania en España. IEDMT, ITV, CoC, DGT — guía completa.",
    en: "What taxes and documents you need to register a car from Germany in Spain. IEDMT, ITV, CoC, DGT — full breakdown.",
  };

  return {
    title: titles[locale] ?? titles.ru,
    description: descriptions[locale] ?? descriptions.ru,
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        ru: `${baseUrl}/ru/avto-iz-germanii/nalogi-i-dokumenty`,
        es: `${baseUrl}/es/avto-iz-germanii/nalogi-i-dokumenty`,
        en: `${baseUrl}/en/avto-iz-germanii/nalogi-i-dokumenty`,
      },
    },
    openGraph: {
      title: titles[locale] ?? titles.ru,
      description: descriptions[locale] ?? descriptions.ru,
      url: `${baseUrl}${pathname}`,
      siteName: "AutoexpertEU",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: `${baseUrl}/icons/nalogi.png`, width: 1200, height: 630 }],
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function NalogiDokumentyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "ru";
  const requestHref = `/${locale}/request`;

  /* ── Schema.org FAQ — RU ── */
  const schemaFaqRu = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Можно ли оформить автомобиль без CoC?", acceptedAnswer: { "@type": "Answer", text: "Иногда да, но тогда требуется ficha reducida — технический документ, подготавливаемый специалистом. Без предварительной проверки обещать простое оформление нельзя. Проверяем наличие CoC до покупки автомобиля." } },
      { "@type": "Question", name: "Что такое IEDMT и нужно ли его всегда платить?", acceptedAnswer: { "@type": "Answer", text: "IEDMT — регистрационный налог в Испании. Обязанность его платить зависит от параметров автомобиля: уровня выбросов CO₂, типа двигателя и конкретной ситуации. Рассчитывается индивидуально до покупки." } },
      { "@type": "Question", name: "Что важнее — цена автомобиля или документы?", acceptedAnswer: { "@type": "Answer", text: "Оба фактора важны. Дешёвая машина с проблемными документами часто оказывается дороже правильного автомобиля с чистым пакетом — из-за повторных визитов на ITV, доработок и задержек." } },
      { "@type": "Question", name: "Сколько занимает регистрация в DGT?", acceptedAnswer: { "@type": "Answer", text: "При полном комплекте документов — обычно 2–5 дней. Если на предыдущих этапах были ошибки в договоре, CoC или налогах — процесс затягивается." } },
      { "@type": "Question", name: "Можно ли всё оформить самостоятельно?", acceptedAnswer: { "@type": "Answer", text: "Теоретически да. Практически это требует времени, понимания испанской процедуры и внимательной проверки документов на каждом этапе: от покупки в Германии до финального оформления в DGT." } },
    ],
  };

  /* ── Schema.org FAQ — ES ── */
  const schemaFaqEs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Se puede matricular un coche sin CoC?", acceptedAnswer: { "@type": "Answer", text: "A veces sí, pero entonces se requiere una ficha reducida — un documento técnico elaborado por un especialista. Sin una verificación previa no se puede garantizar una tramitación sencilla. Verificamos la existencia del CoC antes de la compra del vehículo." } },
      { "@type": "Question", name: "¿Qué es el IEDMT y hay que pagarlo siempre?", acceptedAnswer: { "@type": "Answer", text: "El IEDMT es el impuesto de matriculación en España. La obligación de pagarlo depende de las características del vehículo: nivel de emisiones de CO₂, tipo de motor y la situación concreta. Se calcula de forma individualizada antes de la compra." } },
      { "@type": "Question", name: "¿Qué es más importante, el precio del coche o la documentación?", acceptedAnswer: { "@type": "Answer", text: "Ambos factores son importantes. Un coche barato con documentación problemática suele resultar más caro que un vehículo correcto con documentación en regla, debido a revisiones adicionales de ITV, modificaciones y retrasos." } },
      { "@type": "Question", name: "¿Cuánto tarda la matriculación en la DGT?", acceptedAnswer: { "@type": "Answer", text: "Con la documentación completa, normalmente entre 2 y 5 días. Si en etapas anteriores hubo errores en el contrato, el CoC o los impuestos, el proceso se alarga." } },
      { "@type": "Question", name: "¿Se puede gestionar todo por cuenta propia?", acceptedAnswer: { "@type": "Answer", text: "Teóricamente sí. En la práctica requiere tiempo, conocimiento del procedimiento español y una verificación minuciosa de la documentación en cada etapa: desde la compra en Alemania hasta la matriculación definitiva en la DGT." } },
    ],
  };

  /* ── Schema.org FAQ — EN ── */
  const schemaFaqEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Can a car be registered without a CoC?", acceptedAnswer: { "@type": "Answer", text: "Sometimes yes, but a ficha reducida is then required — a technical document prepared by a specialist. Without prior verification it is not possible to promise a straightforward registration. We check for the CoC before purchasing the vehicle." } },
      { "@type": "Question", name: "What is IEDMT and does it always have to be paid?", acceptedAnswer: { "@type": "Answer", text: "IEDMT is Spain's vehicle registration tax. Whether it is payable depends on the vehicle's parameters: CO₂ emission level, engine type and the specific situation. It is calculated individually before purchase." } },
      { "@type": "Question", name: "What matters more — the car price or the documents?", acceptedAnswer: { "@type": "Answer", text: "Both factors matter. A cheap car with problematic documentation often ends up more expensive than a correctly specified car with a clean document set — due to repeat ITV visits, modifications and delays." } },
      { "@type": "Question", name: "How long does DGT registration take?", acceptedAnswer: { "@type": "Answer", text: "With a complete document set — typically 2–5 days. If there were errors in the contract, CoC or taxes at earlier stages, the process takes longer." } },
      { "@type": "Question", name: "Can everything be handled independently?", acceptedAnswer: { "@type": "Answer", text: "Theoretically yes. In practice it requires time, an understanding of the Spanish procedure and careful verification of documents at every stage: from purchase in Germany to final registration with the DGT." } },
    ],
  };

  const schemaFaq = locale === "es" ? schemaFaqEs : locale === "en" ? schemaFaqEn : schemaFaqRu;

  /* ══════════════════════════════════════════════════════════
     RU VERSION
  ══════════════════════════════════════════════════════════ */
  if (locale === "ru") {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning translate="no">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/nalogi.png" alt="Налоги и документы при оформлении авто из Германии в Испании" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Налоги и документы при оформлении авто из Германии в Испании
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Разбираем каждый обязательный платёж и документ — от покупки в Германии до испанских номеров. Проверяем документы и рассчитываем налоги до оплаты автомобиля.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Какие документы нужны для покупки автомобиля в Германии</h2>
            <p>Для покупки автомобиля в Германии и последующего оформления в Испании важно с самого начала собрать правильный пакет документов. Ошибка на этапе покупки почти всегда приводит к задержкам на ITV или к проблемам при регистрации в DGT.</p>
            <br />
            <div className="space-y-3 mb-5">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-1">Покупка у дилера или через аукцион</p>
                <p className="text-sm">Основной документ — <strong>factura</strong> (счёт-фактура). Должна содержать данные продавца, покупателя, автомобиля и цены сделки.</p>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-1">Покупка у частного владельца</p>
                <p className="text-sm">Нужен <strong>договор купли-продажи</strong> с полными данными обеих сторон, автомобиля и суммы сделки.</p>
              </div>
            </div>
            <p className="mb-4">В обоих случаях обязательны оригинальные документы автомобиля из Германии: регистрационные документы и подтверждение права собственности. Все данные по VIN, модели, дате первой регистрации и владельцу должны совпадать.</p>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-2">⚠️ CoC — ключевой документ</p>
              <p className="text-sm">Отдельное значение имеет <strong>CoC (Certificado de Conformidad Europeo)</strong> — документ по homologación. Если CoC отсутствует, для Испании часто требуется <strong>ficha reducida</strong>. Именно здесь многие покупатели впервые сталкиваются с тем, что «машина куплена правильно, а на испанской стороне всё встало».</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Какие документы нужны для регистрации авто из Германии в Испании</h2>
            <p className="mb-4">Для испанской регистрации важен не один документ, а целая цепочка. Отсутствие даже одного не всегда делает регистрацию невозможной — но почти всегда делает её медленной, дороже и нервнее.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[{ icon: "📄", text: "Factura или договор купли-продажи" }, { icon: "🇩🇪", text: "Оригинальные документы из Германии" }, { icon: "✅", text: "CoC или ficha reducida" }, { icon: "🪪", text: "DNI или NIE владельца в Испании" }, { icon: "📍", text: "Подтверждение адреса (если требуется)" }, { icon: "🔧", text: "Испанская ficha técnica после ITV" }, { icon: "💶", text: "Подтверждение оплаты налогов" }, { icon: "🇪🇸", text: "Пакет для регистрации в DGT" }].map((item) => (
                <div key={item.text} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-1">Ключевой момент</p>
              <p className="text-sm">Пакет документов нужно проверять ещё <strong>до оплаты автомобиля</strong>, а не после его прибытия в Испанию.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-2xl border bg-[#F6F8FC] p-6">
            <h2 className="text-xl font-bold text-[#0B3B73] mb-3">Сколько стоят налоги и регистрация?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>Таможенных пошлин между Германией и Испанией нет — обе страны в ЕС. При регистрации в Испании обязательны IEDMT, ITV и сбор DGT. Полный расчёт всех статей расходов с цифрами — на отдельной странице.</p>
            <Link href="/ru/avto-iz-germanii/skolko-stoit" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">Сколько стоит авто из Германии →</Link>
          </div>
        </section>

        <section className="mt-10">
          <details className="group/iedmt rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Что такое IEDMT и от чего он зависит</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/iedmt:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">IEDMT — испанский регистрационный налог при первой постановке автомобиля на учёт. Размер зависит от уровня выбросов CO₂, типа двигателя и конкретной ситуации.</p>
              <p className="mb-5">Два внешне похожих автомобиля могут дать разный налог из-за двигателя, выбросов, года выпуска, версии и документов по homologación. Именно поэтому нельзя считать IEDMT «примерно как у похожей машины» — только индивидуальный расчёт.</p>
              <p className="font-semibold text-[#0B3B73] mb-3">Ориентировочные ставки по CO₂:</p>
              <div className="space-y-2 mb-5">
                {[{ range: "до 120 г/км", rate: "0 %", color: "bg-green-100 text-green-800" }, { range: "121–159 г/км", rate: "4,75 %", color: "bg-yellow-100 text-yellow-800" }, { range: "160–199 г/км", rate: "9,75 %", color: "bg-orange-100 text-orange-800" }, { range: "более 200 г/км", rate: "14,75 %", color: "bg-red-100 text-red-800" }].map((row) => (
                  <div key={row.range} className="flex items-center justify-between rounded-xl border bg-[#F6F8FC] px-4 py-2">
                    <span className="text-sm">{row.range}</span>
                    <span className={`rounded-full px-3 py-0.5 text-sm font-bold ${row.color}`}>{row.rate}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-[#F6F8FC] border p-4">
                <p className="text-sm text-gray-700">Точную сумму IEDMT нужно считать <strong>до покупки</strong>, а не после доставки автомобиля в Испанию. Мы рассчитываем по реальным параметрам конкретного автомобиля.</p>
              </div>
            </div>
          </details>
        </section>

        <section className="mt-4">
          <details className="group/coc rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">CoC, ficha reducida и почему без них всё может остановиться</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/coc:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">Один из самых недооценённых вопросов при ввозе автомобиля — документ по homologación. Покупатель видит машину, цену и историю, но не всегда понимает, как автомобиль будет оформляться в Испании.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                  <p className="font-bold text-[#0B3B73] mb-2">✅ Есть CoC</p>
                  <p className="text-sm">Процедура идёт проще. CoC подтверждает европейское соответствие автомобиля и позволяет легче пройти подготовку к ITV.</p>
                </div>
                <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                  <p className="font-bold text-[#0B3B73] mb-2">⚠️ Нет CoC</p>
                  <p className="text-sm">Часто требуется <strong>ficha reducida</strong> — технический документ, подготавливаемый специалистом для испанской процедуры оформления.</p>
                </div>
              </div>
              <p className="mb-4">Для старых, редких или нестандартных автомобилей вопрос homologación может быть сложнее. Проверку CoC нужно делать <strong>ещё до внесения денег за автомобиль</strong>.</p>
              <div className="rounded-2xl bg-[#0B3B73] text-white p-4 text-sm">Дешёвая машина без правильных документов часто оказывается дороже правильного автомобиля с чистым пакетом — из-за повторных визитов, доработок и задержек.</div>
            </div>
          </details>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">ITV для автомобиля из Германии: что проверяют и что нужно принести</h2>
            <p className="mb-4">Перед регистрацией в DGT автомобиль должен пройти испанскую ITV и получить <strong>ficha técnica española</strong>. Без этого этапа постановка на учёт невозможна.</p>
            <p className="mb-4">Для ITV важны не только техническое состояние, но и пакет документов: оригинальные документы из Германии, подтверждение homologación (CoC или ficha reducida) и документы по покупке.</p>
            <p className="font-semibold text-[#0B3B73] mb-3">Проблемы на ITV чаще всего возникают из-за:</p>
            <div className="space-y-2 mb-5">
              {["Отсутствует CoC — нужна ficha reducida", "Документы заполнены неполно или с ошибками", "Несоответствие по VIN или версии автомобиля", "Особенности комплектации, не отражённые в документах"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-sm text-gray-700">Финальную техническую проверку автомобиля перед ITV мы проводим на собственном СТО в Аликанте. По желанию клиента — передача также проходит на нашей площадке. → <Link href="/ru/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Авто из Германии в Аликанте</Link></p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Регистрация в DGT: какой пакет нужен на финальном этапе</h2>
            <p className="mb-4">Когда автомобиль доставлен, подготовлен и прошёл ITV — остаётся финальный этап. Регистрация в DGT — это итог всей цепочки. Если на ранних этапах были ошибки, они почти всегда всплывают именно здесь.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {["Подтверждение личности владельца (DNI / NIE)", "Пакет документов на автомобиль", "Испанская ficha técnica после ITV", "Подтверждение оплаты или освобождения от налогов", "Уплата пошлины DGT за регистрацию"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-[#0B3B73] font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-4">
              <p className="text-sm text-gray-700">При полном комплекте документов регистрация в DGT обычно занимает <strong>2–5 дней</strong>. Подробнее → <Link href="/ru/avto-iz-germanii/registraciya-dgt" className="text-[#0B3B73] underline font-semibold">Регистрация авто в DGT в Испании</Link></p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Частые ошибки с налогами и документами</h2>
            <div className="space-y-3">
              {["Покупать автомобиль, не проверив заранее комплект документов для Испании.", "Думать, что любой немецкий пакет документов автоматически подходит для испанской регистрации.", "Не проверять CoC и вопрос ficha reducida до сделки.", "Считать IEDMT «примерно как у похожей машины», а не по реальным параметрам.", "Оформлять всё в спешке после прибытия автомобиля, когда изменить что-то уже дороже и сложнее."].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-sm">{i + 1}</span>
                  <p className="text-sm pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Получить проверку документов и расчёт налогов</h2>
            <p className="text-sm text-gray-500 mb-5">Проверка бесплатная и ни к чему вас не обязывает. Обычно отвечаем в течение одного рабочего дня.</p>
            <p className="mb-3">Для предварительной проверки достаточно указать:</p>
            <ul className="space-y-1 mb-6">
              {["марку и модель автомобиля", "год выпуска", "двигатель или VIN", "цену покупки", "имеющийся пакет документов"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-[#0B3B73] flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-6">Проверим, чего не хватает для Испании, рассчитаем налоги и скажем, можно ли довести автомобиль до испанских номеров без лишних рисков.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={requestHref} className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Получить проверку документов</Link>
              <Link href="/ru/avto-iz-germanii" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Авто из Германии в Испанию →</Link>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <p className="text-base font-semibold text-[#0B3B73] mb-3">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ href: "/ru/avto-iz-germanii/skolko-stoit", label: "Сколько стоит авто из Германии" }, { href: "/ru/avto-iz-germanii/registraciya-dgt", label: "Регистрация авто в DGT" }, { href: "/ru/avto-iz-germanii/alicante", label: "Авто из Германии в Аликанте" }, { href: "/ru/avto-iz-germanii", label: "Авто из Германии в Испанию →" }].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Частые вопросы</h2>
          <div className="space-y-3">
            {[{ q: "Можно ли оформить автомобиль без CoC?", a: "Иногда да, но тогда требуется ficha reducida. Без предварительной проверки обещать простое оформление нельзя. Проверяем наличие CoC до покупки." }, { q: "Что такое IEDMT и нужно ли его всегда платить?", a: "IEDMT — регистрационный налог в Испании. Обязанность зависит от параметров автомобиля: уровня CO₂, типа двигателя и конкретной ситуации. Рассчитывается индивидуально до покупки." }, { q: "Что важнее — цена автомобиля или документы?", a: "Оба фактора важны. Дешёвая машина с проблемными документами часто оказывается дороже правильного автомобиля с чистым пакетом." }, { q: "Сколько занимает регистрация в DGT?", a: "При полном комплекте документов — обычно 2–5 дней. Если на предыдущих этапах были ошибки — процесс затягивается." }, { q: "Можно ли всё оформить самостоятельно?", a: "Теоретически да. Практически это требует времени, понимания испанской процедуры и внимательной проверки документов на каждом этапе." }].map((item, i) => (
              <details key={i} className="group rounded-2xl border bg-white shadow-sm">
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open:rotate-180"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-2xl bg-[#F6F8FC] border px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base text-gray-700">Ответы на другие вопросы найдёте здесь</p>
            <Link href="/ru/faq" className="flex-shrink-0 rounded-2xl border-2 border-[#0B3B73] px-6 py-3 font-bold text-[#0B3B73] transition hover:bg-white whitespace-nowrap">Посмотреть FAQ</Link>
          </div>
        </section>
      </main>
    );
  }

  /* ══════════════════════════════════════════════════════════
     ES VERSION
  ══════════════════════════════════════════════════════════ */
  if (locale === "es") {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/nalogi.png" alt="Impuestos y documentos al importar un coche de Alemania a España" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Impuestos y documentos al importar un coche de Alemania a España
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Analizamos cada pago e impuesto obligatorio — desde la compra en Alemania hasta la matrícula española. Verificamos la documentación y calculamos los impuestos antes del pago del vehículo.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Qué documentos se necesitan para comprar un coche en Alemania</h2>
            <p>Para comprar un vehículo en Alemania y posteriormente matricularlo en España, es fundamental reunir la documentación correcta desde el principio. Un error en la fase de compra casi siempre provoca retrasos en la ITV o problemas en la DGT.</p>
            <br />
            <div className="space-y-3 mb-5">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-1">Compra a través de concesionario o subasta</p>
                <p className="text-sm">El documento principal es la <strong>factura</strong>. Debe contener los datos del vendedor, del comprador, del vehículo y del precio de la operación.</p>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-1">Compra a un particular</p>
                <p className="text-sm">Se necesita un <strong>contrato de compraventa</strong> con los datos completos de ambas partes, del vehículo y del importe de la operación.</p>
              </div>
            </div>
            <p className="mb-4">En ambos casos son obligatorios los documentos originales del vehículo procedentes de Alemania: documentos de matriculación y justificante de titularidad. Todos los datos del VIN, modelo, fecha de primera matriculación y propietario deben coincidir.</p>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-2">⚠️ El CoC — documento clave</p>
              <p className="text-sm">Especial importancia tiene el <strong>CoC (Certificado de Conformidad Europeo)</strong> — documento de homologación. Si no existe el CoC, para España suele requerirse la <strong>ficha reducida</strong>. Es aquí donde muchos compradores se encuentran por primera vez con la situación de que «el coche se compró correctamente, pero en España todo se paró».</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Qué documentos se necesitan para matricular un coche de Alemania en España</h2>
            <p className="mb-4">Para la matriculación española no basta con un solo documento, sino que se necesita toda una cadena. La falta de uno solo no siempre hace imposible la matriculación, pero casi siempre la hace más lenta, más cara y más estresante.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[{ icon: "📄", text: "Factura o contrato de compraventa" }, { icon: "🇩🇪", text: "Documentos originales de Alemania" }, { icon: "✅", text: "CoC o ficha reducida" }, { icon: "🪪", text: "DNI o NIE del titular en España" }, { icon: "📍", text: "Justificante de domicilio (si se requiere)" }, { icon: "🔧", text: "Ficha técnica española tras la ITV" }, { icon: "💶", text: "Justificante de pago de impuestos" }, { icon: "🇪🇸", text: "Expediente para la matriculación en DGT" }].map((item) => (
                <div key={item.text} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-1">Punto clave</p>
              <p className="text-sm">La documentación debe verificarse <strong>antes del pago del vehículo</strong>, no después de su llegada a España.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-2xl border bg-[#F6F8FC] p-6">
            <h2 className="text-xl font-bold text-[#0B3B73] mb-3">¿Cuánto cuestan los impuestos y la matriculación?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>No existen aranceles aduaneros entre Alemania y España — ambos países pertenecen a la UE. Al matricular en España son obligatorios el IEDMT, la ITV y la tasa de la DGT. El desglose completo de todos los costes con cifras está en una página independiente.</p>
            <Link href="/es/avto-iz-germanii/skolko-stoit" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">¿Cuánto cuesta importar un coche de Alemania? →</Link>
          </div>
        </section>

        <section className="mt-10">
          <details className="group/iedmt rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Qué es el IEDMT y de qué depende</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/iedmt:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">El IEDMT es el impuesto de matriculación español que se aplica la primera vez que se registra un vehículo. Su importe depende del nivel de emisiones de CO₂, el tipo de motor y la situación concreta.</p>
              <p className="mb-5">Dos vehículos aparentemente similares pueden generar impuestos diferentes en función del motor, las emisiones, el año de fabricación, la versión y la documentación de homologación. Por eso no es posible calcular el IEDMT «aproximadamente como el de un coche similar» — solo cabe un cálculo individualizado.</p>
              <p className="font-semibold text-[#0B3B73] mb-3">Tipos orientativos según emisiones de CO₂:</p>
              <div className="space-y-2 mb-5">
                {[{ range: "hasta 120 g/km", rate: "0 %", color: "bg-green-100 text-green-800" }, { range: "121–159 g/km", rate: "4,75 %", color: "bg-yellow-100 text-yellow-800" }, { range: "160–199 g/km", rate: "9,75 %", color: "bg-orange-100 text-orange-800" }, { range: "más de 200 g/km", rate: "14,75 %", color: "bg-red-100 text-red-800" }].map((row) => (
                  <div key={row.range} className="flex items-center justify-between rounded-xl border bg-[#F6F8FC] px-4 py-2">
                    <span className="text-sm">{row.range}</span>
                    <span className={`rounded-full px-3 py-0.5 text-sm font-bold ${row.color}`}>{row.rate}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-[#F6F8FC] border p-4">
                <p className="text-sm text-gray-700">El importe exacto del IEDMT debe calcularse <strong>antes de la compra</strong>, no después de la entrega del vehículo en España. Lo calculamos según los parámetros reales del vehículo concreto.</p>
              </div>
            </div>
          </details>
        </section>

        <section className="mt-4">
          <details className="group/coc rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">CoC, ficha reducida y por qué sin ellos todo puede detenerse</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/coc:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">Uno de los aspectos más subestimados en la importación de un vehículo es el documento de homologación. El comprador ve el coche, el precio y el historial, pero no siempre comprende cómo se va a tramitar el vehículo en España.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                  <p className="font-bold text-[#0B3B73] mb-2">✅ Con CoC</p>
                  <p className="text-sm">El trámite es más sencillo. El CoC acredita la conformidad europea del vehículo y facilita la preparación para la ITV.</p>
                </div>
                <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                  <p className="font-bold text-[#0B3B73] mb-2">⚠️ Sin CoC</p>
                  <p className="text-sm">Suele requerirse la <strong>ficha reducida</strong> — un documento técnico elaborado por un especialista para el procedimiento de tramitación español.</p>
                </div>
              </div>
              <p className="mb-4">Para vehículos antiguos, raros o no estándar, la cuestión de la homologación puede ser más compleja. La verificación del CoC debe realizarse <strong>antes de abonar el importe del vehículo</strong>.</p>
              <div className="rounded-2xl bg-[#0B3B73] text-white p-4 text-sm">Un coche barato sin la documentación correcta suele resultar más caro que un vehículo adecuado con documentación en regla, debido a visitas adicionales a la ITV, modificaciones y retrasos.</div>
            </div>
          </details>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">ITV para un coche de Alemania: qué se comprueba y qué hay que llevar</h2>
            <p className="mb-4">Antes de la matriculación en la DGT, el vehículo debe superar la ITV española y obtener la <strong>ficha técnica española</strong>. Sin esta etapa, el registro no es posible.</p>
            <p className="mb-4">Para la ITV no solo importa el estado técnico, sino también la documentación: los documentos originales de Alemania, la acreditación de homologación (CoC o ficha reducida) y los documentos de compra.</p>
            <p className="font-semibold text-[#0B3B73] mb-3">Los problemas en la ITV se deben con mayor frecuencia a:</p>
            <div className="space-y-2 mb-5">
              {["No hay CoC — se necesita ficha reducida", "Documentación incompleta o con errores", "Discrepancia en el VIN o la versión del vehículo", "Características del equipamiento no reflejadas en la documentación"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-sm text-gray-700">La revisión técnica final del vehículo antes de la ITV la realizamos en nuestro propio taller en Alicante. Si el cliente lo desea, la entrega también se efectúa en nuestras instalaciones. → <Link href="/es/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Coches de Alemania en Alicante</Link></p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Matriculación en la DGT: qué documentación se necesita en la etapa final</h2>
            <p className="mb-4">Una vez que el vehículo ha sido entregado, preparado y ha superado la ITV, queda la etapa final. La matriculación en la DGT es el resultado de toda la cadena. Si en etapas anteriores hubo errores, estos casi siempre afloran precisamente aquí.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {["Acreditación de identidad del titular (DNI / NIE)", "Expediente de documentación del vehículo", "Ficha técnica española tras la ITV", "Justificante de pago o exención de impuestos", "Abono de la tasa de matriculación de la DGT"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-[#0B3B73] font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-4">
              <p className="text-sm text-gray-700">Con la documentación completa, la matriculación en la DGT suele tardar <strong>entre 2 y 5 días</strong>. Más información → <Link href="/es/avto-iz-germanii/registraciya-dgt" className="text-[#0B3B73] underline font-semibold">Matriculación de coche en España a través de la DGT</Link></p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Errores frecuentes con impuestos y documentación</h2>
            <div className="space-y-3">
              {["Comprar el vehículo sin haber verificado previamente el expediente documental requerido en España.", "Suponer que cualquier documentación alemana es automáticamente válida para la matriculación española.", "No verificar el CoC ni la necesidad de ficha reducida antes de formalizar la operación.", "Calcular el IEDMT «aproximadamente como el de un coche similar» en lugar de hacerlo con los parámetros reales.", "Gestionar todo con prisas tras la llegada del vehículo, cuando corregir errores ya es más caro y complicado."].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-sm">{i + 1}</span>
                  <p className="text-sm pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Solicitar verificación de documentos y cálculo de impuestos</h2>
            <p className="text-sm text-gray-500 mb-5">La verificación es gratuita y sin compromiso. Respondemos habitualmente en el plazo de un día hábil.</p>
            <p className="mb-3">Para la verificación previa es suficiente indicar:</p>
            <ul className="space-y-1 mb-6">
              {["marca y modelo del vehículo", "año de fabricación", "motor o VIN", "precio de compra", "documentación disponible"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-[#0B3B73] flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-6">Verificaremos qué falta para España, calcularemos los impuestos y le indicaremos si es posible completar la matriculación sin riesgos innecesarios.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={requestHref} className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Solicitar verificación de documentos</Link>
              <Link href="/es/avto-iz-germanii" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Importar coche de Alemania →</Link>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <p className="text-base font-semibold text-[#0B3B73] mb-3">Ver también:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ href: "/es/avto-iz-germanii/skolko-stoit", label: "¿Cuánto cuesta importar un coche de Alemania?" }, { href: "/es/avto-iz-germanii/registraciya-dgt", label: "Matriculación en la DGT" }, { href: "/es/avto-iz-germanii/alicante", label: "Coches de Alemania en Alicante" }, { href: "/es/avto-iz-germanii", label: "Importar coche de Alemania a España →" }].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[{ q: "¿Se puede matricular un coche sin CoC?", a: "A veces sí, pero entonces se requiere una ficha reducida. Sin una verificación previa no se puede garantizar una tramitación sencilla. Verificamos el CoC antes de la compra." }, { q: "¿Qué es el IEDMT y hay que pagarlo siempre?", a: "El IEDMT es el impuesto de matriculación en España. La obligación de pagarlo depende de las características del vehículo: nivel de CO₂, tipo de motor y la situación concreta. Se calcula de forma individualizada." }, { q: "¿Qué es más importante, el precio o los documentos?", a: "Ambos factores son importantes. Un coche barato con documentación problemática suele resultar más caro que un vehículo correcto con documentación en regla." }, { q: "¿Cuánto tarda la matriculación en la DGT?", a: "Con la documentación completa, normalmente entre 2 y 5 días. Si en etapas anteriores hubo errores, el proceso se alarga." }, { q: "¿Se puede gestionar todo por cuenta propia?", a: "Teóricamente sí. En la práctica requiere tiempo, conocimiento del procedimiento español y una verificación minuciosa en cada etapa." }].map((item, i) => (
              <details key={i} className="group rounded-2xl border bg-white shadow-sm">
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open:rotate-180"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-2xl bg-[#F6F8FC] border px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base text-gray-700">Encontrará respuestas a otras preguntas aquí</p>
            <Link href="/es/faq" className="flex-shrink-0 rounded-2xl border-2 border-[#0B3B73] px-6 py-3 font-bold text-[#0B3B73] transition hover:bg-white whitespace-nowrap">Ver FAQ</Link>
          </div>
        </section>
      </main>
    );
  }

  /* ══════════════════════════════════════════════════════════
     EN VERSION
  ══════════════════════════════════════════════════════════ */
  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
        <img src="/icons/nalogi.png" alt="Taxes and documents when importing a car from Germany to Spain" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
          <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            Taxes and documents when importing a car from Germany to Spain
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
            We break down every mandatory payment and document — from purchase in Germany to Spanish plates. We verify documents and calculate taxes before you pay for the vehicle.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">What documents are needed to buy a car in Germany</h2>
          <p>To purchase a car in Germany and subsequently register it in Spain, it is essential to assemble the correct document set from the very beginning. A mistake at the purchase stage almost always leads to delays at the ITV or problems with DGT registration.</p>
          <br />
          <div className="space-y-3 mb-5">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <p className="font-bold text-[#0B3B73] mb-1">Purchase from a dealer or at auction</p>
              <p className="text-sm">The main document is the <strong>invoice (factura)</strong>. It must contain the details of the seller, buyer, vehicle and transaction price.</p>
            </div>
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <p className="font-bold text-[#0B3B73] mb-1">Purchase from a private seller</p>
              <p className="text-sm">A <strong>purchase contract</strong> is required, with the full details of both parties, the vehicle and the transaction amount.</p>
            </div>
          </div>
          <p className="mb-4">In both cases, the original German vehicle documents are mandatory: registration documents and proof of ownership. All details regarding VIN, model, first registration date and owner must match.</p>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="font-bold text-[#0B3B73] mb-2">⚠️ CoC — the key document</p>
            <p className="text-sm">Of particular importance is the <strong>CoC (Certificate of Conformity)</strong> — the type-approval document. If the CoC is missing, Spain often requires a <strong>ficha reducida</strong>. This is where many buyers first encounter the situation where «the car was purchased correctly, but everything has come to a standstill on the Spanish side».</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">What documents are needed to register a car from Germany in Spain</h2>
          <p className="mb-4">Spanish registration requires not just one document but an entire chain. The absence of even one does not always make registration impossible — but it almost always makes it slower, more expensive and more stressful.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[{ icon: "📄", text: "Invoice or purchase contract" }, { icon: "🇩🇪", text: "Original German documents" }, { icon: "✅", text: "CoC or ficha reducida" }, { icon: "🪪", text: "Owner's DNI or NIE in Spain" }, { icon: "📍", text: "Proof of address (if required)" }, { icon: "🔧", text: "Spanish ficha técnica after ITV" }, { icon: "💶", text: "Proof of tax payment" }, { icon: "🇪🇸", text: "Registration pack for DGT" }].map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="font-bold text-[#0B3B73] mb-1">Key point</p>
            <p className="text-sm">The document set must be verified <strong>before paying for the vehicle</strong>, not after it arrives in Spain.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="rounded-2xl border bg-[#F6F8FC] p-6">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-3">How much do taxes and registration cost?</h2>
          <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>There are no customs duties between Germany and Spain — both countries are in the EU. When registering in Spain, IEDMT, ITV and the DGT fee are mandatory. The full breakdown of all costs with figures is on a separate page.</p>
          <Link href="/en/avto-iz-germanii/skolko-stoit" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">How much does a car from Germany cost? →</Link>
        </div>
      </section>

      <section className="mt-10">
        <details className="group/iedmt rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">What is IEDMT and what does it depend on</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/iedmt:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </summary>
          <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <p className="mb-4">IEDMT is the Spanish vehicle registration tax applied when a car is first registered. Its amount depends on CO₂ emission levels, the engine type and the specific situation.</p>
            <p className="mb-5">Two outwardly similar cars can result in different taxes due to the engine, emissions, model year, version and type-approval documents. This is why IEDMT cannot be estimated «roughly like a similar car» — only an individual calculation will do.</p>
            <p className="font-semibold text-[#0B3B73] mb-3">Indicative rates by CO₂ emissions:</p>
            <div className="space-y-2 mb-5">
              {[{ range: "up to 120 g/km", rate: "0 %", color: "bg-green-100 text-green-800" }, { range: "121–159 g/km", rate: "4.75 %", color: "bg-yellow-100 text-yellow-800" }, { range: "160–199 g/km", rate: "9.75 %", color: "bg-orange-100 text-orange-800" }, { range: "over 200 g/km", rate: "14.75 %", color: "bg-red-100 text-red-800" }].map((row) => (
                <div key={row.range} className="flex items-center justify-between rounded-xl border bg-[#F6F8FC] px-4 py-2">
                  <span className="text-sm">{row.range}</span>
                  <span className={`rounded-full px-3 py-0.5 text-sm font-bold ${row.color}`}>{row.rate}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-4">
              <p className="text-sm text-gray-700">The exact IEDMT amount must be calculated <strong>before purchase</strong>, not after the vehicle has been delivered to Spain. We calculate it using the actual parameters of the specific vehicle.</p>
            </div>
          </div>
        </details>
      </section>

      <section className="mt-4">
        <details className="group/coc rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">CoC, ficha reducida and why everything can grind to a halt without them</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/coc:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </summary>
          <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <p className="mb-4">One of the most underestimated issues when importing a car is the type-approval document. The buyer sees the car, the price and the history, but does not always understand how the vehicle will be processed in Spain.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                <p className="font-bold text-[#0B3B73] mb-2">✅ CoC present</p>
                <p className="text-sm">The process is simpler. The CoC confirms the vehicle's European compliance and makes it easier to prepare for the ITV inspection.</p>
              </div>
              <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                <p className="font-bold text-[#0B3B73] mb-2">⚠️ No CoC</p>
                <p className="text-sm">A <strong>ficha reducida</strong> is often required — a technical document prepared by a specialist for the Spanish registration procedure.</p>
              </div>
            </div>
            <p className="mb-4">For old, rare or non-standard vehicles, the type-approval question can be more complex. The CoC check must be carried out <strong>before paying for the vehicle</strong>.</p>
            <div className="rounded-2xl bg-[#0B3B73] text-white p-4 text-sm">A cheap car without the correct documents often ends up more expensive than a properly specified car with a clean document set — due to repeat ITV visits, modifications and delays.</div>
          </div>
        </details>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">ITV for a car from Germany: what is checked and what to bring</h2>
          <p className="mb-4">Before DGT registration, the car must pass the Spanish ITV inspection and obtain the <strong>ficha técnica española</strong>. Registration is not possible without this stage.</p>
          <p className="mb-4">For the ITV, not only the technical condition matters but also the document set: original German documents, type-approval confirmation (CoC or ficha reducida) and purchase documents.</p>
          <p className="font-semibold text-[#0B3B73] mb-3">ITV problems most commonly arise from:</p>
          <div className="space-y-2 mb-5">
            {["No CoC present — ficha reducida required", "Incomplete or incorrect documentation", "VIN or vehicle version mismatch", "Equipment features not reflected in the documents"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="text-sm text-gray-700">The final technical inspection of the vehicle prior to ITV is carried out at our own workshop in Alicante. At the client's request, handover also takes place at our premises. → <Link href="/en/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Cars from Germany to Alicante</Link></p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">DGT registration: what documents are needed at the final stage</h2>
          <p className="mb-4">Once the car has been delivered, prepared and passed the ITV, only the final stage remains. DGT registration is the conclusion of the entire chain. Any errors made at earlier stages almost always surface here.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {["Owner identity document (DNI / NIE)", "Vehicle document set", "Spanish ficha técnica after ITV", "Proof of tax payment or exemption", "Payment of DGT registration fee"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                <span className="text-[#0B3B73] font-bold flex-shrink-0">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F6F8FC] border p-4">
            <p className="text-sm text-gray-700">With a complete document set, DGT registration usually takes <strong>2–5 days</strong>. More details → <Link href="/en/avto-iz-germanii/registraciya-dgt" className="text-[#0B3B73] underline font-semibold">Car registration in Spain via DGT</Link></p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Common mistakes with taxes and documentation</h2>
          <div className="space-y-3">
            {["Buying a car without first verifying the document set required for Spain.", "Assuming that any German document pack automatically meets Spanish registration requirements.", "Failing to check the CoC and the ficha reducida question before the transaction.", "Estimating IEDMT 'roughly like a similar car' rather than calculating it from the actual parameters.", "Rushing everything after the car arrives, when correcting mistakes is already more expensive and complicated."].map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-sm">{i + 1}</span>
                <p className="text-sm pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Request document check and tax calculation</h2>
          <p className="text-sm text-gray-500 mb-5">The check is free and without obligation. We typically respond within one business day.</p>
          <p className="mb-3">For a preliminary check, please provide:</p>
          <ul className="space-y-1 mb-6">
            {["car make and model", "year of manufacture", "engine or VIN", "purchase price", "available document set"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-[#0B3B73] flex-shrink-0" />{item}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mb-6">We will identify what is missing for Spain, calculate the taxes and advise whether the vehicle can be brought to Spanish registration without unnecessary risk.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={requestHref} className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Request document check</Link>
            <Link href="/en/avto-iz-germanii" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Import a car from Germany →</Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <p className="text-base font-semibold text-[#0B3B73] mb-3">Read also:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[{ href: "/en/avto-iz-germanii/skolko-stoit", label: "How much does a car from Germany cost?" }, { href: "/en/avto-iz-germanii/registraciya-dgt", label: "Car registration via DGT" }, { href: "/en/avto-iz-germanii/alicante", label: "Cars from Germany to Alicante" }, { href: "/en/avto-iz-germanii", label: "Import a car from Germany to Spain →" }].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Frequently asked questions</h2>
        <div className="space-y-3">
          {[{ q: "Can a car be registered without a CoC?", a: "Sometimes yes, but a ficha reducida is then required. Without prior verification it is not possible to promise a straightforward registration. We check for the CoC before purchase." }, { q: "What is IEDMT and does it always have to be paid?", a: "IEDMT is Spain's vehicle registration tax. Whether it is payable depends on the vehicle's CO₂ emissions, engine type and the specific situation. It is calculated individually before purchase." }, { q: "What matters more — the car price or the documents?", a: "Both factors matter. A cheap car with problematic documentation often ends up more expensive than a correctly specified car with a clean document set." }, { q: "How long does DGT registration take?", a: "With a complete document set — typically 2–5 days. If there were errors at earlier stages, the process takes longer." }, { q: "Can everything be handled independently?", a: "Theoretically yes. In practice it requires time, an understanding of the Spanish procedure and careful verification of documents at every stage." }].map((item, i) => (
            <details key={i} className="group rounded-2xl border bg-white shadow-sm">
              <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open:rotate-180"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="rounded-2xl bg-[#F6F8FC] border px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-gray-700">Find answers to other questions here</p>
          <Link href="/en/faq" className="flex-shrink-0 rounded-2xl border-2 border-[#0B3B73] px-6 py-3 font-bold text-[#0B3B73] transition hover:bg-white whitespace-nowrap">View FAQ</Link>
        </div>
      </section>
    </main>
  );
}
