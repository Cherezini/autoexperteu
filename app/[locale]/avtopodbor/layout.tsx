import type { Metadata } from 'next';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
      const titles: Record<string, string> = {
          ru: 'Подбор авто в Испании под ключ — 10+ вариантов за 30 дней | AutoexpertEU',
              es: 'Seleccion de coches en Espana a medida — 10+ opciones en 30 dias | AutoexpertEU',
                  en: 'Custom Car Search in Spain — 10+ Verified Options in 30 Days | AutoexpertEU',
      };
        const descriptions: Record<string, string> = {
                ru: 'Подбираем автомобиль под ваш запрос в Испании и из Германии. Проверка VIN, история ДТП, залоги. Постановка на учёт DGT под ключ. Бесплатный предварительный анализ.',
                    es: 'Seleccionamos el coche segun tu solicitud en Espana y Alemania. VIN, historial, embargos. Matriculacion DGT llave en mano. Analisis previo gratuito.',
                        en: 'We find cars matching your request in Spain and Germany. VIN check, accident history, liens. DGT registration turnkey. Free preliminary analysis.',
                          };
                            return {
                                title: titles[params.locale] || titles.es,
                                    description: descriptions[params.locale] || descriptions.es,
                                      };
                                      }

                                      export default function Layout({ children }: Props) {
                                        return <>{children}</>;
                                        }
        }
}