import type { Metadata } from 'next';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
      ru: 'Налоги и документы при покупке авто из Германии в Испанию | AutoexpertEU',
          es: 'Impuestos y documentos al importar coche de Alemania a Espana — IEDMT calculado | AutoexpertEU',
              en: 'Taxes and Documents for Car Import from Germany to Spain — IEDMT Explained | AutoexpertEU',
                };
                  const descriptions: Record<string, string> = {
                      ru: 'IEDMT, ITV, DGT — полный расчёт налогов и сборов при ввозе авто из Германии. Рассчитываем заранее, без сюрпризов. Оптимизируем законно.',
                          es: 'IEDMT, ITV, DGT — calculo completo de impuestos al importar coche de Alemania. Calculamos por adelantado, sin sorpresas. Optimizacion legal incluida.',
                              en: 'IEDMT, ITV, DGT — full tax breakdown for car import from Germany to Spain. Calculated upfront, no surprises. Legal optimization included.',
                                };
                                  return {
                                      title: titles[params.locale] || titles.es,
                                          description: descriptions[params.locale] || descriptions.es,
                                            };
                                            }

                                            export default function Layout({ children }: Props) {
                                              return <>{children}</>;
                                              }