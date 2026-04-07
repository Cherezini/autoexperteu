import type { Metadata } from 'next';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
    ru: 'Podбор авто в Испании под ключ — 10+ вариантов за 30 дней | AutoexpertEU',
    es: 'Seleccion de coches en Espana — 10+ opciones en 30 dias | AutoexpertEU',
    en: 'Custom Car Search in Spain — 10+ Verified Options in 30 Days | AutoexpertEU',
  };
  const descriptions: Record<string, string> = {
    ru: 'Подбираем автомобиль в Испании и из Германии. Проверка VIN, залоги, ДТП. DGT под ключ.',
    es: 'Seleccionamos el coche segun tu solicitud. VIN, embargos. Matriculacion DGT.',
    en: 'We find cars in Spain and Germany. VIN check, DGT registration turnkey.',
  };
  return {
    title: titles[params.locale] || titles.es,
    description: descriptions[params.locale] || descriptions.es,
  };
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
