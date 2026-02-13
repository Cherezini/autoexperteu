'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Locale = "ru" | "en" | "es";
type Step = { t: string; d: string };

function copy(locale: string) {
  const L = (locale as Locale) || "ru";

  if (L === "en") {
    return {
      hTitle: "Frequently Asked Questions",
      pSubtitle: "Expert advice on buying, registering, and optimizing taxes for vehicles in Spain. Everything you need to know for a stress-free experience.",
      searchPlaceholder: "Search by keyword (e.g. tax, Ukraine, delivery)...",
      noResults: "No questions found matching your request.",
      sections: [
        {
          title: "Car Sourcing & Purchase",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "Can I buy a car in Spain if I am not a resident?", d: "Yes, Spanish law does not restrict foreigners from owning property. To complete the transaction, a valid passport and a NIE (Foreigner Identification Number) are sufficient. However, for legal registration and road tax, you will need a Spanish address (rental agreement or property title)." },
            { t: "How much does car sourcing cost and what's included?", d: "Our 'Turnkey Car Sourcing' service has a fixed fee of €895. This is not just 'searching links' but the work of at least two managers: one monitors the market and selects options, while the second conducts deep negotiations, verifies legal purity, and coordinates the entire deal. We invest dozens of hours to save you thousands of euros and prevent future problems." },
            { t: "What is better in 2026: a new or used car?", d: "A new car offers a full warranty but loses up to 20% of its value the moment it leaves the dealership. A 3-5 year old car is the 'golden mean'—it has already passed the peak of depreciation but remains modern and reliable. Our goal is to find a car where the previous owner paid for the initial price drop, while you get a high-quality vehicle." },
            { t: "Dealer vs. Private Seller: what's the difference?", d: "When buying from an official dealer, you are protected by law with at least 1 year of warranty on hidden defects. Private sellers might be cheaper, but you have no legal protection after the payment. We recommend verified dealers or B2B platforms where the car's condition is confirmed by independent expertise." },
            { t: "Why is an auction in Germany better than a dealer in Spain?", d: "Closed B2B auctions provide independent inspection reports (TÜV/Dekra) that cannot be faked. This guarantees honest mileage and transparency. In Spain, many local dealers often hide accident histories or service gaps." }
          ]
        },
        {
          title: "Registration, Import & Taxes",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "How is the registration tax (IEDMT) calculated?", d: "In Spain, this tax is directly linked to CO2 emissions. Rates vary from 0% (for low-emission cars) up to 14.75% for powerful SUVs. However, if you are moving to Spain for residence and import your car within 60 days of getting residency, you may receive a 100% exemption under the 'Cambio de Residencia' rule. We calculate these amounts professionally before purchase." },
            { t: "How do you check the car for liens (Embargos) and debts?", d: "We never take the seller's word for it. Before every deal, we request an extended 'Informe de Tráfico' directly from the DGT database. This document acts as an X-ray, showing ownership history, liens, tax debts, or any administrative blocks." },
            { t: "Do you help with the ITV inspection?", d: "The ITV inspection for an imported car is a complex procedure. We don't just book an appointment; we provide full support. If necessary, our manager is personally present to communicate with the technicians and ensure that all data is correctly entered into the new Spanish technical card (Ficha Técnica)." }
          ]
        },
        {
          title: "Autoexpert EU Service & New Laws",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "In which regions of Spain do you provide services?", d: "We offer Car Sourcing services for clients in any region of Spain—we find the best cars wherever they are. However, for Registration and administrative support, we focus on residents of the Costa Blanca (Alicante province) to ensure our personal presence at local offices." },
            { t: "Do you provide delivery if the car is bought in Germany?", d: "Absolutely. We organize safe logistics via professional car carriers or individual drivers under a separate contract. The vehicle is fully insured during transit, and you receive photo reports at every stage of the journey." },
            { t: "Is the V16 beacon mandatory in 2026?", d: "Yes. As of January 1, 2026, the use of emergency triangles on highways is prohibited and replaced by V16 beacons with geolocation. This device automatically sends your coordinates to the DGT 3.0 cloud in case of an accident." },
            { t: "Is insurance required at the moment of purchase?", d: "Yes, insurance (Seguro de Responsabilidad Civil) must be active from the first minute of ownership. Driving or even parking an uninsured car can lead to fines up to €3000 and vehicle impoundment. We help you issue a policy on the day of the deal." }
          ]
        },
        {
          title: "Insurance, Digitalization & Safety 2026",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "Why has insurance in Spain become more expensive in 2026 and how to save?", d: "Average premiums increased by 12-25% in 2026 due to new taxes and inflation. We help select the best policies (Terceros Ampliado or Todo Riesgo) via expat-friendly brokers, often saving up to €300 per year compared to direct quotes from major banks that don't consider foreign driving history." },
            { t: "Is the V16 beacon mandatory across all of Spain?", d: "Yes, as of Jan 1, 2026, triangles are prohibited on all high-speed roads. Your car must have a certified V16 beacon with geolocation that automatically sends coordinates to DGT 3.0. We ensure all cars we source meet these safety standards so you avoid fines of up to €200." },
            { t: "How to use the digital license in the miDGT app?", d: "The digital version in the miDGT app is legally equivalent to the plastic card in 2026. This is especially convenient for new residents. We guide you through the registration process in the Cl@ve system so you have all vehicle docs and your license on your phone at all times." }
          ]
        },
        {
          title: "Electric Vehicles, Hybrids & Eco-zones (ZBE) 2026",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "What are ZBE zones and how to get an environmental sticker?", d: "In 2026, all Spanish cities over 50,000 residents limit high-emission entry. To travel legally, you need a sticker (0, Eco, C, or B) from the post office (Correos). We verify access for your future car to avoid €200 fines for entering restricted zones without the proper environmental badge." },
            { t: "How does the new Plan Auto+ subsidy program work?", d: "MOVES III is replaced by Plan Auto+. The main 2026 benefit is the discount (up to €7,000 with scrap) applied instantly at purchase at the dealership, rather than being paid a year later. We handle the eligibility check for you to ensure you get the maximum possible benefit without the usual bureaucracy." }
          ]
        },
        {
          title: "Information for Ukrainian Citizens",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "Do I need to change my Ukrainian license to a Spanish one?", d: "Under current EU rules for 2026, Ukrainian licenses remain valid in Spain for the entire duration of your temporary protection status (currently until March 2027). You are not required to change them, but you can voluntarily exchange them (Canje) without exams for categories A and B." },
            { t: "How long can I legally drive on Ukrainian plates in Spain?", d: "The general rule is 6 months after obtaining residence. However, for those under temporary protection, rules are more flexible. To avoid issues with police and insurance, we recommend starting the legalization process if you plan to stay for more than half a year." },
            { t: "Are there tax benefits for Ukrainians when registering a car?", d: "Yes, this is a major advantage. When registering via 'Cambio de Residencia', you are eligible for a 100% exemption from registration tax (IEDMT) and customs duties. This can save you 10% to 30% of the car's market value." }
          ]
        }
      ],
      hReady: "Still have questions?",
      pReady: "If you didn't find the answer you were looking for, it's very easy to solve — contact us directly via the contact form for a free consultation.",
      btnWhatsApp: "Get expert consultation",
    };
  }

  if (L === "es") {
    return {
      hTitle: "Preguntas Frecuentes",
      pSubtitle: "Respuestas detalladas sobre la selección, compra, impuestos и matriculación de vehículos en España. Todo lo que necesita saber para evitar problemas.",
      searchPlaceholder: "Buscar por palabra clave (impuesto, Ucrania, entrega)...",
      noResults: "No se encontraron preguntas que coincidan con su búsqueda.",
      sections: [
        {
          title: "Selección и Compra de Vehículos",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "¿Puedo comprar un coche en España si no soy residente?", d: "Sí, la ley española no restringe la propiedad a extranjeros. Para realizar la compra, un pasaporte válido и un número NIE son suficientes. Sin embargo, necesitará una dirección en España (contrato de alquiler o escritura) para el registro en la oficina de impuestos и la DGT." },
            { t: "¿Cuánto cuesta el servicio de selección?", d: "Nuestro servicio tiene una tarifa fija de 895 €. No es solo 'buscar enlaces', sino el trabajo de al menos dos gestores: uno monitorea el mercado и selecciona opciones, mientras el segundo realiza negociaciones profundas, verifica la pureza legal и coordina toda la operación." },
            { t: "¿Qué es mejor en 2026: un coche nuevo o de ocasión?", d: "Un coche de 3 a 5 años es el punto ideal: ya ha pasado el pico de depreciación pero sigue siendo moderno и fiable. Nuestro objetivo es encontrar un coche donde el dueño anterior pagó la caída inicial del precio, mientras usted obtiene un vehículo de alta calidad." },
            { t: "¿Concesionario o particular?", d: "Al comprar en un concesionario oficial, está protegido por ley con al menos 1 año de garantía en defectos ocultos. Los particulares pueden ser más baratos, pero no tiene protección legal tras el pago. Recomendamos concesionarios verificados o plataformas B2B." },
            { t: "¿Por qué una subasta en Alemania es mejor que un concesionario en España?", d: "Las subastas B2B cerradas ofrecen informes periciales independientes (TÜV/Dekra) que no se pueden falsificar. Esto garantiza un kilometraje honesto и transparencia total. En España, muchos concesionarios locales a menudo ocultan historiales de accidentes." }
          ]
        },
        {
          title: "Matriculación, Importación и Impuestos",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "¿Cómo se calcula el impuesto de matriculación (IEDMT)?", d: "Este impuesto depende directamente de las emisiones de CO2. Las tasas varían del 0% al 14,75%. Sin embargo, si se muda por residencia, puede obtener una exención del 100% mediante el 'Cambio de Residencia' dentro de los 60 días posteriores a la obtención del TIE." },
            { t: "¿Cómo comprueban si el coche tiene cargas (Embargos)?", d: "Nunca confiamos solo en la palabra del vendedor. Antes de cada trato, solicitamos un 'Informe de Tráfico' detallado directamente de la base de datos de la DGT. Este documento muestra el historial de propiedad, embargos, deudas de impuestos o bloques administrativos." },
            { t: "¿Ayudan con la inspección ITV?", d: "La ITV para un coche importado es un procedimiento complejo. No solo gestionamos la cita; brindamos soporte completo, incluso presencia física de un gestor si es necesario para asegurar que todos los datos se introduzcan correctamente en la Ficha Técnica." }
          ]
        },
        {
          title: "Servicio Autoexpert EU и Nuevas Leyes",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "¿En qué regiones de España trabajan?", d: "Realizamos selección de coches en toda España. Sin embargo, para la matriculación и el soporte administrativo completo, nos centramos en los residentes de la Costa Blanca (Alicante) para garantizar nuestra presencia física en las oficinas locales." },
            { t: "¿Ofrecen transporte si el coche se compra en Alemania?", d: "Absolutamente. Organizamos la logística segura mediante portavehículos profesionales o conductores individuales bajo contrato. El vehículo está totalmente asegurado durante el tránsito y recibirá informes fotográficos en cada etapa." },
            { t: "¿Es obligatorio el dispositivo V16 en 2026?", d: "Sí. Desde el 1 de enero de 2026, los triángulos están prohibidos и reemplazados por balizas V16 con geolocalización que envían automáticamente su posición a la nube DGT 3.0 en caso de accidente." },
            { t: "¿Es obligatorio el seguro al momento de la compra?", d: "Sí, el seguro debe estar activo desde el primer minuto de propiedad. Conducir o incluso aparcar un coche sin seguro puede conllevar multas de hasta 3000 € и la inmovilización del vehículo. Le ayudamos a emitir la póliza el día del trato." }
          ]
        },
        {
          title: "Seguros, Digitalización y Seguridad 2026",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "¿Por qué ha subido el seguro en 2026 и cómo ahorrar?", d: "Las primas han subido un 12-25% en 2026 debido a nuevos impuestos и inflación. Ayudamos a elegir las mejores pólizas (Terceros Ampliado o Todo Riesgo) a través de corredores especializados en expatriados, ahorrando hasta 300 € anuales." },
            { t: "¿Es obligatorio el dispositivo V16 en toda España?", d: "Sí, desde el 1 de enero de 2026 los triángulos están prohibidos en todas las carreteras de alta velocidad. Su coche debe tener una baliza V16 certificada con geolocalización. Verificamos este equipo para evitar multas de 200 euros." },
            { t: "¿Cómo usar el carnet digital en miDGT?", d: "La versión digital en la app miDGT es legalmente equivalente al plástico en 2026. Es especialmente conveniente para nuevos residentes. Le ayudamos con el registro en el sistema Cl@ve para tener todos los documentos en su móvil." }
          ]
        },
        {
          title: "Vehículos Eléctricos, Híbridos y Zonas ZBE 2026",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "¿Qué son las zonas ZBE?", d: "Restricciones en ciudades de +50.000 hab. Necesita etiqueta 0, Eco, C o B de Correos. Comprobamos el acceso de su futuro coche para evitar multas de 200 € por entrar en zonas restringidas sin el distintivo ambiental adecuado." },
            { t: "¿Cómo funciona el Plan Auto+?", d: "Sustituye al MOVES III. El beneficio principal en 2026 es que el descuento (hasta 7.000 € con achatarramiento) se aplica directamente en el concesionario al comprar, en lugar de pagarse un año después. Gestionamos la verificación." }
          ]
        },
        {
          title: "Información para Ciudadanos Ucranianos",
          icon: "/icons/faq-car.svg",
          items: [
            { t: "¿Debo canjear mi carnet de conducir ucraniano?", d: "Bajo la protección temporal en 2026, los carnets ucranianos son válidos en España hasta marzo de 2027. No es obligatorio canjearlos, pero puede hacerlo voluntariamente sin exámenes para las categorías A и B si planea quedarse a largo plazo." },
            { t: "¿Cuánto tiempo puedo conducir con matrícula ucraniana?", d: "La regla general es de 6 meses tras obtener la residencia. Recomendamos iniciar la legalización si planea quedarse más de medio año para evitar problemas con la policía и el seguro." },
            { t: "¿Hay beneficios fiscales para ucranianos?", d: "Sí. Al matricular mediante 'Cambio de Residencia', es elegible para una exención del 100% del IEDMT и aranceles en los primeros 60 días tras obtener el TIE. Somos especialistas en estos casos." }
          ]
        }
      ],
      hReady: "¿Tiene más preguntas?",
      pReady: "Si no ha encontrado la respuesta que buscaba, se soluciona muy fácilmente: contáctenos directamente a través del formulario de contacto para una consulta gratuita.",
      btnWhatsApp: "Obtener consulta de experto",
    };
  }

  // RU
  return {
    hTitle: "Часто задаваемые вопросы",
    pSubtitle: "Мы подготовили максимально подробные и честные ответы на вопросы о подборе, покупке и легализации автомобилей в Испании в 2026 году. Используйте поиск или разделы ниже.",
    searchPlaceholder: "Введите ключевое слово (например: налог, Украина, доставка)...",
    noResults: "По вашему запросу ничего не найдено. Попробуйте изменить слово или свяжитесь с нами.",
    sections: [
      {
        title: "Выбор и покупка автомобиля в Испании",
        icon: "/icons/faq-car.svg",
        items: [
          { t: "Можно ли купить автомобиль в Испании, если я не являюсь резидентом?", d: "Да, испанское законодательство не ограничивает иностранцев в праве собственности. Для покупки вам не нужна резиденция — достаточно иметь действующий загранпаспорт и номер NIE (идентификационный номер иностранца). Однако помните: покупка — это лишь первый шаг. Для легальной эксплуатации авто вам потребуется адрес в Испании (договор аренды или эскритура) для регистрации в налоговой и Трафико." },
          { t: "Сколько стоят услуги автоподбора и что конкретно я оплачиваю?", d: "Стоимость услуги «Автоподбор под ключ» фиксирована — 895 €. Это не просто «поиск ссылок», а работа как минимум двух квалифицированных менеджеров. Один занимается глубоким мониторингом рынка и отбором вариантов, второй — ведет сложные переговоры с продавцами, проверяет юридическую чистоту и координирует сделку. Мы инвестируем десятки часов работы, чтобы вы сэкономили тысячи евро на покупке и избежали проблем в будущем." },
          { t: "Что выгоднее в 2026 году: новый автомобиль или подержанный?", d: "Новый автомобиль — это гарантия и статус, но он теряет до 20% стоимости в момент выезда из салона. Подержанный автомобиль в возрасте 3–5 лет — это «золотая середина». Такие машины уже прошли пик амортизации, но технически остаются современными. Наша задача при автоподборе — найти именно такой вариант, где предыдущий владелец уже оплатил падение цены, а вам достался надежный транспорт с прозрачной историей." },
          { t: "Купить у дилера или у частника: в чем принципиальная разница?", d: "При покупке у официального дилера вы защищены законом: профессиональный продавец обязан предоставить минимум 1 год гарантии на скрытые дефекты. Цена будет выше на 10–15%, но это плата за спокойствие. Покупка у частного лица дешевле, но юридически вы практически не защищены после передачи денег. Мы рекомендуем дилеров или проверенные B2B-платформы, где состояние машины подтверждено независимой экспертизой." },
          { t: "Почему покупка на аукционе в Германии лучше, чем у дилера в Испании?", d: "Закрытые B2B аукционы предоставляют независимые отчеты (TÜV/Dekra), которые невозможно подделать. Это гарантирует честный пробег и прозрачную историю обслуживания. В Испании же на многих площадках часто скрывают историю ДТП или пробеги." }
        ]
      },
      {
        title: "Регистрация, Импорт и Налоги",
        icon: "/icons/faq-car.svg",
        items: [
          { t: "Как рассчитывается налог на регистрацию (IEDMT) и можно ли его избежать?", d: "Этот налог напрямую зависит от выбросов CO2. Ставки варьируются от 0% до 14.75%. Однако, если вы переезжаете в Испанию на ПМЖ и ввозите свой автомобиль в течение 60 дней после получения резиденции, вы можете получить 100% освобождение от этого налога по льготе 'Cambio de Residencia'. Мы профессионально рассчитываем эти суммы еще до покупки." },
          { t: "Как проверить историю подержанного авто на залоги (Embargos) и штрафы?", d: "Мы никогда не верим на слово продавцам. Перед сделкой мы заказываем расширенный отчет Informe de Tráfico напрямую из базы DGT. Этот документ — «рентген» автомобиля. Он показывает реальное количество владельцев, историю техосмотров, наличие арестов (embargos), залогов или неоплаченных муниципальных налогов." },
          { t: "Помогаете ли вы с прохождением техосмотра ITV и зачем там нужен ваш менеджер?", d: "Прохождение ITV для импортированного авто — процедура сложная. Мы не просто записываем вас на прием, мы полностью сопровождаем процесс. При необходимости наш менеджер лично присутствует на станции, ведет диалог с техническим специалистом и контролирует корректность внесения данных в новую испанскую техническую карту (Ficha Técnica)." }
        ]
      },
      {
        title: "Сервис Autoexpert EU и Законы 2026",
        icon: "/icons/faq-car.svg",
        items: [
          { t: "В каких регионах Испании вы предоставляете услуги?", d: "Наш сервис имеет четкую специализацию. Автоподбор мы осуществляем для клиентов в любом регионе Испании — мы находим лучшие машины там, где они есть. Услуги по регистрации и полное административное сопровождение мы предоставляем для жителей Коста-Бланка (Аликанте). Это позволяет нам гарантировать личное присутствие и оперативное решение вопросов в Трафико." },
          { t: "Осуществляете ли вы доставку авто, если оно куплено в Германии?", d: "Безусловно. Мы организуем безопасную логистику вашего автомобиля до вашего порога в Испании. Эта услуга оформляется отдельным договором. Мы работаем с проверенными перевозчиками (автовозами), а также предоставляем услуги индивидуального перегона. В процессе доставки автомобиль застрахован." },
          { t: "Обязателен ли световой маячок V16 в 2026 году?", d: "Да. С 1 января 2026 года в Испании использование треугольников аварийной остановки запрещено — они заменены на электронные маячки V16 с геолокацией. Прибор автоматически передает координаты вашей аварии в облако DGT 3.0." },
          { t: "Нужна ли страховка при покупке автомобиля?", d: "В Испании страховка должна быть активна с первой минуты владения. Отсутствие страховки даже на парковке влечет штрафы от 600 до 3000 евро и эвакуацию авто. Мы помогаем оформить полис в ведущих страховых компаниях Испании (Liberty, Allianz) в день сделки." }
        ]
      },
      {
        title: "Страхование, Цифровое управление и Безопасность 2026",
        icon: "/icons/faq-car.svg",
        items: [
          { t: "Почему страховка в Испании так подорожала в 2026 году и как не переплатить?", d: "Средняя стоимость полиса в 2026 году выросла на 12-25% из-за новых налогов и инфляции. Мы помогаем подобрать оптимальный тип страхования (Terceros Ampliado или Todo Riesgo) через специализированных брокеров для экспатов, что позволяет сэкономить до 300 евро в год по сравнению с прямым обращением в крупные страховые компании." },
          { t: "Обязательно ли иметь маячок V16 с геолокацией прямо сейчас?", d: "Да, с 1 января 2026 года использование треугольников на скоростных трассах официально запрещено. Ваш автомобиль должен быть укомплектован сертифицированным маячком V16, который автоматически передает координаты вашей аварии в систему DGT 3.0 в случае поломки. Мы проверяем наличие этого оборудования при покупке авто, чтобы вы не получили штраф в первый же день." },
          { t: "Как пользоваться цифровыми правами в приложении miDGT?", d: "В 2026 году цифровое водительское удостоверение в приложении miDGT имеет ту же юридическую силу, что и пластиковая карта на всей территории Испании. Это особенно удобно для новых резидентов. Мы консультируем, как зарегистрироваться в системе Cl@ve и настроить профиль, чтобы все документы на машину были у вас в телефоне." }
        ]
      },
      {
        title: "Электромобили, Гибриды и Эко-зоны (ZBE) 2026",
        icon: "/icons/faq-car.svg",
        items: [
          { t: "Что такое зоны ZBE и как получить экологическую наклейку (Distintivo Ambiental)?", d: "В 2026 году все города Испании с населением более 50 000 человек обязаны ограничить въезд для автомобилей с высоким уровнем выбросов. Чтобы легально передвигаться, вам необходимо получить наклейку (0, Eco, C или B) в почтовом отделении (Correos). Мы помогаем проверить, какой доступ будет у вашего будущего автомобиля, чтобы вы не столкнулись со штрафами до 200 евро за въезд в закрытые зоны." },
          { t: "Как работает новая программа субсидий Plan Auto+ в 2026 году?", d: "На смену программе MOVES III пришел новый план Auto+. Главное преимущество 2026 года — скидка (до 7 000 евро при утилизации старого авто) теперь применяется сразу в момент покупки в дилерском центре, а не выплачивается через год. Мы берем на себя проверку соответствия автомобиля условиям программы, чтобы вы получили максимальную выгоду без бюрократии." }
        ]
      },
      {
        title: "Информация для граждан Украины (Временная защита)",
        icon: "/icons/faq-car.svg",
        items: [
          { t: "Нужно ли менять украинские водительские права на испанские?", d: "В 2026 году украинские водительские удостоверения признаются действительными в Испании в течение всего срока действия статуса временной защиты (до марта 2027 года). Обязательного требования по замене нет, но вы можете добровольно обменять их по упрощенной процедуре (Canje) без экзаменов для категорий А и B." },
          { t: "Сколько времени можно законно ездить в Испании на машине с украинскими номерами?", d: "Общее правило — 6 месяцев после получения резиденции. Однако для украинцев под защитой правила гибче. Чтобы избежать проблем с полицией и страховкой, мы рекомендуем начинать процесс легализации авто, если вы планируете находиться в Испании более полугода." },
          { t: "Обязательно ли ставить автомобиль на испанский учёт и какие льготы есть для украинцев?", d: "Если вы планируете остаться, постановка на учёт обязательна. Граждане Украины имеют право на льготную растаможку (100% освобождение от IEDMT и пошлин) при оформлении через процедуру 'Смена места жительства' в первые 60 дней после получения прописки или TIE." }
        ]
      }
    ],
    hReady: "Остались вопросы?",
    pReady: "Если вы не нашли ответ на свой вопрос, это очень просто решается — свяжитесь с нами напрямую через форму обратной связи для бесплатной консультации.",
    btnWhatsApp: "Получить консультацию эксперта",
  };
}

function Chevron() {
  return (
    <svg className="h-5 w-5 shrink-0 transition-transform duration-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InnerItem({ it }: { it: Step }) {
  return (
    <details className="group rounded-xl border bg-white">
      <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer select-none font-semibold [&::-webkit-details-marker]:hidden">
        <img src="/location.svg" alt="" className="h-10 w-10 shrink-0" />
        <span className="flex-1 text-left">{it.t}</span>
        <span className="text-[#0B3B73] transition-transform duration-300 group-open:rotate-180">
          <Chevron />
        </span>
      </summary>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-base opacity-0 transition-opacity duration-300 group-open:opacity-100">
            <p className="whitespace-pre-line" style={{ textAlign: "justify" }}>{it.d}</p>
          </div>
        </div>
      </div>
    </details>
  );
}

export default function FAQPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const C = copy(locale);

  const [openSectionIdx, setOpenSectionIdx] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = C.sections?.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.t.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.d.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const toggleSection = (idx: number) => {
    setOpenSectionIdx(openSectionIdx === idx ? null : idx);
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-12">
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] mb-10 h-[390px]">
        <Image src="/media/images/fao.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            {C.hTitle}
          </h1>
        </div>
      </section>

      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">{C.pSubtitle}</p>
      </div>

      <div className="max-w-2xl mx-auto mb-12 relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={C.searchPlaceholder}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-[#0B3B73]/20 focus:border-[#0B3B73] focus:ring-0 outline-none transition-all shadow-sm text-lg"
        />
      </div>

      <div className="flex flex-col gap-6 min-h-[200px]">
        {filteredSections && filteredSections.length > 0 ? (
          filteredSections.map((section: any, idx: number) => {
            const isOpen = openSectionIdx === idx;
            return (
              <div key={idx} className="border-b border-gray-100 pb-4">
                <button 
                  onClick={() => toggleSection(idx)}
                  className="flex w-full items-center justify-between gap-3 pl-2 border-l-4 border-[#0B3B73] transition-colors hover:bg-gray-50 py-3 text-left"
                >
                  <div className="flex items-center gap-4">
                    <img src={section.icon} alt="" className="h-12 w-12 object-contain" />
                    <h2 className="text-xl font-bold text-[#0B3B73]">
                      {section.title}
                    </h2>
                  </div>
                  <div className={`text-[#0B3B73] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <Chevron />
                  </div>
                </button>
                
                <div className={`grid transition-[grid-template-rows,margin] duration-300 ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="space-y-3 px-1 pb-2">
                      {section.items.map((it: Step, i: number) => (
                        <InnerItem key={i} it={it} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">{C.noResults}</p>
          </div>
        )}
      </div>

      <section className="mt-16 rounded-3xl border p-8 bg-slate-50 text-center shadow-lg">
        <h2 className="text-2xl font-bold">{C.hReady}</h2>
        <p className="mt-3 text-lg">{C.pReady}</p>
        <div className="mt-8">
          <Link href="/contacto" className="inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-8 py-4 text-base font-bold text-white shadow-[0_8px_0_rgba(0,0,0,0.20)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_6px_0_rgba(0,0,0,0.20)]">
            {C.btnWhatsApp}
          </Link>
        </div>
      </section>
    </main>
  );
}