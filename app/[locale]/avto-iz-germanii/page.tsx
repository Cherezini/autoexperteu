import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
      en: "Is It Cheaper to Buy a Car from Germany to Spain? Save €5,000–€20,000 | AutoexpertEU",
          es: "¿Es más barato importar un coche de Alemania a España? Ahorra €5.000–€20.000 | AutoexpertEU",
              ru: "Авто из Германии в Испанию — реальная экономия €5 000–€20 000 | AutoexpertEU",
                };
                  const descriptions: Record<string, string> = {
                      en: "We source cars from closed German B2B auctions — same channels dealers use, without their markup. Full cost calculated upfront: car + transport + ITV + DGT registration. Free analysis.",
                          es: "Compramos coches en subastas B2B alemanas cerradas — el mismo canal que usan los concesionarios, sin su margen. Coste total calculado por adelantado. Análisis gratuito.",
                              ru: "Подбираем авто на закрытых B2B-аукционах Германии — те же каналы что используют дилеры, без их наценки. Полная стоимость под ключ заранее. Бесплатный анализ.",
                                };
                                  return {
                                      title: titles[params.locale] || titles.en,
                                          description: descriptions[params.locale] || descriptions.en,
                                            };
                                            }

                                            
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

/* ─────────────────────────────────────────────────────────────
   METADATA (server-side) — per locale
───────────────────────────────────────────────────────────── */
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
      ? "Как зарегистрировать автомобиль из Германии в Испании. ITV, налоги, документы и регистрация в DGT."
      : locale === "es"
        ? "Cómo matricular un coche de Alemania en España. ITV, impuestos y registro en DGT paso a paso."
        : "How to register a car from Germany in Spain. ITV inspection, taxes and DGT registration process.";

  const titles: Record<string, string> = {
    ru: "Авто из Германии в Испанию — покупка, доставка и регистрация в DGT",
    es: "Importar coche de Alemania a España — compra, transporte y matriculación en DGT | AutoexpertEU",
    en: "Car import from Germany to Spain — purchase, delivery and DGT registration | AutoexpertEU",
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

/* ─────────────────────────────────────────────────────────────
   SHARED ACCORDION COMPONENTS (identical style to existing site)
───────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────
   DEAL CARD (replaces boutique urgency block — same border/bg style)
───────────────────────────────────────────────────────────── */
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
      {/* Savings — green scoreboard style */}
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

/* ─────────────────────────────────────────────────────────────
   CASE STUDY CONTENT (rendered inside accordion)
───────────────────────────────────────────────────────────── */
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
        {/* Total bar — navy blue, same as buttons */}
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

/* ─────────────────────────────────────────────────────────────
   SEO BLOCK (server-rendered, 600–1000 words RU; concise EN/ES)
───────────────────────────────────────────────────────────── */
function SeoBlock({ C, locale }: { C: ReturnType<typeof copy>; locale: string }) {
  const sections = (C as any).seoSections as
    | Array<{ h2: string; p: string[]; h3?: Array<{ t: string; p: string[] }> }>
    | undefined;

  if (!sections || sections.length === 0) return null;

  return (
    <section className="mt-8">
      <details name="germany-main" className="group/main rounded-3xl border bg-white overflow-hidden shadow-2xl">
        {/* ИСПРАВЛЕНИЕ 1: Заменены div на span */}
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
                  {/* ИСПРАВЛЕНИЕ 2: Заменены div на span и h3 на span */}
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
                    {locale === "es" ? "¿Quiere encontrar su coche?" : locale === "en" ? "Looking for your car?" : "Хотите подобрать автомобиль?"}
                  </p>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {locale === "es"
                      ? "Empiece con un análisis gratuito de su solicitud. Póngase en contacto con nosotros para conocer la situación actual del mercado."
                      : locale === "en"
                      ? "Start with a free analysis of your request. Contact us to find out what's available on the market right now."
                      : "Начните с бесплатного анализа Вашего запроса. Свяжитесь с нами, чтобы узнать текущую ситуацию на рынке."}
                  </p>
                  <Link
                    href={`/${locale}/request`}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-10 py-4 text-lg font-bold text-white shadow-[0_10px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-[2px] relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {locale === "es" ? "Rellenar formulario de selección" : locale === "en" ? "Fill in the car sourcing form" : "Заполнить форму подбора авто"}
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

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
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

      {/* ══════════════════════════════════════════
          HERO — identical structure to existing page
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          TEXT BELOW HERO (RU)
      ══════════════════════════════════════════ */}
      {locale === "ru" ? (
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              Авто из Германии в Испанию под ключ — работаем в Аликанте, Валенсии, Мадриде и Барселоне.
            </h2>
            <p>
              Находим автомобиль на немецком аукционе или у дилера, доставляем в Испанию и регистрируем в DGT. Вы получаете готовый автомобиль на испанских номерах — без бюрократии, языкового барьера и переплат дилеру.
            </p>
            <br />
            <p>
              Авто из Германии можно привезти через аукцион, у официального дилера или напрямую у владельца. Итоговая цена зависит не от места покупки, а от полной стоимости регистрации в Испании. Мы рассчитываем всё заранее: цена авто + доставка + страховка + ITV + DGT + налог IEDMT. Никаких сюрпризов после оплаты.
            </p>
            <br />
            <p className="mt-3 text-base">
              Если вы находитесь в провинции Аликанте или на Коста-Бланке, подробнее о работе в регионе можно прочитать на странице{" "}
              <Link href="/ru/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">
                Авто из Германии в Аликанте
              </Link>.
            </p>
          </div>
        </section>
      ) : locale === "es" ? (
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              Importar coche de Alemania a España llave en mano — trabajamos en Alicante, Valencia, Madrid y Barcelona.
            </h2>
            <p>
              Compramos el vehículo en subasta alemana o en concesionario, lo transportamos a España y lo matriculamos en la DGT. Usted recibe el coche con placas españolas — sin burocracia, sin barrera de idioma y sin sobreprecio de concesionario.
            </p>
            <br />
            <p>
              Traer un coche de Alemania a España es posible mediante subasta, concesionario oficial o compra directa al propietario. El coste final no depende del lugar de compra, sino del proceso completo de matriculación en España. Calculamos todo por anticipado: precio del vehículo + transporte + seguro + ITV + DGT + impuesto de matriculación IEDMT. Sin sorpresas después del pago.
            </p>
            <br />
            <p>
              Si se encuentra en la provincia de Alicante o en la Costa Blanca, puede consultar más sobre nuestro trabajo en la región en la página{" "}
              <Link href="/es/avto-iz-germanii/alicante" className="text-[#0B3B73] underline font-semibold">
                Coche de Alemania en Alicante
              </Link>.
            </p>
            <br />
            <div className="rounded-2xl bg-[#F6F8FC] border p-5">
              <p className="font-bold text-center mb-2">El error más habitual al importar un coche de Alemania</p>
              <p>Comparar el precio de compra en Alemania con el precio en España sin incluir transporte e impuestos. El cálculo correcto es: precio de compra + transporte + ITV + IEDMT + gestoría = coste real del coche con matrícula española.</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-8">
          <div className="text-base leading-relaxed" style={{ textAlign: "justify" }}>
            <h2 className="text-xl font-bold text-[#0B3B73] mb-4">
              Import a car from Germany to Spain turnkey — we work in Alicante, Valencia, Madrid and Barcelona.
            </h2>
            <p>
              We source the vehicle at a German auction or from a dealer, transport it to Spain and register it with the DGT. You receive a car on Spanish plates — no bureaucracy, no language barrier, no dealer markup.
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
              <p>Comparing the purchase price in Germany with Spanish market prices without adding transport and taxes. The correct calculation: purchase price + transport + ITV + IEDMT + gestoría = the real cost of the car on Spanish plates.</p>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          SEO BLOCK
      ══════════════════════════════════════════ */}
      <SeoBlock C={C} locale={locale} />

      {/* ══════════════════════════════════════════
          КАЛЬКУЛЯТОР → CTA-БАННЕР на /skolko-stoit
      ══════════════════════════════════════════ */}
      <section className="mt-8">
        <div className="rounded-3xl border-2 border-[#0B3B73] bg-[#F6F8FC] p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-[#0B3B73] text-lg mb-1">
              {locale === "es"
                ? "¿Quiere calcular el coste total del vehículo?"
                : locale === "en"
                ? "Want to calculate the full cost of importing?"
                : "Хотите рассчитать полную стоимость привоза?"}
            </p>
            <p className="text-base text-gray-600">
              {locale === "es"
                ? "En una página aparte — calculadora con desglose completo: precio del vehículo, transporte, ITV, IEDMT, DGT."
                : locale === "en"
                ? "On a separate page — a calculator with a full breakdown: car price, delivery, ITV, IEDMT, DGT."
                : "На отдельной странице — калькулятор с разбивкой по всем статьям: цена авто, доставка, ITV, IEDMT, DGT."}
            </p>
          </div>
          <Link
            href={`/${locale}/avto-iz-germanii/skolko-stoit`}
            className="flex-shrink-0 rounded-2xl bg-[#0B3B73] px-7 py-4 font-bold text-white text-base shadow-[0_6px_0_rgba(0,0,0,0.2)] transition hover:brightness-110 active:translate-y-1 active:shadow-none whitespace-nowrap"
          >
            {locale === "es"
              ? "Calculadora de costes →"
              : locale === "en"
              ? "Cost calculator →"
              : "Калькулятор стоимости →"}
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════ */}
      <section className="mt-8">
        <p className="whitespace-pre-line text-base text-justify leading-relaxed">{C.intro}</p>
      </section>

      {/* ══════════════════════════════════════════
          ACCORDIONS
      ══════════════════════════════════════════ */}
      <section className="mt-10 flex flex-col items-center gap-5">
        {/* 1 — Why Germany */}
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

        {/* 2 — Process */}
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

        {/* Реальная сделка — победа на аукционе (перемещено сразу после "как это работает") */}
        <section className="mt-6 flex flex-col items-center">
          <DealCard C={C} />
        </section>

        {/* 4 — Services */}
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

        {/* 5 — FAQ */}
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

      {/* ══════════════════════════════════════════
          ЧИТАЙТЕ ТАКЖЕ / SEE ALSO / VER TAMBIÉN
      ══════════════════════════════════════════ */}
      <section className="mt-10">
        <p className="text-base font-semibold text-[#0B3B73] mb-3">
          {locale === "es" ? "Ver también:" : locale === "en" ? "Read also:" : "Читайте также:"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(locale === "es"
            ? [
                { href: "/es/avto-iz-germanii/alicante", label: "Coche de Alemania en Alicante" },
                { href: "/es/avto-iz-germanii/skolko-stoit", label: "¿Cuánto cuesta traer un coche de Alemania?" },
                { href: "/es/avto-iz-germanii/nalogi-i-dokumenty", label: "Impuestos y documentos para coche de Alemania" },
                { href: "/es/avto-iz-germanii/registraciya-dgt", label: "Matriculación en la DGT" },
              ]
            : locale === "en"
            ? [
                { href: "/en/avto-iz-germanii/alicante", label: "Car from Germany in Alicante" },
                { href: "/en/avto-iz-germanii/skolko-stoit", label: "How much does a car from Germany cost?" },
                { href: "/en/avto-iz-germanii/nalogi-i-dokumenty", label: "Taxes and documents for a car from Germany" },
                { href: "/en/avto-iz-germanii/registraciya-dgt", label: "DGT registration in Spain" },
              ]
            : [
                { href: "/ru/avto-iz-germanii/alicante", label: "Авто из Германии в Аликанте" },
                { href: "/ru/avto-iz-germanii/skolko-stoit", label: "Сколько стоит авто из Германии в Испанию" },
                { href: "/ru/avto-iz-germanii/nalogi-i-dokumenty", label: "Налоги и документы при покупке авто из Германии" },
                { href: "/ru/avto-iz-germanii/registraciya-dgt", label: "Регистрация авто через DGT" },
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

      {/* ══════════════════════════════════════════
          CTA — identical structure to existing page
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          CONTACTS — warm CTA with price and strong buttons
      ══════════════════════════════════════════ */}
      <section className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl border-2 border-[#0B3B73] bg-[#f8fafc] p-6 sm:p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0B3B73] opacity-60 mb-2">
            {locale === "es" ? "Servicio de selección de vehículo" : locale === "en" ? "Car sourcing service" : "Услуга подбора автомобиля"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3B73]">
            {locale === "es" ? "895 € — análisis gratuito incluido" : locale === "en" ? "895 € — free analysis included" : "895 € — бесплатный анализ включён"}
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-xl mx-auto">
            {locale === "es"
              ? "Cuéntenos el coche que busca — verificamos el mercado gratis y le decimos si es posible encontrarlo, cuánto costará llave en mano, o le proponemos algo mejor de lo que imagina."
              : locale === "en"
              ? "Tell us what car you're looking for — we check the market for free and tell you if it can be found, what it will cost turnkey, or suggest something better than you imagined."
              : "Расскажите, какой автомобиль вы ищете — мы бесплатно проверим рынок и скажем, реально ли его найти, сколько будет стоить под ключ, или предложим вариант лучше, чем вы предполагаете."}
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