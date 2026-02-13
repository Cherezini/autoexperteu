'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Locale = 'ru' | 'en' | 'es';

function copy(locale: string) {
  const L = (locale as Locale) || 'ru';

  if (L === 'es') {
    return {
      title: 'Contactos | Autoexpert EU',
      h1: 'Contactos',
      p1: 'Escríbenos и cuéntanos qué coche quieres comprar o registrar en España.',
      p2: 'Estamos en Alicante и trabajamos con clientes en toda España и la UE.',
      label1: 'Dirección de la oficina',
      val1: 'Cam. del Mahonés, 3, 03690 Sant Vicent del Raspeig, Alicante',
      label2: 'WhatsApp',
      val2: 'Escríbenos en WhatsApp',
      label3: 'E-mail',
      val3: 'info@autoexperteu.com',
      label4: 'Síguenos',
      formTitle: 'Envíenos un mensaje',
      fName: 'Nombre',
      fPhone: 'Teléfono',
      fEmail: 'Correo electrónico',
      fMsg: 'Mensaje (máx. 500 caracteres)',
      fBtn: 'Enviar mensaje',
      consentText: 'Consiento el tratamiento de mis datos personales para responder a mi solicitud.',
      errRequired: 'Por favor, complete todos los campos obligatorios.',
      errConsent: 'Debe confirmar el consentimiento para continuar.',
      success: 'Mensaje enviado',
      sendError: 'No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.',
    };
  }

  if (L === 'en') {
    return {
      title: 'Contacts | Autoexpert EU',
      h1: 'Contacts',
      p1: 'Message us and tell us what car you want to buy or register in Spain.',
      p2: 'We are based in Alicante and work with clients across Spain and the EU.',
      label1: 'Office Address',
      val1: 'Cam. del Mahonés, 3, 03690 Sant Vicent del Raspeig, Alicante',
      label2: 'WhatsApp',
      val2: 'Message us on WhatsApp',
      label3: 'E-mail',
      val3: 'info@autoexperteu.com',
      label4: 'Follow us',
      formTitle: 'Send us a message',
      fName: 'Name',
      fPhone: 'Phone',
      fEmail: 'Email',
      fMsg: 'Message (max 500 characters)',
      fBtn: 'Send Message',
      consentText: 'I consent to the processing of my personal data to respond to my request.',
      errRequired: 'Please fill in all required fields.',
      errConsent: 'You must confirm your consent to continue.',
      success: 'Message sent',
      sendError: 'Failed to send the message. Please try again.',
    };
  }

  return {
    title: 'Контакты | Autoexpert EU',
    h1: 'Контакты',
    p1: 'Напишите нам и расскажите, какой автомобиль вы хотите купить или зарегистрировать в Испании.',
    p2: 'Мы находимся в Аликанте и работаем с клиентами по всей Испании и ЕС.',
    label1: 'Адрес офиса',
    val1: 'Cam. del Mahonés, 3, 03690 Sant Vicent del Raspeig, Alicante',
    label2: 'WhatsApp',
    val2: 'Написать в WhatsApp',
    label3: 'E-mail',
    val3: 'info@autoexperteu.com',
    label4: 'Мы в соцсетях',
    formTitle: 'Связаться с нами',
    fName: 'Имя',
    fPhone: 'Телефон',
    fEmail: 'Электронная почта',
    fMsg: 'Сообщение (до 500 символов)',
    fBtn: 'Отправить сообщение',
    consentText: 'Подтверждаю согласие на обработку моих персональных данных для ответа на обращение.',
    errRequired: 'Пожалуйста, заполните все обязательные поля.',
    errConsent: 'Необходимо подтвердить согласие на обработку данных.',
    success: 'Сообщение отправлено',
    sendError: 'Не удалось отправить сообщение. Пожалуйста, попробуйте ещё раз.',
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
  const mailHref = 'mailto:info@autoexperteu.com';
  const fbHref = 'https://www.facebook.com/AutoexpertEU/';
  const ytHref = 'https://youtube.com/@auto-experteu?si=7eCwJrwTzIDzGtoW';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const n = name.trim();
    const p = phone.trim();
    const em = email.trim();
    const msgText = message.trim();

    if (!n || !p || !em || !msgText) {
      setError(c.errRequired);
      return;
    }

    if (!consent) {
      setError(c.errConsent);
      return;
    }

    const subject =
      locale === 'es'
        ? 'Contacto — mensaje'
        : locale === 'en'
          ? 'Contacts — message'
          : 'Контакты — сообщение';

    const msg =
      `📩 CONTACT FORM (Autoexpert EU)\n` +
      `👤 Name: ${n}\n` +
      `📞 Phone/WhatsApp: ${p}\n` +
      `✉️ Email: ${em}\n` +
      `📝 Message: ${msgText}`;

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: n,
          phone: p,
          email: em,
          subject,
          message: msg,
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setSuccess(c.success);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setConsent(false);
    } catch {
      setError(c.sendError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 mt-[8px] pb-10">
      {/* HERO SECTION - Поднято на 15px и высота 390px */}
      <section className="relative overflow-hidden rounded-3xl border -mt-[15px] mb-10 h-[390px]">
        <Image
          src="/media/images/conta.png"
          alt="Autoexpert EU Contacts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)]">
            {c.h1}
          </h1>
        </div>
      </section>

      <div className="mb-8 space-y-3">
        <p className="text-lg text-neutral-700">{c.p1}</p>
        <p className="text-lg text-neutral-700">{c.p2}</p>
      </div>

      <section className="grid gap-10 md:grid-cols-2">
        {/* CONTACT DETAILS */}
        <div className="rounded-2xl border bg-neutral-50 p-8 space-y-6 shadow-sm">
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-1">{c.label1}</div>
            <div className="text-lg font-semibold text-[#0B3B73]">{c.val1}</div>
          </div>

          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-2">{c.label2}</div>
            <a
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-3 text-white font-bold shadow-md hover:brightness-110 transition-all active:translate-y-[2px]"
              href={waHref}
              target="_blank"
              rel="noreferrer"
            >
              {c.val2}
            </a>
          </div>

          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-1">{c.label3}</div>
            <a className="text-lg font-semibold text-[#0B3B73] underline hover:text-black transition-colors" href={mailHref}>
              {c.val3}
            </a>
          </div>

          {/* SOCIAL MEDIA BUTTONS */}
          <div className="pt-4 border-t border-neutral-200">
            <div className="text-sm font-medium uppercase tracking-wider text-neutral-500 mb-3">{c.label4}</div>
            <div className="flex flex-wrap gap-3">
              <a
                href={fbHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition-all active:translate-y-[2px]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href={ytHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF0000] px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition-all active:translate-y-[2px]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* FEEDBACK FORM */}
        <div className="rounded-2xl border bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#0B3B73] mb-6">{c.formTitle}</h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{c.fName}*</label>
              <input
                type="text"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border-neutral-300 border p-3 focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73] outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{c.fPhone}*</label>
                <input
                  type="tel"
                  required
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border-neutral-300 border p-3 focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{c.fEmail}*</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-neutral-300 border p-3 focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{c.fMsg}*</label>
              <textarea
                required
                name="message"
                maxLength={500}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border-neutral-300 border p-3 focus:border-[#0B3B73] focus:ring-1 focus:ring-[#0B3B73] outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* CONSENT */}
            <label className="flex items-start gap-3 rounded-xl border bg-neutral-50 p-4">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-5 w-5"
              />
              <span className="text-sm text-neutral-700">{c.consentText}</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-xl bg-[#0B3B73] px-6 py-4 text-white font-bold shadow-[0_6px_0_rgba(0,0,0,0.2)] hover:brightness-110 active:translate-y-[2px] active:shadow-[0_4px_0_rgba(0,0,0,0.2)] transition-all disabled:opacity-70"
            >
              {c.fBtn}
            </button>

            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700 font-semibold">
                {error}
              </div>
            ) : null}

            {success ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 font-semibold">
                {success}
              </div>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}