import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { generateAlternates } from '@/lib/seo';

const titles: Record<string, string> = {
  ru: 'Подбор авто в Испании под ключ — AutoExpert EU | Аликанте',
  es: 'Selección de coche en España llave en mano — AutoExpert EU | Alicante',
  en: 'Car sourcing in Spain turnkey — AutoExpert EU | Alicante',
};

const descriptions: Record<string, string> = {
  ru: 'Профессиональный подбор авто в Испании, Германии и Европе. Проверка, доставка, регистрация в DGT. Аликанте, Коста-Бланка.',
  es: 'Selección profesional de coche en España, Alemania y Europa. Inspección, entrega, registro en DGT. Alicante, Costa Blanca.',
  en: 'Professional car sourcing in Spain, Germany and Europe. Inspection, delivery, DGT registration. Alicante, Costa Blanca.',
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
    alternates: generateAlternates('/avtopodbor', locale),
  };
}

export default function AvtopodborLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
