import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { generateAlternates } from '@/lib/seo';

const titles: Record<string, string> = {
  ru: 'Контакты AutoExpert EU — Telegram, WhatsApp, Email | Аликанте',
  es: 'Contacto AutoExpert EU — Telegram, WhatsApp, email | Alicante',
  en: 'Contact AutoExpert EU — Telegram, WhatsApp, Email | Alicante',
};

const descriptions: Record<string, string> = {
  ru: 'Свяжитесь с AutoExpert EU для подбора авто в Испании. Аликанте, Коста-Бланка. Telegram, WhatsApp, email.',
  es: 'Contacta con AutoExpert EU para la selección de coches en España. Alicante, Costa Blanca.',
  en: 'Contact AutoExpert EU for car sourcing in Spain. Alicante, Costa Blanca. Telegram, WhatsApp, email.',
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale || 'ru';
  return {
    title: titles[locale] ?? titles.ru,
    description: descriptions[locale] ?? descriptions.ru,
    alternates: generateAlternates('/contacto', locale),
  };
}

export default function ContactoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
