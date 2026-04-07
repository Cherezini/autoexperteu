import Link from "next/link";
/* ─────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */
type Locale = "ru" | "en" | "es";
type Item = { t: string; d: string };

/* ─────────────────────────────────────────────────────────────
   COPY (ru / en / es)
───────────────────────────────────────────────────────────── */
function copy(locale: string) {
  const L = (locale as Locale) || "ru";

  if (L === "en") {
    return {
      heroAlt: "Buy a car in Germany and bring it to Spain",
      heroTitle: "Car from Germany to Spain — purchase, delivery and DGT registration",
      heroSub: "We source and buy the car in Germany, deliver it to Spain and register it with the DGT turnkey: full cost calculated upfront, taxes, ITV and DGT registration — no surprises.",
      dealLabel: "Real deal — won at auction",
      dealBadge: "✓ Tender won",
      dealCar: "Audi Q5 40 TDI",
      dealSpecs: "Diesel · Auto · 204 hp · 56 358 km",
      dealRows: [
        { label: "🇩🇪 Winning bid (German auction)", val: "24 000 €", style: "gold" },
        { label: "🚚 Delivery + registration in Spain", val: "+ 4 500 €", style: "muted" },
        { label: "🇪🇸 Total turnkey in Spain", val: "28 500 €", style: "bold" },
        { label: "Same car at Spanish dealer", val: "42 800 €+", style: "strike" },
      ],
      dealSaveLabel: "Client savings:",
      dealSaveVal: "−14 300 €",
      intro:
        "",
      seoTitle: (
        <span className="block text-center">
          How much does it really cost to import a car from Germany to Spain <br /> AND HOW TO AVOID OVERPAYING
        </span>
      ),
      seoSections: [
      {
        h2: "Is buying a car in Germany and bringing it to Spain actually worth it — or just a myth?",
        p: [
          "Short answer: it depends on the vehicle segment. Let's be honest.",
          "<strong>When it's clearly worth it:</strong>",
          "For cars priced from €20,000 and above, the gap between a German auction and the Spanish retail market is consistently €12,000–€20,000. This isn't a marketing claim — it's arithmetic: leasing companies sell returned vehicles without the dealer's retail markup (15–25%), while transport and Spanish registration costs are fixed and don't scale with the car's price.",
          "The most profitable segments: crossovers and SUVs (Audi Q5/Q7, BMW X5, Mercedes GLC/GLE, Volkswagen Touareg), executive saloons (BMW 5 Series, Mercedes E-Class, Audi A6) and premium vehicles in general — exactly where the dealer markup is highest.",
          "<strong>When the savings are smaller:</strong>",
          "For cars under €15,000, delivery and registration costs represent a significant portion of the total value, and the net saving shrinks considerably. Importing a budget hatchback from Germany to save €1,500–€2,000 simply doesn't make financial sense.",
        ],
        h3: [
          {
            t: "The bottom line:",
            p: [
              "Importing from Germany isn't an insider trick. It's the exact same channel Spanish dealers use to stock their own forecourts — at the same auctions. The difference is that they add their margin on top. You don't.",
              "If your car falls into the profitable segment — we'll run calculation for your specific model so you can see the real numbers before making any decision.",
            ],
          },
        ],
      },
      {
        h2: "Hidden taxes and mandatory payments in Spain",
        p: [
          "Germany and Spain are EU countries, so there are no customs duties between them. But that does not mean ‘no taxes’. In Spain you will face registration payments and procedures — and they are what most often eat the expected savings.",
          "Key risk points: registration tax (IEDMT — depends on emissions/vehicle type and region), municipal road tax (IVTM — depends on the city), possible administrative fees, and also adaptation/certification costs if documents are missing or the car has specification nuances.",
          "Important: amounts and rules can differ by region and by the specific situation of the vehicle. In the consultation we don’t ‘guess’ — we calculate scenarios and show the cost range in advance so you understand the real price of bringing a car from Germany to Spain.",
        ],
        h3: [
          {
            t: "Why ‘bought cheap’ ≠ ‘registered cheap’",
            p: [
              "Buying is only the entry point. The mistake happens when someone has already paid for the car and then discovers that the documents or emissions category require a different registration route, extra certificates, or modifications. Timelines stretch and the budget grows.",
            ],
          },
        ],
      },
      {
        h2: "Which cars are most profitable to import from Germany to Spain: makes and models",
        p: [
          "Not every car is equally profitable to import from Germany. The gap between European prices and the Spanish market depends on the segment — and in the premium class, it is at its maximum.",
          "<strong>Top 5 cars by import profitability from Germany, based on our experience and real calculations:</strong>",
          "Audi Q5 and Q7 — the most popular request among our clients and consistently one of the most profitable. Leasing Audis from Germany are well-maintained, come with full service history, and the gap from the Spanish market regularly amounts to €12,000–€18,000.",
          "BMW 5 Series and BMW X5 — a business saloon and SUV that German corporate fleets renew every 3 years. Vehicles aged 2–4 years with 40,000–70,000 km come to auction. Savings compared to a Spanish dealership: €10,000–€16,000.",
          "Mercedes E-Class, GLC and GLE — three models leading in demand among our clients. A Mercedes from German leasing is, as a rule, full specification, one owner, official service history. The gap from the Spanish market: €13,000–€20,000.",
          "Porsche Cayenne — in this segment the auction logic works particularly strongly: Spanish dealers mark up used Cayennes by 20–25%, while at a German auction the same car sells at real assessed value. Savings: from €15,000 and above.",
          "Volkswagen Touareg — an underrated choice. One of the best value-for-reliability options: wide availability at auction, moderate delivery costs, strong resale value in Spain.",
          "<strong>When it's not worth it:</strong>",
          "Small cars under €15,000 — Volkswagen Golf, Seat Leon, Skoda Octavia. In this segment, logistics and registration costs eat up most of the saving. Importing such a car for a €1,500–€2,500 difference simply doesn\'t make financial sense. We will find you a car within your budget that makes importing worthwhile — because we source across all of Europe, including the Baltic states, where prices for equivalent models are significantly lower than in Germany.",
        ],
        h3: [
          {
            t: "CONCLUSION",
            p: [
              "If you are looking at a car in the segment from €20,000 — importing from Germany will almost always deliver meaningful savings. If your budget is lower — no problem: we will find you a car matching your budget, request and taste. Because we are officially registered at both Spanish and European auctions, and we source vehicles at the right price wherever it best fits your requirements. Write to us, fill in the form, it's free — we will make you a great offer.",
              "Simply click the button below on this page — FILL IN THE CAR SOURCING FORM.",
            ],
          },
        ],
      },
      {
        h2: "Step-by-step plan: how to bring a car from Germany to Spain without surprises",
        p: [
          "Most people lose money not on the purchase — but after it. Unexpected taxes, a failed ITV, incorrectly prepared documents. Here is the sequence that prevents that.",
          "Step 1. Define the task and the budget",
          "Be specific: brand, model, desired mileage, year, and the maximum all‑in turnkey total in Spain — not the purchase price, but the final number including all costs.",
          "Step 2. Shortlist options",
          "The search runs in parallel across several sources: dealer platforms, private sellers, and specialized auctions. Parallel search gives a real view of the market and the best price.",
          "Step 3. Check history and documents before buying",
          "VIN check, accident history, real mileage, legal clean status — all before the deal, not after. A mistake at this stage costs more than everything else.",
          "Step 4. Calculate the all‑in turnkey total",
          "Purchase price + delivery + ITV + DGT + IEDMT + gestoría. Only after you see the full figure should you decide to buy.",
          "Step 5. Auction purchase — an important nuance",
          "If the car you choose is sold at a specialized auction — for example, the well‑known German auction OPENLINE — you need to understand that such platforms work only with accredited professional market participants. A private individual cannot register and bid on their own.",
          "In this case, clients come to us. We sign a detailed contract that specifies the exact vehicle and the maximum price the client is willing to pay. The purchase is carried out strictly under the client’s conditions. Important: if we win the auction, payment must be made within 5 business days from the auction end — this is a mandatory platform requirement.",
          "Step 6. Arrange delivery to Spain",
          "Car transporter or individual driving — depending on urgency. Insurance for the entire route is mandatory.",
          "Step 7. Vehicle reception and preparation at our station in Alicante",
          "At the client’s request, we receive the vehicle directly at our service station in Alicante. We perform full diagnostics, detailing, and prepare the car before handover. During this entire period, the vehicle is under our control and stored on our premises.",
          "Step 8. Pass ITV",
          "Technical inspection with an interpreter — a critically important stage. Our manager attends in person to remove the language barrier and ensure a successful pass.",
          "Step 9. Complete DGT registration and get Spanish plates",
          "Document submission, IEDMT payment, obtaining the registration certificate and number plates. From this moment, the car is fully legal in Spain."
        ],
        h3: [
          {
            t: "",
            p: [
              "Planning to do it yourself? Our consultation covers the most expensive risk — mistakes before purchase. You get a plan for your specific situation, a document checklist, and a preliminary financial calculation. It’s cheaper than one “unexpected” payment after you buy.",
              "Want the real final price before you buy? Leave a request — we’ll lock your cost model, timelines, and registration route.",
              "We can also source the car for you — it’s more effective than searching on your own. Just click the button below — FILL IN THE CAR SOURCING FORM."
            ],
          },
        ],
      },
    ],
      btnOrder: "Describe your ideal car",
      whyTitle: "Why buying from Germany beats Spanish dealers",
      whyItems: [
        {
          t: "Save 15–25% compared to any Spanish dealer",
          d: "When you buy a car from a Spanish dealership, you're not just paying for the vehicle. You're paying for the showroom rent, staff salaries, advertising campaigns and the dealer's profit margin. All of this is built into the price tag in the form of a retail markup — between 15 and 25% above the car's real market value. At a German auction, that markup doesn't exist. Leasing companies and corporate fleets sell their returned vehicles at real market prices — with no intermediary between you and what the car is actually worth. In practice: a car priced at €40,000 at a Spanish dealership will cost €30,000–€34,000 at a German auction. The difference is real money that stays in your pocket.",
        },
        {
          t: "Real savings of €10,000 to €20,000 — figures from real deals",
          d: "The figures below are not marketing promises. These are real transactions we have completed for our clients.\n\nAudi Q5 40 TDI · 2020 · 56,358 km\nPurchased at auction: €24,000 · Turnkey in Spain: €28,500 · Equivalent at Spanish dealers: from €42,800 · Client saving: €14,300\n\nBMW 5 Series 520d · 2021 · 48,000 km\nPurchased at auction: €26,500 · Turnkey in Spain: €31,200 · Equivalent at Spanish dealers: from €46,500 · Client saving: €15,300\n\nMercedes GLC 220d · 2021 · 52,000 km\nPurchased at auction: €29,000 · Turnkey in Spain: €34,000 · Equivalent at Spanish dealers: from €51,000 · Client saving: €17,000\n\nFill in the car search form on this page — and we will find exactly the car you are looking for.",
        },
        {
          t: "Manufacturer warranty remains valid",
          d: "One of the most common questions we receive: 'If I buy a car in Germany and bring it to Spain, does the manufacturer's warranty still apply?' The answer is yes, provided the car is still within its warranty period.\n\nThe warranty offered by European manufacturers — BMW, Mercedes, Audi, Volkswagen, Skoda, Volvo and others — is pan-European. This means it is valid in all European Union countries regardless of which country the car was originally purchased in. Moving the car from Germany to Spain does not interrupt or void the warranty.\n\nThe only requirement: the vehicle must be serviced at an authorised dealer for the relevant brand — in any EU country, including Spain.\n\nImportant note: this applies to vehicles purchased from official dealers or leasing companies with an original service history. That is precisely the type of vehicle we work with.",
        },
        {
          t: "Full vehicle history before you buy — no hidden accidents, no clocked mileage",
          d: "The fear of buying a car with hidden accident damage or clocked mileage is the number one concern that holds buyers back. And it's a legitimate fear — such vehicles do exist in the European market. That's why we never place a bid until we have completed a full check on every lot.\n\nWhat we check:\n— Accident history through European databases\n— Real mileage and its consistency with the service history\n— Number of previous owners and countries of registration\n— Existence of liens, encumbrances and legal restrictions\n— VIN number match with all documentation\n\nIf the check reveals any discrepancies — we do not recommend that vehicle and continue the search. You receive a car with a clean history, or you don't receive one at all.",
        },
        {
          t: "No customs duties — Germany and Spain are both EU member states",
          d: "Many buyers mistakenly believe that moving a car from Germany to Spain involves customs procedures and additional duties. This is a widespread misconception that prevents many people from making a very advantageous purchase.\n\nHere's how it actually works: Germany and Spain are both member states of the European Union. Within the EU, the principle of free movement of goods applies. This means there are no customs barriers, tariffs or additional charges when moving a vehicle between these two countries.\n\nWhen registering the vehicle in Spain, only local Spanish taxes are due — IVA (in applicable cases) and IEDMT (vehicle registration tax). Both taxes apply to the registration of any vehicle in Spain, regardless of its country of origin. This is not customs — it is a registration tax. We calculate all of these costs for you in advance and include them in the final turnkey figure.",
        },
        {
          t: "Full Spanish registration included",
          d: "Registering a foreign vehicle in Spain is a multi-stage process that requires knowledge of local legislation, the language, and bureaucratic procedures. This stage is precisely where those who attempt it independently most often encounter unexpected costs and delays.\n\nWhat our registration service includes:\n— Passing the ITV technical inspection — our manager attends in person and bridges the language gap\n— Professional calculation of IEDMT tax with legal optimisation where possible\n— Preparation of the full document package including Ficha Técnica Reducida\n— Submission of documents to DGT and obtaining the vehicle registration certificate\n— Receipt of Spanish number plates\n— Processing of the environmental label (Distintivo Ambiental) for access to ZBE zones\n— Optionally: reception at our Alicante service centre, full diagnostics, professional detailing and storage\n\nYou receive a fully registered vehicle, ready to drive in Spain — without a single visit to any government office.",
        },
      ],
      processTitle: "How it works: from request to keys in hand",
      processItems: [
        {
          t: "1. Free analysis of your request — no obligations",
          d: "The first step requires nothing from you except a few minutes of your time. You fill in the car search form on this page: make, model, desired year, mileage and maximum turnkey budget in Spain. Our managers receive your request immediately and begin the analysis.\n\nWhat we do at this stage: we check the real availability of vehicles matching your parameters on European auctions right now; produce a preliminary calculation of the full turnkey cost including all expenses; assess whether your request matches current market conditions and, if needed, suggest more advantageous alternatives.\n\nThis analysis is free of charge. You take on no obligations whatsoever. No pressure, no upselling — just an honest picture of the market and real figures before you make any decision.",
        },
        {
          t: "2. Car search and selection — minimum 10 options within 30 days",
          d: "Once the contract is signed, we begin active searching across dozens of European platforms — German, Austrian, Belgian and Dutch auctions, leasing platforms and dealer networks.\n\nWe don't just send you links. Every option we propose passes preliminary screening against your criteria: year of manufacture, mileage, specification, colour, technical condition. Each vehicle comes with a description, photographs, history and a preliminary turnkey cost calculation.\n\nOur guarantee: a minimum of 10 specific vehicle options within 30 days of signing the contract. These are not abstract suggestions — these are real lots available for purchase right now. Very often during the search we find options significantly more advantageous than the client originally anticipated — sometimes a higher-class vehicle within the same budget.",
        },
        {
          t: "3. Full check — history, mileage, accidents, legal status",
          d: "Once you have chosen a vehicle that interests you — we don't rush to bid. First, the full check.\n\nWhat we check:\n— Real mileage verified through German and European databases, cross-referenced with service history\n— Accident history: insurance claims, bodywork repairs, parts replacements — including hidden damage via professional closed sources\n— Legal status: liens, encumbrances, registration restrictions and other limitations that could block the transaction\n— Full ownership chain and countries of operation\n— VIN number match with all documentation\n\nIf the check reveals anything we are not satisfied with — we do not recommend that vehicle and continue the search. No exceptions.",
        },
        {
          t: "4. Bidding at auction — your maximum price is locked in the contract",
          d: "If the chosen vehicle is being sold at a specialist auction — such as the well-known German platform OPENLINE — it is essential to understand that these auctions operate exclusively with accredited professional participants. A private individual cannot register or bid independently.\n\nHow we organise this: we draw up an additional agreement to the main contract, specifying three key parameters — the specific vehicle, the maximum price you are willing to pay, and the payment procedure in the event of a winning bid. Your maximum bid is protected by contract — we cannot exceed the agreed amount without your explicit written consent.\n\nUnderstanding the timelines: winning an auction creates a strict obligation — payment must be made within 5 working days of the auction closing. This is a platform requirement. Failure to meet deadlines results in financial penalties and may lead to exclusion from future participation. That is why we agree with you in advance on the readiness of funds.",
        },
        {
          t: "5. Purchase — payment within 5 days, full transaction support",
          d: "Regardless of where the vehicle is purchased — at auction, from an official dealer or on a private platform — we take full responsibility for managing the transaction.\n\nWhen buying from a dealer or platform: we conduct final price negotiations, review the purchase contract for hidden terms and accompany the signing.\n\nWhen buying at auction: in the event of a winning bid, you make payment within 5 working days. We handle all necessary documentation: deregistration in Germany, obtaining export documents and supporting paperwork for subsequent registration in Spain.\n\nRegardless of the purchase platform: we obtain temporary registration documents in your name in the country of purchase. Throughout this entire stage you receive regular updates on the status of the transaction. You don't need to communicate with anyone or track anything — we manage the entire process from start to finish.",
        },
        {
          t: "6. Transport by car transporter with insurance — to your address in Spain",
          d: "Once the purchase is complete, we arrange transport to Spain. You have two options depending on your priorities.\n\nCar transporter — the standard and most reliable method. The vehicle is transported on a specialist transporter alongside other vehicles. Delivery times from Germany to Spain: 5 to 10 working days.\n\nIndividual driver transfer — for those who want to receive the vehicle sooner. Our driver personally drives the car from Germany to Spain. This option takes less time and allows registration to begin more quickly.\n\nIn both cases: the vehicle is insured for its full value throughout the entire transport period; you receive information about the vehicle's location at every stage; delivery is made to the address you specify anywhere in Spain — not to a warehouse or terminal.\n\nIf you wish, the vehicle can be received directly at our service centre in Alicante, where it immediately moves on to the next stage of preparation.",
        },
        {
          t: "7. ITV — our manager is personally present",
          d: "The ITV technical inspection is a mandatory stage for registering a foreign vehicle in Spain. This is precisely where those who attempt it independently most often encounter problems: the language barrier, unfamiliarity with local requirements, incorrectly prepared documents.\n\nIf the client wishes, the vehicle first undergoes a full diagnostic inspection and professional detailing at our service centre in Alicante. We identify and resolve all technical issues before presenting it for inspection, which guarantees passing the ITV on the first attempt.\n\nAt the ITV station, our manager who speaks your language is personally present throughout the entire procedure. They handle communication with the inspectors, answer questions and eliminate any language barrier. We prepare the complete document package, including the Ficha Técnica Reducida — the reduced technical data sheet which is a mandatory document for the inspection.\n\nFailing the ITV stops the entire registration process. That is why we don't simply book you an appointment — we prepare the vehicle and personally accompany the entire process.",
        },
        {
          t: "8. DGT, Spanish plates — your car is ready to drive",
          d: "The final stage — and the most satisfying one. After successfully passing the ITV, we launch the full vehicle registration procedure in Spain.\n\nWhat happens at this stage:\n— Professional calculation of IEDMT tax — analysing the assessed value according to Hacienda's tables and identifying all legal grounds for reducing the tax liability\n— Submission of the complete document package to the DGT — Dirección General de Tráfico\n— Obtaining the vehicle registration certificate (Permiso de Circulación) in your name\n— Receipt of Spanish number plates\n— Processing of the environmental label (Distintivo Ambiental) for legal access to ZBE zones in all major Spanish cities\n\nFrom the moment this stage is complete, your vehicle is fully legal in Spain. No additional procedures, no visits to government offices on your part — you simply receive your ready-to-drive car and get behind the wheel.",
        },
      ],
      caseTitle: "Real deal: Audi Q5 — saving €14 300",
      caseTag: "AutoexpertEU case · February 2026",
      caseCar: "Audi Q5 40 TDI Quattro",
      caseSpecs: "Diesel · Automatic · 204 hp · 56 358 km · 2020",
      caseCostRows: [
        { label: "🇩🇪 Winning auction bid (Germany)", val: "24 000 €" },
        { label: "🚚 Transport Germany → Spain", val: "1 200 €" },
        { label: "📄 EU customs clearance", val: "included" },
        { label: "🏛 Spanish registration (ITV, DGT)", val: "1 800 €" },
        { label: "🔍 AutoexpertEU service fee", val: "1 500 €" },
      ],
      caseTotalLabel: "💳 TOTAL TURNKEY IN SPAIN",
      caseTotalVal: "28 500 €",
      caseSaveLabel: "Saving vs. Spanish market",
      caseSaveVal: "−14 300 €",
      caseSaveSub: "Comparable cars at Spanish dealers: from 42 800 €",
      compareRows: [
        { label: "AutoexpertEU (turnkey)", val: "28 500 €", best: true },
        { label: "Audi Q5 · Arval Algete", val: "45 800 €", best: false },
        { label: "Audi Q5 · Arval Sevilla", val: "42 800 €", best: false },
        { label: "Audi Q5 · S line Ayvens", val: "46 000 €", best: false },
      ],
      servicesTitle: "Our services",
      serviceItems: [
        {
          t: "Consultation on buying a car in Germany",
          d: "We explain how European auctions work, what the real costs are, and give you a free turnkey price estimate for the specific model you want. Free, no commitment.",
        },
        {
          t: "Full turnkey car sourcing and import",
          d: "The complete service: search, history check, auction bid, transport from Germany, delivery to Spain, ITV inspection, DGT registration, Spanish plates. You only need to describe the car and receive the keys.",
        },
        {
          t: "Spanish registration only (car already purchased)",
          d: "If you have already purchased a car in Germany and need it registered in Spain — we handle the full process: ITV, IEDMT tax calculation, DGT filing and plate collection.",
        },
      ],
      faqTitle: "Frequently asked questions",
      faqItems: [
        {
          t: "How much does it cost to bring a car from Germany to Spain?",
          d: "The total cost depends on the auction winning bid plus our service fee, transport, and Spanish registration costs. Example: Audi Q5 won at auction for €24 000, total turnkey in Spain €28 500 — versus €42 800+ at a Spanish dealer. We provide a free estimate for your specific model.",
        },
        {
          t: "Are there customs duties between Germany and Spain?",
          d: "No. Both countries are EU member states so there are no customs barriers. The only tax that applies is the Spanish vehicle registration tax (IEDMT), which we calculate upfront and aim to optimise legally.",
        },
        {
          t: "What documents are needed to register a German car in Spain?",
          d: "You need: the German vehicle registration certificate (Fahrzeugbrief / Zulassungsbescheinigung Teil II), EU certificate of conformity (COC), your NIE, passport, and proof of tax payment. AutoexpertEU collects and submits all documents on your behalf.",
        },
        {
          t: "How long does the whole process take?",
          d: "Typically 3–6 weeks from auction win to receiving the car with Spanish plates. Breakdown: purchase paperwork 1–3 days, transport Germany–Spain 5–10 days, Spanish registration 2–4 weeks.",
        },
        {
          t: "How do I know the car is not damaged or has clocked mileage?",
          d: "Before every bid we run a full VIN history check through German and European databases — accidents, real mileage, service history, outstanding liens. If the history is unclear or dirty we do not bid, period.",
        },
        {
          t: "What if the car is damaged during delivery?",
          d: "The car is fully insured throughout transit. Any transport damage discovered at handover is covered by the insurance policy. All conditions are written into the contract before we start.",
        },
        {
          t: "Can I buy directly at German auction myself?",
          d: "No. German car auctions operate on a B2B basis and require professional dealer accreditation to participate. Private individuals are not admitted. That is exactly why you need an accredited intermediary — us.",
        },
      ],
      hReady: "Ready to find your car from Germany?",
      pReady: "Tell us what car you are looking for — we will check the market for free and tell you whether such a vehicle can be found, what it will cost turnkey in Spain, or suggest an option that may be even better than you imagined.",
      hQuestions: "Still have questions?",
      btnFaq: "Answers on the FAQ page",
      btnContact: "Contact us",
    };
  }

  if (L === "es") {
    return {
      heroAlt: "Comprar un coche en Alemania y traerlo a España",
      heroTitle: "Coche de Alemania a España — compra, transporte y matriculación en DGT",
      heroSub: "Compramos el vehículo en Alemania, lo transportamos a España y lo matriculamos llave en mano: precio total calculado por adelantado, impuestos, ITV y registro en DGT sin sorpresas.",
      dealLabel: "Operación real — ganada en subasta",
      dealBadge: "✓ Subasta ganada",
      dealCar: "Audi Q5 40 TDI",
      dealSpecs: "Diésel · Automático · 204 CV · 56 358 km",
      dealRows: [
        { label: "🇩🇪 Puja ganadora (subasta Alemania)", val: "24 000 €", style: "gold" },
        { label: "🚚 Transporte + matriculación en España", val: "+ 4 500 €", style: "muted" },
        { label: "🇪🇸 Total llave en mano en España", val: "28 500 €", style: "bold" },
        { label: "Equivalente en concesionario español", val: "42 800 €+", style: "strike" },
      ],
      dealSaveLabel: "Ahorro del cliente:",
      dealSaveVal: "−14 300 €",
      intro:
        "",
      seoTitle: (
        <span className="block text-center">
          ¿Cuánto cuesta realmente importar un coche de Alemania a España <br /> Y CÓMO NO PAGAR DE MÁS?
        </span>
      ),
      seoSections: [
      {
        h2: "¿Merece la pena importar un coche de Alemania a España — o es un mito?",
        p: [
          "Respuesta corta: depende del segmento del vehículo. Seamos honestos.",
          "<strong>Cuándo merece claramente la pena:</strong>",
          "En vehículos de 20 000 € en adelante, la diferencia entre una subasta alemana y el mercado español oscila de forma estable entre 12 000 y 20 000 €. No es un argumento publicitario — es aritmética: las empresas de leasing venden los vehículos devueltos sin el margen minorista del concesionario (15–25%), y los gastos de transporte y matriculación en España son fijos e independientes del precio del coche.",
          "Los segmentos más rentables: crossovers y SUV (Audi Q5/Q7, BMW X5, Mercedes GLC/GLE, Volkswagen Touareg), sedanes de negocios (BMW Serie 5, Mercedes Clase E, Audi A6) y el segmento premium en general — precisamente donde el margen del concesionario es mayor.",
          "<strong>Cuándo el ahorro es menor:</strong>",
          "En vehículos por debajo de 15 000 €, los costes de transporte y matriculación representan una parte significativa del valor total, y el ahorro neto se reduce considerablemente. Importar un utilitario desde Alemania para ahorrar 1 500–2 000 € no es rentable.",
        ],
        h3: [
          {
            t: "Conclusión clave:",
            p: [
              "Importar desde Alemania no es un «truco para iniciados». Es el mismo canal que usan los propios concesionarios españoles para comprar su stock — en las mismas subastas. La diferencia es que ellos añaden su margen encima, y tú no.",
              "Si tu vehículo entra en el segmento rentable — hacemos un cálculo para tu modelo concreto, para que veas las cifras reales antes de tomar ninguna decisión.",
            ],
          },
        ],
      },
      {
        h2: "Impuestos ocultos y pagos obligatorios en España",
        p: [
          "Alemania y España son países de la UE, por lo que no hay aranceles aduaneros entre ellos. Pero eso no significa que ‘no haya impuestos’. En España le esperan pagos y procedimientos de matriculación, y precisamente ellos suelen ‘comerse’ la ventaja esperada.",
          "Puntos clave de riesgo: impuesto de matriculación (IEDMT — depende de emisiones/tipo de vehículo y de la región), impuesto municipal (IVTM — depende del municipio), posibles tasas administrativas, y también costes de adaptación/certificación si faltan documentos o hay matices de equipamiento.",
          "Importante: las cuantías y las reglas pueden variar por región y por la situación concreta del vehículo. En la consulta no ‘adivinamos’: calculamos escenarios y mostramos el rango de gastos con antelación para que entienda el precio real de traer un coche de Alemania a España.",
        ],
        h3: [
          {
            t: "Por qué ‘compré barato’ ≠ ‘matriculé barato’",
            p: [
              "La compra es solo la entrada. El problema empieza cuando la persona ya pagó el coche y luego descubre que, por documentos o por emisiones, necesita otra vía de matriculación, certificados adicionales o modificaciones. Al final se alargan los plazos y crece el presupuesto.",
            ],
          },
        ],
      },
      {
        h2: "¿Qué coches son más rentables para traer de Alemania a España? Marcas y modelos",
        p: [
          "No todos los coches son igualmente rentables para importar desde Alemania. La diferencia entre los precios europeos y el mercado español depende del segmento — y en el premium es máxima.",
          "<strong>Top 5 coches por rentabilidad de importación desde Alemania, según nuestra experiencia y cálculos reales:</strong>",
          "Audi Q5 y Q7 — la solicitud más popular entre nuestros clientes y de forma consistente una de las más rentables. Los Audi de leasing procedentes de Alemania están bien cuidados, tienen historial de servicio completo, y la diferencia con el mercado español alcanza regularmente entre 12.000 y 18.000 €.",
          "BMW Serie 5 y BMW X5 — un sedán de negocios y un SUV que las flotas corporativas alemanas renuevan cada 3 años. A subasta llegan vehículos de 2 a 4 años con 40.000–70.000 km. Ahorro frente a un concesionario español: 10.000–16.000 €.",
          "Mercedes Clase E, GLC y GLE — tres modelos que lideran la demanda entre nuestros clientes. Un Mercedes procedente del leasing alemán es, por norma general, equipamiento completo, un solo propietario, historial de mantenimiento oficial. La diferencia con el mercado español: 13.000–20.000 €.",
          "Porsche Cayenne — en este segmento la lógica de la subasta funciona con especial fuerza: los concesionarios españoles marcan un 20–25% sobre los Cayenne de ocasión, mientras que en una subasta alemana el mismo coche sale a precio real de tasación. Ahorro: desde 15.000 € en adelante.",
          "Volkswagen Touareg — una elección infravalorada. Una de las mejores opciones en cuanto a relación fiabilidad/precio: amplia disponibilidad en subastas, costes de transporte moderados, buena liquidez en España.",
          "<strong>Cuándo no merece la pena:</strong>",
          "Vehículos pequeños por debajo de 15.000 € — Volkswagen Golf, Seat León, Skoda Octavia. En este segmento, los costes de logística y matriculación se comen la mayor parte del ahorro. Importar un coche así para una diferencia de 1.500–2.500 € sencillamente no es rentable. Nosotros le encontramos un vehículo dentro de su presupuesto que haga que la importación merezca la pena — porque operamos en toda Europa, incluidos los países bálticos, donde los precios para modelos equivalentes son significativamente inferiores a los de Alemania.",
        ],
        h3: [
          {
            t: "CONCLUSIÓN",
            p: [
              "Si está buscando un coche en el segmento desde 20.000 € — importar desde Alemania casi siempre le reportará un ahorro significativo. Si su presupuesto es menor — no hay problema: le encontraremos un coche que se ajuste a su presupuesto, solicitud y gustos. Porque estamos registrados oficialmente tanto en subastas españolas como europeas, y adquirimos vehículos al precio adecuado allí donde mejor se adapte a sus preferencias. Escríbanos, rellene el formulario, es gratuito — le haremos una oferta ventajosa.",
              "Solo pulse el botón que encontrará a continuación en esta página — RELLENAR EL FORMULARIO DE SELECCIÓN DE COCHE.",
            ],
          },
        ],
      },
      {
        h2: "Plan paso a paso: cómo traer un coche de Alemania a España sin sorpresas",
        p: [
          "La mayoría de la gente pierde dinero no en la compra, sino después. Impuestos imprevistos, una ITV rechazada, documentos mal tramitados. Esta es la secuencia que lo evita.",
          "Paso 1. Defina el objetivo y el presupuesto",
          "Formule con claridad: marca, modelo, kilometraje deseado, año y el máximo total llave en mano en España — no el precio de compra, sino la cifra final con todos los gastos.",
          "Paso 2. Seleccione opciones",
          "La búsqueda se realiza en paralelo en varias fuentes: plataformas de concesionarios, vendedores particulares y subastas especializadas. La búsqueda paralela da una visión real del mercado y el mejor precio.",
          "Paso 3. Compruebe el historial y la documentación antes de comprar",
          "Comprobación por VIN, historial de accidentes, kilometraje real, situación legal — todo antes de la operación, no después. Un error en esta fase cuesta más que todo lo demás.",
          "Paso 4. Calcule el coste final llave en mano",
          "Precio de compra + transporte + ITV + DGT + IEDMT + gestoría. Solo cuando vea la cifra completa, tome la decisión de compra.",
          "Paso 5. Compra en subasta: un matiz importante",
          "Si el coche elegido se vende en una subasta especializada — por ejemplo, en la conocida subasta alemana OPENLINE — debe tener en cuenta que estas plataformas trabajan únicamente con participantes profesionales acreditados. Un particular no puede registrarse y pujar por su cuenta.",
          "En ese caso, los clientes acuden a nosotros. Firmamos un contrato detallado, en el que se fija el vehículo concreto y el precio máximo que el cliente está dispuesto a pagar. La compra se realiza estrictamente según las condiciones del cliente. Importante: si ganamos la puja, el pago debe realizarse en un plazo de 5 días laborables desde el cierre de la subasta — es un requisito obligatorio de la plataforma.",
          "Paso 6. Organice el transporte a España",
          "Camión porta‑coches o traslado por carretera — según la urgencia. El seguro para todo el trayecto es obligatorio.",
          "Paso 7. Recepción y preparación del vehículo en nuestra estación de Alicante",
          "Si el cliente lo desea, recibimos el vehículo directamente en nuestra estación de servicio en Alicante. Realizamos un diagnóstico completo, detailing y dejamos el coche listo antes de la entrega. Durante todo este periodo, el vehículo está bajo nuestro control y se guarda en nuestras instalaciones.",
          "Paso 8. Pase la ITV",
          "La inspección técnica con intérprete es una fase crítica. Nuestro gestor asiste personalmente para eliminar la barrera del idioma y garantizar la superación.",
          "Paso 9. Tramite la DGT y obtenga matrículas españolas",
          "Presentación de documentos, pago del IEDMT, obtención del permiso de circulación y de las matrículas. Desde ese momento, el coche es totalmente legal en España."
        ],
        h3: [
          {
            t: "",
            p: [
              "¿Piensa hacerlo por su cuenta? Nuestra consulta cubre el riesgo más caro: errores antes de comprar. Usted recibe un plan para su situación concreta, una lista de documentos y un cálculo financiero preliminar. Es más barato que un pago “inesperado” después de la compra.",
              "¿Quiere el precio real antes de comprar? Deje una solicitud — fijaremos su modelo de costes, plazos y ruta de matriculación.",
              "Podemos hacer la selección del coche por usted: es más eficaz que buscar por su cuenta. Solo pulse el botón de abajo — RELLENAR EL FORMULARIO DE SELECCIÓN DE COCHE."
            ],
          },
        ],
      },
    ],
      btnOrder: "Describa el coche que busca",
      whyTitle: "¿Por qué es rentable comprar un coche en Alemania?",
      whyItems: [
        {
          t: "Ahorra un 15–25% frente al concesionario español",
          d: "Cuando compras un coche en un concesionario español, no pagas solo el vehículo. Pagas el alquiler del showroom, los salarios del personal, las campañas publicitarias y el beneficio del distribuidor. Todo esto está incorporado en el precio en forma de margen comercial — entre un 15 y un 25% sobre el valor real de mercado del vehículo. En una subasta alemana ese margen no existe. Las empresas de leasing y los parques corporativos venden los vehículos devueltos a precio real de mercado — sin intermediario entre tú y el valor del coche. En la práctica: un coche que cuesta 40.000 € en un concesionario español, en una subasta alemana vale entre 30.000 y 34.000 €. La diferencia son dinero real que se queda en tu bolsillo.",
        },
        {
          t: "Ahorro real de 10.000 a 20.000 € — cifras de operaciones reales",
          d: "Las cifras que aparecen a continuación no son promesas de marketing. Son operaciones reales que hemos cerrado para nuestros clientes.\n\nAudi Q5 40 TDI · 2020 · 56.358 km\nComprado en subasta: 24.000 € · Llave en mano en España: 28.500 € · Equivalente en concesionarios españoles: desde 42.800 € · Ahorro del cliente: 14.300 €\n\nBMW Serie 5 520d · 2021 · 48.000 km\nComprado en subasta: 26.500 € · Llave en mano en España: 31.200 € · Equivalente en concesionarios españoles: desde 46.500 € · Ahorro del cliente: 15.300 €\n\nMercedes GLC 220d · 2021 · 52.000 km\nComprado en subasta: 29.000 € · Llave en mano en España: 34.000 € · Equivalente en concesionarios españoles: desde 51.000 € · Ahorro del cliente: 17.000 €\n\nRellena el formulario de búsqueda en esta página — y encontraremos exactamente el coche que estás buscando.",
        },
        {
          t: "La garantía del fabricante se mantiene",
          d: "Una de las preguntas más frecuentes que nos hacen: '¿Si compro un coche en Alemania y lo traigo a España, se mantiene la garantía del fabricante?' La respuesta es sí, siempre que el vehículo esté dentro del período de garantía.\n\nLa garantía de los fabricantes europeos — BMW, Mercedes, Audi, Volkswagen, Skoda, Volvo y otros — es paneuropea. Esto significa que es válida en todos los países de la Unión Europea, independientemente del país en el que se haya comprado el vehículo. El traslado del coche de Alemania a España no interrumpe ni anula la garantía.\n\nEl único requisito: el vehículo debe ser mantenido en un concesionario oficial de la marca correspondiente — en cualquier país de la UE, incluida España.\n\nImportante: esto se aplica a vehículos comprados a concesionarios oficiales o empresas de leasing con historial de servicio original. Precisamente con ese tipo de vehículos trabajamos nosotros.",
        },
        {
          t: "Historial completo antes de comprar — sin accidentes ocultos ni kilometraje falso",
          d: "El miedo a comprar un coche accidentado o con el kilometraje manipulado es la principal razón que frena a los compradores. Y es un miedo justificado: en el mercado europeo ese tipo de vehículos existe. Por eso nosotros no participamos en ninguna puja hasta haber realizado una verificación completa de cada lote.\n\nQué verificamos:\n— Kilometraje real a través de bases de datos alemanas y europeas, cotejado con el historial de mantenimiento\n— Historial de accidentes: siniestros, reparaciones de carrocería, sustituciones de piezas — incluyendo daños ocultos via fuentes profesionales cerradas\n— Situación legal: embargos, cargas y restricciones que puedan bloquear la transacción\n— Cadena completa de titularidad y países de uso del vehículo\n— Concordancia del número VIN con la documentación\n\nSi la verificación detecta irregularidades — no recomendamos ese vehículo y continuamos la búsqueda. Sin excepciones.",
        },
        {
          t: "Sin aranceles aduaneros — Alemania y España son países de la UE",
          d: "Muchos compradores creen erróneamente que el traslado de un vehículo de Alemania a España conlleva trámites aduaneros y aranceles adicionales. Es un malentendido muy extendido que impide a muchas personas realizar una compra ventajosa.\n\nCómo funciona realmente: Alemania y España son estados miembros de la Unión Europea. Dentro de la UE rige el principio de libre circulación de mercancías. Esto significa que no existen barreras aduaneras, aranceles ni tasas adicionales por el traslado de un vehículo entre estos dos países.\n\nAl matricular el vehículo en España solo se abonan los impuestos locales españoles — IVA (en los casos aplicables) e IEDMT (impuesto de matriculación). Ambos impuestos se pagan al matricular cualquier vehículo en España, independientemente de su país de origen. No es aduana — es impuesto de matriculación. Todos estos gastos los calculamos para ti de antemano y los incluimos en la cifra final llave en mano.",
        },
        {
          t: "Matriculación española completa incluida",
          d: "La matriculación de un vehículo extranjero en España es un proceso de múltiples etapas que requiere conocimiento de la legislación local, del idioma y de los procedimientos burocráticos. Precisamente esta fase suele ser la fuente de gastos inesperados y retrasos para quienes intentan hacerlo por su cuenta.\n\nQué incluye nuestro servicio de matriculación:\n— Superación de la ITV — nuestro gestor está presente personalmente y elimina la barrera lingüística\n— Cálculo profesional del IEDMT con optimización legal cuando es posible\n— Preparación del paquete documental completo incluyendo la Ficha Técnica Reducida\n— Presentación de documentos en la DGT y obtención del permiso de circulación\n— Obtención de las matrículas españolas\n— Tramitación del Distintivo Ambiental para acceso a zonas ZBE\n— Opcionalmente: recepción en nuestro taller de Alicante, diagnóstico completo, detailing profesional y custodia\n\nRecibes un vehículo completamente tramitado, listo para circular en España — sin una sola visita a ningún organismo oficial.",
        },
      ],
      processTitle: "Cómo funciona: de la solicitud a las llaves en mano",
      processItems: [
        {
          t: "1. Análisis gratuito de tu solicitud — sin compromiso",
          d: "El primer paso no requiere de ti nada más que unos minutos de tu tiempo. Rellenas el formulario de búsqueda de vehículo en esta página: marca, modelo, año de fabricación deseado, kilometraje y presupuesto máximo llave en mano en España. Nuestros gestores reciben tu solicitud de inmediato y comienzan el análisis.\n\nQué hacemos en esta etapa: verificamos la disponibilidad real de vehículos con tus parámetros en subastas y plataformas europeas en este momento; realizamos un cálculo preliminar del coste total llave en mano; evaluamos si tu solicitud se ajusta a la situación actual del mercado y, si es necesario, proponemos alternativas más ventajosas.\n\nEste análisis es gratuito. No adquieres ningún compromiso. Sin presión ni imposición de servicios — solo una imagen honesta del mercado y cifras reales antes de tomar cualquier decisión.",
        },
        {
          t: "2. Búsqueda y selección — mínimo 10 opciones en 30 días",
          d: "Tras la firma del contrato comenzamos la búsqueda activa en decenas de plataformas europeas — subastas alemanas, austriacas, belgas y neerlandesas, plataformas de leasing y redes de concesionarios.\n\nNo nos limitamos a enviarte enlaces. Cada opción propuesta supera una selección previa según tus criterios: año de fabricación, kilometraje, equipamiento, color, estado técnico. A cada vehículo adjuntamos descripción, fotografías, historial y cálculo preliminar del coste total llave en mano.\n\nNuestra garantía: un mínimo de 10 opciones concretas de vehículos en un plazo de 30 días desde la firma del contrato. No son propuestas abstractas — son lotes reales disponibles para su compra ahora mismo. Con mucha frecuencia encontramos opciones significativamente más ventajosas de lo que el cliente esperaba — en ocasiones, un vehículo de gama superior dentro del mismo presupuesto.",
        },
        {
          t: "3. Verificación completa — historial, kilometraje, accidentes, situación legal",
          d: "Cuando has elegido el vehículo que te interesa — no nos precipitamos a pujar. Primero, la verificación completa.\n\nQué verificamos:\n— Kilometraje real mediante bases de datos alemanas y europeas, cotejado con el historial de mantenimiento\n— Historial de accidentes: siniestros, reparaciones de carrocería, sustituciones de piezas — incluyendo daños ocultos via fuentes profesionales cerradas\n— Situación legal: embargos, cargas, prohibiciones de actos registrales y otras restricciones que puedan bloquear la transacción\n— Cadena completa de titularidad y países de uso del vehículo\n— Concordancia del número VIN con la documentación\n\nSi la verificación detecta irregularidades — no recomendamos ese vehículo y continuamos la búsqueda. Sin excepciones.",
        },
        {
          t: "4. Participación en subasta — tu precio máximo queda fijado en el contrato",
          d: "Si el vehículo elegido se vende en una subasta especializada — como la conocida plataforma alemana OPENLINE — es fundamental entender que estas subastas trabajan exclusivamente con participantes profesionales acreditados. Un particular no puede registrarse ni participar en las pujas por su cuenta.\n\nCómo organizamos este proceso: firmamos contigo un acuerdo adicional al contrato principal, en el que se especifican tres parámetros clave — el vehículo concreto, el precio máximo que estás dispuesto a pagar y el procedimiento de liquidación en caso de ganar la puja. Tu puja máxima está protegida por contrato — no podemos superarla sin tu consentimiento expreso y por escrito.\n\nEs importante entender los plazos: ganar una subasta impone una obligación estricta — el pago debe efectuarse en un plazo de 5 días hábiles desde el cierre de la puja. El incumplimiento conlleva sanciones económicas y puede derivar en la exclusión. Por eso acordamos contigo con antelación la disponibilidad de los fondos.",
        },
        {
          t: "5. Compra — pago en 5 días, acompañamiento completo de la transacción",
          d: "Independientemente de dónde se adquiera el vehículo — en subasta, en concesionario oficial o en plataforma privada — asumimos completamente el acompañamiento de la transacción.\n\nEn la compra a concesionario o plataforma: llevamos a cabo las negociaciones finales de precio, revisamos el contrato de compraventa en busca de condiciones ocultas y acompañamos la firma.\n\nEn la compra en subasta: en caso de ganar la puja, abonas el pago en 5 días hábiles. Gestionamos toda la documentación necesaria: baja del registro alemán, obtención de documentos de exportación y papeles de acompañamiento para la posterior matriculación en España.\n\nCon independencia de la plataforma: obtenemos documentos de registro provisional a tu nombre en el país de adquisición. A lo largo de toda esta etapa recibes actualizaciones regulares sobre el estado de la operación. No necesitas comunicarte con nadie ni hacer seguimiento de nada — nosotros gestionamos todo el proceso de principio a fin.",
        },
        {
          t: "6. Transporte en camión portacoches con seguro — hasta tu dirección en España",
          d: "Tras completar la compra, organizamos el transporte a España. Dispones de dos opciones según tus prioridades.\n\nCamión portacoches — el método estándar y más fiable. El vehículo se transporta en un camión especializado junto con otros vehículos. Plazos de entrega desde Alemania a España: entre 5 y 10 días hábiles.\n\nTraslado individual con conductor — para quienes desean recibir el vehículo antes. Nuestro conductor traslada personalmente el coche desde Alemania hasta España. Esta opción requiere menos tiempo y permite iniciar la matriculación más rápidamente.\n\nEn ambos casos: el vehículo está asegurado a valor total durante todo el transporte; recibes información sobre la ubicación del coche en cada etapa del trayecto; la entrega se realiza en la dirección que nos indiques en cualquier punto de España — no en un almacén ni en una terminal.\n\nSi lo deseas, el vehículo puede ser recibido directamente en nuestro taller de servicio técnico en Alicante, donde pasa inmediatamente a la siguiente etapa de preparación.",
        },
        {
          t: "7. ITV — nuestro gestor está presente personalmente",
          d: "La inspección técnica ITV es una etapa obligatoria para matricular un vehículo extranjero en España. Es precisamente aquí donde suelen surgir los problemas para quienes intentan realizarla por su cuenta: barrera del idioma, desconocimiento de los requisitos locales, documentación incorrecta.\n\nSi el cliente lo desea, el vehículo pasa previamente por un diagnóstico completo y detailing en nuestro taller de servicio técnico en Alicante. Detectamos y corregimos todas las observaciones técnicas antes de presentarlo a la inspección, lo que garantiza superar la ITV a la primera.\n\nEn la estación ITV nuestro gestor, que habla tu idioma, está presente personalmente durante todo el procedimiento. Se ocupa de la comunicación con los técnicos, responde a las preguntas y elimina cualquier barrera lingüística. Preparamos el paquete completo de documentos, incluida la Ficha Técnica Reducida — documento obligatorio para pasar la inspección.\n\nNo superar la ITV detiene todo el proceso de matriculación. Por eso no nos limitamos a pedirte cita — preparamos el vehículo y acompañamos todo el proceso personalmente.",
        },
        {
          t: "8. DGT, matrículas españolas — tu coche está listo para circular",
          d: "La etapa final — y la más gratificante. Tras superar con éxito la ITV, iniciamos el procedimiento de matriculación completa del vehículo en España.\n\nQué ocurre en esta etapa:\n— Cálculo profesional del impuesto IEDMT — analizamos el valor de tasación según las tablas de Hacienda y buscamos todos los fundamentos legales para reducir la carga fiscal\n— Presentación del paquete completo de documentos en la DGT — Dirección General de Tráfico\n— Obtención del permiso de circulación a tu nombre\n— Obtención de las matrículas españolas\n— Tramitación del Distintivo Ambiental para acceso legal a las zonas ZBE en los centros de todas las grandes ciudades de España\n\nA partir de la finalización de esta etapa, tu vehículo es completamente legal en España. Sin procedimientos adicionales, sin visitas a organismos oficiales por tu parte — simplemente recibes el coche listo y te pones al volante.",
        },
      ],
      caseTitle: "Operación real: Audi Q5 — ahorro de 14 300 €",
      caseTag: "Caso AutoexpertEU · Febrero 2026",
      caseCar: "Audi Q5 40 TDI Quattro",
      caseSpecs: "Diésel · Automático · 204 CV · 56 358 km · 2020",
      caseCostRows: [
        { label: "🇩🇪 Puja ganadora en subasta (Alemania)", val: "24 000 €" },
        { label: "🚚 Transporte Alemania → España", val: "1 200 €" },
        { label: "📄 Trámites aduaneros UE", val: "incluido" },
        { label: "🏛 Matriculación en España (ITV, DGT)", val: "1 800 €" },
        { label: "🔍 Tarifa del servicio AutoexpertEU", val: "1 500 €" },
      ],
      caseTotalLabel: "💳 TOTAL LLAVE EN MANO EN ESPAÑA",
      caseTotalVal: "28 500 €",
      caseSaveLabel: "Ahorro frente al mercado español",
      caseSaveVal: "−14 300 €",
      caseSaveSub: "Coches comparables en concesionarios españoles: desde 42 800 €",
      compareRows: [
        { label: "AutoexpertEU (llave en mano)", val: "28 500 €", best: true },
        { label: "Audi Q5 · Arval Algete", val: "45 800 €", best: false },
        { label: "Audi Q5 · Arval Sevilla", val: "42 800 €", best: false },
        { label: "Audi Q5 · S line Ayvens", val: "46 000 €", best: false },
      ],
      servicesTitle: "Nuestros servicios",
      serviceItems: [
        {
          t: "Consulta sobre la compra de un coche en Alemania",
          d: "Le explicamos cómo funcionan las subastas europeas, cuáles son los costes reales y le damos una estimación gratuita del precio llave en mano para el modelo concreto que desea. Gratis, sin compromiso.",
        },
        {
          t: "Selección y importación completa llave en mano",
          d: "El servicio completo: búsqueda, verificación de historial, puja en subasta, transporte desde Alemania, entrega en España, ITV, matriculación en DGT, placas españolas. Solo tiene que describir el coche y recibir las llaves.",
        },
        {
          t: "Solo matriculación en España (coche ya comprado)",
          d: "Si ya ha comprado un coche en Alemania y necesita matricularlo en España, gestionamos todo el proceso: ITV, cálculo del impuesto IEDMT, presentación en DGT y recogida de matrícula.",
        },
      ],
      faqTitle: "Preguntas frecuentes",
      faqItems: [
        {
          t: "¿Cuánto cuesta traer un coche de Alemania a España?",
          d: "El coste total depende de la puja ganadora en la subasta más nuestra tarifa de servicio, transporte y costes de matriculación en España. Ejemplo: Audi Q5 ganado por 24 000 €, total llave en mano en España 28 500 €, frente a 42 800 €+ en concesionario español. Le ofrecemos un presupuesto gratuito para su modelo específico.",
        },
        {
          t: "¿Hay aranceles aduaneros entre Alemania y España?",
          d: "No. Ambos países son estados miembros de la UE, por lo que no existen barreras aduaneras. El único impuesto aplicable es el impuesto español de matriculación de vehículos (IEDMT), que calculamos por adelantado y buscamos optimizar legalmente.",
        },
        {
          t: "¿Qué documentos se necesitan para matricular un coche alemán en España?",
          d: "Se necesita: el certificado de matrícula alemán (Fahrzeugbrief / Zulassungsbescheinigung Teil II), certificado de conformidad UE (COC), su NIE, pasaporte y justificante del pago del impuesto. AutoexpertEU recoge y presenta todos los documentos en su nombre.",
        },
        {
          t: "¿Cuánto tiempo dura todo el proceso?",
          d: "Normalmente entre 5 y 6 semanas desde la solicitud hasta recibir el coche con matrícula española. Desglose: tramitación de la compra 1–3 días, transporte desde Alemania a partir de 15 días laborables (camión portacoches), matriculación en España desde la llegada del vehículo hasta las placas 1–3 semanas con documentación en regla.",
        },
        {
          t: "¿Cómo sé que el coche no está accidentado o tiene el kilometraje manipulado?",
          d: "Antes de cada puja realizamos una verificación completa del historial VIN mediante bases de datos alemanas y europeas: accidentes, kilometraje real, historial de mantenimiento, embargos pendientes. Si el historial no está claro o es incorrecto, no pujamos.",
        },
        {
          t: "¿Qué pasa si el coche llega dañado durante el transporte?",
          d: "El coche está totalmente asegurado durante el trayecto. Cualquier daño de transporte descubierto en la entrega está cubierto por la póliza de seguro. Todas las condiciones quedan escritas en el contrato antes de empezar.",
        },
        {
          t: "¿Puedo comprar directamente en subasta alemana yo mismo?",
          d: "No. Las subastas de coches alemanas funcionan en régimen B2B y requieren acreditación profesional como distribuidor para participar. Los particulares no tienen acceso. Por eso necesita un intermediario acreditado — nosotros.",
        },
      ],
      hReady: "¿Listo para encontrar su coche en Alemania?",
      pReady: "Cuéntenos qué coche está buscando — verificaremos el mercado de forma gratuita y le diremos si es posible encontrar ese vehículo, cuánto costará llave en mano en España, o le propondremos una opción que quizás supere sus expectativas.",
      hQuestions: "¿Aún tiene preguntas?",
      btnFaq: "Respuestas en la página de FAQ",
      btnContact: "Contáctenos",
    };
  }

  // ── RUSSIAN (default) ──────────────────────────────────────
  return {
    heroAlt: "Купить авто в Германии и привезти в Испанию",
    heroTitle: "Авто из Германии в Испанию — покупка, доставка и регистрация в DGT",
    heroSub:
      "Подберём и купим авто в Германии, доставим в Испанию и оформим под ключ: расчёт полной стоимости заранее, налоги, ITV и регистрация в DGT без сюрпризов.",
    dealLabel: "Реальная сделка — победа на аукционе",
    dealBadge: "✓ Тендер выигран",
    dealCar: "Audi Q5 40 TDI",
    dealCarSub: "Diesel · Auto · 204 hp · 56 358 km",
    dealRows: [
      { label: "🇩🇪 Победная ставка (аукцион Германии)", val: "24 000 €", style: "gold" },
      { label: "🚚 Доставка + регистрация в Испании", val: "+ 4 500 €", style: "muted" },
      { label: "🇪🇸 Итого под ключ в Испании", val: "28 500 €", style: "bold" },
      { label: "Аналог в испанском автосалоне", val: "42 800 €+", style: "strike" },
    ],
    dealSaveLabel: "Экономия клиента:",
    dealSaveVal: "−14 300 €",
    intro: "",
    seoTitle: (
      <span className="block text-center">
        Сколько реально стоит привезти авто из Германии в Испанию <br /> И КАК НЕ ПЕРЕПЛАТИТЬ
      </span>
    ),
    seoSections: [
      {
        h2: "Стоит ли везти авто из Германии в Испанию — или это миф о выгоде?",
        p: [
          "Короткий ответ: зависит от сегмента автомобиля. Давайте честно.",
          "<strong>Когда это однозначно выгодно:</strong>",
          "На автомобилях стоимостью от 20 000 € и выше разница между немецким аукционом и испанским рынком стабильно составляет 12 000–20 000 €. Это не рекламный тезис — это арифметика: лизинговые компании продают возвращённые автомобили без розничной наценки дилера (15–25%), а расходы на доставку и регистрацию в Испании фиксированы и не зависят от цены машины.",
          "Наиболее выгодные сегменты: кроссоверы и SUV (Audi Q5/Q7, BMW X5, Mercedes GLC/GLE, Volkswagen Touareg), бизнес-седаны (BMW 5, Mercedes E-класс, Audi A6) и премиум в целом — именно здесь наценка дилера максимальна.",
          "<strong>Когда выгода меньше:</strong>",
          "На автомобилях до 15 000 € расходы на доставку и регистрацию составляют значительную долю от общей стоимости, и чистая экономия сжимается. Везти бюджетный хэтчбек из Германии ради 1 500–2 000 € разницы — нецелесообразно.",
        ],
        h3: [
          {
            t: "Главный вывод:",
            p: [
              "Импорт из Германии — это не «лайфхак для избранных». Это стандартный инструмент, которым пользуются испанские дилеры сами, покупая свои же стоки на тех же аукционах. Разница лишь в том, что они добавляют свою наценку сверху, а Вы — нет.",
              "Если ваш автомобиль входит в выгодный сегмент — мы сделаем расчёт под Вашу конкретную модель, чтобы Вы увидели реальные цифры до принятия решения.",
            ],
          },
        ],
      },
      {
        h2: "Скрытые налоги, ITV, DGT и обязательные платежи в Испании",
        p: [
          "Германия и Испания — страны ЕС, поэтому таможенных пошлин между ними нет. Но это не значит, что «налогов не будет». В Испании вас ждут регистрационные платежи и процедуры, и именно они чаще всего «съедают» ожидаемую выгоду.",
          "Ключевые точки риска: налог на регистрацию (IEDMT — зависит от выбросов/типа авто и региона), муниципальный налог (IVTM — в зависимости от города), возможные сборы за оформление документов, а также расходы на адаптацию/сертификацию, если не хватает документов или есть нюансы по комплектации.",
          "Самостоятельный привоз — возможен. Но чаще всего он ломается на двух этапах: ITV (техническая часть и документы) и DGT (подача, налоги, регистрация и номера).",
           "На практике проблемы возникают из-за отсутствия или несоответствия документов (COC, регистрационные бумаги), особенностей комплектации, ошибок в данных, неверного расчёта налогов или неподготовленности к процедурам. И если вы уже оплатили машину, «откатить назад» почти невозможно — приходится решать вопрос в Испании, тратя время и деньги.",
          "Важно: суммы и правила могут отличаться по региону и по конкретной ситуации автомобиля. На консультации мы не «угадываем», а считаем сценарии и заранее показываем диапазон расходов, чтобы вы понимали реальную цену привоза авто из Германии в Испанию.",
        ],
        h3: [
          {
            t: "Почему «дешево купил» ≠ «дешево поставил на учёт»",
            p: [
              "Покупка — это только вход. Ошибка начинается, когда человек уже оплатил автомобиль, а затем узнаёт, что по документам или экологии требуется другой путь оформления, дополнительные справки или переделки. В итоге сроки растягиваются, а бюджет растёт.",
            ],
          },
        ],
      },
      {
        h2: "Какой автомобиль выгоднее всего везти из Германии в Испанию: марки и модели",
        p: [
          "Не каждый автомобиль одинаково выгоден для привоза из Германии. Разрыв между ценой в Европе и испанским рынком зависит от сегмента — и в премиум-классе он максимален.",
         
          "<strong>Топ - 5 авто по выгоде пригогна из Германии, исходя из практики и рсчетов:</strong>",
          "Audi Q5 и Q7 — самый популярный запрос среди наших клиентов и стабильно один из наиболее выгодных. Лизинговые Audi из Германии — ухоженные, с сервисной историей, и разница с испанским рынком здесь регулярно составляет 12 000–18 000 €.:",
          "BMW 5 серии и BMW X5 — бизнес-седан и SUV, которые немецкие корпоративные парки обновляют каждые 3 года. На рынок аукционов выходят автомобили 2–4 лет с пробегом 40 000–70 000 км. Экономия по сравнению с испанским салоном — 10 000–16 000 €.",
          "Mercedes E-класс, GLC и GLE — три модели, которые лидируют по запросам среди русскоязычных покупателей в Испании. Mercedes из немецкого лизинга — это, как правило, полная комплектация, один владелец, официальный сервис. Разрыв с испанским рынком — 13 000–20 000 €.",
          "Porsche Cayenne — в этом сегменте аукционная логика работает особенно сильно: испанские дилеры накручивают на подержанные Cayenne 20–25%, тогда как на немецком аукционе такой же автомобиль уходит по реальной оценочной стоимости. Экономия — от 15 000 € и выше.",
          "Volkswagen Touareg — недооценённый выбор. По соотношению надёжность/цена один из лучших вариантов для привоза: широкий выбор на аукционах, умеренные расходы на доставку, хорошая ликвидность в Испании.",
          "<strong>Когда везти не стоит:</strong>",
          "Когда везти не стоит: Небольшие автомобили до 15 000 € — Volkswagen Golf, Seat Leon, Skoda Octavia. На этом сегменте расходы на логистику и регистрацию съедают большую часть экономии. Везти такой автомобиль из Германии ради 1 500–2 500 € разницы нецелесообразно. Мы подберем Вам автомобиль под Ваш бюджет так, чтобы цена автомобиля не была равна расходам на его доставку и переоформление, потому что мы работаем по всей Европе, включая страны Балтии, где цена значительно ниже на аналогичные модели в Германии",
        ],
        h3: [
          {
            t: "ВЫВОД",
            p: [
              "Если вы рассматриваете автомобиль в сегменте от 20 000 € — привоз из Германии почти всегда даст ощутимую экономию. Если Вы расчитываете на меньшую сумму - не проблема: мы подберем Вам автомобиль под Ваш бюджет, запрос. и вкус. Потому что мы офицально зарегистрированы как на аукционах Испании и Европы, так и привозим машины, выкупая их по разумной цене, там, где это будет соответствовать Вашим пожеланиям.  Напишите нам, заполните форму, это бесплатно, — мы сделаем Вам выгодное предложение.",
              "Просто нажмите на этой странице кнопку чуть ниже этого блока- ЗАПОЛНИТЬ ФОРМУ ПОДБОРА АВТО",
            ],
          },
        ],
      },
      {
        h2: "Пошаговый план: как привезти авто из Германии в Испанию без сюрпризов",
        p: [
          "Большинство людей теряют деньги не на покупке — а после неё. Непредвиденные налоги, проваленный ITV, неправильно оформленные документы. Вот последовательность, которая это исключает.",
          "Шаг 1. Определите задачу и бюджет",
          "Сформулируйте чётко: марка, модель, желаемый пробег, год выпуска и максимальная итоговая сумма под ключ в Испании — не цена покупки, а финальная цифра со всеми расходами.",
          "Шаг 2. Подберите варианты",
          "Поиск ведётся одновременно на нескольких платформах: дилерские площадки, частные продавцы, специализированные аукционы. Параллельный поиск даёт реальную картину рынка и лучшую цену.",
          "Шаг 3. Проверьте историю и документы до покупки",
          "VIN-проверка, история ДТП, реальный пробег, юридическая чистота — всё это до сделки, не после. Ошибка на этом этапе стоит дороже всего остального.",
          "Шаг 4. Рассчитайте итоговую стоимость под ключ",
          "Цена покупки + доставка + ITV + DGT + IEDMT + gestoría. Только видя полную цифру, принимайте решение о покупке.",
          "Шаг 5. Покупка через аукцион — важный нюанс",
          "Если выбранный вами автомобиль продаётся на специализированном аукционе — например, на известном немецком аукционе OPENLINE — необходимо понимать: такие платформы работают исключительно с аккредитованными профессиональными участниками рынка. Частное лицо не сможет самостоятельно зарегистрироваться и участвовать в торгах.",
          "В этом случае клиенты обращаются к нам. Мы заключаем детальный договор, в котором фиксируем конкретный автомобиль и максимальную цену, которую клиент готов заплатить. Покупка осуществляется строго в соответствии с условиями клиента. Важно учитывать: в случае победы в торгах оплата должна быть произведена в течение 5 рабочих дней с момента окончания аукциона — это обязательное требование платформы.",
          "Шаг 6. Организуйте доставку в Испанию",
          "Автовоз или индивидуальный перегон — в зависимости от срочности. Страховка на весь маршрут обязательна.",
          "Шаг 7. Приёмка и подготовка автомобиля на нашей станции в Аликанте",
          "По желанию клиента мы принимаем автомобиль непосредственно на нашей станции технического обслуживания в Аликанте. Проводим полную диагностику, детейлинг и приводим автомобиль в порядок перед передачей владельцу. На весь этот период автомобиль находится под нашим контролем и хранится на нашей территории.",
          "Шаг 8. Пройдите ITV",
          "Технический осмотр с переводчиком — критически важный этап. Наш менеджер присутствует лично, чтобы снять языковой барьер и гарантировать успешное прохождение.",
          "Шаг 9. Оформите DGT и получите испанские номера",
          "Подача документов, уплата IEDMT, получение техпаспорта и номерных знаков. С этого момента автомобиль полностью легален в Испании."
        ],
        h3: [
          {
            t: "",
            p: [
              "Планируете сделать это самостоятельно? Наша консультация закрывает самый дорогой риск — ошибки до покупки. Вы получаете план под вашу конкретную ситуацию, список документов и предварительный финансовый расчёт. Это дешевле, чем один «неожиданный» платёж после покупки.",
              "Хотите реальную цену до покупки? Оставьте заявку  — зафиксируем вашу модель расходов, сроки и маршрут регистрации.",
              "Можем сделать подбор авто для Вас, это эффективнее, чем самостоятельный поиск. Просто нажмите кнопку ниже - ЗАПОЛНИТЬ ФОРМУ ПОДБОРА АВТО."
            ],
          },
        ],
      },
    ],
    btnOrder: "Опишите желаемый автомобиль",
    whyTitle: "Почему выгодно покупать авто из Германии?",
    whyItems: [
      {
        t: "Экономия 15–25% по сравнению с испанским салоном",
        d: "Когда вы покупаете автомобиль в испанском автосалоне, вы платите не только за машину. Вы платите за аренду шоурума, зарплату менеджеров, рекламные кампании и прибыль дилера. Всё это зашито в ценник в виде торговой наценки — от 15 до 25% от реальной рыночной стоимости автомобиля. На немецком аукционе этой наценки не существует. Лизинговые компании и корпоративные парки продают возвращённые автомобили по реальной рыночной цене — без посредника между вами и стоимостью машины. На практике: автомобиль стоимостью 40 000 € в испанском салоне на аукционе в Германии будет стоить 30 000–34 000 €. Разница — реальные деньги, которые остаются у вас.",
      },
      {
        t: "Экономия от 10 000 до 20 000 € — реальные цифры сделок",
        d: "Цифры ниже — не маркетинговые обещания. Это реальные сделки, которые мы закрыли для наших клиентов.\n\nAudi Q5 40 TDI · 2020 · 56 358 км\nКуплен на аукционе: 24 000 € · Под ключ в Испании: 28 500 € · Аналог в испанских салонах: от 42 800 € · Экономия клиента: 14 300 €\n\nBMW 5 серии 520d · 2021 · 48 000 км\nКуплен на аукционе: 26 500 € · Под ключ в Испании: 31 200 € · Аналог в испанских салонах: от 46 500 € · Экономия клиента: 15 300 €\n\nMercedes GLC 220d · 2021 · 52 000 км\nКуплен на аукционе: 29 000 € · Под ключ в Испании: 34 000 € · Аналог в испанских салонах: от 51 000 € · Экономия клиента: 17 000 €\n\nЗаполните форму подбора автомобиля на этой странице — и мы найдём для вас именно тот автомобиль, который вы ищете.",
      },
      {
        t: "Гарантия производителя сохраняется",
        d: "Один из самых частых вопросов: «Если я куплю автомобиль в Германии и привезу в Испанию — сохранится ли гарантия производителя?» Ответ: да, если автомобиль находится в гарантийном сроке.\n\nГарантия на автомобили европейских производителей — BMW, Mercedes, Audi, Volkswagen, Skoda, Volvo и других — является общеевропейской. Она действует во всех странах Евросоюза независимо от того, в какой стране был куплен автомобиль. Перемещение автомобиля из Германии в Испанию не прерывает и не аннулирует гарантию.\n\nЕдинственное условие: автомобиль должен обслуживаться у официального дилера соответствующей марки — в любой стране ЕС, включая Испанию.\n\nВажно: это касается автомобилей, купленных у официальных дилеров или лизинговых компаний с оригинальной сервисной историей. Именно с такими автомобилями мы работаем.",
      },
      {
        t: "Полная история до покупки — без ДТП и скруток пробега",
        d: "Страх купить «битую» машину или автомобиль со скрученным пробегом — это главное, что останавливает покупателей. И это правильный страх: на европейском рынке такие автомобили существуют. Именно поэтому мы не участвуем в торгах до тех пор, пока не проведём полную проверку каждого лота.\n\nЧто мы проверяем:\n— Реальный пробег через немецкие и европейские базы данных, сверенный с сервисной историей\n— История ДТП: страховые случаи, кузовные ремонты, замены деталей — включая скрытые повреждения через профессиональные закрытые источники\n— Юридическая чистота: залоги, аресты, запреты на регистрационные действия и другие ограничения\n— Полная цепочка владения и страны эксплуатации\n— Соответствие VIN-номера документам\n\nЕсли проверка выявляет что-либо, что нас не устраивает — мы не рекомендуем этот автомобиль и продолжаем поиск. Без исключений.",
      },
      {
        t: "Никаких таможенных пошлин — оба государства в ЕС",
        d: "Многие покупатели ошибочно считают, что перевозка автомобиля из Германии в Испанию сопровождается таможенным оформлением и дополнительными пошлинами. Это распространённое заблуждение, которое останавливает людей от выгодной покупки.\n\nКак всё устроено на самом деле: Германия и Испания — государства-члены Европейского союза. Внутри ЕС действует принцип свободного перемещения товаров. Никаких таможенных барьеров, пошлин или дополнительных сборов при перемещении автомобиля между этими странами не существует.\n\nПри постановке на учёт в Испании уплачиваются только местные испанские налоги — IVA (в применимых случаях) и IEDMT (налог на регистрацию). Оба налога уплачиваются при регистрации любого автомобиля в Испании — независимо от страны происхождения. Это не таможня, это регистрационный налог. Все эти расходы мы рассчитываем заранее и включаем в итоговую цифру «под ключ».",
      },
      {
        t: "Полная испанская регистрация включена",
        d: "Постановка иностранного автомобиля на учёт в Испании — это многоэтапный процесс, который требует знания местного законодательства, языка и бюрократических процедур. Именно этот этап чаще всего становится источником неожиданных расходов и задержек для тех, кто пытается сделать это самостоятельно.\n\nЧто входит в нашу услугу регистрации:\n— Прохождение ITV — наш менеджер, говорящий на вашем языке, присутствует лично на всей процедуре\n— Профессиональный расчёт налога IEDMT с законной оптимизацией там, где это возможно\n— Подготовка полного пакета документов, включая Ficha Técnica Reducida\n— Подача документов в DGT и получение свидетельства о регистрации\n— Получение испанских номерных знаков\n— Оформление экологической метки (Distintivo Ambiental) для въезда в зоны ZBE\n— По желанию: приёмка на нашей станции в Аликанте, полная диагностика, детейлинг и хранение\n\nВы получаете полностью оформленный автомобиль, готовый к эксплуатации в Испании — без единого визита в государственные органы.",
      },
    ],
    processTitle: "Как это работает: от заявки до ключей в руках",
    processItems: [
      {
        t: "1. Бесплатный анализ вашей заявки — без обязательств",
        d: "Первый шаг не требует от вас ничего, кроме нескольких минут времени. Вы заполняете форму подбора автомобиля на этой странице: марка, модель, желаемый год выпуска, пробег и максимальный бюджет под ключ в Испании. Наши менеджеры немедленно получают вашу заявку и приступают к анализу.\n\nЧто мы делаем на этом этапе: проверяем реальную доступность автомобилей с вашими параметрами на европейских аукционах прямо сейчас; делаем предварительный расчёт итоговой стоимости под ключ с учётом всех расходов; оцениваем, насколько ваш запрос соответствует текущей рыночной ситуации, и если нужно — предлагаем более выгодные альтернативы.\n\nЭтот анализ бесплатен. Вы не берёте на себя никаких обязательств. Никакого давления и навязывания услуг — только честная картина рынка и реальные цифры до принятия любого решения.",
      },
      {
        t: "2. Поиск и подбор — минимум 10 вариантов за 30 дней",
        d: "После подписания договора мы приступаем к активному поиску на нескольких десятках европейских платформ — немецких, австрийских, бельгийских и нидерландских аукционах, лизинговых площадках и дилерских сетях.\n\nМы не просто отправляем вам ссылки. Каждый предложенный вариант проходит предварительный отбор по вашим критериям: год выпуска, пробег, комплектация, цвет, техническое состояние. К каждому автомобилю прилагаем описание, фотографии, историю и предварительный расчёт стоимости под ключ.\n\nНаша гарантия: не менее 10 конкретных вариантов в течение 30 дней с момента заключения договора. Это не абстрактные предложения — это реальные лоты, доступные к покупке прямо сейчас. Очень часто в процессе поиска мы находим варианты значительно выгоднее тех, на которые клиент рассчитывал изначально — иногда автомобиль более высокого класса в рамках того же бюджета.",
      },
      {
        t: "3. Полная проверка — история, пробег, ДТП, юридическая чистота",
        d: "Когда вы выбрали интересующий автомобиль — мы не торопимся делать ставку. Сначала полная проверка.\n\nЧто входит в проверку:\n— Реальный пробег через немецкие и европейские базы данных, сверенный с сервисной историей\n— История ДТП: страховые случаи, кузовные ремонты, замены деталей — включая скрытые повреждения через профессиональные закрытые источники\n— Юридическая чистота: залоги, аресты, запреты на регистрационные действия и другие ограничения, которые могут заблокировать сделку\n— Полная цепочка владения и страны эксплуатации\n— Соответствие VIN-номера документам\n\nНаш принцип прост: если проверка выявляет что-либо, что нас не устраивает — мы не рекомендуем этот автомобиль и продолжаем поиск. Без исключений.",
      },
      {
        t: "4. Участие в аукционе — фиксируем вашу цену в договоре",
        d: "Если выбранный автомобиль продаётся на специализированном аукционе — например, на известной немецкой платформе OPENLINE — важно понимать: такие аукционы работают исключительно с аккредитованными профессиональными участниками. Частное лицо не может самостоятельно зарегистрироваться и участвовать в торгах.\n\nКак мы организуем этот процесс: мы заключаем с вами дополнительное соглашение к основному договору, в котором фиксируем три ключевых параметра — конкретный автомобиль, максимальную цену, которую вы готовы заплатить, и порядок расчётов в случае победы. Ваш максимальный бид защищён договором — мы не можем превысить согласованную сумму без вашего явного письменного согласия.\n\nВажно понимать про сроки: победа на аукционе накладывает жёсткое обязательство — оплата должна быть произведена в течение 5 рабочих дней с момента окончания торгов. Нарушение сроков влечёт штрафные санкции и может привести к исключению из числа участников. Именно поэтому мы заранее согласовываем с вами готовность средств.",
      },
      {
        t: "5. Покупка — оплата в течение 5 дней, полное сопровождение сделки",
        d: "Независимо от того, где приобретается автомобиль — на аукционе, у официального дилера или на частной платформе — мы полностью берём на себя сопровождение сделки.\n\nПри покупке у дилера или на платформе: проводим финальные переговоры о цене, проверяем договор купли-продажи на предмет скрытых условий и сопровождаем подписание.\n\nПри покупке на аукционе: в случае победы в торгах вы вносите оплату в течение 5 рабочих дней. Мы оформляем все необходимые документы: снятие с немецкого учёта, получение экспортных документов и сопроводительных бумаг для дальнейшей регистрации в Испании.\n\nВне зависимости от площадки покупки: получаем временные регистрационные документы на ваше имя в стране приобретения. На протяжении всего этапа вы получаете регулярные обновления о статусе сделки. Вам не нужно ни с кем общаться, ни за чем следить — мы ведём весь процесс от начала до конца.",
      },
      {
        t: "6. Доставка автовозом со страховкой — до вашего адреса в Испании",
        d: "После завершения покупки организуем доставку автомобиля в Испанию. У вас есть два варианта — в зависимости от ваших приоритетов.\n\nАвтовоз — стандартный и наиболее надёжный способ. Автомобиль транспортируется на специализированном транспортном средстве. Сроки доставки из Германии в Испанию — от 5 до 10 рабочих дней.\n\nИндивидуальный перегон водителем — для тех, кто хочет получить автомобиль быстрее. Наш водитель лично перегоняет автомобиль из Германии в Испанию. Этот вариант занимает меньше времени и позволяет быстрее приступить к регистрации.\n\nВ обоих случаях: автомобиль застрахован на полную стоимость на весь период транспортировки; вы получаете информацию о местонахождении автомобиля на каждом этапе маршрута; доставка осуществляется до указанного вами адреса в любой точке Испании — не на склад и не на терминал.\n\nПо желанию автомобиль принимается на нашей станции технического обслуживания в Аликанте, где сразу переходит к следующему этапу подготовки.",
      },
      {
        t: "7. ITV — наш менеджер присутствует лично",
        d: "Технический осмотр ITV — обязательный этап для постановки иностранного автомобиля на учёт в Испании. Именно здесь чаще всего возникают проблемы у тех, кто пытается пройти его самостоятельно: языковой барьер, незнание местных требований, неправильно подготовленные документы.\n\nПо желанию клиента автомобиль предварительно проходит полную диагностику и детейлинг на нашей станции технического обслуживания в Аликанте. Выявляем и устраняем все технические замечания до подачи на осмотр — это гарантирует успешное прохождение ITV с первого раза.\n\nНа станции ITV наш менеджер, говорящий на вашем языке, присутствует лично на протяжении всей процедуры. Он взаимодействует с техниками, отвечает на вопросы и снимает любой языковой барьер. Мы готовим полный пакет документов, включая Ficha Técnica Reducida — обязательный документ для прохождения осмотра.\n\nНеудачное прохождение ITV останавливает всю процедуру регистрации. Именно поэтому мы не просто записываем вас на осмотр — мы готовим автомобиль и сопровождаем весь процесс лично.",
      },
      {
        t: "8. DGT, испанские номера — автомобиль готов к езде",
        d: "Финальный этап — и самый приятный. После успешного прохождения ITV мы запускаем процедуру полной регистрации автомобиля в Испании.\n\nЧто происходит на этом этапе:\n— Профессиональный расчёт налога IEDMT — анализируем оценочную стоимость по таблицам Hacienda и применяем все законные основания для снижения налоговой нагрузки\n— Подача полного пакета документов в DGT — Dirección General de Tráfico\n— Получение свидетельства о регистрации (Permiso de Circulación) на ваше имя\n— Получение испанских номерных знаков\n— Оформление экологической метки (Distintivo Ambiental) для законного въезда в зоны ZBE во всех крупных городах Испании\n\nС момента завершения этого этапа ваш автомобиль полностью легален в Испании. Никаких дополнительных процедур, никаких визитов в государственные органы с вашей стороны — вы просто получаете готовый автомобиль и садитесь за руль.",
      },
    ],
    caseTitle: "Реальный кейс: Audi Q5 — экономия 14 300 €",
    caseTag: "Кейс AutoexpertEU · Февраль 2026",
    caseCar: "Audi Q5 40 TDI Quattro",
    caseSpecs: "Дизель · Автомат · 204 л.с. · 56 358 км · 2020 г.в.",
    caseCostRows: [
      { label: "🇩🇪 Победная ставка на аукционе (Германия)", val: "24 000 €" },
      { label: "🚚 Транспортировка Германия → Испания", val: "1 200 €" },
      { label: "📄 Таможенное оформление (ЕС)", val: "включено" },
      { label: "🏛 Регистрация в Испании (ITV, DGT)", val: "1 800 €" },
      { label: "🔍 Услуга AutoexpertEU (автоподбор)", val: "1 500 €" },
    ],
    caseTotalLabel: "💳 ИТОГО ПОД КЛЮЧ В ИСПАНИИ",
    caseTotalVal: "28 500 €",
    caseSaveLabel: "Экономия по сравнению с испанским рынком",
    caseSaveVal: "−14 300 €",
    caseSaveSub: "Аналогичные автомобили в испанских салонах: от 42 800 €",
    compareRows: [
      { label: "AutoexpertEU (под ключ)", val: "28 500 €", best: true },
      { label: "Audi Q5 · Arval Algete", val: "45 800 €", best: false },
      { label: "Audi Q5 · Arval Sevilla", val: "42 800 €", best: false },
      { label: "Audi Q5 · S line Ayvens", val: "46 000 €", best: false },
    ],
    servicesTitle: "Наши услуги",
    serviceItems: [
      {
        t: "Консультация по покупке авто в Германии",
        d: "Объясняем, как работают европейские аукционы, каковы реальные затраты, и даём бесплатный расчёт стоимости под ключ для конкретной модели, которую вы хотите. Бесплатно, без обязательств.",
      },
      {
        t: "Автоподбор и импорт под ключ — полный цикл",
        d: "Полный сервис: поиск, проверка истории, ставка на аукционе, доставка из Германии, привоз в Испанию, ITV, регистрация в DGT, испанские номера. Вам нужно только описать автомобиль и получить ключи.",
      },
      {
        t: "Только постановка на учёт в Испании (авто уже куплен)",
        d: "Если вы уже купили автомобиль в Германии и вам нужно поставить его на учёт в Испании — берём на себя весь процесс: ITV, расчёт налога IEDMT, подача в DGT и получение номерных знаков.",
      },
    ],
    faqTitle: "Часто задаваемые вопросы",
    faqItems: [
      {
        t: "Сколько стоит пригнать авто из Германии в Испанию?",
        d: "Итоговая стоимость зависит от победной ставки на аукционе плюс наша услуга, транспортировка и расходы на регистрацию в Испании. Пример: Audi Q5 куплен за 24 000 €, итого под ключ в Испании 28 500 € — против 42 800 €+ у испанского дилера. Мы делаем бесплатный расчёт для вашей конкретной модели.",
      },
      {
        t: "Есть ли таможенные пошлины между Германией и Испанией?",
        d: "Нет. Обе страны — государства-члены ЕС, поэтому таможенных барьеров нет. Применяется только испанский налог на регистрацию транспортного средства (IEDMT), который мы рассчитываем заранее и стараемся законно оптимизировать.",
      },
      {
        t: "Какие документы нужны для регистрации немецкого авто в Испании?",
        d: "Необходимы: немецкое свидетельство о регистрации (Fahrzeugbrief / Zulassungsbescheinigung Teil II), сертификат соответствия ЕС (COC), ваш NIE, паспорт и квитанция об уплате налога. AutoexpertEU собирает и подаёт все документы от вашего имени.",
      },
      {
        t: "Сколько времени займёт весь процесс?",
        d: "Обычно 5–6 недель с момента заявки до получения автомобиля с испанскими номерами. Разбивка: оформление покупки 1–3 дня, доставка из Германии — от 15 рабочих дней (автовоз), регистрация в Испании от прибытия авто до получения номеров — 1–3 недели при чистом пакете документов.",
      },
      {
        t: "Как убедиться, что автомобиль не битый и без скрученного пробега?",
        d: "Перед каждой ставкой проводим полную проверку истории по VIN через немецкие и европейские базы данных: ДТП, реальный пробег, история обслуживания, залоги и ограничения. Если история нечистая или непрозрачная — не участвуем в торгах. Без исключений.",
      },
      {
        t: "Что если автомобиль пришёл с повреждениями при доставке?",
        d: "Автомобиль полностью застрахован на весь период транспортировки. Любые повреждения, обнаруженные при передаче, покрываются страховым полисом. Все условия фиксируются в договоре до начала работы.",
      },
      {
        t: "Могу ли я купить на немецком аукционе самостоятельно?",
        d: "Нет. Немецкие автоаукционы работают по схеме B2B и требуют профессиональной аккредитации как дилера для участия. Физические лица к торгам не допускаются. Именно поэтому нужен аккредитованный посредник — мы.",
      },
    ],
    hReady: "Готовы подобрать автомобиль из Германии?",
    pReady: "Расскажите, какой автомобиль вы ищете — мы бесплатно проверим рынок и скажем, реально ли найти такой вариант, сколько он будет стоить под ключ в Испании, или предложим вариант, возможно лучше, чем вы предполагаете.",
    hQuestions: "Остались вопросы?",
    btnFaq: "Ответы на странице FAQ",
    btnContact: "Свяжитесь с нами",
  };
}

import Link from "next/link";
import type { Metadata } from "next";


/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   TYPES
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
type Locale = "ru" | "en" | "es";
type Item = { t: string; d: string };

/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   COPY (ru / en / es)
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
function copy(locale: string) {
  const L = (locale as Locale) || "ru";

  if (L === "en") {
    return {
      heroAlt: "Buy a car in Germany and bring it to Spain",
      heroTitle: "Car from Germany to Spain â purchase, delivery and DGT registration",
      heroSub: "We source and buy the car in Germany, deliver it to Spain and register it with the DGT turnkey: full cost calculated upfront, taxes, ITV and DGT registration â no surprises.",
      dealLabel: "Real deal â won at auction",
      dealBadge: "â Tender won",
      dealCar: "Audi Q5 40 TDI",
      dealSpecs: "Diesel Â· Auto Â· 204 hp Â· 56 358 km",
      dealRows: [
        { label: "ð©ðª Winning bid (German auction)", val: "24 000 â¬", style: "gold" },
        { label: "ð Delivery + registration in Spain", val: "+ 4 500 â¬", style: "muted" },
        { label: "ðªð¸ Total turnkey in Spain", val: "28 500 â¬", style: "bold" },
        { label: "Same car at Spanish dealer", val: "42 800 â¬+", style: "strike" },
      ],
      dealSaveLabel: "Client savings:",
      dealSaveVal: "â14 300 â¬",
      intro:
        "",
      seoTitle: (
        <span className="block text-center">
          How much does it really cost to import a car from Germany to Spain <br /> AND HOW TO AVOID OVERPAYING
        </span>
      ),
      seoSections: [
      {
        h2: "Is buying a car in Germany and bringing it to Spain actually worth it â or just a myth?",
        p: [
          "Short answer: it depends on the vehicle segment. Let's be honest.",
          "<strong>When it's clearly worth it:</strong>",
          "For cars priced from â¬20,000 and above, the gap between a German auction and the Spanish retail market is consistently â¬12,000ââ¬20,000. This isn't a marketing claim â it's arithmetic: leasing companies sell returned vehicles without the dealer's retail markup (15â25%), while transport and Spanish registration costs are fixed and don't scale with the car's price.",
          "The most profitable segments: crossovers and SUVs (Audi Q5/Q7, BMW X5, Mercedes GLC/GLE, Volkswagen Touareg), executive saloons (BMW 5 Series, Mercedes E-Class, Audi A6) and premium vehicles in general â exactly where the dealer markup is highest.",
          "<strong>When the savings are smaller:</strong>",
          "For cars under â¬15,000, delivery and registration costs represent a significant portion of the total value, and the net saving shrinks considerably. Importing a budget hatchback from Germany to save â¬1,500ââ¬2,000 simply doesn't make financial sense.",
        ],
        h3: [
          {
            t: "The bottom line:",
            p: [
              "Importing from Germany isn't an insider trick. It's the exact same channel Spanish dealers use to stock their own forecourts â at the same auctions. The difference is that they add their margin on top. You don't.",
              "If your car falls into the profitable segment â we'll run calculation for your specific model so you can see the real numbers before making any decision.",
            ],
          },
        ],
      },
      {
        h2: "Hidden taxes and mandatory payments in Spain",
        p: [
          "Germany and Spain are EU countries, so there are no customs duties between them. But that does not mean âno taxesâ. In Spain you will face registration payments and procedures â and they are what most often eat the expected savings.",
          "Key risk points: registration tax (IEDMT â depends on emissions/vehicle type and region), municipal road tax (IVTM â depends on the city), possible administrative fees, and also adaptation/certification costs if documents are missing or the car has specification nuances.",
          "Important: amounts and rules can differ by region and by the specific situation of the vehicle. In the consultation we donât âguessâ â we calculate scenarios and show the cost range in advance so you understand the real price of bringing a car from Germany to Spain.",
        ],
        h3: [
          {
            t: "Why âbought cheapâ â  âregistered cheapâ",
            p: [
              "Buying is only the entry point. The mistake happens when someone has already paid for the car and then discovers that the documents or emissions category require a different registration route, extra certificates, or modifications. Timelines stretch and the budget grows.",
            ],
          },
        ],
      },
      {
        h2: "Which cars are most profitable to import from Germany to Spain: makes and models",
        p: [
          "Not every car is equally profitable to import from Germany. The gap between European prices and the Spanish market depends on the segment â and in the premium class, it is at its maximum.",
          "<strong>Top 5 cars by import profitability from Germany, based on our experience and real calculations:</strong>",
          "Audi Q5 and Q7 â the most popular request among our clients and consistently one of the most profitable. Leasing Audis from Germany are well-maintained, come with full service history, and the gap from the Spanish market regularly amounts to â¬12,000ââ¬18,000.",
          "BMW 5 Series and BMW X5 â a business saloon and SUV that German corporate fleets renew every 3 years. Vehicles aged 2â4 years with 40,000â70,000 km come to auction. Savings compared to a Spanish dealership: â¬10,000ââ¬16,000.",
          "Mercedes E-Class, GLC and GLE â three models leading in demand among our clients. A Mercedes from German leasing is, as a rule, full specification, one owner, official service history. The gap from the Spanish market: â¬13,000ââ¬20,000.",
          "Porsche Cayenne â in this segment the auction logic works particularly strongly: Spanish dealers mark up used Cayennes by 20â25%, while at a German auction the same car sells at real assessed value. Savings: from â¬15,000 and above.",
          "Volkswagen Touareg â an underrated choice. One of the best value-for-reliability options: wide availability at auction, moderate delivery costs, strong resale value in Spain.",
          "<strong>When it's not worth it:</strong>",
          "Small cars under â¬15,000 â Volkswagen Golf, Seat Leon, Skoda Octavia. In this segment, logistics and registration costs eat up most of the saving. Importing such a car for a â¬1,500ââ¬2,500 difference simply doesn\'t make financial sense. We will find you a car within your budget that makes importing worthwhile â because we source across all of Europe, including the Baltic states, where prices for equivalent models are significantly lower than in Germany.",
        ],
        h3: [
          {
            t: "CONCLUSION",
            p: [
              "If you are looking at a car in the segment from â¬20,000 â importing from Germany will almost always deliver meaningful savings. If your budget is lower â no problem: we will find you a car matching your budget, request and taste. Because we are officially registered at both Spanish and European auctions, and we source vehicles at the right price wherever it best fits your requirements. Write to us, fill in the form, it's free â we will make you a great offer.",
              "Simply click the button below on this page â FILL IN THE CAR SOURCING FORM.",
            ],
          },
        ],
      },
      {
        h2: "Step-by-step plan: how to bring a car from Germany to Spain without surprises",
        p: [
          "Most people lose money not on the purchase â but after it. Unexpected taxes, a failed ITV, incorrectly prepared documents. Here is the sequence that prevents that.",
          "Step 1. Define the task and the budget",
          "Be specific: brand, model, desired mileage, year, and the maximum allâin turnkey total in Spain â not the purchase price, but the final number including all costs.",
          "Step 2. Shortlist options",
          "The search runs in parallel across several sources: dealer platforms, private sellers, and specialized auctions. Parallel search gives a real view of the market and the best price.",
          "Step 3. Check history and documents before buying",
          "VIN check, accident history, real mileage, legal clean status â all before the deal, not after. A mistake at this stage costs more than everything else.",
          "Step 4. Calculate the allâin turnkey total",
          "Purchase price + delivery + ITV + DGT + IEDMT + gestorÃ­a. Only after you see the full figure should you decide to buy.",
          "Step 5. Auction purchase â an important nuance",
          "If the car you choose is sold at a specialized auction â for example, the wellâknown German auction OPENLINE â you need to understand that such platforms work only with accredited professional market participants. A private individual cannot register and bid on their own.",
          "In this case, clients come to us. We sign a detailed contract that specifies the exact vehicle and the maximum price the client is willing to pay. The purchase is carried out strictly under the clientâs conditions. Important: if we win the auction, payment must be made within 5 business days from the auction end â this is a mandatory platform requirement.",
          "Step 6. Arrange delivery to Spain",
          "Car transporter or individual driving â depending on urgency. Insurance for the entire route is mandatory.",
          "Step 7. Vehicle reception and preparation at our station in Alicante",
          "At the clientâs request, we receive the vehicle directly at our service station in Alicante. We perform full diagnostics, detailing, and prepare the car before handover. During this entire period, the vehicle is under our control and stored on our premises.",
          "Step 8. Pass ITV",
          "Technical inspection with an interpreter â a critically important stage. Our manager attends in person to remove the language barrier and ensure a successful pass.",
          "Step 9. Complete DGT registration and get Spanish plates",
          "Document submission, IEDMT payment, obtaining the registration certificate and number plates. From this moment, the car is fully legal in Spain."
        ],
        h3: [
          {
            t: "",
            p: [
              "Planning to do it yourself? Our consultation covers the most expensive risk â mistakes before purchase. You get a plan for your specific situation, a document checklist, and a preliminary financial calculation. Itâs cheaper than one âunexpectedâ payment after you buy.",
              "Want the real final price before you buy? Leave a request â weâll lock your cost model, timelines, and registration route.",
              "We can also source the car for you â itâs more effective than searching on your own. Just click the button below â FILL IN THE CAR SOURCING FORM."
            ],
          },
        ],
      },
    ],
      btnOrder: "Describe your ideal car",
      whyTitle: "Why buying from Germany beats Spanish dealers",
      whyItems: [
        {
          t: "Save 15â25% compared to any Spanish dealer",
          d: "When you buy a car from a Spanish dealership, you're not just paying for the vehicle. You're paying for the showroom rent, staff salaries, advertising campaigns and the dealer's profit margin. All of this is built into the price tag in the form of a retail markup â between 15 and 25% above the car's real market value. At a German auction, that markup doesn't exist. Leasing companies and corporate fleets sell their returned vehicles at real market prices â with no intermediary between you and what the car is actually worth. In practice: a car priced at â¬40,000 at a Spanish dealership will cost â¬30,000ââ¬34,000 at a German auction. The difference is real money that stays in your pocket.",
        },
        {
          t: "Real savings of â¬10,000 to â¬20,000 â figures from real deals",
          d: "The figures below are not marketing promises. These are real transactions we have completed for our clients.\n\nAudi Q5 40 TDI Â· 2020 Â· 56,358 km\nPurchased at auction: â¬24,000 Â· Turnkey in Spain: â¬28,500 Â· Equivalent at Spanish dealers: from â¬42,800 Â· Client saving: â¬14,300\n\nBMW 5 Series 520d Â· 2021 Â· 48,000 km\nPurchased at auction: â¬26,500 Â· Turnkey in Spain: â¬31,200 Â· Equivalent at Spanish dealers: from â¬46,500 Â· Client saving: â¬15,300\n\nMercedes GLC 220d Â· 2021 Â· 52,000 km\nPurchased at auction: â¬29,000 Â· Turnkey in Spain: â¬34,000 Â· Equivalent at Spanish dealers: from â¬51,000 Â· Client saving: â¬17,000\n\nFill in the car search form on this page â and we will find exactly the car you are looking for.",
        },
        {
          t: "Manufacturer warranty remains valid",
          d: "One of the most common questions we receive: 'If I buy a car in Germany and bring it to Spain, does the manufacturer's warranty still apply?' The answer is yes, provided the car is still within its warranty period.\n\nThe warranty offered by European manufacturers â BMW, Mercedes, Audi, Volkswagen, Skoda, Volvo and others â is pan-European. This means it is valid in all European Union countries regardless of which country the car was originally purchased in. Moving the car from Germany to Spain does not interrupt or void the warranty.\n\nThe only requirement: the vehicle must be serviced at an authorised dealer for the relevant brand â in any EU country, including Spain.\n\nImportant note: this applies to vehicles purchased from official dealers or leasing companies with an original service history. That is precisely the type of vehicle we work with.",
        },
        {
          t: "Full vehicle history before you buy â no hidden accidents, no clocked mileage",
          d: "The fear of buying a car with hidden accident damage or clocked mileage is the number one concern that holds buyers back. And it's a legitimate fear â such vehicles do exist in the European market. That's why we never place a bid until we have completed a full check on every lot.\n\nWhat we check:\nâ Accident history through European databases\nâ Real mileage and its consistency with the service history\nâ Number of previous owners and countries of registration\nâ Existence of liens, encumbrances and legal restrictions\nâ VIN number match with all documentation\n\nIf the check reveals any discrepancies â we do not recommend that vehicle and continue the search. You receive a car with a clean history, or you don't receive one at all.",
        },
        {
          t: "No customs duties â Germany and Spain are both EU member states",
          d: "Many buyers mistakenly believe that moving a car from Germany to Spain involves customs procedures and additional duties. This is a widespread misconception that prevents many people from making a very advantageous purchase.\n\nHere's how it actually works: Germany and Spain are both member states of the European Union. Within the EU, the principle of free movement of goods applies. This means there are no customs barriers, tariffs or additional charges when moving a vehicle between these two countries.\n\nWhen registering the vehicle in Spain, only local Spanish taxes are due â IVA (in applicable cases) and IEDMT (vehicle registration tax). Both taxes apply to the registration of any vehicle in Spain, regardless of its country of origin. This is not customs â it is a registration tax. We calculate all of these costs for you in advance and include them in the final turnkey figure.",
        },
        {
          t: "Full Spanish registration included",
          d: "Registering a foreign vehicle in Spain is a multi-stage process that requires knowledge of local legislation, the language, and bureaucratic procedures. This stage is precisely where those who attempt it independently most often encounter unexpected costs and delays.\n\nWhat our registration service includes:\nâ Passing the ITV technical inspection â our manager attends in person and bridges the language gap\nâ Professional calculation of IEDMT tax with legal optimisation where possible\nâ Preparation of the full document package including Ficha TÃ©cnica Reducida\nâ Submission of documents to DGT and obtaining the vehicle registration certificate\nâ Receipt of Spanish number plates\nâ Processing of the environmental label (Distintivo Ambiental) for access to ZBE zones\nâ Optionally: reception at our Alicante service centre, full diagnostics, professional detailing and storage\n\nYou receive a fully registered vehicle, ready to drive in Spain â without a single visit to any government office.",
        },
      ],
      processTitle: "How it works: from request to keys in hand",
      processItems: [
        {
          t: "1. Free analysis of your request â no obligations",
          d: "The first step requires nothing from you except a few minutes of your time. You fill in the car search form on this page: make, model, desired year, mileage and maximum turnkey budget in Spain. Our managers receive your request immediately and begin the analysis.\n\nWhat we do at this stage: we check the real availability of vehicles matching your parameters on European auctions right now; produce a preliminary calculation of the full turnkey cost including all expenses; assess whether your request matches current market conditions and, if needed, suggest more advantageous alternatives.\n\nThis analysis is free of charge. You take on no obligations whatsoever. No pressure, no upselling â just an honest picture of the market and real figures before you make any decision.",
        },
        {
          t: "2. Car search and selection â minimum 10 options within 30 days",
          d: "Once the contract is signed, we begin active searching across dozens of European platforms â German, Austrian, Belgian and Dutch auctions, leasing platforms and dealer networks.\n\nWe don't just send you links. Every option we propose passes preliminary screening against your criteria: year of manufacture, mileage, specification, colour, technical condition. Each vehicle comes with a description, photographs, history and a preliminary turnkey cost calculation.\n\nOur guarantee: a minimum of 10 specific vehicle options within 30 days of signing the contract. These are not abstract suggestions â these are real lots available for purchase right now. Very often during the search we find options significantly more advantageous than the client originally anticipated â sometimes a higher-class vehicle within the same budget.",
        },
        {
          t: "3. Full check â history, mileage, accidents, legal status",
          d: "Once you have chosen a vehicle that interests you â we don't rush to bid. First, the full check.\n\nWhat we check:\nâ Real mileage verified through German and European databases, cross-referenced with service history\nâ Accident history: insurance claims, bodywork repairs, parts replacements â including hidden damage via professional closed sources\nâ Legal status: liens, encumbrances, registration restrictions and other limitations that could block the transaction\nâ Full ownership chain and countries of operation\nâ VIN number match with all documentation\n\nIf the check reveals anything we are not satisfied with â we do not recommend that vehicle and continue the search. No exceptions.",
        },
        {
          t: "4. Bidding at auction â your maximum price is locked in the contract",
          d: "If the chosen vehicle is being sold at a specialist auction â such as the well-known German platform OPENLINE â it is essential to understand that these auctions operate exclusively with accredited professional participants. A private individual cannot register or bid independently.\n\nHow we organise this: we draw up an additional agreement to the main contract, specifying three key parameters â the specific vehicle, the maximum price you are willing to pay, and the payment procedure in the event of a winning bid. Your maximum bid is protected by contract â we cannot exceed the agreed amount without your explicit written consent.\n\nUnderstanding the timelines: winning an auction creates a strict obligation â payment must be made within 5 working days of the auction closing. This is a platform requirement. Failure to meet deadlines results in financial penalties and may lead to exclusion from future participation. That is why we agree with you in advance on the readiness of funds.",
        },
        {
          t: "5. Purchase â payment within 5 days, full transaction support",
          d: "Regardless of where the vehicle is purchased â at auction, from an official dealer or on a private platform â we take full responsibility for managing the transaction.\n\nWhen buying from a dealer or platform: we conduct final price negotiations, review the purchase contract for hidden terms and accompany the signing.\n\nWhen buying at auction: in the event of a winning bid, you make payment within 5 working days. We handle all necessary documentation: deregistration in Germany, obtaining export documents and supporting paperwork for subsequent registration in Spain.\n\nRegardless of the purchase platform: we obtain temporary registration documents in your name in the country of purchase. Throughout this entire stage you receive regular updates on the status of the transaction. You don't need to communicate with anyone or track anything â we manage the entire process from start to finish.",
        },
        {
          t: "6. Transport by car transporter with insurance â to your address in Spain",
          d: "Once the purchase is complete, we arrange transport to Spain. You have two options depending on your priorities.\n\nCar transporter â the standard and most reliable method. The vehicle is transported on a specialist transporter alongside other vehicles. Delivery times from Germany to Spain: 5 to 10 working days.\n\nIndividual driver transfer â for those who want to receive the vehicle sooner. Our driver personally drives the car from Germany to Spain. This option takes less time and allows registration to begin more quickly.\n\nIn both cases: the vehicle is insured for its full value throughout the entire transport period; you receive information about the vehicle's location at every stage; delivery is made to the address you specify anywhere in Spain â not to a warehouse or terminal.\n\nIf you wish, the vehicle can be received directly at our service centre in Alicante, where it immediately moves on to the next stage of preparation.",
        },
        {
          t: "7. ITV â our manager is personally present",
          d: "The ITV technical inspection is a mandatory stage for registering a foreign vehicle in Spain. This is precisely where those who attempt it independently most often encounter problems: the language barrier, unfamiliarity with local requirements, incorrectly prepared documents.\n\nIf the client wishes, the vehicle first undergoes a full diagnostic inspection and professional detailing at our service centre in Alicante. We identify and resolve all technical issues before presenting it for inspection, which guarantees passing the ITV on the first attempt.\n\nAt the ITV station, our manager who speaks your language is personally present throughout the entire procedure. They handle communication with the inspectors, answer questions and eliminate any language barrier. We prepare the complete document package, including the Ficha TÃ©cnica Reducida â the reduced technical data sheet which is a mandatory document for the inspection.\n\nFailing the ITV stops the entire registration process. That is why we don't simply book you an appointment â we prepare the vehicle and personally accompany the entire process.",
        },
        {
          t: "8. DGT, Spanish plates â your car is ready to drive",
          d: "The final stage â and the most satisfying one. After successfully passing the ITV, we launch the full vehicle registration procedure in Spain.\n\nWhat happens at this stage:\nâ Professional calculation of IEDMT tax â analysing the assessed value according to Hacienda's tables and identifying all legal grounds for reducing the tax liability\nâ Submission of the complete document package to the DGT â DirecciÃ³n General de TrÃ¡fico\nâ Obtaining the vehicle registration certificate (Permiso de CirculaciÃ³n) in your name\nâ Receipt of Spanish number plates\nâ Processing of the environmental label (Distintivo Ambiental) for legal access to ZBE zones in all major Spanish cities\n\nFrom the moment this stage is complete, your vehicle is fully legal in Spain. No additional procedures, no visits to government offices on your part â you simply receive your ready-to-drive car and get behind the wheel.",
        },
      ],
      caseTitle: "Real deal: Audi Q5 â saving â¬14 300",
      caseTag: "AutoexpertEU case Â· February 2026",
      caseCar: "Audi Q5 40 TDI Quattro",
      caseSpecs: "Diesel Â· Automatic Â· 204 hp Â· 56 358 km Â· 2020",
      caseCostRows: [
        { label: "ð©ðª Winning auction bid (Germany)", val: "24 000 â¬" },
        { label: "ð Transport Germany â Spain", val: "1 200 â¬" },
        { label: "ð EU customs clearance", val: "included" },
        { label: "ð Spanish registration (ITV, DGT)", val: "1 800 â¬" },
        { label: "ð AutoexpertEU service fee", val: "1 500 â¬" },
      ],
      caseTotalLabel: "ð³ TOTAL TURNKEY IN SPAIN",
      caseTotalVal: "28 500 â¬",
      caseSaveLabel: "Saving vs. Spanish market",
      caseSaveVal: "â14 300 â¬",
      caseSaveSub: "Comparable cars at Spanish dealers: from 42 800 â¬",
      compareRows: [
        { label: "AutoexpertEU (turnkey)", val: "28 500 â¬", best: true },
        { label: "Audi Q5 Â· Arval Algete", val: "45 800 â¬", best: false },
        { label: "Audi Q5 Â· Arval Sevilla", val: "42 800 â¬", best: false },
        { label: "Audi Q5 Â· S line Ayvens", val: "46 000 â¬", best: false },
      ],
      servicesTitle: "Our services",
      serviceItems: [
        {
          t: "Consultation on buying a car in Germany",
          d: "We explain how European auctions work, what the real costs are, and give you a free turnkey price estimate for the specific model you want. Free, no commitment.",
        },
        {
          t: "Full turnkey car sourcing and import",
          d: "The complete service: search, history check, auction bid, transport from Germany, delivery to Spain, ITV inspection, DGT registration, Spanish plates. You only need to describe the car and receive the keys.",
        },
        {
          t: "Spanish registration only (car already purchased)",
          d: "If you have already purchased a car in Germany and need it registered in Spain â we handle the full process: ITV, IEDMT tax calculation, DGT filing and plate collection.",
        },
      ],
      faqTitle: "Frequently asked questions",
      faqItems: [
        {
          t: "How much does it cost to bring a car from Germany to Spain?",
          d: "The total cost depends on the auction winning bid plus our service fee, transport, and Spanish registration costs. Example: Audi Q5 won at auction for â¬24 000, total turnkey in Spain â¬28 500 â versus â¬42 800+ at a Spanish dealer. We provide a free estimate for your specific model.",
        },
        {
          t: "Are there customs duties between Germany and Spain?",
          d: "No. Both countries are EU member states so there are no customs barriers. The only tax that applies is the Spanish vehicle registration tax (IEDMT), which we calculate upfront and aim to optimise legally.",
        },
        {
          t: "What documents are needed to register a German car in Spain?",
          d: "You need: the German vehicle registration certificate (Fahrzeugbrief / Zulassungsbescheinigung Teil II), EU certificate of conformity (COC), your NIE, passport, and proof of tax payment. AutoexpertEU collects and submits all documents on your behalf.",
        },
        {
          t: "How long does the whole process take?",
          d: "Typically 3â6 weeks from auction win to receiving the car with Spanish plates. Breakdown: purchase paperwork 1â3 days, transport GermanyâSpain 5â10 days, Spanish registration 2â4 weeks.",
        },
        {
          t: "How do I know the car is not damaged or has clocked mileage?",
          d: "Before every bid we run a full VIN history check through German and European databases â accidents, real mileage, service history, outstanding liens. If the history is unclear or dirty we do not bid, period.",
        },
        {
          t: "What if the car is damaged during delivery?",
          d: "The car is fully insured throughout transit. Any transport damage discovered at handover is covered by the insurance policy. All conditions are written into the contract before we start.",
        },
        {
          t: "Can I buy directly at German auction myself?",
          d: "No. German car auctions operate on a B2B basis and require professional dealer accreditation to participate. Private individuals are not admitted. That is exactly why you need an accredited intermediary â us.",
        },
      ],
      hReady: "Ready to find your car from Germany?",
      pReady: "Tell us what car you are looking for â we will check the market for free and tell you whether such a vehicle can be found, what it will cost turnkey in Spain, or suggest an option that may be even better than you imagined.",
      hQuestions: "Still have questions?",
      btnFaq: "Answers on the FAQ page",
      btnContact: "Contact us",
    };
  }

  if (L === "es") {
    return {
      heroAlt: "Comprar un coche en Alemania y traerlo a EspaÃ±a",
      heroTitle: "Coche de Alemania a EspaÃ±a â compra, transporte y matriculaciÃ³n en DGT",
      heroSub: "Compramos el vehÃ­culo en Alemania, lo transportamos a EspaÃ±a y lo matriculamos llave en mano: precio total calculado por adelantado, impuestos, ITV y registro en DGT sin sorpresas.",
      dealLabel: "OperaciÃ³n real â ganada en subasta",
      dealBadge: "â Subasta ganada",
      dealCar: "Audi Q5 40 TDI",
      dealSpecs: "DiÃ©sel Â· AutomÃ¡tico Â· 204 CV Â· 56 358 km",
      dealRows: [
        { label: "ð©ðª Puja ganadora (subasta Alemania)", val: "24 000 â¬", style: "gold" },
        { label: "ð Transporte + matriculaciÃ³n en EspaÃ±a", val: "+ 4 500 â¬", style: "muted" },
        { label: "ðªð¸ Total llave en mano en EspaÃ±a", val: "28 500 â¬", style: "bold" },
        { label: "Equivalente en concesionario espaÃ±ol", val: "42 800 â¬+", style: "strike" },
      ],
      dealSaveLabel: "Ahorro del cliente:",
      dealSaveVal: "â14 300 â¬",
      intro:
        "",
      seoTitle: (
        <span className="block text-center">
          Â¿CuÃ¡nto cuesta realmente importar un coche de Alemania a EspaÃ±a <br /> Y CÃMO NO PAGAR DE MÃS?
        </span>
      ),
      seoSections: [
      {
        h2: "Â¿Merece la pena importar un coche de Alemania a EspaÃ±a â o es un mito?",
        p: [
          "Respuesta corta: depende del segmento del vehÃ­culo. Seamos honestos.",
          "<strong>CuÃ¡ndo merece claramente la pena:</strong>",
          "En vehÃ­culos de 20 000 â¬ en adelante, la diferencia entre una subasta alemana y el mercado espaÃ±ol oscila de forma estable entre 12 000 y 20 000 â¬. No es un argumento publicitario â es aritmÃ©tica: las empresas de leasing venden los vehÃ­culos devueltos sin el margen minorista del concesionario (15â25%), y los gastos de transporte y matriculaciÃ³n en EspaÃ±a son fijos e independientes del precio del coche.",
          "Los segmentos mÃ¡s rentables: crossovers y SUV (Audi Q5/Q7, BMW X5, Mercedes GLC/GLE, Volkswagen Touareg), sedanes de negocios (BMW Serie 5, Mercedes Clase E, Audi A6) y el segmento premium en general â precisamente donde el margen del concesionario es mayor.",
          "<strong>CuÃ¡ndo el ahorro es menor:</strong>",
          "En vehÃ­culos por debajo de 15 000 â¬, los costes de transporte y matriculaciÃ³n representan una parte significativa del valor total, y el ahorro neto se reduce considerablemente. Importar un utilitario desde Alemania para ahorrar 1 500â2 000 â¬ no es rentable.",
        ],
        h3: [
          {
            t: "ConclusiÃ³n clave:",
            p: [
              "Importar desde Alemania no es un Â«truco para iniciadosÂ». Es el mismo canal que usan los propios concesionarios espaÃ±oles para comprar su stock â en las mismas subastas. La diferencia es que ellos aÃ±aden su margen encima, y tÃº no.",
              "Si tu vehÃ­culo entra en el segmento rentable â hacemos un cÃ¡lculo para tu modelo concreto, para que veas las cifras reales antes de tomar ninguna decisiÃ³n.",
            ],
          },
        ],
      },
      {
        h2: "Impuestos ocultos y pagos obligatorios en EspaÃ±a",
        p: [
          "Alemania y EspaÃ±a son paÃ­ses de la UE, por lo que no hay aranceles aduaneros entre ellos. Pero eso no significa que âno haya impuestosâ. En EspaÃ±a le esperan pagos y procedimientos de matriculaciÃ³n, y precisamente ellos suelen âcomerseâ la ventaja esperada.",
          "Puntos clave de riesgo: impuesto de matriculaciÃ³n (IEDMT â depende de emisiones/tipo de vehÃ­culo y de la regiÃ³n), impuesto municipal (IVTM â depende del municipio), posibles tasas administrativas, y tambiÃ©n costes de adaptaciÃ³n/certificaciÃ³n si faltan documentos o hay matices de equipamiento.",
          "Importante: las cuantÃ­as y las reglas pueden variar por regiÃ³n y por la situaciÃ³n concreta del vehÃ­culo. En la consulta no âadivinamosâ: calculamos escenarios y mostramos el rango de gastos con antelaciÃ³n para que entienda el precio real de traer un coche de Alemania a EspaÃ±a.",
        ],
        h3: [
          {
            t: "Por quÃ© âcomprÃ© baratoâ â  âmatriculÃ© baratoâ",
            p: [
              "La compra es solo la entrada. El problema empieza cuando la persona ya pagÃ³ el coche y luego descubre que, por documentos o por emisiones, necesita otra vÃ­a de matriculaciÃ³n, certificados adicionales o modificaciones. Al final se alargan los plazos y crece el presupuesto.",
            ],
          },
        ],
      },
      {
        h2: "Â¿QuÃ© coches son mÃ¡s rentables para traer de Alemania a EspaÃ±a? Marcas y modelos",
        p: [
          "No todos los coches son igualmente rentables para importar desde Alemania. La diferencia entre los precios europeos y el mercado espaÃ±ol depende del segmento â y en el premium es mÃ¡xima.",
          "<strong>Top 5 coches por rentabilidad de importaciÃ³n desde Alemania, segÃºn nuestra experiencia y cÃ¡lculos reales:</strong>",
          "Audi Q5 y Q7 â la solicitud mÃ¡s popular entre nuestros clientes y de forma consistente una de las mÃ¡s rentables. Los Audi de leasing procedentes de Alemania estÃ¡n bien cuidados, tienen historial de servicio completo, y la diferencia con el mercado espaÃ±ol alcanza regularmente entre 12.000 y 18.000 â¬.",
          "BMW Serie 5 y BMW X5 â un sedÃ¡n de negocios y un SUV que las flotas corporativas alemanas renuevan cada 3 aÃ±os. A subasta llegan vehÃ­culos de 2 a 4 aÃ±os con 40.000â70.000 km. Ahorro frente a un concesionario espaÃ±ol: 10.000â16.000 â¬.",
          "Mercedes Clase E, GLC y GLE â tres modelos que lideran la demanda entre nuestros clientes. Un Mercedes procedente del leasing alemÃ¡n es, por norma general, equipamiento completo, un solo propietario, historial de mantenimiento oficial. La diferencia con el mercado espaÃ±ol: 13.000â20.000 â¬.",
          "Porsche Cayenne â en este segmento la lÃ³gica de la subasta funciona con especial fuerza: los concesionarios espaÃ±oles marcan un 20â25% sobre los Cayenne de ocasiÃ³n, mientras que en una subasta alemana el mismo coche sale a precio real de tasaciÃ³n. Ahorro: desde 15.000 â¬ en adelante.",
          "Volkswagen Touareg â una elecciÃ³n infravalorada. Una de las mejores opciones en cuanto a relaciÃ³n fiabilidad/precio: amplia disponibilidad en subastas, costes de transporte moderados, buena liquidez en EspaÃ±a.",
          "<strong>CuÃ¡ndo no merece la pena:</strong>",
          "VehÃ­culos pequeÃ±os por debajo de 15.000 â¬ â Volkswagen Golf, Seat LeÃ³n, Skoda Octavia. En este segmento, los costes de logÃ­stica y matriculaciÃ³n se comen la mayor parte del ahorro. Importar un coche asÃ­ para una diferencia de 1.500â2.500 â¬ sencillamente no es rentable. Nosotros le encontramos un vehÃ­culo dentro de su presupuesto que haga que la importaciÃ³n merezca la pena â porque operamos en toda Europa, incluidos los paÃ­ses bÃ¡lticos, donde los precios para modelos equivalentes son significativamente inferiores a los de Alemania.",
        ],
        h3: [
          {
            t: "CONCLUSIÃN",
            p: [
              "Si estÃ¡ buscando un coche en el segmento desde 20.000 â¬ â importar desde Alemania casi siempre le reportarÃ¡ un ahorro significativo. Si su presupuesto es menor â no hay problema: le encontraremos un coche que se ajuste a su presupuesto, solicitud y gustos. Porque estamos registrados oficialmente tanto en subastas espaÃ±olas como europeas, y adquirimos vehÃ­culos al precio adecuado allÃ­ donde mejor se adapte a sus preferencias. EscrÃ­banos, rellene el formulario, es gratuito â le haremos una oferta ventajosa.",
              "Solo pulse el botÃ³n que encontrarÃ¡ a continuaciÃ³n en esta pÃ¡gina â RELLENAR EL FORMULARIO DE SELECCIÃN DE COCHE.",
            ],
          },
        ],
      },
      {
        h2: "Plan paso a paso: cÃ³mo traer un coche de Alemania a EspaÃ±a sin sorpresas",
        p: [
          "La mayorÃ­a de la gente pierde dinero no en la compra, sino despuÃ©s. Impuestos imprevistos, una ITV rechazada, documentos mal tramitados. Esta es la secuencia que lo evita.",
          "Paso 1. Defina el objetivo y el presupuesto",
          "Formule con claridad: marca, modelo, kilometraje deseado, aÃ±o y el mÃ¡ximo total llave en mano en EspaÃ±a â no el precio de compra, sino la cifra final con todos los gastos.",
          "Paso 2. Seleccione opciones",
          "La bÃºsqueda se realiza en paralelo en varias fuentes: plataformas de concesionarios, vendedores particulares y subastas especializadas. La bÃºsqueda paralela da una visiÃ³n real del mercado y el mejor precio.",
          "Paso 3. Compruebe el historial y la documentaciÃ³n antes de comprar",
          "ComprobaciÃ³n por VIN, historial de accidentes, kilometraje real, situaciÃ³n legal â todo antes de la operaciÃ³n, no despuÃ©s. Un error en esta fase cuesta mÃ¡s que todo lo demÃ¡s.",
          "Paso 4. Calcule el coste final llave en mano",
          "Precio de compra + transporte + ITV + DGT + IEDMT + gestorÃ­a. Solo cuando vea la cifra completa, tome la decisiÃ³n de compra.",
          "Paso 5. Compra en subasta: un matiz importante",
          "Si el coche elegido se vende en una subasta especializada â por ejemplo, en la conocida subasta alemana OPENLINE â debe tener en cuenta que estas plataformas trabajan Ãºnicamente con participantes profesionales acreditados. Un particular no puede registrarse y pujar por su cuenta.",
          "En ese caso, los clientes acuden a nosotros. Firmamos un contrato detallado, en el que se fija el vehÃ­culo concreto y el precio mÃ¡ximo que el cliente estÃ¡ dispuesto a pagar. La compra se realiza estrictamente segÃºn las condiciones del cliente. Importante: si ganamos la puja, el pago debe realizarse en un plazo de 5 dÃ­as laborables desde el cierre de la subasta â es un requisito obligatorio de la plataforma.",
          "Paso 6. Organice el transporte a EspaÃ±a",
          "CamiÃ³n portaâcoches o traslado por carretera â segÃºn la urgencia. El seguro para todo el trayecto es obligatorio.",
          "Paso 7. RecepciÃ³n y preparaciÃ³n del vehÃ­culo en nuestra estaciÃ³n de Alicante",
          "Si el cliente lo desea, recibimos el vehÃ­culo directamente en nuestra estaciÃ³n de servicio en Alicante. Realizamos un diagnÃ³stico completo, detailing y dejamos el coche listo antes de la entrega. Durante todo este periodo, el vehÃ­culo estÃ¡ bajo nuestro control y se guarda en nuestras instalaciones.",
          "Paso 8. Pase la ITV",
          "La inspecciÃ³n tÃ©cnica con intÃ©rprete es una fase crÃ­tica. Nuestro gestor asiste personalmente para eliminar la barrera del idioma y garantizar la superaciÃ³n.",
          "Paso 9. Tramite la DGT y obtenga matrÃ­culas espaÃ±olas",
          "PresentaciÃ³n de documentos, pago del IEDMT, obtenciÃ³n del permiso de circulaciÃ³n y de las matrÃ­culas. Desde ese momento, el coche es totalmente legal en EspaÃ±a."
        ],
        h3: [
          {
            t: "",
            p: [
              "Â¿Piensa hacerlo por su cuenta? Nuestra consulta cubre el riesgo mÃ¡s caro: errores antes de comprar. Usted recibe un plan para su situaciÃ³n concreta, una lista de documentos y un cÃ¡lculo financiero preliminar. Es mÃ¡s barato que un pago âinesperadoâ despuÃ©s de la compra.",
              "Â¿Quiere el precio real antes de comprar? Deje una solicitud â fijaremos su modelo de costes, plazos y ruta de matriculaciÃ³n.",
              "Podemos hacer la selecciÃ³n del coche por usted: es mÃ¡s eficaz que buscar por su cuenta. Solo pulse el botÃ³n de abajo â RELLENAR EL FORMULARIO DE SELECCIÃN DE COCHE."
            ],
          },
        ],
      },
    ],
      btnOrder: "Describa el coche que busca",
      whyTitle: "Â¿Por quÃ© es rentable comprar un coche en Alemania?",
      whyItems: [
        {
          t: "Ahorra un 15â25% frente al concesionario espaÃ±ol",
          d: "Cuando compras un coche en un concesionario espaÃ±ol, no pagas solo el vehÃ­culo. Pagas el alquiler del showroom, los salarios del personal, las campaÃ±as publicitarias y el beneficio del distribuidor. Todo esto estÃ¡ incorporado en el precio en forma de margen comercial â entre un 15 y un 25% sobre el valor real de mercado del vehÃ­culo. En una subasta alemana ese margen no existe. Las empresas de leasing y los parques corporativos venden los vehÃ­culos devueltos a precio real de mercado â sin intermediario entre tÃº y el valor del coche. En la prÃ¡ctica: un coche que cuesta 40.000 â¬ en un concesionario espaÃ±ol, en una subasta alemana vale entre 30.000 y 34.000 â¬. La diferencia son dinero real que se queda en tu bolsillo.",
        },
        {
          t: "Ahorro real de 10.000 a 20.000 â¬ â cifras de operaciones reales",
          d: "Las cifras que aparecen a continuaciÃ³n no son promesas de marketing. Son operaciones reales que hemos cerrado para nuestros clientes.\n\nAudi Q5 40 TDI Â· 2020 Â· 56.358 km\nComprado en subasta: 24.000 â¬ Â· Llave en mano en EspaÃ±a: 28.500 â¬ Â· Equivalente en concesionarios espaÃ±oles: desde 42.800 â¬ Â· Ahorro del cliente: 14.300 â¬\n\nBMW Serie 5 520d Â· 2021 Â· 48.000 km\nComprado en subasta: 26.500 â¬ Â· Llave en mano en EspaÃ±a: 31.200 â¬ Â· Equivalente en concesionarios espaÃ±oles: desde 46.500 â¬ Â· Ahorro del cliente: 15.300 â¬\n\nMercedes GLC 220d Â· 2021 Â· 52.000 km\nComprado en subasta: 29.000 â¬ Â· Llave en mano en EspaÃ±a: 34.000 â¬ Â· Equivalente en concesionarios espaÃ±oles: desde 51.000 â¬ Â· Ahorro del cliente: 17.000 â¬\n\nRellena el formulario de bÃºsqueda en esta pÃ¡gina â y encontraremos exactamente el coche que estÃ¡s buscando.",
        },
        {
          t: "La garantÃ­a del fabricante se mantiene",
          d: "Una de las preguntas mÃ¡s frecuentes que nos hacen: 'Â¿Si compro un coche en Alemania y lo traigo a EspaÃ±a, se mantiene la garantÃ­a del fabricante?' La respuesta es sÃ­, siempre que el vehÃ­culo estÃ© dentro del perÃ­odo de garantÃ­a.\n\nLa garantÃ­a de los fabricantes europeos â BMW, Mercedes, Audi, Volkswagen, Skoda, Volvo y otros â es paneuropea. Esto significa que es vÃ¡lida en todos los paÃ­ses de la UniÃ³n Europea, independientemente del paÃ­s en el que se haya comprado el vehÃ­culo. El traslado del coche de Alemania a EspaÃ±a no interrumpe ni anula la garantÃ­a.\n\nEl Ãºnico requisito: el vehÃ­culo debe ser mantenido en un concesionario oficial de la marca correspondiente â en cualquier paÃ­s de la UE, incluida EspaÃ±a.\n\nImportante: esto se aplica a vehÃ­culos comprados a concesionarios oficiales o empresas de leasing con historial de servicio original. Precisamente con ese tipo de vehÃ­culos trabajamos nosotros.",
        },
        {
          t: "Historial completo antes de comprar â sin accidentes ocultos ni kilometraje falso",
          d: "El miedo a comprar un coche accidentado o con el kilometraje manipulado es la principal razÃ³n que frena a los compradores. Y es un miedo justificado: en el mercado europeo ese tipo de vehÃ­culos existe. Por eso nosotros no participamos en ninguna puja hasta haber realizado una verificaciÃ³n completa de cada lote.\n\nQuÃ© verificamos:\nâ Kilometraje real a travÃ©s de bases de datos alemanas y europeas, cotejado con el historial de mantenimiento\nâ Historial de accidentes: siniestros, reparaciones de carrocerÃ­a, sustituciones de piezas â incluyendo daÃ±os ocultos via fuentes profesionales cerradas\nâ SituaciÃ³n legal: embargos, cargas y restricciones que puedan bloquear la transacciÃ³n\nâ Cadena completa de titularidad y paÃ­ses de uso del vehÃ­culo\nâ Concordancia del nÃºmero VIN con la documentaciÃ³n\n\nSi la verificaciÃ³n detecta irregularidades â no recomendamos ese vehÃ­culo y continuamos la bÃºsqueda. Sin excepciones.",
        },
        {
          t: "Sin aranceles aduaneros â Alemania y EspaÃ±a son paÃ­ses de la UE",
          d: "Muchos compradores creen errÃ³neamente que el traslado de un vehÃ­culo de Alemania a EspaÃ±a conlleva trÃ¡mites aduaneros y aranceles adicionales. Es un malentendido muy extendido que impide a muchas personas realizar una compra ventajosa.\n\nCÃ³mo funciona realmente: Alemania y EspaÃ±a son estados miembros de la UniÃ³n Europea. Dentro de la UE rige el principio de libre circulaciÃ³n de mercancÃ­as. Esto significa que no existen barreras aduaneras, aranceles ni tasas adicionales por el traslado de un vehÃ­culo entre estos dos paÃ­ses.\n\nAl matricular el vehÃ­culo en EspaÃ±a solo se abonan los impuestos locales espaÃ±oles â IVA (en los casos aplicables) e IEDMT (impuesto de matriculaciÃ³n). Ambos impuestos se pagan al matricular cualquier vehÃ­culo en EspaÃ±a, independientemente de su paÃ­s de origen. No es aduana â es impuesto de matriculaciÃ³n. Todos estos gastos los calculamos para ti de antemano y los incluimos en la cifra final llave en mano.",
        },
        {
          t: "MatriculaciÃ³n espaÃ±ola completa incluida",
          d: "La matriculaciÃ³n de un vehÃ­culo extranjero en EspaÃ±a es un proceso de mÃºltiples etapas que requiere conocimiento de la legislaciÃ³n local, del idioma y de los procedimientos burocrÃ¡ticos. Precisamente esta fase suele ser la fuente de gastos inesperados y retrasos para quienes intentan hacerlo por su cuenta.\n\nQuÃ© incluye nuestro servicio de matriculaciÃ³n:\nâ SuperaciÃ³n de la ITV â nuestro gestor estÃ¡ presente personalmente y elimina la barrera lingÃ¼Ã­stica\nâ CÃ¡lculo profesional del IEDMT con optimizaciÃ³n legal cuando es posible\nâ PreparaciÃ³n del paquete documental completo incluyendo la Ficha TÃ©cnica Reducida\nâ PresentaciÃ³n de documentos en la DGT y obtenciÃ³n del permiso de circulaciÃ³n\nâ ObtenciÃ³n de las matrÃ­culas espaÃ±olas\nâ TramitaciÃ³n del Distintivo Ambiental para acceso a zonas ZBE\nâ Opcionalmente: recepciÃ³n en nuestro taller de Alicante, diagnÃ³stico completo, detailing profesional y custodia\n\nRecibes un vehÃ­culo completamente tramitado, listo para circular en EspaÃ±a â sin una sola visita a ningÃºn organismo oficial.",
        },
      ],
      processTitle: "CÃ³mo funciona: de la solicitud a las llaves en mano",
      processItems: [
        {
          t: "1. AnÃ¡lisis gratuito de tu solicitud â sin compromiso",
          d: "El primer paso no requiere de ti nada mÃ¡s que unos minutos de tu tiempo. Rellenas el formulario de bÃºsqueda de vehÃ­culo en esta pÃ¡gina: marca, modelo, aÃ±o de fabricaciÃ³n deseado, kilometraje y presupuesto mÃ¡ximo llave en mano en EspaÃ±a. Nuestros gestores reciben tu solicitud de inmediato y comienzan el anÃ¡lisis.\n\nQuÃ© hacemos en esta etapa: verificamos la disponibilidad real de vehÃ­culos con tus parÃ¡metros en subastas y plataformas europeas en este momento; realizamos un cÃ¡lculo preliminar del coste total llave en mano; evaluamos si tu solicitud se ajusta a la situaciÃ³n actual del mercado y, si es necesario, proponemos alternativas mÃ¡s ventajosas.\n\nEste anÃ¡lisis es gratuito. No adquieres ningÃºn compromiso. Sin presiÃ³n ni imposiciÃ³n de servicios â solo una imagen honesta del mercado y cifras reales antes de tomar cualquier decisiÃ³n.",
        },
        {
          t: "2. BÃºsqueda y selecciÃ³n â mÃ­nimo 10 opciones en 30 dÃ­as",
          d: "Tras la firma del contrato comenzamos la bÃºsqueda activa en decenas de plataformas europeas â subastas alemanas, austriacas, belgas y neerlandesas, plataformas de leasing y redes de concesionarios.\n\nNo nos limitamos a enviarte enlaces. Cada opciÃ³n propuesta supera una selecciÃ³n previa segÃºn tus criterios: aÃ±o de fabricaciÃ³n, kilometraje, equipamiento, color, estado tÃ©cnico. A cada vehÃ­culo adjuntamos descripciÃ³n, fotografÃ­as, historial y cÃ¡lculo preliminar del coste total llave en mano.\n\nNuestra garantÃ­a: un mÃ­nimo de 10 opciones concretas de vehÃ­culos en un plazo de 30 dÃ­as desde la firma del contrato. No son propuestas abstractas â son lotes reales disponibles para su compra ahora mismo. Con mucha frecuencia encontramos opciones significativamente mÃ¡s ventajosas de lo que el cliente esperaba â en ocasiones, un vehÃ­culo de gama superior dentro del mismo presupuesto.",
        },
        {
          t: "3. VerificaciÃ³n completa â historial, kilometraje, accidentes, situaciÃ³n legal",
          d: "Cuando has elegido el vehÃ­culo que te interesa â no nos precipitamos a pujar. Primero, la verificaciÃ³n completa.\n\nQuÃ© verificamos:\nâ Kilometraje real mediante bases de datos alemanas y europeas, cotejado con el historial de mantenimiento\nâ Historial de accidentes: siniestros, reparaciones de carrocerÃ­a, sustituciones de piezas â incluyendo daÃ±os ocultos via fuentes profesionales cerradas\nâ SituaciÃ³n legal: embargos, cargas, prohibiciones de actos registrales y otras restricciones que puedan bloquear la transacciÃ³n\nâ Cadena completa de titularidad y paÃ­ses de uso del vehÃ­culo\nâ Concordancia del nÃºmero VIN con la documentaciÃ³n\n\nSi la verificaciÃ³n detecta irregularidades â no recomendamos ese vehÃ­culo y continuamos la bÃºsqueda. Sin excepciones.",
        },
        {
          t: "4. ParticipaciÃ³n en subasta â tu precio mÃ¡ximo queda fijado en el contrato",
          d: "Si el vehÃ­culo elegido se vende en una subasta especializada â como la conocida plataforma alemana OPENLINE â es fundamental entender que estas subastas trabajan exclusivamente con participantes profesionales acreditados. Un particular no puede registrarse ni participar en las pujas por su cuenta.\n\nCÃ³mo organizamos este proceso: firmamos contigo un acuerdo adicional al contrato principal, en el que se especifican tres parÃ¡metros clave â el vehÃ­culo concreto, el precio mÃ¡ximo que estÃ¡s dispuesto a pagar y el procedimiento de liquidaciÃ³n en caso de ganar la puja. Tu puja mÃ¡xima estÃ¡ protegida por contrato â no podemos superarla sin tu consentimiento expreso y por escrito.\n\nEs importante entender los plazos: ganar una subasta impone una obligaciÃ³n estricta â el pago debe efectuarse en un plazo de 5 dÃ­as hÃ¡biles desde el cierre de la puja. El incumplimiento conlleva sanciones econÃ³micas y puede derivar en la exclusiÃ³n. Por eso acordamos contigo con antelaciÃ³n la disponibilidad de los fondos.",
        },
        {
          t: "5. Compra â pago en 5 dÃ­as, acompaÃ±amiento completo de la transacciÃ³n",
          d: "Independientemente de dÃ³nde se adquiera el vehÃ­culo â en subasta, en concesionario oficial o en plataforma privada â asumimos completamente el acompaÃ±amiento de la transacciÃ³n.\n\nEn la compra a concesionario o plataforma: llevamos a cabo las negociaciones finales de precio, revisamos el contrato de compraventa en busca de condiciones ocultas y acompaÃ±amos la firma.\n\nEn la compra en subasta: en caso de ganar la puja, abonas el pago en 5 dÃ­as hÃ¡biles. Gestionamos toda la documentaciÃ³n necesaria: baja del registro alemÃ¡n, obtenciÃ³n de documentos de exportaciÃ³n y papeles de acompaÃ±amiento para la posterior matriculaciÃ³n en EspaÃ±a.\n\nCon independencia de la plataforma: obtenemos documentos de registro provisional a tu nombre en el paÃ­s de adquisiciÃ³n. A lo largo de toda esta etapa recibes actualizaciones regulares sobre el estado de la operaciÃ³n. No necesitas comunicarte con nadie ni hacer seguimiento de nada â nosotros gestionamos todo el proceso de principio a fin.",
        },
        {
          t: "6. Transporte en camiÃ³n portacoches con seguro â hasta tu direcciÃ³n en EspaÃ±a",
          d: "Tras completar la compra, organizamos el transporte a EspaÃ±a. Dispones de dos opciones segÃºn tus prioridades.\n\nCamiÃ³n portacoches â el mÃ©todo estÃ¡ndar y mÃ¡s fiable. El vehÃ­culo se transporta en un camiÃ³n especializado junto con otros vehÃ­culos. Plazos de entrega desde Alemania a EspaÃ±a: entre 5 y 10 dÃ­as hÃ¡biles.\n\nTraslado individual con conductor â para quienes desean recibir el vehÃ­culo antes. Nuestro conductor traslada personalmente el coche desde Alemania hasta EspaÃ±a. Esta opciÃ³n requiere menos tiempo y permite iniciar la matriculaciÃ³n mÃ¡s rÃ¡pidamente.\n\nEn ambos casos: el vehÃ­culo estÃ¡ asegurado a valor total durante todo el transporte; recibes informaciÃ³n sobre la ubicaciÃ³n del coche en cada etapa del trayecto; la entrega se realiza en la direcciÃ³n que nos indiques en cualquier punto de EspaÃ±a â no en un almacÃ©n ni en una terminal.\n\nSi lo deseas, el vehÃ­culo puede ser recibido directamente en nuestro taller de servicio tÃ©cnico en Alicante, donde pasa inmediatamente a la siguiente etapa de preparaciÃ³n.",
        },
        {
          t: "7. ITV â nuestro gestor estÃ¡ presente personalmente",
          d: "La inspecciÃ³n tÃ©cnica ITV es una etapa obligatoria para matricular un vehÃ­culo extranjero en EspaÃ±a. Es precisamente aquÃ­ donde suelen surgir los problemas para quienes intentan realizarla por su cuenta: barrera del idioma, desconocimiento de los requisitos locales, documentaciÃ³n incorrecta.\n\nSi el cliente lo desea, el vehÃ­culo pasa previamente por un diagnÃ³stico completo y detailing en nuestro taller de servicio tÃ©cnico en Alicante. Detectamos y corregimos todas las observaciones tÃ©cnicas antes de presentarlo a la inspecciÃ³n, lo que garantiza superar la ITV a la primera.\n\nEn la estaciÃ³n ITV nuestro gestor, que habla tu idioma, estÃ¡ presente personalmente durante todo el procedimiento. Se ocupa de la comunicaciÃ³n con los tÃ©cnicos, responde a las preguntas y elimina cualquier barrera lingÃ¼Ã­stica. Preparamos el paquete completo de documentos, incluida la Ficha TÃ©cnica Reducida â documento obligatorio para pasar la inspecciÃ³n.\n\nNo superar la ITV detiene todo el proceso de matriculaciÃ³n. Por eso no nos limitamos a pedirte cita â preparamos el vehÃ­culo y acompaÃ±amos todo el proceso personalmente.",
        },
        {
          t: "8. DGT, matrÃ­culas espaÃ±olas â tu coche estÃ¡ listo para circular",
          d: "La etapa final â y la mÃ¡s gratificante. Tras superar con Ã©xito la ITV, iniciamos el procedimiento de matriculaciÃ³n completa del vehÃ­culo en EspaÃ±a.\n\nQuÃ© ocurre en esta etapa:\nâ CÃ¡lculo profesional del impuesto IEDMT â analizamos el valor de tasaciÃ³n segÃºn las tablas de Hacienda y buscamos todos los fundamentos legales para reducir la carga fiscal\nâ PresentaciÃ³n del paquete completo de documentos en la DGT â DirecciÃ³n General de TrÃ¡fico\nâ ObtenciÃ³n del permiso de circulaciÃ³n a tu nombre\nâ ObtenciÃ³n de las matrÃ­culas espaÃ±olas\nâ TramitaciÃ³n del Distintivo Ambiental para acceso legal a las zonas ZBE en los centros de todas las grandes ciudades de EspaÃ±a\n\nA partir de la finalizaciÃ³n de esta etapa, tu vehÃ­culo es completamente legal en EspaÃ±a. Sin procedimientos adicionales, sin visitas a organismos oficiales por tu parte â simplemente recibes el coche listo y te pones al volante.",
        },
      ],
      caseTitle: "OperaciÃ³n real: Audi Q5 â ahorro de 14 300 â¬",
      caseTag: "Caso AutoexpertEU Â· Febrero 2026",
      caseCar: "Audi Q5 40 TDI Quattro",
      caseSpecs: "DiÃ©sel Â· AutomÃ¡tico Â· 204 CV Â· 56 358 km Â· 2020",
      caseCostRows: [
        { label: "ð©ðª Puja ganadora en subasta (Alemania)", val: "24 000 â¬" },
        { label: "ð Transporte Alemania â EspaÃ±a", val: "1 200 â¬" },
        { label: "ð TrÃ¡mites aduaneros UE", val: "incluido" },
        { label: "ð MatriculaciÃ³n en EspaÃ±a (ITV, DGT)", val: "1 800 â¬" },
        { label: "ð Tarifa del servicio AutoexpertEU", val: "1 500 â¬" },
      ],
      caseTotalLabel: "ð³ TOTAL LLAVE EN MANO EN ESPAÃA",
      caseTotalVal: "28 500 â¬",
      caseSaveLabel: "Ahorro frente al mercado espaÃ±ol",
      caseSaveVal: "â14 300 â¬",
      caseSaveSub: "Coches comparables en concesionarios espaÃ±oles: desde 42 800 â¬",
      compareRows: [
        { label: "AutoexpertEU (llave en mano)", val: "28 500 â¬", best: true },
        { label: "Audi Q5 Â· Arval Algete", val: "45 800 â¬", best: false },
        { label: "Audi Q5 Â· Arval Sevilla", val: "42 800 â¬", best: false },
        { label: "Audi Q5 Â· S line Ayvens", val: "46 000 â¬", best: false },
      ],
      servicesTitle: "Nuestros servicios",
      serviceItems: [
        {
          t: "Consulta sobre la compra de un coche en Alemania",
          d: "Le explicamos cÃ³mo funcionan las subastas europeas, cuÃ¡les son los costes reales y le damos una estimaciÃ³n gratuita del precio llave en mano para el modelo concreto que desea. Gratis, sin compromiso.",
        },
        {
          t: "SelecciÃ³n y importaciÃ³n completa llave en mano",
          d: "El servicio completo: bÃºsqueda, verificaciÃ³n de historial, puja en subasta, transporte desde Alemania, entrega en EspaÃ±a, ITV, matriculaciÃ³n en DGT, placas espaÃ±olas. Solo tiene que describir el coche y recibir las llaves.",
        },
        {
          t: "Solo matriculaciÃ³n en EspaÃ±a (coche ya comprado)",
          d: "Si ya ha comprado un coche en Alemania y necesita matricularlo en EspaÃ±a, gestionamos todo el proceso: ITV, cÃ¡lculo del impuesto IEDMT, presentaciÃ³n en DGT y recogida de matrÃ­cula.",
        },
      ],
      faqTitle: "Preguntas frecuentes",
      faqItems: [
        {
          t: "Â¿CuÃ¡nto cuesta traer un coche de Alemania a EspaÃ±a?",
          d: "El coste total depende de la puja ganadora en la subasta mÃ¡s nuestra tarifa de servicio, transporte y costes de matriculaciÃ³n en EspaÃ±a. Ejemplo: Audi Q5 ganado por 24 000 â¬, total llave en mano en EspaÃ±a 28 500 â¬, frente a 42 800 â¬+ en concesionario espaÃ±ol. Le ofrecemos un presupuesto gratuito para su modelo especÃ­fico.",
        },
        {
          t: "Â¿Hay aranceles aduaneros entre Alemania y EspaÃ±a?",
          d: "No. Ambos paÃ­ses son estados miembros de la UE, por lo que no existen barreras aduaneras. El Ãºnico impuesto aplicable es el impuesto espaÃ±ol de matriculaciÃ³n de vehÃ­culos (IEDMT), que calculamos por adelantado y buscamos optimizar legalmente.",
        },
        {
          t: "Â¿QuÃ© documentos se necesitan para matricular un coche alemÃ¡n en EspaÃ±a?",
          d: "Se necesita: el certificado de matrÃ­cula alemÃ¡n (Fahrzeugbrief / Zulassungsbescheinigung Teil II), certificado de conformidad UE (COC), su NIE, pasaporte y justificante del pago del impuesto. AutoexpertEU recoge y presenta todos los documentos en su nombre.",
        },
        {
          t: "Â¿CuÃ¡nto tiempo dura todo el proceso?",
          d: "Normalmente entre 5 y 6 semanas desde la solicitud hasta recibir el coche con matrÃ­cula espaÃ±ola. Desglose: tramitaciÃ³n de la compra 1â3 dÃ­as, transporte desde Alemania a partir de 15 dÃ­as laborables (camiÃ³n portacoches), matriculaciÃ³n en EspaÃ±a desde la llegada del vehÃ­culo hasta las placas 1â3 semanas con documentaciÃ³n en regla.",
        },
        {
          t: "Â¿CÃ³mo sÃ© que el coche no estÃ¡ accidentado o tiene el kilometraje manipulado?",
          d: "Antes de cada puja realizamos una verificaciÃ³n completa del historial VIN mediante bases de datos alemanas y europeas: accidentes, kilometraje real, historial de mantenimiento, embargos pendientes. Si el historial no estÃ¡ claro o es incorrecto, no pujamos.",
        },
        {
          t: "Â¿QuÃ© pasa si el coche llega daÃ±ado durante el transporte?",
          d: "El coche estÃ¡ totalmente asegurado durante el trayecto. Cualquier daÃ±o de transporte descubierto en la entrega estÃ¡ cubierto por la pÃ³liza de seguro. Todas las condiciones quedan escritas en el contrato antes de empezar.",
        },
        {
          t: "Â¿Puedo comprar directamente en subasta alemana yo mismo?",
          d: "No. Las subastas de coches alemanas funcionan en rÃ©gimen B2B y requieren acreditaciÃ³n profesional como distribuidor para participar. Los particulares no tienen acceso. Por eso necesita un intermediario acreditado â nosotros.",
        },
      ],
      hReady: "Â¿Listo para encontrar su coche en Alemania?",
      pReady: "CuÃ©ntenos quÃ© coche estÃ¡ buscando â verificaremos el mercado de forma gratuita y le diremos si es posible encontrar ese vehÃ­culo, cuÃ¡nto costarÃ¡ llave en mano en EspaÃ±a, o le propondremos una opciÃ³n que quizÃ¡s supere sus expectativas.",
      hQuestions: "Â¿AÃºn tiene preguntas?",
      btnFaq: "Respuestas en la pÃ¡gina de FAQ",
      btnContact: "ContÃ¡ctenos",
    };
  }

  // ââ RUSSIAN (default) ââââââââââââââââââââââââââââââââââââââ
  return {
    heroAlt: "ÐÑÐ¿Ð¸ÑÑ Ð°Ð²ÑÐ¾ Ð² ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð¸ Ð¿ÑÐ¸Ð²ÐµÐ·ÑÐ¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ",
    heroTitle: "ÐÐ²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ â Ð¿Ð¾ÐºÑÐ¿ÐºÐ°, Ð´Ð¾ÑÑÐ°Ð²ÐºÐ° Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² DGT",
    heroSub:
      "ÐÐ¾Ð´Ð±ÐµÑÑÐ¼ Ð¸ ÐºÑÐ¿Ð¸Ð¼ Ð°Ð²ÑÐ¾ Ð² ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸, Ð´Ð¾ÑÑÐ°Ð²Ð¸Ð¼ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ Ð¸ Ð¾ÑÐ¾ÑÐ¼Ð¸Ð¼ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ: ÑÐ°ÑÑÑÑ Ð¿Ð¾Ð»Ð½Ð¾Ð¹ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸ Ð·Ð°ÑÐ°Ð½ÐµÐµ, Ð½Ð°Ð»Ð¾Ð³Ð¸, ITV Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² DGT Ð±ÐµÐ· ÑÑÑÐ¿ÑÐ¸Ð·Ð¾Ð².",
    dealLabel: "Ð ÐµÐ°Ð»ÑÐ½Ð°Ñ ÑÐ´ÐµÐ»ÐºÐ° â Ð¿Ð¾Ð±ÐµÐ´Ð° Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ",
    dealBadge: "â Ð¢ÐµÐ½Ð´ÐµÑ Ð²ÑÐ¸Ð³ÑÐ°Ð½",
    dealCar: "Audi Q5 40 TDI",
    dealCarSub: "Diesel Â· Auto Â· 204 hp Â· 56 358 km",
    dealRows: [
      { label: "ð©ðª ÐÐ¾Ð±ÐµÐ´Ð½Ð°Ñ ÑÑÐ°Ð²ÐºÐ° (Ð°ÑÐºÑÐ¸Ð¾Ð½ ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸)", val: "24 000 â¬", style: "gold" },
      { label: "ð ÐÐ¾ÑÑÐ°Ð²ÐºÐ° + ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸", val: "+ 4 500 â¬", style: "muted" },
      { label: "ðªð¸ ÐÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸", val: "28 500 â¬", style: "bold" },
      { label: "ÐÐ½Ð°Ð»Ð¾Ð³ Ð² Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¾Ð¼ Ð°Ð²ÑÐ¾ÑÐ°Ð»Ð¾Ð½Ðµ", val: "42 800 â¬+", style: "strike" },
    ],
    dealSaveLabel: "Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ°:",
    dealSaveVal: "â14 300 â¬",
    intro: "",
    seoTitle: (
      <span className="block text-center">
        Ð¡ÐºÐ¾Ð»ÑÐºÐ¾ ÑÐµÐ°Ð»ÑÐ½Ð¾ ÑÑÐ¾Ð¸Ñ Ð¿ÑÐ¸Ð²ÐµÐ·ÑÐ¸ Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ <br /> Ð ÐÐÐ ÐÐ ÐÐÐ ÐÐÐÐÐ¢ÐÐ¢Ð¬
      </span>
    ),
    seoSections: [
      {
        h2: "Ð¡ÑÐ¾Ð¸Ñ Ð»Ð¸ Ð²ÐµÐ·ÑÐ¸ Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ â Ð¸Ð»Ð¸ ÑÑÐ¾ Ð¼Ð¸Ñ Ð¾ Ð²ÑÐ³Ð¾Ð´Ðµ?",
        p: [
          "ÐÐ¾ÑÐ¾ÑÐºÐ¸Ð¹ Ð¾ÑÐ²ÐµÑ: Ð·Ð°Ð²Ð¸ÑÐ¸Ñ Ð¾Ñ ÑÐµÐ³Ð¼ÐµÐ½ÑÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ. ÐÐ°Ð²Ð°Ð¹ÑÐµ ÑÐµÑÑÐ½Ð¾.",
          "<strong>ÐÐ¾Ð³Ð´Ð° ÑÑÐ¾ Ð¾Ð´Ð½Ð¾Ð·Ð½Ð°ÑÐ½Ð¾ Ð²ÑÐ³Ð¾Ð´Ð½Ð¾:</strong>",
          "ÐÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»ÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑÑ Ð¾Ñ 20 000 â¬ Ð¸ Ð²ÑÑÐµ ÑÐ°Ð·Ð½Ð¸ÑÐ° Ð¼ÐµÐ¶Ð´Ñ Ð½ÐµÐ¼ÐµÑÐºÐ¸Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ð¾Ð¼ Ð¸ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼ ÑÑÐ½ÐºÐ¾Ð¼ ÑÑÐ°Ð±Ð¸Ð»ÑÐ½Ð¾ ÑÐ¾ÑÑÐ°Ð²Ð»ÑÐµÑ 12 000â20 000 â¬. Ð­ÑÐ¾ Ð½Ðµ ÑÐµÐºÐ»Ð°Ð¼Ð½ÑÐ¹ ÑÐµÐ·Ð¸Ñ â ÑÑÐ¾ Ð°ÑÐ¸ÑÐ¼ÐµÑÐ¸ÐºÐ°: Ð»Ð¸Ð·Ð¸Ð½Ð³Ð¾Ð²ÑÐµ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸ Ð¿ÑÐ¾Ð´Ð°ÑÑ Ð²Ð¾Ð·Ð²ÑÐ°ÑÑÐ½Ð½ÑÐµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ð¸ Ð±ÐµÐ· ÑÐ¾Ð·Ð½Ð¸ÑÐ½Ð¾Ð¹ Ð½Ð°ÑÐµÐ½ÐºÐ¸ Ð´Ð¸Ð»ÐµÑÐ° (15â25%), Ð° ÑÐ°ÑÑÐ¾Ð´Ñ Ð½Ð° Ð´Ð¾ÑÑÐ°Ð²ÐºÑ Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ ÑÐ¸ÐºÑÐ¸ÑÐ¾Ð²Ð°Ð½Ñ Ð¸ Ð½Ðµ Ð·Ð°Ð²Ð¸ÑÑÑ Ð¾Ñ ÑÐµÐ½Ñ Ð¼Ð°ÑÐ¸Ð½Ñ.",
          "ÐÐ°Ð¸Ð±Ð¾Ð»ÐµÐµ Ð²ÑÐ³Ð¾Ð´Ð½ÑÐµ ÑÐµÐ³Ð¼ÐµÐ½ÑÑ: ÐºÑÐ¾ÑÑÐ¾Ð²ÐµÑÑ Ð¸ SUV (Audi Q5/Q7, BMW X5, Mercedes GLC/GLE, Volkswagen Touareg), Ð±Ð¸Ð·Ð½ÐµÑ-ÑÐµÐ´Ð°Ð½Ñ (BMW 5, Mercedes E-ÐºÐ»Ð°ÑÑ, Audi A6) Ð¸ Ð¿ÑÐµÐ¼Ð¸ÑÐ¼ Ð² ÑÐµÐ»Ð¾Ð¼ â Ð¸Ð¼ÐµÐ½Ð½Ð¾ Ð·Ð´ÐµÑÑ Ð½Ð°ÑÐµÐ½ÐºÐ° Ð´Ð¸Ð»ÐµÑÐ° Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½Ð°.",
          "<strong>ÐÐ¾Ð³Ð´Ð° Ð²ÑÐ³Ð¾Ð´Ð° Ð¼ÐµÐ½ÑÑÐµ:</strong>",
          "ÐÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»ÑÑ Ð´Ð¾ 15 000 â¬ ÑÐ°ÑÑÐ¾Ð´Ñ Ð½Ð° Ð´Ð¾ÑÑÐ°Ð²ÐºÑ Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ ÑÐ¾ÑÑÐ°Ð²Ð»ÑÑÑ Ð·Ð½Ð°ÑÐ¸ÑÐµÐ»ÑÐ½ÑÑ Ð´Ð¾Ð»Ñ Ð¾Ñ Ð¾Ð±ÑÐµÐ¹ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸, Ð¸ ÑÐ¸ÑÑÐ°Ñ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ ÑÐ¶Ð¸Ð¼Ð°ÐµÑÑÑ. ÐÐµÐ·ÑÐ¸ Ð±ÑÐ´Ð¶ÐµÑÐ½ÑÐ¹ ÑÑÑÑÐ±ÐµÐº Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ ÑÐ°Ð´Ð¸ 1 500â2 000 â¬ ÑÐ°Ð·Ð½Ð¸ÑÑ â Ð½ÐµÑÐµÐ»ÐµÑÐ¾Ð¾Ð±ÑÐ°Ð·Ð½Ð¾.",
        ],
        h3: [
          {
            t: "ÐÐ»Ð°Ð²Ð½ÑÐ¹ Ð²ÑÐ²Ð¾Ð´:",
            p: [
              "ÐÐ¼Ð¿Ð¾ÑÑ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ â ÑÑÐ¾ Ð½Ðµ Â«Ð»Ð°Ð¹ÑÑÐ°Ðº Ð´Ð»Ñ Ð¸Ð·Ð±ÑÐ°Ð½Ð½ÑÑÂ». Ð­ÑÐ¾ ÑÑÐ°Ð½Ð´Ð°ÑÑÐ½ÑÐ¹ Ð¸Ð½ÑÑÑÑÐ¼ÐµÐ½Ñ, ÐºÐ¾ÑÐ¾ÑÑÐ¼ Ð¿Ð¾Ð»ÑÐ·ÑÑÑÑÑ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ðµ Ð´Ð¸Ð»ÐµÑÑ ÑÐ°Ð¼Ð¸, Ð¿Ð¾ÐºÑÐ¿Ð°Ñ ÑÐ²Ð¾Ð¸ Ð¶Ðµ ÑÑÐ¾ÐºÐ¸ Ð½Ð° ÑÐµÑ Ð¶Ðµ Ð°ÑÐºÑÐ¸Ð¾Ð½Ð°Ñ. Ð Ð°Ð·Ð½Ð¸ÑÐ° Ð»Ð¸ÑÑ Ð² ÑÐ¾Ð¼, ÑÑÐ¾ Ð¾Ð½Ð¸ Ð´Ð¾Ð±Ð°Ð²Ð»ÑÑÑ ÑÐ²Ð¾Ñ Ð½Ð°ÑÐµÐ½ÐºÑ ÑÐ²ÐµÑÑÑ, Ð° ÐÑ â Ð½ÐµÑ.",
              "ÐÑÐ»Ð¸ Ð²Ð°Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð²ÑÐ¾Ð´Ð¸Ñ Ð² Ð²ÑÐ³Ð¾Ð´Ð½ÑÐ¹ ÑÐµÐ³Ð¼ÐµÐ½Ñ â Ð¼Ñ ÑÐ´ÐµÐ»Ð°ÐµÐ¼ ÑÐ°ÑÑÑÑ Ð¿Ð¾Ð´ ÐÐ°ÑÑ ÐºÐ¾Ð½ÐºÑÐµÑÐ½ÑÑ Ð¼Ð¾Ð´ÐµÐ»Ñ, ÑÑÐ¾Ð±Ñ ÐÑ ÑÐ²Ð¸Ð´ÐµÐ»Ð¸ ÑÐµÐ°Ð»ÑÐ½ÑÐµ ÑÐ¸ÑÑÑ Ð´Ð¾ Ð¿ÑÐ¸Ð½ÑÑÐ¸Ñ ÑÐµÑÐµÐ½Ð¸Ñ.",
            ],
          },
        ],
      },
      {
        h2: "Ð¡ÐºÑÑÑÑÐµ Ð½Ð°Ð»Ð¾Ð³Ð¸, ITV, DGT Ð¸ Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÐ½ÑÐµ Ð¿Ð»Ð°ÑÐµÐ¶Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸",
        p: [
          "ÐÐµÑÐ¼Ð°Ð½Ð¸Ñ Ð¸ ÐÑÐ¿Ð°Ð½Ð¸Ñ â ÑÑÑÐ°Ð½Ñ ÐÐ¡, Ð¿Ð¾ÑÑÐ¾Ð¼Ñ ÑÐ°Ð¼Ð¾Ð¶ÐµÐ½Ð½ÑÑ Ð¿Ð¾ÑÐ»Ð¸Ð½ Ð¼ÐµÐ¶Ð´Ñ Ð½Ð¸Ð¼Ð¸ Ð½ÐµÑ. ÐÐ¾ ÑÑÐ¾ Ð½Ðµ Ð·Ð½Ð°ÑÐ¸Ñ, ÑÑÐ¾ Â«Ð½Ð°Ð»Ð¾Ð³Ð¾Ð² Ð½Ðµ Ð±ÑÐ´ÐµÑÂ». Ð ÐÑÐ¿Ð°Ð½Ð¸Ð¸ Ð²Ð°Ñ Ð¶Ð´ÑÑ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¾Ð½Ð½ÑÐµ Ð¿Ð»Ð°ÑÐµÐ¶Ð¸ Ð¸ Ð¿ÑÐ¾ÑÐµÐ´ÑÑÑ, Ð¸ Ð¸Ð¼ÐµÐ½Ð½Ð¾ Ð¾Ð½Ð¸ ÑÐ°ÑÐµ Ð²ÑÐµÐ³Ð¾ Â«ÑÑÐµÐ´Ð°ÑÑÂ» Ð¾Ð¶Ð¸Ð´Ð°ÐµÐ¼ÑÑ Ð²ÑÐ³Ð¾Ð´Ñ.",
          "ÐÐ»ÑÑÐµÐ²ÑÐµ ÑÐ¾ÑÐºÐ¸ ÑÐ¸ÑÐºÐ°: Ð½Ð°Ð»Ð¾Ð³ Ð½Ð° ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ (IEDMT â Ð·Ð°Ð²Ð¸ÑÐ¸Ñ Ð¾Ñ Ð²ÑÐ±ÑÐ¾ÑÐ¾Ð²/ÑÐ¸Ð¿Ð° Ð°Ð²ÑÐ¾ Ð¸ ÑÐµÐ³Ð¸Ð¾Ð½Ð°), Ð¼ÑÐ½Ð¸ÑÐ¸Ð¿Ð°Ð»ÑÐ½ÑÐ¹ Ð½Ð°Ð»Ð¾Ð³ (IVTM â Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑÐ¸ Ð¾Ñ Ð³Ð¾ÑÐ¾Ð´Ð°), Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½ÑÐµ ÑÐ±Ð¾ÑÑ Ð·Ð° Ð¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸Ðµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð², Ð° ÑÐ°ÐºÐ¶Ðµ ÑÐ°ÑÑÐ¾Ð´Ñ Ð½Ð° Ð°Ð´Ð°Ð¿ÑÐ°ÑÐ¸Ñ/ÑÐµÑÑÐ¸ÑÐ¸ÐºÐ°ÑÐ¸Ñ, ÐµÑÐ»Ð¸ Ð½Ðµ ÑÐ²Ð°ÑÐ°ÐµÑ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð² Ð¸Ð»Ð¸ ÐµÑÑÑ Ð½ÑÐ°Ð½ÑÑ Ð¿Ð¾ ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑÐ°ÑÐ¸Ð¸.",
          "Ð¡Ð°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½ÑÐ¹ Ð¿ÑÐ¸Ð²Ð¾Ð· â Ð²Ð¾Ð·Ð¼Ð¾Ð¶ÐµÐ½. ÐÐ¾ ÑÐ°ÑÐµ Ð²ÑÐµÐ³Ð¾ Ð¾Ð½ Ð»Ð¾Ð¼Ð°ÐµÑÑÑ Ð½Ð° Ð´Ð²ÑÑ ÑÑÐ°Ð¿Ð°Ñ: ITV (ÑÐµÑÐ½Ð¸ÑÐµÑÐºÐ°Ñ ÑÐ°ÑÑÑ Ð¸ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ) Ð¸ DGT (Ð¿Ð¾Ð´Ð°ÑÐ°, Ð½Ð°Ð»Ð¾Ð³Ð¸, ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð¸ Ð½Ð¾Ð¼ÐµÑÐ°).",
           "ÐÐ° Ð¿ÑÐ°ÐºÑÐ¸ÐºÐµ Ð¿ÑÐ¾Ð±Ð»ÐµÐ¼Ñ Ð²Ð¾Ð·Ð½Ð¸ÐºÐ°ÑÑ Ð¸Ð·-Ð·Ð° Ð¾ÑÑÑÑÑÑÐ²Ð¸Ñ Ð¸Ð»Ð¸ Ð½ÐµÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¸Ñ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð² (COC, ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¾Ð½Ð½ÑÐµ Ð±ÑÐ¼Ð°Ð³Ð¸), Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ÑÑÐµÐ¹ ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑÐ°ÑÐ¸Ð¸, Ð¾ÑÐ¸Ð±Ð¾Ðº Ð² Ð´Ð°Ð½Ð½ÑÑ, Ð½ÐµÐ²ÐµÑÐ½Ð¾Ð³Ð¾ ÑÐ°ÑÑÑÑÐ° Ð½Ð°Ð»Ð¾Ð³Ð¾Ð² Ð¸Ð»Ð¸ Ð½ÐµÐ¿Ð¾Ð´Ð³Ð¾ÑÐ¾Ð²Ð»ÐµÐ½Ð½Ð¾ÑÑÐ¸ Ðº Ð¿ÑÐ¾ÑÐµÐ´ÑÑÐ°Ð¼. Ð ÐµÑÐ»Ð¸ Ð²Ñ ÑÐ¶Ðµ Ð¾Ð¿Ð»Ð°ÑÐ¸Ð»Ð¸ Ð¼Ð°ÑÐ¸Ð½Ñ, Â«Ð¾ÑÐºÐ°ÑÐ¸ÑÑ Ð½Ð°Ð·Ð°Ð´Â» Ð¿Ð¾ÑÑÐ¸ Ð½ÐµÐ²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ â Ð¿ÑÐ¸ÑÐ¾Ð´Ð¸ÑÑÑ ÑÐµÑÐ°ÑÑ Ð²Ð¾Ð¿ÑÐ¾Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸, ÑÑÐ°ÑÑ Ð²ÑÐµÐ¼Ñ Ð¸ Ð´ÐµÐ½ÑÐ³Ð¸.",
          "ÐÐ°Ð¶Ð½Ð¾: ÑÑÐ¼Ð¼Ñ Ð¸ Ð¿ÑÐ°Ð²Ð¸Ð»Ð° Ð¼Ð¾Ð³ÑÑ Ð¾ÑÐ»Ð¸ÑÐ°ÑÑÑÑ Ð¿Ð¾ ÑÐµÐ³Ð¸Ð¾Ð½Ñ Ð¸ Ð¿Ð¾ ÐºÐ¾Ð½ÐºÑÐµÑÐ½Ð¾Ð¹ ÑÐ¸ÑÑÐ°ÑÐ¸Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ. ÐÐ° ÐºÐ¾Ð½ÑÑÐ»ÑÑÐ°ÑÐ¸Ð¸ Ð¼Ñ Ð½Ðµ Â«ÑÐ³Ð°Ð´ÑÐ²Ð°ÐµÐ¼Â», Ð° ÑÑÐ¸ÑÐ°ÐµÐ¼ ÑÑÐµÐ½Ð°ÑÐ¸Ð¸ Ð¸ Ð·Ð°ÑÐ°Ð½ÐµÐµ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÐµÐ¼ Ð´Ð¸Ð°Ð¿Ð°Ð·Ð¾Ð½ ÑÐ°ÑÑÐ¾Ð´Ð¾Ð², ÑÑÐ¾Ð±Ñ Ð²Ñ Ð¿Ð¾Ð½Ð¸Ð¼Ð°Ð»Ð¸ ÑÐµÐ°Ð»ÑÐ½ÑÑ ÑÐµÐ½Ñ Ð¿ÑÐ¸Ð²Ð¾Ð·Ð° Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ.",
        ],
        h3: [
          {
            t: "ÐÐ¾ÑÐµÐ¼Ñ Â«Ð´ÐµÑÐµÐ²Ð¾ ÐºÑÐ¿Ð¸Ð»Â» â  Â«Ð´ÐµÑÐµÐ²Ð¾ Ð¿Ð¾ÑÑÐ°Ð²Ð¸Ð» Ð½Ð° ÑÑÑÑÂ»",
            p: [
              "ÐÐ¾ÐºÑÐ¿ÐºÐ° â ÑÑÐ¾ ÑÐ¾Ð»ÑÐºÐ¾ Ð²ÑÐ¾Ð´. ÐÑÐ¸Ð±ÐºÐ° Ð½Ð°ÑÐ¸Ð½Ð°ÐµÑÑÑ, ÐºÐ¾Ð³Ð´Ð° ÑÐµÐ»Ð¾Ð²ÐµÐº ÑÐ¶Ðµ Ð¾Ð¿Ð»Ð°ÑÐ¸Ð» Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ, Ð° Ð·Ð°ÑÐµÐ¼ ÑÐ·Ð½Ð°ÑÑ, ÑÑÐ¾ Ð¿Ð¾ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ°Ð¼ Ð¸Ð»Ð¸ ÑÐºÐ¾Ð»Ð¾Ð³Ð¸Ð¸ ÑÑÐµÐ±ÑÐµÑÑÑ Ð´ÑÑÐ³Ð¾Ð¹ Ð¿ÑÑÑ Ð¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸Ñ, Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»ÑÐ½ÑÐµ ÑÐ¿ÑÐ°Ð²ÐºÐ¸ Ð¸Ð»Ð¸ Ð¿ÐµÑÐµÐ´ÐµÐ»ÐºÐ¸. Ð Ð¸ÑÐ¾Ð³Ðµ ÑÑÐ¾ÐºÐ¸ ÑÐ°ÑÑÑÐ³Ð¸Ð²Ð°ÑÑÑÑ, Ð° Ð±ÑÐ´Ð¶ÐµÑ ÑÐ°ÑÑÑÑ.",
            ],
          },
        ],
      },
      {
        h2: "ÐÐ°ÐºÐ¾Ð¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð²ÑÐ³Ð¾Ð´Ð½ÐµÐµ Ð²ÑÐµÐ³Ð¾ Ð²ÐµÐ·ÑÐ¸ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ: Ð¼Ð°ÑÐºÐ¸ Ð¸ Ð¼Ð¾Ð´ÐµÐ»Ð¸",
        p: [
          "ÐÐµ ÐºÐ°Ð¶Ð´ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ð¾ Ð²ÑÐ³Ð¾Ð´ÐµÐ½ Ð´Ð»Ñ Ð¿ÑÐ¸Ð²Ð¾Ð·Ð° Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸. Ð Ð°Ð·ÑÑÐ² Ð¼ÐµÐ¶Ð´Ñ ÑÐµÐ½Ð¾Ð¹ Ð² ÐÐ²ÑÐ¾Ð¿Ðµ Ð¸ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼ ÑÑÐ½ÐºÐ¾Ð¼ Ð·Ð°Ð²Ð¸ÑÐ¸Ñ Ð¾Ñ ÑÐµÐ³Ð¼ÐµÐ½ÑÐ° â Ð¸ Ð² Ð¿ÑÐµÐ¼Ð¸ÑÐ¼-ÐºÐ»Ð°ÑÑÐµ Ð¾Ð½ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÐµÐ½.",
         
          "<strong>Ð¢Ð¾Ð¿ - 5 Ð°Ð²ÑÐ¾ Ð¿Ð¾ Ð²ÑÐ³Ð¾Ð´Ðµ Ð¿ÑÐ¸Ð³Ð¾Ð³Ð½Ð° Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸, Ð¸ÑÑÐ¾Ð´Ñ Ð¸Ð· Ð¿ÑÐ°ÐºÑÐ¸ÐºÐ¸ Ð¸ ÑÑÑÐµÑÐ¾Ð²:</strong>",
          "Audi Q5 Ð¸ Q7 â ÑÐ°Ð¼ÑÐ¹ Ð¿Ð¾Ð¿ÑÐ»ÑÑÐ½ÑÐ¹ Ð·Ð°Ð¿ÑÐ¾Ñ ÑÑÐµÐ´Ð¸ Ð½Ð°ÑÐ¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ¾Ð² Ð¸ ÑÑÐ°Ð±Ð¸Ð»ÑÐ½Ð¾ Ð¾Ð´Ð¸Ð½ Ð¸Ð· Ð½Ð°Ð¸Ð±Ð¾Ð»ÐµÐµ Ð²ÑÐ³Ð¾Ð´Ð½ÑÑ. ÐÐ¸Ð·Ð¸Ð½Ð³Ð¾Ð²ÑÐµ Audi Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ â ÑÑÐ¾Ð¶ÐµÐ½Ð½ÑÐµ, Ñ ÑÐµÑÐ²Ð¸ÑÐ½Ð¾Ð¹ Ð¸ÑÑÐ¾ÑÐ¸ÐµÐ¹, Ð¸ ÑÐ°Ð·Ð½Ð¸ÑÐ° Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼ ÑÑÐ½ÐºÐ¾Ð¼ Ð·Ð´ÐµÑÑ ÑÐµÐ³ÑÐ»ÑÑÐ½Ð¾ ÑÐ¾ÑÑÐ°Ð²Ð»ÑÐµÑ 12 000â18 000 â¬.:",
          "BMW 5 ÑÐµÑÐ¸Ð¸ Ð¸ BMW X5 â Ð±Ð¸Ð·Ð½ÐµÑ-ÑÐµÐ´Ð°Ð½ Ð¸ SUV, ÐºÐ¾ÑÐ¾ÑÑÐµ Ð½ÐµÐ¼ÐµÑÐºÐ¸Ðµ ÐºÐ¾ÑÐ¿Ð¾ÑÐ°ÑÐ¸Ð²Ð½ÑÐµ Ð¿Ð°ÑÐºÐ¸ Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÑÑ ÐºÐ°Ð¶Ð´ÑÐµ 3 Ð³Ð¾Ð´Ð°. ÐÐ° ÑÑÐ½Ð¾Ðº Ð°ÑÐºÑÐ¸Ð¾Ð½Ð¾Ð² Ð²ÑÑÐ¾Ð´ÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ð¸ 2â4 Ð»ÐµÑ Ñ Ð¿ÑÐ¾Ð±ÐµÐ³Ð¾Ð¼ 40 000â70 000 ÐºÐ¼. Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ Ð¿Ð¾ ÑÑÐ°Ð²Ð½ÐµÐ½Ð¸Ñ Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼ ÑÐ°Ð»Ð¾Ð½Ð¾Ð¼ â 10 000â16 000 â¬.",
          "Mercedes E-ÐºÐ»Ð°ÑÑ, GLC Ð¸ GLE â ÑÑÐ¸ Ð¼Ð¾Ð´ÐµÐ»Ð¸, ÐºÐ¾ÑÐ¾ÑÑÐµ Ð»Ð¸Ð´Ð¸ÑÑÑÑ Ð¿Ð¾ Ð·Ð°Ð¿ÑÐ¾ÑÐ°Ð¼ ÑÑÐµÐ´Ð¸ ÑÑÑÑÐºÐ¾ÑÐ·ÑÑÐ½ÑÑ Ð¿Ð¾ÐºÑÐ¿Ð°ÑÐµÐ»ÐµÐ¹ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸. Mercedes Ð¸Ð· Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð³Ð¾ Ð»Ð¸Ð·Ð¸Ð½Ð³Ð° â ÑÑÐ¾, ÐºÐ°Ðº Ð¿ÑÐ°Ð²Ð¸Ð»Ð¾, Ð¿Ð¾Ð»Ð½Ð°Ñ ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑÐ°ÑÐ¸Ñ, Ð¾Ð´Ð¸Ð½ Ð²Ð»Ð°Ð´ÐµÐ»ÐµÑ, Ð¾ÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½ÑÐ¹ ÑÐµÑÐ²Ð¸Ñ. Ð Ð°Ð·ÑÑÐ² Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼ ÑÑÐ½ÐºÐ¾Ð¼ â 13 000â20 000 â¬.",
          "Porsche Cayenne â Ð² ÑÑÐ¾Ð¼ ÑÐµÐ³Ð¼ÐµÐ½ÑÐµ Ð°ÑÐºÑÐ¸Ð¾Ð½Ð½Ð°Ñ Ð»Ð¾Ð³Ð¸ÐºÐ° ÑÐ°Ð±Ð¾ÑÐ°ÐµÑ Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ ÑÐ¸Ð»ÑÐ½Ð¾: Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ðµ Ð´Ð¸Ð»ÐµÑÑ Ð½Ð°ÐºÑÑÑÐ¸Ð²Ð°ÑÑ Ð½Ð° Ð¿Ð¾Ð´ÐµÑÐ¶Ð°Ð½Ð½ÑÐµ Cayenne 20â25%, ÑÐ¾Ð³Ð´Ð° ÐºÐ°Ðº Ð½Ð° Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ ÑÐ°ÐºÐ¾Ð¹ Ð¶Ðµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ ÑÑÐ¾Ð´Ð¸Ñ Ð¿Ð¾ ÑÐµÐ°Ð»ÑÐ½Ð¾Ð¹ Ð¾ÑÐµÐ½Ð¾ÑÐ½Ð¾Ð¹ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸. Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ â Ð¾Ñ 15 000 â¬ Ð¸ Ð²ÑÑÐµ.",
          "Volkswagen Touareg â Ð½ÐµÐ´Ð¾Ð¾ÑÐµÐ½ÑÐ½Ð½ÑÐ¹ Ð²ÑÐ±Ð¾Ñ. ÐÐ¾ ÑÐ¾Ð¾ÑÐ½Ð¾ÑÐµÐ½Ð¸Ñ Ð½Ð°Ð´ÑÐ¶Ð½Ð¾ÑÑÑ/ÑÐµÐ½Ð° Ð¾Ð´Ð¸Ð½ Ð¸Ð· Ð»ÑÑÑÐ¸Ñ Ð²Ð°ÑÐ¸Ð°Ð½ÑÐ¾Ð² Ð´Ð»Ñ Ð¿ÑÐ¸Ð²Ð¾Ð·Ð°: ÑÐ¸ÑÐ¾ÐºÐ¸Ð¹ Ð²ÑÐ±Ð¾Ñ Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ð°Ñ, ÑÐ¼ÐµÑÐµÐ½Ð½ÑÐµ ÑÐ°ÑÑÐ¾Ð´Ñ Ð½Ð° Ð´Ð¾ÑÑÐ°Ð²ÐºÑ, ÑÐ¾ÑÐ¾ÑÐ°Ñ Ð»Ð¸ÐºÐ²Ð¸Ð´Ð½Ð¾ÑÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸.",
          "<strong>ÐÐ¾Ð³Ð´Ð° Ð²ÐµÐ·ÑÐ¸ Ð½Ðµ ÑÑÐ¾Ð¸Ñ:</strong>",
          "ÐÐ¾Ð³Ð´Ð° Ð²ÐµÐ·ÑÐ¸ Ð½Ðµ ÑÑÐ¾Ð¸Ñ: ÐÐµÐ±Ð¾Ð»ÑÑÐ¸Ðµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ð¸ Ð´Ð¾ 15 000 â¬ â Volkswagen Golf, Seat Leon, Skoda Octavia. ÐÐ° ÑÑÐ¾Ð¼ ÑÐµÐ³Ð¼ÐµÐ½ÑÐµ ÑÐ°ÑÑÐ¾Ð´Ñ Ð½Ð° Ð»Ð¾Ð³Ð¸ÑÑÐ¸ÐºÑ Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ ÑÑÐµÐ´Ð°ÑÑ Ð±Ð¾Ð»ÑÑÑÑ ÑÐ°ÑÑÑ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ð¸. ÐÐµÐ·ÑÐ¸ ÑÐ°ÐºÐ¾Ð¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ ÑÐ°Ð´Ð¸ 1 500â2 500 â¬ ÑÐ°Ð·Ð½Ð¸ÑÑ Ð½ÐµÑÐµÐ»ÐµÑÐ¾Ð¾Ð±ÑÐ°Ð·Ð½Ð¾. ÐÑ Ð¿Ð¾Ð´Ð±ÐµÑÐµÐ¼ ÐÐ°Ð¼ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿Ð¾Ð´ ÐÐ°Ñ Ð±ÑÐ´Ð¶ÐµÑ ÑÐ°Ðº, ÑÑÐ¾Ð±Ñ ÑÐµÐ½Ð° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ðµ Ð±ÑÐ»Ð° ÑÐ°Ð²Ð½Ð° ÑÐ°ÑÑÐ¾Ð´Ð°Ð¼ Ð½Ð° ÐµÐ³Ð¾ Ð´Ð¾ÑÑÐ°Ð²ÐºÑ Ð¸ Ð¿ÐµÑÐµÐ¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸Ðµ, Ð¿Ð¾ÑÐ¾Ð¼Ñ ÑÑÐ¾ Ð¼Ñ ÑÐ°Ð±Ð¾ÑÐ°ÐµÐ¼ Ð¿Ð¾ Ð²ÑÐµÐ¹ ÐÐ²ÑÐ¾Ð¿Ðµ, Ð²ÐºÐ»ÑÑÐ°Ñ ÑÑÑÐ°Ð½Ñ ÐÐ°Ð»ÑÐ¸Ð¸, Ð³Ð´Ðµ ÑÐµÐ½Ð° Ð·Ð½Ð°ÑÐ¸ÑÐµÐ»ÑÐ½Ð¾ Ð½Ð¸Ð¶Ðµ Ð½Ð° Ð°Ð½Ð°Ð»Ð¾Ð³Ð¸ÑÐ½ÑÐµ Ð¼Ð¾Ð´ÐµÐ»Ð¸ Ð² ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸",
        ],
        h3: [
          {
            t: "ÐÐ«ÐÐÐ",
            p: [
              "ÐÑÐ»Ð¸ Ð²Ñ ÑÐ°ÑÑÐ¼Ð°ÑÑÐ¸Ð²Ð°ÐµÑÐµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² ÑÐµÐ³Ð¼ÐµÐ½ÑÐµ Ð¾Ñ 20 000 â¬ â Ð¿ÑÐ¸Ð²Ð¾Ð· Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð¿Ð¾ÑÑÐ¸ Ð²ÑÐµÐ³Ð´Ð° Ð´Ð°ÑÑ Ð¾ÑÑÑÐ¸Ð¼ÑÑ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ. ÐÑÐ»Ð¸ ÐÑ ÑÐ°ÑÑÐ¸ÑÑÐ²Ð°ÐµÑÐµ Ð½Ð° Ð¼ÐµÐ½ÑÑÑÑ ÑÑÐ¼Ð¼Ñ - Ð½Ðµ Ð¿ÑÐ¾Ð±Ð»ÐµÐ¼Ð°: Ð¼Ñ Ð¿Ð¾Ð´Ð±ÐµÑÐµÐ¼ ÐÐ°Ð¼ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿Ð¾Ð´ ÐÐ°Ñ Ð±ÑÐ´Ð¶ÐµÑ, Ð·Ð°Ð¿ÑÐ¾Ñ. Ð¸ Ð²ÐºÑÑ. ÐÐ¾ÑÐ¾Ð¼Ñ ÑÑÐ¾ Ð¼Ñ Ð¾ÑÐ¸ÑÐ°Ð»ÑÐ½Ð¾ Ð·Ð°ÑÐµÐ³Ð¸ÑÑÑÐ¸ÑÐ¾Ð²Ð°Ð½Ñ ÐºÐ°Ðº Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ð°Ñ ÐÑÐ¿Ð°Ð½Ð¸Ð¸ Ð¸ ÐÐ²ÑÐ¾Ð¿Ñ, ÑÐ°Ðº Ð¸ Ð¿ÑÐ¸Ð²Ð¾Ð·Ð¸Ð¼ Ð¼Ð°ÑÐ¸Ð½Ñ, Ð²ÑÐºÑÐ¿Ð°Ñ Ð¸Ñ Ð¿Ð¾ ÑÐ°Ð·ÑÐ¼Ð½Ð¾Ð¹ ÑÐµÐ½Ðµ, ÑÐ°Ð¼, Ð³Ð´Ðµ ÑÑÐ¾ Ð±ÑÐ´ÐµÑ ÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¾Ð²Ð°ÑÑ ÐÐ°ÑÐ¸Ð¼ Ð¿Ð¾Ð¶ÐµÐ»Ð°Ð½Ð¸ÑÐ¼.  ÐÐ°Ð¿Ð¸ÑÐ¸ÑÐµ Ð½Ð°Ð¼, Ð·Ð°Ð¿Ð¾Ð»Ð½Ð¸ÑÐµ ÑÐ¾ÑÐ¼Ñ, ÑÑÐ¾ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½Ð¾, â Ð¼Ñ ÑÐ´ÐµÐ»Ð°ÐµÐ¼ ÐÐ°Ð¼ Ð²ÑÐ³Ð¾Ð´Ð½Ð¾Ðµ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ.",
              "ÐÑÐ¾ÑÑÐ¾ Ð½Ð°Ð¶Ð¼Ð¸ÑÐµ Ð½Ð° ÑÑÐ¾Ð¹ ÑÑÑÐ°Ð½Ð¸ÑÐµ ÐºÐ½Ð¾Ð¿ÐºÑ ÑÑÑÑ Ð½Ð¸Ð¶Ðµ ÑÑÐ¾Ð³Ð¾ Ð±Ð»Ð¾ÐºÐ°- ÐÐÐÐÐÐÐÐ¢Ð¬ Ð¤ÐÐ ÐÐ£ ÐÐÐÐÐÐ Ð ÐÐÐ¢Ð",
            ],
          },
        ],
      },
      {
        h2: "ÐÐ¾ÑÐ°Ð³Ð¾Ð²ÑÐ¹ Ð¿Ð»Ð°Ð½: ÐºÐ°Ðº Ð¿ÑÐ¸Ð²ÐµÐ·ÑÐ¸ Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ Ð±ÐµÐ· ÑÑÑÐ¿ÑÐ¸Ð·Ð¾Ð²",
        p: [
          "ÐÐ¾Ð»ÑÑÐ¸Ð½ÑÑÐ²Ð¾ Ð»ÑÐ´ÐµÐ¹ ÑÐµÑÑÑÑ Ð´ÐµÐ½ÑÐ³Ð¸ Ð½Ðµ Ð½Ð° Ð¿Ð¾ÐºÑÐ¿ÐºÐµ â Ð° Ð¿Ð¾ÑÐ»Ðµ Ð½ÐµÑ. ÐÐµÐ¿ÑÐµÐ´Ð²Ð¸Ð´ÐµÐ½Ð½ÑÐµ Ð½Ð°Ð»Ð¾Ð³Ð¸, Ð¿ÑÐ¾Ð²Ð°Ð»ÐµÐ½Ð½ÑÐ¹ ITV, Ð½ÐµÐ¿ÑÐ°Ð²Ð¸Ð»ÑÐ½Ð¾ Ð¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð½ÑÐµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ. ÐÐ¾Ñ Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°ÑÐµÐ»ÑÐ½Ð¾ÑÑÑ, ÐºÐ¾ÑÐ¾ÑÐ°Ñ ÑÑÐ¾ Ð¸ÑÐºÐ»ÑÑÐ°ÐµÑ.",
          "Ð¨Ð°Ð³ 1. ÐÐ¿ÑÐµÐ´ÐµÐ»Ð¸ÑÐµ Ð·Ð°Ð´Ð°ÑÑ Ð¸ Ð±ÑÐ´Ð¶ÐµÑ",
          "Ð¡ÑÐ¾ÑÐ¼ÑÐ»Ð¸ÑÑÐ¹ÑÐµ ÑÑÑÐºÐ¾: Ð¼Ð°ÑÐºÐ°, Ð¼Ð¾Ð´ÐµÐ»Ñ, Ð¶ÐµÐ»Ð°ÐµÐ¼ÑÐ¹ Ð¿ÑÐ¾Ð±ÐµÐ³, Ð³Ð¾Ð´ Ð²ÑÐ¿ÑÑÐºÐ° Ð¸ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½Ð°Ñ Ð¸ÑÐ¾Ð³Ð¾Ð²Ð°Ñ ÑÑÐ¼Ð¼Ð° Ð¿Ð¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ â Ð½Ðµ ÑÐµÐ½Ð° Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸, Ð° ÑÐ¸Ð½Ð°Ð»ÑÐ½Ð°Ñ ÑÐ¸ÑÑÐ° ÑÐ¾ Ð²ÑÐµÐ¼Ð¸ ÑÐ°ÑÑÐ¾Ð´Ð°Ð¼Ð¸.",
          "Ð¨Ð°Ð³ 2. ÐÐ¾Ð´Ð±ÐµÑÐ¸ÑÐµ Ð²Ð°ÑÐ¸Ð°Ð½ÑÑ",
          "ÐÐ¾Ð¸ÑÐº Ð²ÐµÐ´ÑÑÑÑ Ð¾Ð´Ð½Ð¾Ð²ÑÐµÐ¼ÐµÐ½Ð½Ð¾ Ð½Ð° Ð½ÐµÑÐºÐ¾Ð»ÑÐºÐ¸Ñ Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼Ð°Ñ: Ð´Ð¸Ð»ÐµÑÑÐºÐ¸Ðµ Ð¿Ð»Ð¾ÑÐ°Ð´ÐºÐ¸, ÑÐ°ÑÑÐ½ÑÐµ Ð¿ÑÐ¾Ð´Ð°Ð²ÑÑ, ÑÐ¿ÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐµ Ð°ÑÐºÑÐ¸Ð¾Ð½Ñ. ÐÐ°ÑÐ°Ð»Ð»ÐµÐ»ÑÐ½ÑÐ¹ Ð¿Ð¾Ð¸ÑÐº Ð´Ð°ÑÑ ÑÐµÐ°Ð»ÑÐ½ÑÑ ÐºÐ°ÑÑÐ¸Ð½Ñ ÑÑÐ½ÐºÐ° Ð¸ Ð»ÑÑÑÑÑ ÑÐµÐ½Ñ.",
          "Ð¨Ð°Ð³ 3. ÐÑÐ¾Ð²ÐµÑÑÑÐµ Ð¸ÑÑÐ¾ÑÐ¸Ñ Ð¸ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ Ð´Ð¾ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸",
          "VIN-Ð¿ÑÐ¾Ð²ÐµÑÐºÐ°, Ð¸ÑÑÐ¾ÑÐ¸Ñ ÐÐ¢Ð, ÑÐµÐ°Ð»ÑÐ½ÑÐ¹ Ð¿ÑÐ¾Ð±ÐµÐ³, ÑÑÐ¸Ð´Ð¸ÑÐµÑÐºÐ°Ñ ÑÐ¸ÑÑÐ¾ÑÐ° â Ð²ÑÑ ÑÑÐ¾ Ð´Ð¾ ÑÐ´ÐµÐ»ÐºÐ¸, Ð½Ðµ Ð¿Ð¾ÑÐ»Ðµ. ÐÑÐ¸Ð±ÐºÐ° Ð½Ð° ÑÑÐ¾Ð¼ ÑÑÐ°Ð¿Ðµ ÑÑÐ¾Ð¸Ñ Ð´Ð¾ÑÐ¾Ð¶Ðµ Ð²ÑÐµÐ³Ð¾ Ð¾ÑÑÐ°Ð»ÑÐ½Ð¾Ð³Ð¾.",
          "Ð¨Ð°Ð³ 4. Ð Ð°ÑÑÑÐ¸ÑÐ°Ð¹ÑÐµ Ð¸ÑÐ¾Ð³Ð¾Ð²ÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ",
          "Ð¦ÐµÐ½Ð° Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸ + Ð´Ð¾ÑÑÐ°Ð²ÐºÐ° + ITV + DGT + IEDMT + gestorÃ­a. Ð¢Ð¾Ð»ÑÐºÐ¾ Ð²Ð¸Ð´Ñ Ð¿Ð¾Ð»Ð½ÑÑ ÑÐ¸ÑÑÑ, Ð¿ÑÐ¸Ð½Ð¸Ð¼Ð°Ð¹ÑÐµ ÑÐµÑÐµÐ½Ð¸Ðµ Ð¾ Ð¿Ð¾ÐºÑÐ¿ÐºÐµ.",
          "Ð¨Ð°Ð³ 5. ÐÐ¾ÐºÑÐ¿ÐºÐ° ÑÐµÑÐµÐ· Ð°ÑÐºÑÐ¸Ð¾Ð½ â Ð²Ð°Ð¶Ð½ÑÐ¹ Ð½ÑÐ°Ð½Ñ",
          "ÐÑÐ»Ð¸ Ð²ÑÐ±ÑÐ°Ð½Ð½ÑÐ¹ Ð²Ð°Ð¼Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿ÑÐ¾Ð´Ð°ÑÑÑÑ Ð½Ð° ÑÐ¿ÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð¸ÑÐ¾Ð²Ð°Ð½Ð½Ð¾Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ â Ð½Ð°Ð¿ÑÐ¸Ð¼ÐµÑ, Ð½Ð° Ð¸Ð·Ð²ÐµÑÑÐ½Ð¾Ð¼ Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ OPENLINE â Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼Ð¾ Ð¿Ð¾Ð½Ð¸Ð¼Ð°ÑÑ: ÑÐ°ÐºÐ¸Ðµ Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼Ñ ÑÐ°Ð±Ð¾ÑÐ°ÑÑ Ð¸ÑÐºÐ»ÑÑÐ¸ÑÐµÐ»ÑÐ½Ð¾ Ñ Ð°ÐºÐºÑÐµÐ´Ð¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¼Ð¸ Ð¿ÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐ¼Ð¸ ÑÑÐ°ÑÑÐ½Ð¸ÐºÐ°Ð¼Ð¸ ÑÑÐ½ÐºÐ°. Ð§Ð°ÑÑÐ½Ð¾Ðµ Ð»Ð¸ÑÐ¾ Ð½Ðµ ÑÐ¼Ð¾Ð¶ÐµÑ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾ Ð·Ð°ÑÐµÐ³Ð¸ÑÑÑÐ¸ÑÐ¾Ð²Ð°ÑÑÑÑ Ð¸ ÑÑÐ°ÑÑÐ²Ð¾Ð²Ð°ÑÑ Ð² ÑÐ¾ÑÐ³Ð°Ñ.",
          "Ð ÑÑÐ¾Ð¼ ÑÐ»ÑÑÐ°Ðµ ÐºÐ»Ð¸ÐµÐ½ÑÑ Ð¾Ð±ÑÐ°ÑÐ°ÑÑÑÑ Ðº Ð½Ð°Ð¼. ÐÑ Ð·Ð°ÐºÐ»ÑÑÐ°ÐµÐ¼ Ð´ÐµÑÐ°Ð»ÑÐ½ÑÐ¹ Ð´Ð¾Ð³Ð¾Ð²Ð¾Ñ, Ð² ÐºÐ¾ÑÐ¾ÑÐ¾Ð¼ ÑÐ¸ÐºÑÐ¸ÑÑÐµÐ¼ ÐºÐ¾Ð½ÐºÑÐµÑÐ½ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½ÑÑ ÑÐµÐ½Ñ, ÐºÐ¾ÑÐ¾ÑÑÑ ÐºÐ»Ð¸ÐµÐ½Ñ Ð³Ð¾ÑÐ¾Ð² Ð·Ð°Ð¿Ð»Ð°ÑÐ¸ÑÑ. ÐÐ¾ÐºÑÐ¿ÐºÐ° Ð¾ÑÑÑÐµÑÑÐ²Ð»ÑÐµÑÑÑ ÑÑÑÐ¾Ð³Ð¾ Ð² ÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¸Ð¸ Ñ ÑÑÐ»Ð¾Ð²Ð¸ÑÐ¼Ð¸ ÐºÐ»Ð¸ÐµÐ½ÑÐ°. ÐÐ°Ð¶Ð½Ð¾ ÑÑÐ¸ÑÑÐ²Ð°ÑÑ: Ð² ÑÐ»ÑÑÐ°Ðµ Ð¿Ð¾Ð±ÐµÐ´Ñ Ð² ÑÐ¾ÑÐ³Ð°Ñ Ð¾Ð¿Ð»Ð°ÑÐ° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±ÑÑÑ Ð¿ÑÐ¾Ð¸Ð·Ð²ÐµÐ´ÐµÐ½Ð° Ð² ÑÐµÑÐµÐ½Ð¸Ðµ 5 ÑÐ°Ð±Ð¾ÑÐ¸Ñ Ð´Ð½ÐµÐ¹ Ñ Ð¼Ð¾Ð¼ÐµÐ½ÑÐ° Ð¾ÐºÐ¾Ð½ÑÐ°Ð½Ð¸Ñ Ð°ÑÐºÑÐ¸Ð¾Ð½Ð° â ÑÑÐ¾ Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÐ½Ð¾Ðµ ÑÑÐµÐ±Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼Ñ.",
          "Ð¨Ð°Ð³ 6. ÐÑÐ³Ð°Ð½Ð¸Ð·ÑÐ¹ÑÐµ Ð´Ð¾ÑÑÐ°Ð²ÐºÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ",
          "ÐÐ²ÑÐ¾Ð²Ð¾Ð· Ð¸Ð»Ð¸ Ð¸Ð½Ð´Ð¸Ð²Ð¸Ð´ÑÐ°Ð»ÑÐ½ÑÐ¹ Ð¿ÐµÑÐµÐ³Ð¾Ð½ â Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑÐ¸ Ð¾Ñ ÑÑÐ¾ÑÐ½Ð¾ÑÑÐ¸. Ð¡ÑÑÐ°ÑÐ¾Ð²ÐºÐ° Ð½Ð° Ð²ÐµÑÑ Ð¼Ð°ÑÑÑÑÑ Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÐ½Ð°.",
          "Ð¨Ð°Ð³ 7. ÐÑÐ¸ÑÐ¼ÐºÐ° Ð¸ Ð¿Ð¾Ð´Ð³Ð¾ÑÐ¾Ð²ÐºÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° Ð½Ð°ÑÐµÐ¹ ÑÑÐ°Ð½ÑÐ¸Ð¸ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ",
          "ÐÐ¾ Ð¶ÐµÐ»Ð°Ð½Ð¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ° Ð¼Ñ Ð¿ÑÐ¸Ð½Ð¸Ð¼Ð°ÐµÐ¼ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½ÐµÐ¿Ð¾ÑÑÐµÐ´ÑÑÐ²ÐµÐ½Ð½Ð¾ Ð½Ð° Ð½Ð°ÑÐµÐ¹ ÑÑÐ°Ð½ÑÐ¸Ð¸ ÑÐµÑÐ½Ð¸ÑÐµÑÐºÐ¾Ð³Ð¾ Ð¾Ð±ÑÐ»ÑÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ. ÐÑÐ¾Ð²Ð¾Ð´Ð¸Ð¼ Ð¿Ð¾Ð»Ð½ÑÑ Ð´Ð¸Ð°Ð³Ð½Ð¾ÑÑÐ¸ÐºÑ, Ð´ÐµÑÐµÐ¹Ð»Ð¸Ð½Ð³ Ð¸ Ð¿ÑÐ¸Ð²Ð¾Ð´Ð¸Ð¼ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² Ð¿Ð¾ÑÑÐ´Ð¾Ðº Ð¿ÐµÑÐµÐ´ Ð¿ÐµÑÐµÐ´Ð°ÑÐµÐ¹ Ð²Ð»Ð°Ð´ÐµÐ»ÑÑÑ. ÐÐ° Ð²ÐµÑÑ ÑÑÐ¾Ñ Ð¿ÐµÑÐ¸Ð¾Ð´ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑÑ Ð¿Ð¾Ð´ Ð½Ð°ÑÐ¸Ð¼ ÐºÐ¾Ð½ÑÑÐ¾Ð»ÐµÐ¼ Ð¸ ÑÑÐ°Ð½Ð¸ÑÑÑ Ð½Ð° Ð½Ð°ÑÐµÐ¹ ÑÐµÑÑÐ¸ÑÐ¾ÑÐ¸Ð¸.",
          "Ð¨Ð°Ð³ 8. ÐÑÐ¾Ð¹Ð´Ð¸ÑÐµ ITV",
          "Ð¢ÐµÑÐ½Ð¸ÑÐµÑÐºÐ¸Ð¹ Ð¾ÑÐ¼Ð¾ÑÑ Ñ Ð¿ÐµÑÐµÐ²Ð¾Ð´ÑÐ¸ÐºÐ¾Ð¼ â ÐºÑÐ¸ÑÐ¸ÑÐµÑÐºÐ¸ Ð²Ð°Ð¶Ð½ÑÐ¹ ÑÑÐ°Ð¿. ÐÐ°Ñ Ð¼ÐµÐ½ÐµÐ´Ð¶ÐµÑ Ð¿ÑÐ¸ÑÑÑÑÑÐ²ÑÐµÑ Ð»Ð¸ÑÐ½Ð¾, ÑÑÐ¾Ð±Ñ ÑÐ½ÑÑÑ ÑÐ·ÑÐºÐ¾Ð²Ð¾Ð¹ Ð±Ð°ÑÑÐµÑ Ð¸ Ð³Ð°ÑÐ°Ð½ÑÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÑÐ¿ÐµÑÐ½Ð¾Ðµ Ð¿ÑÐ¾ÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ðµ.",
          "Ð¨Ð°Ð³ 9. ÐÑÐ¾ÑÐ¼Ð¸ÑÐµ DGT Ð¸ Ð¿Ð¾Ð»ÑÑÐ¸ÑÐµ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ðµ Ð½Ð¾Ð¼ÐµÑÐ°",
          "ÐÐ¾Ð´Ð°ÑÐ° Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð², ÑÐ¿Ð»Ð°ÑÐ° IEDMT, Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ðµ ÑÐµÑÐ¿Ð°ÑÐ¿Ð¾ÑÑÐ° Ð¸ Ð½Ð¾Ð¼ÐµÑÐ½ÑÑ Ð·Ð½Ð°ÐºÐ¾Ð². Ð¡ ÑÑÐ¾Ð³Ð¾ Ð¼Ð¾Ð¼ÐµÐ½ÑÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿Ð¾Ð»Ð½Ð¾ÑÑÑÑ Ð»ÐµÐ³Ð°Ð»ÐµÐ½ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸."
        ],
        h3: [
          {
            t: "",
            p: [
              "ÐÐ»Ð°Ð½Ð¸ÑÑÐµÑÐµ ÑÐ´ÐµÐ»Ð°ÑÑ ÑÑÐ¾ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾? ÐÐ°ÑÐ° ÐºÐ¾Ð½ÑÑÐ»ÑÑÐ°ÑÐ¸Ñ Ð·Ð°ÐºÑÑÐ²Ð°ÐµÑ ÑÐ°Ð¼ÑÐ¹ Ð´Ð¾ÑÐ¾Ð³Ð¾Ð¹ ÑÐ¸ÑÐº â Ð¾ÑÐ¸Ð±ÐºÐ¸ Ð´Ð¾ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸. ÐÑ Ð¿Ð¾Ð»ÑÑÐ°ÐµÑÐµ Ð¿Ð»Ð°Ð½ Ð¿Ð¾Ð´ Ð²Ð°ÑÑ ÐºÐ¾Ð½ÐºÑÐµÑÐ½ÑÑ ÑÐ¸ÑÑÐ°ÑÐ¸Ñ, ÑÐ¿Ð¸ÑÐ¾Ðº Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð² Ð¸ Ð¿ÑÐµÐ´Ð²Ð°ÑÐ¸ÑÐµÐ»ÑÐ½ÑÐ¹ ÑÐ¸Ð½Ð°Ð½ÑÐ¾Ð²ÑÐ¹ ÑÐ°ÑÑÑÑ. Ð­ÑÐ¾ Ð´ÐµÑÐµÐ²Ð»Ðµ, ÑÐµÐ¼ Ð¾Ð´Ð¸Ð½ Â«Ð½ÐµÐ¾Ð¶Ð¸Ð´Ð°Ð½Ð½ÑÐ¹Â» Ð¿Ð»Ð°ÑÑÐ¶ Ð¿Ð¾ÑÐ»Ðµ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸.",
              "Ð¥Ð¾ÑÐ¸ÑÐµ ÑÐµÐ°Ð»ÑÐ½ÑÑ ÑÐµÐ½Ñ Ð´Ð¾ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸? ÐÑÑÐ°Ð²ÑÑÐµ Ð·Ð°ÑÐ²ÐºÑ  â Ð·Ð°ÑÐ¸ÐºÑÐ¸ÑÑÐµÐ¼ Ð²Ð°ÑÑ Ð¼Ð¾Ð´ÐµÐ»Ñ ÑÐ°ÑÑÐ¾Ð´Ð¾Ð², ÑÑÐ¾ÐºÐ¸ Ð¸ Ð¼Ð°ÑÑÑÑÑ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸.",
              "ÐÐ¾Ð¶ÐµÐ¼ ÑÐ´ÐµÐ»Ð°ÑÑ Ð¿Ð¾Ð´Ð±Ð¾Ñ Ð°Ð²ÑÐ¾ Ð´Ð»Ñ ÐÐ°Ñ, ÑÑÐ¾ ÑÑÑÐµÐºÑÐ¸Ð²Ð½ÐµÐµ, ÑÐµÐ¼ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½ÑÐ¹ Ð¿Ð¾Ð¸ÑÐº. ÐÑÐ¾ÑÑÐ¾ Ð½Ð°Ð¶Ð¼Ð¸ÑÐµ ÐºÐ½Ð¾Ð¿ÐºÑ Ð½Ð¸Ð¶Ðµ - ÐÐÐÐÐÐÐÐ¢Ð¬ Ð¤ÐÐ ÐÐ£ ÐÐÐÐÐÐ Ð ÐÐÐ¢Ð."
            ],
          },
        ],
      },
    ],
    btnOrder: "ÐÐ¿Ð¸ÑÐ¸ÑÐµ Ð¶ÐµÐ»Ð°ÐµÐ¼ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ",
    whyTitle: "ÐÐ¾ÑÐµÐ¼Ñ Ð²ÑÐ³Ð¾Ð´Ð½Ð¾ Ð¿Ð¾ÐºÑÐ¿Ð°ÑÑ Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸?",
    whyItems: [
      {
        t: "Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ 15â25% Ð¿Ð¾ ÑÑÐ°Ð²Ð½ÐµÐ½Ð¸Ñ Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼ ÑÐ°Ð»Ð¾Ð½Ð¾Ð¼",
        d: "ÐÐ¾Ð³Ð´Ð° Ð²Ñ Ð¿Ð¾ÐºÑÐ¿Ð°ÐµÑÐµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¾Ð¼ Ð°Ð²ÑÐ¾ÑÐ°Ð»Ð¾Ð½Ðµ, Ð²Ñ Ð¿Ð»Ð°ÑÐ¸ÑÐµ Ð½Ðµ ÑÐ¾Ð»ÑÐºÐ¾ Ð·Ð° Ð¼Ð°ÑÐ¸Ð½Ñ. ÐÑ Ð¿Ð»Ð°ÑÐ¸ÑÐµ Ð·Ð° Ð°ÑÐµÐ½Ð´Ñ ÑÐ¾ÑÑÑÐ¼Ð°, Ð·Ð°ÑÐ¿Ð»Ð°ÑÑ Ð¼ÐµÐ½ÐµÐ´Ð¶ÐµÑÐ¾Ð², ÑÐµÐºÐ»Ð°Ð¼Ð½ÑÐµ ÐºÐ°Ð¼Ð¿Ð°Ð½Ð¸Ð¸ Ð¸ Ð¿ÑÐ¸Ð±ÑÐ»Ñ Ð´Ð¸Ð»ÐµÑÐ°. ÐÑÑ ÑÑÐ¾ Ð·Ð°ÑÐ¸ÑÐ¾ Ð² ÑÐµÐ½Ð½Ð¸Ðº Ð² Ð²Ð¸Ð´Ðµ ÑÐ¾ÑÐ³Ð¾Ð²Ð¾Ð¹ Ð½Ð°ÑÐµÐ½ÐºÐ¸ â Ð¾Ñ 15 Ð´Ð¾ 25% Ð¾Ñ ÑÐµÐ°Ð»ÑÐ½Ð¾Ð¹ ÑÑÐ½Ð¾ÑÐ½Ð¾Ð¹ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ. ÐÐ° Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ ÑÑÐ¾Ð¹ Ð½Ð°ÑÐµÐ½ÐºÐ¸ Ð½Ðµ ÑÑÑÐµÑÑÐ²ÑÐµÑ. ÐÐ¸Ð·Ð¸Ð½Ð³Ð¾Ð²ÑÐµ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸ Ð¸ ÐºÐ¾ÑÐ¿Ð¾ÑÐ°ÑÐ¸Ð²Ð½ÑÐµ Ð¿Ð°ÑÐºÐ¸ Ð¿ÑÐ¾Ð´Ð°ÑÑ Ð²Ð¾Ð·Ð²ÑÐ°ÑÑÐ½Ð½ÑÐµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ð¸ Ð¿Ð¾ ÑÐµÐ°Ð»ÑÐ½Ð¾Ð¹ ÑÑÐ½Ð¾ÑÐ½Ð¾Ð¹ ÑÐµÐ½Ðµ â Ð±ÐµÐ· Ð¿Ð¾ÑÑÐµÐ´Ð½Ð¸ÐºÐ° Ð¼ÐµÐ¶Ð´Ñ Ð²Ð°Ð¼Ð¸ Ð¸ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑÑ Ð¼Ð°ÑÐ¸Ð½Ñ. ÐÐ° Ð¿ÑÐ°ÐºÑÐ¸ÐºÐµ: Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑÑ 40 000 â¬ Ð² Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¾Ð¼ ÑÐ°Ð»Ð¾Ð½Ðµ Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ Ð² ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð±ÑÐ´ÐµÑ ÑÑÐ¾Ð¸ÑÑ 30 000â34 000 â¬. Ð Ð°Ð·Ð½Ð¸ÑÐ° â ÑÐµÐ°Ð»ÑÐ½ÑÐµ Ð´ÐµÐ½ÑÐ³Ð¸, ÐºÐ¾ÑÐ¾ÑÑÐµ Ð¾ÑÑÐ°ÑÑÑÑ Ñ Ð²Ð°Ñ.",
      },
      {
        t: "Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ Ð¾Ñ 10 000 Ð´Ð¾ 20 000 â¬ â ÑÐµÐ°Ð»ÑÐ½ÑÐµ ÑÐ¸ÑÑÑ ÑÐ´ÐµÐ»Ð¾Ðº",
        d: "Ð¦Ð¸ÑÑÑ Ð½Ð¸Ð¶Ðµ â Ð½Ðµ Ð¼Ð°ÑÐºÐµÑÐ¸Ð½Ð³Ð¾Ð²ÑÐµ Ð¾Ð±ÐµÑÐ°Ð½Ð¸Ñ. Ð­ÑÐ¾ ÑÐµÐ°Ð»ÑÐ½ÑÐµ ÑÐ´ÐµÐ»ÐºÐ¸, ÐºÐ¾ÑÐ¾ÑÑÐµ Ð¼Ñ Ð·Ð°ÐºÑÑÐ»Ð¸ Ð´Ð»Ñ Ð½Ð°ÑÐ¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ¾Ð².\n\nAudi Q5 40 TDI Â· 2020 Â· 56 358 ÐºÐ¼\nÐÑÐ¿Ð»ÐµÐ½ Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ: 24 000 â¬ Â· ÐÐ¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸: 28 500 â¬ Â· ÐÐ½Ð°Ð»Ð¾Ð³ Ð² Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ñ ÑÐ°Ð»Ð¾Ð½Ð°Ñ: Ð¾Ñ 42 800 â¬ Â· Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ°: 14 300 â¬\n\nBMW 5 ÑÐµÑÐ¸Ð¸ 520d Â· 2021 Â· 48 000 ÐºÐ¼\nÐÑÐ¿Ð»ÐµÐ½ Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ: 26 500 â¬ Â· ÐÐ¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸: 31 200 â¬ Â· ÐÐ½Ð°Ð»Ð¾Ð³ Ð² Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ñ ÑÐ°Ð»Ð¾Ð½Ð°Ñ: Ð¾Ñ 46 500 â¬ Â· Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ°: 15 300 â¬\n\nMercedes GLC 220d Â· 2021 Â· 52 000 ÐºÐ¼\nÐÑÐ¿Ð»ÐµÐ½ Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ: 29 000 â¬ Â· ÐÐ¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸: 34 000 â¬ Â· ÐÐ½Ð°Ð»Ð¾Ð³ Ð² Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ñ ÑÐ°Ð»Ð¾Ð½Ð°Ñ: Ð¾Ñ 51 000 â¬ Â· Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ°: 17 000 â¬\n\nÐÐ°Ð¿Ð¾Ð»Ð½Ð¸ÑÐµ ÑÐ¾ÑÐ¼Ñ Ð¿Ð¾Ð´Ð±Ð¾ÑÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° ÑÑÐ¾Ð¹ ÑÑÑÐ°Ð½Ð¸ÑÐµ â Ð¸ Ð¼Ñ Ð½Ð°Ð¹Ð´ÑÐ¼ Ð´Ð»Ñ Ð²Ð°Ñ Ð¸Ð¼ÐµÐ½Ð½Ð¾ ÑÐ¾Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ, ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð²Ñ Ð¸ÑÐµÑÐµ.",
      },
      {
        t: "ÐÐ°ÑÐ°Ð½ÑÐ¸Ñ Ð¿ÑÐ¾Ð¸Ð·Ð²Ð¾Ð´Ð¸ÑÐµÐ»Ñ ÑÐ¾ÑÑÐ°Ð½ÑÐµÑÑÑ",
        d: "ÐÐ´Ð¸Ð½ Ð¸Ð· ÑÐ°Ð¼ÑÑ ÑÐ°ÑÑÑÑ Ð²Ð¾Ð¿ÑÐ¾ÑÐ¾Ð²: Â«ÐÑÐ»Ð¸ Ñ ÐºÑÐ¿Ð»Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð¸ Ð¿ÑÐ¸Ð²ÐµÐ·Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ â ÑÐ¾ÑÑÐ°Ð½Ð¸ÑÑÑ Ð»Ð¸ Ð³Ð°ÑÐ°Ð½ÑÐ¸Ñ Ð¿ÑÐ¾Ð¸Ð·Ð²Ð¾Ð´Ð¸ÑÐµÐ»Ñ?Â» ÐÑÐ²ÐµÑ: Ð´Ð°, ÐµÑÐ»Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑÑ Ð² Ð³Ð°ÑÐ°Ð½ÑÐ¸Ð¹Ð½Ð¾Ð¼ ÑÑÐ¾ÐºÐµ.\n\nÐÐ°ÑÐ°Ð½ÑÐ¸Ñ Ð½Ð° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ð¸ ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¸Ñ Ð¿ÑÐ¾Ð¸Ð·Ð²Ð¾Ð´Ð¸ÑÐµÐ»ÐµÐ¹ â BMW, Mercedes, Audi, Volkswagen, Skoda, Volvo Ð¸ Ð´ÑÑÐ³Ð¸Ñ â ÑÐ²Ð»ÑÐµÑÑÑ Ð¾Ð±ÑÐµÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¾Ð¹. ÐÐ½Ð° Ð´ÐµÐ¹ÑÑÐ²ÑÐµÑ Ð²Ð¾ Ð²ÑÐµÑ ÑÑÑÐ°Ð½Ð°Ñ ÐÐ²ÑÐ¾ÑÐ¾ÑÐ·Ð° Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ Ð¾Ñ ÑÐ¾Ð³Ð¾, Ð² ÐºÐ°ÐºÐ¾Ð¹ ÑÑÑÐ°Ð½Ðµ Ð±ÑÐ» ÐºÑÐ¿Ð»ÐµÐ½ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ. ÐÐµÑÐµÐ¼ÐµÑÐµÐ½Ð¸Ðµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ Ð½Ðµ Ð¿ÑÐµÑÑÐ²Ð°ÐµÑ Ð¸ Ð½Ðµ Ð°Ð½Ð½ÑÐ»Ð¸ÑÑÐµÑ Ð³Ð°ÑÐ°Ð½ÑÐ¸Ñ.\n\nÐÐ´Ð¸Ð½ÑÑÐ²ÐµÐ½Ð½Ð¾Ðµ ÑÑÐ»Ð¾Ð²Ð¸Ðµ: Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð¾Ð±ÑÐ»ÑÐ¶Ð¸Ð²Ð°ÑÑÑÑ Ñ Ð¾ÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½Ð¾Ð³Ð¾ Ð´Ð¸Ð»ÐµÑÐ° ÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²ÑÑÑÐµÐ¹ Ð¼Ð°ÑÐºÐ¸ â Ð² Ð»ÑÐ±Ð¾Ð¹ ÑÑÑÐ°Ð½Ðµ ÐÐ¡, Ð²ÐºÐ»ÑÑÐ°Ñ ÐÑÐ¿Ð°Ð½Ð¸Ñ.\n\nÐÐ°Ð¶Ð½Ð¾: ÑÑÐ¾ ÐºÐ°ÑÐ°ÐµÑÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»ÐµÐ¹, ÐºÑÐ¿Ð»ÐµÐ½Ð½ÑÑ Ñ Ð¾ÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½ÑÑ Ð´Ð¸Ð»ÐµÑÐ¾Ð² Ð¸Ð»Ð¸ Ð»Ð¸Ð·Ð¸Ð½Ð³Ð¾Ð²ÑÑ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¹ Ñ Ð¾ÑÐ¸Ð³Ð¸Ð½Ð°Ð»ÑÐ½Ð¾Ð¹ ÑÐµÑÐ²Ð¸ÑÐ½Ð¾Ð¹ Ð¸ÑÑÐ¾ÑÐ¸ÐµÐ¹. ÐÐ¼ÐµÐ½Ð½Ð¾ Ñ ÑÐ°ÐºÐ¸Ð¼Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»ÑÐ¼Ð¸ Ð¼Ñ ÑÐ°Ð±Ð¾ÑÐ°ÐµÐ¼.",
      },
      {
        t: "ÐÐ¾Ð»Ð½Ð°Ñ Ð¸ÑÑÐ¾ÑÐ¸Ñ Ð´Ð¾ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸ â Ð±ÐµÐ· ÐÐ¢Ð Ð¸ ÑÐºÑÑÑÐ¾Ðº Ð¿ÑÐ¾Ð±ÐµÐ³Ð°",
        d: "Ð¡ÑÑÐ°Ñ ÐºÑÐ¿Ð¸ÑÑ Â«Ð±Ð¸ÑÑÑÂ» Ð¼Ð°ÑÐ¸Ð½Ñ Ð¸Ð»Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ ÑÐ¾ ÑÐºÑÑÑÐµÐ½Ð½ÑÐ¼ Ð¿ÑÐ¾Ð±ÐµÐ³Ð¾Ð¼ â ÑÑÐ¾ Ð³Ð»Ð°Ð²Ð½Ð¾Ðµ, ÑÑÐ¾ Ð¾ÑÑÐ°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÑ Ð¿Ð¾ÐºÑÐ¿Ð°ÑÐµÐ»ÐµÐ¹. Ð ÑÑÐ¾ Ð¿ÑÐ°Ð²Ð¸Ð»ÑÐ½ÑÐ¹ ÑÑÑÐ°Ñ: Ð½Ð° ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¾Ð¼ ÑÑÐ½ÐºÐµ ÑÐ°ÐºÐ¸Ðµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ð¸ ÑÑÑÐµÑÑÐ²ÑÑÑ. ÐÐ¼ÐµÐ½Ð½Ð¾ Ð¿Ð¾ÑÑÐ¾Ð¼Ñ Ð¼Ñ Ð½Ðµ ÑÑÐ°ÑÑÐ²ÑÐµÐ¼ Ð² ÑÐ¾ÑÐ³Ð°Ñ Ð´Ð¾ ÑÐµÑ Ð¿Ð¾Ñ, Ð¿Ð¾ÐºÐ° Ð½Ðµ Ð¿ÑÐ¾Ð²ÐµÐ´ÑÐ¼ Ð¿Ð¾Ð»Ð½ÑÑ Ð¿ÑÐ¾Ð²ÐµÑÐºÑ ÐºÐ°Ð¶Ð´Ð¾Ð³Ð¾ Ð»Ð¾ÑÐ°.\n\nÐ§ÑÐ¾ Ð¼Ñ Ð¿ÑÐ¾Ð²ÐµÑÑÐµÐ¼:\nâ Ð ÐµÐ°Ð»ÑÐ½ÑÐ¹ Ð¿ÑÐ¾Ð±ÐµÐ³ ÑÐµÑÐµÐ· Ð½ÐµÐ¼ÐµÑÐºÐ¸Ðµ Ð¸ ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¸Ðµ Ð±Ð°Ð·Ñ Ð´Ð°Ð½Ð½ÑÑ, ÑÐ²ÐµÑÐµÐ½Ð½ÑÐ¹ Ñ ÑÐµÑÐ²Ð¸ÑÐ½Ð¾Ð¹ Ð¸ÑÑÐ¾ÑÐ¸ÐµÐ¹\nâ ÐÑÑÐ¾ÑÐ¸Ñ ÐÐ¢Ð: ÑÑÑÐ°ÑÐ¾Ð²ÑÐµ ÑÐ»ÑÑÐ°Ð¸, ÐºÑÐ·Ð¾Ð²Ð½ÑÐµ ÑÐµÐ¼Ð¾Ð½ÑÑ, Ð·Ð°Ð¼ÐµÐ½Ñ Ð´ÐµÑÐ°Ð»ÐµÐ¹ â Ð²ÐºÐ»ÑÑÐ°Ñ ÑÐºÑÑÑÑÐµ Ð¿Ð¾Ð²ÑÐµÐ¶Ð´ÐµÐ½Ð¸Ñ ÑÐµÑÐµÐ· Ð¿ÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐµ Ð·Ð°ÐºÑÑÑÑÐµ Ð¸ÑÑÐ¾ÑÐ½Ð¸ÐºÐ¸\nâ Ð®ÑÐ¸Ð´Ð¸ÑÐµÑÐºÐ°Ñ ÑÐ¸ÑÑÐ¾ÑÐ°: Ð·Ð°Ð»Ð¾Ð³Ð¸, Ð°ÑÐµÑÑÑ, Ð·Ð°Ð¿ÑÐµÑÑ Ð½Ð° ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¾Ð½Ð½ÑÐµ Ð´ÐµÐ¹ÑÑÐ²Ð¸Ñ Ð¸ Ð´ÑÑÐ³Ð¸Ðµ Ð¾Ð³ÑÐ°Ð½Ð¸ÑÐµÐ½Ð¸Ñ\nâ ÐÐ¾Ð»Ð½Ð°Ñ ÑÐµÐ¿Ð¾ÑÐºÐ° Ð²Ð»Ð°Ð´ÐµÐ½Ð¸Ñ Ð¸ ÑÑÑÐ°Ð½Ñ ÑÐºÑÐ¿Ð»ÑÐ°ÑÐ°ÑÐ¸Ð¸\nâ Ð¡Ð¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¸Ðµ VIN-Ð½Ð¾Ð¼ÐµÑÐ° Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ°Ð¼\n\nÐÑÐ»Ð¸ Ð¿ÑÐ¾Ð²ÐµÑÐºÐ° Ð²ÑÑÐ²Ð»ÑÐµÑ ÑÑÐ¾-Ð»Ð¸Ð±Ð¾, ÑÑÐ¾ Ð½Ð°Ñ Ð½Ðµ ÑÑÑÑÐ°Ð¸Ð²Ð°ÐµÑ â Ð¼Ñ Ð½Ðµ ÑÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑÐµÐ¼ ÑÑÐ¾Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸ Ð¿ÑÐ¾Ð´Ð¾Ð»Ð¶Ð°ÐµÐ¼ Ð¿Ð¾Ð¸ÑÐº. ÐÐµÐ· Ð¸ÑÐºÐ»ÑÑÐµÐ½Ð¸Ð¹.",
      },
      {
        t: "ÐÐ¸ÐºÐ°ÐºÐ¸Ñ ÑÐ°Ð¼Ð¾Ð¶ÐµÐ½Ð½ÑÑ Ð¿Ð¾ÑÐ»Ð¸Ð½ â Ð¾Ð±Ð° Ð³Ð¾ÑÑÐ´Ð°ÑÑÑÐ²Ð° Ð² ÐÐ¡",
        d: "ÐÐ½Ð¾Ð³Ð¸Ðµ Ð¿Ð¾ÐºÑÐ¿Ð°ÑÐµÐ»Ð¸ Ð¾ÑÐ¸Ð±Ð¾ÑÐ½Ð¾ ÑÑÐ¸ÑÐ°ÑÑ, ÑÑÐ¾ Ð¿ÐµÑÐµÐ²Ð¾Ð·ÐºÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ ÑÐ¾Ð¿ÑÐ¾Ð²Ð¾Ð¶Ð´Ð°ÐµÑÑÑ ÑÐ°Ð¼Ð¾Ð¶ÐµÐ½Ð½ÑÐ¼ Ð¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸ÐµÐ¼ Ð¸ Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»ÑÐ½ÑÐ¼Ð¸ Ð¿Ð¾ÑÐ»Ð¸Ð½Ð°Ð¼Ð¸. Ð­ÑÐ¾ ÑÐ°ÑÐ¿ÑÐ¾ÑÑÑÐ°Ð½ÑÐ½Ð½Ð¾Ðµ Ð·Ð°Ð±Ð»ÑÐ¶Ð´ÐµÐ½Ð¸Ðµ, ÐºÐ¾ÑÐ¾ÑÐ¾Ðµ Ð¾ÑÑÐ°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÑ Ð»ÑÐ´ÐµÐ¹ Ð¾Ñ Ð²ÑÐ³Ð¾Ð´Ð½Ð¾Ð¹ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸.\n\nÐÐ°Ðº Ð²ÑÑ ÑÑÑÑÐ¾ÐµÐ½Ð¾ Ð½Ð° ÑÐ°Ð¼Ð¾Ð¼ Ð´ÐµÐ»Ðµ: ÐÐµÑÐ¼Ð°Ð½Ð¸Ñ Ð¸ ÐÑÐ¿Ð°Ð½Ð¸Ñ â Ð³Ð¾ÑÑÐ´Ð°ÑÑÑÐ²Ð°-ÑÐ»ÐµÐ½Ñ ÐÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¾Ð³Ð¾ ÑÐ¾ÑÐ·Ð°. ÐÐ½ÑÑÑÐ¸ ÐÐ¡ Ð´ÐµÐ¹ÑÑÐ²ÑÐµÑ Ð¿ÑÐ¸Ð½ÑÐ¸Ð¿ ÑÐ²Ð¾Ð±Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð¿ÐµÑÐµÐ¼ÐµÑÐµÐ½Ð¸Ñ ÑÐ¾Ð²Ð°ÑÐ¾Ð². ÐÐ¸ÐºÐ°ÐºÐ¸Ñ ÑÐ°Ð¼Ð¾Ð¶ÐµÐ½Ð½ÑÑ Ð±Ð°ÑÑÐµÑÐ¾Ð², Ð¿Ð¾ÑÐ»Ð¸Ð½ Ð¸Ð»Ð¸ Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»ÑÐ½ÑÑ ÑÐ±Ð¾ÑÐ¾Ð² Ð¿ÑÐ¸ Ð¿ÐµÑÐµÐ¼ÐµÑÐµÐ½Ð¸Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¼ÐµÐ¶Ð´Ñ ÑÑÐ¸Ð¼Ð¸ ÑÑÑÐ°Ð½Ð°Ð¼Ð¸ Ð½Ðµ ÑÑÑÐµÑÑÐ²ÑÐµÑ.\n\nÐÑÐ¸ Ð¿Ð¾ÑÑÐ°Ð½Ð¾Ð²ÐºÐµ Ð½Ð° ÑÑÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ ÑÐ¿Ð»Ð°ÑÐ¸Ð²Ð°ÑÑÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð¼ÐµÑÑÐ½ÑÐµ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ðµ Ð½Ð°Ð»Ð¾Ð³Ð¸ â IVA (Ð² Ð¿ÑÐ¸Ð¼ÐµÐ½Ð¸Ð¼ÑÑ ÑÐ»ÑÑÐ°ÑÑ) Ð¸ IEDMT (Ð½Ð°Ð»Ð¾Ð³ Ð½Ð° ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ). ÐÐ±Ð° Ð½Ð°Ð»Ð¾Ð³Ð° ÑÐ¿Ð»Ð°ÑÐ¸Ð²Ð°ÑÑÑÑ Ð¿ÑÐ¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸ Ð»ÑÐ±Ð¾Ð³Ð¾ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ â Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ Ð¾Ñ ÑÑÑÐ°Ð½Ñ Ð¿ÑÐ¾Ð¸ÑÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ñ. Ð­ÑÐ¾ Ð½Ðµ ÑÐ°Ð¼Ð¾Ð¶Ð½Ñ, ÑÑÐ¾ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¾Ð½Ð½ÑÐ¹ Ð½Ð°Ð»Ð¾Ð³. ÐÑÐµ ÑÑÐ¸ ÑÐ°ÑÑÐ¾Ð´Ñ Ð¼Ñ ÑÐ°ÑÑÑÐ¸ÑÑÐ²Ð°ÐµÐ¼ Ð·Ð°ÑÐ°Ð½ÐµÐµ Ð¸ Ð²ÐºÐ»ÑÑÐ°ÐµÐ¼ Ð² Ð¸ÑÐ¾Ð³Ð¾Ð²ÑÑ ÑÐ¸ÑÑÑ Â«Ð¿Ð¾Ð´ ÐºÐ»ÑÑÂ».",
      },
      {
        t: "ÐÐ¾Ð»Ð½Ð°Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ°Ñ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð²ÐºÐ»ÑÑÐµÐ½Ð°",
        d: "ÐÐ¾ÑÑÐ°Ð½Ð¾Ð²ÐºÐ° Ð¸Ð½Ð¾ÑÑÑÐ°Ð½Ð½Ð¾Ð³Ð¾ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° ÑÑÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ â ÑÑÐ¾ Ð¼Ð½Ð¾Ð³Ð¾ÑÑÐ°Ð¿Ð½ÑÐ¹ Ð¿ÑÐ¾ÑÐµÑÑ, ÐºÐ¾ÑÐ¾ÑÑÐ¹ ÑÑÐµÐ±ÑÐµÑ Ð·Ð½Ð°Ð½Ð¸Ñ Ð¼ÐµÑÑÐ½Ð¾Ð³Ð¾ Ð·Ð°ÐºÐ¾Ð½Ð¾Ð´Ð°ÑÐµÐ»ÑÑÑÐ²Ð°, ÑÐ·ÑÐºÐ° Ð¸ Ð±ÑÑÐ¾ÐºÑÐ°ÑÐ¸ÑÐµÑÐºÐ¸Ñ Ð¿ÑÐ¾ÑÐµÐ´ÑÑ. ÐÐ¼ÐµÐ½Ð½Ð¾ ÑÑÐ¾Ñ ÑÑÐ°Ð¿ ÑÐ°ÑÐµ Ð²ÑÐµÐ³Ð¾ ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑÑ Ð¸ÑÑÐ¾ÑÐ½Ð¸ÐºÐ¾Ð¼ Ð½ÐµÐ¾Ð¶Ð¸Ð´Ð°Ð½Ð½ÑÑ ÑÐ°ÑÑÐ¾Ð´Ð¾Ð² Ð¸ Ð·Ð°Ð´ÐµÑÐ¶ÐµÐº Ð´Ð»Ñ ÑÐµÑ, ÐºÑÐ¾ Ð¿ÑÑÐ°ÐµÑÑÑ ÑÐ´ÐµÐ»Ð°ÑÑ ÑÑÐ¾ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾.\n\nÐ§ÑÐ¾ Ð²ÑÐ¾Ð´Ð¸Ñ Ð² Ð½Ð°ÑÑ ÑÑÐ»ÑÐ³Ñ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸:\nâ ÐÑÐ¾ÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ðµ ITV â Ð½Ð°Ñ Ð¼ÐµÐ½ÐµÐ´Ð¶ÐµÑ, Ð³Ð¾Ð²Ð¾ÑÑÑÐ¸Ð¹ Ð½Ð° Ð²Ð°ÑÐµÐ¼ ÑÐ·ÑÐºÐµ, Ð¿ÑÐ¸ÑÑÑÑÑÐ²ÑÐµÑ Ð»Ð¸ÑÐ½Ð¾ Ð½Ð° Ð²ÑÐµÐ¹ Ð¿ÑÐ¾ÑÐµÐ´ÑÑÐµ\nâ ÐÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐ¹ ÑÐ°ÑÑÑÑ Ð½Ð°Ð»Ð¾Ð³Ð° IEDMT Ñ Ð·Ð°ÐºÐ¾Ð½Ð½Ð¾Ð¹ Ð¾Ð¿ÑÐ¸Ð¼Ð¸Ð·Ð°ÑÐ¸ÐµÐ¹ ÑÐ°Ð¼, Ð³Ð´Ðµ ÑÑÐ¾ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾\nâ ÐÐ¾Ð´Ð³Ð¾ÑÐ¾Ð²ÐºÐ° Ð¿Ð¾Ð»Ð½Ð¾Ð³Ð¾ Ð¿Ð°ÐºÐµÑÐ° Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð², Ð²ÐºÐ»ÑÑÐ°Ñ Ficha TÃ©cnica Reducida\nâ ÐÐ¾Ð´Ð°ÑÐ° Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð² Ð² DGT Ð¸ Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ðµ ÑÐ²Ð¸Ð´ÐµÑÐµÐ»ÑÑÑÐ²Ð° Ð¾ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸\nâ ÐÐ¾Ð»ÑÑÐµÐ½Ð¸Ðµ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ñ Ð½Ð¾Ð¼ÐµÑÐ½ÑÑ Ð·Ð½Ð°ÐºÐ¾Ð²\nâ ÐÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸Ðµ ÑÐºÐ¾Ð»Ð¾Ð³Ð¸ÑÐµÑÐºÐ¾Ð¹ Ð¼ÐµÑÐºÐ¸ (Distintivo Ambiental) Ð´Ð»Ñ Ð²ÑÐµÐ·Ð´Ð° Ð² Ð·Ð¾Ð½Ñ ZBE\nâ ÐÐ¾ Ð¶ÐµÐ»Ð°Ð½Ð¸Ñ: Ð¿ÑÐ¸ÑÐ¼ÐºÐ° Ð½Ð° Ð½Ð°ÑÐµÐ¹ ÑÑÐ°Ð½ÑÐ¸Ð¸ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ, Ð¿Ð¾Ð»Ð½Ð°Ñ Ð´Ð¸Ð°Ð³Ð½Ð¾ÑÑÐ¸ÐºÐ°, Ð´ÐµÑÐµÐ¹Ð»Ð¸Ð½Ð³ Ð¸ ÑÑÐ°Ð½ÐµÐ½Ð¸Ðµ\n\nÐÑ Ð¿Ð¾Ð»ÑÑÐ°ÐµÑÐµ Ð¿Ð¾Ð»Ð½Ð¾ÑÑÑÑ Ð¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð½ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ, Ð³Ð¾ÑÐ¾Ð²ÑÐ¹ Ðº ÑÐºÑÐ¿Ð»ÑÐ°ÑÐ°ÑÐ¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ â Ð±ÐµÐ· ÐµÐ´Ð¸Ð½Ð¾Ð³Ð¾ Ð²Ð¸Ð·Ð¸ÑÐ° Ð² Ð³Ð¾ÑÑÐ´Ð°ÑÑÑÐ²ÐµÐ½Ð½ÑÐµ Ð¾ÑÐ³Ð°Ð½Ñ.",
      },
    ],
    processTitle: "ÐÐ°Ðº ÑÑÐ¾ ÑÐ°Ð±Ð¾ÑÐ°ÐµÑ: Ð¾Ñ Ð·Ð°ÑÐ²ÐºÐ¸ Ð´Ð¾ ÐºÐ»ÑÑÐµÐ¹ Ð² ÑÑÐºÐ°Ñ",
    processItems: [
      {
        t: "1. ÐÐµÑÐ¿Ð»Ð°ÑÐ½ÑÐ¹ Ð°Ð½Ð°Ð»Ð¸Ð· Ð²Ð°ÑÐµÐ¹ Ð·Ð°ÑÐ²ÐºÐ¸ â Ð±ÐµÐ· Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÑÑÐ²",
        d: "ÐÐµÑÐ²ÑÐ¹ ÑÐ°Ð³ Ð½Ðµ ÑÑÐµÐ±ÑÐµÑ Ð¾Ñ Ð²Ð°Ñ Ð½Ð¸ÑÐµÐ³Ð¾, ÐºÑÐ¾Ð¼Ðµ Ð½ÐµÑÐºÐ¾Ð»ÑÐºÐ¸Ñ Ð¼Ð¸Ð½ÑÑ Ð²ÑÐµÐ¼ÐµÐ½Ð¸. ÐÑ Ð·Ð°Ð¿Ð¾Ð»Ð½ÑÐµÑÐµ ÑÐ¾ÑÐ¼Ñ Ð¿Ð¾Ð´Ð±Ð¾ÑÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° ÑÑÐ¾Ð¹ ÑÑÑÐ°Ð½Ð¸ÑÐµ: Ð¼Ð°ÑÐºÐ°, Ð¼Ð¾Ð´ÐµÐ»Ñ, Ð¶ÐµÐ»Ð°ÐµÐ¼ÑÐ¹ Ð³Ð¾Ð´ Ð²ÑÐ¿ÑÑÐºÐ°, Ð¿ÑÐ¾Ð±ÐµÐ³ Ð¸ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½ÑÐ¹ Ð±ÑÐ´Ð¶ÐµÑ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸. ÐÐ°ÑÐ¸ Ð¼ÐµÐ½ÐµÐ´Ð¶ÐµÑÑ Ð½ÐµÐ¼ÐµÐ´Ð»ÐµÐ½Ð½Ð¾ Ð¿Ð¾Ð»ÑÑÐ°ÑÑ Ð²Ð°ÑÑ Ð·Ð°ÑÐ²ÐºÑ Ð¸ Ð¿ÑÐ¸ÑÑÑÐ¿Ð°ÑÑ Ðº Ð°Ð½Ð°Ð»Ð¸Ð·Ñ.\n\nÐ§ÑÐ¾ Ð¼Ñ Ð´ÐµÐ»Ð°ÐµÐ¼ Ð½Ð° ÑÑÐ¾Ð¼ ÑÑÐ°Ð¿Ðµ: Ð¿ÑÐ¾Ð²ÐµÑÑÐµÐ¼ ÑÐµÐ°Ð»ÑÐ½ÑÑ Ð´Ð¾ÑÑÑÐ¿Ð½Ð¾ÑÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»ÐµÐ¹ Ñ Ð²Ð°ÑÐ¸Ð¼Ð¸ Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÐ°Ð¼Ð¸ Ð½Ð° ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¸Ñ Ð°ÑÐºÑÐ¸Ð¾Ð½Ð°Ñ Ð¿ÑÑÐ¼Ð¾ ÑÐµÐ¹ÑÐ°Ñ; Ð´ÐµÐ»Ð°ÐµÐ¼ Ð¿ÑÐµÐ´Ð²Ð°ÑÐ¸ÑÐµÐ»ÑÐ½ÑÐ¹ ÑÐ°ÑÑÑÑ Ð¸ÑÐ¾Ð³Ð¾Ð²Ð¾Ð¹ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ Ñ ÑÑÑÑÐ¾Ð¼ Ð²ÑÐµÑ ÑÐ°ÑÑÐ¾Ð´Ð¾Ð²; Ð¾ÑÐµÐ½Ð¸Ð²Ð°ÐµÐ¼, Ð½Ð°ÑÐºÐ¾Ð»ÑÐºÐ¾ Ð²Ð°Ñ Ð·Ð°Ð¿ÑÐ¾Ñ ÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²ÑÐµÑ ÑÐµÐºÑÑÐµÐ¹ ÑÑÐ½Ð¾ÑÐ½Ð¾Ð¹ ÑÐ¸ÑÑÐ°ÑÐ¸Ð¸, Ð¸ ÐµÑÐ»Ð¸ Ð½ÑÐ¶Ð½Ð¾ â Ð¿ÑÐµÐ´Ð»Ð°Ð³Ð°ÐµÐ¼ Ð±Ð¾Ð»ÐµÐµ Ð²ÑÐ³Ð¾Ð´Ð½ÑÐµ Ð°Ð»ÑÑÐµÑÐ½Ð°ÑÐ¸Ð²Ñ.\n\nÐ­ÑÐ¾Ñ Ð°Ð½Ð°Ð»Ð¸Ð· Ð±ÐµÑÐ¿Ð»Ð°ÑÐµÐ½. ÐÑ Ð½Ðµ Ð±ÐµÑÑÑÐµ Ð½Ð° ÑÐµÐ±Ñ Ð½Ð¸ÐºÐ°ÐºÐ¸Ñ Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÑÑÐ². ÐÐ¸ÐºÐ°ÐºÐ¾Ð³Ð¾ Ð´Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¸ Ð½Ð°Ð²ÑÐ·ÑÐ²Ð°Ð½Ð¸Ñ ÑÑÐ»ÑÐ³ â ÑÐ¾Ð»ÑÐºÐ¾ ÑÐµÑÑÐ½Ð°Ñ ÐºÐ°ÑÑÐ¸Ð½Ð° ÑÑÐ½ÐºÐ° Ð¸ ÑÐµÐ°Ð»ÑÐ½ÑÐµ ÑÐ¸ÑÑÑ Ð´Ð¾ Ð¿ÑÐ¸Ð½ÑÑÐ¸Ñ Ð»ÑÐ±Ð¾Ð³Ð¾ ÑÐµÑÐµÐ½Ð¸Ñ.",
      },
      {
        t: "2. ÐÐ¾Ð¸ÑÐº Ð¸ Ð¿Ð¾Ð´Ð±Ð¾Ñ â Ð¼Ð¸Ð½Ð¸Ð¼ÑÐ¼ 10 Ð²Ð°ÑÐ¸Ð°Ð½ÑÐ¾Ð² Ð·Ð° 30 Ð´Ð½ÐµÐ¹",
        d: "ÐÐ¾ÑÐ»Ðµ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð½Ð¸Ñ Ð´Ð¾Ð³Ð¾Ð²Ð¾ÑÐ° Ð¼Ñ Ð¿ÑÐ¸ÑÑÑÐ¿Ð°ÐµÐ¼ Ðº Ð°ÐºÑÐ¸Ð²Ð½Ð¾Ð¼Ñ Ð¿Ð¾Ð¸ÑÐºÑ Ð½Ð° Ð½ÐµÑÐºÐ¾Ð»ÑÐºÐ¸Ñ Ð´ÐµÑÑÑÐºÐ°Ñ ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¸Ñ Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼ â Ð½ÐµÐ¼ÐµÑÐºÐ¸Ñ, Ð°Ð²ÑÑÑÐ¸Ð¹ÑÐºÐ¸Ñ, Ð±ÐµÐ»ÑÐ³Ð¸Ð¹ÑÐºÐ¸Ñ Ð¸ Ð½Ð¸Ð´ÐµÑÐ»Ð°Ð½Ð´ÑÐºÐ¸Ñ Ð°ÑÐºÑÐ¸Ð¾Ð½Ð°Ñ, Ð»Ð¸Ð·Ð¸Ð½Ð³Ð¾Ð²ÑÑ Ð¿Ð»Ð¾ÑÐ°Ð´ÐºÐ°Ñ Ð¸ Ð´Ð¸Ð»ÐµÑÑÐºÐ¸Ñ ÑÐµÑÑÑ.\n\nÐÑ Ð½Ðµ Ð¿ÑÐ¾ÑÑÐ¾ Ð¾ÑÐ¿ÑÐ°Ð²Ð»ÑÐµÐ¼ Ð²Ð°Ð¼ ÑÑÑÐ»ÐºÐ¸. ÐÐ°Ð¶Ð´ÑÐ¹ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð½ÑÐ¹ Ð²Ð°ÑÐ¸Ð°Ð½Ñ Ð¿ÑÐ¾ÑÐ¾Ð´Ð¸Ñ Ð¿ÑÐµÐ´Ð²Ð°ÑÐ¸ÑÐµÐ»ÑÐ½ÑÐ¹ Ð¾ÑÐ±Ð¾Ñ Ð¿Ð¾ Ð²Ð°ÑÐ¸Ð¼ ÐºÑÐ¸ÑÐµÑÐ¸ÑÐ¼: Ð³Ð¾Ð´ Ð²ÑÐ¿ÑÑÐºÐ°, Ð¿ÑÐ¾Ð±ÐµÐ³, ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑÐ°ÑÐ¸Ñ, ÑÐ²ÐµÑ, ÑÐµÑÐ½Ð¸ÑÐµÑÐºÐ¾Ðµ ÑÐ¾ÑÑÐ¾ÑÐ½Ð¸Ðµ. Ð ÐºÐ°Ð¶Ð´Ð¾Ð¼Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿ÑÐ¸Ð»Ð°Ð³Ð°ÐµÐ¼ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸Ðµ, ÑÐ¾ÑÐ¾Ð³ÑÐ°ÑÐ¸Ð¸, Ð¸ÑÑÐ¾ÑÐ¸Ñ Ð¸ Ð¿ÑÐµÐ´Ð²Ð°ÑÐ¸ÑÐµÐ»ÑÐ½ÑÐ¹ ÑÐ°ÑÑÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ.\n\nÐÐ°ÑÐ° Ð³Ð°ÑÐ°Ð½ÑÐ¸Ñ: Ð½Ðµ Ð¼ÐµÐ½ÐµÐµ 10 ÐºÐ¾Ð½ÐºÑÐµÑÐ½ÑÑ Ð²Ð°ÑÐ¸Ð°Ð½ÑÐ¾Ð² Ð² ÑÐµÑÐµÐ½Ð¸Ðµ 30 Ð´Ð½ÐµÐ¹ Ñ Ð¼Ð¾Ð¼ÐµÐ½ÑÐ° Ð·Ð°ÐºÐ»ÑÑÐµÐ½Ð¸Ñ Ð´Ð¾Ð³Ð¾Ð²Ð¾ÑÐ°. Ð­ÑÐ¾ Ð½Ðµ Ð°Ð±ÑÑÑÐ°ÐºÑÐ½ÑÐµ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ â ÑÑÐ¾ ÑÐµÐ°Ð»ÑÐ½ÑÐµ Ð»Ð¾ÑÑ, Ð´Ð¾ÑÑÑÐ¿Ð½ÑÐµ Ðº Ð¿Ð¾ÐºÑÐ¿ÐºÐµ Ð¿ÑÑÐ¼Ð¾ ÑÐµÐ¹ÑÐ°Ñ. ÐÑÐµÐ½Ñ ÑÐ°ÑÑÐ¾ Ð² Ð¿ÑÐ¾ÑÐµÑÑÐµ Ð¿Ð¾Ð¸ÑÐºÐ° Ð¼Ñ Ð½Ð°ÑÐ¾Ð´Ð¸Ð¼ Ð²Ð°ÑÐ¸Ð°Ð½ÑÑ Ð·Ð½Ð°ÑÐ¸ÑÐµÐ»ÑÐ½Ð¾ Ð²ÑÐ³Ð¾Ð´Ð½ÐµÐµ ÑÐµÑ, Ð½Ð° ÐºÐ¾ÑÐ¾ÑÑÐµ ÐºÐ»Ð¸ÐµÐ½Ñ ÑÐ°ÑÑÑÐ¸ÑÑÐ²Ð°Ð» Ð¸Ð·Ð½Ð°ÑÐ°Ð»ÑÐ½Ð¾ â Ð¸Ð½Ð¾Ð³Ð´Ð° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð±Ð¾Ð»ÐµÐµ Ð²ÑÑÐ¾ÐºÐ¾Ð³Ð¾ ÐºÐ»Ð°ÑÑÐ° Ð² ÑÐ°Ð¼ÐºÐ°Ñ ÑÐ¾Ð³Ð¾ Ð¶Ðµ Ð±ÑÐ´Ð¶ÐµÑÐ°.",
      },
      {
        t: "3. ÐÐ¾Ð»Ð½Ð°Ñ Ð¿ÑÐ¾Ð²ÐµÑÐºÐ° â Ð¸ÑÑÐ¾ÑÐ¸Ñ, Ð¿ÑÐ¾Ð±ÐµÐ³, ÐÐ¢Ð, ÑÑÐ¸Ð´Ð¸ÑÐµÑÐºÐ°Ñ ÑÐ¸ÑÑÐ¾ÑÐ°",
        d: "ÐÐ¾Ð³Ð´Ð° Ð²Ñ Ð²ÑÐ±ÑÐ°Ð»Ð¸ Ð¸Ð½ÑÐµÑÐµÑÑÑÑÐ¸Ð¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ â Ð¼Ñ Ð½Ðµ ÑÐ¾ÑÐ¾Ð¿Ð¸Ð¼ÑÑ Ð´ÐµÐ»Ð°ÑÑ ÑÑÐ°Ð²ÐºÑ. Ð¡Ð½Ð°ÑÐ°Ð»Ð° Ð¿Ð¾Ð»Ð½Ð°Ñ Ð¿ÑÐ¾Ð²ÐµÑÐºÐ°.\n\nÐ§ÑÐ¾ Ð²ÑÐ¾Ð´Ð¸Ñ Ð² Ð¿ÑÐ¾Ð²ÐµÑÐºÑ:\nâ Ð ÐµÐ°Ð»ÑÐ½ÑÐ¹ Ð¿ÑÐ¾Ð±ÐµÐ³ ÑÐµÑÐµÐ· Ð½ÐµÐ¼ÐµÑÐºÐ¸Ðµ Ð¸ ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¸Ðµ Ð±Ð°Ð·Ñ Ð´Ð°Ð½Ð½ÑÑ, ÑÐ²ÐµÑÐµÐ½Ð½ÑÐ¹ Ñ ÑÐµÑÐ²Ð¸ÑÐ½Ð¾Ð¹ Ð¸ÑÑÐ¾ÑÐ¸ÐµÐ¹\nâ ÐÑÑÐ¾ÑÐ¸Ñ ÐÐ¢Ð: ÑÑÑÐ°ÑÐ¾Ð²ÑÐµ ÑÐ»ÑÑÐ°Ð¸, ÐºÑÐ·Ð¾Ð²Ð½ÑÐµ ÑÐµÐ¼Ð¾Ð½ÑÑ, Ð·Ð°Ð¼ÐµÐ½Ñ Ð´ÐµÑÐ°Ð»ÐµÐ¹ â Ð²ÐºÐ»ÑÑÐ°Ñ ÑÐºÑÑÑÑÐµ Ð¿Ð¾Ð²ÑÐµÐ¶Ð´ÐµÐ½Ð¸Ñ ÑÐµÑÐµÐ· Ð¿ÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐµ Ð·Ð°ÐºÑÑÑÑÐµ Ð¸ÑÑÐ¾ÑÐ½Ð¸ÐºÐ¸\nâ Ð®ÑÐ¸Ð´Ð¸ÑÐµÑÐºÐ°Ñ ÑÐ¸ÑÑÐ¾ÑÐ°: Ð·Ð°Ð»Ð¾Ð³Ð¸, Ð°ÑÐµÑÑÑ, Ð·Ð°Ð¿ÑÐµÑÑ Ð½Ð° ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¾Ð½Ð½ÑÐµ Ð´ÐµÐ¹ÑÑÐ²Ð¸Ñ Ð¸ Ð´ÑÑÐ³Ð¸Ðµ Ð¾Ð³ÑÐ°Ð½Ð¸ÑÐµÐ½Ð¸Ñ, ÐºÐ¾ÑÐ¾ÑÑÐµ Ð¼Ð¾Ð³ÑÑ Ð·Ð°Ð±Ð»Ð¾ÐºÐ¸ÑÐ¾Ð²Ð°ÑÑ ÑÐ´ÐµÐ»ÐºÑ\nâ ÐÐ¾Ð»Ð½Ð°Ñ ÑÐµÐ¿Ð¾ÑÐºÐ° Ð²Ð»Ð°Ð´ÐµÐ½Ð¸Ñ Ð¸ ÑÑÑÐ°Ð½Ñ ÑÐºÑÐ¿Ð»ÑÐ°ÑÐ°ÑÐ¸Ð¸\nâ Ð¡Ð¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¸Ðµ VIN-Ð½Ð¾Ð¼ÐµÑÐ° Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ°Ð¼\n\nÐÐ°Ñ Ð¿ÑÐ¸Ð½ÑÐ¸Ð¿ Ð¿ÑÐ¾ÑÑ: ÐµÑÐ»Ð¸ Ð¿ÑÐ¾Ð²ÐµÑÐºÐ° Ð²ÑÑÐ²Ð»ÑÐµÑ ÑÑÐ¾-Ð»Ð¸Ð±Ð¾, ÑÑÐ¾ Ð½Ð°Ñ Ð½Ðµ ÑÑÑÑÐ°Ð¸Ð²Ð°ÐµÑ â Ð¼Ñ Ð½Ðµ ÑÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑÐµÐ¼ ÑÑÐ¾Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸ Ð¿ÑÐ¾Ð´Ð¾Ð»Ð¶Ð°ÐµÐ¼ Ð¿Ð¾Ð¸ÑÐº. ÐÐµÐ· Ð¸ÑÐºÐ»ÑÑÐµÐ½Ð¸Ð¹.",
      },
      {
        t: "4. Ð£ÑÐ°ÑÑÐ¸Ðµ Ð² Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ â ÑÐ¸ÐºÑÐ¸ÑÑÐµÐ¼ Ð²Ð°ÑÑ ÑÐµÐ½Ñ Ð² Ð´Ð¾Ð³Ð¾Ð²Ð¾ÑÐµ",
        d: "ÐÑÐ»Ð¸ Ð²ÑÐ±ÑÐ°Ð½Ð½ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿ÑÐ¾Ð´Ð°ÑÑÑÑ Ð½Ð° ÑÐ¿ÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð¸ÑÐ¾Ð²Ð°Ð½Ð½Ð¾Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ â Ð½Ð°Ð¿ÑÐ¸Ð¼ÐµÑ, Ð½Ð° Ð¸Ð·Ð²ÐµÑÑÐ½Ð¾Ð¹ Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð¹ Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼Ðµ OPENLINE â Ð²Ð°Ð¶Ð½Ð¾ Ð¿Ð¾Ð½Ð¸Ð¼Ð°ÑÑ: ÑÐ°ÐºÐ¸Ðµ Ð°ÑÐºÑÐ¸Ð¾Ð½Ñ ÑÐ°Ð±Ð¾ÑÐ°ÑÑ Ð¸ÑÐºÐ»ÑÑÐ¸ÑÐµÐ»ÑÐ½Ð¾ Ñ Ð°ÐºÐºÑÐµÐ´Ð¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¼Ð¸ Ð¿ÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐ¼Ð¸ ÑÑÐ°ÑÑÐ½Ð¸ÐºÐ°Ð¼Ð¸. Ð§Ð°ÑÑÐ½Ð¾Ðµ Ð»Ð¸ÑÐ¾ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾ Ð·Ð°ÑÐµÐ³Ð¸ÑÑÑÐ¸ÑÐ¾Ð²Ð°ÑÑÑÑ Ð¸ ÑÑÐ°ÑÑÐ²Ð¾Ð²Ð°ÑÑ Ð² ÑÐ¾ÑÐ³Ð°Ñ.\n\nÐÐ°Ðº Ð¼Ñ Ð¾ÑÐ³Ð°Ð½Ð¸Ð·ÑÐµÐ¼ ÑÑÐ¾Ñ Ð¿ÑÐ¾ÑÐµÑÑ: Ð¼Ñ Ð·Ð°ÐºÐ»ÑÑÐ°ÐµÐ¼ Ñ Ð²Ð°Ð¼Ð¸ Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»ÑÐ½Ð¾Ðµ ÑÐ¾Ð³Ð»Ð°ÑÐµÐ½Ð¸Ðµ Ðº Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾Ð¼Ñ Ð´Ð¾Ð³Ð¾Ð²Ð¾ÑÑ, Ð² ÐºÐ¾ÑÐ¾ÑÐ¾Ð¼ ÑÐ¸ÐºÑÐ¸ÑÑÐµÐ¼ ÑÑÐ¸ ÐºÐ»ÑÑÐµÐ²ÑÑ Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÐ° â ÐºÐ¾Ð½ÐºÑÐµÑÐ½ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ, Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½ÑÑ ÑÐµÐ½Ñ, ÐºÐ¾ÑÐ¾ÑÑÑ Ð²Ñ Ð³Ð¾ÑÐ¾Ð²Ñ Ð·Ð°Ð¿Ð»Ð°ÑÐ¸ÑÑ, Ð¸ Ð¿Ð¾ÑÑÐ´Ð¾Ðº ÑÐ°ÑÑÑÑÐ¾Ð² Ð² ÑÐ»ÑÑÐ°Ðµ Ð¿Ð¾Ð±ÐµÐ´Ñ. ÐÐ°Ñ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑÐ½ÑÐ¹ Ð±Ð¸Ð´ Ð·Ð°ÑÐ¸ÑÑÐ½ Ð´Ð¾Ð³Ð¾Ð²Ð¾ÑÐ¾Ð¼ â Ð¼Ñ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¿ÑÐµÐ²ÑÑÐ¸ÑÑ ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²Ð°Ð½Ð½ÑÑ ÑÑÐ¼Ð¼Ñ Ð±ÐµÐ· Ð²Ð°ÑÐµÐ³Ð¾ ÑÐ²Ð½Ð¾Ð³Ð¾ Ð¿Ð¸ÑÑÐ¼ÐµÐ½Ð½Ð¾Ð³Ð¾ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ñ.\n\nÐÐ°Ð¶Ð½Ð¾ Ð¿Ð¾Ð½Ð¸Ð¼Ð°ÑÑ Ð¿ÑÐ¾ ÑÑÐ¾ÐºÐ¸: Ð¿Ð¾Ð±ÐµÐ´Ð° Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ Ð½Ð°ÐºÐ»Ð°Ð´ÑÐ²Ð°ÐµÑ Ð¶ÑÑÑÐºÐ¾Ðµ Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÑÑÐ²Ð¾ â Ð¾Ð¿Ð»Ð°ÑÐ° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±ÑÑÑ Ð¿ÑÐ¾Ð¸Ð·Ð²ÐµÐ´ÐµÐ½Ð° Ð² ÑÐµÑÐµÐ½Ð¸Ðµ 5 ÑÐ°Ð±Ð¾ÑÐ¸Ñ Ð´Ð½ÐµÐ¹ Ñ Ð¼Ð¾Ð¼ÐµÐ½ÑÐ° Ð¾ÐºÐ¾Ð½ÑÐ°Ð½Ð¸Ñ ÑÐ¾ÑÐ³Ð¾Ð². ÐÐ°ÑÑÑÐµÐ½Ð¸Ðµ ÑÑÐ¾ÐºÐ¾Ð² Ð²Ð»ÐµÑÑÑ ÑÑÑÐ°ÑÐ½ÑÐµ ÑÐ°Ð½ÐºÑÐ¸Ð¸ Ð¸ Ð¼Ð¾Ð¶ÐµÑ Ð¿ÑÐ¸Ð²ÐµÑÑÐ¸ Ðº Ð¸ÑÐºÐ»ÑÑÐµÐ½Ð¸Ñ Ð¸Ð· ÑÐ¸ÑÐ»Ð° ÑÑÐ°ÑÑÐ½Ð¸ÐºÐ¾Ð². ÐÐ¼ÐµÐ½Ð½Ð¾ Ð¿Ð¾ÑÑÐ¾Ð¼Ñ Ð¼Ñ Ð·Ð°ÑÐ°Ð½ÐµÐµ ÑÐ¾Ð³Ð»Ð°ÑÐ¾Ð²ÑÐ²Ð°ÐµÐ¼ Ñ Ð²Ð°Ð¼Ð¸ Ð³Ð¾ÑÐ¾Ð²Ð½Ð¾ÑÑÑ ÑÑÐµÐ´ÑÑÐ².",
      },
      {
        t: "5. ÐÐ¾ÐºÑÐ¿ÐºÐ° â Ð¾Ð¿Ð»Ð°ÑÐ° Ð² ÑÐµÑÐµÐ½Ð¸Ðµ 5 Ð´Ð½ÐµÐ¹, Ð¿Ð¾Ð»Ð½Ð¾Ðµ ÑÐ¾Ð¿ÑÐ¾Ð²Ð¾Ð¶Ð´ÐµÐ½Ð¸Ðµ ÑÐ´ÐµÐ»ÐºÐ¸",
        d: "ÐÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ Ð¾Ñ ÑÐ¾Ð³Ð¾, Ð³Ð´Ðµ Ð¿ÑÐ¸Ð¾Ð±ÑÐµÑÐ°ÐµÑÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ â Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ, Ñ Ð¾ÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½Ð¾Ð³Ð¾ Ð´Ð¸Ð»ÐµÑÐ° Ð¸Ð»Ð¸ Ð½Ð° ÑÐ°ÑÑÐ½Ð¾Ð¹ Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼Ðµ â Ð¼Ñ Ð¿Ð¾Ð»Ð½Ð¾ÑÑÑÑ Ð±ÐµÑÑÐ¼ Ð½Ð° ÑÐµÐ±Ñ ÑÐ¾Ð¿ÑÐ¾Ð²Ð¾Ð¶Ð´ÐµÐ½Ð¸Ðµ ÑÐ´ÐµÐ»ÐºÐ¸.\n\nÐÑÐ¸ Ð¿Ð¾ÐºÑÐ¿ÐºÐµ Ñ Ð´Ð¸Ð»ÐµÑÐ° Ð¸Ð»Ð¸ Ð½Ð° Ð¿Ð»Ð°ÑÑÐ¾ÑÐ¼Ðµ: Ð¿ÑÐ¾Ð²Ð¾Ð´Ð¸Ð¼ ÑÐ¸Ð½Ð°Ð»ÑÐ½ÑÐµ Ð¿ÐµÑÐµÐ³Ð¾Ð²Ð¾ÑÑ Ð¾ ÑÐµÐ½Ðµ, Ð¿ÑÐ¾Ð²ÐµÑÑÐµÐ¼ Ð´Ð¾Ð³Ð¾Ð²Ð¾Ñ ÐºÑÐ¿Ð»Ð¸-Ð¿ÑÐ¾Ð´Ð°Ð¶Ð¸ Ð½Ð° Ð¿ÑÐµÐ´Ð¼ÐµÑ ÑÐºÑÑÑÑÑ ÑÑÐ»Ð¾Ð²Ð¸Ð¹ Ð¸ ÑÐ¾Ð¿ÑÐ¾Ð²Ð¾Ð¶Ð´Ð°ÐµÐ¼ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð½Ð¸Ðµ.\n\nÐÑÐ¸ Ð¿Ð¾ÐºÑÐ¿ÐºÐµ Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ: Ð² ÑÐ»ÑÑÐ°Ðµ Ð¿Ð¾Ð±ÐµÐ´Ñ Ð² ÑÐ¾ÑÐ³Ð°Ñ Ð²Ñ Ð²Ð½Ð¾ÑÐ¸ÑÐµ Ð¾Ð¿Ð»Ð°ÑÑ Ð² ÑÐµÑÐµÐ½Ð¸Ðµ 5 ÑÐ°Ð±Ð¾ÑÐ¸Ñ Ð´Ð½ÐµÐ¹. ÐÑ Ð¾ÑÐ¾ÑÐ¼Ð»ÑÐµÐ¼ Ð²ÑÐµ Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼ÑÐµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ: ÑÐ½ÑÑÐ¸Ðµ Ñ Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð³Ð¾ ÑÑÑÑÐ°, Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ðµ ÑÐºÑÐ¿Ð¾ÑÑÐ½ÑÑ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð² Ð¸ ÑÐ¾Ð¿ÑÐ¾Ð²Ð¾Ð´Ð¸ÑÐµÐ»ÑÐ½ÑÑ Ð±ÑÐ¼Ð°Ð³ Ð´Ð»Ñ Ð´Ð°Ð»ÑÐ½ÐµÐ¹ÑÐµÐ¹ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸.\n\nÐÐ½Ðµ Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑÐ¸ Ð¾Ñ Ð¿Ð»Ð¾ÑÐ°Ð´ÐºÐ¸ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸: Ð¿Ð¾Ð»ÑÑÐ°ÐµÐ¼ Ð²ÑÐµÐ¼ÐµÐ½Ð½ÑÐµ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¾Ð½Ð½ÑÐµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ Ð½Ð° Ð²Ð°ÑÐµ Ð¸Ð¼Ñ Ð² ÑÑÑÐ°Ð½Ðµ Ð¿ÑÐ¸Ð¾Ð±ÑÐµÑÐµÐ½Ð¸Ñ. ÐÐ° Ð¿ÑÐ¾ÑÑÐ¶ÐµÐ½Ð¸Ð¸ Ð²ÑÐµÐ³Ð¾ ÑÑÐ°Ð¿Ð° Ð²Ñ Ð¿Ð¾Ð»ÑÑÐ°ÐµÑÐµ ÑÐµÐ³ÑÐ»ÑÑÐ½ÑÐµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð¾ ÑÑÐ°ÑÑÑÐµ ÑÐ´ÐµÐ»ÐºÐ¸. ÐÐ°Ð¼ Ð½Ðµ Ð½ÑÐ¶Ð½Ð¾ Ð½Ð¸ Ñ ÐºÐµÐ¼ Ð¾Ð±ÑÐ°ÑÑÑÑ, Ð½Ð¸ Ð·Ð° ÑÐµÐ¼ ÑÐ»ÐµÐ´Ð¸ÑÑ â Ð¼Ñ Ð²ÐµÐ´ÑÐ¼ Ð²ÐµÑÑ Ð¿ÑÐ¾ÑÐµÑÑ Ð¾Ñ Ð½Ð°ÑÐ°Ð»Ð° Ð´Ð¾ ÐºÐ¾Ð½ÑÐ°.",
      },
      {
        t: "6. ÐÐ¾ÑÑÐ°Ð²ÐºÐ° Ð°Ð²ÑÐ¾Ð²Ð¾Ð·Ð¾Ð¼ ÑÐ¾ ÑÑÑÐ°ÑÐ¾Ð²ÐºÐ¾Ð¹ â Ð´Ð¾ Ð²Ð°ÑÐµÐ³Ð¾ Ð°Ð´ÑÐµÑÐ° Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸",
        d: "ÐÐ¾ÑÐ»Ðµ Ð·Ð°Ð²ÐµÑÑÐµÐ½Ð¸Ñ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸ Ð¾ÑÐ³Ð°Ð½Ð¸Ð·ÑÐµÐ¼ Ð´Ð¾ÑÑÐ°Ð²ÐºÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ. Ð£ Ð²Ð°Ñ ÐµÑÑÑ Ð´Ð²Ð° Ð²Ð°ÑÐ¸Ð°Ð½ÑÐ° â Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑÐ¸ Ð¾Ñ Ð²Ð°ÑÐ¸Ñ Ð¿ÑÐ¸Ð¾ÑÐ¸ÑÐµÑÐ¾Ð².\n\nÐÐ²ÑÐ¾Ð²Ð¾Ð· â ÑÑÐ°Ð½Ð´Ð°ÑÑÐ½ÑÐ¹ Ð¸ Ð½Ð°Ð¸Ð±Ð¾Ð»ÐµÐµ Ð½Ð°Ð´ÑÐ¶Ð½ÑÐ¹ ÑÐ¿Ð¾ÑÐ¾Ð±. ÐÐ²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ¸ÑÑÐµÑÑÑ Ð½Ð° ÑÐ¿ÐµÑÐ¸Ð°Ð»Ð¸Ð·Ð¸ÑÐ¾Ð²Ð°Ð½Ð½Ð¾Ð¼ ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ½Ð¾Ð¼ ÑÑÐµÐ´ÑÑÐ²Ðµ. Ð¡ÑÐ¾ÐºÐ¸ Ð´Ð¾ÑÑÐ°Ð²ÐºÐ¸ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ â Ð¾Ñ 5 Ð´Ð¾ 10 ÑÐ°Ð±Ð¾ÑÐ¸Ñ Ð´Ð½ÐµÐ¹.\n\nÐÐ½Ð´Ð¸Ð²Ð¸Ð´ÑÐ°Ð»ÑÐ½ÑÐ¹ Ð¿ÐµÑÐµÐ³Ð¾Ð½ Ð²Ð¾Ð´Ð¸ÑÐµÐ»ÐµÐ¼ â Ð´Ð»Ñ ÑÐµÑ, ÐºÑÐ¾ ÑÐ¾ÑÐµÑ Ð¿Ð¾Ð»ÑÑÐ¸ÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð±ÑÑÑÑÐµÐµ. ÐÐ°Ñ Ð²Ð¾Ð´Ð¸ÑÐµÐ»Ñ Ð»Ð¸ÑÐ½Ð¾ Ð¿ÐµÑÐµÐ³Ð¾Ð½ÑÐµÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ. Ð­ÑÐ¾Ñ Ð²Ð°ÑÐ¸Ð°Ð½Ñ Ð·Ð°Ð½Ð¸Ð¼Ð°ÐµÑ Ð¼ÐµÐ½ÑÑÐµ Ð²ÑÐµÐ¼ÐµÐ½Ð¸ Ð¸ Ð¿Ð¾Ð·Ð²Ð¾Ð»ÑÐµÑ Ð±ÑÑÑÑÐµÐµ Ð¿ÑÐ¸ÑÑÑÐ¿Ð¸ÑÑ Ðº ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸.\n\nÐ Ð¾Ð±Ð¾Ð¸Ñ ÑÐ»ÑÑÐ°ÑÑ: Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð·Ð°ÑÑÑÐ°ÑÐ¾Ð²Ð°Ð½ Ð½Ð° Ð¿Ð¾Ð»Ð½ÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ Ð½Ð° Ð²ÐµÑÑ Ð¿ÐµÑÐ¸Ð¾Ð´ ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ¸ÑÐ¾Ð²ÐºÐ¸; Ð²Ñ Ð¿Ð¾Ð»ÑÑÐ°ÐµÑÐµ Ð¸Ð½ÑÐ¾ÑÐ¼Ð°ÑÐ¸Ñ Ð¾ Ð¼ÐµÑÑÐ¾Ð½Ð°ÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° ÐºÐ°Ð¶Ð´Ð¾Ð¼ ÑÑÐ°Ð¿Ðµ Ð¼Ð°ÑÑÑÑÑÐ°; Ð´Ð¾ÑÑÐ°Ð²ÐºÐ° Ð¾ÑÑÑÐµÑÑÐ²Ð»ÑÐµÑÑÑ Ð´Ð¾ ÑÐºÐ°Ð·Ð°Ð½Ð½Ð¾Ð³Ð¾ Ð²Ð°Ð¼Ð¸ Ð°Ð´ÑÐµÑÐ° Ð² Ð»ÑÐ±Ð¾Ð¹ ÑÐ¾ÑÐºÐµ ÐÑÐ¿Ð°Ð½Ð¸Ð¸ â Ð½Ðµ Ð½Ð° ÑÐºÐ»Ð°Ð´ Ð¸ Ð½Ðµ Ð½Ð° ÑÐµÑÐ¼Ð¸Ð½Ð°Ð».\n\nÐÐ¾ Ð¶ÐµÐ»Ð°Ð½Ð¸Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿ÑÐ¸Ð½Ð¸Ð¼Ð°ÐµÑÑÑ Ð½Ð° Ð½Ð°ÑÐµÐ¹ ÑÑÐ°Ð½ÑÐ¸Ð¸ ÑÐµÑÐ½Ð¸ÑÐµÑÐºÐ¾Ð³Ð¾ Ð¾Ð±ÑÐ»ÑÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ, Ð³Ð´Ðµ ÑÑÐ°Ð·Ñ Ð¿ÐµÑÐµÑÐ¾Ð´Ð¸Ñ Ðº ÑÐ»ÐµÐ´ÑÑÑÐµÐ¼Ñ ÑÑÐ°Ð¿Ñ Ð¿Ð¾Ð´Ð³Ð¾ÑÐ¾Ð²ÐºÐ¸.",
      },
      {
        t: "7. ITV â Ð½Ð°Ñ Ð¼ÐµÐ½ÐµÐ´Ð¶ÐµÑ Ð¿ÑÐ¸ÑÑÑÑÑÐ²ÑÐµÑ Ð»Ð¸ÑÐ½Ð¾",
        d: "Ð¢ÐµÑÐ½Ð¸ÑÐµÑÐºÐ¸Ð¹ Ð¾ÑÐ¼Ð¾ÑÑ ITV â Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÐ½ÑÐ¹ ÑÑÐ°Ð¿ Ð´Ð»Ñ Ð¿Ð¾ÑÑÐ°Ð½Ð¾Ð²ÐºÐ¸ Ð¸Ð½Ð¾ÑÑÑÐ°Ð½Ð½Ð¾Ð³Ð¾ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° ÑÑÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸. ÐÐ¼ÐµÐ½Ð½Ð¾ Ð·Ð´ÐµÑÑ ÑÐ°ÑÐµ Ð²ÑÐµÐ³Ð¾ Ð²Ð¾Ð·Ð½Ð¸ÐºÐ°ÑÑ Ð¿ÑÐ¾Ð±Ð»ÐµÐ¼Ñ Ñ ÑÐµÑ, ÐºÑÐ¾ Ð¿ÑÑÐ°ÐµÑÑÑ Ð¿ÑÐ¾Ð¹ÑÐ¸ ÐµÐ³Ð¾ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾: ÑÐ·ÑÐºÐ¾Ð²Ð¾Ð¹ Ð±Ð°ÑÑÐµÑ, Ð½ÐµÐ·Ð½Ð°Ð½Ð¸Ðµ Ð¼ÐµÑÑÐ½ÑÑ ÑÑÐµÐ±Ð¾Ð²Ð°Ð½Ð¸Ð¹, Ð½ÐµÐ¿ÑÐ°Ð²Ð¸Ð»ÑÐ½Ð¾ Ð¿Ð¾Ð´Ð³Ð¾ÑÐ¾Ð²Ð»ÐµÐ½Ð½ÑÐµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ.\n\nÐÐ¾ Ð¶ÐµÐ»Ð°Ð½Ð¸Ñ ÐºÐ»Ð¸ÐµÐ½ÑÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿ÑÐµÐ´Ð²Ð°ÑÐ¸ÑÐµÐ»ÑÐ½Ð¾ Ð¿ÑÐ¾ÑÐ¾Ð´Ð¸Ñ Ð¿Ð¾Ð»Ð½ÑÑ Ð´Ð¸Ð°Ð³Ð½Ð¾ÑÑÐ¸ÐºÑ Ð¸ Ð´ÐµÑÐµÐ¹Ð»Ð¸Ð½Ð³ Ð½Ð° Ð½Ð°ÑÐµÐ¹ ÑÑÐ°Ð½ÑÐ¸Ð¸ ÑÐµÑÐ½Ð¸ÑÐµÑÐºÐ¾Ð³Ð¾ Ð¾Ð±ÑÐ»ÑÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ. ÐÑÑÐ²Ð»ÑÐµÐ¼ Ð¸ ÑÑÑÑÐ°Ð½ÑÐµÐ¼ Ð²ÑÐµ ÑÐµÑÐ½Ð¸ÑÐµÑÐºÐ¸Ðµ Ð·Ð°Ð¼ÐµÑÐ°Ð½Ð¸Ñ Ð´Ð¾ Ð¿Ð¾Ð´Ð°ÑÐ¸ Ð½Ð° Ð¾ÑÐ¼Ð¾ÑÑ â ÑÑÐ¾ Ð³Ð°ÑÐ°Ð½ÑÐ¸ÑÑÐµÑ ÑÑÐ¿ÐµÑÐ½Ð¾Ðµ Ð¿ÑÐ¾ÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ðµ ITV Ñ Ð¿ÐµÑÐ²Ð¾Ð³Ð¾ ÑÐ°Ð·Ð°.\n\nÐÐ° ÑÑÐ°Ð½ÑÐ¸Ð¸ ITV Ð½Ð°Ñ Ð¼ÐµÐ½ÐµÐ´Ð¶ÐµÑ, Ð³Ð¾Ð²Ð¾ÑÑÑÐ¸Ð¹ Ð½Ð° Ð²Ð°ÑÐµÐ¼ ÑÐ·ÑÐºÐµ, Ð¿ÑÐ¸ÑÑÑÑÑÐ²ÑÐµÑ Ð»Ð¸ÑÐ½Ð¾ Ð½Ð° Ð¿ÑÐ¾ÑÑÐ¶ÐµÐ½Ð¸Ð¸ Ð²ÑÐµÐ¹ Ð¿ÑÐ¾ÑÐµÐ´ÑÑÑ. ÐÐ½ Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð´ÐµÐ¹ÑÑÐ²ÑÐµÑ Ñ ÑÐµÑÐ½Ð¸ÐºÐ°Ð¼Ð¸, Ð¾ÑÐ²ÐµÑÐ°ÐµÑ Ð½Ð° Ð²Ð¾Ð¿ÑÐ¾ÑÑ Ð¸ ÑÐ½Ð¸Ð¼Ð°ÐµÑ Ð»ÑÐ±Ð¾Ð¹ ÑÐ·ÑÐºÐ¾Ð²Ð¾Ð¹ Ð±Ð°ÑÑÐµÑ. ÐÑ Ð³Ð¾ÑÐ¾Ð²Ð¸Ð¼ Ð¿Ð¾Ð»Ð½ÑÐ¹ Ð¿Ð°ÐºÐµÑ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð², Ð²ÐºÐ»ÑÑÐ°Ñ Ficha TÃ©cnica Reducida â Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÐ½ÑÐ¹ Ð´Ð¾ÐºÑÐ¼ÐµÐ½Ñ Ð´Ð»Ñ Ð¿ÑÐ¾ÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ñ Ð¾ÑÐ¼Ð¾ÑÑÐ°.\n\nÐÐµÑÐ´Ð°ÑÐ½Ð¾Ðµ Ð¿ÑÐ¾ÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ðµ ITV Ð¾ÑÑÐ°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÑ Ð²ÑÑ Ð¿ÑÐ¾ÑÐµÐ´ÑÑÑ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸. ÐÐ¼ÐµÐ½Ð½Ð¾ Ð¿Ð¾ÑÑÐ¾Ð¼Ñ Ð¼Ñ Ð½Ðµ Ð¿ÑÐ¾ÑÑÐ¾ Ð·Ð°Ð¿Ð¸ÑÑÐ²Ð°ÐµÐ¼ Ð²Ð°Ñ Ð½Ð° Ð¾ÑÐ¼Ð¾ÑÑ â Ð¼Ñ Ð³Ð¾ÑÐ¾Ð²Ð¸Ð¼ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸ ÑÐ¾Ð¿ÑÐ¾Ð²Ð¾Ð¶Ð´Ð°ÐµÐ¼ Ð²ÐµÑÑ Ð¿ÑÐ¾ÑÐµÑÑ Ð»Ð¸ÑÐ½Ð¾.",
      },
      {
        t: "8. DGT, Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ðµ Ð½Ð¾Ð¼ÐµÑÐ° â Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð³Ð¾ÑÐ¾Ð² Ðº ÐµÐ·Ð´Ðµ",
        d: "Ð¤Ð¸Ð½Ð°Ð»ÑÐ½ÑÐ¹ ÑÑÐ°Ð¿ â Ð¸ ÑÐ°Ð¼ÑÐ¹ Ð¿ÑÐ¸ÑÑÐ½ÑÐ¹. ÐÐ¾ÑÐ»Ðµ ÑÑÐ¿ÐµÑÐ½Ð¾Ð³Ð¾ Ð¿ÑÐ¾ÑÐ¾Ð¶Ð´ÐµÐ½Ð¸Ñ ITV Ð¼Ñ Ð·Ð°Ð¿ÑÑÐºÐ°ÐµÐ¼ Ð¿ÑÐ¾ÑÐµÐ´ÑÑÑ Ð¿Ð¾Ð»Ð½Ð¾Ð¹ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸.\n\nÐ§ÑÐ¾ Ð¿ÑÐ¾Ð¸ÑÑÐ¾Ð´Ð¸Ñ Ð½Ð° ÑÑÐ¾Ð¼ ÑÑÐ°Ð¿Ðµ:\nâ ÐÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÐ¹ ÑÐ°ÑÑÑÑ Ð½Ð°Ð»Ð¾Ð³Ð° IEDMT â Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸ÑÑÐµÐ¼ Ð¾ÑÐµÐ½Ð¾ÑÐ½ÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ Ð¿Ð¾ ÑÐ°Ð±Ð»Ð¸ÑÐ°Ð¼ Hacienda Ð¸ Ð¿ÑÐ¸Ð¼ÐµÐ½ÑÐµÐ¼ Ð²ÑÐµ Ð·Ð°ÐºÐ¾Ð½Ð½ÑÐµ Ð¾ÑÐ½Ð¾Ð²Ð°Ð½Ð¸Ñ Ð´Ð»Ñ ÑÐ½Ð¸Ð¶ÐµÐ½Ð¸Ñ Ð½Ð°Ð»Ð¾Ð³Ð¾Ð²Ð¾Ð¹ Ð½Ð°Ð³ÑÑÐ·ÐºÐ¸\nâ ÐÐ¾Ð´Ð°ÑÐ° Ð¿Ð¾Ð»Ð½Ð¾Ð³Ð¾ Ð¿Ð°ÐºÐµÑÐ° Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð² Ð² DGT â DirecciÃ³n General de TrÃ¡fico\nâ ÐÐ¾Ð»ÑÑÐµÐ½Ð¸Ðµ ÑÐ²Ð¸Ð´ÐµÑÐµÐ»ÑÑÑÐ²Ð° Ð¾ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸ (Permiso de CirculaciÃ³n) Ð½Ð° Ð²Ð°ÑÐµ Ð¸Ð¼Ñ\nâ ÐÐ¾Ð»ÑÑÐµÐ½Ð¸Ðµ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ñ Ð½Ð¾Ð¼ÐµÑÐ½ÑÑ Ð·Ð½Ð°ÐºÐ¾Ð²\nâ ÐÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸Ðµ ÑÐºÐ¾Ð»Ð¾Ð³Ð¸ÑÐµÑÐºÐ¾Ð¹ Ð¼ÐµÑÐºÐ¸ (Distintivo Ambiental) Ð´Ð»Ñ Ð·Ð°ÐºÐ¾Ð½Ð½Ð¾Ð³Ð¾ Ð²ÑÐµÐ·Ð´Ð° Ð² Ð·Ð¾Ð½Ñ ZBE Ð²Ð¾ Ð²ÑÐµÑ ÐºÑÑÐ¿Ð½ÑÑ Ð³Ð¾ÑÐ¾Ð´Ð°Ñ ÐÑÐ¿Ð°Ð½Ð¸Ð¸\n\nÐ¡ Ð¼Ð¾Ð¼ÐµÐ½ÑÐ° Ð·Ð°Ð²ÐµÑÑÐµÐ½Ð¸Ñ ÑÑÐ¾Ð³Ð¾ ÑÑÐ°Ð¿Ð° Ð²Ð°Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿Ð¾Ð»Ð½Ð¾ÑÑÑÑ Ð»ÐµÐ³Ð°Ð»ÐµÐ½ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸. ÐÐ¸ÐºÐ°ÐºÐ¸Ñ Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸ÑÐµÐ»ÑÐ½ÑÑ Ð¿ÑÐ¾ÑÐµÐ´ÑÑ, Ð½Ð¸ÐºÐ°ÐºÐ¸Ñ Ð²Ð¸Ð·Ð¸ÑÐ¾Ð² Ð² Ð³Ð¾ÑÑÐ´Ð°ÑÑÑÐ²ÐµÐ½Ð½ÑÐµ Ð¾ÑÐ³Ð°Ð½Ñ Ñ Ð²Ð°ÑÐµÐ¹ ÑÑÐ¾ÑÐ¾Ð½Ñ â Ð²Ñ Ð¿ÑÐ¾ÑÑÐ¾ Ð¿Ð¾Ð»ÑÑÐ°ÐµÑÐµ Ð³Ð¾ÑÐ¾Ð²ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸ ÑÐ°Ð´Ð¸ÑÐµÑÑ Ð·Ð° ÑÑÐ»Ñ.",
      },
    ],
    caseTitle: "Ð ÐµÐ°Ð»ÑÐ½ÑÐ¹ ÐºÐµÐ¹Ñ: Audi Q5 â ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ 14 300 â¬",
    caseTag: "ÐÐµÐ¹Ñ AutoexpertEU Â· Ð¤ÐµÐ²ÑÐ°Ð»Ñ 2026",
    caseCar: "Audi Q5 40 TDI Quattro",
    caseSpecs: "ÐÐ¸Ð·ÐµÐ»Ñ Â· ÐÐ²ÑÐ¾Ð¼Ð°Ñ Â· 204 Ð».Ñ. Â· 56 358 ÐºÐ¼ Â· 2020 Ð³.Ð².",
    caseCostRows: [
      { label: "ð©ðª ÐÐ¾Ð±ÐµÐ´Ð½Ð°Ñ ÑÑÐ°Ð²ÐºÐ° Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ (ÐÐµÑÐ¼Ð°Ð½Ð¸Ñ)", val: "24 000 â¬" },
      { label: "ð Ð¢ÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ¸ÑÐ¾Ð²ÐºÐ° ÐÐµÑÐ¼Ð°Ð½Ð¸Ñ â ÐÑÐ¿Ð°Ð½Ð¸Ñ", val: "1 200 â¬" },
      { label: "ð Ð¢Ð°Ð¼Ð¾Ð¶ÐµÐ½Ð½Ð¾Ðµ Ð¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸Ðµ (ÐÐ¡)", val: "Ð²ÐºÐ»ÑÑÐµÐ½Ð¾" },
      { label: "ð Ð ÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ (ITV, DGT)", val: "1 800 â¬" },
      { label: "ð Ð£ÑÐ»ÑÐ³Ð° AutoexpertEU (Ð°Ð²ÑÐ¾Ð¿Ð¾Ð´Ð±Ð¾Ñ)", val: "1 500 â¬" },
    ],
    caseTotalLabel: "ð³ ÐÐ¢ÐÐÐ ÐÐÐ ÐÐÐ®Ð§ Ð ÐÐ¡ÐÐÐÐÐ",
    caseTotalVal: "28 500 â¬",
    caseSaveLabel: "Ð­ÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ Ð¿Ð¾ ÑÑÐ°Ð²Ð½ÐµÐ½Ð¸Ñ Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼ ÑÑÐ½ÐºÐ¾Ð¼",
    caseSaveVal: "â14 300 â¬",
    caseSaveSub: "ÐÐ½Ð°Ð»Ð¾Ð³Ð¸ÑÐ½ÑÐµ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ð¸ Ð² Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ñ ÑÐ°Ð»Ð¾Ð½Ð°Ñ: Ð¾Ñ 42 800 â¬",
    compareRows: [
      { label: "AutoexpertEU (Ð¿Ð¾Ð´ ÐºÐ»ÑÑ)", val: "28 500 â¬", best: true },
      { label: "Audi Q5 Â· Arval Algete", val: "45 800 â¬", best: false },
      { label: "Audi Q5 Â· Arval Sevilla", val: "42 800 â¬", best: false },
      { label: "Audi Q5 Â· S line Ayvens", val: "46 000 â¬", best: false },
    ],
    servicesTitle: "ÐÐ°ÑÐ¸ ÑÑÐ»ÑÐ³Ð¸",
    serviceItems: [
      {
        t: "ÐÐ¾Ð½ÑÑÐ»ÑÑÐ°ÑÐ¸Ñ Ð¿Ð¾ Ð¿Ð¾ÐºÑÐ¿ÐºÐµ Ð°Ð²ÑÐ¾ Ð² ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸",
        d: "ÐÐ±ÑÑÑÐ½ÑÐµÐ¼, ÐºÐ°Ðº ÑÐ°Ð±Ð¾ÑÐ°ÑÑ ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¸Ðµ Ð°ÑÐºÑÐ¸Ð¾Ð½Ñ, ÐºÐ°ÐºÐ¾Ð²Ñ ÑÐµÐ°Ð»ÑÐ½ÑÐµ Ð·Ð°ÑÑÐ°ÑÑ, Ð¸ Ð´Ð°ÑÐ¼ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½ÑÐ¹ ÑÐ°ÑÑÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ Ð´Ð»Ñ ÐºÐ¾Ð½ÐºÑÐµÑÐ½Ð¾Ð¹ Ð¼Ð¾Ð´ÐµÐ»Ð¸, ÐºÐ¾ÑÐ¾ÑÑÑ Ð²Ñ ÑÐ¾ÑÐ¸ÑÐµ. ÐÐµÑÐ¿Ð»Ð°ÑÐ½Ð¾, Ð±ÐµÐ· Ð¾Ð±ÑÐ·Ð°ÑÐµÐ»ÑÑÑÐ².",
      },
      {
        t: "ÐÐ²ÑÐ¾Ð¿Ð¾Ð´Ð±Ð¾Ñ Ð¸ Ð¸Ð¼Ð¿Ð¾ÑÑ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ â Ð¿Ð¾Ð»Ð½ÑÐ¹ ÑÐ¸ÐºÐ»",
        d: "ÐÐ¾Ð»Ð½ÑÐ¹ ÑÐµÑÐ²Ð¸Ñ: Ð¿Ð¾Ð¸ÑÐº, Ð¿ÑÐ¾Ð²ÐµÑÐºÐ° Ð¸ÑÑÐ¾ÑÐ¸Ð¸, ÑÑÐ°Ð²ÐºÐ° Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ, Ð´Ð¾ÑÑÐ°Ð²ÐºÐ° Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸, Ð¿ÑÐ¸Ð²Ð¾Ð· Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ, ITV, ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² DGT, Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ðµ Ð½Ð¾Ð¼ÐµÑÐ°. ÐÐ°Ð¼ Ð½ÑÐ¶Ð½Ð¾ ÑÐ¾Ð»ÑÐºÐ¾ Ð¾Ð¿Ð¸ÑÐ°ÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸ Ð¿Ð¾Ð»ÑÑÐ¸ÑÑ ÐºÐ»ÑÑÐ¸.",
      },
      {
        t: "Ð¢Ð¾Ð»ÑÐºÐ¾ Ð¿Ð¾ÑÑÐ°Ð½Ð¾Ð²ÐºÐ° Ð½Ð° ÑÑÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ (Ð°Ð²ÑÐ¾ ÑÐ¶Ðµ ÐºÑÐ¿Ð»ÐµÐ½)",
        d: "ÐÑÐ»Ð¸ Ð²Ñ ÑÐ¶Ðµ ÐºÑÐ¿Ð¸Ð»Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð² ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð¸ Ð²Ð°Ð¼ Ð½ÑÐ¶Ð½Ð¾ Ð¿Ð¾ÑÑÐ°Ð²Ð¸ÑÑ ÐµÐ³Ð¾ Ð½Ð° ÑÑÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ â Ð±ÐµÑÑÐ¼ Ð½Ð° ÑÐµÐ±Ñ Ð²ÐµÑÑ Ð¿ÑÐ¾ÑÐµÑÑ: ITV, ÑÐ°ÑÑÑÑ Ð½Ð°Ð»Ð¾Ð³Ð° IEDMT, Ð¿Ð¾Ð´Ð°ÑÐ° Ð² DGT Ð¸ Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ðµ Ð½Ð¾Ð¼ÐµÑÐ½ÑÑ Ð·Ð½Ð°ÐºÐ¾Ð².",
      },
    ],
    faqTitle: "Ð§Ð°ÑÑÐ¾ Ð·Ð°Ð´Ð°Ð²Ð°ÐµÐ¼ÑÐµ Ð²Ð¾Ð¿ÑÐ¾ÑÑ",
    faqItems: [
      {
        t: "Ð¡ÐºÐ¾Ð»ÑÐºÐ¾ ÑÑÐ¾Ð¸Ñ Ð¿ÑÐ¸Ð³Ð½Ð°ÑÑ Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ?",
        d: "ÐÑÐ¾Ð³Ð¾Ð²Ð°Ñ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ Ð·Ð°Ð²Ð¸ÑÐ¸Ñ Ð¾Ñ Ð¿Ð¾Ð±ÐµÐ´Ð½Ð¾Ð¹ ÑÑÐ°Ð²ÐºÐ¸ Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ Ð¿Ð»ÑÑ Ð½Ð°ÑÐ° ÑÑÐ»ÑÐ³Ð°, ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ¸ÑÐ¾Ð²ÐºÐ° Ð¸ ÑÐ°ÑÑÐ¾Ð´Ñ Ð½Ð° ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸. ÐÑÐ¸Ð¼ÐµÑ: Audi Q5 ÐºÑÐ¿Ð»ÐµÐ½ Ð·Ð° 24 000 â¬, Ð¸ÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ 28 500 â¬ â Ð¿ÑÐ¾ÑÐ¸Ð² 42 800 â¬+ Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¾Ð³Ð¾ Ð´Ð¸Ð»ÐµÑÐ°. ÐÑ Ð´ÐµÐ»Ð°ÐµÐ¼ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½ÑÐ¹ ÑÐ°ÑÑÑÑ Ð´Ð»Ñ Ð²Ð°ÑÐµÐ¹ ÐºÐ¾Ð½ÐºÑÐµÑÐ½Ð¾Ð¹ Ð¼Ð¾Ð´ÐµÐ»Ð¸.",
      },
      {
        t: "ÐÑÑÑ Ð»Ð¸ ÑÐ°Ð¼Ð¾Ð¶ÐµÐ½Ð½ÑÐµ Ð¿Ð¾ÑÐ»Ð¸Ð½Ñ Ð¼ÐµÐ¶Ð´Ñ ÐÐµÑÐ¼Ð°Ð½Ð¸ÐµÐ¹ Ð¸ ÐÑÐ¿Ð°Ð½Ð¸ÐµÐ¹?",
        d: "ÐÐµÑ. ÐÐ±Ðµ ÑÑÑÐ°Ð½Ñ â Ð³Ð¾ÑÑÐ´Ð°ÑÑÑÐ²Ð°-ÑÐ»ÐµÐ½Ñ ÐÐ¡, Ð¿Ð¾ÑÑÐ¾Ð¼Ñ ÑÐ°Ð¼Ð¾Ð¶ÐµÐ½Ð½ÑÑ Ð±Ð°ÑÑÐµÑÐ¾Ð² Ð½ÐµÑ. ÐÑÐ¸Ð¼ÐµÐ½ÑÐµÑÑÑ ÑÐ¾Ð»ÑÐºÐ¾ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¹ Ð½Ð°Ð»Ð¾Ð³ Ð½Ð° ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ½Ð¾Ð³Ð¾ ÑÑÐµÐ´ÑÑÐ²Ð° (IEDMT), ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð¼Ñ ÑÐ°ÑÑÑÐ¸ÑÑÐ²Ð°ÐµÐ¼ Ð·Ð°ÑÐ°Ð½ÐµÐµ Ð¸ ÑÑÐ°ÑÐ°ÐµÐ¼ÑÑ Ð·Ð°ÐºÐ¾Ð½Ð½Ð¾ Ð¾Ð¿ÑÐ¸Ð¼Ð¸Ð·Ð¸ÑÐ¾Ð²Ð°ÑÑ.",
      },
      {
        t: "ÐÐ°ÐºÐ¸Ðµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ Ð½ÑÐ¶Ð½Ñ Ð´Ð»Ñ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸ Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð³Ð¾ Ð°Ð²ÑÐ¾ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸?",
        d: "ÐÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼Ñ: Ð½ÐµÐ¼ÐµÑÐºÐ¾Ðµ ÑÐ²Ð¸Ð´ÐµÑÐµÐ»ÑÑÑÐ²Ð¾ Ð¾ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸ (Fahrzeugbrief / Zulassungsbescheinigung Teil II), ÑÐµÑÑÐ¸ÑÐ¸ÐºÐ°Ñ ÑÐ¾Ð¾ÑÐ²ÐµÑÑÑÐ²Ð¸Ñ ÐÐ¡ (COC), Ð²Ð°Ñ NIE, Ð¿Ð°ÑÐ¿Ð¾ÑÑ Ð¸ ÐºÐ²Ð¸ÑÐ°Ð½ÑÐ¸Ñ Ð¾Ð± ÑÐ¿Ð»Ð°ÑÐµ Ð½Ð°Ð»Ð¾Ð³Ð°. AutoexpertEU ÑÐ¾Ð±Ð¸ÑÐ°ÐµÑ Ð¸ Ð¿Ð¾Ð´Ð°ÑÑ Ð²ÑÐµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ Ð¾Ñ Ð²Ð°ÑÐµÐ³Ð¾ Ð¸Ð¼ÐµÐ½Ð¸.",
      },
      {
        t: "Ð¡ÐºÐ¾Ð»ÑÐºÐ¾ Ð²ÑÐµÐ¼ÐµÐ½Ð¸ Ð·Ð°Ð¹Ð¼ÑÑ Ð²ÐµÑÑ Ð¿ÑÐ¾ÑÐµÑÑ?",
        d: "ÐÐ±ÑÑÐ½Ð¾ 5â6 Ð½ÐµÐ´ÐµÐ»Ñ Ñ Ð¼Ð¾Ð¼ÐµÐ½ÑÐ° Ð·Ð°ÑÐ²ÐºÐ¸ Ð´Ð¾ Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ñ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ñ Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ð¼Ð¸ Ð½Ð¾Ð¼ÐµÑÐ°Ð¼Ð¸. Ð Ð°Ð·Ð±Ð¸Ð²ÐºÐ°: Ð¾ÑÐ¾ÑÐ¼Ð»ÐµÐ½Ð¸Ðµ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸ 1â3 Ð´Ð½Ñ, Ð´Ð¾ÑÑÐ°Ð²ÐºÐ° Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ â Ð¾Ñ 15 ÑÐ°Ð±Ð¾ÑÐ¸Ñ Ð´Ð½ÐµÐ¹ (Ð°Ð²ÑÐ¾Ð²Ð¾Ð·), ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸ Ð¾Ñ Ð¿ÑÐ¸Ð±ÑÑÐ¸Ñ Ð°Ð²ÑÐ¾ Ð´Ð¾ Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ñ Ð½Ð¾Ð¼ÐµÑÐ¾Ð² â 1â3 Ð½ÐµÐ´ÐµÐ»Ð¸ Ð¿ÑÐ¸ ÑÐ¸ÑÑÐ¾Ð¼ Ð¿Ð°ÐºÐµÑÐµ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÐ¾Ð².",
      },
      {
        t: "ÐÐ°Ðº ÑÐ±ÐµÐ´Ð¸ÑÑÑÑ, ÑÑÐ¾ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ðµ Ð±Ð¸ÑÑÐ¹ Ð¸ Ð±ÐµÐ· ÑÐºÑÑÑÐµÐ½Ð½Ð¾Ð³Ð¾ Ð¿ÑÐ¾Ð±ÐµÐ³Ð°?",
        d: "ÐÐµÑÐµÐ´ ÐºÐ°Ð¶Ð´Ð¾Ð¹ ÑÑÐ°Ð²ÐºÐ¾Ð¹ Ð¿ÑÐ¾Ð²Ð¾Ð´Ð¸Ð¼ Ð¿Ð¾Ð»Ð½ÑÑ Ð¿ÑÐ¾Ð²ÐµÑÐºÑ Ð¸ÑÑÐ¾ÑÐ¸Ð¸ Ð¿Ð¾ VIN ÑÐµÑÐµÐ· Ð½ÐµÐ¼ÐµÑÐºÐ¸Ðµ Ð¸ ÐµÐ²ÑÐ¾Ð¿ÐµÐ¹ÑÐºÐ¸Ðµ Ð±Ð°Ð·Ñ Ð´Ð°Ð½Ð½ÑÑ: ÐÐ¢Ð, ÑÐµÐ°Ð»ÑÐ½ÑÐ¹ Ð¿ÑÐ¾Ð±ÐµÐ³, Ð¸ÑÑÐ¾ÑÐ¸Ñ Ð¾Ð±ÑÐ»ÑÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ, Ð·Ð°Ð»Ð¾Ð³Ð¸ Ð¸ Ð¾Ð³ÑÐ°Ð½Ð¸ÑÐµÐ½Ð¸Ñ. ÐÑÐ»Ð¸ Ð¸ÑÑÐ¾ÑÐ¸Ñ Ð½ÐµÑÐ¸ÑÑÐ°Ñ Ð¸Ð»Ð¸ Ð½ÐµÐ¿ÑÐ¾Ð·ÑÐ°ÑÐ½Ð°Ñ â Ð½Ðµ ÑÑÐ°ÑÑÐ²ÑÐµÐ¼ Ð² ÑÐ¾ÑÐ³Ð°Ñ. ÐÐµÐ· Ð¸ÑÐºÐ»ÑÑÐµÐ½Ð¸Ð¹.",
      },
      {
        t: "Ð§ÑÐ¾ ÐµÑÐ»Ð¸ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿ÑÐ¸ÑÑÐ» Ñ Ð¿Ð¾Ð²ÑÐµÐ¶Ð´ÐµÐ½Ð¸ÑÐ¼Ð¸ Ð¿ÑÐ¸ Ð´Ð¾ÑÑÐ°Ð²ÐºÐµ?",
        d: "ÐÐ²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¿Ð¾Ð»Ð½Ð¾ÑÑÑÑ Ð·Ð°ÑÑÑÐ°ÑÐ¾Ð²Ð°Ð½ Ð½Ð° Ð²ÐµÑÑ Ð¿ÐµÑÐ¸Ð¾Ð´ ÑÑÐ°Ð½ÑÐ¿Ð¾ÑÑÐ¸ÑÐ¾Ð²ÐºÐ¸. ÐÑÐ±ÑÐµ Ð¿Ð¾Ð²ÑÐµÐ¶Ð´ÐµÐ½Ð¸Ñ, Ð¾Ð±Ð½Ð°ÑÑÐ¶ÐµÐ½Ð½ÑÐµ Ð¿ÑÐ¸ Ð¿ÐµÑÐµÐ´Ð°ÑÐµ, Ð¿Ð¾ÐºÑÑÐ²Ð°ÑÑÑÑ ÑÑÑÐ°ÑÐ¾Ð²ÑÐ¼ Ð¿Ð¾Ð»Ð¸ÑÐ¾Ð¼. ÐÑÐµ ÑÑÐ»Ð¾Ð²Ð¸Ñ ÑÐ¸ÐºÑÐ¸ÑÑÑÑÑÑ Ð² Ð´Ð¾Ð³Ð¾Ð²Ð¾ÑÐµ Ð´Ð¾ Ð½Ð°ÑÐ°Ð»Ð° ÑÐ°Ð±Ð¾ÑÑ.",
      },
      {
        t: "ÐÐ¾Ð³Ñ Ð»Ð¸ Ñ ÐºÑÐ¿Ð¸ÑÑ Ð½Ð° Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾?",
        d: "ÐÐµÑ. ÐÐµÐ¼ÐµÑÐºÐ¸Ðµ Ð°Ð²ÑÐ¾Ð°ÑÐºÑÐ¸Ð¾Ð½Ñ ÑÐ°Ð±Ð¾ÑÐ°ÑÑ Ð¿Ð¾ ÑÑÐµÐ¼Ðµ B2B Ð¸ ÑÑÐµÐ±ÑÑÑ Ð¿ÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½Ð¾Ð¹ Ð°ÐºÐºÑÐµÐ´Ð¸ÑÐ°ÑÐ¸Ð¸ ÐºÐ°Ðº Ð´Ð¸Ð»ÐµÑÐ° Ð´Ð»Ñ ÑÑÐ°ÑÑÐ¸Ñ. Ð¤Ð¸Ð·Ð¸ÑÐµÑÐºÐ¸Ðµ Ð»Ð¸ÑÐ° Ðº ÑÐ¾ÑÐ³Ð°Ð¼ Ð½Ðµ Ð´Ð¾Ð¿ÑÑÐºÐ°ÑÑÑÑ. ÐÐ¼ÐµÐ½Ð½Ð¾ Ð¿Ð¾ÑÑÐ¾Ð¼Ñ Ð½ÑÐ¶ÐµÐ½ Ð°ÐºÐºÑÐµÐ´Ð¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ Ð¿Ð¾ÑÑÐµÐ´Ð½Ð¸Ðº â Ð¼Ñ.",
      },
    ],
    hReady: "ÐÐ¾ÑÐ¾Ð²Ñ Ð¿Ð¾Ð´Ð¾Ð±ÑÐ°ÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸?",
    pReady: "Ð Ð°ÑÑÐºÐ°Ð¶Ð¸ÑÐµ, ÐºÐ°ÐºÐ¾Ð¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð²Ñ Ð¸ÑÐµÑÐµ â Ð¼Ñ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½Ð¾ Ð¿ÑÐ¾Ð²ÐµÑÐ¸Ð¼ ÑÑÐ½Ð¾Ðº Ð¸ ÑÐºÐ°Ð¶ÐµÐ¼, ÑÐµÐ°Ð»ÑÐ½Ð¾ Ð»Ð¸ Ð½Ð°Ð¹ÑÐ¸ ÑÐ°ÐºÐ¾Ð¹ Ð²Ð°ÑÐ¸Ð°Ð½Ñ, ÑÐºÐ¾Ð»ÑÐºÐ¾ Ð¾Ð½ Ð±ÑÐ´ÐµÑ ÑÑÐ¾Ð¸ÑÑ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸, Ð¸Ð»Ð¸ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶Ð¸Ð¼ Ð²Ð°ÑÐ¸Ð°Ð½Ñ, Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ Ð»ÑÑÑÐµ, ÑÐµÐ¼ Ð²Ñ Ð¿ÑÐµÐ´Ð¿Ð¾Ð»Ð°Ð³Ð°ÐµÑÐµ.",
    hQuestions: "ÐÑÑÐ°Ð»Ð¸ÑÑ Ð²Ð¾Ð¿ÑÐ¾ÑÑ?",
    btnFaq: "ÐÑÐ²ÐµÑÑ Ð½Ð° ÑÑÑÐ°Ð½Ð¸ÑÐµ FAQ",
    btnContact: "Ð¡Ð²ÑÐ¶Ð¸ÑÐµÑÑ Ñ Ð½Ð°Ð¼Ð¸",
  };
}

/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   METADATA (server-side) â per locale
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || "ru";
  const C = copy(locale);

  const baseUrl = "https://www.autoexperteu.com";
  const pathname = `/${locale}/avto-iz-germanii`;

  // Short, search-friendly description (avoid keyword stuffing)
  const description =
    locale === "ru"
      ? "ÐÐ°Ðº Ð·Ð°ÑÐµÐ³Ð¸ÑÑÑÐ¸ÑÐ¾Ð²Ð°ÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸. ITV, Ð½Ð°Ð»Ð¾Ð³Ð¸, Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² DGT."
      : locale === "es"
        ? "CÃ³mo matricular un coche de Alemania en EspaÃ±a. ITV, impuestos y registro en DGT paso a paso."
        : "How to register a car from Germany in Spain. ITV inspection, taxes and DGT registration process.";

  const titles: Record<string, string> = {
    ru: "ÐÐ²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ â Ð¿Ð¾ÐºÑÐ¿ÐºÐ°, Ð´Ð¾ÑÑÐ°Ð²ÐºÐ° Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð² DGT",
    es: "Importar coche de Alemania a EspaÃ±a â compra, transporte y matriculaciÃ³n en DGT | AutoexpertEU",
    en: "Car import from Germany to Spain â purchase, delivery and DGT registration | AutoexpertEU",
  };

  return {
    title: titles[locale] ?? "AutoexpertEU",
    description,
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        ru: `${baseUrl}/ru/avto-iz-germanii`,
        es: `${baseUrl}/es/avto-iz-germanii`,
        en: `${baseUrl}/en/avto-iz-germanii`,
      },
    },
    openGraph: {
      title: titles[locale] ?? "AutoexpertEU",
      description,
      url: `${baseUrl}${pathname}`,
      siteName: "AutoexpertEU",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/media/images/avto-germany.jpg`,
          width: 1200,
          height: 630,
          alt: C.heroAlt,
        },
      ],
    },
  };
}

/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   SHARED ACCORDION COMPONENTS (identical style to existing site)
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
function SectionSummary({ title }: { title: string }) {
  return (
    <summary
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
      <span className="text-base font-bold md:text-lg">{title.toUpperCase()}</span>
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#0B3B73] transition-transform duration-300 group-open/section:rotate-180">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
          <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </summary>
  );
}

function InnerItem({ it, name }: { it: Item; name: string }) {
  return (
    <details name={name} className="group/item rounded-xl border bg-white">
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
        <span className="sm:static absolute right-5 top-1/2 sm:translate-y-0 -translate-y-1/2 text-[#0B3B73] transition-transform duration-300 group-open/item:rotate-180">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
            <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </summary>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open/item:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-base opacity-0 transition-opacity duration-300 group-open/item:opacity-100">
            <div className="whitespace-pre-line text-justify" dangerouslySetInnerHTML={{ __html: it.d }} />
          </div>
        </div>
      </div>
    </details>
  );
}

/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DEAL CARD (replaces boutique urgency block â same border/bg style)
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
function DealCard({ C }: { C: ReturnType<typeof copy> }) {
  return (
    <div className="w-full max-w-2xl rounded-2xl border-2 border-[#0B3B73] bg-[#f8fafc] p-4 sm:p-6 text-center shadow-lg">
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
        <h2 className="text-base sm:text-lg font-bold text-[#0B3B73] uppercase tracking-wider">
          {C.dealLabel}
        </h2>
        <span className="bg-black text-[#00ff00] px-4 py-1 rounded-lg border border-[#00ff00]/30 font-mono text-sm font-bold shadow-[0_0_10px_rgba(0,255,0,0.5)] uppercase tracking-widest animate-pulse [text-shadow:_0_0_8px_#00ff00]">
          {C.dealBadge}
        </span>
      </div>
      {/* Car info */}
      <p className="font-bold text-lg text-left">{C.dealCar}</p>
      <p className="text-sm text-slate-500 text-left mb-4">{C.dealCarSub}</p>
      {/* Price rows */}
      <div className="divide-y divide-slate-100 mb-4">
        {C.dealRows.map((row) => (
          <div key={row.label} className="flex justify-between items-center py-3 gap-4">
            <span className="text-sm text-slate-600 text-left">{row.label}</span>
            <span
              className={[
                "font-bold font-mono shrink-0",
                row.style === "gold" ? "text-[#B8860B] text-xl" : "",
                row.style === "green"
                  ? "text-[#00cc00] text-xl [text-shadow:_0_0_5px_rgba(0,204,0,0.5)]"
                  : "",
                row.style === "muted" ? "text-slate-400 text-sm" : "",
                row.style === "bold" ? "text-[#0B3B73] text-lg" : "",
                row.style === "strike" ? "text-slate-400 line-through text-sm" : "",
              ].join(" ")}
            >
              {row.val}
            </span>
          </div>
        ))}
      </div>
      {/* Savings â green scoreboard style */}
      <div className="flex items-center justify-between rounded-xl bg-[#051005] border border-[#00ff00]/40 px-5 py-3 shadow-[inset_0_0_15px_rgba(0,255,0,0.2)]">
        <span className="text-sm font-semibold text-[#00cc00] uppercase tracking-wider [text-shadow:_0_0_5px_rgba(0,204,0,0.8)]">
          {C.dealSaveLabel}
        </span>
        <span className="text-2xl font-black text-[#00ff00] font-mono animate-pulse [text-shadow:_0_0_10px_#00ff00]">
          {C.dealSaveVal}
        </span>
      </div>
    </div>
  );
}

/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   CASE STUDY CONTENT (rendered inside accordion)
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
function CaseContent({ C }: { C: ReturnType<typeof copy> }) {
  return (
    <div className="p-4 sm:p-6 space-y-5">
      <div>
        <span className="inline-block bg-[#EFF6FF] text-[#0B3B73] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          {C.caseTag}
        </span>
        <p className="font-bold text-lg">{C.caseCar}</p>
        <p className="text-sm text-slate-500">{C.caseSpecs}</p>
      </div>
      {/* Cost breakdown table */}
      <div className="rounded-xl border overflow-hidden">
        <div className="divide-y divide-slate-100">
          {C.caseCostRows.map((row) => (
            <div
              key={row.label}
              className="flex justify-between items-center px-5 py-3 gap-4 bg-white"
            >
              <span className="text-sm text-slate-600">{row.label}</span>
              <span className="font-semibold text-sm shrink-0">{row.val}</span>
            </div>
          ))}
        </div>
        {/* Total bar â navy blue, same as buttons */}
        <div className="flex justify-between items-center px-5 py-4 bg-[#0B3B73] text-white">
          <span className="font-bold text-sm">{C.caseTotalLabel}</span>
          <span className="font-black text-xl font-mono">{C.caseTotalVal}</span>
        </div>
      </div>
      {/* Savings highlight */}
      <div className="rounded-xl bg-red-50 border border-red-200 p-5 text-center">
        <p className="text-sm text-slate-600 mb-1">{C.caseSaveLabel}</p>
        <p className="text-5xl font-black text-red-600 font-mono">{C.caseSaveVal}</p>
        <p className="text-sm text-red-400 mt-1">{C.caseSaveSub}</p>
      </div>
      {/* Comparison table */}
      <div className="rounded-xl border overflow-hidden">
        <div className="divide-y divide-slate-100">
          {C.compareRows.map((row) => (
            <div
              key={row.label}
              className={[
                "flex justify-between items-center px-5 py-3 gap-4 text-sm",
                row.best ? "bg-[#F0FDF4] font-bold" : "bg-white",
              ].join(" ")}
            >
              <span className={row.best ? "text-[#166534]" : "text-slate-500"}>
                {row.label}
              </span>
              <span
                className={["font-mono", row.best ? "text-[#166534]" : "text-slate-700"].join(
                  " ",
                )}
              >
                {row.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   SEO BLOCK (server-rendered, 600â1000 words RU; concise EN/ES)
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
function SeoBlock({ C, locale }: { C: ReturnType<typeof copy>; locale: string }) {
  const sections = (C as any).seoSections as
    | Array<{ h2: string; p: string[]; h3?: Array<{ t: string; p: string[] }> }>
    | undefined;

  if (!sections || sections.length === 0) return null;

  return (
    <section className="mt-8">
      <details name="germany-main" className="group/main rounded-3xl border bg-white overflow-hidden shadow-2xl">
        {/* ÐÐ¡ÐÐ ÐÐÐÐÐÐÐ 1: ÐÐ°Ð¼ÐµÐ½ÐµÐ½Ñ div Ð½Ð° span */}
        <summary className="cursor-pointer list-none px-4 py-4 sm:px-5 sm:py-5 block">
          <span className="relative flex items-center justify-center w-full">
            <span className="flex items-center gap-3 font-bold text-base sm:text-lg text-[#0B3B73] text-center">
              <img src="/icons/autog.png" alt="" className="h-14 w-14 object-contain" />
              {((C as any).seoTitle)}
            </span>
            <span className="absolute right-0 text-[#0B3B73] transition-transform duration-300 group-open/main:rotate-180">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
                <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </span>
        </summary>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open/main:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="p-4 sm:p-5 space-y-4 text-base leading-relaxed">
              {sections.map((s, idx) => (
                <details
                  key={idx}
                  name="seo-accordion"
                  className="group/sub rounded-2xl border bg-white overflow-hidden"
                >
                  {/* ÐÐ¡ÐÐ ÐÐÐÐÐÐÐ 2: ÐÐ°Ð¼ÐµÐ½ÐµÐ½Ñ div Ð½Ð° span Ð¸ h3 Ð½Ð° span */}
                  <summary className="list-none cursor-pointer select-none block">
                    <span className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5 w-full">
                      <span className="flex items-center gap-3">
                        <img
                          src="/icons/autoge.png"
                          alt=""
                          className="h-20 w-20 object-contain shrink-0"
                        />
                        <span className="text-base sm:text-lg font-bold block">{s.h2}</span>
                      </span>
                      <span className="ml-auto text-[#0B3B73] transition-transform duration-300 group-open/sub:rotate-180">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
                          <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open/sub:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="px-4 pb-5 sm:px-5">
                        <div className="space-y-3">
                          {s.p.map((pp, i) => (
                            <p key={i} className="text-justify" dangerouslySetInnerHTML={{ __html: pp }} />
                          ))}
                        </div>
                        {s.h3?.map((sub, j) => (
                          <div key={j} className="mt-4 space-y-2 rounded-2xl bg-[#F6F8FC] p-4">
                            <h4 className="font-bold text-center mb-2">{sub.t}</h4>
                            {sub.p.map((pp, k) => (
                              <p key={k} className="text-justify">
                                {pp}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
              ))}
              <div className="mt-2 rounded-2xl border-2 border-[#0B3B73] bg-[#f8fafc] p-5 text-center">
                  <p className="font-bold text-2xl text-[#0B3B73]">
                    {locale === "es" ? "Â¿Quiere encontrar su coche?" : locale === "en" ? "Looking for your car?" : "Ð¥Ð¾ÑÐ¸ÑÐµ Ð¿Ð¾Ð´Ð¾Ð±ÑÐ°ÑÑ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ?"}
                  </p>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {locale === "es"
                      ? "Empiece con un anÃ¡lisis gratuito de su solicitud. PÃ³ngase en contacto con nosotros para conocer la situaciÃ³n actual del mercado."
                      : locale === "en"
                      ? "Start with a free analysis of your request. Contact us to find out what's available on the market right now."
                      : "ÐÐ°ÑÐ½Ð¸ÑÐµ Ñ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½Ð¾Ð³Ð¾ Ð°Ð½Ð°Ð»Ð¸Ð·Ð° ÐÐ°ÑÐµÐ³Ð¾ Ð·Ð°Ð¿ÑÐ¾ÑÐ°. Ð¡Ð²ÑÐ¶Ð¸ÑÐµÑÑ Ñ Ð½Ð°Ð¼Ð¸, ÑÑÐ¾Ð±Ñ ÑÐ·Ð½Ð°ÑÑ ÑÐµÐºÑÑÑÑ ÑÐ¸ÑÑÐ°ÑÐ¸Ñ Ð½Ð° ÑÑÐ½ÐºÐµ."}
                  </p>
                  <Link
                    href={`/${locale}/request`}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-10 py-4 text-lg font-bold text-white shadow-[0_10px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-[2px] relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {locale === "es" ? "Rellenar formulario de selecciÃ³n" : locale === "en" ? "Fill in the car sourcing form" : "ÐÐ°Ð¿Ð¾Ð»Ð½Ð¸ÑÑ ÑÐ¾ÑÐ¼Ñ Ð¿Ð¾Ð´Ð±Ð¾ÑÐ° Ð°Ð²ÑÐ¾"}
                    </span>
                    <div className="absolute top-0 -left-[150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 transition-transform duration-[1500ms] group-hover:translate-x-[250%]" />
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </details>
    </section>
  );
}

/* âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   PAGE
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */
export default function GermanyCarPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const C = copy(locale);
  const requestHref = `/${locale}/request`;
  const faqHref = `/${locale}/faq`;

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: C.heroTitle,
    provider: {
      "@type": "LocalBusiness",
      name: "AutoexpertEU",
      url: "https://autoexperteu.com",
      areaServed: "Spain",
    },
    description: C.heroSub,
    offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: C.faqItems.map((f: Item) => ({
      "@type": "Question",
      name: f.t,
      acceptedAnswer: { "@type": "Answer", text: f.d },
    })),
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-8" suppressHydrationWarning translate="no">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          HERO â identical structure to existing page
      ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] lg:h-[390px]">
        <img
          src="/media/images/avto-germany.jpg"
          alt={C.heroAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center lg:absolute lg:inset-0 lg:py-0 lg:translate-y-[61px]">
          <h1 className="text-balance text-2xl font-bold text-white md:text-3xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            {C.heroTitle}
          </h1>
          <p className="mt-2 text-white text-lg md:text-xl font-medium opacity-90 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.8)] tracking-wide">
            {C.heroSub}
          </p>
        </div>
      </section>

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          TEXT BELOW HERO (RU)
      ââââââââââââââââââââââââââââââââââââââââââ */}
      {locale === "ru" ? (
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              ÐÐ²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ â ÑÐ°Ð±Ð¾ÑÐ°ÐµÐ¼ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ, ÐÐ°Ð»ÐµÐ½ÑÐ¸Ð¸, ÐÐ°Ð´ÑÐ¸Ð´Ðµ Ð¸ ÐÐ°ÑÑÐµÐ»Ð¾Ð½Ðµ.
            </h2>
            <p>
              ÐÐ°ÑÐ¾Ð´Ð¸Ð¼ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° Ð½ÐµÐ¼ÐµÑÐºÐ¾Ð¼ Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ Ð¸Ð»Ð¸ Ñ Ð´Ð¸Ð»ÐµÑÐ°, Ð´Ð¾ÑÑÐ°Ð²Ð»ÑÐµÐ¼ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ Ð¸ ÑÐµÐ³Ð¸ÑÑÑÐ¸ÑÑÐµÐ¼ Ð² DGT. ÐÑ Ð¿Ð¾Ð»ÑÑÐ°ÐµÑÐµ Ð³Ð¾ÑÐ¾Ð²ÑÐ¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð½Ð° Ð¸ÑÐ¿Ð°Ð½ÑÐºÐ¸Ñ Ð½Ð¾Ð¼ÐµÑÐ°Ñ â Ð±ÐµÐ· Ð±ÑÑÐ¾ÐºÑÐ°ÑÐ¸Ð¸, ÑÐ·ÑÐºÐ¾Ð²Ð¾Ð³Ð¾ Ð±Ð°ÑÑÐµÑÐ° Ð¸ Ð¿ÐµÑÐµÐ¿Ð»Ð°Ñ Ð´Ð¸Ð»ÐµÑÑ.
            </p>
            <br />
            <p>
              ÐÐ²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¿ÑÐ¸Ð²ÐµÐ·ÑÐ¸ ÑÐµÑÐµÐ· Ð°ÑÐºÑÐ¸Ð¾Ð½, Ñ Ð¾ÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½Ð¾Ð³Ð¾ Ð´Ð¸Ð»ÐµÑÐ° Ð¸Ð»Ð¸ Ð½Ð°Ð¿ÑÑÐ¼ÑÑ Ñ Ð²Ð»Ð°Ð´ÐµÐ»ÑÑÐ°. ÐÑÐ¾Ð³Ð¾Ð²Ð°Ñ ÑÐµÐ½Ð° Ð·Ð°Ð²Ð¸ÑÐ¸Ñ Ð½Ðµ Ð¾Ñ Ð¼ÐµÑÑÐ° Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸, Ð° Ð¾Ñ Ð¿Ð¾Ð»Ð½Ð¾Ð¹ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸ ÑÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ð¸. ÐÑ ÑÐ°ÑÑÑÐ¸ÑÑÐ²Ð°ÐµÐ¼ Ð²ÑÑ Ð·Ð°ÑÐ°Ð½ÐµÐµ: ÑÐµÐ½Ð° Ð°Ð²ÑÐ¾ + Ð´Ð¾ÑÑÐ°Ð²ÐºÐ° + ÑÑÑÐ°ÑÐ¾Ð²ÐºÐ° + ITV + DGT + Ð½Ð°Ð»Ð¾Ð³ IEDMT. ÐÐ¸ÐºÐ°ÐºÐ¸Ñ ÑÑÑÐ¿ÑÐ¸Ð·Ð¾Ð² Ð¿Ð¾ÑÐ»Ðµ Ð¾Ð¿Ð»Ð°ÑÑ.
            </p>
            <br />
            <p className="mt-3 text-base">
              ÐÑÐ»Ð¸ Ð²Ñ Ð½Ð°ÑÐ¾Ð´Ð¸ÑÐµÑÑ Ð² Ð¿ÑÐ¾Ð²Ð¸Ð½ÑÐ¸Ð¸ ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ Ð¸Ð»Ð¸ Ð½Ð° ÐÐ¾ÑÑÐ°-ÐÐ»Ð°Ð½ÐºÐµ, Ð¿Ð¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ Ð¾ ÑÐ°Ð±Ð¾ÑÐµ Ð² ÑÐµÐ³Ð¸Ð¾Ð½Ðµ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¿ÑÐ¾ÑÐ¸ÑÐ°ÑÑ Ð½Ð° ÑÑÑÐ°Ð½Ð¸ÑÐµ{" "}
              <Link href="/ru/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">
                ÐÐ²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ
              </Link>.
            </p>
          </div>
        </section>
      ) : locale === "es" ? (
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              Importar coche de Alemania a EspaÃ±a llave en mano â trabajamos en Alicante, Valencia, Madrid y Barcelona.
            </h2>
            <p>
              Compramos el vehÃ­culo en subasta alemana o en concesionario, lo transportamos a EspaÃ±a y lo matriculamos en la DGT. Usted recibe el coche con placas espaÃ±olas â sin burocracia, sin barrera de idioma y sin sobreprecio de concesionario.
            </p>
            <br />
            <p>
              Traer un coche de Alemania a EspaÃ±a es posible mediante subasta, concesionario oficial o compra directa al propietario. El coste final no depende del lugar de compra, sino del proceso completo de matriculaciÃ³n en EspaÃ±a. Calculamos todo por anticipado: precio del vehÃ­culo + transporte + seguro + ITV + DGT + impuesto de matriculaciÃ³n IEDMT. Sin sorpresas despuÃ©s del pago.
            </p>
            <br />
            <p>
              Si se encuentra en la provincia de Alicante o en la Costa Blanca, puede consultar mÃ¡s sobre nuestro trabajo en la regiÃ³n en la pÃ¡gina{" "}
              <Link href="/es/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">
                Coche de Alemania en Alicante
              </Link>.
            </p>
            <br />
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-center mb-2">El error mÃ¡s habitual al importar un coche de Alemania</p>
              <p>Comparar el precio de compra en Alemania con el precio en EspaÃ±a sin incluir transporte e impuestos. El cÃ¡lculo correcto es: precio de compra + transporte + ITV + IEDMT + gestorÃ­a = coste real del coche con matrÃ­cula espaÃ±ola.</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              Import a car from Germany to Spain turnkey â we work in Alicante, Valencia, Madrid and Barcelona.
            </h2>
            <p>
              We source the vehicle at a German auction or from a dealer, transport it to Spain and register it with the DGT. You receive a car on Spanish plates â no bureaucracy, no language barrier, no dealer markup.
            </p>
            <br />
            <p>
              Importing a car from Germany to Spain is possible through auction, official dealer or direct private purchase. The final price depends not on where you buy, but on the full cost of registration in Spain. We calculate everything upfront: car price + delivery + insurance + ITV + DGT + registration tax (IEDMT). No surprises after payment.
            </p>
            <br />
            <p>
              If you are based in Alicante province or on the Costa Blanca, you can read more about how we work in the region on the{" "}
              <Link href="/en/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">
                Car from Germany in Alicante
              </Link>{" "}page.
            </p>
            <br />
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-center mb-2">The most common mistake when importing a car from Germany</p>
              <p>Comparing the purchase price in Germany with Spanish market prices without adding transport and taxes. The correct calculation: purchase price + transport + ITV + IEDMT + gestorÃ­a = the real cost of the car on Spanish plates.</p>
            </div>
          </div>
        </section>
      )}

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          SEO BLOCK
      ââââââââââââââââââââââââââââââââââââââââââ */}
      <SeoBlock C={C} locale={locale} />

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          ÐÐÐÐ¬ÐÐ£ÐÐ¯Ð¢ÐÐ  â CTA-ÐÐÐÐÐÐ  Ð½Ð° /skolko-stoit
      ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="mt-8">
        <div className="rounded-3xl border-2 border-[#0B3B73] bg-[#F6F8FC] p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-[#0B3B73] text-lg mb-1">
              {locale === "es"
                ? "Â¿Quiere calcular el coste total del vehÃ­culo?"
                : locale === "en"
                ? "Want to calculate the full cost of importing?"
                : "Ð¥Ð¾ÑÐ¸ÑÐµ ÑÐ°ÑÑÑÐ¸ÑÐ°ÑÑ Ð¿Ð¾Ð»Ð½ÑÑ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÑ Ð¿ÑÐ¸Ð²Ð¾Ð·Ð°?"}
            </p>
            <p className="text-base text-gray-600">
              {locale === "es"
                ? "En una pÃ¡gina aparte â calculadora con desglose completo: precio del vehÃ­culo, transporte, ITV, IEDMT, DGT."
                : locale === "en"
                ? "On a separate page â a calculator with a full breakdown: car price, delivery, ITV, IEDMT, DGT."
                : "ÐÐ° Ð¾ÑÐ´ÐµÐ»ÑÐ½Ð¾Ð¹ ÑÑÑÐ°Ð½Ð¸ÑÐµ â ÐºÐ°Ð»ÑÐºÑÐ»ÑÑÐ¾Ñ Ñ ÑÐ°Ð·Ð±Ð¸Ð²ÐºÐ¾Ð¹ Ð¿Ð¾ Ð²ÑÐµÐ¼ ÑÑÐ°ÑÑÑÐ¼: ÑÐµÐ½Ð° Ð°Ð²ÑÐ¾, Ð´Ð¾ÑÑÐ°Ð²ÐºÐ°, ITV, IEDMT, DGT."}
            </p>
          </div>
          <Link
            href={`/${locale}/avto-iz-germanii/skolko-stoit`}
            className="flex-shrink-0 rounded-2xl bg-[#0B3B73] px-7 py-4 font-bold text-white text-base shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none whitespace-nowrap"
          >
            {locale === "es"
              ? "Calculadora de costes â"
              : locale === "en"
              ? "Cost calculator â"
              : "ÐÐ°Ð»ÑÐºÑÐ»ÑÑÐ¾Ñ ÑÑÐ¾Ð¸Ð¼Ð¾ÑÑÐ¸ â"}
          </Link>
        </div>
      </section>

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          INTRO
      ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="mt-8">
        <p className="whitespace-pre-line text-base text-justify leading-relaxed">{C.intro}</p>
      </section>

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          ACCORDIONS
      ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="mt-10 flex flex-col items-center gap-5">
        {/* 1 â Why Germany */}
        <div className="w-full max-w-3xl">
          <details name="germany-main" className="group/section rounded-2xl border bg-white">
            <SectionSummary title={C.whyTitle} />
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open/section:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 sm:p-5 space-y-3">
                  {C.whyItems.map((it: Item, i: number) => (
                    <InnerItem key={i} it={it} name="germany-why" />
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* 2 â Process */}
        <div className="w-full max-w-3xl">
          <details name="germany-main" className="group/section rounded-2xl border bg-white">
            <SectionSummary title={C.processTitle} />
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open/section:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 sm:p-5 space-y-3">
                  {C.processItems.map((it: Item, i: number) => (
                    <InnerItem key={i} it={it} name="germany-process" />
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Ð ÐµÐ°Ð»ÑÐ½Ð°Ñ ÑÐ´ÐµÐ»ÐºÐ° â Ð¿Ð¾Ð±ÐµÐ´Ð° Ð½Ð° Ð°ÑÐºÑÐ¸Ð¾Ð½Ðµ (Ð¿ÐµÑÐµÐ¼ÐµÑÐµÐ½Ð¾ ÑÑÐ°Ð·Ñ Ð¿Ð¾ÑÐ»Ðµ "ÐºÐ°Ðº ÑÑÐ¾ ÑÐ°Ð±Ð¾ÑÐ°ÐµÑ") */}
        <section className="mt-6 flex flex-col items-center">
          <DealCard C={C} />
        </section>

        {/* 4 â Services */}
        <div className="w-full max-w-3xl">
          <details name="germany-main" className="group/section rounded-2xl border bg-white">
            <SectionSummary title={C.servicesTitle} />
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open/section:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 sm:p-5 space-y-3">
                  {C.serviceItems.map((it: Item, i: number) => (
                    <InnerItem key={i} it={it} name="germany-services" />
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* 5 â FAQ */}
        <div className="w-full max-w-3xl">
          <details name="germany-main" className="group/section rounded-2xl border bg-white">
            <SectionSummary title={C.faqTitle} />
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open/section:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 sm:p-5 space-y-3">
                  {C.faqItems.map((it: Item, i: number) => (
                    <InnerItem key={i} it={it} name="germany-faq" />
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          Ð§ÐÐ¢ÐÐÐ¢Ð Ð¢ÐÐÐÐ / SEE ALSO / VER TAMBIÃN
      ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="mt-10">
        <p className="text-base font-semibold text-[#0B3B73] mb-3">
          {locale === "es" ? "Ver tambiÃ©n:" : locale === "en" ? "Read also:" : "Ð§Ð¸ÑÐ°Ð¹ÑÐµ ÑÐ°ÐºÐ¶Ðµ:"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(locale === "es"
            ? [
                { href: "/es/avto-iz-germanii/alicante", label: "Coche de Alemania en Alicante" },
                { href: "/es/avto-iz-germanii/skolko-stoit", label: "Â¿CuÃ¡nto cuesta traer un coche de Alemania?" },
                { href: "/es/avto-iz-germanii/nalogi-i-dokumenty", label: "Impuestos y documentos para coche de Alemania" },
                { href: "/es/avto-iz-germanii/registraciya-dgt", label: "MatriculaciÃ³n en la DGT" },
              ]
            : locale === "en"
            ? [
                { href: "/en/avto-iz-germanii/alicante", label: "Car from Germany in Alicante" },
                { href: "/en/avto-iz-germanii/skolko-stoit", label: "How much does a car from Germany cost?" },
                { href: "/en/avto-iz-germanii/nalogi-i-dokumenty", label: "Taxes and documents for a car from Germany" },
                { href: "/en/avto-iz-germanii/registraciya-dgt", label: "DGT registration in Spain" },
              ]
            : [
                { href: "/ru/avto-iz-germanii/alicante", label: "ÐÐ²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÐ»Ð¸ÐºÐ°Ð½ÑÐµ" },
                { href: "/ru/avto-iz-germanii/skolko-stoit", label: "Ð¡ÐºÐ¾Ð»ÑÐºÐ¾ ÑÑÐ¾Ð¸Ñ Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸ Ð² ÐÑÐ¿Ð°Ð½Ð¸Ñ" },
                { href: "/ru/avto-iz-germanii/nalogi-i-dokumenty", label: "ÐÐ°Ð»Ð¾Ð³Ð¸ Ð¸ Ð´Ð¾ÐºÑÐ¼ÐµÐ½ÑÑ Ð¿ÑÐ¸ Ð¿Ð¾ÐºÑÐ¿ÐºÐµ Ð°Ð²ÑÐ¾ Ð¸Ð· ÐÐµÑÐ¼Ð°Ð½Ð¸Ð¸" },
                { href: "/ru/avto-iz-germanii/registraciya-dgt", label: "Ð ÐµÐ³Ð¸ÑÑÑÐ°ÑÐ¸Ñ Ð°Ð²ÑÐ¾ ÑÐµÑÐµÐ· DGT" },
              ]
          ).map((link) => (
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

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          CTA â identical structure to existing page
      ââââââââââââââââââââââââââââââââââââââââââ */}
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

      {/* ââââââââââââââââââââââââââââââââââââââââââ
          CONTACTS â warm CTA with price and strong buttons
      ââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl border-2 border-[#0B3B73] bg-[#f8fafc] p-6 sm:p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0B3B73] opacity-60 mb-2">
            {locale === "es" ? "Servicio de selecciÃ³n de vehÃ­culo" : locale === "en" ? "Car sourcing service" : "Ð£ÑÐ»ÑÐ³Ð° Ð¿Ð¾Ð´Ð±Ð¾ÑÐ° Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3B73]">
            {locale === "es" ? "895 â¬ â anÃ¡lisis gratuito incluido" : locale === "en" ? "895 â¬ â free analysis included" : "895 â¬ â Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½ÑÐ¹ Ð°Ð½Ð°Ð»Ð¸Ð· Ð²ÐºÐ»ÑÑÑÐ½"}
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-xl mx-auto">
            {locale === "es"
              ? "CuÃ©ntenos el coche que busca â verificamos el mercado gratis y le decimos si es posible encontrarlo, cuÃ¡nto costarÃ¡ llave en mano, o le proponemos algo mejor de lo que imagina."
              : locale === "en"
              ? "Tell us what car you're looking for â we check the market for free and tell you if it can be found, what it will cost turnkey, or suggest something better than you imagined."
              : "Ð Ð°ÑÑÐºÐ°Ð¶Ð¸ÑÐµ, ÐºÐ°ÐºÐ¾Ð¹ Ð°Ð²ÑÐ¾Ð¼Ð¾Ð±Ð¸Ð»Ñ Ð²Ñ Ð¸ÑÐµÑÐµ â Ð¼Ñ Ð±ÐµÑÐ¿Ð»Ð°ÑÐ½Ð¾ Ð¿ÑÐ¾Ð²ÐµÑÐ¸Ð¼ ÑÑÐ½Ð¾Ðº Ð¸ ÑÐºÐ°Ð¶ÐµÐ¼, ÑÐµÐ°Ð»ÑÐ½Ð¾ Ð»Ð¸ ÐµÐ³Ð¾ Ð½Ð°Ð¹ÑÐ¸, ÑÐºÐ¾Ð»ÑÐºÐ¾ Ð±ÑÐ´ÐµÑ ÑÑÐ¾Ð¸ÑÑ Ð¿Ð¾Ð´ ÐºÐ»ÑÑ, Ð¸Ð»Ð¸ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶Ð¸Ð¼ Ð²Ð°ÑÐ¸Ð°Ð½Ñ Ð»ÑÑÑÐµ, ÑÐµÐ¼ Ð²Ñ Ð¿ÑÐµÐ´Ð¿Ð¾Ð»Ð°Ð³Ð°ÐµÑÐµ."}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={requestHref}
              className="inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-8 py-4 text-base font-bold text-white shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_4px_0_rgba(0,0,0,0.25)] transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">{C.btnOrder}</span>
              <div className="absolute top-0 -left-[150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 transition-transform duration-[1500ms] group-hover:translate-x-[250%]" />
            </Link>
            <Link
              href={faqHref}
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#0B3B73] bg-white px-8 py-4 text-base font-bold text-[#0B3B73] shadow-[0_8px_0_rgba(11,59,115,0.2)] hover:bg-[#0B3B73] hover:text-white active:translate-y-[2px] active:shadow-[0_4px_0_rgba(11,59,115,0.2)] transition-all"
            >
              {C.btnFaq}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
