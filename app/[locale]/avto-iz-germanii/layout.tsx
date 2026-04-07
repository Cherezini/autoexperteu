import type { Metadata } from 'next';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
    en: 'Is It Cheaper to Buy a Car from Germany to Spain? Save €5,000–€20,000 | AutoexpertEU',
    es: '¿Es más barato importar un coche de Alemania a España? Ahorra €5.000–€20.000 | AutoexpertEU',
    ru: 'Авто из Германии в Испанию — реальная экономия €5 000–€20 000 | AutoexpertEU',
  };
  const descriptions: Record<string, string> = {
    en: 'We source cars from closed German B2B auctions. Full cost upfront: car + transport + ITV + DGT. Free analysis.',
    es: 'Compramos coches en subastas B2B alemanas. Coste total calculado por adelantado. Análisis gratuito.',
    ru: 'Подбираем авто на закрытых B2B-аукционах Германии. Полная стоимость под ключ заранее. Бесплатный анализ.',
  };
  return {
    title: titles[params.locale] || titles.en,
    description: descriptions[params.locale] || descriptions.en,
  };
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
