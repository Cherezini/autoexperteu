import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CarCalculatorClient = dynamic(() => import("../CarCalculatorClient"), { ssr: false });

/* ─────────────────────────────────────────────────────────────
   METADATA
───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || "ru";
  const baseUrl = "https://autoexperteu.com";
  const pathname = `/${locale}/avto-iz-germanii/skolko-stoit`;

  const titles: Record<string, string> = {
    ru: "Сколько стоит авто из Германии в Испанию — полный расчёт цены",
    es: "¿Cuánto cuesta importar un coche de Alemania a España? — cálculo completo | AutoexpertEU",
    en: "How much does it cost to import a car from Germany to Spain? — full price breakdown | AutoexpertEU",
  };
  const descriptions: Record<string, string> = {
    ru: "Сколько стоит авто из Германии в Испанию: цена покупки, доставка, налог IEDMT, ITV и регистрация в DGT. Полный расчёт стоимости автомобиля под ключ.",
    es: "Cuánto cuesta importar un coche de Alemania a España: precio de compra, transporte (1.200–1.700 €), impuesto IEDMT, ITV y matriculación DGT. Cálculo completo por adelantado.",
    en: "Full cost of importing a car from Germany to Spain: purchase price, delivery (€1,200–1,700), IEDMT tax, ITV inspection and DGT registration. Complete breakdown upfront.",
  };

  return {
    title: titles[locale] ?? titles.ru,
    description: descriptions[locale] ?? descriptions.ru,
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        ru: `${baseUrl}/ru/avto-iz-germanii/skolko-stoit`,
        es: `${baseUrl}/es/avto-iz-germanii/skolko-stoit`,
        en: `${baseUrl}/en/avto-iz-germanii/skolko-stoit`,
      },
    },
    openGraph: {
      title: titles[locale] ?? titles.ru,
      description: descriptions[locale] ?? descriptions.ru,
      url: `${baseUrl}${pathname}`,
      siteName: "AutoexpertEU",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: `${baseUrl}/icons/skolko3.png`, width: 1200, height: 630 }],
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function SkolkoStoitPage({ params }: { params: { locale: string } }) {
  const locale = params.locale || "ru";
  const requestHref = `/${locale}/request`;

  /* ── Schema FAQ — RU ── */
  const schemaFaqRu = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит привезти авто из Германии в Испанию?",
        acceptedAnswer: { "@type": "Answer", text: "Итоговая стоимость складывается из цены автомобиля на аукционе, доставки в Испанию (1 200–1 700 €), налога IEDMT, прохождения ITV (100–150 €) и регистрации в DGT (около 100 €). Цены в Германии в среднем на 10–20% ниже, чем на испанском рынке." },
      },
      {
        "@type": "Question",
        name: "Есть ли таможенные пошлины между Германией и Испанией?",
        acceptedAnswer: { "@type": "Answer", text: "Нет. Германия и Испания — члены ЕС, таможенных пошлин между ними нет. Но при регистрации в Испании обязательно уплачивается налог IEDMT." },
      },
      {
        "@type": "Question",
        name: "Выгодно ли везти авто из Германии в Испанию?",
        acceptedAnswer: { "@type": "Answer", text: "Да, особенно в сегменте от 20 000 € и выше. Цены на немецком рынке в среднем на 10–20% ниже испанских. Наиболее выгодны лизинговые автомобили 2–4 лет: Audi Q5/Q7, BMW 5-й серии и X5, Mercedes E-Class, GLC и GLE, Volkswagen Passat и Tiguan." },
      },
      {
        "@type": "Question",
        name: "Сколько времени занимает весь процесс?",
        acceptedAnswer: { "@type": "Answer", text: "Весь процесс от заявки до получения автомобиля обычно занимает 5–6 недель: поиск 3–10 дней, покупка и оформление 1–3 дня, доставка автовозом от 15 рабочих дней, ITV и регистрация в DGT 2–5 дней." },
      },
    ],
  };

  /* ── Schema FAQ — ES ── */
  const schemaFaqEs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto cuesta importar un coche de Alemania a España?",
        acceptedAnswer: { "@type": "Answer", text: "El coste total incluye el precio del vehículo en subasta, el transporte a España (1.200–1.700 €), el impuesto IEDMT, la ITV (100–150 €) y la matriculación en la DGT (unos 100 €). Los precios en Alemania son de media un 10–20% más bajos que en el mercado español." },
      },
      {
        "@type": "Question",
        name: "¿Hay aranceles aduaneros entre Alemania y España?",
        acceptedAnswer: { "@type": "Answer", text: "No. Alemania y España son miembros de la UE, por lo que no existen aranceles entre ambos países. Sin embargo, al matricular el vehículo en España es obligatorio abonar el impuesto IEDMT." },
      },
      {
        "@type": "Question",
        name: "¿Merece la pena traer un coche de Alemania a España?",
        acceptedAnswer: { "@type": "Answer", text: "Sí, especialmente a partir de 20.000 €. Los precios en el mercado alemán son de media un 10–20% más bajos que en España. Los más rentables son los vehículos de renting de 2–4 años: Audi Q5/Q7, BMW Serie 5 y X5, Mercedes Clase E, GLC y GLE, Volkswagen Passat y Tiguan." },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda todo el proceso?",
        acceptedAnswer: { "@type": "Answer", text: "El proceso completo desde la solicitud hasta la entrega suele durar entre 5 y 6 semanas: búsqueda 3–10 días, compra y gestión 1–3 días, transporte en camión porta-coches a partir de 15 días hábiles, ITV y matriculación en DGT 2–5 días." },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta el transporte de un coche de Alemania a España?",
        acceptedAnswer: { "@type": "Answer", text: "El transporte en camión porta-coches cuesta entre 1.200 y 1.700 €. La alternativa es el traslado en tránsito, que es más rápido pero implica kilómetros adicionales en el vehículo y gastos de desplazamiento." },
      },
      {
        "@type": "Question",
        name: "¿Cuánto es el impuesto de matriculación IEDMT en España?",
        acceptedAnswer: { "@type": "Answer", text: "El IEDMT varía según las emisiones de CO₂ del vehículo: 0% para emisiones inferiores a 120 g/km, 4,75% entre 120 y 160 g/km, 9,75% entre 160 y 200 g/km, y 14,75% para más de 200 g/km. Existen bonificaciones por comunidad autónoma." },
      },
    ],
  };

  /* ── Schema FAQ — EN ── */
  const schemaFaqEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to import a car from Germany to Spain?",
        acceptedAnswer: { "@type": "Answer", text: "The total cost includes the vehicle auction price, transport to Spain (€1,200–1,700), IEDMT registration tax, ITV inspection (€100–150) and DGT registration (approx. €100). German prices are on average 10–20% lower than the Spanish market." },
      },
      {
        "@type": "Question",
        name: "Are there customs duties between Germany and Spain?",
        acceptedAnswer: { "@type": "Answer", text: "No. Both countries are EU members, so there are no customs duties between them. However, when registering in Spain, the IEDMT tax must be paid." },
      },
      {
        "@type": "Question",
        name: "Is it worth importing a car from Germany to Spain?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, especially in the €20,000+ segment. German market prices average 10–20% below Spanish prices. The best value is found in 2–4 year-old lease returns: Audi Q5/Q7, BMW 5-Series and X5, Mercedes E-Class, GLC and GLE, Volkswagen Passat and Tiguan." },
      },
      {
        "@type": "Question",
        name: "How long does the whole process take?",
        acceptedAnswer: { "@type": "Answer", text: "The full process from enquiry to vehicle collection typically takes 5–6 weeks: vehicle search 3–10 days, purchase and paperwork 1–3 days, car transporter delivery from 15 working days, ITV and DGT registration 2–5 days." },
      },
      {
        "@type": "Question",
        name: "How much does it cost to transport a car from Germany to Spain?",
        acceptedAnswer: { "@type": "Answer", text: "Car transporter delivery costs €1,200–1,700. The alternative is self-collection on transit plates, which is faster but adds mileage to the vehicle and requires travel expenses." },
      },
      {
        "@type": "Question",
        name: "What is the IEDMT registration tax in Spain?",
        acceptedAnswer: { "@type": "Answer", text: "The IEDMT tax depends on the vehicle's CO₂ emissions: 0% below 120 g/km, 4.75% for 120–160 g/km, 9.75% for 160–200 g/km, and 14.75% above 200 g/km. Regional discounts may apply depending on the autonomous community." },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/skolko3.png" alt="Сколько стоит авто из Германии в Испанию — полный расчёт" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              Сколько стоит привезти авто из Германии в Испанию
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Показываем полный расчёт на каждом этапе: цена автомобиля, доставка, налоги, ITV и регистрация в DGT. Без скрытых расходов.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Из чего складывается стоимость авто из Германии</h2>
            <p>Стоимость автомобиля складывается не только из цены покупки в Германии. При привозе в Испанию необходимо учитывать доставку, подготовку документов, прохождение ITV и регистрацию в DGT.</p>
            <br />
            <p className="font-semibold text-[#0B3B73] mb-3">Основные статьи расходов:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[{ icon: "🇩🇪", label: "Покупка автомобиля", note: "цена на аукционе или у дилера" }, { icon: "🚚", label: "Доставка из Германии", note: "автовоз или самовывоз" }, { icon: "📄", label: "Транзитные номера и страховка", note: "при самовывозе" }, { icon: "🔧", label: "ITV в Испании", note: "100–150 €" }, { icon: "🇪🇸", label: "Регистрация в DGT", note: "около 100 €" }, { icon: "📊", label: "Налог IEDMT", note: "зависит от выбросов CO₂" }].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div><p className="font-semibold">{item.label}</p><p className="text-sm text-gray-500">{item.note}</p></div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-1">Главная ошибка при расчёте</p>
              <p>Сравнивать только цену автомобиля в Германии с ценой на испанском рынке. Реальная стоимость — это сумма всех статей расходов. Именно её мы рассчитываем заранее, <strong>до принятия решения о покупке</strong>.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Рассчитайте стоимость вашего автомобиля</h2>
          <p className="text-sm text-gray-500 mb-4">Введите параметры — получите ориентировочную стоимость автомобиля под ключ в Испании.</p>
          <CarCalculatorClient locale="ru" />
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Сколько стоит доставка авто из Германии в Испанию</h2>
            <p className="mb-4">Стоимость доставки зависит от расстояния и способа транспортировки. Самый распространённый способ — доставка автовозом. Средняя стоимость — <strong>1 200–1 700 €</strong>.</p>
            <p className="mb-4">Альтернатива — самовывоз на транзитных номерах. В этом случае расходы включают транзитные номера, страховку, топливо и платные дороги.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-2">🚛 Автовоз</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Автомобиль не получает пробег</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Безопаснее для кузова и ходовой</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Не нужна виза или время на дорогу</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Срок от 15 рабочих дней</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-2">🚗 Самовывоз</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Быстрее — можно в течение недели</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Дополнительный пробег на авто</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Нужно организовать поездку</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Расходы на дорогу</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-2xl border bg-[#F6F8FC] p-6">
            <h2 className="text-xl font-bold text-[#0B3B73] mb-3">Налоги и обязательные платежи</h2>
            <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>
              Таможенных пошлин между Германией и Испанией нет — обе страны в ЕС. Но при регистрации в Испании обязательны: налог <strong>IEDMT</strong> (рассчитывается индивидуально по выбросам CO₂), <strong>ITV</strong> (100–150 €) и <strong>регистрация в DGT</strong> (около 100 €).
            </p>
            <p className="text-sm text-gray-600 mb-4">Какие документы нужны, как считается IEDMT, что такое CoC и ficha reducida и какие ошибки чаще всего задерживают оформление — подробный разбор на отдельной странице.</p>
            <Link href="/ru/avto-iz-germanii/nalogi-i-dokumenty" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">Налоги и документы →</Link>
          </div>
        </section>

        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">Когда авто из Германии действительно выгоднее</h2>
            <p>Цены на немецком рынке в среднем на <strong>10–20% ниже</strong>, чем на испанском. Разница зависит от конкретной модели, года выпуска и комплектации — в каждом случае она индивидуальна. Наиболее ощутима в среднем и премиальном сегментах.</p>
            <br />
            <p className="mb-3 font-semibold text-[#0B3B73]">Наиболее выгодные сегменты:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {["Audi Q5 и Q7", "BMW 5-й серии и BMW X5", "Mercedes E-Class, GLC и GLE", "Volkswagen Passat и Tiguan"].map((model) => (
                <div key={model} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-[#0B3B73]">✓</span>
                  <span className="font-medium">{model}</span>
                </div>
              ))}
            </div>
            <ul className="space-y-2 mb-4">
              {["Огромный выбор — немецкий рынок значительно больше испанского", "Лизинговые автомобили 2–4 лет с полной сервисной историей", "Прозрачный пробег и один владелец — корпоративный парк", "Богатые комплектации, которые в Испании встречаются реже"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 text-[#0B3B73] font-bold mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-sm text-gray-600">По желанию клиента финальная проверка автомобиля и передача проходят на нашей площадке в Аликанте. Также доставляем в любую точку Испании после оформления. → <Link href="/ru/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Авто из Германии в Аликанте</Link></p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <details className="group/time rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">Сколько времени занимает привоз автомобиля</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/time:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>Весь процесс от заявки до получения автомобиля обычно занимает <strong>5–6 недель</strong>. Самовывоз значительно быстрее, автовоз — безопаснее.</p>
              <div className="space-y-2">
                {[{ step: "Поиск автомобиля", duration: "3–10 дней" }, { step: "Покупка и оформление сделки", duration: "1–3 дня" }, { step: "Доставка автовозом", duration: "от 15 рабочих дней" }, { step: "ITV и регистрация в DGT", duration: "2–5 дней" }].map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-2xl border bg-[#F6F8FC] px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                      <span className="font-medium text-sm">{item.step}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#0B3B73] whitespace-nowrap ml-3">{item.duration}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-2xl bg-[#0B3B73] text-white px-5 py-3">
                  <span className="font-bold text-sm">Итого от заявки до получения</span>
                  <span className="font-bold whitespace-nowrap ml-3 text-sm">5–6 недель</span>
                </div>
              </div>
            </div>
          </details>
        </section>

        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Получить точный расчёт стоимости</h2>
            <p className="text-sm text-gray-500 mb-5">Расчёт бесплатный и ни к чему вас не обязывает. Обычно отвечаем в течение одного рабочего дня.</p>
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

        <section className="mt-10">
          <p className="text-base font-semibold text-[#0B3B73] mb-3">Читайте также:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ href: "/ru/avto-iz-germanii/alicante", label: "Авто из Германии в Аликанте" }, { href: "/ru/avto-iz-germanii/nalogi-i-dokumenty", label: "Налоги и документы" }, { href: "/ru/avto-iz-germanii/registraciya-dgt", label: "Регистрация в DGT" }, { href: "/ru/avto-iz-germanii", label: "Авто из Германии в Испанию →" }].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Частые вопросы</h2>
          <div className="space-y-3">
            {[{ q: "Сколько стоит привезти авто из Германии в Испанию?", a: "Итоговая стоимость складывается из цены автомобиля на аукционе, доставки (1 200–1 700 €), налога IEDMT, ITV (100–150 €) и регистрации в DGT (около 100 €). Цены в Германии в среднем на 10–20% ниже испанских." }, { q: "Есть ли таможенные пошлины между Германией и Испанией?", a: "Нет. Обе страны в ЕС. При регистрации в Испании уплачивается налог IEDMT — подробнее на странице «Налоги и документы»." }, { q: "Выгодно ли везти авто из Германии в Испанию?", a: "Да, особенно в сегменте от 20 000 € и выше. Цены в среднем на 10–20% ниже испанских. Наиболее выгодны лизинговые авто 2–4 лет: Audi Q5/Q7, BMW 5-й серии и X5, Mercedes E-Class, GLC и GLE, VW Passat и Tiguan." }, { q: "Сколько времени занимает весь процесс?", a: "5–6 недель от заявки до получения: поиск 3–10 дней, покупка и оформление 1–3 дня, доставка автовозом от 15 рабочих дней, ITV и регистрация 2–5 дней." }].map((item, i) => (
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
     SEO target keywords:
     - cuánto cuesta importar coche Alemania España
     - precio coche segunda mano Alemania
     - traer coche de Alemania a España precio
     - impuesto matriculación coche importado / IEDMT
     - transporte coche Alemania España precio
     - coches Alemania más baratos que España
     - matricular coche importado España
  ══════════════════════════════════════════════════════════ */
  if (locale === "es") {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
          <img src="/icons/skolko3.png" alt="Cuánto cuesta importar un coche de Alemania a España — cálculo completo" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
            <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
              ¿Cuánto cuesta importar un coche de Alemania a España?
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Desglose completo del precio: compra, transporte, impuesto IEDMT, ITV y matriculación en DGT. Sin costes ocultos.
            </p>
          </div>
        </section>

        {/* ══ BLOQUE 1 — Partidas del coste ══ */}
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              De qué se compone el precio de un coche de Alemania a España
            </h2>
            <p>
              El precio final de importar un coche de Alemania a España no es solo el precio de compra del vehículo. Al traerlo a España hay que sumar el transporte, la gestión documental, la ITV y la matriculación en la DGT.
            </p>
            <br />
            <p className="font-semibold text-[#0B3B73] mb-3">Principales partidas del coste:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { icon: "🇩🇪", label: "Compra del vehículo", note: "precio en subasta o en concesionario" },
                { icon: "🚚", label: "Transporte desde Alemania", note: "camión porta-coches o traslado en tránsito" },
                { icon: "📄", label: "Matrícula de tránsito y seguro", note: "en caso de traslado propio" },
                { icon: "🔧", label: "ITV en España", note: "100–150 €" },
                { icon: "🇪🇸", label: "Matriculación en DGT", note: "unos 100 €" },
                { icon: "📊", label: "Impuesto IEDMT", note: "según emisiones de CO₂" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div><p className="font-semibold">{item.label}</p><p className="text-sm text-gray-500">{item.note}</p></div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-[#0B3B73] mb-1">El error más habitual al calcular el precio</p>
              <p>
                Comparar únicamente el precio del vehículo en Alemania con el precio en el mercado español. El coste real es la suma de todas las partidas anteriores. Por eso calculamos el importe total por adelantado, <strong>antes de tomar la decisión de compra</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ══ CALCULADORA ══ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-2">
            Calcule el precio de su vehículo importado de Alemania
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Introduzca los datos y obtenga un presupuesto orientativo del coche llave en mano en España.
          </p>
          <CarCalculatorClient locale="es" />
        </section>

        {/* ══ BLOQUE 2 — Transporte ══ */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              ¿Cuánto cuesta el transporte de un coche de Alemania a España?
            </h2>
            <p className="mb-4">
              El coste del transporte depende de la distancia y del método elegido. La opción más habitual es el camión porta-coches. El precio medio es de <strong>1.200–1.700 €</strong>.
            </p>
            <p className="mb-4">
              La alternativa es el traslado en tránsito con matrícula provisional alemana. En este caso los gastos incluyen la matrícula de tránsito, el seguro, la gasolina y los peajes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-2">🚛 Camión porta-coches</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> El vehículo no acumula kilómetros</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Más seguro para la carrocería y el tren de rodaje</li>
                  <li className="flex gap-2"><span className="text-green-600">✓</span> No requiere visado ni tiempo de viaje</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Plazo a partir de 15 días hábiles</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <p className="font-bold text-[#0B3B73] mb-2">🚗 Traslado en tránsito</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2"><span className="text-green-600">✓</span> Más rápido — posible en una semana</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> El vehículo acumula kilómetros extra</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Hay que organizar el desplazamiento</li>
                  <li className="flex gap-2"><span className="text-gray-400">—</span> Gastos de viaje adicionales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ BLOQUE 3 — Impuestos ══ */}
        <section className="mt-10">
          <div className="rounded-2xl border bg-[#F6F8FC] p-6">
            <h2 className="text-xl font-bold text-[#0B3B73] mb-3">
              Impuestos y pagos obligatorios al importar un coche de Alemania
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>
              No existen aranceles aduaneros entre Alemania y España — ambos países son miembros de la UE. Sin embargo, al matricular el vehículo en España son obligatorios: el impuesto <strong>IEDMT</strong> (se calcula individualmente según las emisiones de CO₂), la <strong>ITV</strong> (100–150 €) y la <strong>matriculación en la DGT</strong> (unos 100 €).
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Qué documentos se necesitan, cómo se calcula el IEDMT, qué son el CoC y la ficha reducida y qué errores retrasan con más frecuencia la matriculación — explicación detallada en la página de impuestos y documentación.
            </p>
            <Link href="/es/avto-iz-germanii/nalogi-i-dokumenty" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">
              Impuestos y documentación →
            </Link>
          </div>
        </section>

        {/* ══ BLOQUE 4 — Cuándo merece la pena ══ */}
        <section className="mt-10">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              ¿Cuándo merece la pena traer un coche de Alemania a España?
            </h2>
            <p>
              Los precios en el mercado alemán son de media un <strong>10–20% más bajos</strong> que en España. La diferencia varía según el modelo, el año y el equipamiento — es un cálculo individual. El ahorro es más notable en los segmentos medio y premium.
            </p>
            <br />
            <p className="mb-3 font-semibold text-[#0B3B73]">Los modelos más rentables para importar:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {["Audi Q5 y Q7", "BMW Serie 5 y BMW X5", "Mercedes Clase E, GLC y GLE", "Volkswagen Passat y Tiguan"].map((model) => (
                <div key={model} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                  <span className="text-[#0B3B73]">✓</span>
                  <span className="font-medium">{model}</span>
                </div>
              ))}
            </div>
            <ul className="space-y-2 mb-4">
              {[
                "Enorme variedad — el mercado alemán es mucho más grande que el español",
                "Vehículos de renting de 2–4 años con historial de mantenimiento completo",
                "Kilometraje verificable y un solo propietario — flota corporativa",
                "Equipamientos de alto nivel que en España son menos frecuentes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 text-[#0B3B73] font-bold mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="text-sm text-gray-600">
                A petición del cliente, la revisión final y la entrega del vehículo tienen lugar en nuestra sede de Alicante. También lo entregamos en cualquier punto de España tras la matriculación. →{" "}
                <Link href="/es/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Coches de Alemania en Alicante</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ══ BLOQUE 5 — Plazos (acordeón) ══ */}
        <section className="mt-10">
          <details className="group/time rounded-3xl border bg-white shadow-sm">
            <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h2 className="text-xl font-bold text-[#0B3B73]">¿Cuánto tiempo tarda todo el proceso?</h2>
              <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/time:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>
                El proceso completo desde la solicitud hasta la entrega del vehículo suele durar <strong>entre 5 y 6 semanas</strong>. El traslado en tránsito es considerablemente más rápido; el camión porta-coches, más seguro.
              </p>
              <div className="space-y-2">
                {[{ step: "Búsqueda del vehículo", duration: "3–10 días" }, { step: "Compra y gestión de la operación", duration: "1–3 días" }, { step: "Transporte en porta-coches", duration: "a partir de 15 días hábiles" }, { step: "ITV y matriculación en DGT", duration: "2–5 días" }].map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-2xl border bg-[#F6F8FC] px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                      <span className="font-medium text-sm">{item.step}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#0B3B73] whitespace-nowrap ml-3">{item.duration}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-2xl bg-[#0B3B73] text-white px-5 py-3">
                  <span className="font-bold text-sm">Total desde la solicitud hasta la entrega</span>
                  <span className="font-bold whitespace-nowrap ml-3 text-sm">5–6 semanas</span>
                </div>
              </div>
            </div>
          </details>
        </section>

        {/* ══ CTA ══ */}
        <section className="mt-10">
          <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Solicite un presupuesto detallado</h2>
            <p className="text-sm text-gray-500 mb-5">El presupuesto es gratuito y sin compromiso. Respondemos habitualmente en el plazo de un día hábil.</p>
            <p className="mb-3">Para elaborar el presupuesto necesitamos:</p>
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

        {/* ══ Navegación ══ */}
        <section className="mt-10">
          <p className="text-base font-semibold text-[#0B3B73] mb-3">Ver también:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ href: "/es/avto-iz-germanii/alicante", label: "Coches de Alemania en Alicante" }, { href: "/es/avto-iz-germanii/nalogi-i-dokumenty", label: "Impuestos y documentación" }, { href: "/es/avto-iz-germanii/registraciya-dgt", label: "Matriculación en DGT" }, { href: "/es/avto-iz-germanii", label: "Importar coche de Alemania →" }].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[
              { q: "¿Cuánto cuesta importar un coche de Alemania a España?", a: "El coste total incluye el precio del vehículo en subasta, el transporte (1.200–1.700 €), el impuesto IEDMT, la ITV (100–150 €) y la matriculación en DGT (unos 100 €). Los precios en Alemania son de media un 10–20% más bajos que en España." },
              { q: "¿Hay aranceles aduaneros entre Alemania y España?", a: "No. Ambos países son miembros de la UE. Al matricular el vehículo en España se paga el impuesto IEDMT — más información en la página de impuestos y documentación." },
              { q: "¿Merece la pena traer un coche de Alemania a España?", a: "Sí, especialmente a partir de 20.000 €. Los precios son de media un 10–20% más bajos que en España. Los más rentables son los vehículos de renting de 2–4 años: Audi Q5/Q7, BMW Serie 5 y X5, Mercedes Clase E, GLC y GLE, VW Passat y Tiguan." },
              { q: "¿Cuánto tiempo tarda todo el proceso?", a: "Entre 5 y 6 semanas desde la solicitud hasta la entrega: búsqueda 3–10 días, compra y gestión 1–3 días, transporte en porta-coches a partir de 15 días hábiles, ITV y matriculación 2–5 días." },
              { q: "¿Cuánto cuesta el transporte de un coche de Alemania a España?", a: "El transporte en camión porta-coches cuesta entre 1.200 y 1.700 €. La alternativa es el traslado en tránsito, más rápido pero con kilómetros adicionales en el vehículo." },
              { q: "¿Cuánto es el impuesto de matriculación IEDMT en España?", a: "El IEDMT depende de las emisiones de CO₂: 0% por debajo de 120 g/km, 4,75% entre 120 y 160 g/km, 9,75% entre 160 y 200 g/km, y 14,75% por encima de 200 g/km. Pueden aplicarse bonificaciones por comunidad autónoma." },
            ].map((item, i) => (
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
            <p className="text-base text-gray-700">¿Tiene más preguntas? Consulte nuestra sección de preguntas frecuentes</p>
            <Link href="/es/faq" className="flex-shrink-0 rounded-2xl border-2 border-[#0B3B73] px-6 py-3 font-bold text-[#0B3B73] transition hover:bg-white whitespace-nowrap">Ver todas las FAQ</Link>
          </div>
        </section>
      </main>
    );
  }

  /* ══════════════════════════════════════════════════════════
     EN VERSION
     SEO target keywords (English-speaking expats in Spain):
     - import car from Germany to Spain cost
     - how much to import car Germany Spain
     - buying car in Germany and bringing to Spain
     - IEDMT tax Spain
     - car transport Germany Spain price
     - Germany vs Spain car prices
     - ITV cost Spain
     - DGT registration cost Spain
     - used car Germany cheaper than Spain
  ══════════════════════════════════════════════════════════ */
  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
        <img src="/icons/skolko3.png" alt="How much does it cost to import a car from Germany to Spain — full price breakdown" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
          <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            How much does it cost to import a car from Germany to Spain?
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
            Full price breakdown at every stage: vehicle cost, transport, IEDMT tax, ITV and DGT registration. No hidden costs.
          </p>
        </div>
      </section>

      {/* ══ BLOCK 1 — Cost breakdown ══ */}
      <section className="mt-8">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
            What is included in the total cost of importing a car from Germany to Spain?
          </h2>
          <p>
            The total import cost is not just the purchase price of the vehicle. When bringing a car from Germany to Spain you also need to factor in transport, document preparation, ITV inspection and DGT registration.
          </p>
          <br />
          <p className="font-semibold text-[#0B3B73] mb-3">Main cost components:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              { icon: "🇩🇪", label: "Vehicle purchase", note: "auction or dealership price" },
              { icon: "🚚", label: "Transport from Germany", note: "car transporter or self-drive" },
              { icon: "📄", label: "Transit plates and insurance", note: "for self-drive collection" },
              { icon: "🔧", label: "ITV inspection in Spain", note: "€100–150" },
              { icon: "🇪🇸", label: "DGT registration", note: "approx. €100" },
              { icon: "📊", label: "IEDMT registration tax", note: "based on CO₂ emissions" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <div><p className="font-semibold">{item.label}</p><p className="text-sm text-gray-500">{item.note}</p></div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="font-bold text-[#0B3B73] mb-1">The most common mistake when calculating costs</p>
            <p>
              Comparing only the vehicle price in Germany to the Spanish market price. The real cost is the sum of all components above. That is exactly what we calculate upfront — <strong>before you make any purchase decision</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CALCULATOR ══ */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#0B3B73] mb-2">
          Calculate the total cost of your imported car
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Enter your vehicle details and get an indicative all-in price in Spain.
        </p>
        <CarCalculatorClient locale="en" />
      </section>

      {/* ══ BLOCK 2 — Transport cost ══ */}
      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
            How much does car transport from Germany to Spain cost?
          </h2>
          <p className="mb-4">
            Transport cost depends on the distance and method of delivery. The most common option is a car transporter. The average cost is <strong>€1,200–1,700</strong>.
          </p>
          <p className="mb-4">
            The alternative is self-collection on German transit plates. In this case costs include transit plates, insurance, fuel and motorway tolls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <p className="font-bold text-[#0B3B73] mb-2">🚛 Car transporter</p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-green-600">✓</span> No additional mileage on the vehicle</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Safer for the bodywork and mechanics</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> No need to travel to Germany</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> Delivery from 15 working days</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <p className="font-bold text-[#0B3B73] mb-2">🚗 Self-collection</p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Faster — possible within a week</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> Adds mileage to the vehicle</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> Requires travel to Germany</li>
                <li className="flex gap-2"><span className="text-gray-400">—</span> Additional travel expenses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BLOCK 3 — Taxes ══ */}
      <section className="mt-10">
        <div className="rounded-2xl border bg-[#F6F8FC] p-6">
          <h2 className="text-xl font-bold text-[#0B3B73] mb-3">
            Taxes and mandatory fees when importing a car from Germany to Spain
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>
            There are no customs duties between Germany and Spain — both are EU members. However, when registering the vehicle in Spain the following are mandatory: the <strong>IEDMT</strong> registration tax (calculated individually based on CO₂ emissions), <strong>ITV</strong> inspection (€100–150) and <strong>DGT registration</strong> (approx. €100).
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Which documents are required, how the IEDMT is calculated, what a CoC and ficha reducida are, and which mistakes most commonly delay registration — full breakdown on a dedicated page.
          </p>
          <Link href="/en/avto-iz-germanii/nalogi-i-dokumenty" className="inline-flex items-center gap-2 rounded-2xl bg-[#0B3B73] px-5 py-3 font-bold text-white text-sm transition hover:brightness-110">
            Taxes and documentation →
          </Link>
        </div>
      </section>

      {/* ══ BLOCK 4 — When is it worth it? ══ */}
      <section className="mt-10">
        <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
            When is buying a car in Germany cheaper than in Spain?
          </h2>
          <p>
            German market prices are on average <strong>10–20% lower</strong> than in Spain. The difference depends on the specific model, year and specification — it varies case by case. The saving is most significant in the mid-range and premium segments.
          </p>
          <br />
          <p className="mb-3 font-semibold text-[#0B3B73]">The best value models to import:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {["Audi Q5 and Q7", "BMW 5-Series and BMW X5", "Mercedes E-Class, GLC and GLE", "Volkswagen Passat and Tiguan"].map((model) => (
              <div key={model} className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                <span className="text-[#0B3B73]">✓</span>
                <span className="font-medium">{model}</span>
              </div>
            ))}
          </div>
          <ul className="space-y-2 mb-4">
            {[
              "Huge selection — the German market is significantly larger than the Spanish one",
              "2–4 year-old lease returns with full service history",
              "Verified mileage and single corporate owner",
              "High-spec configurations that are rarely available in Spain",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="flex-shrink-0 text-[#0B3B73] font-bold mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-[#F6F8FC] border p-5">
            <p className="text-sm text-gray-600">
              At the client's request, the final vehicle inspection and handover take place at our Alicante premises. We also deliver anywhere in Spain after registration. →{" "}
              <Link href="/en/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">Cars from Germany to Alicante</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══ BLOCK 5 — Timeline (accordion) ══ */}
      <section className="mt-10">
        <details className="group/time rounded-3xl border bg-white shadow-sm">
          <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-bold text-[#0B3B73]">How long does the whole import process take?</h2>
            <span className="flex-shrink-0 text-[#0B3B73] transition-transform duration-300 group-open/time:rotate-180"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-base leading-relaxed mb-4" style={{ textAlign: "justify" }}>
              The full process from enquiry to vehicle collection typically takes <strong>5–6 weeks</strong>. Self-collection is considerably faster; car transporter delivery is safer.
            </p>
            <div className="space-y-2">
              {[{ step: "Vehicle search", duration: "3–10 days" }, { step: "Purchase and paperwork", duration: "1–3 days" }, { step: "Car transporter delivery", duration: "from 15 working days" }, { step: "ITV and DGT registration", duration: "2–5 days" }].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-2xl border bg-[#F6F8FC] px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3B73] text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                    <span className="font-medium text-sm">{item.step}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#0B3B73] whitespace-nowrap ml-3">{item.duration}</span>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-2xl bg-[#0B3B73] text-white px-5 py-3">
                <span className="font-bold text-sm">Total from enquiry to collection</span>
                <span className="font-bold whitespace-nowrap ml-3 text-sm">5–6 weeks</span>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* ══ CTA ══ */}
      <section className="mt-10">
        <div className="rounded-3xl border p-6 md:p-8 text-base leading-relaxed" style={{ textAlign: "justify" }}>
          <h2 className="text-xl font-bold text-[#0B3B73] mb-2">Get an accurate cost estimate</h2>
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

      {/* ══ Navigation ══ */}
      <section className="mt-10">
        <p className="text-base font-semibold text-[#0B3B73] mb-3">Read also:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[{ href: "/en/avto-iz-germanii/alicante", label: "Cars from Germany to Alicante" }, { href: "/en/avto-iz-germanii/nalogi-i-dokumenty", label: "Taxes and documentation" }, { href: "/en/avto-iz-germanii/registraciya-dgt", label: "DGT registration" }, { href: "/en/avto-iz-germanii", label: "Import a car from Germany →" }].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">{link.label}</Link>
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#0B3B73] mb-5">Frequently asked questions</h2>
        <div className="space-y-3">
          {[
            { q: "How much does it cost to import a car from Germany to Spain?", a: "The total cost includes the auction vehicle price, transport to Spain (€1,200–1,700), IEDMT registration tax, ITV inspection (€100–150) and DGT registration (approx. €100). German prices are on average 10–20% lower than the Spanish market." },
            { q: "Are there customs duties between Germany and Spain?", a: "No. Both countries are EU members. When registering in Spain, the IEDMT tax is payable — full details on the taxes and documentation page." },
            { q: "Is it worth importing a car from Germany to Spain?", a: "Yes, especially for vehicles priced at €20,000 or more. Prices average 10–20% below Spanish levels. The best value is found in 2–4 year-old lease returns: Audi Q5/Q7, BMW 5-Series and X5, Mercedes E-Class, GLC and GLE, VW Passat and Tiguan." },
            { q: "How long does the whole process take?", a: "5–6 weeks from enquiry to collection: vehicle search 3–10 days, purchase and paperwork 1–3 days, car transporter delivery from 15 working days, ITV and registration 2–5 days." },
            { q: "How much does it cost to transport a car from Germany to Spain?", a: "Car transporter delivery costs €1,200–1,700. The alternative is self-collection on transit plates, which is faster but adds mileage to the vehicle." },
            { q: "What is the IEDMT registration tax in Spain?", a: "The IEDMT depends on CO₂ emissions: 0% below 120 g/km, 4.75% for 120–160 g/km, 9.75% for 160–200 g/km, and 14.75% above 200 g/km. Regional discounts may apply." },
          ].map((item, i) => (
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
          <p className="text-base text-gray-700">Have more questions? Visit our full FAQ section</p>
          <Link href="/en/faq" className="flex-shrink-0 rounded-2xl border-2 border-[#0B3B73] px-6 py-3 font-bold text-[#0B3B73] transition hover:bg-white whitespace-nowrap">View all FAQs</Link>
        </div>
      </section>
    </main>
  );
}
