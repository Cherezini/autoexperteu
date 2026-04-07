import { headers } from 'next/headers';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { generateAlternates } from '@/lib/seo';
import NavbarClient from '@/components/NavbarClient';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const heads = await headers();
  const pathname = heads.get('x-pathname') || `/${params.locale}`;
    const titles: Record<string, string> = {
          ru: 'Подбор авто в Испании и из Германии | AutoexpertEU',
              es: 'Selección de coches en España y Alemania | AutoexpertEU',
                  en: 'Car Selection in Spain and from Germany | AutoexpertEU',
                    };
                      const descriptions: Record<string, string> = {
                          ru: 'Профессиональный подбор автомобиля в Испании и из Германии. Проверка VIN, регистрация в DGT под ключ.',
                              es: 'Selección profesional de coches en España y Alemania. Verificación VIN, matriculación en DGT llave en mano.',
                                  en: 'Professional car selection in Spain and from Germany. VIN check, DGT registration turnkey.',
                                    };
                                    const pathWithoutLocale = pathname.replace(/^\/(ru|es|en)/, '') || '';
  return {
        title: titles[params.locale] || titles.es,
            description: descriptions[params.locale] || descriptions.es,
            alternates: generateAlternates(pathWithoutLocale, params.locale),
  };
}

export default function LocaleLayout({ children, params }: Props) {
  return <NavbarClient locale={params.locale}>{children}</NavbarClient>;
}
