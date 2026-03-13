import Link from "next/link";
import React from "react";
import { Resend } from "resend";
import type { Metadata } from "next";
import { AccordionProvider, ControlledAccordions } from "@/components/HomeAccordions";

/* ─────────────────────────────────────────────────────────────
   Schema.org FAQPage — регистрация авто в Испании
───────────────────────────────────────────────────────────── */
function getSchemaFAQ(locale: string) {
  const faqs: Record<string, Array<{ q: string; a: string }>> = {
    ru: [
      { q: "Сколько стоит регистрация автомобиля в Испании?", a: "Стоимость зависит от налога IEDMT (0–14,75% от стоимости авто в зависимости от CO₂), тасы DGT (99,77 €), ITV (100–150 €) и стоимости услуг хестора. Мы рассчитываем полную стоимость заранее." },
      { q: "Сколько времени занимает регистрация авто в Испании?", a: "От 1 до 3 недель с момента прибытия автомобиля в Испанию. Весь процесс от заявки до получения испанских номеров — 5–6 недель." },
      { q: "Нужно ли лично присутствовать при регистрации в DGT?", a: "Нет. Мы берём на себя всё взаимодействие с DGT, хестором и ITV. Ваше личное присутствие не требуется." },
      { q: "Можно ли зарегистрировать авто из Германии?", a: "Да. Мы регистрируем автомобили из Германии и других стран ЕС, включая оформление ITV, IEDMT и подачу документов в DGT." },
      { q: "Что такое IEDMT и как его рассчитать?", a: "IEDMT — испанский налог на регистрацию автомобиля. Ставка зависит от уровня выбросов CO₂: 0% (до 120 г/км), 4,75%, 9,75% или 14,75%. Мы рассчитываем точную сумму до покупки." },
    ],
    es: [
      { q: "¿Cuánto cuesta matricular un coche en España?", a: "El coste depende del impuesto IEDMT (0–14,75% según CO₂), la tasa DGT (99,77 €), la ITV (100–150 €) y los honorarios de gestoría. Calculamos el coste total por adelantado." },
      { q: "¿Cuánto tarda la matriculación en España?", a: "Entre 1 y 3 semanas desde la llegada del vehículo a España. El proceso completo, desde la solicitud hasta obtener las matrículas españolas, dura 5–6 semanas." },
      { q: "¿Es necesaria mi presencia en la DGT?", a: "No. Nos encargamos de toda la tramitación con la DGT, la gestoría y la ITV. No necesitas ir a ninguna oficina." },
      { q: "¿Se puede matricular un coche de Alemania?", a: "Sí. Matriculamos coches de Alemania y otros países de la UE, incluyendo ITV, IEDMT y presentación de documentos en la DGT." },
      { q: "¿Qué es el IEDMT?", a: "El IEDMT es el impuesto de matriculación. El tipo depende de las emisiones de CO₂: 0% (hasta 120 g/km), 4,75%, 9,75% o 14,75%. Calculamos el importe exacto antes de la compra." },
    ],
    en: [
      { q: "How much does car registration in Spain cost?", a: "The cost depends on the IEDMT tax (0–14.75% based on CO₂), DGT fee (€99.77), ITV inspection (€100–150), and gestor fees. We calculate the full cost upfront." },
      { q: "How long does car registration in Spain take?", a: "1 to 3 weeks from the car's arrival in Spain. The full process from application to receiving Spanish plates takes 5–6 weeks." },
      { q: "Do I need to be present at the DGT?", a: "No. We handle all interactions with the DGT, gestor and ITV on your behalf. Your personal presence is not required." },
      { q: "Can I register a car imported from Germany?", a: "Yes. We register cars from Germany and other EU countries, including ITV, IEDMT and DGT document submission." },
      { q: "What is IEDMT?", a: "IEDMT is the Spanish vehicle registration tax. The rate depends on CO₂ emissions: 0% (up to 120 g/km), 4.75%, 9.75% or 14.75%. We calculate the exact amount before purchase." },
    ],
  };
  const items = faqs[locale] || faqs.ru;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };
}

// Metadata генерируется динамически в generateMetadata (ниже)
// Статический экспорт убран — используем generateMetadata для мультиязычности

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params?.locale || "ru";
  if (locale === "es") return {
    title: "Matriculación de coche en España — ITV, IEDMT, DGT | AutoexpertEU",
    description: "Matriculación de vehículos con matrícula extranjera en España. ITV, impuesto IEDMT, gestoría y DGT — servicio llave en mano.",
  };
  if (locale === "en") return {
    title: "Car registration in Spain — ITV, IEDMT, DGT | AutoexpertEU",
    description: "Turnkey car registration in Spain for vehicles with foreign plates. ITV, IEDMT tax, gestor and DGT — without bureaucracy.",
  };
  return {
    title: "Регистрация автомобиля в Испании — ITV, IEDMT, DGT | AutoexpertEU",
    description: "Постановка автомобиля на учёт в Испании под ключ: ITV, налог IEDMT, хестор и DGT — без бюрократии и рисков.",
  };
}

type Locale = "ru" | "en" | "es";

function copy(locale: string) {
  const L = (locale as Locale) || "ru";

  if (L === "en") {
    return {
      heroText: "Turnkey car registration in Spain — without bureaucracy and risks.",
      heroSub: "Car registration for vehicles with foreign plates: ITV, taxes, DGT",
      intro:
        "Our company acts as an agency for car import registration of any complexity. We register cars in Spain purchased through our car selection service, we also register cars imported from Germany and other European countries, and our services include preferential customs clearance of cars from Ukraine.",
      btnOrder: "Order car registration",

      hService: "Car registration service in Spain",
      pService:
        "Car registration in Spain is a complex administrative process involving taxes, documents, technical requirements and interaction with authorities.\nWe provide full support for registering the car on Spanish plates regardless of where and how it was purchased.",

      hWhatCars: "Which cars we register",
      whatCarsIntro: "We provide registration services for:",
      whatCarsList: [
        "cars purchased through Autoexpert EU",
        "cars bought independently in Spain or other EU countries",
        "cars brought by the client from Europe",
        "cars imported under the preferential procedure for Ukrainian citizens",
      ],

      hUa: "Preferential registration for Ukrainians",
      uaIntro: "We support registration of cars imported to Spain by Ukrainian citizens under the preferential procedure.",
      uaList: [
        "assess eligibility",
        "verify import compliance",
        "support tax and administrative procedures",
        "ensure registration on Spanish plates"
      ],
      uaOutro: "You avoid mistakes that can lead to refusal or additional tax assessments.",

      hIncludes: "What is included in the registration service",
      includesIntro: "The service includes:",
      includesList: [
        "Customs clearance",
        "Technical documentation",
        "ITV support",
        "Tax optimization",
        "Gestor support",
        "DGT filing",
        "Environmental badge",
        "Plates and documents",
        "Handover"
      ],

      hInsurance: "Car insurance (additional service)",
      insuranceText:
        "We help with mandatory car insurance in Spain for both Spanish and foreign cars.",

      hResult: "What result do you get:",
      resultIntro: "You get:",
      resultList: [
        "correct and legal car registration in Spain",
        "reduced risks and mistakes",
        "saved time and nerves",
        "ability to use the car legally",
        "help with car insurance",
      ],

      hReady: "Still have questions? We can help.",
      pReady:
        "Don't hesitate to ask questions — we will be happy to help and explain everything in detail.",
      btnWhatsApp: "Ask on WhatsApp",

      formName: "Your name",
      formPhone: "WhatsApp phone number",
      formSubject: "Select a topic",
      formSubjectsOptions: [
        "Car registration",
        "Insurance",
        "Registration for Ukrainians",
        "Legal question",
        "Other"
      ],
      formEmail: "Email",
      formMsg: "Message (up to 500 characters)",
      formSend: "Ask a specialist",
      formHint:
        "Briefly describe your situation: plate type, country of registration, do you need registration, insurance or consultation.",
    };
  }

  if (L === "es") {
    return {
      heroText: "Matriculación de coche en España “llave en mano” — sin burocracia ni riesgos.",
      heroSub: "Matriculación de vehículos con matrícula extranjera: ITV, impuestos y DGT",
      intro:
        "Nuestra empresa actúa como una agencia para el registro de importación de coches de cualquier complejidad. Matriculamos en España coches adquiridos a través de nuestro servicio de selección de coches, también matriculamos coches importados de Alemania y otros países de Europa, y nuestros servicios incluyen el despacho de aduanas preferente de coches de Ucrania.",
      btnOrder: "Pedir matriculación",

      hService: "Servicio de matriculación en España",
      pService:
        "La matriculación en España es un procedimiento administrativo complejo: impuestos, documentos, requisitos técnicos y trámites con organismos públicos.\nNos encargamos de todo el proceso de matriculación en placas españolas, independientemente de dónde y cómo se compró el coche.",

      hWhatCars: "Qué coches matriculamos",
      whatCarsIntro: "Prestamos el servicio en los siguientes casos:",
      whatCarsList: [
        "coches comprados a través de Autoexpert EU",
        "coches comprados por el cliente en España u otros países de la UE",
        "coches traídos por el cliente desde Europa",
        "coches importados por la vía preferente para ciudadanos de Ucrania",
      ],

      hUa: "Matriculación por la vía preferente para ucranianos",
      uaIntro: "Acompañamos la matriculación de coches introducidos en España por ciudadanos de Ucrania mediante el procedimiento preferente.",
      uaList: [
        "analizamos el derecho a las exenciones",
        "verificamos la corrección de la importación",
        "acompañamos los trámites fiscales y administrativos",
        "aseguramos la matriculación en placas españolas"
      ],
      uaOutro: "Evitas errores que pueden llevar a denegación o a pagos adicionales.",

      hIncludes: "Qué incluye el servicio de matriculación",
      includesIntro: "El servicio incluye:",
      includesList: [
        "Trámites aduaneros",
        "Ficha Técnica Reducida",
        "Cita ITV",
        "Impuestos IEDMT",
        "Gestoría",
        "DGT",
        "Distintivo ambiental",
        "Placas y documentos",
        "Entrega"
      ],

      hInsurance: "Seguro del coche (servicio adicional)",
      insuranceText:
        "Ayudamos con el seguro obligatorio de coche en España, tanto para matrículas españolas como extranjeras.",

      hResult: "Qué resultado obtienes:",
      resultIntro: "Obtienes:",
      resultList: [
        "matriculación correcta y legal en España",
        "minimización de riesgos y errores",
        "ahorro de tiempo y nervios",
        "uso legal del coche",
        "ayuda con el seguro",
      ],

      hReady: "¿Aún tienes dudas? Te ayudamos.",
      pReady:
        "No dudes en preguntar — estaremos encantados de ayudarte y explicarte todo en detalle.",
      btnWhatsApp: "Preguntar por WhatsApp",

      formName: "Tu nombre",
      formPhone: "Número de WhatsApp",
      formSubject: "Elige un tema",
      formSubjectsOptions: [
        "Matriculación de coche",
        "Seguro",
        "Matriculación para ucranianos",
        "Cuestión jurídica",
        "Otro"
      ],
      formEmail: "Email",
      formMsg: "Mensaje (hasta 500 caracteres)",
      formSend: "Preguntar al especialista",
      formHint:
        "Describe brevemente tu situación: tipo de matrícula, país de registro, si necesitas matriculación, seguro o consulta.",
    };
  }

  // ru
  return {
    heroText: "Постановка автомобиля на учёт в Испании под ключ — регистрация авто с иностранными номерами",
    heroSub: "Регистрация автомобиля в Испании с иностранными номерами: ITV, налоги, DGT",
    intro:
      "Наша компания работает как агентство по оформлению импорта машин и регистрации автомобилей в Испании. Мы хорошо известны многим жителям Коста-Бланка, так как ранее работали под названием Document Service, занимаясь постановкой автомобилей на учёт в Испании.\nС 2022 года нами были поставлены на учёт десятки автомобилей граждан Украины, а также автомобилей с иностранными номерами, ввезённых из Германии и других стран Европейского союза. В настоящее время мы расширили сферу своей деятельности и присоединились к группе компаний, занимающихся подбором автомобилей, что позволяет нам сопровождать клиента не только на этапе регистрации, но и на этапе подбора и покупки автомобиля. Мы обеспечиваем регистрацию автомобиля в Испании под ключ: ITV, налоги и оформление в DGT.",
    btnOrder: "Получить консультацию по регистрации",

    hService: "Регистрация автомобиля в Испании под ключ",
    pService:
      "Регистрация автомобиля в Испании — это многоэтапная процедура, включающая прохождение ITV, уплату налогов и оформление автомобиля в DGT.\nМы берём на себя полное сопровождение процедуры регистрации автомобиля на испанские номера, независимо от того, где и каким образом был приобретён автомобиль.",

    hWhatCars: "Какие автомобили можно зарегистрировать в Испании",
    whatCarsIntro: "Мы оказываем услуги по регистрации и постановке автомобиля на учёт в Испании в следующих случаях:",
    whatCarsList: [
      "автомобили, приобретённые через Autoexpert EU с последующей регистрацией на испанские номера;",
      "автомобили, самостоятельно купленные клиентом в Испании или других странах Европейского союза;",
      "автомобили, ввезённые в Испанию из Германии и других стран ЕС и подлежащие регистрации в DGT;",
      "автомобили с иностранными номерами, включая транспорт, ранее зарегистрированный за пределами Испании;",
      "автомобили, ввезённые в Испанию по льготной процедуре для граждан Украины, с учётом действующих налоговых и административных послаблений.",
    ],

    hUa: "Регистрация автомобиля в Испании по льготной процедуре для граждан Украины",
    uaIntro: "Регистрация автомобиля в Испании для граждан Украины требует корректного прохождения ITV, правильного оформления документов и точной подачи данных в DGT. Ошибки на любом из этапов могут привести к отказу в регистрации, потере льгот или проблемам с налогами в будущем, в том числе при продаже автомобиля.\nВ рамках регистрации автомобиля по льготной процедуре мы обеспечиваем:",
    uaList: [
        "Таможенное оформление автомобиля — взаимодействие с таможенным брокером, подготовку и подачу пакета документов для освобождения от таможенных пошлин по льготным основаниям (Cambio de Residencia при переезде на ПМЖ, а также льготы для граждан Украины).",
        "Оформление технической документации — получение Ficha Técnica Reducida (сокращённой технической карты), без которой невозможно пройти ITV и поставить автомобиль на учёт в Испании.",
        "Сопровождение на ITV — запись на техосмотр и личное присутствие нашего многоязычного менеджера (RU / EN / ES) на станции ITV. Это позволяет устранить языковой барьер, корректно ответить на вопросы техников и обеспечить успешное прохождение осмотра.",
        "Налоговый расчёт и проверка льгот — профессиональный расчёт налога на постановку на учёт (IEDMT) и анализ законных оснований для его снижения либо полного освобождения от уплаты в рамках льготной процедуры.",
        "Сопровождение специализированного хестора — работа с хестором, который занимается исключительно регистрацией автомобилей в Испании и знает практику взаимодействия с DGT именно по автомобилям граждан Украины.",
        "Подача документов в DGT — формирование и подача полного пакета документов в DGT, организация записи и сопровождение процедуры без участия клиента в очередях и без ошибок в документах."
    ],
    uaOutro: "Корректное прохождение ITV и правильная подача документов в DGT имеют ключевое значение: именно на этих этапах чаще всего возникают проблемы у граждан Украины при самостоятельной регистрации автомобиля в Испании.",

    hIncludes: "Что входит в регистрацию автомобиля в Испании: ITV, налоги, DGT",
    includesIntro: "В услугу регистрации автомобиля в Испании под ключ входит полный комплекс административных и технических процедур:",
    includesList: [
      "Таможенное оформление автомобиля — взаимодействие с таможенным брокером, подготовка и подача пакета документов для освобождения от таможенных пошлин по льготным основаниям (Cambio de Residencia при переезде на ПМЖ, а также льготы для граждан Украины).",
      "Оформление технической документации — получение Ficha Técnica Reducida (сокращённой технической карты), необходимой для прохождения ITV.",
      "Сопровождение на ITV — запись и личное присутствие нашего многоязычного менеджера (RU / EN / ES) на станции техосмотра для устранения языкового барьера и корректного взаимодействия с техническими специалистами.",
      "Налоговый расчёт и оптимизация — профессиональный расчёт налога на постановку на учёт (IEDMT) и анализ законных оснований для его снижения либо полного освобождения от уплаты.",
      "Сопровождение специализированного хестора — работа с хестором, который занимается исключительно регистрацией автомобилей в Испании и знает практику взаимодействия с DGT.",
      "Подача документов в DGT — формирование и подача полного пакета документов, организация записи и сопровождение процедуры без участия клиента в очередях.",
      "Получение экологической метки DGT — оформление и получение официальной экологической наклейки (B, C, ECO или 0) в соответствии с характеристиками автомобиля.",
      "Получение регистрационных документов и номерных знаков — выдача готовых документов DGT и организация изготовления испанских номерных знаков.",
      "Передача документов клиенту — передача полного пакета регистрационных документов и номерных знаков владельцу автомобиля.",
    ],

    hInsurance: "Страхование автомобиля в Испании для авто с иностранными номерами",
    insuranceText:
      "Мы помогаем с оформлением обязательного страхового полиса на автомобиль в Испании — как для автомобилей с испанской регистрацией, так и для автомобилей с иностранными номерами, включая транспорт, временно находящийся на территории Испании.\n⚠️ Важно: в Испании запрещено эксплуатировать автомобиль без действующей страховки, независимо от того, на каких номерах зарегистрирован автомобиль — испанских или иностранных. Отсутствие страхового полиса может повлечь штраф, эвакуацию автомобиля и отказ в выплатах при ДТП.\nМы работаем с проверенными страховыми агентами в Испании, которые говорят на русском и английском языках и имеют практический опыт страхования автомобилей с иностранными номерами. В большинстве случаев оформление страховки через агента обходится дешевле, чем прямое обращение в страховую компанию, за счёт специальных агентских тарифов.\nМы подбираем страхового агента с приоритетом реальных страховых выплат, чтобы в случае ДТП или страхового случая у клиента не возникло проблем с формальными отказами, скрытыми ограничениями или непониманием условий договора.\nЕсли вам требуется страхование автомобиля в Испании на русском языке, включая страховку авто с иностранными номерами, мы предложим надёжное и законное решение, соответствующее требованиям испанского законодательства.",

    hResult: "Какой результат Вы получаете:",
    resultIntro: "Вы получаете:",
    resultList: [
      "корректную и законную регистрацию автомобиля в Испании, без рисков отказа в DGT",
      "правильное прохождение ITV и подачу документов, без ошибок, которые приводят к проблемам при продаже авто",
      "сохранение налоговых льгот, если вы имеете на них право",
      "возможность легально эксплуатировать автомобиль в Испании, включая авто с иностранными номерами",
      "экономию времени и снятие языкового барьера — мы сопровождаем процесс лично",
      "оформление обязательной страховки автомобиля, включая авто на иностранных номерах",
    ],

    hReady: "Остались вопросы? Мы поможем разобраться",
    pReady:
      "Не стесняйтесь задавать вопросы — мы с удовольствием поможем и подробно всё объясним.",
    btnWhatsApp: "Задать вопрос в WhatsApp",

    formName: "Ваше имя",
    formPhone: "Номер телефона (WhatsApp)",
    
    formSubject: "Выберите тему сообщения - мы быстрее ответим",
    formSubjectsOptions: [
      "Регистрация автомобиля в Испании",
      "Регистрация автомобиля из Германии",
      "Регистрация автомобиля из ЕС",
      "Юридический вопрос (Испания)",
      "Страхование испанского автомобиля",
      "Страхование иностранного автомобиля.",
      "Льготная регистрация автомобиля",
      "Юридический вопрос (Украина)"
    ],
    formEmail: "Email",
    formMsg: "Сообщение (до 500 символов)",
    formSend: "Задать вопрос специалисту",
    formHint:
      "Кратко опишите ситуацию: тип номеров, страна регистрации автомобиля, нужна регистрация или страховка или консультация и мы свяжем с Вами менеджера по этому вопросу.",
  };
}

/* ─────────────────────────────────────────────────────────────
   КОМПОНЕНТ ДЛЯ АККОРДЕОНОВ (ИСПРАВЛЕН ДЛЯ МОБИЛЬНЫХ ЭКРАНОВ)
───────────────────────────────────────────────────────────── */
function TitleWithIcon({
  children,
  icon = "/car-loan.png",
  className = "h-12 sm:h-14 md:h-20 w-auto", // Уменьшена базовая высота картинки
  animate = true,
  boostAnimation = false
}: {
  children: React.ReactNode;
  icon?: string;
  className?: string;
  animate?: boolean;
  boostAnimation?: boolean;
}) {
  let imgClass = `${className} object-contain shrink-0 opacity-90 transition-transform duration-500 ease-out origin-left`;

  if (animate) {
     if (boostAnimation) {
         imgClass += " group-hover/icon:translate-x-2 md:group-hover/icon:translate-x-8 group-hover/icon:scale-110";
     } else {
         imgClass += " group-hover/icon:translate-x-1 md:group-hover/icon:translate-x-2 group-hover/icon:scale-105"; 
     }
  }

  return (
    // Уменьшены отступы (gap-4 вместо gap-8) и размер шрифта (text-[15px] вместо text-lg) на мобилках
    <span className="group/icon flex flex-row items-center w-full text-left gap-4 md:gap-8">
      {/* Уменьшена фиксированная ширина контейнера иконки с 140px до 60px на телефонах */}
      <div className="flex-shrink-0 w-[60px] md:w-[140px] flex justify-center md:justify-start">
        <img
          src={icon}
          alt=""
          className={imgClass}
          draggable={false}
        />
      </div>
      <span className="flex-1 transition-colors duration-300 group-hover/icon:text-[#0B3B77] text-[15px] sm:text-base md:text-xl font-bold leading-tight">
        {children}
      </span>
    </span>
  );
}

export default function Page({ params, searchParams }: { params: { locale: string }; searchParams?: { sent?: string } }) {
  const locale = params.locale;
  const requestHref = "#contact-form";
  const C = copy(locale);

  const waPhoneHref = "https://wa.me/34722756695";
  const sent = searchParams?.sent === "1";

  async function sendContact(formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const MIN_LEN = 10;
    if (!name || !phone || !subject || !email || message.length < MIN_LEN) {
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.CONTACT_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_TO || "onboarding@resend.dev",
      subject: `Autoexpert EU — новая заявка (registro)`,
      text: `Новая заявка (registro)\n\nИмя: ${name}\nТелефон/WhatsApp: ${phone}\nEmail: ${email}\nТема: ${subject}\n\nСообщение:\n${message}`,
      html: `
        <h2>Новая заявка (registro)</h2>
        <ul>
          <li><b>Имя:</b> ${name}</li>
          <li><b>Телефон/WhatsApp:</b> ${phone}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Тема:</b> ${subject}</li>
          <li><b>Сообщение:</b><br/>${message}</li>
        </ul>
      `,
    });
  }

  let items = [
    {
      title: (
        <TitleWithIcon icon="/icons/reg.png" className="h-12 sm:h-16 md:h-24 w-auto" boostAnimation={true}>
          {C.hWhatCars}
        </TitleWithIcon>
      ),
      content: (
        <div>
          <p className="mt-0" style={{ textAlign: "justify" }}>
            {C.whatCarsIntro}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6" style={{ textAlign: "justify" }}>
            {C.whatCarsList.map((x: string, i: number) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: (
        <TitleWithIcon icon="/icons/reg2.png" className="h-12 sm:h-14 md:h-20 w-auto">
          {C.hIncludes}
        </TitleWithIcon>
      ),
      content: (
        <div>
          <p className="mt-0 mb-3" style={{ textAlign: "justify" }}>
            {(C as any).includesIntro}
          </p>
          <ul className="list-disc space-y-1 pl-6" style={{ textAlign: "justify" }}>
            {C.includesList.map((x: string, i: number) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: <TitleWithIcon icon="/icons/str.png" className="h-12 sm:h-16 md:h-24 w-auto">{C.hInsurance}</TitleWithIcon>,
      content: (
        <p className="whitespace-pre-line" style={{ textAlign: "justify" }}>
          {C.insuranceText}
        </p>
      ),
    },
    {
      title: <TitleWithIcon icon="/icons/ua0.png" className="h-12 sm:h-16 md:h-24 w-auto">{C.hUa}</TitleWithIcon>,
      content: (
        <div>
          <p className="mt-0 whitespace-pre-line" style={{ textAlign: "justify" }}>
            {(C as any).uaIntro}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6" style={{ textAlign: "justify" }}>
            {((C as any).uaList || []).map((x: string, i: number) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
          <p className="mt-3 whitespace-pre-line" style={{ textAlign: "justify" }}>
             {(C as any).uaOutro}
          </p>
        </div>
      ),
    },
  ];

  if (locale === "ru") {
    items.push({
      title: <TitleWithIcon icon="/icons/pravo.png" className="h-12 sm:h-16 md:h-24 w-auto">Юридические услуги и Document Service для граждан Украины</TitleWithIcon>,
      content: (
        <p className="whitespace-pre-line" style={{ textAlign: "justify" }}>
          {`Наша компанія співпрацює з провідними українськими юристами в Києві, а також з російськомовними юристами та адвокатами в Іспанії. 
Тому, ми маємо честь запропонувати Вам за мінімальними тарифами наступні послуги: 

I. Юридичні консультації та допомога в отриманні таких документів:
1. Дублікати документів цивільного стану (свідоцтва про народження, шлюб, розлучення, смерть, свідоцтва про зміну імені, витяги). Внесення змін у такі документи для виправлення помилок.
2. Витяг про несудимість
3. Копії судового рішення
4. Архівні довідки
5. Довідка з МРЕО з інформацією про посвідчення водія.
6. Апостиль Мінюст
7. Апостиль Міносвіти
8.  Отримання ІПН вперше і повторно.
9. Заява про сімейний стан.
10.  Паспорти внутрішній та закордонний.
11.  Переклади консульські та присяжні.
12.  Легалізація іспанських документів для України в Консульстві.
II. Підготовка, подання та повний супровід в Україні позовів про розірвання шлюбу, поділ майна, визначення місця проживання дитини. Без Вашої участі в судових засіданнях.
Послуги кримінального адвоката.
   
З усіх питань пишіть у розділі «Контакти» нашого сайту.`}
        </p>
      ),
    });
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchemaFAQ(locale)) }} />
      {/* ─────────────────────────────────────────────────────────
          ПЕРЕРАБОТАННЫЙ БЛОК HERO (картинка, заголовок, кнопка) 
      ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] min-h-[420px] md:min-h-[400px] flex flex-col justify-center">
        {/* Фоновая картинка */}
        <img 
          src="/media/images/registro.jpg" 
          alt="" 
          className="absolute inset-0 h-full w-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Контейнер с контентом. 
            ИСПРАВЛЕНО: Добавлен pt-20, чтобы текст никогда не уходил под шапку меню */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-20 pb-12 md:py-12 text-center w-full">
          
          <h1 className="text-balance text-2xl sm:text-3xl font-semibold text-white md:text-4xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)] leading-snug max-w-4xl mx-auto">
            {C.heroText}
          </h1>

          {"heroSub" in C && (
            <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/95 md:text-lg [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] leading-relaxed mx-auto">
              {(C as any).heroSub}
            </p>
          )}

          <div className="mt-8 w-full max-w-[280px] sm:max-w-md mx-auto">
            <Link
              href={requestHref}
              className="group relative flex w-full h-auto items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-4 py-4 text-white shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_25px_rgba(0,0,0,0.25)] active:scale-95 text-center"
            >
              <span className="relative z-10 text-[15px] sm:text-lg font-bold tracking-wide drop-shadow-md whitespace-normal leading-tight">
                {C.btnOrder}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </Link>
          </div>

        </div>
      </section>
      {/* КОНЕЦ HERO СЕКЦИИ */}

      <section className="mt-8">
        <p className="whitespace-pre-line" style={{ textAlign: "justify" }}>
          {C.intro}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center">
          <TitleWithIcon icon="/icons/matricula.png" className="h-12 w-auto md:h-16" animate={false}>
            {C.hService}
          </TitleWithIcon>
        </h2>
        <p className="mt-3 whitespace-pre-line" style={{ textAlign: "justify" }}>
          {C.pService}
        </p>
      </section>

      <section className="mt-10 space-y-3 rounded-3xl border border-gray-100 bg-[#F9FAFB] p-4 md:p-8 shadow-sm">
        <AccordionProvider>
          <ControlledAccordions
            scopeId="registro"
            summaryAlign="left"
            items={items}
          />
        </AccordionProvider>
      </section>

      {/* HIGHLIGHTED RESULT BLOCK */}
      <section className="mt-10 rounded-3xl border border-gray-200 bg-white px-6 pt-2 pb-8 md:px-10 md:pt-4 md:pb-10 shadow-xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center">
            <TitleWithIcon icon="/icons/p4.png" className="h-16 md:h-24 w-auto">
              {C.hResult}
            </TitleWithIcon>
          </h2>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            {C.resultIntro}
          </p>
          <ul className="mt-3 space-y-2 pl-2" style={{ textAlign: "justify" }}>
            {C.resultList.map((x: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#FFCC00] text-xl leading-none mt-1">★</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact-form" className="mt-10 rounded-3xl border bg-[#F2F8FF] p-6">
        <h2 className="text-2xl font-semibold text-center">
          <TitleWithIcon icon="/icons/chat.png" className="h-14 md:h-20 w-auto" animate={false}>
            {C.hReady}
          </TitleWithIcon>
        </h2>
        
        <p className="mt-3 text-center whitespace-pre-line">
          {C.pReady}
        </p>

        {sent && (
          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
            Сообщение отправлено. Мы свяжемся с вами в ближайшее время.
          </div>
        )}

        <form action={sendContact} className="mt-6 space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-semibold">{(C as any).formName}</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
                placeholder={(C as any).formName}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold">{(C as any).formPhone}</label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
                placeholder={(C as any).formPhone}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold">{(C as any).formSubject}</label>
              <select
                name="subject"
                required
                defaultValue=""
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
              >
                <option value="" disabled hidden></option> 
                {(C as any).formSubjectsOptions.map((opt: string) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold">{(C as any).formEmail}</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
                placeholder={(C as any).formEmail}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold">{(C as any).formMsg}</label>
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={500}
              placeholder="Text"
              className="min-h-[130px] w-full rounded-xl border bg-white px-4 py-3 text-sm"
            />
            <p className="text-xs text-black/60" style={{ textAlign: "justify" }}>
              {(C as any).formHint}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-[#0B3B77] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_0_rgba(0,0,0,0.40)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_8px_0_rgba(0,0,0,0.40)]"
            >
              {(C as any).formSend}
            </button>

            <a
              href={waPhoneHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_0_rgba(0,0,0,0.40)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_8px_0_rgba(0,0,0,0.40)]"
            >
              {C.btnWhatsApp}
            </a>
          </div>
        </form>
      </section>

      {/* FAQ АККОРДЕОН */}
      <section className="mt-10 rounded-3xl border bg-[#F9FAFB] px-6 py-8">
        <h2 className="text-xl font-bold text-[#0B3B73] mb-5">
          {locale === "es" ? "Preguntas frecuentes" : locale === "en" ? "Frequently asked questions" : "Частые вопросы"}
        </h2>
        <div className="space-y-3">
          {getSchemaFAQ(locale).mainEntity.map((item: any, i: number) => (
            <details key={i} className="group rounded-2xl border bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-[#0B3B73] list-none">
                <span>{item.name}</span>
                <span className="ml-3 shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-5 pb-4 text-sm leading-relaxed text-neutral-700" style={{ textAlign: "justify" }}>
                {item.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ЧИТАЙТЕ ТАКЖЕ */}
      <section className="mt-10">
        <p className="text-base font-semibold text-[#0B3B73] mb-3">
          {locale === "es" ? "Ver también:" : locale === "en" ? "Read also:" : "Читайте также:"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: `/${locale}/avto-iz-germanii`,
              label: locale === "es" ? "Coches de Alemania a España" : locale === "en" ? "Cars from Germany to Spain" : "Авто из Германии в Испанию",
            },
            {
              href: `/${locale}/avto-iz-germanii/skolko-stoit`,
              label: locale === "es" ? "¿Cuánto cuesta importar un coche?" : locale === "en" ? "How much does a car from Germany cost?" : "Сколько стоит авто из Германии",
            },
            {
              href: `/${locale}/avtopodbor`,
              label: locale === "es" ? "Selección de coche en España" : locale === "en" ? "Car sourcing in Spain" : "Подбор авто в Испании",
            },
            {
              href: `/${locale}/faq`,
              label: locale === "es" ? "Preguntas frecuentes" : locale === "en" ? "Frequently asked questions" : "Частые вопросы",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}