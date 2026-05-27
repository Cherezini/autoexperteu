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
  const title = titles[locale] ?? titles.ru;
  const description = descriptions[locale] ?? descriptions.ru;
  const baseUrl = "https://autoexperteu.com";

  return {
    title,
    description,
    alternates: {
      ...generateAlternates('/contacto', locale),
      languages: {
        ...generateAlternates('/contacto', locale).languages,
        'x-default': `https://autoexperteu.com/ru/contacto`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/contacto`,
      siteName: "AutoexpertEU",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: `${baseUrl}/media/images/conta.png`, width: 1200, height: 630 }],
    },
  };
}

export default function ContactoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
