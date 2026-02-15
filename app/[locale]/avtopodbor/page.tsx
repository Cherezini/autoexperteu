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
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Октябрь", "Ноябрь", "Дiciembre"],
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
        { t: "1️. Application and free preliminary analysis", d: "You know approximately what car you want and understand your approximate budget. By clicking the 'FILL IN CAR SEARCH FORM' button, you will see an application form on our website. Fill it out, click 'Send', and our managers instantly receive your message with all the parameters of the car you dream of. \nWe analyze the feasibility of buying a car according to your parameters for free. \nAt this stage, you don't pay anything — the preliminary expert analysis is conducted by our managers for free." },
        { t: "2. Application adjustment in the client's favor.", d: "If the stated parameters do not correspond to the real market situation, we will suggest adjustments: changing the budget, configuration, or alternative car options within your requests. Very often, we offer clients options more profitable than they themselves expected. \nFor example, a client asked to purchase a car for rental. Our partner, who manages the client's car rentals, provided a list of car models that are most frequently rented. And the client happily changed their application and is already earning from the car rental. \nOr, perhaps, our manager will suggest you buy a car with minor damage, but at a price two or even three times cheaper than the market price. For example, our client bought a 2024 Kia Sportage Business with damage for 8,000 euros, the repair cost him 7,000 euros, and the total cost of the fully repaired car, including all acquisition services, fees, and taxes, came to 18,500 euros for the client. At the same time, the market value of this car, according to the auction's own assessment, is at least €26,625. The benefit is obvious." },
        { t: "3. Contract, cost of car selection services, and start of car selection", d: "When we confirm that the application is feasible and have agreed with you on all your wishes, and we are sure that there are cars on the market that meet your requirements - we sign a contract.\nAfter that, you pay for the car selection services in the amount of 895 euros, and we begin to send you specific car options.\nWe guarantee that we will provide at least 10 cars within 30 days from the signing of the contract." },
        { t: "4️. Comprehensive check of the selected car", d: "After you have chosen the car of interest, we determine the procedure for its acquisition. We conduct a full check: technical condition, actual mileage, service history, accidents, pledges, and legal restrictions.\nYou get a full picture of the car's condition before the purchase." },
        { t: "5️. What is the difference: Dealer or Auction?", d: "The search for a car is carried out simultaneously on many platforms. \nEach has its pros and cons. For example, we can purchase a car for you from an official dealer. Then the car will be bought immediately at a fixed price, and there will also be at least a year of manufacturer's warranty. These are undeniable pluses, but there are also minuses – as a rule, car dealerships' prices are significantly higher than buying a car on a platform or, especially, at an auction." },
        { t: "6. Support for the purchase of the car. Delivery from Europe to Spain.", d: "Depending on the purchase platform, we either negotiate with the seller and support the transaction, or apply to participate in a car auction at a real market price.\nAt this stage, we conclude an additional agreement with you, in which we provide for all the nuances of supporting the car purchase directly, depending on where exactly – platform, dealer, auction – the car is being purchased. \nIn this agreement, we describe the procedure for purchasing and delivering the car to Spain. How exactly it is carried out, at what price, and within what timeframe. As you understand, everything depends on each specific case of acquisition. For example, delivering a car from the Baltic states to Spain can be done on a car carrier, as well as by an individual driver. \nMany of our clients want to import a car from Germany with our driver, without waiting for the car carrier, in order to register it faster and enjoy the purchase." },
        { t: "7. Deposit for auction purchase", d: "If your choice falls on a car sold at an auction, we agree with you on the maximum price for which you are ready to purchase the car. We sign an additional agreement to our main contract, and you deposit the amount of the deposit in the amount of the maximum acceptable bid for you and the amount for the auction services into our company's account.\nThis is necessary because after a winning bid, the car must be paid for within the timeframes established by the auction (usually up to 5 business days).\nFailure to meet these conditions leads to fines and sanctions from the auction, up to exclusion from participating in auctions in the future and the recovery of a fine." },
        { t: "8. Purchase of a car in Germany or another country from a dealer or on a platform.", d: "If we are buying the car you like not at an auction, but from a dealer, or on a platform, or anywhere else besides an auction, we will definitely conduct an inspection of this car before recommending you sign the contract. First, we will conduct a check based on the documents for the legal purity of the transaction, the absence of bans, pledges, and other encumbrances that might interfere with first carrying out the purchase and sale transaction, and then you enjoying the purchased car. Then, after we find out that there are no problems with the car from the document point of view, an independent expert will look at the car on site to investigate its technical condition if the car is not being purchased from a dealer. A dealer, as a rule, honestly talks about the car's damage, what flaws it has, and even provides a calculation for carrying out the car's repair." },
        { t: "9. Registration of the car in your name", d: "Regardless of where the car was bought, from a dealer or at an auction, we obtain temporary numbers and documents in your name — both when buying through an auction and when buying from another seller, taking into account the country of purchase and applicable procedures." },
        { t: "10. Delivery, diagnostics and registration in Spain", d: "The car is delivered to Spain, undergoes diagnostics at our service station, after which we register the car in your name.\nWe prepare all the documents: Ficha Técnica Reducida (reduced technical data sheet), necessary for passing the inspection - ITV.\nWe don't just sign you up for the inspection. Our manager, who speaks your language, is personally present at the station to bridge the language barrier with the technicians and guarantee the successful passing of the inspection.\nWe do a professional calculation of registration taxes (IEDMT) and look for legal grounds for their reduction or partial cancellation.\nПодаем документы в полицию - DGT, и получаем технический паспорт на Ваш автомобиль!\n\nВы получаете полностью оформленный автомобиль, готовый к эксплуатации в Испании — под ключ, без бюрократии, лишних затрат времени, денег и нервов.",
        },
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
      urgencyTitle: `Formato Boutique con un número limitado de clientes`,
      urgencyMonth: currentMonth,
      urgencyText: "• COCHES DE ALEMANIA •• SELECCIÓN EN ESPAÑA • PARA UN NÚMERO LIMITADO DE CLIENTES - SIN FLUJO • SIN CONVEYOR • SIN DECISIONES ALEATORIAS •",
      urgencySubText: "Trabajamos en formato boutique: aceptamos un número limitado de clientes simultáneamente para realizar con calidad cada etapa, desde la selección hasta el cierre del trato y los documentos.",
      urgencyBtn: `Reservar un slot`,
      urgencyRemaining: `Quedan`,
      heroText: "Selección de coche: pedido и compra de coches в España, Alemania и otros países de la UE llave в mano",
      heroSub: "Revisión de coche, apoyo en la transacción, ITV, registro DGT",
      intro: 'Nuestra empresa se especializa в la importación de vehículos bajo pedido desde Alemania и otros países de la UE, asegurando la selección, inspección técnica, logística и matriculación completa "llave в mano".\n\nLa selección и compra de un coche в España llave в mano es un servicio для quienes desean comprar un coche в España, Alemania o Europa sin horas и días de búsqueda в sitios web, análisis de mercado, revisiones, negociaciones и burocracia.\nUsted formula el objetivo — nosotros nos encargamos de todo el proceso и respondemos por el resultado.',
      btnOrder: "RELLENAR FORMULARIO DE BÚSQUEDA DE COCHE",
      hBuy: "Cómo se realiza la compra de un coche llave en mano",
      steps: [
        { t: "1️. Solicitud и análisis preliminar gratuito", d: "Usted sabe aproximadamente qué coche desea и comprende su presupuesto aproximado. Al hacer clic в el botón 'RELLENAR FORMULARIO DE BÚSQUEDA DE COCHE', verá un formulario de solicitud в nuestro sitio web. Complételo, haga clic в 'Enviar' и nuestros gestores recibirán instantáneamente su mensaje con todos los параметров del coche con el que sueña. \nAnalizamos gratuitamente la viabilidad de comprar un coche según sus parámetros. \nEn esta etapa, usted не paga nada — el análisis experto preliminar es realizado por nuestros gestores de forma gratuita." },
        { t: "2. Ajustе de la solicitud a favor del cliente.", d: "Если los parámetros declarados не corresponden a la situación real del mercado, propondremos ajustes: cambios в el presupuesto, configuración u opciones alternativas de coches dentro de sus peticiones. Muy a menudo, ofrecemos a los clientes opciones más rentables de lo que ellos mismos esperaban. \nFor example, un cliente pidió adquirir un coche para alquilar. Nuestro socio, que gestiona el alquiler de coches del cliente, proporcionó una lista de modelos de coches que se alquilan con más frecuencia. И el cliente cambió felizmente su solicitud и ya está ganando con el alquiler del coche. \nО, tal vez, nuestro gestор le sugiera comprar un coche con daños menores, pero a un precio dos o incluso three veces más barato que el precio de mercado. Например, nuestro cliente compró un Kia Sportage Business de 2024 con daños por 8.000 euros, la reparación le costó 7.000 euros, и el coste total del coche completamente reparado, junto con todos los servicios de adquisición, tasas e impuestos, fue de 18.500 euros para el cliente. Al mismo tiempo, el valor de mercado de este coche, según la propia valoración de la subasta, es de al menos 26.625 €. La ventaja es evidente." },
        { t: "3. Contrato, coste de los servicios de selección de coches e inicio de la selección", d: "Когда confirmamos que la solicitud es viable и hemos acordado con usted todos sus deseos, и estamos seguros de что hay coches в el mercado que cumplen con sus requisitos, firmamos un contrato.\nПосле de eso, usted paga los servicios de selección de coches por un importe de 895 euros, и comenzamos a enviarle opciones específicas de coches.\nLe garantizamos que le proporcionaremos al menos 10 coches в un plazo de 30 días a partir de la firma del contrato." },
        { t: "4️. Inspección integral del coche seleccionado", d: "После de haber elegido el coche de su interés, determinamos el procedimiento para su adquisición. Realizamos una inspección completa: estado técnico, kilometraje real, historial de mantenimiento, accidentes, embargos и restricciones legales.\nUsted obtiene una imagen completa del estado del coche antes de la compra." },
        { t: "5️. ¿Cuál es la diferencia: Concesionario o subasta?", d: "La búsqueda de un coche se realiza simultáneamente в muchas plataformas. \nCada una tiene sus pros и sus contras. Así, por ejemplo, podemos adquirir un coche para usted de un concesionario oficial. Entonces el coche se comprará de inmediato и a un precio fijo, и además, habrá al menos un año de garantía del fabricante. Estas son ventajas indudables, pero también hay desventajas: por lo general, los precios de los concesionarios son significativamente más altos que comprar un coche в una plataforma o, especialmente, в una subasta." },
        { t: "6. Acompañamiento de la compra del coche. Entrega del coche de Europa a España.", d: "Dependiendo de la plataforma de compra, o bien negociamos con el vendedor и acompañamos la transacción, o bien presentamos una solicitud para participar в una subasta de coches a un precio de mercado real.\nEn esta etapa, celebramos un acuerdo adicional con usted, в el que preвеmos todos los matices del acompañamiento directo de la compra del coche, dependiendo de dónde se adquiera exactamente: plataforma, concesionario, subasta. \nEn este acuerdo describimos el procedimiento de adquisición и entrega del coche a España. Cómo se lleva a cabo exactamente, a qué precio и в qué plazos. Как comprenderра, todo depende de cada caso específico de adquisición. Например, entregar un coche desde los países bálticos a España se puede hacer в un portavehículos o mediante un conductor individual. \nMuchos de our clientes quieren importar un coche de Alemania con nuestro conductor, sin esperar al portavehículos, para matricularlo más rápido и disfrutar de la compra." },
        { t: "7. Depósito en compras a través de subasta", d: "Если su elección recae в un coche que se vende в una subasta, acordamos con usted el precio máximo por el cual está dispuesto a adquirir el coche. Firmamos un acuerdo adicional a nuestro contrato principal, и usted deposita el importe del depósito por el valor de la puja máxima aceptable para usted и el importe por los servicios de la subasta в la cuenta de nuestra empresa.\nEsto es necesario porque, tras una puja ganadora, el coche debe pagarse в los plazos establecidos por la subasta (generally hasta 5 días hábiles).\nEl incumplimiento de estas condiciones conlleva multas и sanciones por parte de la subasta, hasta la exclusión de participar в subastas в el futuro и el cobро de una multa." },
        { t: "8. Compра de un coche в Alemania u otro país a un concesionario o в una plataforma.", d: "Если el coche que le gusta не lo compramos в una subasta, sino a un concesionario, или в una plataforma, или в cualquier otro lugar que не sea una subasta, realizaremos obligatoriamente una inspección de este coche antes de recomendarle que firme el contrato. Primero, realizaremos una verificación de documentos для la pureза legal de la transacción, la ausencia de prohibiciones, embargos и otras cargas que puedan interferir primero в la realización de la transacción de compraventa и luego в que usted disfrute del coche comprado. Luego, после de averiguar que не hay problemas con el coche desde el punto de vista de los documentos, un experto independiente verá el coche in situ для investigar su estado técnico, если el coche не se adquiere a un concesionario. El concesionario, por regla general, habla honestamente sobre los daños del coche, qué defectos tiene e incluso proporciona un presupuesto para realizar la reparación del coche." },
        { t: "9. Tramitación del coche a su nombre", d: "No importa dónde se haya comprado el coche, в un concesionario o в una subasta, obtenemos matrículas temporales и documentos a su nombre, tanto al comprar a través de una subasta como al comprar a otro vendedor, teniendo в cuenta el país de adquisición и los procedimientos aplicables." },
        { t: "10. Entreга, diagnóstico и matriculación в España", d: "El coche se entrega в España, pasa el diagnóstico в nuestra estación de servicio técnico, tras lo cual realizamos la matriculación del coche a su nombre.\nPreparamos todos los documentos: Ficha Técnica Reducida, necesaria для pasar la inspección - ITV.\nNo solo le pedimos cita для la inspección técnica. Nuestro gestор, que habla su idioma, está presente personalmente в la estación для eliminar la barrera lingüística con los técnicos и garantizar el éxito de la inspección.\nRealizamos un cálculo profesional de los impuestos de matriculación (IEDMT) и buscamos bases legales для su reducción o cancelación parcial.\n¡Presentamos los documentos в la policía - DGT, и recibimos el permiso de circulación de su coche! \n\nUsted recibe un coche totalmente tramitado, listo для su uso в España — llave в mano, sin buроcracia, pérdida innecesaria de tiempo, dinero и nervios." },
      ],
      inService: "Resultado: compra segura de coche",
      inServiceList: [
        { t: "Análisis experto de precios и búsqueda de las mejores ofertas в España и la UE", d: "Monitoreamos diariamente más de 20 plataformas europeas, encontrando coches significativamente más baratos que в el mercado español." },
        { t: "Importación profesional de coches de Alemania и Europa bajo pedido", d: "Entrega directa desde las principales subastas con todo el paquete de documentos для aduanas и la DGT." },
        { t: "Diagnóstico técnico completo и verificación de pureza legal", d: "Inspección de 80 puntos: desde el espesor de la pintura hasta la verificación del kilometraje real и ausencia de embargos." },
        { t: "Cálculo profesional и optimización de impuestos de matriculación", d: "Ayudamos a minimizar legalmente los costes del impuesto (IEDMT) и los gastos de matriculación." },
        { t: "Acompañamiento seguro de la transacción и negociación de precios", d: "Gestionamos toda la comunicación con el vendedor для conseguir el precio final más ventajoso для usted." },
        { t: "Entrega de coche asegurada и fiable a cualquier punto de España", d: "Transporte в portavehículos o por conductor individual directamente a su puerta в cualquier lugar de España." },
        { t: "Obтención de matrículas españolas и matriculación de coches 'llave в mano'", d: "Gestión de la ITV и todos los trámites administrativos sin su participación personal." },
        { t: "Tramitación de la etiqueta ambiental (Distintivo Ambiental)", d: "Garantizamos el acceso legal a las zonas ZBE (centro de las ciudades) de todos los grandes municipios de España." },
      ],
      hReady: "¿Listo для encontrar tu coche?",
      pReady: "Empieza con un análisis gratuito de tu solicitud. Contáctanos для conocer la situación actual del mercado.",
      hQuestions: "¿Аún tienes preguntas? ¡Pregúntanos!",
      btnWhatsApp: "Respuestas в la página de FAQ",
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
    intro: 'Наша компания является не просто агентством по оформлению импорта машин, мы специализируемся на импорте автомобилей под заказ из Германии и других стран Евросоюза, обеспечивая подбор, техническую проверку, логистику и полную регистрацию на испанские номера "под ключ".\n\nПодбор и покупка автомобиля в Испании под ключ — это услуга для тех, кто хочет купить автомобиль в Испании, Германии или Европе, без часов и дней поисков по сайтам, анализа рынка, проверок, переговоров и бюрократии.\nВы формулируете задачу — мы берём на себя весь процесс и отвечаем за результат.',
    btnOrder: "Заполнить форму подбора авто",
    hBuy: "Как проходит покупка автомобиля под ключ",
    steps: [
      { t: "1️. Заявка и бесплатный предварительный анализ", d: "Вы знаете примерно, какой автомобиль хотите, и понимаете свой примерный бюджет. Нажав кнопку «Заполнить форму подбора авто», Вы увидите анкету-заявку на нашем сайте, заполняете, нажимаете «Отправить», и моментально наши менеджеры получают Ваше сообщение cо всеми параметрами автомобиля, о котором Вы мечтаете. \nМы бесплатно анализируем возможность покупки автомобиля по Вашим параметрам.\nНа этом этапе вы ничего не оплачиваете — предварительный экспертный анализ проводится нашими менеджерами бесплатно." },
      { t: "2. Корректировка заявки в пользу клиента.", d: "Если заявленные параметры не соответствуют реальной ситуации на рынке, мы предложим корректировки: изменение бюджета, комплектации или альтернативные варианты автомобилей в рамках Ваших запросов. Очень часто, мы предлагаем клиентам варианты выгоднее, чем он сам предполагал. \nНапример, клиент просил приобрести для сдачи в аренду автомобиль. Наш партнер, который осуществляет аренду автомобилей клиента, дал список моделей автомобилей, которые наиболее часто сдаются в аренду. И клиент с удовольствием изменил свою заявку и уже зарабатывает на аренде авто. \nИли, возможно, наш менеджер предложит Вам купить автомобиль с небольшими повреждениями, но по цене в два, а иногда и в три раза дешевле рыночной. Например, наш клиент купил Kia Sportage business 2024 года выпуска with повреждениями за 8 тысяч евро, ремонт ему обошелся в 7 тысяч евро, общая стоимость полностью отремонтированного автомобиля, вместе со всеми услуями по приобретению автомобиля, сборами и налогами, для клиента вышла в 18500 евро. В тоже время, рыночная стоимость этого автомобиля по оценке самого аукциона, составляет не менее 26 625 €. Выгода очевидна." },
      { t: "3. Договор, стоимость услуг автоподбора, и начало подбора автомобиля", d: "Когда мы подтверждаем, что заявка выполнима и согласовали с Вами все Ваши пожелания, и мы уверены, что на рынке есть автомобили, отвечающие Вашим требованиям - мы подписываем договор.\nПосле этого вы оплачиваете услуги автоподбора в размере 895 евро, и мы начинаем направлять вам конкретные варианты автомобилей.\nМы гарантируем Вам, что предоставим не менее 10 автомобилей в течение 30 дней с момента заключения договора." },
      { t: "4️. Комплексная проверка выбранного автомобиля", d: "После того как вы выбрали интересующий автомобиль мы определяем процедуру его приобретения. Проводим полную проверку: техническое состояние, реальный пробег, история обслуживания, ДТП, залоги и юридические ограничения.\nВы получаете полную картину состояния автомобиля до покупки." },
      { t: "5️. В чем разница, где покупать автомобиль. Дилер или аукцион?", d: "Поиск автомобиля осуществляется одновременно на очень многих платформах. \nУ каждой есть свои плюсы и минусы. Так, например, мы можем приобрести для Вас автомобиль у официального дилера. Тогда автомобиль будет куплен сразу и по фиксированной цене, при этом, еще будет, как минимум, год гарантии от производителя. Это несомненные плюсы, но есть и минусы – как правило у автосалонов цены значительно выше, нежели купить автомобиль на площадке или, тем более на аукционе." },
      { t: "6. Сопровождение покупки автомобиля. Доставка автомобиля из Европы в Испанию.", d: "В зависимости от площадки покупки мы либо ведём переговоры с продавцом и сопровождаем сделку, либо подаём заявку на участие в автомобильном аукционе по реальной рыночной цене.\nНа этом этапе мы с Вами заключаем дополнительное соглашение, в котором предусматриваем все нюансы по сопровождению непосредственно покупки автомобиля, в зависимости от того, где именно – площадка, дилер, аукцион, приобретается автомобиль. \nВ этом соглашении мы описываем процедуру приобретения и доставки автомобиля в Испанию. Как именно это осуществляется, по какой цене, и в какие сроки. Как Вы понимаете, все зависит от каждого конкретного случая приобретения. Например, доставить автомобиль из стран Прибалтики в Испанию можно на автовозе, так и индивидуальным водителем. \nМногие наши клиенты хотят импортировать машину из Германии нашим водителем, не дожидаясь автовоза, чтобы быстрее поставить на учет и наслаждаться покупкой." },
      { t: "7. Депозит при покупке через аукцион", d: "Если Ваш выбор остановился на автомобиле, который продается на аукционе, мы с Вами оговариваем максимальную цену, за которую Вы готовы приобрести автомобиль. Мы подписываем дополнительное соглашение к нашему основному договору, и Вы вносите сумму депозита в размере максимально приемлемой для Вас ставки и сумму за услуги аукциона, на счёт нашей компании.\nЭто необходимо, так как после выигрышной ставки автомобиль должен быть оплачен в установленные аукционом сроки (обычно до 5 рабочих дней).\nНевыполнение этих условий влечёт штрафы и санкции со стороны аукциона, вплоть до исключения из участников аукционов в дальнейшем и взыскание штрафа." },
      { t: "8. Покупка автомобиля в Германии или другой стране у дилера или на площадке.", d: "Если понравившийся Вам автомобиль мы покупаем не на аукционе, а у дилера, или на площадке, или в любом другом месте, кроме аукциона, перед тем как рекомендовать Вам заключить договор, мы обязательно проведём проверку этого автомобиля. Сначала проведём проверку по документам, на юридическую чистоту сделки, отсутствие запретов, залога в, и других обременений, которые могут помешать сначала осуществить сделку купли-продажи, а потом вам наслаждаться купленным автомобилем. Потом, после того как мы выясним что с автомобилем нет никаких проблем с точки зрения Документов, независимый эксперт посмотрит автомобиль на месте, чтобы исследовать его техническое состояние, если автомобиль приобретается не у дилера. Дилер, как правило, честно говорит о повреждениях автомобиля, какие на нём есть недостатки, и даже предоставляет калькуляцию для осуществления ремонта автомобиля." },
      { t: "9. Оформление автомобиля на Ваше имя", d: "Не важно, где был куплен автомобиль, у дилера или на аукционе, мы получаем временные номера и документы на Ваше имя — как при покупке через аукцион, так и при покупке у другого продавца, с учётом страны приобретения и применимых процедур." },
      { t: "10. Доставка, диагностика и регистрация в Испании", d: "Автомобиль доставляется в Испанию, проходит диагностику на нашей станции технического обслуживания, после чего мы выполняем регистрацию автомобиля на Ваше имя.\nГотовим все документы: Ficha Técnica Reducida (сокращенная техническая карта), необходимой для прохождения осмотра - ITV.\nМы не просто записываем вас на техосмотр. Наш менеджер, говорящий на Вашем языке, лично присутствует на станции, чтобы снять языковой барьер с техниками и гарантировать успешное прохождение осмотра.\nДелаем профессиональный расчет налогов на постановку на учет (IEDMT) и поиск законных оснований для их снижения или частичной отмены.\nПодаем документы в полицию - DGT, получаем технический паспорт на Ваш автомобиль!\n\nВы получаете полностью оформленный автомобиль, готовый к эксплуатации в Испании — под ключ, без бюрократии, лишних затрат времени, денег и нервов.",
        },
    ],
    inService: "Результат: безопасная покупка авто",
    inServiceList: [
      { t: "Экспертный анализ цен и подбор лучших предложений в Испании и ЕС", d: "Мы ежедневно мониторим более 20 европейских площадок, находя автомобили значительно дешевле рынка Испании." },
      { t: "Профессиональный импорт автомобилей из Германии и Европы под заказ", d: "Прямая доставка с крупнейших аукционов с полным пакетом документов для таможни и DGT." },
      { t: "Полная техническая диагностика и проверка юридической чистоты", d: "Проверка по 80 пунктам: от толщины краски до подтверждения реального пробега и отсутствия залогов." },
      { t: "Профессиональный расчет и оптимизация налогов на регистрацию", d: "Помогаем законно минимизировать затраты на налог (IEDMT) и постановку на учет." },
      { t: "Безопасное сопровождение сделки и переговоры о снижении цены", d: "Мы берем на себя общение с продавцом и добиваемся для вас максимально выгодной финальной цены." },
      { t: "Надежная застрахованная доставка автомобиля в любую точку Испании", d: "Перевозка автовозом или перегон индивидуальным водителем прямо к вашему порогу в любой точке Испании." },
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

export default function CarSourcingPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const requestHref = `/${locale}/request`;
  const faqHref = `/${locale}/fao`;
  const contactsHref = `/${locale}/contacto`;
  const C = copy(locale);
  const bannerBtnIcon =
    locale === "en"
      ? "/icons/en-av.png"
      : locale === "es"
        ? "/icons/es_av.png"
        : "/icons/ru_av.png";

  const availableSlots = new Date().getDate() > 25 ? 1 : new Date().getDate() > 18 ? 2 : new Date().getDate() > 10 ? 4 : 7;

  const handleScrollToResults = () => {
    const element = document.getElementById('results-header-anchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] h-[390px]">
        <img
          src="/media/images/avtopodbor.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center translate-y-[61px]">
          <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            {C.heroText}
          </h1>
          {/* НОВЫЙ ПОДЗАГОЛОВОК */}
          <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
            {C.heroSub}
          </p>
          <div className="mt-8 flex justify-center translate-y-[20px]">
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

      {/* BOUTIQUE URGENCY BLOCK — КОМПАКТНЫЙ СТИЛЬ ТАБЛО */}
      <section className="mt-6 flex flex-col items-center">
        <div className="w-full max-w-2xl rounded-2xl border-2 border-[#0B3B73] bg-[#f8fafc] p-4 sm:p-5 text-center shadow-lg relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0B3B73] uppercase tracking-wider">
              {C.urgencyTitle}
            </h2>
            {/* МЕСЯЦ В СТИЛЕ ТАБЛО */}
            <span className="bg-black text-[#ffcc00] px-5 py-1.5 rounded-lg border border-white/20 inline-block relative font-mono text-lg shadow-md uppercase tracking-widest">
                {C.urgencyMonth}
                <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/20" />
            </span>
          </div>
          
          {/* БЕГУЩАЯ СТРОКА — ЭКРАН ТАБЛО */}
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
                
                {/* ЦИФРА СЛОТОВ В СТИЛЕ ТАБЛО */}
                <span className="bg-black text-[#ffcc00] px-4 py-1.5 rounded-md border border-white/20 inline-block relative font-mono text-xl shadow-md">
                   {availableSlots}
                   <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/20" />
                </span>
              </span>
              <div className="absolute top-0 -left-[150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-20 transition-transform duration-[1500ms] ease-in-out group-hover:translate-x-[250%]" />
            </Link>
          </div>
        </div>
        {/* НОВОЕ ПРЕДЛОЖЕНИЕ НИЖЕ БУТИКА */}
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

      {/* CONTACTS */}
      <section className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl border p-6 text-center">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-semibold">
            {/* НОВАЯ ИКОНКА FAQ.PNG ИЗ КОРНЯ */}
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