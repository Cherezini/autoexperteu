'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

type Locale = 'ru' | 'en' | 'es';

/* ─────────────────────────────────────────────────────────────
   Schema.org LocalBusiness
───────────────────────────────────────────────────────────── */
const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'AutoexpertEU',
  url: 'https://autoexperteu.com',
  logo: 'https://autoexperteu.com/logo_1.png',
  image: 'https://autoexperteu.com/media/images/conta.png',
  description:
    'Профессиональный подбор авто и полная регистрация в DGT в Испании. Авто из Германии под ключ.',
  telephone: '+34722756695',
  email: 'info@autoexperteu.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cam. del Mahonés, 3',
    addressLocality: 'Sant Vicent del Raspeig',
    addressRegion: 'Alicante',
    postalCode: '03690',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.39584,
    longitude: -0.50735,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/AutoexpertEU/',
    'https://youtube.com/@auto-experteu',
  ],
};

function copy(locale: string) {
  const L = (locale as Locale) || 'ru';

  if (L === 'es') {
    return {
      title: 'Contactos | Autoexpert EU',
      h1: 'Nuestros contactos',
      subheading: 'Selección de coches en España y Alemania, llave en mano — contactos de AutoexpertEU',
      p1: 'Estaremos encantados de responder a todas sus preguntas si no ha encontrado la respuesta en nuestro sitio web. No dude en ponerse en contacto con nosotros sobre cualquier cuestión relacionada con nuestra actividad.',
      responsePromise: 'Respondemos en menos de 1 hora en horario laboral.',
      label1: 'Dirección de la oficina',
      val1: 'Cam. del Mahonés, 3, 03690 Sant Vicent del Raspeig, Alicante',
      label2: 'Teléfono / WhatsApp',
      val2: 'Escríbenos en WhatsApp',
      phoneDisplay: '+34 722 756 695',
      label3: 'E-mail',
      val3: 'info@autoexperteu.com',
      labelHours: 'Horario de atención',
      hoursWeek: 'Lunes — Viernes: 9:00 — 19:00',
      hoursSat: 'Sábado: 10:00 — 15:00',
      hoursSun: 'Domingo: cerrado',
      label4: 'Síguenos',
      labelTelegram: 'Telegram',
      mapTitle: 'Cómo encontrarnos',
      formTitle: 'Envíenos un mensaje',
      fName: 'Nombre',
      fPhone: 'Teléfono',
      fEmail: 'Correo electrónico',
      fTopic: 'Tema del mensaje',
      fMsg: 'Mensaje (máx. 500 caracteres)',
      fBtn: 'Enviar mensaje',
      consentText: 'Consiento el tratamiento de mis datos personales para responder a mi solicitud.',
      errRequired: 'Por favor, complete todos los campos obligatorios.',
      errConsent: 'Debe confirmar el consentimiento para continuar.',
      success: 'Gracias, le responderemos en breve.',
      sendError: 'No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.',
      readAlso: 'Ver también:',
      topics: [
        'Selección de coche en España',
        'Compra de coche en Alemania',
        'Selección de coche en Alemania',
        'Consulta sobre selección de coche',
        'Matriculación de vehículo en España',
        'Matriculación de vehículo desde Alemania',
        'Matriculación de vehículo desde la UE',
        'Seguro de coche español',
        'Seguro de coche extranjero',
        'Consulta legal (España)',
        'Consulta legal (Ucrania)',
        'Consulta general',
      ],
    };
  }

  if (L === 'en') {
    return {
      title: 'Contacts | Autoexpert EU',
      h1: 'Our contacts',
      subheading: 'Car sourcing in Spain and Germany, turnkey — AutoexpertEU contacts',
      p1: 'We will be glad to answer all your questions if you have not found the answers on our website. Do not hesitate to contact us regarding any questions related to our activity.',
      responsePromise: 'We reply within 1 hour during business hours.',
      label1: 'Office Address',
      val1: 'Cam. del Mahonés, 3, 03690 Sant Vicent del Raspeig, Alicante',
      label2: 'Phone / WhatsApp',
      val2: 'Message us on WhatsApp',
      phoneDisplay: '+34 722 756 695',
      label3: 'E-mail',
      val3: 'info@autoexperteu.com',
      labelHours: 'Working hours',
      hoursWeek: 'Monday — Friday: 9:00 — 19:00',
      hoursSat: 'Saturday: 10:00 — 15:00',
      hoursSun: 'Sunday: closed',
      label4: 'Follow us',
      labelTelegram: 'Telegram',
      mapTitle: 'How to find us',
      formTitle: 'Send us a message',
      fName: 'Name',
      fPhone: 'Phone',
      fEmail: 'Email',
      fTopic: 'Message topic',
      fMsg: 'Message (max 500 characters)',
      fBtn: 'Send Message',
      consentText: 'I consent to the processing of my personal data to respond to my request.',
      errRequired: 'Please fill in all required fields.',
      errConsent: 'You must confirm your consent to continue.',
      success: 'Thank you, we will reply shortly.',
      sendError: 'Failed to send the message. Please try again.',
      readAlso: 'Read also:',
      topics: [
        'Car sourcing in Spain',
        'Buying a car from Germany',
        'Car sourcing from Germany',
        'Consultation on car sourcing',
        'Vehicle registration in Spain',
        'Vehicle registration from Germany',
        'Vehicle registration from the EU',
        'Spanish car insurance',
        'Foreign car insurance',
        'Legal question (Spain)',
        'Legal question (Ukraine)',
        'General question',
      ],
    };
  }

  return {
    title: 'Контакты | Autoexpert EU',
    h1: 'Наши контакты',
    subheading: 'Подбор авто в Испании, в Германии, под ключ — контакты AutoexpertEU',
    p1: 'Будем рады ответить на все ваши вопросы, если вы не нашли ответы на них на нашем сайте. Не стесняйтесь обращаться к нам по любым интересующим Вас вопросам, которые касаются нашей деятельности.',
    responsePromise: 'Отвечаем в течение 1 часа в рабочее время.',
    label1: 'Адрес офиса',
    val1: 'Cam. del Mahonés, 3, 03690 Sant Vicent del Raspeig, Alicante',
    label2: 'Телефон / WhatsApp',
    val2: 'Написать в WhatsApp',
    phoneDisplay: '+34 722 756 695',
    label3: 'E-mail',
    val3: 'info@autoexperteu.com',
    labelHours: 'Часы работы',
    hoursWeek: 'Пн — Пт: 9:00 — 19:00',
    hoursSat: 'Сб: 10:00 — 15:00',
    hoursSun: 'Вс: выходной',
    label4: 'Мы в соцсетях',
    labelTelegram: 'Telegram',
    mapTitle: 'Как нас найти',
    formTitle: 'Связаться с нами',
    fName: 'Имя',
    fPhone: 'Телефон',
    fEmail: 'Электронная почта',
    fTopic: 'Тема сообщения',
    fMsg: 'Сообщение (до 500 символов)',
    fBtn: 'Отправить сообщение',
    consentText: 'Подтверждаю согласие на обработку моих персональных данных для ответа на обращение.',
    errRequired: 'Пожалуйста, заполните все обязательные поля.',
    errConsent: 'Необходимо подтвердить согласие на обработку данных.',
    success: 'Благодарим, ответим в ближайшее время!',
    sendError: 'Не удалось отправить сообщение. Пожалуйста, попробуйте ещё раз.',
    readAlso: 'Читайте также:',
    topics: [
      'Подбор авто в Испании',
      'Покупка авто из Германии',
      'Подбор автомобиля из Германии',
      'Консультация по подбору авто',
      'Регистрация автомобиля в Испании',
      'Регистрация автомобиля из Германии',
      'Регистрация автомобиля из ЕС',
      'Страхование испанского автомобиля',
      'Страхование иностранного автомобиля',
      'Юридический вопрос (Испания)',
      'Юридический вопрос (Украина)',
      'Общий вопрос',
    ],
  };
}

export default function Page() {
  const routeParams = useParams() as { locale?: string };
  const locale = (routeParams?.locale || 'ru') as string;
  const c = copy(locale);

  useEffect(() => {
    document.title = c.title;
  }, [c.title]);

  const waHref = 'https://wa.me/34722756695';
  const phoneHref = 'tel:+34722756695';
  const mailHref = 'mailto:info@autoexperteu.com';
  const fbHref = 'https://www.facebook.com/AutoexpertEU/';
  const ytHref = 'https://youtube.com/@auto-experteu?si=7eCwJrwTzIDzGtoW';
  // ⚠️ ЗАМЕНИТЕ на реальные ссылки:
  const tgHref = 'https://t.me/autoexperteu'; // ← вставьте ваш Telegram
  const igHref = 'https://instagram.com/autoexperteu'; // ← вставьте ваш Instagram

  // Embed с карточкой компании (предоставлен пользователем)
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.974138867858!2d-0.50478!3d38.39584699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46160c1ca4e53d49%3A0x9d3bf0dab708385d!2sAutoexpertEU!5e0!3m2!1sru!2ses!4v1773063927651!5m2!1sru!2ses';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(c.topics[0]);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setTopic(copy(locale).topics[0]);
  }, [locale]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const n = name.trim();
    const p = phone.trim();
    const em = email.trim();
    const tp = topic.trim();
    const msgText = message.trim();

    if (!n || !p || !em || !msgText) { setError(c.errRequired); return; }
    if (!consent) { setError(c.errConsent); return; }

    const subject =
      locale === 'es' ? 'Contacto — mensaje' : locale === 'en' ? 'Contacts — message' : 'Контакты — сообщение';

    const msg =
      `📩 CONTACT FORM (Autoexpert EU)\n` +
      `📌 Topic: ${tp}\n` +
      `👤 Name: ${n}\n` +
      `📞 Phone/WhatsApp: ${p}\n` +
      `✉️ Email: ${em}\n` +
      `📝 Message: ${msgText}`;

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: n, phone: p, email: em, subject, message: msg }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSuccess(c.success);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.('event', 'conversion', { send_to: 'AW-17987311531' });
      setName(''); setPhone(''); setEmail(''); setTopic(c.topics[0]); setMessage(''); setConsent(false);
    } catch {
      setError(c.sendError);
    } finally {
      setIsSubmitting(false);
    }
  }

  const readAlsoLinks = [
    {
      href: `/${locale}/avtopodbor`,
      label: locale === 'es' ? 'Selección de coche en España' : locale === 'en' ? 'Car sourcing in Spain' : 'Подбор авто в Испании',
    },
    {
      href: `/${locale}/avto-iz-germanii`,
      label: locale === 'es' ? 'Coches de Alemania a España' : locale === 'en' ? 'Cars from Germany to Spain' : 'Авто из Германии',
    },
    {
      href: `/${locale}/registro`,
      label: locale === 'es' ? 'Matriculación en España' : locale === 'en' ? 'Vehicle registration in Spain' : 'Регистрация авто в Испании',
    },
    {
      href: `/${locale}/faq`,
      label: locale === 'es' ? 'Preguntas frecuentes' : locale === 'en' ? 'Frequently asked questions' : 'Частые вопросы',
    },
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocal) }} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] mb-8">
        <Image
          src="/media/images/conta.png"
          alt="Autoexpert EU Contacts"
          width={1456}
          height={816}
          className="w-full h-auto object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            {c.h1}
          </h1>
          <p className="mt-4 max-w-4xl text-lg font-semibold text-white md:text-2xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            {c.subheading}
          </p>
        </div>
      </section>

      {/* INTRO + RESPONSE PROMISE */}
      <div className="mb-8 space-y-2">
        <p className="text-lg leading-8 text-neutral-700">{c.p1}</p>
        <p className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-emerald-800 font-semibold text-sm">
          <span>⚡</span> {c.responsePromise}
        </p>
      </div>

      {/* FULL-WIDTH FORM */}
      <section className="mb-10">
        <div className="rounded-3xl border bg-[#f7f9fc] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-10">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#0B3B73] md:text-3xl">
            {c.formTitle}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">{c.fName}*</label>
                <input type="text" required name="name" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-300 bg-white p-4 outline-none transition-all focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">{c.fPhone}*</label>
                <input type="tel" required name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-300 bg-white p-4 outline-none transition-all focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">{c.fTopic}*</label>
                <select required name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-300 bg-white p-4 outline-none transition-all focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73]">
                  {c.topics.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">{c.fEmail}*</label>
                <input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-300 bg-white p-4 outline-none transition-all focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73]" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">{c.fMsg}*</label>
              <textarea required name="message" maxLength={500} rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-2xl border border-neutral-300 bg-white p-4 outline-none transition-all focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73] resize-none" />
            </div>

            <label className="flex items-start gap-3 rounded-2xl border bg-white p-4 cursor-pointer">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-5 w-5" />
              <span className="text-sm text-neutral-700">{c.consentText}</span>
            </label>

            <button type="submit" disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-2xl bg-[#0B3B73] px-6 py-4 text-white font-bold shadow-[0_8px_0_rgba(0,0,0,0.18)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_4px_0_rgba(0,0,0,0.18)] transition-all disabled:opacity-70">
              {c.fBtn}
            </button>

            {error && <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 font-semibold">{error}</div>}
            {success && <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 font-semibold">{success}</div>}
          </form>
        </div>
      </section>

      {/* OFFICE + MAP */}
      <section className="grid gap-10 md:grid-cols-2">

        {/* OFFICE CARD */}
        <div className="rounded-2xl border bg-neutral-50 p-8 space-y-6 shadow-sm">

          {/* ADDRESS */}
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-1">{c.label1}</div>
            <div className="text-lg font-semibold text-[#0B3B73]">{c.val1}</div>
          </div>

          {/* PHONE + WHATSAPP */}
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-2">{c.label2}</div>
            <a href={phoneHref} className="block text-xl font-bold text-[#0B3B73] mb-3 hover:underline">{c.phoneDisplay}</a>
            <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-white font-bold shadow-md hover:brightness-110 transition-all active:translate-y-[2px]"
              href={waHref} target="_blank" rel="noreferrer"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={() => (window as any).gtag?.('event', 'conversion', { send_to: 'AW-17987311531' })}>
              {/* WhatsApp icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {c.val2}
            </a>
          </div>

          {/* EMAIL */}
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-1">{c.label3}</div>
            <a className="text-lg font-semibold text-[#0B3B73] underline hover:text-black transition-colors" href={mailHref}>
              {c.val3}
            </a>
          </div>

          {/* HOURS */}
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-2">{c.labelHours}</div>
            <div className="space-y-1 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                {c.hoursWeek}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                {c.hoursSat}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                {c.hoursSun}
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="pt-4 border-t border-neutral-200">
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-3">{c.label4}</div>
            <div className="flex flex-wrap gap-3">
              {/* Telegram */}
              <a href={tgHref} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#229ED9] px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition-all active:translate-y-[2px]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
              {/* Instagram */}
              <a href={igHref} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition-all active:translate-y-[2px]"
                style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              {/* Facebook */}
              <a href={fbHref} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition-all active:translate-y-[2px]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              {/* YouTube */}
              <a href={ytHref} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF0000] px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition-all active:translate-y-[2px]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* MAP CARD */}
        <div className="rounded-2xl border bg-white p-4 shadow-sm md:p-5">
          <div className="mb-4 text-2xl font-bold text-[#0B3B73]">{c.mapTitle}</div>
          <div className="overflow-hidden rounded-2xl border">
            <iframe
              src={mapSrc}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={c.mapTitle}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ЧИТАЙТЕ ТАКЖЕ */}
      <section className="mt-10">
        <p className="text-base font-semibold text-[#0B3B73] mb-3">{c.readAlso}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {readAlsoLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="rounded-2xl border bg-white px-5 py-3 text-base font-medium text-[#0B3B73] shadow-sm transition hover:bg-[#F6F8FC]">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* COPYRIGHT */}
      <p className="mt-10 text-center text-xs text-neutral-400">© 2026 AUTOEXPERT EU</p>
    </main>
  );
}
