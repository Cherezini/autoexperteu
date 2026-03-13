"use client";

import Link from "next/link";
import React from "react";

type Locale = "ru" | "en" | "es";
type Step = { t: string; d: string };

function copy(locale: string) {
  const L = (locale as Locale) || "ru";

  const now = new Date();
  const day = now.getDate();
  const availableSlots = day > 25 ? 1 : day > 18 ? 2 : day > 10 ? 4 : 7;

  const monthNames: Record<Locale, string[]> = {
    ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  };
  const currentMonth = monthNames[L][now.getMonth()];

  if (L === "en") {
    return {
      urgencyTitle: `Boutique format with a limited number of clients`,
      urgencyMonth: currentMonth,
      urgencyText: "• CARS FROM GERMANY •• SOURCING IN SPAIN • FOR A LIMITED NUMBER OF CLIENTS - NO STREAM • NO CONVEYOR • NO RANDOM DECISIONS •",
      urgencySubText: "We work in a boutique format: we take on a limited number of clients simultaneously to qualitatively complete each stage — from car selection to closing the deal and paperwork.",
      urgencyBtn: `Book a slot`,
      urgencyRemaining: `Remaining`,
      heroText: "Car Selection: ordering and purchasing cars in Spain, Germany and other EU countries turnkey",
      heroSub: "Car check, deal support, ITV, DGT registration",
      intro: 'Our company is more than just a car import agency; we specialize in custom car imports from Germany and other EU countries, providing sourcing, technical inspection, logistics, and full registration on Spanish plates "turnkey".\n\nCar sourcing and purchase in Spain turnkey is a service for those who want to buy a car in Spain, Germany or Europe without hours and days of searching websites, market analysis, checks, negotiations and bureaucracy.\nYou set the goal — we handle the process and are responsible for the result.',
      btnOrder: "FILL IN CAR SEARCH FORM",
      hBuy: "How a turnkey car purchase happens",
      steps: [
        { t: "1️. Application and free preliminary analysis", d: "You know approximately what car you want and understand your approximate budget. By clicking the 'FILL IN CAR SEARCH FORM' button, you will see an application form on our website. Fill it out, click 'Send', and our managers instantly receive your message with all the parameters of the car you dream of.\nWe analyze the feasibility of buying a car according to your parameters for free.\nAt this stage, you don't pay anything — the preliminary expert analysis is conducted by our managers for free." },
        { t: "2. Application adjustment in the client's favor.", d: "If the stated parameters do not correspond to the real market situation, we will suggest adjustments: changing the budget, configuration, or alternative car options within your requests. Very often, we offer clients options more profitable than they themselves expected.\nFor example, a client asked to purchase a car for rental. Our partner, who manages the client's car rentals, provided a list of car models that are most frequently rented. And the client happily changed their application and is already earning from the car rental.\nOr, perhaps, our manager will suggest you buy a car with minor damage, but at a price two or even three times cheaper than the market price. For example, our client bought a 2024 Kia Sportage Business with damage for 8,000 euros, the repair cost him 7,000 euros, and the total cost of the fully repaired car, including all acquisition services, fees, and taxes, came to 18,500 euros for the client. At the same time, the market value of this car, according to the auction's own assessment, is at least €26,625. The benefit is obvious." },
        { t: "3. Contract, cost of car selection services, and start of car selection", d: "When we confirm that the application is feasible and have agreed with you on all your wishes, and we are sure that there are cars on the market that meet your requirements — we sign a contract.\nAfter that, you pay for the car selection services in the amount of 895 euros, and we begin to send you specific car options.\nWe guarantee that we will provide at least 10 cars within 30 days from the signing of the contract." },
        { t: "4️. Comprehensive check of the selected car", d: "After you have chosen the car of interest, we determine the procedure for its acquisition. We conduct a full check: technical condition, actual mileage, service history, accidents, pledges, and legal restrictions.\nYou get a full picture of the car's condition before the purchase." },
        { t: "5️. What is the difference: Dealer or Auction?", d: "The search for a car is carried out simultaneously on many platforms.\nEach has its pros and cons. For example, we can purchase a car for you from an official dealer. Then the car will be bought immediately at a fixed price, and there will also be at least a year of manufacturer's warranty. These are undeniable pluses, but there are also minuses — as a rule, car dealerships' prices are significantly higher than buying a car on a platform or, especially, at an auction." },
        { t: "6. Support for the purchase of the car. Delivery from Europe to Spain.", d: "Depending on the purchase platform, we either negotiate with the seller and support the transaction, or apply to participate in a car auction at a real market price.\nAt this stage, we conclude an additional agreement with you, in which we provide for all the nuances of supporting the car purchase directly, depending on where exactly — platform, dealer, auction — the car is being purchased.\nIn this agreement, we describe the procedure for purchasing and delivering the car to Spain. How exactly it is carried out, at what price, and within what timeframe. As you understand, everything depends on each specific case of acquisition. For example, delivering a car from the Baltic states to Spain can be done on a car carrier, as well as by an individual driver.\nMany of our clients want to import a car from Germany with our driver, without waiting for the car carrier, in order to register it faster and enjoy the purchase." },
        { t: "7. Deposit for auction purchase", d: "If your choice falls on a car sold at an auction, we agree with you on the maximum price for which you are ready to purchase the car. We sign an additional agreement to our main contract, and you deposit the amount of the deposit in the amount of the maximum acceptable bid for you and the amount for the auction services into our company's account.\nThis is necessary because after a winning bid, the car must be paid for within the timeframes established by the auction (usually up to 5 business days).\nFailure to meet these conditions leads to fines and sanctions from the auction, up to exclusion from participating in auctions in the future and the recovery of a fine." },
        { t: "8. Purchase of a car in Germany or another country from a dealer or on a platform.", d: "If we are buying the car you like not at an auction, but from a dealer, or on a platform, or anywhere else besides an auction, we will definitely conduct an inspection of this car before recommending you sign the contract. First, we will conduct a check based on the documents for the legal purity of the transaction, the absence of bans, pledges, and other encumbrances that might interfere with first carrying out the purchase and sale transaction, and then you enjoying the purchased car. Then, after we find out that there are no problems with the car from the document point of view, an independent expert will look at the car on site to investigate its technical condition if the car is not being purchased from a dealer. A dealer, as a rule, honestly talks about the car's damage, what flaws it has, and even provides a calculation for carrying out the car's repair." },
        { t: "9. Registration of the car in your name", d: "Regardless of where the car was bought, from a dealer or at an auction, we obtain temporary numbers and documents in your name — both when buying through an auction and when buying from another seller, taking into account the country of purchase and applicable procedures." },
        { t: "10. Delivery, diagnostics and registration in Spain", d: "The car is delivered to Spain, undergoes diagnostics at our service station, after which we register the car in your name.\nWe prepare all the documents: Ficha Técnica Reducida (reduced technical data sheet), necessary for passing the inspection — ITV.\nWe don't just sign you up for the inspection. Our manager, who speaks your language, is personally present at the station to bridge the language barrier with the technicians and guarantee the successful passing of the inspection.\nWe carry out a professional calculation of registration taxes (IEDMT) and look for legal grounds for their reduction or partial cancellation.\nWe submit the documents to the DGT and receive the registration certificate for your vehicle!\n\nYou receive a fully registered car, ready to drive in Spain — turnkey, without bureaucracy, unnecessary loss of time, money or nerves." },
      ],
      inService: "Result: safe car purchase",
      inServiceList: [
        { t: "Expert price analysis and selection of the best deals in Spain and the EU", d: "We monitor over 20 European platforms daily to find cars priced significantly lower than the Spanish market." },
        { t: "Professional import of cars from Germany and Europe to order", d: "Direct delivery from major auctions with a full document package for customs and DGT." },
        { t: "Full technical diagnostics and verification of legal purity", d: "80-point inspection: from paint thickness to mileage verification and lien-free status." },
        { t: "Professional calculation and optimization of registration taxes", d: "We help legally minimize registration taxes (IEDMT) and registration costs." },
        { t: "Secure transaction support and price negotiations", d: "We handle all communication with the seller to secure the most favorable final price for you." },
        { t: "Reliable insured delivery to any point in Spain", d: "Transport by car carrier or individual driver directly to your doorstep anywhere in Spain." },
        { t: "Obtaining Spanish plates and 'turnkey' car registration", d: "Managing ITV inspections and all Spanish documentation without your personal involvement." },
        { t: "Processing the environmental label (Distintivo Ambiental)", d: "Ensuring legal access to ZBE zones (city centers) in all major Spanish municipalities." },
      ],
      hReady: "Ready to find your car?",
      pReady: "Start with a free analysis of your request. Contact us to find out the current market situation.",
      hQuestions: "Still have questions — ask us!",
      btnWhatsApp: "Answers on the FAQ page",
      btnEmail: "Contact us",
    };
  }

  if (L === "es") {
    return {
      urgencyTitle: `Formato boutique con un número limitado de clientes`,
      urgencyMonth: currentMonth,
      urgencyText: "• COCHES DE ALEMANIA •• SELECCIÓN EN ESPAÑA • PARA UN NÚMERO LIMITADO DE CLIENTES - SIN FLUJO • SIN CADENA • SIN DECISIONES AL AZAR •",
      urgencySubText: "Trabajamos en formato boutique: aceptamos un número limitado de clientes simultáneamente para realizar con calidad cada etapa, desde la selección hasta el cierre del trato y los documentos.",
      urgencyBtn: `Reservar un slot`,
      urgencyRemaining: `Quedan`,
      heroText: "Selección de coche: pedido y compra de coches en España, Alemania y otros países de la UE llave en mano",
      heroSub: "Revisión del coche, apoyo en la transacción, ITV, registro DGT",
      intro: 'Nuestra empresa no es simplemente una agencia de importación de coches; nos especializamos en la importación de vehículos bajo pedido desde Alemania y otros países de la UE, garantizando la selección, inspección técnica, logística y matriculación completa "llave en mano".\n\nLa selección y compra de un coche en España llave en mano es un servicio para quienes desean comprar un coche en España, Alemania o Europa sin horas y días de búsqueda en sitios web, análisis de mercado, revisiones, negociaciones y burocracia.\nUsted formula el objetivo — nosotros nos encargamos de todo el proceso y respondemos por el resultado.',
      btnOrder: "RELLENAR FORMULARIO DE BÚSQUEDA DE COCHE",
      hBuy: "Cómo se realiza la compra de un coche llave en mano",
      steps: [
        { t: "1️. Solicitud y análisis preliminar gratuito", d: "Usted sabe aproximadamente qué coche desea y conoce su presupuesto aproximado. Al hacer clic en el botón 'RELLENAR FORMULARIO DE BÚSQUEDA DE COCHE', verá un formulario de solicitud en nuestro sitio web. Complételo, haga clic en 'Enviar' y nuestros gestores recibirán instantáneamente su mensaje con todos los parámetros del coche que busca.\nAnalizamos gratuitamente la viabilidad de comprar un coche según sus parámetros.\nEn esta etapa, usted no paga nada — el análisis experto preliminar es realizado por nuestros gestores de forma gratuita." },
        { t: "2. Ajuste de la solicitud a favor del cliente.", d: "Si los parámetros indicados no corresponden a la situación real del mercado, propondremos ajustes: cambios en el presupuesto, configuración u opciones alternativas de coches dentro de sus peticiones. Muy a menudo, ofrecemos a los clientes opciones más rentables de lo que ellos mismos esperaban.\nPor ejemplo, un cliente pidió adquirir un coche para alquilar. Nuestro socio, que gestiona el alquiler de coches del cliente, proporcionó una lista de modelos de coches que se alquilan con más frecuencia. Y el cliente cambió felizmente su solicitud y ya está ganando con el alquiler del coche.\nO tal vez nuestro gestor le sugiera comprar un coche con daños menores, pero a un precio dos o incluso tres veces más barato que el precio de mercado. Por ejemplo, nuestro cliente compró un Kia Sportage Business de 2024 con daños por 8.000 euros, la reparación le costó 7.000 euros, y el coste total del coche completamente reparado, junto con todos los servicios de adquisición, tasas e impuestos, fue de 18.500 euros para el cliente. Al mismo tiempo, el valor de mercado de este coche, según la propia valoración de la subasta, es de al menos 26.625 €. La ventaja es evidente." },
        { t: "3. Contrato, coste de los servicios de selección e inicio de la búsqueda", d: "Cuando confirmamos que la solicitud es viable y hemos acordado con usted todos sus deseos, y estamos seguros de que hay coches en el mercado que cumplen con sus requisitos — firmamos un contrato.\nA continuación, usted abona los servicios de selección de coches por un importe de 895 euros, y comenzamos a enviarle opciones específicas de coches.\nLe garantizamos que le proporcionaremos al menos 10 opciones en un plazo de 30 días a partir de la firma del contrato." },
        { t: "4️. Inspección integral del coche seleccionado", d: "Una vez que haya elegido el coche de su interés, determinamos el procedimiento para su adquisición. Realizamos una inspección completa: estado técnico, kilometraje real, historial de mantenimiento, accidentes, embargos y restricciones legales.\nUsted obtiene una imagen completa del estado del coche antes de la compra." },
        { t: "5️. ¿Cuál es la diferencia: concesionario o subasta?", d: "La búsqueda de un coche se realiza simultáneamente en muchas plataformas.\nCada una tiene sus ventajas e inconvenientes. Por ejemplo, podemos adquirir un coche para usted en un concesionario oficial. En ese caso, el coche se comprará de inmediato a un precio fijo y, además, contará con al menos un año de garantía del fabricante. Estas son ventajas indudables, pero también hay inconvenientes: por lo general, los precios de los concesionarios son significativamente más altos que comprar un coche en una plataforma o, especialmente, en una subasta." },
        { t: "6. Acompañamiento de la compra. Entrega del coche de Europa a España.", d: "Dependiendo de la plataforma de compra, negociamos con el vendedor y acompañamos la transacción, o bien presentamos una solicitud para participar en una subasta de coches a un precio de mercado real.\nEn esta etapa, celebramos un acuerdo adicional con usted en el que contemplamos todos los matices del acompañamiento directo de la compra, dependiendo de dónde se adquiera exactamente: plataforma, concesionario o subasta.\nEn este acuerdo describimos el procedimiento de adquisición y entrega del coche a España: cómo se lleva a cabo, a qué precio y en qué plazos. Como es lógico, todo depende de cada caso concreto de adquisición. Por ejemplo, entregar un coche desde los países bálticos a España puede hacerse en un portavehículos o mediante un conductor individual.\nMuchos de nuestros clientes prefieren importar un coche de Alemania con nuestro conductor, sin esperar al portavehículos, para matricularlo antes y disfrutar de la compra." },
        { t: "7. Depósito en compras a través de subasta", d: "Si su elección recae en un coche que se vende en una subasta, acordamos con usted el precio máximo por el que está dispuesto a adquirirlo. Firmamos un acuerdo adicional a nuestro contrato principal, y usted deposita el importe del depósito — equivalente a la puja máxima aceptable y el importe de los servicios de la subasta — en la cuenta de nuestra empresa.\nEsto es necesario porque, tras una puja ganadora, el coche debe pagarse en los plazos establecidos por la subasta (generalmente hasta 5 días hábiles).\nEl incumplimiento de estas condiciones conlleva multas y sanciones por parte de la subasta, hasta la exclusión de participar en futuras subastas y el cobro de una penalización." },
        { t: "8. Compra de un coche en Alemania u otro país en concesionario o plataforma.", d: "Si el coche que le gusta no lo compramos en una subasta, sino en un concesionario, una plataforma o cualquier otro canal que no sea una subasta, realizaremos obligatoriamente una inspección antes de recomendarle que firme el contrato. Primero, verificaremos los documentos para comprobar la pureza legal de la transacción, la ausencia de prohibiciones, embargos y otras cargas que puedan impedir la compraventa o el disfrute del vehículo adquirido. Después, una vez confirmado que no hay problemas documentales, un experto independiente examinará el coche in situ para evaluar su estado técnico, salvo que se adquiera en un concesionario. El concesionario, por regla general, informa honestamente sobre los daños del coche, sus defectos e incluso proporciona un presupuesto de reparación." },
        { t: "9. Tramitación del coche a su nombre", d: "Independientemente de dónde se haya comprado el coche, en un concesionario o en una subasta, obtenemos matrículas temporales y documentos a su nombre, tanto en compras a través de subasta como en compras a otros vendedores, teniendo en cuenta el país de adquisición y los procedimientos aplicables." },
        { t: "10. Entrega, diagnóstico y matriculación en España", d: "El coche se entrega en España, pasa el diagnóstico en nuestra estación de servicio técnico y, a continuación, realizamos la matriculación a su nombre.\nPreparamos todos los documentos: la Ficha Técnica Reducida, necesaria para pasar la inspección — ITV.\nNo nos limitamos a pedir cita para la inspección técnica. Nuestro gestor, que habla su idioma, está presente personalmente en la estación para eliminar la barrera lingüística con los técnicos y garantizar el éxito de la inspección.\nRealizamos un cálculo profesional de los impuestos de matriculación (IEDMT) y buscamos bases legales para su reducción o cancelación parcial.\n¡Presentamos los documentos en la DGT y obtenemos el permiso de circulación de su vehículo!\n\nUsted recibe un coche totalmente tramitado, listo para circular en España — llave en mano, sin burocracia, sin pérdida innecesaria de tiempo, dinero ni nervios." },
      ],
      inService: "Resultado: compra segura de coche",
      inServiceList: [
        { t: "Análisis experto de precios y búsqueda de las mejores ofertas en España y la UE", d: "Monitoreamos diariamente más de 20 plataformas europeas, encontrando coches con precios significativamente más bajos que en el mercado español." },
        { t: "Importación profesional de coches de Alemania y Europa bajo pedido", d: "Entrega directa desde las principales subastas con todo el paquete de documentos para aduana y DGT." },
        { t: "Diagnóstico técnico completo y verificación de pureza legal", d: "Inspección de 80 puntos: desde el espesor de la pintura hasta la verificación del kilometraje real y la ausencia de embargos." },
        { t: "Cálculo profesional y optimización de impuestos de matriculación", d: "Ayudamos a minimizar legalmente los costes del impuesto de matriculación (IEDMT) y los gastos de registro." },
        { t: "Acompañamiento seguro de la transacción y negociación de precios", d: "Gestionamos toda la comunicación con el vendedor para conseguir el precio final más ventajoso para usted." },
        { t: "Entrega asegurada y fiable a cualquier punto de España", d: "Transporte en portavehículos o por conductor individual directamente a su puerta en cualquier lugar de España." },
        { t: "Obtención de matrículas españolas y matriculación llave en mano", d: "Gestión de la ITV y todos los trámites administrativos sin su participación personal." },
        { t: "Tramitación de la etiqueta ambiental (Distintivo Ambiental)", d: "Garantizamos el acceso legal a las zonas ZBE (centro de las ciudades) de todos los grandes municipios de España." },
      ],
      hReady: "¿Listo para encontrar su coche?",
      pReady: "Empiece con un análisis gratuito de su solicitud. Contáctenos para conocer la situación actual del mercado.",
      hQuestions: "¿Aún tiene preguntas? ¡Pregúntenos!",
      btnWhatsApp: "Respuestas en la página de FAQ",
      btnEmail: "Contactar con nosotros",
    };
  }

  return {
    urgencyTitle: `Формат Бутик с ограниченным числом клиентов`,
    urgencyMonth: currentMonth,
    urgencyText: "• АВТО ИЗ ГЕРМАНИИ •• ПОДБОР В ИСПАНИИ • ДЛЯ ОГРАНИЧЕННОГО ЧИСЛА КЛИЕНТОВ - БЕЗ ПОТОКА • БЕЗ КОНВЕЙЕРА • БЕЗ СЛУЧАЙНЫХ РЕШЕНИЙ •",
    urgencySubText: "Мы работаем в формате бутика: берём в работу ограниченное количество клиентов одновременно, чтобы качественно выполнить каждый этап — от выбора автомобиля до завершения сделки и оформления документов.",
    urgencyBtn: `Забронировать слот`,
    urgencyRemaining: `Осталось`,
    heroText: "Подбор автомобиля: заказ и покупка авто в Испании, Германии и других странах ЕС под ключ",
    heroSub: "Проверка авто, сопровождение сделки, ITV, регистрация DGT",
    intro: 'Наша компания является не просто агентством по оформлению импорта машин, мы специализируемся на импорте автомобилей под заказ из Германии и других стран Евросоюза, обеспечивая подбор, техническую проверку, логистику и полную регистрацию на испанские номера «под ключ».\n\nПодбор и покупка автомобиля в Испании под ключ — это услуга для тех, кто хочет купить автомобиль в Испании, Германии или Европе, без часов и дней поисков по сайтам, анализа рынка, проверок, переговоров и бюрократии.\nВы формулируете задачу — мы берём на себя весь процесс и отвечаем за результат.',
    btnOrder: "Заполнить форму подбора авто",
    hBuy: "Как проходит покупка автомобиля под ключ",
    steps: [
      { t: "1️. Заявка и бесплатный предварительный анализ", d: "Вы знаете примерно, какой автомобиль хотите, и понимаете свой примерный бюджет. Нажав кнопку «Заполнить форму подбора авто», Вы увидите анкету-заявку на нашем сайте, заполняете, нажимаете «Отправить», и моментально наши менеджеры получают Ваше сообщение со всеми параметрами автомобиля, о котором Вы мечтаете.\nМы бесплатно анализируем возможность покупки автомобиля по Вашим параметрам.\nНа этом этапе вы ничего не оплачиваете — предварительный экспертный анализ проводится нашими менеджерами бесплатно." },
      { t: "2. Корректировка заявки в пользу клиента.", d: "Если заявленные параметры не соответствуют реальной ситуации на рынке, мы предложим корректировки: изменение бюджета, комплектации или альтернативные варианты автомобилей в рамках Ваших запросов. Очень часто, мы предлагаем клиентам варианты выгоднее, чем он сам предполагал.\nНапример, клиент просил приобрести для сдачи в аренду автомобиль. Наш партнер, который осуществляет аренду автомобилей клиента, дал список моделей автомобилей, которые наиболее часто сдаются в аренду. И клиент с удовольствием изменил свою заявку и уже зарабатывает на аренде авто.\nИли, возможно, наш менеджер предложит Вам купить автомобиль с небольшими повреждениями, но по цене в два, а иногда и в три раза дешевле рыночной. Например, наш клиент купил Kia Sportage Business 2024 года выпуска с повреждениями за 8 тысяч евро, ремонт ему обошелся в 7 тысяч евро, общая стоимость полностью отремонтированного автомобиля, вместе со всеми услугами по приобретению, сборами и налогами, для клиента вышла в 18500 евро. В то же время, рыночная стоимость этого автомобиля по оценке самого аукциона составляет не менее 26 625 €. Выгода очевидна." },
      { t: "3. Договор, стоимость услуг автоподбора, и начало подбора автомобиля", d: "Когда мы подтверждаем, что заявка выполнима и согласовали с Вами все Ваши пожелания, и мы уверены, что на рынке есть автомобили, отвечающие Вашим требованиям — мы подписываем договор.\nПосле этого вы оплачиваете услуги автоподбора в размере 895 евро, и мы начинаем направлять вам конкретные варианты автомобилей.\nМы гарантируем Вам, что предоставим не менее 10 автомобилей в течение 30 дней с момента заключения договора." },
      { t: "4️. Комплексная проверка выбранного автомобиля", d: "После того как вы выбрали интересующий автомобиль, мы определяем процедуру его приобретения. Проводим полную проверку: техническое состояние, реальный пробег, история обслуживания, ДТП, залоги и юридические ограничения.\nВы получаете полную картину состояния автомобиля до покупки." },
      { t: "5️. В чем разница, где покупать автомобиль. Дилер или аукцион?", d: "Поиск автомобиля осуществляется одновременно на очень многих платформах.\nУ каждой есть свои плюсы и минусы. Так, например, мы можем приобрести для Вас автомобиль у официального дилера. Тогда автомобиль будет куплен сразу и по фиксированной цене, при этом ещё будет как минимум год гарантии от производителя. Это несомненные плюсы, но есть и минусы — как правило у автосалонов цены значительно выше, нежели купить автомобиль на площадке или, тем более, на аукционе." },
      { t: "6. Сопровождение покупки автомобиля. Доставка автомобиля из Европы в Испанию.", d: "В зависимости от площадки покупки мы либо ведём переговоры с продавцом и сопровождаем сделку, либо подаём заявку на участие в автомобильном аукционе по реальной рыночной цене.\nНа этом этапе мы с Вами заключаем дополнительное соглашение, в котором предусматриваем все нюансы по сопровождению непосредственно покупки автомобиля, в зависимости от того, где именно — площадка, дилер, аукцион — приобретается автомобиль.\nВ этом соглашении мы описываем процедуру приобретения и доставки автомобиля в Испанию. Как именно это осуществляется, по какой цене, и в какие сроки. Как Вы понимаете, все зависит от каждого конкретного случая приобретения. Например, доставить автомобиль из стран Прибалтики в Испанию можно на автовозе или индивидуальным водителем.\nМногие наши клиенты хотят импортировать машину из Германии нашим водителем, не дожидаясь автовоза, чтобы быстрее поставить на учёт и наслаждаться покупкой." },
      { t: "7. Депозит при покупке через аукцион", d: "Если Ваш выбор остановился на автомобиле, который продаётся на аукционе, мы с Вами оговариваем максимальную цену, за которую Вы готовы приобрести автомобиль. Мы подписываем дополнительное соглашение к нашему основному договору, и Вы вносите сумму депозита в размере максимально приемлемой для Вас ставки и сумму за услуги аукциона на счёт нашей компании.\nЭто необходимо, так как после выигрышной ставки автомобиль должен быть оплачен в установленные аукционом сроки (обычно до 5 рабочих дней).\nНевыполнение этих условий влечёт штрафы и санкции со стороны аукциона, вплоть до исключения из участников аукционов в дальнейшем и взыскания штрафа." },
      { t: "8. Покупка автомобиля в Германии или другой стране у дилера или на площадке.", d: "Если понравившийся Вам автомобиль мы покупаем не на аукционе, а у дилера, или на площадке, или в любом другом месте кроме аукциона, перед тем как рекомендовать Вам заключить договор, мы обязательно проведём проверку этого автомобиля. Сначала проведём проверку по документам на юридическую чистоту сделки, отсутствие запретов, залогов и других обременений, которые могут помешать сначала осуществить сделку купли-продажи, а потом вам наслаждаться купленным автомобилем. Потом, после того как мы выясним, что с автомобилем нет никаких проблем с точки зрения документов, независимый эксперт посмотрит автомобиль на месте, чтобы исследовать его техническое состояние, если автомобиль приобретается не у дилера. Дилер, как правило, честно говорит о повреждениях автомобиля, какие на нём есть недостатки, и даже предоставляет калькуляцию для осуществления ремонта автомобиля." },
      { t: "9. Оформление автомобиля на Ваше имя", d: "Не важно, где был куплен автомобиль, у дилера или на аукционе, мы получаем временные номера и документы на Ваше имя — как при покупке через аукцион, так и при покупке у другого продавца, с учётом страны приобретения и применимых процедур." },
      { t: "10. Доставка, диагностика и регистрация в Испании", d: "Автомобиль доставляется в Испанию, проходит диагностику на нашей станции технического обслуживания, после чего мы выполняем регистрацию автомобиля на Ваше имя.\nГотовим все документы: Ficha Técnica Reducida (сокращённая техническая карта), необходимая для прохождения осмотра — ITV.\nМы не просто записываем вас на техосмотр. Наш менеджер, говорящий на Вашем языке, лично присутствует на станции, чтобы снять языковой барьер с техниками и гарантировать успешное прохождение осмотра.\nДелаем профессиональный расчёт налогов на постановку на учёт (IEDMT) и поиск законных оснований для их снижения или частичной отмены.\nПодаём документы в DGT и получаем технический паспорт на Ваш автомобиль!\n\nВы получаете полностью оформленный автомобиль, готовый к эксплуатации в Испании — под ключ, без бюрократии, лишних затрат времени, денег и нервов." },
    ],
    inService: "Результат: безопасная покупка авто",
    inServiceList: [
      { t: "Экспертный анализ цен и подбор лучших предложений в Испании и ЕС", d: "Мы ежедневно мониторим более 20 европейских площадок, находя автомобили значительно дешевле рынка Испании." },
      { t: "Профессиональный импорт автомобилей из Германии и Европы под заказ", d: "Прямая доставка с крупнейших аукционов с полным пакетом документов для таможни и DGT." },
      { t: "Полная техническая диагностика и проверка юридической чистоты", d: "Проверка по 80 пунктам: от толщины краски до подтверждения реального пробега и отсутствия залогов." },
      { t: "Профессиональный расчёт и оптимизация налогов на регистрацию", d: "Помогаем законно минимизировать затраты на налог (IEDMT) и постановку на учёт." },
      { t: "Безопасное сопровождение сделки и переговоры о снижении цены", d: "Мы берём на себя общение с продавцом и добиваемся для вас максимально выгодной финальной цены." },
      { t: "Надёжная застрахованная доставка автомобиля в любую точку Испании", d: "Перевозка автовозом или перегон индивидуальным водителем прямо к вашему порогу в любой точке Испании." },
      { t: "Получение испанских номеров и регистрация автомобиля «под ключ»", d: "Прохождение техосмотра ITV и получение всех испанских документов без вашего личного участия." },
      { t: "Оформление экологической метки (Distintivo Ambiental)", d: "Гарантируем законный въезд в зоны ZBE (центр городов) всех крупных муниципалитетов Испании." },
    ],
    hReady: "Готовы подобрать автомобиль?",
    pReady: "Начните с бесплатного анализа вашего запроса. Свяжитесь с нами, чтобы узнать текущую ситуацию на рынке.",
    hQuestions: "Остались вопросы — задавайте!",
    btnWhatsApp: "Ответы на странице FAQ",
    btnEmail: "Свяжитесь с нами",
  };
}

/* ─────────────────────────────────────────────────────────────
   Schema.org FAQ data per locale
───────────────────────────────────────────────────────────── */
const schemaFaqRu = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Сколько стоит услуга автоподбора?", acceptedAnswer: { "@type": "Answer", text: "Стоимость услуги автоподбора составляет 895 евро. Это фиксированная сумма, которая оплачивается после подписания договора и подтверждения выполнимости заявки." } },
    { "@type": "Question", name: "Сколько времени занимает подбор и доставка автомобиля?", acceptedAnswer: { "@type": "Answer", text: "Весь процесс от подписания договора до получения автомобиля с испанскими номерами занимает в среднем 5–6 недель. Из них доставка из Германии — от 15 рабочих дней, оформление в Испании — 1–3 недели." } },
    { "@type": "Question", name: "Можно ли купить автомобиль с аукциона в Германии?", acceptedAnswer: { "@type": "Answer", text: "Да, мы работаем с немецкими B2B аукционами. Перед участием согласовываем с клиентом максимальную ставку и заключаем дополнительное соглашение. После выигрыша организуем все этапы: документы, доставку и регистрацию в DGT." } },
    { "@type": "Question", name: "Гарантируете ли вы результат?", acceptedAnswer: { "@type": "Answer", text: "Мы гарантируем предоставление не менее 10 вариантов автомобилей в течение 30 дней с момента подписания договора. Все этапы — от проверки до регистрации — прописаны в договоре." } },
    { "@type": "Question", name: "Нужно ли лично присутствовать при покупке или оформлении?", acceptedAnswer: { "@type": "Answer", text: "Нет. Мы берём на себя весь процесс: проверку, переговоры, доставку, ITV, налоги и регистрацию в DGT. Ваше личное участие не требуется." } },
  ],
};

const schemaFaqEs = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto cuesta el servicio de selección de coche?", acceptedAnswer: { "@type": "Answer", text: "El coste del servicio de selección es de 895 euros. Es un importe fijo que se abona tras la firma del contrato y la confirmación de la viabilidad de la solicitud." } },
    { "@type": "Question", name: "¿Cuánto tiempo lleva seleccionar y entregar el coche?", acceptedAnswer: { "@type": "Answer", text: "Todo el proceso, desde la firma del contrato hasta recibir el coche con matrícula española, dura en promedio entre 5 y 6 semanas. El transporte desde Alemania tarda un mínimo de 15 días hábiles y la tramitación en España entre 1 y 3 semanas." } },
    { "@type": "Question", name: "¿Se puede comprar un coche en una subasta de Alemania?", acceptedAnswer: { "@type": "Answer", text: "Sí, trabajamos con subastas B2B alemanas. Antes de participar, acordamos con el cliente la puja máxima y firmamos un acuerdo adicional. Tras ganar la subasta, nos encargamos de toda la tramitación: documentos, transporte y matriculación en la DGT." } },
    { "@type": "Question", name: "¿Garantizan el resultado?", acceptedAnswer: { "@type": "Answer", text: "Garantizamos la presentación de al menos 10 opciones de coches en un plazo de 30 días desde la firma del contrato. Todas las etapas — desde la inspección hasta la matriculación — están recogidas en el contrato." } },
    { "@type": "Question", name: "¿Es necesario estar presente en la compra o en los trámites?", acceptedAnswer: { "@type": "Answer", text: "No. Nos encargamos de todo el proceso: inspección, negociaciones, transporte, ITV, impuestos y matriculación en la DGT. No es necesaria su presencia personal." } },
  ],
};

const schemaFaqEn = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does the car sourcing service cost?", acceptedAnswer: { "@type": "Answer", text: "The car sourcing service costs 895 euros. This is a fixed amount paid after signing the contract and confirming that the request is feasible." } },
    { "@type": "Question", name: "How long does car sourcing and delivery take?", acceptedAnswer: { "@type": "Answer", text: "The entire process — from signing the contract to receiving the car with Spanish plates — takes an average of 5–6 weeks. Delivery from Germany takes a minimum of 15 working days, and registration in Spain takes 1–3 weeks." } },
    { "@type": "Question", name: "Can a car be purchased at a German auction?", acceptedAnswer: { "@type": "Answer", text: "Yes, we work with German B2B auctions. Before participating, we agree the maximum bid with the client and sign an additional agreement. After winning, we handle all stages: documents, delivery and DGT registration." } },
    { "@type": "Question", name: "Do you guarantee results?", acceptedAnswer: { "@type": "Answer", text: "We guarantee at least 10 car options within 30 days of signing the contract. All stages — from inspection to registration — are specified in the contract." } },
    { "@type": "Question", name: "Is personal presence required at purchase or registration?", acceptedAnswer: { "@type": "Answer", text: "No. We handle the entire process: inspection, negotiations, delivery, ITV, taxes and DGT registration. Your personal presence is not required." } },
  ],
};

/* ─────────────────────────────────────────────────────────────
   UI COMPONENTS
───────────────────────────────────────────────────────────── */
function SectionSummary({ title, onClick, id, month }: { title: string; onClick?: () => void; id?: string; month?: string }) {
  return (
    <summary
      id={id}
      onClick={() => { if (onClick) setTimeout(onClick, 150); }}
      className={[
        "group flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl px-6 py-5 text-center",
        "cursor-pointer select-none bg-white",
        "shadow-[0_8px_0_rgba(0,0,0,0.12)]",
        "[&::-webkit-details-marker]:hidden",
        "relative",
      ].join(" ")}
    >
      <span className="sm:absolute sm:left-5 sm:top-1/2 sm:-translate-y-1/2 flex items-center justify-center order-last sm:order-first w-full sm:w-auto mt-3 sm:mt-0">
        <img
          src="/faq-icon.svg"
          alt=""
          className="h-10 w-10 object-contain transition-transform duration-700 ease-out group-hover:translate-x-[calc(3.5rem+20px)]"
        />
      </span>
      <span className="text-base font-bold md:text-lg flex flex-wrap items-center justify-center gap-3">
        {title.toUpperCase()}
        {month && (
          <span className="bg-black text-[#ffcc00] px-5 py-1.5 rounded-lg border border-white/20 inline-block relative font-mono text-sm shadow-md uppercase tracking-widest">
            {month}
            <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/20" />
          </span>
        )}
      </span>
      <span className="absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
        <img src="/icons/abajo.png" alt="" className="h-5 w-5 object-contain rotate-0 group-open:rotate-180" />
      </span>
    </summary>
  );
}

function InnerItem({ it, name }: { it: Step; name: string }) {
  return (
    <details name={name} className="group rounded-xl border bg-white">
      <summary
        className={[
          "flex flex-col sm:flex-row items-center gap-3 px-5 py-4",
          "cursor-pointer select-none font-semibold text-center sm:text-left",
          "[&::-webkit-details-marker]:hidden",
          "relative",
        ].join(" ")}
      >
        <span className="order-last sm:order-first flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-0">
          <img src="/icon-doc.png" alt="" className="h-20 w-20 shrink-0" />
        </span>
        <span className="flex-1">{it.t}</span>
        <span className="sm:static absolute right-5 top-1/2 sm:translate-y-0 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
          <img src="/icons/abajo.png" alt="" className="h-5 w-5 object-contain rotate-0 group-open:rotate-180" />
        </span>
      </summary>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-base opacity-0 transition-opacity duration-300 group-open:opacity-100">
            <p className="whitespace-pre-line" style={{ textAlign: "justify" }}>
              {it.d}
            </p>
          </div>
        </div>
      </div>
    </details>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function CarSourcingPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const requestHref = `/${locale}/request`;
  const faqHref = `/${locale}/faq`;
  const contactsHref = `/${locale}/contacto`;
  const C = copy(locale);
  const bannerBtnIcon =
    locale === "en"
      ? "/icons/en-av.png"
      : locale === "es"
        ? "/icons/es_av.png"
        : "/icons/ru_av.png";

  const availableSlots = new Date().getDate() > 25 ? 1 : new Date().getDate() > 18 ? 2 : new Date().getDate() > 10 ? 4 : 7;

  const schemaFaq = locale === "es" ? schemaFaqEs : locale === "en" ? schemaFaqEn : schemaFaqRu;

  const handleScrollToResults = () => {
    const element = document.getElementById("results-header-anchor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
        <img
          src="/media/images/avtopodbor.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 text-center -translate-y-[4px] lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
          <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            {C.heroText}
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
            {C.heroSub}
          </p>
          <div className="mt-6 flex justify-center lg:mt-8 lg:translate-y-[20px]">
            <Link href={requestHref} className="inline-flex items-center justify-center relative overflow-hidden group transition-transform duration-300 hover:scale-105 active:scale-95">
              <img src={bannerBtnIcon} alt={C.btnOrder} className="h-[64px] w-auto relative z-10" />
              <div className="absolute top-0 -left-[150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 transition-transform duration-[1500ms] ease-in-out group-hover:translate-x-[250%]" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mt-8">
        <p className="whitespace-pre-line text-base text-justify leading-relaxed">
          {C.intro}
        </p>
      </section>

      {/* BOUTIQUE URGENCY BLOCK */}
      <section className="mt-6 flex flex-col items-center">
        <div className="w-full max-w-2xl rounded-2xl border-2 border-[#0B3B73] bg-[#f8fafc] p-4 sm:p-5 text-center shadow-lg relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0B3B73] uppercase tracking-wider">
              {C.urgencyTitle}
            </h2>
            <span className="bg-black text-[#ffcc00] px-5 py-1.5 rounded-lg border border-white/20 inline-block relative font-mono text-lg shadow-md uppercase tracking-widest">
              {C.urgencyMonth}
              <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/20" />
            </span>
          </div>

          <div className="mt-4 overflow-hidden bg-[#1a1a1a] py-2 rounded-lg border-b-2 border-black/20 shadow-inner relative">
            <div className="animate-marquee whitespace-nowrap inline-block">
              <span className="text-base font-bold text-[#ffcc00] uppercase tracking-[0.2em] [text-shadow:_0_0_8px_rgba(255,204,0,0.5)] px-8 font-mono">
                {C.urgencyText}
              </span>
              <span className="text-base font-bold text-[#ffcc00] uppercase tracking-[0.2em] [text-shadow:_0_0_8px_rgba(255,204,0,0.5)] px-8 font-mono">
                {C.urgencyText}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <Link
              href={requestHref}
              className="group relative inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-10 py-3.5 text-lg font-black text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="uppercase tracking-tighter text-sm sm:text-base">
                  {C.urgencyBtn} {C.urgencyRemaining}
                </span>
                <span className="bg-black text-[#ffcc00] px-4 py-1.5 rounded-md border border-white/20 inline-block relative font-mono text-xl shadow-md">
                  {availableSlots}
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/20" />
                </span>
              </span>
              <div className="absolute top-0 -left-[150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-20 transition-transform duration-[1500ms] ease-in-out group-hover:translate-x-[250%]" />
            </Link>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-center text-sm sm:text-base italic text-slate-600 leading-snug px-4">
          {C.urgencySubText}
        </p>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>

      {/* ACCORDIONS */}
      <section className="mt-10 flex flex-col items-center gap-5">
        <div className="w-full max-w-3xl">
          <details name="avto-main" className="group rounded-2xl border bg-white">
            <SectionSummary title={C.hBuy} />
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 sm:p-5 space-y-3">
                  {C.steps.map((it: Step, i: number) => (
                    <InnerItem key={i} it={it} name="avto-steps" />
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>

        <div className="w-full max-w-3xl" id="results-header-anchor">
          <details name="avto-main" className="group rounded-2xl border bg-white">
            <SectionSummary
              onClick={handleScrollToResults}
              title={C.inService}
            />
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 sm:p-5 space-y-3">
                  {C.inServiceList.map((it: Step, i: number) => (
                    <InnerItem key={i} it={it} name="avto-benefits" />
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-10 rounded-3xl border bg-[#F6F8FC] p-4 shadow-xl">
        <div className="rounded-3xl bg-white p-8 shadow-md">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-semibold text-center">
            <img src="/icons/go.png" alt="" className="h-16 w-16 drop-shadow-lg" />
            {C.hReady}
          </h2>
          <p className="mt-3 text-center leading-relaxed">{C.pReady}</p>
          <div className="mt-6 flex justify-center">
            <Link
              href={requestHref}
              className="inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-10 py-4 text-lg font-bold text-white shadow-[0_10px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-[2px] relative overflow-hidden group"
            >
              <span className="relative z-10">{C.btnOrder}</span>
              <div className="absolute top-0 -left-[150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 transition-transform duration-[1500ms] group-hover:translate-x-[250%]" />
            </Link>
          </div>
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
              label: locale === "es" ? "¿Cuánto cuesta importar un coche de Alemania?" : locale === "en" ? "How much does a car from Germany cost?" : "Стоимость авто из Германии",
            },
            {
              href: `/${locale}/registro`,
              label: locale === "es" ? "Matriculación de vehículo" : locale === "en" ? "Vehicle registration" : "Регистрация авто в Испании",
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

      {/* CONTACTS */}
      <section className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl border p-6 text-center">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-semibold">
            <img src="/faq.png" alt="" className="h-20 w-20 object-contain drop-shadow" />
            {C.hQuestions}
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={faqHref}
              className="inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-6 py-3 text-sm font-semibold text-white shadow-md hover:brightness-110"
            >
              {C.btnWhatsApp}
            </Link>
            <Link
              href={contactsHref}
              className="inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-6 py-3 text-sm font-semibold text-white shadow-md hover:brightness-110"
            >
              {C.btnEmail}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
