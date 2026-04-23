import Link from "next/link";
import type { Metadata } from "next";

type Locale = "ru" | "en" | "es";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || "ru";
  const baseUrl = "https://autoexperteu.com";
  const pathname = `/${locale}/avto-iz-germanii/alicante`;

  const titles: Record<string, string> = {
    ru: "Авто из Германии в Аликанте под ключ — подбор, доставка и регистрация DGT",
    es: "Coches de Alemania en Alicante — compra, transporte y matriculación DGT | AutoexpertEU",
    en: "Cars from Germany to Alicante — purchase, delivery and DGT registration | AutoexpertEU",
  };

  const descriptions: Record<string, string> = {
    ru: "Авто из Германии в Аликанте под ключ. Подберём автомобиль на немецком аукционе, доставим в Испанию и зарегистрируем в DGT. Полный расчёт стоимости заранее.",
    es: "Coches de Alemania en Alicante llave en mano. Compramos, transportamos y matriculamos en DGT. Presupuesto completo por adelantado, sin sorpresas.",
    en: "Cars from Germany to Alicante turnkey. We find, buy, deliver and register with DGT. Full cost calculated upfront — no hidden fees.",
  };

  return {
    title: titles[locale] ?? titles.ru,
    description: descriptions[locale] ?? descriptions.ru,
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        ru: `${baseUrl}/ru/avto-iz-germanii/alicante`,
        es: `${baseUrl}/es/avto-iz-germanii/alicante`,
        en: `${baseUrl}/en/avto-iz-germanii/alicante`,
      },
    },
    openGraph: {
      title: titles[locale] ?? titles.ru,
      description: descriptions[locale] ?? descriptions.ru,
      url: `${baseUrl}${pathname}`,
      siteName: "AutoexpertEU",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/icons/alicante.png`,
          width: 1200,
          height: 630,
          alt:
            locale === "ru"
              ? "Офис AutoexpertEU в Аликанте"
              : locale === "es"
              ? "Oficina AutoexpertEU en Alicante"
              : "AutoexpertEU office in Alicante",
        },
      ],
    },
  };
}

export default function AlicanteCarPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "ru";
  const requestHref = `/${locale}/request`;

  const schemaServiceName =
    locale === "ru"
      ? "Авто из Германии в Аликанте под ключ"
      : locale === "es"
      ? "Coches de Alemania en Alicante llave en mano"
      : "Cars from Germany to Alicante turnkey";

  const schemaServiceDesc =
    locale === "ru"
      ? "Подбор автомобиля на немецком аукционе, доставка в Аликанте и регистрация в DGT под ключ."
      : locale === "es"
      ? "Búsqueda y compra en subasta alemana, transporte a Alicante y matriculación en DGT llave en mano."
      : "Sourcing and purchasing at German auction, delivery to Alicante and full DGT registration turnkey.";

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: schemaServiceName,
    provider: {
      "@type": "LocalBusiness",
      name: "AutoexpertEU",
      url: "https://autoexperteu.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Alicante",
        addressCountry: "ES",
      },
      areaServed: ["Alicante", "Costa Blanca", "Valencia", "España"],
    },
    description: schemaServiceDesc,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  const schemaFaqRu = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько времени занимает покупка авто из Германии в Аликанте?",
        acceptedAnswer: { "@type": "Answer", text: "Обычно весь процесс занимает 5–6 недель от заявки до получения автомобиля. Срок зависит от способа доставки: самовывоз из Германии быстрее, доставка автовозом занимает больше времени, но безопаснее для автомобиля." },
      },
      {
        "@type": "Question",
        name: "Нужно ли мне ехать в Германию самому?",
        acceptedAnswer: { "@type": "Answer", text: "Нет. Мы работаем преимущественно онлайн. Вы участвуете только на этапе выбора автомобиля — всё остальное мы берём на себя. Для получения автомобиля нужно приехать в наш офис в Аликанте или мы доставим его в любую точку Испании." },
      },
      {
        "@type": "Question",
        name: "Какие налоги платятся при регистрации авто в DGT?",
        acceptedAnswer: { "@type": "Answer", text: "При регистрации автомобиля в Испании оплачивается налог IEDMT (зависит от уровня выбросов CO₂ и региона), муниципальный дорожный налог IVTM, а также административные сборы. Мы рассчитываем все налоги заранее и включаем их в итоговый расчёт стоимости." },
      },
      {
        "@type": "Question",
        name: "Можно ли посмотреть автомобили в наличии в Аликанте?",
        acceptedAnswer: { "@type": "Answer", text: "Да. На нашей площадке в Аликанте есть автомобили в наличии, которые можно осмотреть лично. Запишитесь на визит через форму на сайте или напишите нам напрямую." },
      },
      {
        "@type": "Question",
        name: "Могу ли я купить автомобиль сам на немецком аукционе?",
        acceptedAnswer: { "@type": "Answer", text: "Нет. Немецкие аукционы работают в режиме B2B и требуют профессиональной аккредитации дилера. Частные лица не имеют доступа — именно поэтому нужен аккредитованный посредник." },
      },
    ],
  };

  const schemaFaqEs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda traer un coche de Alemania a Alicante?",
        acceptedAnswer: { "@type": "Answer", text: "El proceso completo suele durar entre 5 y 6 semanas desde la solicitud hasta la entrega del vehículo. El plazo depende del método de transporte: la recogida directa en Alemania es más rápida, mientras que el transporte en camión porta-coches lleva más tiempo, aunque es la opción más segura para el vehículo." },
      },
      {
        "@type": "Question",
        name: "¿Tengo que ir a Alemania en persona?",
        acceptedAnswer: { "@type": "Answer", text: "No. Trabajamos principalmente online. Solo participa en la selección del vehículo — el resto lo gestionamos nosotros. Para recoger el coche puede venir a nuestra oficina en Alicante o se lo entregamos en cualquier punto de España." },
      },
      {
        "@type": "Question",
        name: "¿Qué impuestos se pagan al matricular el coche en la DGT?",
        acceptedAnswer: { "@type": "Answer", text: "Al matricular un vehículo importado en España se paga el impuesto IEDMT (varía según las emisiones de CO₂ y la comunidad autónoma), el impuesto municipal de circulación IVTM y las tasas administrativas. Calculamos todos los impuestos por adelantado y los incluimos en el presupuesto final." },
      },
      {
        "@type": "Question",
        name: "¿Puedo ver los coches disponibles en Alicante?",
        acceptedAnswer: { "@type": "Answer", text: "Sí. En nuestra plataforma de Alicante hay vehículos en stock que puede inspeccionar personalmente. Reserve su visita a través del formulario del sitio web o escríbanos directamente." },
      },
      {
        "@type": "Question",
        name: "¿Puedo comprar yo mismo en una subasta alemana?",
        acceptedAnswer: { "@type": "Answer", text: "No. Las subastas alemanas funcionan en modo B2B y requieren acreditación profesional de concesionario. Los particulares no tienen acceso — por eso es necesario un intermediario acreditado." },
      },
    ],
  };

  const schemaFaqEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to import a car from Germany to Alicante?",
        acceptedAnswer: { "@type": "Answer", text: "The full process typically takes 5–6 weeks from the initial request to vehicle delivery. The timeline depends on the transport method: self-collection from Germany is faster, while car transporter delivery takes longer but is safer for the vehicle." },
      },
      {
        "@type": "Question",
        name: "Do I need to travel to Germany in person?",
        acceptedAnswer: { "@type": "Answer", text: "No. We work primarily online. You are only involved in the vehicle selection stage — we handle everything else. To collect the car you can visit our office in Alicante, or we can deliver it anywhere in Spain." },
      },
      {
        "@type": "Question",
        name: "What taxes are paid when registering a car with the DGT?",
        acceptedAnswer: { "@type": "Answer", text: "When registering an imported car in Spain, you pay the IEDMT registration tax (based on CO₂ emissions and region), the municipal road tax IVTM and administrative fees. We calculate all taxes upfront and include them in the final cost estimate." },
      },
      {
        "@type": "Question",
        name: "Can I view cars currently in stock in Alicante?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Our Alicante premises regularly have vehicles in stock that you can inspect in person. Book a visit via the form on our website or contact us directly." },
      },
      {
        "@type": "Question",
        name: "Can I buy a car at a German auction myself?",
        acceptedAnswer: { "@type": "Answer", text: "No. German auctions operate in B2B mode and require professional dealer accreditation. Private individuals do not have access — which is exactly why you need an accredited intermediary." },
      },
    ],
  };

  const schemaFaq =
    locale === "es" ? schemaFaqEs : locale === "en" ? schemaFaqEn : schemaFaqRu;

  /* ══════════════════════════════════════════════════════════
     RU VERSION
  ══════════════════════════════════════════════════════════ */
  if (locale === "ru") {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning translate="no">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/alicante.png" alt="Офис AutoexpertEU в Аликанте — выдача автомобилей клиентам" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Авто из Германии в Аликанте — покупка, доставка и регистрация в DGT
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Подберём и купим автомобиль в Германии, доставим в Аликанте и оформим в Испании под ключ. Полный расчёт стоимости заранее: покупка, доставка, налоги, ITV и регистрация в DGT.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Авто из Германии в Аликанте под ключ</h2>
            <p>Покупка автомобиля в Германии для жителей Аликанте и Коста-Бланки часто оказывается выгоднее, чем покупка аналогичной машины на испанском рынке. Основная причина — огромный выбор автомобилей на немецких аукционах, прозрачная сервисная история и более аккуратная эксплуатация.</p>
            <br />
            <p>Мы подбираем автомобиль на закрытых немецких аукционах и у официальных дилеров, проверяем историю по VIN, анализируем состояние автомобиля и участвуем в торгах. После покупки организуем доставку в Испанию, прохождение ITV и постановку автомобиля на учёт в DGT.</p>
            <br />
            <p>В результате вы получаете готовый автомобиль на испанских номерах в провинции Аликанте без необходимости разбираться в немецких аукционах, документах и налогах.</p>
            <br />
            <p>Наш офис и площадка находятся в Аликанте. Здесь же работает собственное СТО, где каждый автомобиль проходит финальную техническую проверку перед передачей клиенту.</p>
            <br />
            <p className="text-base">Подробнее о процессе импорта можно прочитать на странице{" "}<Link href="/ru/avto-iz-germanii" className="text-[#0B3B73] underline font-semibold">«Авто из Германии в Испанию»</Link>.</p>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Как проходит покупка авто из Германии для клиента в Аликанте</h2>
            <p className="mb-4">Процесс покупки автомобиля из Германии обычно занимает от 2 до 4 недель и состоит из нескольких этапов:</p>
            <ol className="space-y-2 list-none pl-0">
              {["Определяем модель автомобиля, бюджет и требования.", "Подбираем автомобили на немецких аукционах и у дилеров.", "Проверяем историю автомобиля и анализируем состояние.", "Участвуем в аукционе или ведём переговоры с продавцом.", "Организуем доставку автомобиля в Испанию.", "Проходим ITV и оформляем документы.", "Регистрируем автомобиль в DGT и получаем испанские номера.", "Передача автомобиля клиенту в нашем офисе в Аликанте или доставка в любую точку Испании."].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <br />
            <p>Большинство клиентов участвуют только на этапе выбора — всё остальное мы берём на себя. Работаем преимущественно онлайн: приехать в офис нужно только для финальной передачи автомобиля.</p>
            <br />
            <p className="rounded-2xl bg-[#F6F8FC] border p-5"><strong>Обычно весь процесс занимает 5–6 недель</strong> от заявки до получения автомобиля. Срок зависит от способа доставки: самовывоз из Германии значительно быстрее, тогда как доставка автовозом занимает больше времени — но является более безопасным вариантом для автомобиля.</p>
          </div>
        </section>

        <section className="mt-10">
          <details className="group/block rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Почему авто из Германии часто выгоднее покупать для Аликанте</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/block:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">Автомобили из Германии часто оказываются выгоднее для жителей Аликанте по нескольким причинам:</p>
              <div className="space-y-4">
                {[{ title: "Большой выбор автомобилей", text: "Немецкий рынок значительно больше испанского, поэтому легче найти автомобиль с нужной комплектацией и историей обслуживания." }, { title: "Более прозрачная история", text: "Большинство автомобилей имеют полную сервисную историю и прозрачный пробег." }, { title: "Выгодная цена", text: "Даже с учётом доставки и регистрации автомобиль часто стоит дешевле, чем аналог на испанском рынке." }, { title: "Лучшие комплектации", text: "На немецком рынке чаще встречаются автомобили с богатой комплектацией — особенно у брендов Audi, BMW, Mercedes-Benz и Volkswagen." }].map((item, i) => (
                  <div key={i} className="rounded-2xl border bg-[#F6F8FC] p-4">
                    <p className="font-bold text-[#0B3B73] mb-1">{i + 1}. {item.title}</p>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <br />
              <div className="rounded-2xl bg-[#F6F8FC] border p-5">
                <p className="font-bold text-[#0B3B73] mb-2">Реальный пример из нашей практики:</p>
                <p>Клиент из Аликанте заказал BMW X3 xDrive20d 2021 года. Полная стоимость под ключ на испанских номерах составила <strong>31 500 €</strong>. Аналогичные предложения у испанских дилеров в тот момент начинались от <strong>37 000 €</strong>.</p>
              </div>
              <br />
              <div className="rounded-2xl bg-[#F6F8FC] border p-5">
                <p className="font-bold text-[#0B3B73] mb-2">Ещё один показательный пример:</p>
                <p>Volkswagen Tiguan 2021 года с пробегом 45 000 км на испанском рынке стоит в среднем <strong>28 000–32 000 €</strong>. Тот же автомобиль с немецкого аукциона с учётом доставки, ITV и регистрации в DGT обходится клиентам в Аликанте в <strong>23 000–26 000 €</strong>.</p>
              </div>
            </div>
          </details>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Подбор авто в Аликанте и доставка из Германии</h2>
            <p>Мы работаем со всей провинцией Аликанте, побережьем Коста-Бланка и принимаем заявки из Валенсии.</p>
            <br />
            <p className="mb-3">Чаще всего автомобили доставляются для клиентов из городов:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {["Аликанте", "Торревьеха", "Бенидорм", "Альтеа", "Кальпе", "Дения", "Валенсия", "Мурсия", "Гандия"].map((city) => (
                <div key={city} className="rounded-xl border bg-white px-4 py-2 text-center text-sm font-medium shadow-sm">{city}</div>
              ))}
            </div>
            <p className="rounded-2xl bg-[#F6F8FC] border p-4">Особенно часто к нам обращаются клиенты из <strong>Торревьехи</strong> — самого большого русскоязычного сообщества на Коста-Бланке.</p>
            <br />
            <p>Если вы находитесь в другом регионе — доставим автомобиль в любую точку Испании после окончательного оформления документов.</p>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Наш офис и площадка в Аликанте</h2>
            <p>Мы работаем из Аликанте — здесь находится наш офис, собственная площадка и СТО. На площадке регулярно есть автомобили в наличии, которые можно осмотреть лично и купить без ожидания.</p>
            <br />
            <p>Каждый автомобиль, привезённый из Германии, перед передачей клиенту проходит финальную техническую проверку на нашем СТО. Вы можете приехать, осмотреть автомобиль лично и забрать его уже на испанских номерах.</p>
            <br />
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img src="/icons/alicante-offis.png" alt="Офис и площадка AutoexpertEU в Аликанте" className="w-full object-cover" style={{ maxHeight: "420px" }} />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Сколько стоит привезти авто из Германии в Аликанте</h2>
            <p>Итоговая стоимость складывается из цены автомобиля на аукционе, стоимости доставки в Испанию, налогов при регистрации (IEDMT), прохождения ITV и оформления в DGT. Мы рассчитываем все составляющие заранее — до того, как вы принимаете решение.</p>
            <br />
            <p>Подробный разбор всех статей расходов, калькулятор и реальные примеры смотрите на странице{" "}<Link href="/ru/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline font-semibold">«Сколько стоит авто из Германии в Испании»</Link>.</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Частые вопросы</h2>
          <div className="space-y-3">
            {[{ q: "Сколько времени занимает покупка авто из Германии в Аликанте?", a: "Обычно весь процесс занимает 5–6 недель от заявки до получения автомобиля. Срок зависит от способа доставки: самовывоз из Германии значительно быстрее, тогда как доставка автовозом занимает больше времени — но является более безопасным вариантом для автомобиля." }, { q: "Нужно ли мне ехать в Германию самому?", a: "Нет. Мы работаем преимущественно онлайн. Вы участвуете только на этапе выбора автомобиля — всё остальное мы берём на себя. Для получения автомобиля нужно приехать в наш офис в Аликанте, или мы доставим его в любую точку Испании." }, { q: "Какие налоги платятся при регистрации авто в DGT?", a: "При регистрации в Испании оплачивается налог IEDMT (зависит от уровня выбросов CO₂ и региона), муниципальный дорожный налог IVTM и административные сборы. Все налоги рассчитываются заранее и включаются в итоговый расчёт стоимости." }, { q: "Можно ли посмотреть автомобили в наличии в Аликанте?", a: "Да. На нашей площадке в Аликанте регулярно есть автомобили в наличии, которые можно осмотреть лично. Запишитесь на визит через форму на сайте или напишите нам напрямую." }, { q: "Сколько стоит привезти авто из Германии в Аликанте?", a: "Стоимость зависит от цены автомобиля, доставки, налога IEDMT, прохождения ITV и регистрации в DGT. Доставка автомобиля из Германии занимает 2–4 недели, весь процесс от заявки до получения — обычно 5–6 недель. Полную стоимость мы рассчитываем заранее — до покупки автомобиля." }, { q: "Могу ли я купить автомобиль сам на немецком аукционе?", a: "Нет. Немецкие аукционы работают в режиме B2B и требуют профессиональной аккредитации дилера. Частные лица не имеют доступа — именно поэтому нужен аккредитованный посредник." }].map((item, i) => (
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

        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Получить расчёт стоимости авто из Германии для Аликанте</h2>
            <p className="text-sm text-gray-500 mb-5">Расчёт бесплатный и ни к чему вас не обязывает. Обычно мы отвечаем в течение одного рабочего дня.</p>
            <p className="mb-3">Для расчёта достаточно указать:</p>
            <ul className="space-y-1 mb-6">
              {["модель автомобиля", "год выпуска", "двигатель", "ориентировочный бюджет"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0B3B73] flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={requestHref} className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Получить расчёт стоимости</Link>
              <Link href="/ru/avto-iz-germanii" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Авто из Германии в Испанию →</Link>
            </div>
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/alicante.png" alt="Oficina AutoexpertEU en Alicante — entrega de vehículos a clientes" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Coche de Alemania a Alicante — compra, transporte y matriculación en DGT
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Compramos el vehículo en Alemania, lo transportamos a Alicante y lo matriculamos en España llave en mano. Precio total calculado por adelantado: compra, transporte, impuestos, ITV y registro en DGT sin sorpresas.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Coches de Alemania en Alicante llave en mano</h2>
            <p>Comprar un coche en Alemania para residentes de Alicante y la Costa Blanca suele ser más rentable que adquirir un vehículo equivalente en el mercado español. La razón principal es la enorme oferta disponible en las subastas alemanas, el historial de servicio transparente y un uso generalmente más cuidadoso de los vehículos.</p>
            <br />
            <p>Seleccionamos el vehículo en subastas alemanas cerradas y en concesionarios oficiales, verificamos el historial por VIN, analizamos el estado del coche y pujamos en la subasta. Tras la compra, organizamos el transporte a España, la ITV y la matriculación en la DGT.</p>
            <br />
            <p>El resultado: recibe un vehículo listo con matrícula española en la provincia de Alicante, sin necesidad de entender subastas alemanas, documentación ni impuestos.</p>
            <br />
            <p>Nuestra oficina y almacén están en Alicante. Contamos también con taller propio donde cada vehículo pasa una revisión técnica final antes de la entrega al cliente.</p>
            <br />
            <p className="text-base">Más información sobre el proceso de importación en la página{" "}<Link href="/es/avto-iz-germanii" className="text-[#0B3B73] underline font-semibold">«Importar coche de Alemania a España»</Link>.</p>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Cómo funciona la compra de un coche de Alemania para un cliente en Alicante</h2>
            <p className="mb-4">El proceso de importación suele durar entre 2 y 4 semanas desde la selección hasta la entrega, y consta de varias etapas:</p>
            <ol className="space-y-2 list-none pl-0">
              {["Definimos el modelo, el presupuesto y los requisitos del cliente.", "Seleccionamos vehículos en subastas alemanas y en concesionarios.", "Verificamos el historial del vehículo y analizamos su estado.", "Pujamos en la subasta o negociamos con el vendedor.", "Organizamos el transporte del vehículo a España.", "Realizamos la ITV y gestionamos la documentación.", "Matriculamos el vehículo en la DGT y obtenemos la matrícula española.", "Entregamos el vehículo al cliente en nuestra oficina de Alicante o lo enviamos a cualquier punto de España."].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <br />
            <p>La mayoría de los clientes solo participan en la fase de selección — del resto nos encargamos nosotros. Trabajamos principalmente online: solo es necesario venir a la oficina para la entrega final del vehículo.</p>
            <br />
            <p className="rounded-2xl bg-[#F6F8FC] border p-5"><strong>El proceso completo suele durar entre 5 y 6 semanas</strong> desde la solicitud hasta la recepción del vehículo. El plazo depende del método de transporte: la recogida directa en Alemania es considerablemente más rápida, mientras que el transporte en camión porta-coches lleva más tiempo, aunque es la opción más segura para el vehículo.</p>
          </div>
        </section>

        <section className="mt-10">
          <details className="group/block rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Por qué los coches de Alemania suelen ser más rentables para Alicante</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/block:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
              <p className="mb-4">Los vehículos procedentes de Alemania resultan con frecuencia más ventajosos para los residentes de Alicante por varias razones:</p>
              <div className="space-y-4">
                {[{ title: "Gran variedad de vehículos", text: "El mercado alemán es significativamente más grande que el español, lo que facilita encontrar el vehículo con el equipamiento y el historial de mantenimiento deseados." }, { title: "Historial más transparente", text: "La mayoría de los vehículos cuentan con historial de servicio completo y kilometraje verificable." }, { title: "Precio competitivo", text: "Incluso incluyendo el transporte y la matriculación, el vehículo suele resultar más económico que un equivalente en el mercado español." }, { title: "Mejores equipamientos", text: "En el mercado alemán es más habitual encontrar vehículos con equipamiento de alto nivel, especialmente de las marcas Audi, BMW, Mercedes-Benz y Volkswagen." }].map((item, i) => (
                  <div key={i} className="rounded-2xl border bg-[#F6F8FC] p-4">
                    <p className="font-bold text-[#0B3B73] mb-1">{i + 1}. {item.title}</p>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <br />
              <div className="rounded-2xl bg-[#F6F8FC] border p-5">
                <p className="font-bold text-[#0B3B73] mb-2">Ejemplo real de nuestra práctica:</p>
                <p>Un cliente de Alicante encargó un BMW X3 xDrive20d de 2021. El coste total llave en mano con matrícula española fue de <strong>31 500 €</strong>. Las ofertas equivalentes en concesionarios españoles partían en ese momento desde <strong>37 000 €</strong>.</p>
              </div>
              <br />
              <div className="rounded-2xl bg-[#F6F8FC] border p-5">
                <p className="font-bold text-[#0B3B73] mb-2">Otro ejemplo ilustrativo:</p>
                <p>Un Volkswagen Tiguan de 2021 con 45 000 km tiene un precio medio en el mercado español de <strong>28 000–32 000 €</strong>. El mismo vehículo desde subasta alemana, con transporte, ITV y matriculación en DGT incluidos, sale a nuestros clientes de Alicante por <strong>23 000–26 000 €</strong>.</p>
              </div>
            </div>
          </details>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Búsqueda de coche en Alicante y transporte desde Alemania</h2>
            <p>Trabajamos con toda la provincia de Alicante, la Costa Blanca y también aceptamos solicitudes desde Valencia.</p>
            <br />
            <p className="mb-3">Los vehículos se entregan con mayor frecuencia a clientes de las siguientes localidades:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {["Alicante", "Torrevieja", "Benidorm", "Altea", "Calpe", "Denia", "Valencia", "Murcia", "Gandía"].map((city) => (
                <div key={city} className="rounded-xl border bg-white px-4 py-2 text-center text-sm font-medium shadow-sm">{city}</div>
              ))}
            </div>
            <p className="rounded-2xl bg-[#F6F8FC] border p-4">Recibimos solicitudes especialmente frecuentes desde <strong>Torrevieja</strong> — la mayor comunidad hispanohablante de la Costa Blanca.</p>
            <br />
            <p>Si se encuentra en otra región, podemos entregar el vehículo en cualquier punto de España una vez finalizada la documentación.</p>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Nuestra oficina y almacén en Alicante</h2>
            <p>Operamos desde Alicante — aquí se encuentran nuestra oficina, almacén propio y taller mecánico. En el almacén hay regularmente vehículos disponibles que puede inspeccionar en persona y adquirir sin esperas.</p>
            <br />
            <p>Cada vehículo importado de Alemania pasa una revisión técnica final en nuestro taller antes de la entrega al cliente. Puede venir, inspeccionar el vehículo personalmente y llevárselo ya con matrícula española.</p>
            <br />
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img src="/icons/alicante-offis.png" alt="Oficina y almacén de AutoexpertEU en Alicante" className="w-full object-cover" style={{ maxHeight: "420px" }} />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">¿Cuánto cuesta traer un coche de Alemania a Alicante?</h2>
            <p>El coste total se compone del precio del vehículo en subasta, el transporte a España, los impuestos de matriculación (IEDMT), la ITV y los trámites en la DGT. Calculamos todas las partidas por adelantado, antes de que tome ninguna decisión.</p>
            <br />
            <p>Desglose detallado de todos los costes, calculadora y ejemplos reales en la página{" "}<Link href="/es/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline font-semibold">«¿Cuánto cuesta importar un coche de Alemania a España?»</Link>.</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[{ q: "¿Cuánto tiempo tarda traer un coche de Alemania a Alicante?", a: "El proceso completo suele durar entre 5 y 6 semanas desde la solicitud hasta la entrega del vehículo. El plazo depende del método de transporte: la recogida directa en Alemania es considerablemente más rápida, mientras que el transporte en camión porta-coches lleva más tiempo, aunque es la opción más segura para el vehículo." }, { q: "¿Tengo que ir a Alemania en persona?", a: "No. Trabajamos principalmente online. Solo participa en la selección del vehículo — el resto lo gestionamos nosotros. Para recoger el coche puede venir a nuestra oficina en Alicante, o se lo entregamos en cualquier punto de España." }, { q: "¿Qué impuestos se pagan al matricular el coche en la DGT?", a: "Al matricular un vehículo importado en España se paga el impuesto IEDMT (varía según las emisiones de CO₂ y la comunidad autónoma), el impuesto municipal de circulación IVTM y las tasas administrativas. Calculamos todos los impuestos por adelantado y los incluimos en el presupuesto final." }, { q: "¿Puedo ver los coches disponibles en Alicante?", a: "Sí. En nuestra plataforma de Alicante hay vehículos en stock que puede inspeccionar personalmente. Reserve su visita a través del formulario del sitio web o escríbanos directamente." }, { q: "¿Cuánto cuesta traer un coche de Alemania a Alicante?", a: "El precio depende del coste del vehículo, el transporte, el impuesto IEDMT, la ITV y los trámites en la DGT. El transporte desde Alemania tarda entre 2 y 4 semanas; el proceso completo desde la solicitud hasta la entrega suele durar entre 5 y 6 semanas. Calculamos el coste total por adelantado, antes de la compra." }, { q: "¿Puedo comprar yo mismo en una subasta alemana?", a: "No. Las subastas alemanas funcionan en modo B2B y requieren acreditación profesional de concesionario. Los particulares no tienen acceso — por eso es necesario un intermediario acreditado." }].map((item, i) => (
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

        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Solicitar presupuesto para un coche de Alemania en Alicante</h2>
            <p className="text-sm text-gray-500 mb-5">El presupuesto es gratuito y sin compromiso. Respondemos habitualmente en el plazo de un día hábil.</p>
            <p className="mb-3">Para el presupuesto es suficiente indicar:</p>
            <ul className="space-y-1 mb-6">
              {["modelo del vehículo", "año de fabricación", "motor", "presupuesto aproximado"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0B3B73] flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={requestHref} className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Solicitar presupuesto</Link>
              <Link href="/es/avto-iz-germanii" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Importar coche de Alemania →</Link>
            </div>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
        <img src="/icons/alicante.png" alt="AutoexpertEU office in Alicante — vehicle handover to clients" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
          <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            Car from Germany to Alicante — purchase, delivery and DGT registration
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
            We source and buy the car in Germany, deliver it to Alicante and register it in Spain turnkey. Full cost calculated upfront: purchase, delivery, taxes, ITV and DGT registration — no surprises.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Cars from Germany to Alicante — turnkey service</h2>
          <p>Buying a car in Germany for residents of Alicante and the Costa Blanca is often more cost-effective than purchasing an equivalent vehicle on the Spanish market. The main reasons are the vast selection available at German auctions, transparent service histories and generally more careful vehicle use.</p>
          <br />
          <p>We source vehicles at closed German auctions and official dealerships, verify the history by VIN, assess the condition of the car and bid at auction. After purchase we organise delivery to Spain, the ITV inspection and registration with the DGT.</p>
          <br />
          <p>The result: you receive a fully registered car with Spanish plates in the province of Alicante, without having to navigate German auctions, paperwork or taxes yourself.</p>
          <br />
          <p>Our office and storage facility are in Alicante. We also have an in-house workshop where every vehicle undergoes a final technical inspection before handover to the client.</p>
          <br />
          <p className="text-base">Read more about the import process on the{" "}<Link href="/en/avto-iz-germanii" className="text-[#0B3B73] underline font-semibold">«Import a car from Germany to Spain»</Link> page.</p>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">How the purchase process works for a client in Alicante</h2>
          <p className="mb-4">The car import process typically takes 2 to 4 weeks from selection to delivery and consists of several stages:</p>
          <ol className="space-y-2 list-none pl-0">
            {["We define the car model, budget and requirements.", "We search for vehicles at German auctions and dealerships.", "We verify the vehicle history and assess its condition.", "We bid at auction or negotiate with the seller.", "We arrange delivery of the vehicle to Spain.", "We complete the ITV inspection and prepare all documents.", "We register the vehicle with the DGT and obtain Spanish plates.", "We hand over the vehicle at our Alicante office or deliver it anywhere in Spain."].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <br />
          <p>Most clients are only involved in the selection stage — we handle everything else. We work primarily online: you only need to come to the office for the final vehicle handover.</p>
          <br />
          <p className="rounded-2xl bg-[#F6F8FC] border p-5"><strong>The full process typically takes 5–6 weeks</strong> from the initial request to receiving the vehicle. The timeline depends on the transport method: self-collection from Germany is considerably faster, while car transporter delivery takes longer — but is the safer option for the vehicle.</p>
        </div>
      </section>

      <section className="mt-10">
        <details className="group/block rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">Why cars from Germany are often more cost-effective for Alicante buyers</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/block:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </summary>
          <div className="px-6 pb-6 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <p className="mb-4">Vehicles from Germany are frequently more advantageous for Alicante residents for several reasons:</p>
            <div className="space-y-4">
              {[{ title: "Wide vehicle selection", text: "The German market is significantly larger than the Spanish one, making it easier to find the right specification and service history." }, { title: "More transparent history", text: "Most vehicles have a complete service history and verifiable mileage." }, { title: "Competitive price", text: "Even accounting for delivery and registration, the vehicle often costs less than an equivalent on the Spanish market." }, { title: "Better specifications", text: "The German market more frequently offers vehicles with high-level equipment — especially from Audi, BMW, Mercedes-Benz and Volkswagen." }].map((item, i) => (
                <div key={i} className="rounded-2xl border bg-[#F6F8FC] p-4">
                  <p className="font-bold text-[#0B3B73] mb-1">{i + 1}. {item.title}</p>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <br />
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-2">Real example from our practice:</p>
              <p>A client from Alicante ordered a BMW X3 xDrive20d 2021. The total turnkey cost with Spanish registration was <strong>€31,500</strong>. Equivalent offers at Spanish dealerships at that time started from <strong>€37,000</strong>.</p>
            </div>
            <br />
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-2">Another illustrative example:</p>
              <p>A 2021 Volkswagen Tiguan with 45,000 km sells for an average of <strong>€28,000–32,000</strong> on the Spanish market. The same vehicle from a German auction, including delivery, ITV and DGT registration, costs our Alicante clients <strong>€23,000–26,000</strong>.</p>
            </div>
          </div>
        </details>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Vehicle sourcing in Alicante and delivery from Germany</h2>
          <p>We serve the entire province of Alicante, the Costa Blanca coastline and also accept orders from Valencia.</p>
          <br />
          <p className="mb-3">Vehicles are most frequently delivered to clients from the following towns:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {["Alicante", "Torrevieja", "Benidorm", "Altea", "Calpe", "Denia", "Valencia", "Murcia", "Gandía"].map((city) => (
              <div key={city} className="rounded-xl border bg-white px-4 py-2 text-center text-sm font-medium shadow-sm">{city}</div>
            ))}
          </div>
          <p className="rounded-2xl bg-[#F6F8FC] border p-4">We receive particularly frequent enquiries from <strong>Torrevieja</strong> — the largest Russian-speaking community on the Costa Blanca.</p>
          <br />
          <p>If you are in another region, we can deliver the vehicle anywhere in Spain once all documentation has been finalised.</p>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Our office and premises in Alicante</h2>
          <p>We are based in Alicante — our office, storage yard and workshop are all here. The yard regularly has vehicles in stock that you can inspect in person and purchase without waiting.</p>
          <br />
          <p>Every vehicle imported from Germany undergoes a final technical inspection at our workshop before handover to the client. You are welcome to come, inspect the car in person and drive away on Spanish plates.</p>
          <br />
          <div className="rounded-3xl overflow-hidden border shadow-sm">
            <img src="/icons/alicante-offis.png" alt="AutoexpertEU office and yard in Alicante" className="w-full object-cover" style={{ maxHeight: "420px" }} />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">How much does it cost to import a car from Germany to Alicante?</h2>
          <p>The total cost comprises the auction price of the vehicle, delivery to Spain, registration taxes (IEDMT), the ITV inspection and DGT administration fees. We calculate every component upfront — before you make any decision.</p>
          <br />
          <p>A full breakdown of all costs, a calculator and real-life examples are available on the{" "}<Link href="/en/avto-iz-germanii/skolko-stoit" className="text-[#0B3B73] underline font-semibold">«How much does it cost to import a car from Germany to Spain?»</Link> page.</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Frequently asked questions</h2>
        <div className="space-y-3">
          {[{ q: "How long does it take to import a car from Germany to Alicante?", a: "The full process typically takes 5–6 weeks from the initial request to vehicle delivery. The timeline depends on the transport method: self-collection from Germany is considerably faster, while car transporter delivery takes longer — but is the safer option for the vehicle." }, { q: "Do I need to travel to Germany in person?", a: "No. We work primarily online. You are only involved in the vehicle selection stage — we handle everything else. To collect the car you can visit our office in Alicante, or we can deliver it anywhere in Spain." }, { q: "What taxes are paid when registering a car with the DGT?", a: "When registering an imported car in Spain, you pay the IEDMT registration tax (based on CO₂ emissions and region), the municipal road tax IVTM and administrative fees. We calculate all taxes upfront and include them in the final cost estimate." }, { q: "Can I view cars currently in stock in Alicante?", a: "Yes. Our Alicante premises regularly have vehicles in stock that you can inspect in person. Book a visit via the form on our website or contact us directly." }, { q: "How much does it cost to bring a car from Germany to Alicante?", a: "The price depends on the vehicle cost, transport, the IEDMT tax, the ITV inspection and DGT registration fees. Transport from Germany takes 2–4 weeks; the full process from request to delivery typically takes 5–6 weeks. We calculate the total cost upfront — before the purchase." }, { q: "Can I buy a car at a German auction myself?", a: "No. German auctions operate in B2B mode and require professional dealer accreditation. Private individuals do not have access — which is exactly why you need an accredited intermediary." }].map((item, i) => (
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

      <section className="mt-10">
        <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Get a cost estimate for a car from Germany to Alicante</h2>
          <p className="text-sm text-gray-500 mb-5">The estimate is free and without obligation. We typically respond within one business day.</p>
          <p className="mb-3">To prepare the estimate, we need:</p>
          <ul className="space-y-1 mb-6">
            {["car model", "year of manufacture", "engine", "approximate budget"].map((item) => (
              <li key={item} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#0B3B73] flex-shrink-0" />{item}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={requestHref} className="flex-1 rounded-2xl bg-[#0B3B73] px-6 py-4 text-center font-bold text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none">Get a cost estimate</Link>
            <Link href="/en/avto-iz-germanii" className="flex-1 rounded-2xl border-2 border-[#0B3B73] px-6 py-4 text-center font-bold text-[#0B3B73] transition hover:bg-[#F6F8FC]">Import a car from Germany →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
