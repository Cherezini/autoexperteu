'use client';

import { useState } from 'react';

const WHATSAPP_PHONE = '34722756695';

function t(locale: string) {
  const isES = locale === 'es';
  const isEN = locale === 'en';
  if (isES) {
    return {
      title: 'Vender mi coche / intercambio',
      subtitle: 'Rellena el formulario: se enviará un mensaje a WhatsApp de AutoExpert EU.',
      name: 'Nombre',
      wa: 'WhatsApp',
      city: 'Ciudad / Provincia',
      car: 'Marca, modelo, versión',
      year: 'Año',
      km: 'Kilometraje (km)',
      price: 'Precio esperado (€)',
      note: 'Comentario',
      send: 'Enviar por WhatsApp',
      hint: 'Después de enviar el formulario, envía fotos por WhatsApp (3–10 fotos + VIN).',
      buildMsg: (name: string, wa: string, city: string, car: string, year: string, km: string, price: string, note: string) =>
        `🚗 VENDER / INTERCAMBIO — AutoExpert EU\n` +
        `👤 Cliente: ${name}\n` +
        `📞 WA: ${wa}\n` +
        `📍 Ubicación: ${city}\n` +
        `🚗 Coche: ${car}\n` +
        (year ? `📅 Año: ${year}\n` : '') +
        (km ? `🛣 Km: ${km}\n` : '') +
        (price ? `💰 Precio esperado: ${price} €\n` : '') +
        `📝 Info: ${note}`,
      thank: '/es/gracias?type=sell',
    };
  }

  if (isEN) {
    return {
      title: 'Sell / trade‑in',
      subtitle: 'Fill in the form: it will send a message to AutoExpert EU WhatsApp.',
      name: 'Name',
      wa: 'WhatsApp',
      city: 'City / Province',
      car: 'Brand, model, version',
      year: 'Year',
      km: 'Mileage (km)',
      price: 'Expected price (€)',
      note: 'Comment',
      send: 'Send on WhatsApp',
      hint: 'After submitting, send photos via WhatsApp (3–10 photos + VIN).',
      buildMsg: (name: string, wa: string, city: string, car: string, year: string, km: string, price: string, note: string) =>
        `🚗 SELL / TRADE‑IN — AutoExpert EU\n` +
        `👤 Client: ${name}\n` +
        `📞 WA: ${wa}\n` +
        `📍 Location: ${city}\n` +
        `🚗 Car: ${car}\n` +
        (year ? `📅 Year: ${year}\n` : '') +
        (km ? `🛣 Mileage: ${km}\n` : '') +
        (price ? `💰 Expected price: ${price} €\n` : '') +
        `📝 Info: ${note}`,
      thank: '/en/gracias?type=sell',
    };
  }

  return {
    title: 'Продать авто / обменять',
    subtitle: 'Заполните форму — она отправит сообщение в WhatsApp AutoExpert EU.',
    name: 'Имя',
    wa: 'WhatsApp',
    city: 'Город / Провинция',
    car: 'Марка, модель, версия',
    year: 'Год',
    km: 'Пробег (км)',
    price: 'Желаемая цена (€)',
    note: 'Комментарий',
    send: 'Отправить в WhatsApp',
    hint: 'Фото добавьте сообщением в WhatsApp после отправки формы (3–10 фото салон/кузов + VIN).',
    buildMsg: (name: string, wa: string, city: string, car: string, year: string, km: string, price: string, note: string) =>
      `🚗 ПРОДАТЬ / ОБМЕНЯТЬ АВТО — AutoExpert EU\n` +
      `👤 Клиент: ${name}\n` +
      `📞 WA клиента: ${wa}\n` +
      `📍 Локация: ${city}\n` +
      `🚗 Авто: ${car}\n` +
      (year ? `📅 Год: ${year}\n` : '') +
      (km ? `🛣 Пробег: ${km}\n` : '') +
      (price ? `💰 Цена (ожидание): ${price} €\n` : '') +
      `📝 Инфо: ${note}`,
    thank: '/ru/gracias?type=sell',
  };
}

export default function SellForm({ locale }: { locale: string }) {
  const L = t(locale);

  const requiredMsg =
    locale === 'es'
      ? 'Por favor, complete los campos obligatorios antes de enviar el formulario.'
      : locale === 'en'
      ? 'Please fill in the required fields before submitting the form.'
      : 'Пожалуйста, заполните обязательные поля перед отправкой формы.';

  const [name, setName] = useState('');
  const [wa, setWa] = useState('');
  const [city, setCity] = useState('');
  const [car, setCar] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [price, setPrice] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !wa.trim() || !car.trim()) {
      setError(requiredMsg);
      return;
    }
    setError('');
    const msg = L.buildMsg(name, wa, city, car, year, km, price, note);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`, '_blank');
    setTimeout(() => {
      window.location.href = L.thank;
    }, 200);
  }

  const input = 'w-full border rounded px-3 py-2 text-sm';

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      {error ? (
        <div className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900" role="alert">
          {error}
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input className={input} placeholder={L.name} value={name} onChange={(e) => setName(e.target.value)} required />
        <input className={input} placeholder={L.wa} value={wa} onChange={(e) => setWa(e.target.value)} required />
        <input className={input} placeholder={L.city} value={city} onChange={(e) => setCity(e.target.value)} />
        <input className={input} placeholder={L.car} value={car} onChange={(e) => setCar(e.target.value)} required />
        <input className={input} placeholder={L.year} value={year} onChange={(e) => setYear(e.target.value)} />
        <input className={input} placeholder={L.km} value={km} onChange={(e) => setKm(e.target.value)} />
        <input className={input} placeholder={L.price} value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <textarea className={input} placeholder={L.note} value={note} onChange={(e) => setNote(e.target.value)} rows={4} />

      <button type="submit" className="px-4 py-2 rounded bg-black text-white text-sm">
        {L.send}
      </button>

      <p className="text-xs text-gray-600">{L.hint}</p>
    </form>
  );
}
