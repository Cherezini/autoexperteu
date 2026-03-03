"use client";

import { useMemo, useState } from "react";

type Locale = "ru" | "en" | "es";

/* ─────────────────────────────────────────────────────────────
   CALCULATOR COMPONENT (CLIENT)
───────────────────────────────────────────────────────────── */
export default function CarCalculatorClient({ locale }: { locale: Locale }) {
  const [carPrice, setCarPrice] = useState(5000);
  const [delivery, setDelivery] = useState(1300);
  const [engineType, setEngineType] = useState("medium");
  const [region, setRegion] = useState("default");

  const labels = {
    ru: {
      title: "Калькулятор стоимости пригона под ключ",
      priceLabel: "Цена авто в Германии (€):",
      deliveryLabel: "Стоимость доставки (€):",
      catLabel: "Тип двигателя:",
      regLabel: "Регион регистрации в Испании:",
      serviceLabel: "Услуги AutoexpertEU:",
      taxLabel: "Налог на регистрацию (IEDMT):",
      feesLabel: "Сборы (ITV, DGT, Номера):",
      totalLabel: "Итоговая цена в Испании:",
      vatNotice:
        "💡 Обратите внимание: при последующей продаже автомобиля вам потребуется уплатить IVA (НДС). Учитывайте это при планировании бюджета.",
      disclaimer:
        "Расчёт является ориентировочным. Итоговая стоимость зависит от конкретной модели, года выпуска, места приобретения, уровня CO₂ и оценочной стоимости автомобиля по таблицам Hacienda. Данный расчёт не является офертой и не может служить основанием для заключения договора. Точные цифры — на нашей консультации.",
      cats: {
        eco: "Электро / Плагин-гибрид (0%)",
        low: "Бензин/Дизель до 120г CO2 (0%)",
        medium: "Бензин/Дизель 120-159г CO2 (4.75%)",
        high: "Мощный ДВС 160-199г CO2 (9.75%)",
        max: "Сверхмощный / SUV > 200г (14.75%)",
      },
    },
    es: {
      title: "Calculadora de importación llave en mano",
      priceLabel: "Precio en Alemania (€):",
      deliveryLabel: "Coste de transporte (€):",
      catLabel: "Tipo de motor:",
      regLabel: "Comunidad Autónoma:",
      serviceLabel: "Servicios AutoexpertEU:",
      taxLabel: "Impuesto de Matriculación (IEDMT):",
      feesLabel: "Tasas (ITV, DGT, Placas):",
      totalLabel: "Precio final en España:",
      vatNotice:
        "💡 Nota: si más adelante vendes el vehículo, tendrás que pagar el IVA. Tenlo en cuenta al planificar tu presupuesto.",
      disclaimer:
        "El cálculo es orientativo. El coste final depende del modelo конкрето, el año de fabricación, el lugar de compra, el nivel de CO₂ y el valor fiscal del vehículo según las tablas de Hacienda. Este cálculo no constituye una oferta y no puede servir de base para la firma de un contrato. Las cifras exactas — en nuestra consulta.",
      cats: {
        eco: "Eléctrico / Híbrido Enchufable (0%)",
        low: "Gasolina/Diésel < 120g CO2 (0%)",
        medium: "Estándar 120-159g CO2 (4.75%)",
        high: "Motor potente 160-199g CO2 (9.75%)",
        max: "SUV / Gran potencia > 200g (14.75%)",
      },
    },
    en: {
      title: "Turnkey Import Cost Calculator",
      priceLabel: "Car price in Germany (€):",
      deliveryLabel: "Delivery cost (€):",
      catLabel: "Engine type:",
      regLabel: "Region in Spain:",
      serviceLabel: "AutoexpertEU Service:",
      taxLabel: "Registration Tax (IEDMT):",
      feesLabel: "Fees (ITV, DGT, Plates):",
      totalLabel: "Total price in Spain:",
      vatNotice:
        "💡 Note: if you sell the car later, you will need to pay VAT (IVA). Keep this in mind when planning your budget.",
      disclaimer:
        "This is an indicative estimate. The final cost depends on the specific model, year of manufacture, place of purchase, CO₂ level, and the vehicle’s assessed value according to Hacienda tables. This estimate is not an offer and cannot serve as a basis for signing a contract. Exact figures — during our consultation.",
      cats: {
        eco: "Electric / Plug-in Hybrid (0%)",
        low: "Petrol/Diesel < 120g CO2 (0%)",
        medium: "Standard 120-159g CO2 (4.75%)",
        high: "Powerful engine 160-199g CO2 (9.75%)",
        max: "SUV / High power > 200g (14.75%)",
      },
    },
  }[locale];

  const results = useMemo(() => {
    const SERVICE_FEE = 895;
    let taxRate = 0.0475;
    if (engineType === "eco" || engineType === "low") taxRate = 0;
    if (engineType === "high") taxRate = 0.0975;
    if (engineType === "max") taxRate = 0.1475;

    const regionBonus = region === "extra" ? 0.01 : 0;
    const calculatedTax = carPrice * (taxRate + regionBonus);
    const fixedFees = 450;

    return {
      tax: Math.round(calculatedTax),
      fees: fixedFees,
      total: Math.round(carPrice + delivery + calculatedTax + fixedFees + SERVICE_FEE),
    };
  }, [carPrice, delivery, engineType, region]);

  return (
    <section className="mt-12 rounded-3xl border-2 border-[#0B3B73] bg-white p-6 shadow-2xl text-slate-800">
      <h2 className="mb-6 text-center text-2xl font-bold text-[#0B3B73]">{labels.title}</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              {labels.priceLabel} {carPrice} €
            </label>
            <input
              type="range"
              min="5000"
              max="150000"
              step="500"
              value={carPrice}
              onChange={(e) => setCarPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B3B73]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              {labels.deliveryLabel} {delivery} €
            </label>
            <input
              type="range"
              min="1300"
              max="1800"
              step="50"
              value={delivery}
              onChange={(e) => setDelivery(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B3B73]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">{labels.catLabel}</label>
            <select
              value={engineType}
              onChange={(e) => setEngineType(e.target.value)}
              className="w-full rounded-xl border p-2 bg-slate-50 outline-none focus:border-[#0B3B73]"
            >
              <option value="eco">{labels.cats.eco}</option>
              <option value="low">{labels.cats.low}</option>
              <option value="medium">{labels.cats.medium}</option>
              <option value="high">{labels.cats.high}</option>
              <option value="max">{labels.cats.max}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">{labels.regLabel}</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full rounded-xl border p-2 bg-slate-50 outline-none focus:border-[#0B3B73]"
            >
              <option value="default">Comunidad Valenciana / Madrid</option>
              <option value="extra">Andalucía / Cataluña / Asturias</option>
              <option value="default">Canarias / Otros</option>
            </select>
          </div>
        </div>

        <div className="rounded-2xl bg-[#F6F8FC] p-6 text-slate-800">
          <div className="space-y-3 border-b pb-4">
            <div className="flex justify-between">
              <span>{labels.serviceLabel}</span>
              <span className="font-bold">895 €</span>
            </div>
            <div className="flex justify-between">
              <span>{labels.taxLabel}</span>
              <span className="font-bold">{results.tax} €</span>
            </div>
            <div className="flex justify-between">
              <span>{labels.feesLabel}</span>
              <span className="font-bold">{results.fees} €</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>{labels.deliveryLabel}</span>
              <span>{delivery} €</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center text-xl font-black text-[#0B3B73]">
            <span>{labels.totalLabel}</span>
            <span className="text-2xl font-mono">{results.total} €</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-base text-slate-700">{labels.vatNotice}</div>

      <p className="mt-6 text-center text-sm leading-tight text-slate-600 italic border-t pt-4">
        <span className="not-italic">⚠️ </span>
        {labels.disclaimer}
      </p>
    </section>
  );
}
