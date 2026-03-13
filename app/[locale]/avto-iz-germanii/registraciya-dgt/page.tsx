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
  const pathname = `/${locale}/avto-iz-germanii/registraciya-dgt`;

  const titles: Record<string, string> = {
    ru: "Регистрация авто из Германии в Испании через DGT — документы, налоги и сроки",
    es: "Matriculación de coche de Alemania en España por DGT — documentos, impuestos y plazos | AutoexpertEU",
    en: "Car registration from Germany in Spain via DGT — documents, taxes and timelines | AutoexpertEU",
  };
  const descriptions: Record<string, string> = {
    ru: "Как проходит регистрация авто из Германии в Испании через DGT: документы, ITV, налог IEDMT, муниципальный налог, сроки и порядок получения испанских номеров.",
    es: "Cómo matricular un coche de Alemania en España: documentos, ITV, impuesto IEDMT, tasas DGT, plazos y matrícula española paso a paso.",
    en: "How to register a car from Germany in Spain via DGT: documents, ITV, IEDMT tax, municipal tax, timelines and Spanish number plates.",
  };

  return {
    title: titles[locale] ?? titles.ru,
    description: descriptions[locale] ?? descriptions.ru,
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        ru: `${baseUrl}/ru/avto-iz-germanii/registraciya-dgt`,
        es: `${baseUrl}/es/avto-iz-germanii/registraciya-dgt`,
        en: `${baseUrl}/en/avto-iz-germanii/registraciya-dgt`,
      },
    },
    openGraph: {
      title: titles[locale] ?? titles.ru,
      description: descriptions[locale] ?? descriptions.ru,
      url: `${baseUrl}${pathname}`,
      siteName: "AutoexpertEU",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: `${baseUrl}/icons/dgt.jpg`, width: 1200, height: 630 }],
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function RegistraciyaDgtPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "ru";
  const requestHref = `/${locale}/request`;

  /* ── Schema.org FAQ — RU ── */
  const schemaFaqRu = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Можно ли зарегистрировать авто из Германии в Испании самостоятельно?", acceptedAnswer: { "@type": "Answer", text: "Да, можно. Но нужно правильно собрать документы, пройти ITV, закрыть налоговую часть и подать комплект в DGT без ошибок. На практике сложность возникает в множестве мелких связок между этапами." } },
      { "@type": "Question", name: "Нужен ли CoC для регистрации в DGT?", acceptedAnswer: { "@type": "Answer", text: "Желательно — да. Если CoC нет, используется ficha reducida или решается вопрос homologación до ITV. Подробнее на странице «Налоги и документы»." } },
      { "@type": "Question", name: "Сколько стоит регистрация в DGT?", acceptedAnswer: { "@type": "Answer", text: "Пошлина DGT (tasa 1.1) составляет 99,77 € для большинства автомобилей. Но полная стоимость процедуры определяется прежде всего IEDMT, ITV и стоимостью подготовки документов." } },
      { "@type": "Question", name: "Можно ли ездить на машине до получения испанских номеров?", acceptedAnswer: { "@type": "Answer", text: "В обычном порядке — нет. Для отдельных случаев используется временная matrícula с placas verdes (tasa 1.4 — 20,61 €). Оформляется отдельным запросом при наличии готового пакета документов." } },
      { "@type": "Question", name: "Что происходит после одобрения DGT?", acceptedAnswer: { "@type": "Answer", text: "Автомобилю присваивается испанский регистрационный номер, владельцу выдаётся permiso de circulación, после чего изготавливаются и устанавливаются постоянные номерные знаки." } },
      { "@type": "Question", name: "Сколько времени занимает регистрация через DGT?", acceptedAnswer: { "@type": "Answer", text: "От прибытия автомобиля в Испанию до получения номеров — обычно 1–3 недели при полном и чистом пакете документов. Весь процесс включая доставку из Германии занимает 5–6 недель." } },
    ],
  };

  /* ── Schema.org FAQ — ES ── */
  const schemaFaqEs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Se puede matricular un coche de Alemania en España por cuenta propia?", acceptedAnswer: { "@type": "Answer", text: "Sí, es posible. Pero hay que reunir correctamente la documentación, pasar la ITV, resolver los impuestos y presentar el expediente en la DGT sin errores. En la práctica, la dificultad surge en la multitud de pequeñas conexiones entre las etapas." } },
      { "@type": "Question", name: "¿Es necesario el CoC para la matriculación en la DGT?", acceptedAnswer: { "@type": "Answer", text: "Es recomendable — sí. Si no hay CoC, se utiliza la ficha reducida o se resuelve la homologación antes de la ITV. Más información en la página «Impuestos y documentos»." } },
      { "@type": "Question", name: "¿Cuánto cuesta la matriculación en la DGT?", acceptedAnswer: { "@type": "Answer", text: "La tasa DGT (tasa 1.1) es de 99,77 € para la mayoría de los vehículos. Pero el coste total del proceso viene determinado principalmente por el IEDMT, la ITV y la preparación de la documentación." } },
      { "@type": "Question", name: "¿Se puede conducir el vehículo antes de obtener la matrícula española?", acceptedAnswer: { "@type": "Answer", text: "En el procedimiento habitual — no. Para casos concretos existe la matriculación temporal con placas verdes (tasa 1.4 — 20,61 €). Se tramita mediante solicitud independiente cuando el expediente principal está preparado." } },
      { "@type": "Question", name: "¿Qué ocurre después de la aprobación por la DGT?", acceptedAnswer: { "@type": "Answer", text: "Al vehículo se le asigna un número de matrícula español, al titular se le expide el permiso de circulación y, a continuación, se fabrican e instalan las placas definitivas." } },
      { "@type": "Question", name: "¿Cuánto tiempo tarda la matriculación a través de la DGT?", acceptedAnswer: { "@type": "Answer", text: "Desde la llegada del vehículo a España hasta la obtención de la matrícula — normalmente entre 1 y 3 semanas con un expediente completo y correcto. El proceso completo, incluido el transporte desde Alemania, dura entre 5 y 6 semanas." } },
    ],
  };

  /* ── Schema.org FAQ — EN ── */
  const schemaFaqEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Can a car from Germany be registered in Spain independently?", acceptedAnswer: { "@type": "Answer", text: "Yes, it can. But you need to assemble the correct documents, pass the ITV, settle the tax part and submit the full set to the DGT without errors. In practice, the difficulty lies in the many small links between the stages." } },
      { "@type": "Question", name: "Is a CoC required for DGT registration?", acceptedAnswer: { "@type": "Answer", text: "It is advisable — yes. If there is no CoC, a ficha reducida is used or the homologación issue is resolved before the ITV. More details on the Taxes and Documents page." } },
      { "@type": "Question", name: "How much does DGT registration cost?", acceptedAnswer: { "@type": "Answer", text: "The DGT fee (tasa 1.1) is €99.77 for most vehicles. However, the total cost of the procedure is determined primarily by the IEDMT, the ITV and document preparation costs." } },
      { "@type": "Question", name: "Can the car be driven before receiving Spanish plates?", acceptedAnswer: { "@type": "Answer", text: "Under normal circumstances — no. For specific cases, a temporary matrícula with placas verdes (tasa 1.4 — €20.61) is available. It is processed as a separate application once the main document set is ready." } },
      { "@type": "Question", name: "What happens after DGT approval?", acceptedAnswer: { "@type": "Answer", text: "The vehicle is assigned a Spanish registration number, the owner is issued a permiso de circulación, and then the permanent number plates are manufactured and fitted." } },
      { "@type": "Question", name: "How long does DGT registration take?", acceptedAnswer: { "@type": "Answer", text: "From the vehicle's arrival in Spain to receiving the plates — typically 1–3 weeks with a complete and clean document set. The full process including delivery from Germany takes 5–6 weeks." } },
    ],
  };

  const schemaFaq = locale === "es" ? schemaFaqEs : locale === "en" ? schemaFaqEn : schemaFaqRu;

  /* ══════════════════════════════════════════════════════════
     SHARED COMPONENTS (SVG chevron)
  ══════════════════════════════════════════════════════════ */
  const ChevronSvg = ({ size = 22 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  /* ══════════════════════════════════════════════════════════
     RU VERSION
  ══════════════════════════════════════════════════════════ */
  if (locale === "ru") {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning translate="no">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/dgt.jpg" alt="Регистрация авто из Германии в Испании через DGT — номерные знаки и permiso de circulación" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Регистрация авто из Германии в Испании через DGT
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Показываем, как поставить автомобиль из Германии на учёт в Испании: порядок этапов, документы, налоги, сроки и где чаще всего возникают задержки.
            </p>
          </div>
        </section>

        {/* БЛОК 1 */}
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Что означает регистрация автомобиля через DGT</h2>
            <p className="mb-4">Регистрация автомобиля из Германии в Испании — это не один отдельный шаг, а финальная связка нескольких обязательных процедур. Чтобы получить испанские номера и <strong>permiso de circulación</strong>, автомобиль должен пройти подготовку документов, получить испанскую ficha técnica ITV, подтвердить уплату налогов — и только после этого подаётся на оформление в DGT.</p>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-2">Главная ошибка</p>
              <p className="text-base leading-relaxed">Считать, что регистрация начинается и заканчивается в DGT. На самом деле DGT принимает уже подготовленное дело. Если до этого этапа не собраны документы, не пройдена ITV или не подтверждены налоги — подача задерживается или возвращается на доработку.</p>
            </div>
          </div>
        </section>

        {/* БЛОК 2 */}
        <section className="mt-10">
          <details className="group/steps rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Как проходит регистрация в DGT: пошаговый порядок</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/steps:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>Порядок регистрации лучше воспринимать как последовательную цепочку — каждый следующий этап зависит от предыдущего.</p>
              <div className="space-y-3">
                {[{ n: "1", title: "Документы из Германии", text: "Подтверждается право собственности, собираются оригинальные документы автомобиля." }, { n: "2", title: "ITV и ficha técnica", text: "Автомобиль проходит испанский технический осмотр и получает испанскую ficha técnica." }, { n: "3", title: "Налог IEDMT", text: "Оплачивается или подтверждается освобождение от Impuesto de Matriculación через Agencia Tributaria." }, { n: "4", title: "Муниципальный налог IVTM", text: "Оплачивается или подтверждается освобождение от impuesto de circulación по месту регистрации владельца." }, { n: "5", title: "Подача в DGT", text: "Полный комплект документов подаётся на первую регистрацию автомобиля в Испании." }, { n: "6", title: "Permiso de circulación", text: "После одобрения DGT выдаётся permiso de circulación и присваивается испанский номер." }, { n: "7", title: "Номерные знаки", text: "Изготавливаются и устанавливаются постоянные испанские номерные знаки." }].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 rounded-2xl border bg-[#F6F8FC] p-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0B3B73] text-white font-bold text-sm">{item.n}</span>
                    <div>
                      <p className="font-bold text-[#0B3B73] mb-0.5">{item.title}</p>
                      <p className="text-base text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* БЛОК 3 */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Какие документы нужны для регистрации</h2>
            <p className="mb-4">Для подачи в DGT нужен полный комплект — от подтверждения права собственности до налоговых документов. Отсутствие даже одного из них задерживает весь процесс.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {["Договор купли-продажи или factura", "Оригинальные документы из Германии", "CoC или ficha reducida", "Испанская ficha técnica после ITV", "Подтверждение оплаты IEDMT (форма 576, 06 или 05)", "Подтверждение оплаты IVTM", "DNI или NIE владельца", "Перевод документов (при необходимости)"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-[#0B3B73] font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-sm text-gray-700 mb-3">Подробный разбор каждого документа, что такое CoC, ficha reducida и где чаще всего возникают ошибки — на отдельной странице.</p>
              <Link href="/ru/avto-iz-germanii/nalogi-i-dokumenty" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">Налоги и документы для авто из Германии →</Link>
            </div>
          </div>
        </section>

        {/* БЛОК 4 */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Налоги и сборы, связанные с регистрацией через DGT</h2>
            <p className="mb-5">Перед подачей в DGT нужно закрыть не только документы, но и обязательные платежи. Большинство финансовых вопросов решается до финального этапа.</p>
            <div className="space-y-3 mb-5">
              {[{ name: "IEDMT", desc: "Регистрационный налог — зависит от выбросов CO₂ и налоговой ситуации. Рассчитывается индивидуально.", accent: true }, { name: "IVTM — муниципальный налог", desc: "Ежегодный местный налог на транспортное средство по адресу владельца. Обязателен до подачи в DGT.", accent: false }, { name: "ITV и подготовка технического файла", desc: "Расходы на прохождение технического осмотра и получение испанской ficha técnica. Обычно 100–150 €.", accent: false }, { name: "Пошлина DGT — tasa 1.1", desc: "Сбор за оформление регистрации и выдачу permiso de circulación. Для большинства автомобилей — 99,77 €.", accent: false }].map((item) => (
                <div key={item.name} className={`rounded-2xl border p-4 ${item.accent ? "bg-[#0B3B73] text-white" : "bg-white shadow-sm"}`}>
                  <p className={`font-bold mb-1 ${item.accent ? "text-white" : "text-[#0B3B73]"}`}>{item.name}</p>
                  <p className={`text-sm ${item.accent ? "opacity-90" : "text-gray-700"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-4">
              <p className="text-sm text-gray-600">Полный расчёт всех статей расходов с примерами → <Link href="/ru/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline font-semibold">Сколько стоит авто из Германии в Испанию</Link></p>
            </div>
          </div>
        </section>

        {/* БЛОК 5 */}
        <section className="mt-10">
          <details className="group/verde rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Можно ли ездить до получения постоянных номеров — placas verdes</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/verde:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">До получения окончательной испанской регистрации автомобиль нельзя использовать как полностью оформленный испанский автомобиль. Если процедура затягивается, в Испании предусмотрен механизм временной matriculación — <strong>placas verdes</strong> (зелёные номера).</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                  <p className="font-bold text-[#0B3B73] mb-2">🟢 Placas verdes</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-green-600">✓</span> Позволяют законно перемещать авто</li>
                    <li className="flex gap-2"><span className="text-green-600">✓</span> Выдаются на период оформления</li>
                    <li className="flex gap-2"><span className="text-gray-400">—</span> Отдельный запрос и пошлина</li>
                    <li className="flex gap-2"><span className="text-gray-400">—</span> Нужен готовый пакет по основной рег.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border bg-[#0B3B73] text-white p-4">
                  <p className="font-bold mb-3">Стоимость tasa 1.4</p>
                  <p className="text-3xl font-bold mb-1">20,61 €</p>
                  <p className="text-sm opacity-75">временная matrícula DGT</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Использовать временную matriculación стоит только когда есть практическая необходимость. В большинстве случаев выгоднее собрать пакет так, чтобы пройти обычную регистрацию без промежуточного этапа.</p>
            </div>
          </details>
        </section>

        {/* БЛОК 6 */}
        <section className="mt-10">
          <details className="group/delays rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Что чаще всего задерживает регистрацию</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/delays:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>На практике сроки срываются не в DGT, а раньше — из-за неполного пакета документов или ошибок в технической части. Для клиента это выглядит как «DGT тянет время», но в реальности DGT получает уже готовое дело.</p>
              <div className="space-y-2">
                {["Отсутствует CoC, вопрос homologación не решён до ITV", "Несоответствия по собственнику, VIN или техническим данным в немецких документах", "Не подготовлен правильный налоговый пакет по IEDMT (неверная форма: 576, 06 или 05)", "Не оплачен или не подтверждён муниципальный IVTM", "Автомобиль не проходит ITV с первого раза", "Формальные ошибки в договоре, factura или переводах"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl border bg-[#F6F8FC] px-4 py-3">
                    <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* БЛОК 7 */}
        <section className="mt-10">
          <details className="group/time rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Сколько времени занимает регистрация через DGT</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/time:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>Срок зависит не только от самой DGT, но и от того, насколько быстро закрываются предыдущие этапы. От момента <strong>прибытия автомобиля в Испанию</strong> до получения номеров при чистом пакете документов обычно уходит <strong>1–3 недели</strong>. Весь процесс включая доставку из Германии — <strong>5–6 недель</strong>.</p>
              <div className="space-y-2">
                {[{ step: "Проверка документов после прибытия", duration: "1–3 дня" }, { step: "Подготовка технической части и ITV", duration: "2–7 дней" }, { step: "Налоговая часть — IEDMT и IVTM", duration: "1–5 дней" }, { step: "Подача в DGT и получение номеров", duration: "неск. дней — 2 недели" }].map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-2xl border bg-[#F6F8FC] px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                      <span className="font-medium text-sm">{item.step}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#0B3B73] whitespace-nowrap ml-3">{item.duration}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-2xl bg-[#0B3B73] text-white px-5 py-3">
                  <span className="font-bold text-sm">Итого от прибытия авто до номеров</span>
                  <span className="font-bold whitespace-nowrap ml-3 text-sm">1–3 недели</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">Полные сроки включая доставку из Германии → <Link href="/ru/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline">Сколько стоит авто из Германии</Link></p>
            </div>
          </details>
        </section>

        {/* БЛОК 8 */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Почему регистрацию через DGT лучше вести под ключ</h2>
            <p className="mb-4">Самостоятельно поставить автомобиль на учёт в Испании возможно. Но сложность возникает не в одном крупном шаге, а в множестве мелких связок между документами, ITV, налогами, муниципалитетом и DGT.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {[{ icon: "🔍", title: "Ошибки до подачи", text: "Выявляем проблемы до подачи в DGT, а не после отказа." }, { icon: "⏱️", title: "Сроки сокращаются", text: "Нет потерь времени на возвраты и переделки." }, { icon: "📋", title: "Ясность заранее", text: "Клиент понимает реальный порядок получения номеров до покупки авто." }].map((item) => (
                <div key={item.title} className="rounded-2xl border bg-white p-4 shadow-sm text-center">
                  <p className="text-3xl mb-2">{item.icon}</p>
                  <p className="font-bold text-[#0B3B73] mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-base text-gray-700">Финальную техническую проверку автомобиля перед ITV мы проводим на собственном СТО в Аликанте. По желанию клиента передача проходит на нашей площадке или доставляем в любую точку Испании. → <Link href="/ru/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Авто из Германии в Аликанте</Link></p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Постановка автомобиля на учёт в Испании</h2>
            <p className="mb-4">Наша компания не занимается лоббированием никаких вопросов и не предоставляет «ускоренные» решения. Всё сопровождение осуществляется исключительно на основании действующих нормативных актов.</p>
            <p className="mb-4">Именно поэтому у нас нет отдельной услуги «регистрация в DGT» — потому что регистрация невозможна без правильно уплаченных налогов, корректно пройденного ITV и полного пакета документов. Всё это — единый комплекс, и только так автомобиль получает испанские номера без задержек и возвратов.</p>
            <p className="mb-6">Подробнее о том, как мы ведём весь процесс постановки на учёт:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ru/registro" className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Регистрация авто</Link>
              <Link href="/ru/contacto" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Записаться на консультацию</Link>
            </div>
          </div>
        </section>

        {/* Навигация */}
        <section className="mt-10">
          <p className="text-base font-semibold text-[#0B3B73] mb-3">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ href: "/ru/avto-iz-germanii/nalogi-i-dokumenty", label: "Налоги и документы для авто из Германии" }, { href: "/ru/avto-iz-germanii/skolko-stoit", label: "Сколько стоит авто из Германии" }, { href: "/ru/avto-iz-germanii/alicante", label: "Авто из Германии в Аликанте" }, { href: "/ru/avto-iz-germanii", label: "Авто из Германии в Испанию →" }].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Частые вопросы</h2>
          <div className="space-y-3">
            {[{ q: "Можно ли зарегистрировать авто из Германии самостоятельно?", a: "Да, можно. Но нужно правильно собрать документы, пройти ITV, закрыть налоговую часть и подать комплект в DGT без ошибок. На практике сложность в множестве мелких связок между этапами." }, { q: "Нужен ли CoC для регистрации в DGT?", a: "Желательно — да. Если CoC нет, используется ficha reducida. Подробнее — на странице «Налоги и документы»." }, { q: "Сколько стоит регистрация в DGT?", a: "Пошлина DGT (tasa 1.1) — 99,77 € для большинства автомобилей. Но полная стоимость процедуры определяется прежде всего IEDMT и ITV." }, { q: "Можно ли ездить до получения испанских номеров?", a: "В обычном порядке — нет. Для отдельных случаев используется временная matrícula с placas verdes (tasa 1.4 — 20,61 €)." }, { q: "Что происходит после одобрения DGT?", a: "Автомобилю присваивается испанский номер, владельцу выдаётся permiso de circulación, после чего изготавливаются постоянные номерные знаки." }, { q: "Сколько времени занимает регистрация?", a: "От прибытия авто в Испанию до номеров — обычно 1–3 недели при чистом пакете. Весь процесс включая доставку из Германии — 5–6 недель." }].map((item, i) => (
              <details key={i} className="group rounded-2xl border bg-white shadow-sm">
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open:rotate-180"><ChevronSvg size={20} /></span>
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FAQ link */}
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

        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/dgt.jpg" alt="Matriculación de coche de Alemania en España — placas y permiso de circulación" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Matriculación de coche de Alemania en España a través de la DGT
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Explicamos cómo matricular un coche de Alemania en España: orden de etapas, documentos, impuestos, plazos y dónde suelen producirse los retrasos.
            </p>
          </div>
        </section>

        {/* BLOQUE 1 */}
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Qué significa la matriculación de un vehículo a través de la DGT</h2>
            <p className="mb-4">Matricular un coche de Alemania en España no es un único trámite independiente, sino la fase final de varias gestiones obligatorias encadenadas. Para obtener la matrícula española y el <strong>permiso de circulación</strong>, el vehículo debe pasar por la preparación documental, obtener la ficha técnica española de la ITV y acreditar el pago de los impuestos — solo entonces se presenta el expediente en la DGT.</p>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-2">El error más habitual</p>
              <p className="text-base leading-relaxed">Creer que el trámite empieza y termina en la DGT. En realidad, la DGT recibe un expediente ya preparado. Si en esta etapa falta documentación, no se ha superado la ITV o no están acreditados los impuestos, la presentación se retrasa o se devuelve para subsanación.</p>
            </div>
          </div>
        </section>

        {/* BLOQUE 2 */}
        <section className="mt-10">
          <details className="group/steps rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Cómo se realiza la matriculación en la DGT: orden paso a paso</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/steps:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>El proceso de matriculación conviene entenderlo como una cadena secuencial — cada etapa depende de la anterior.</p>
              <div className="space-y-3">
                {[{ n: "1", title: "Documentación de Alemania", text: "Se acredita la titularidad y se reúnen los documentos originales del vehículo." }, { n: "2", title: "ITV y ficha técnica", text: "El vehículo supera la inspección técnica española y obtiene la ficha técnica española." }, { n: "3", title: "Impuesto IEDMT", text: "Se abona o se acredita la exención del Impuesto de Matriculación a través de la Agencia Tributaria." }, { n: "4", title: "Impuesto municipal IVTM", text: "Se abona o se acredita la exención del impuesto de circulación en el municipio de residencia del titular." }, { n: "5", title: "Presentación en la DGT", text: "El expediente completo se presenta para la primera matriculación del vehículo en España." }, { n: "6", title: "Permiso de circulación", text: "Tras la aprobación de la DGT se expide el permiso de circulación y se asigna la matrícula española." }, { n: "7", title: "Placas de matrícula", text: "Se fabrican e instalan las placas definitivas con la matrícula española." }].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 rounded-2xl border bg-[#F6F8FC] p-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0B3B73] text-white font-bold text-sm">{item.n}</span>
                    <div>
                      <p className="font-bold text-[#0B3B73] mb-0.5">{item.title}</p>
                      <p className="text-base text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* BLOQUE 3 */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Qué documentos se necesitan para la matriculación</h2>
            <p className="mb-4">Para la presentación en la DGT se necesita el expediente completo — desde la acreditación de la titularidad hasta los documentos fiscales. La falta de cualquiera de ellos retrasa todo el proceso.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {["Contrato de compraventa o factura", "Documentos originales de Alemania", "CoC o ficha reducida", "Ficha técnica española tras la ITV", "Acreditación del pago del IEDMT (modelo 576, 06 o 05)", "Acreditación del pago del IVTM", "DNI o NIE del titular", "Traducciones (si procede)"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-[#0B3B73] font-bold flex-shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-sm text-gray-700 mb-3">El desglose detallado de cada documento, qué son el CoC y la ficha reducida y dónde se producen los errores más frecuentes — en una página independiente.</p>
              <Link href="/es/avto-iz-germanii/nalogi-i-dokumenty" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">Impuestos y documentos para coche de Alemania →</Link>
            </div>
          </div>
        </section>

        {/* BLOQUE 4 */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Impuestos y tasas vinculados a la matriculación en la DGT</h2>
            <p className="mb-5">Antes de presentar el expediente en la DGT hay que cerrar no solo la documentación sino también los pagos obligatorios. La mayor parte de las cuestiones económicas se resuelve antes de la etapa final.</p>
            <div className="space-y-3 mb-5">
              {[{ name: "IEDMT", desc: "Impuesto de matriculación — depende de las emisiones de CO₂ y la situación fiscal. Se calcula de forma individualizada.", accent: true }, { name: "IVTM — impuesto municipal", desc: "Impuesto local anual sobre el vehículo según el domicilio del titular. Obligatorio antes de la presentación en la DGT.", accent: false }, { name: "ITV y preparación del expediente técnico", desc: "Gastos de la inspección técnica y obtención de la ficha técnica española. Habitualmente entre 100 y 150 €.", accent: false }, { name: "Tasa DGT — tasa 1.1", desc: "Tasa por la tramitación de la matriculación y la expedición del permiso de circulación. Para la mayoría de los vehículos — 99,77 €.", accent: false }].map((item) => (
                <div key={item.name} className={`rounded-2xl border p-4 ${item.accent ? "bg-[#0B3B73] text-white" : "bg-white shadow-sm"}`}>
                  <p className={`font-bold mb-1 ${item.accent ? "text-white" : "text-[#0B3B73]"}`}>{item.name}</p>
                  <p className={`text-sm ${item.accent ? "opacity-90" : "text-gray-700"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-4">
              <p className="text-sm text-gray-600">Desglose completo de todos los costes con ejemplos → <Link href="/es/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline font-semibold">¿Cuánto cuesta importar un coche de Alemania a España?</Link></p>
            </div>
          </div>
        </section>

        {/* BLOQUE 5 */}
        <section className="mt-10">
          <details className="group/verde rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">¿Se puede circular antes de obtener la matrícula definitiva? — placas verdes</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/verde:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">Hasta obtener la matriculación definitiva española, el vehículo no puede utilizarse como un coche español plenamente tramitado. Si el procedimiento se alarga, en España existe el mecanismo de matriculación temporal — <strong>placas verdes</strong>.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                  <p className="font-bold text-[#0B3B73] mb-2">🟢 Placas verdes</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2"><span className="text-green-600">✓</span> Permiten mover el vehículo legalmente</li>
                    <li className="flex gap-2"><span className="text-green-600">✓</span> Se expiden durante el período de tramitación</li>
                    <li className="flex gap-2"><span className="text-gray-400">—</span> Solicitud y tasa independientes</li>
                    <li className="flex gap-2"><span className="text-gray-400">—</span> Requiere el expediente principal preparado</li>
                  </ul>
                </div>
                <div className="rounded-2xl border bg-[#0B3B73] text-white p-4">
                  <p className="font-bold mb-3">Coste tasa 1.4</p>
                  <p className="text-3xl font-bold mb-1">20,61 €</p>
                  <p className="text-sm opacity-75">matrícula temporal DGT</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Recurrir a la matriculación temporal solo tiene sentido cuando existe una necesidad práctica real. En la mayoría de los casos es preferible preparar el expediente de forma que se pueda completar la matriculación ordinaria sin etapas intermedias.</p>
            </div>
          </details>
        </section>

        {/* BLOQUE 6 */}
        <section className="mt-10">
          <details className="group/delays rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Qué retrasa con más frecuencia la matriculación</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/delays:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>En la práctica, los plazos se incumplen antes de llegar a la DGT, por documentación incompleta o errores en la parte técnica. Para el cliente parece que «la DGT tarda», pero en realidad la DGT recibe un expediente ya preparado.</p>
              <div className="space-y-2">
                {["No hay CoC, la homologación no está resuelta antes de la ITV", "Discrepancias en el titular, el VIN o los datos técnicos de la documentación alemana", "Expediente fiscal del IEDMT incorrecto (modelo equivocado: 576, 06 o 05)", "IVTM municipal sin pagar o sin acreditar", "El vehículo no supera la ITV en el primer intento", "Errores formales en el contrato, la factura o las traducciones"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl border bg-[#F6F8FC] px-4 py-3">
                    <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* BLOQUE 7 */}
        <section className="mt-10">
          <details className="group/time rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">¿Cuánto tiempo tarda la matriculación a través de la DGT?</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/time:rotate-180"><ChevronSvg /></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>El plazo depende no solo de la propia DGT, sino también de la rapidez con que se cierran las etapas anteriores. Desde la <strong>llegada del vehículo a España</strong> hasta la obtención de la matrícula, con un expediente limpio y completo, suelen transcurrir <strong>entre 1 y 3 semanas</strong>. El proceso completo, incluido el transporte desde Alemania, dura <strong>entre 5 y 6 semanas</strong>.</p>
              <div className="space-y-2">
                {[{ step: "Verificación de documentos tras la llegada", duration: "1–3 días" }, { step: "Preparación técnica e ITV", duration: "2–7 días" }, { step: "Parte fiscal — IEDMT e IVTM", duration: "1–5 días" }, { step: "Presentación en DGT y obtención de matrícula", duration: "varios días — 2 semanas" }].map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-2xl border bg-[#F6F8FC] px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                      <span className="font-medium text-sm">{item.step}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#0B3B73] whitespace-nowrap ml-3">{item.duration}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-2xl bg-[#0B3B73] text-white px-5 py-3">
                  <span className="font-bold text-sm">Total desde la llegada del coche hasta la matrícula</span>
                  <span className="font-bold whitespace-nowrap ml-3 text-sm">1–3 semanas</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">Plazos completos incluyendo el transporte desde Alemania → <Link href="/es/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline">¿Cuánto cuesta importar un coche de Alemania?</Link></p>
            </div>
          </details>
        </section>

        {/* BLOQUE 8 */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Por qué conviene gestionar la matriculación en la DGT llave en mano</h2>
            <p className="mb-4">Matricular un vehículo en España de forma autónoma es posible. Pero la dificultad no radica en un gran paso, sino en la multitud de pequeñas conexiones entre la documentación, la ITV, los impuestos, el ayuntamiento y la DGT.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {[{ icon: "🔍", title: "Errores antes de presentar", text: "Detectamos los problemas antes de la presentación en la DGT, no tras una denegación." }, { icon: "⏱️", title: "Plazos más cortos", text: "Sin pérdidas de tiempo por devoluciones y correcciones." }, { icon: "📋", title: "Claridad desde el principio", text: "El cliente conoce el proceso real de obtención de la matrícula antes de comprar el coche." }].map((item) => (
                <div key={item.title} className="rounded-2xl border bg-white p-4 shadow-sm text-center">
                  <p className="text-3xl mb-2">{item.icon}</p>
                  <p className="font-bold text-[#0B3B73] mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-base text-gray-700">La revisión técnica final del vehículo antes de la ITV la realizamos en nuestro propio taller en Alicante. Si el cliente lo desea, la entrega se efectúa en nuestras instalaciones o lo llevamos a cualquier punto de España. → <Link href="/es/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Coches de Alemania en Alicante</Link></p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Matriculación del vehículo en España</h2>
            <p className="mb-4">Nuestra empresa no gestiona ningún tipo de influencia ni ofrece soluciones «aceleradas». Todos los trámites se realizan exclusivamente conforme a la normativa vigente.</p>
            <p className="mb-4">Por eso no ofrecemos un servicio independiente de «matriculación en la DGT» — porque la matriculación es imposible sin los impuestos correctamente abonados, la ITV superada en regla y el expediente documental completo. Todo ello forma un conjunto único, y solo así el vehículo obtiene la matrícula española sin retrasos ni devoluciones.</p>
            <p className="mb-6">Más información sobre cómo gestionamos todo el proceso de matriculación:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/es/registro" className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Matriculación de vehículo</Link>
              <Link href="/es/contacto" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Solicitar consulta</Link>
            </div>
          </div>
        </section>

        {/* Navegación */}
        <section className="mt-10">
          <p className="text-base font-semibold text-[#0B3B73] mb-3">Ver también:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ href: "/es/avto-iz-germanii/nalogi-i-dokumenty", label: "Impuestos y documentos para coche de Alemania" }, { href: "/es/avto-iz-germanii/skolko-stoit", label: "¿Cuánto cuesta importar un coche de Alemania?" }, { href: "/es/avto-iz-germanii/alicante", label: "Coches de Alemania en Alicante" }, { href: "/es/avto-iz-germanii", label: "Importar coche de Alemania a España →" }].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[{ q: "¿Se puede matricular un coche de Alemania por cuenta propia?", a: "Sí, es posible. Pero hay que reunir correctamente la documentación, pasar la ITV, resolver los impuestos y presentar el expediente en la DGT sin errores. En la práctica, la dificultad está en las múltiples conexiones entre etapas." }, { q: "¿Es necesario el CoC para la matriculación en la DGT?", a: "Es recomendable — sí. Si no hay CoC, se utiliza la ficha reducida. Más información en la página «Impuestos y documentos»." }, { q: "¿Cuánto cuesta la matriculación en la DGT?", a: "La tasa DGT (tasa 1.1) es de 99,77 € para la mayoría de los vehículos. El coste total del proceso viene determinado principalmente por el IEDMT y la ITV." }, { q: "¿Se puede circular antes de obtener la matrícula española?", a: "En el procedimiento habitual — no. Para casos concretos existe la matriculación temporal con placas verdes (tasa 1.4 — 20,61 €)." }, { q: "¿Qué ocurre tras la aprobación de la DGT?", a: "Al vehículo se le asigna una matrícula española, al titular se le expide el permiso de circulación y se fabrican las placas definitivas." }, { q: "¿Cuánto tiempo tarda la matriculación?", a: "Desde la llegada del coche a España hasta la matrícula — normalmente entre 1 y 3 semanas con el expediente completo. El proceso completo, incluido el transporte desde Alemania, dura entre 5 y 6 semanas." }].map((item, i) => (
              <details key={i} className="group rounded-2xl border bg-white shadow-sm">
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open:rotate-180"><ChevronSvg size={20} /></span>
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FAQ link */}
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

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
        <img src="/icons/dgt.jpg" alt="Car registration from Germany in Spain via DGT — plates and permiso de circulación" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
          <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            Car registration from Germany in Spain via DGT
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
            We explain how to register a car from Germany in Spain: the order of stages, documents, taxes, timelines and where delays most commonly occur.
          </p>
        </div>
      </section>

      {/* BLOCK 1 */}
      <section className="mt-8">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">What car registration via the DGT actually means</h2>
          <p className="mb-4">Registering a car from Germany in Spain is not a single standalone step — it is the final link in a chain of mandatory procedures. To obtain Spanish plates and the <strong>permiso de circulación</strong>, the vehicle must complete document preparation, receive a Spanish ITV ficha técnica and confirm payment of taxes — only then is the application submitted to the DGT.</p>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="font-bold text-[#0B3B73] mb-2">The most common mistake</p>
            <p className="text-base leading-relaxed">Thinking that registration starts and ends at the DGT. In reality, the DGT receives a file that has already been prepared. If documents are missing, the ITV has not been passed or taxes have not been confirmed at this stage, the submission is delayed or returned for correction.</p>
          </div>
        </div>
      </section>

      {/* BLOCK 2 */}
      <section className="mt-10">
        <details className="group/steps rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">How DGT registration works: step-by-step order</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/steps:rotate-180"><ChevronSvg /></span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>The registration process is best understood as a sequential chain — each stage depends on the one before it.</p>
            <div className="space-y-3">
              {[{ n: "1", title: "Documents from Germany", text: "Ownership is confirmed and the original vehicle documents are assembled." }, { n: "2", title: "ITV and ficha técnica", text: "The vehicle passes the Spanish technical inspection and receives the Spanish ficha técnica." }, { n: "3", title: "IEDMT tax", text: "The registration tax is paid or exemption is confirmed through the Agencia Tributaria." }, { n: "4", title: "Municipal tax IVTM", text: "The road tax is paid or exemption is confirmed at the owner's municipality of residence." }, { n: "5", title: "Submission to the DGT", text: "The complete document set is submitted for the vehicle's first registration in Spain." }, { n: "6", title: "Permiso de circulación", text: "After DGT approval, the permiso de circulación is issued and the Spanish registration number is assigned." }, { n: "7", title: "Number plates", text: "The permanent Spanish number plates are manufactured and fitted." }].map((item) => (
                <div key={item.n} className="flex items-start gap-4 rounded-2xl border bg-[#F6F8FC] p-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0B3B73] text-white font-bold text-sm">{item.n}</span>
                  <div>
                    <p className="font-bold text-[#0B3B73] mb-0.5">{item.title}</p>
                    <p className="text-base text-gray-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* BLOCK 3 */}
      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">What documents are needed for registration</h2>
          <p className="mb-4">DGT submission requires the complete set — from proof of ownership to tax documents. The absence of even one delays the entire process.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {["Purchase contract or invoice", "Original German documents", "CoC or ficha reducida", "Spanish ficha técnica after ITV", "Proof of IEDMT payment (form 576, 06 or 05)", "Proof of IVTM payment", "Owner's DNI or NIE", "Document translations (if required)"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                <span className="text-[#0B3B73] font-bold flex-shrink-0">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="text-sm text-gray-700 mb-3">A detailed breakdown of each document, what the CoC and ficha reducida are, and where errors most commonly occur — on a dedicated page.</p>
            <Link href="/en/avto-iz-germanii/nalogi-i-dokumenty" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">Taxes and documents for a car from Germany →</Link>
          </div>
        </div>
      </section>

      {/* BLOCK 4 */}
      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Taxes and fees associated with DGT registration</h2>
          <p className="mb-5">Before submitting to the DGT, not only documents but also mandatory payments must be in order. Most financial matters are resolved before the final stage.</p>
          <div className="space-y-3 mb-5">
            {[{ name: "IEDMT", desc: "Registration tax — depends on CO₂ emissions and tax situation. Calculated individually.", accent: true }, { name: "IVTM — municipal tax", desc: "Annual local vehicle tax based on the owner's registered address. Mandatory before DGT submission.", accent: false }, { name: "ITV and technical file preparation", desc: "Cost of the technical inspection and obtaining the Spanish ficha técnica. Typically €100–150.", accent: false }, { name: "DGT fee — tasa 1.1", desc: "Fee for processing the registration and issuing the permiso de circulación. For most vehicles — €99.77.", accent: false }].map((item) => (
              <div key={item.name} className={`rounded-2xl border p-4 ${item.accent ? "bg-[#0B3B73] text-white" : "bg-white shadow-sm"}`}>
                <p className={`font-bold mb-1 ${item.accent ? "text-white" : "text-[#0B3B73]"}`}>{item.name}</p>
                <p className={`text-sm ${item.accent ? "opacity-90" : "text-gray-700"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F6F8FC] border p-4">
            <p className="text-sm text-gray-600">Full breakdown of all costs with examples → <Link href="/en/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline font-semibold">How much does a car from Germany to Spain cost?</Link></p>
          </div>
        </div>
      </section>

      {/* BLOCK 5 */}
      <section className="mt-10">
        <details className="group/verde rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">Can the car be driven before receiving permanent plates? — placas verdes</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/verde:rotate-180"><ChevronSvg /></span>
          </summary>
          <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <p className="mb-4">Until final Spanish registration is obtained, the vehicle cannot be used as a fully registered Spanish car. If the procedure takes longer than expected, Spain has a temporary matriculación mechanism — <strong>placas verdes</strong> (green plates).</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-2xl border bg-[#F6F8FC] p-4">
                <p className="font-bold text-[#0B3B73] mb-2">🟢 Placas verdes</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Allow legal movement of the vehicle</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Issued for the duration of the registration process</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Separate application and fee required</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Main document set must be ready</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-[#0B3B73] text-white p-4">
                <p className="font-bold mb-3">Cost tasa 1.4</p>
                <p className="text-3xl font-bold mb-1">€20.61</p>
                <p className="text-sm opacity-75">temporary DGT matrícula</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Using temporary matriculación is only worthwhile when there is a genuine practical need. In most cases it is better to prepare the document set so that standard registration can proceed without an intermediate step.</p>
          </div>
        </details>
      </section>

      {/* BLOCK 6 */}
      <section className="mt-10">
        <details className="group/delays rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">What most commonly causes registration delays</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/delays:rotate-180"><ChevronSvg /></span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>In practice, deadlines are missed not at the DGT but earlier — due to an incomplete document set or errors in the technical part. From the client's perspective it looks like «the DGT is slow», but in reality the DGT receives a file that was already prepared.</p>
            <div className="space-y-2">
              {["No CoC present, homologación issue not resolved before ITV", "Discrepancies in the owner details, VIN or technical data in the German documents", "Incorrect IEDMT tax package (wrong form: 576, 06 or 05)", "Municipal IVTM not paid or not confirmed", "Vehicle fails the ITV on the first attempt", "Formal errors in the contract, invoice or translations"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border bg-[#F6F8FC] px-4 py-3">
                  <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* BLOCK 7 */}
      <section className="mt-10">
        <details className="group/time rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">How long does DGT registration take?</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/time:rotate-180"><ChevronSvg /></span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-base leading-relaxed mb-5" style={{ textAlign: "justify" }}>The timeline depends not only on the DGT itself but also on how quickly the preceding stages are completed. From the moment the <strong>vehicle arrives in Spain</strong> to receiving the plates — with a clean and complete document set — typically <strong>1–3 weeks</strong>. The full process including delivery from Germany takes <strong>5–6 weeks</strong>.</p>
            <div className="space-y-2">
              {[{ step: "Document verification after arrival", duration: "1–3 days" }, { step: "Technical preparation and ITV", duration: "2–7 days" }, { step: "Tax part — IEDMT and IVTM", duration: "1–5 days" }, { step: "DGT submission and plate issuance", duration: "several days — 2 weeks" }].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-2xl border bg-[#F6F8FC] px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                    <span className="font-medium text-sm">{item.step}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#0B3B73] whitespace-nowrap ml-3">{item.duration}</span>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-2xl bg-[#0B3B73] text-white px-5 py-3">
                <span className="font-bold text-sm">Total from vehicle arrival to plates</span>
                <span className="font-bold whitespace-nowrap ml-3 text-sm">1–3 weeks</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Full timelines including delivery from Germany → <Link href="/en/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline">How much does a car from Germany cost?</Link></p>
          </div>
        </details>
      </section>

      {/* BLOCK 8 */}
      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Why DGT registration is better handled turnkey</h2>
          <p className="mb-4">Registering a car in Spain independently is possible. But the difficulty lies not in one big step but in the many small links between documents, ITV, taxes, the municipality and the DGT.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {[{ icon: "🔍", title: "Errors caught early", text: "We identify problems before DGT submission, not after a rejection." }, { icon: "⏱️", title: "Shorter timelines", text: "No time lost to returns and rework." }, { icon: "📋", title: "Clarity upfront", text: "The client understands the real path to receiving plates before purchasing the car." }].map((item) => (
              <div key={item.title} className="rounded-2xl border bg-white p-4 shadow-sm text-center">
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="font-bold text-[#0B3B73] mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="text-base text-gray-700">The final technical inspection of the vehicle prior to ITV is carried out at our own workshop in Alicante. At the client's request, handover takes place at our premises or we deliver anywhere in Spain. → <Link href="/en/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Cars from Germany to Alicante</Link></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Vehicle registration in Spain</h2>
          <p className="mb-4">Our company does not engage in any form of lobbying and does not offer «accelerated» solutions. All support is provided exclusively in accordance with current regulations.</p>
          <p className="mb-4">This is why we do not offer a standalone «DGT registration» service — because registration is impossible without correctly paid taxes, a properly passed ITV and a complete document set. All of this forms a single package, and only in this way does the vehicle receive Spanish plates without delays or rejections.</p>
          <p className="mb-6">More about how we manage the entire registration process:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/en/registro" className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Vehicle registration</Link>
            <Link href="/en/contacto" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Book a consultation</Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="mt-10">
        <p className="text-base font-semibold text-[#0B3B73] mb-3">Read also:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[{ href: "/en/avto-iz-germanii/nalogi-i-dokumenty", label: "Taxes and documents for a car from Germany" }, { href: "/en/avto-iz-germanii/skolko-stoit", label: "How much does a car from Germany cost?" }, { href: "/en/avto-iz-germanii/alicante", label: "Cars from Germany to Alicante" }, { href: "/en/avto-iz-germanii", label: "Import a car from Germany to Spain →" }].map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
        ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Frequently asked questions</h2>
        <div className="space-y-3">
          {[{ q: "Can a car from Germany be registered in Spain independently?", a: "Yes, it can. But you need to assemble the correct documents, pass the ITV, settle the tax part and submit the full set to the DGT without errors. In practice, the difficulty lies in the many small links between the stages." }, { q: "Is a CoC required for DGT registration?", a: "It is advisable — yes. If there is no CoC, a ficha reducida is used. More details on the Taxes and Documents page." }, { q: "How much does DGT registration cost?", a: "The DGT fee (tasa 1.1) is €99.77 for most vehicles. The total cost of the procedure is determined primarily by the IEDMT and the ITV." }, { q: "Can the car be driven before receiving Spanish plates?", a: "Under normal circumstances — no. For specific cases, a temporary matrícula with placas verdes (tasa 1.4 — €20.61) is available." }, { q: "What happens after DGT approval?", a: "The vehicle is assigned a Spanish registration number, the owner is issued a permiso de circulación, and the permanent number plates are manufactured." }, { q: "How long does registration take?", a: "From the vehicle's arrival in Spain to the plates — typically 1–3 weeks with a clean document set. The full process including delivery from Germany takes 5–6 weeks." }].map((item, i) => (
            <details key={i} className="group rounded-2xl border bg-white shadow-sm">
              <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open:rotate-180"><ChevronSvg size={20} /></span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FAQ link */}
      <section className="mt-6">
        <div className="rounded-2xl bg-[#F6F8FC] border px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-gray-700">Find answers to other questions here</p>
          <Link href="/en/faq" className="flex-shrink-0 rounded-2xl border-2 border-[#0B3B73] px-6 py-3 font-bold text-[#0B3B73] transition hover:bg-white whitespace-nowrap">View FAQ</Link>
        </div>
      </section>
    </main>
  );
}
