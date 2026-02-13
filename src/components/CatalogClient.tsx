'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import CarCard from '@/components/CarCard';

type AnyCar = any;

function label(locale: string) {
  const isES = locale === 'es';
  const isEN = locale === 'en';
  return {
    filters: isES ? 'Filtrar' : isEN ? 'Filters' : 'Фильтры',
    brand: isES ? 'Marca' : isEN ? 'Brand' : 'Марка',
    model: isES ? 'Modelo' : isEN ? 'Model' : 'Модель',
    priceMax: isES ? 'Precio hasta (€)' : isEN ? 'Max price (€)' : 'Цена до (€)',
    yearMin: isES ? 'Año desde' : isEN ? 'Year from' : 'Год от',
    mileageMax: isES ? 'Km hasta' : isEN ? 'Mileage up to' : 'Пробег до',
    engine: isES ? 'Motor' : isEN ? 'Engine' : 'Двигатель',
    gearbox: isES ? 'Caja' : isEN ? 'Gearbox' : 'Коробка',
    reset: isES ? 'Restablecer' : isEN ? 'Reset' : 'Сбросить',
    tradeTitle: isES ? '¿Quieres cambiar tu coche?' : isEN ? 'Want to change your car?' : 'Хотите сменить автомобиль?',
    tradeText:
      isES
        ? 'Compramos tu coche a precio de mercado y seleccionamos uno nuevo llave en mano con verificación legal'
        : isEN
        ? 'We buy your car at market price and source a new one turnkey with legal check'
        : 'Мы выкупаем ваш автомобиль по рыночной цене и подбираем новый под ключ с проверкой адвоката',
    tradeCta: isES ? 'Tasar mi coche para el cambio' : isEN ? 'Get a trade‑in valuation' : 'Оценить мой автомобиль для обмена',
    bottom:
      isES
        ? '¿No has encontrado el vehículo que estás buscando? Nosotros lo buscamos por ti'
        : isEN
        ? 'Didn’t find the car you’re looking for? We’ll source it for you'
        : 'Не нашли подходящий автомобиль? Мы подберём его для вас по всей Европе',
    bottomCta: isES ? 'Coche a la carta' : isEN ? 'Car sourcing' : 'Автоподбор под ключ',
  };
}

function asNum(v: any): number | null {
  if (v === null || v === undefined) return null;
  const n = Number(String(v).replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : null;
}

export default function CatalogClient({ cars, locale }: { cars: AnyCar[]; locale: string }) {
  const L = label(locale);

  const brands = useMemo(() => {
    const set = new Set<string>();
    cars.forEach((c) => {
      const b = (c?.brand ?? c?.make ?? c?.Marca ?? c?.Brand ?? '').toString().trim();
      if (b) set.add(b);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [cars]);

  const models = useMemo(() => {
    const set = new Set<string>();
    cars.forEach((c) => {
      const m = (c?.model ?? c?.Modelo ?? c?.Model ?? '').toString().trim();
      if (m) set.add(m);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [cars]);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [yearMin, setYearMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const [engine, setEngine] = useState('');
  const [gearbox, setGearbox] = useState('');

  const filtered = useMemo(() => {
    const pMax = asNum(priceMax);
    const yMin = asNum(yearMin);
    const kmMax = asNum(mileageMax);

    return cars.filter((c) => {
      const b = (c?.brand ?? c?.make ?? c?.Marca ?? c?.Brand ?? '').toString().trim();
      const m = (c?.model ?? c?.Modelo ?? c?.Model ?? '').toString().trim();
      const y = asNum(c?.year ?? c?.Año ?? c?.Year);
      const km = asNum(c?.mileage ?? c?.Km ?? c?.Mileage);
      const p = asNum(c?.price ?? c?.Precio ?? c?.Price);
      const e = (c?.engine ?? c?.Motor ?? c?.Engine ?? '').toString().trim();
      const g = (c?.gearbox ?? c?.Caja ?? c?.Transmission ?? c?.Gearbox ?? '').toString().trim();

      if (brand && b.toLowerCase() !== brand.toLowerCase()) return false;
      if (model && m.toLowerCase() !== model.toLowerCase()) return false;
      if (pMax !== null && p !== null && p > pMax) return false;
      if (yMin !== null && y !== null && y < yMin) return false;
      if (kmMax !== null && km !== null && km > kmMax) return false;
      if (engine && !e.toLowerCase().includes(engine.toLowerCase())) return false;
      if (gearbox && !g.toLowerCase().includes(gearbox.toLowerCase())) return false;
      return true;
    });
  }, [cars, brand, model, priceMax, yearMin, mileageMax, engine, gearbox]);

  function reset() {
    setBrand('');
    setModel('');
    setPriceMax('');
    setYearMin('');
    setMileageMax('');
    setEngine('');
    setGearbox('');
  }

  return (
    <div className="space-y-6">
      <section className="rounded-xl border p-4 bg-white space-y-3">
        <div className="font-semibold">{L.filters}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="space-y-1">
            <div className="text-xs text-neutral-600">{L.brand}</div>
            <select className="w-full border rounded px-3 py-2 text-sm" value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="">—</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-600">{L.model}</div>
            <select className="w-full border rounded px-3 py-2 text-sm" value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="">—</option>
              {models.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-600">{L.priceMax}</div>
            <input className="w-full border rounded px-3 py-2 text-sm" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} placeholder="30000" />
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-600">{L.yearMin}</div>
            <input className="w-full border rounded px-3 py-2 text-sm" value={yearMin} onChange={(e) => setYearMin(e.target.value)} placeholder="2020" />
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-600">{L.mileageMax}</div>
            <input className="w-full border rounded px-3 py-2 text-sm" value={mileageMax} onChange={(e) => setMileageMax(e.target.value)} placeholder="100000" />
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-600">{L.engine}</div>
            <input className="w-full border rounded px-3 py-2 text-sm" value={engine} onChange={(e) => setEngine(e.target.value)} placeholder={locale === 'es' ? 'Diesel, Gasolina...' : locale === 'en' ? 'Diesel, Petrol...' : 'Дизель, бензин...'} />
          </div>

          <div className="space-y-1">
            <div className="text-xs text-neutral-600">{L.gearbox}</div>
            <input className="w-full border rounded px-3 py-2 text-sm" value={gearbox} onChange={(e) => setGearbox(e.target.value)} placeholder={locale === 'es' ? 'Automático...' : locale === 'en' ? 'Automatic...' : 'Автомат...'} />
          </div>

          <div className="flex items-end">
            <button type="button" className="w-full border rounded px-3 py-2 text-sm" onClick={reset}>
              {L.reset}
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border p-5 bg-white space-y-3">
        <div className="font-semibold">{L.tradeTitle}</div>
        <div className="text-sm text-neutral-700">{L.tradeText}</div>
        <Link className="inline-block px-4 py-2 rounded border text-sm" href={`/${locale}/venta?mode=tradein`}>
          {L.tradeCta}
        </Link>
      </section>

      {filtered.length === 0 ? (
        <p className="text-sm text-neutral-600">{locale === 'es' ? 'No hay coches publicados o no hay coincidencias.' : locale === 'en' ? 'No published cars or no matches.' : 'Пока нет опубликованных авто или нет совпадений по фильтрам.'}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((car, idx) => (
            <CarCard key={(car as any).id || idx} car={car} />
          ))}
        </div>
      )}

      <section className="rounded-xl border p-5 bg-white space-y-3">
        <div className="text-sm text-neutral-700">{L.bottom}</div>
        <Link className="inline-block px-4 py-2 rounded bg-black text-white text-sm" href={`/${locale}/coche-a-la-carta`}>
          {L.bottomCta}
        </Link>
      </section>
    </div>
  );
}
