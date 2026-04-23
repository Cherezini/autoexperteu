import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { generateAlternates } from '@/lib/seo';

const titles: Record<string, string> = {
  ru: 'Часто задаваемые вопросы — подбор авто и регистрация в Испании',
  es: 'Preguntas frecuentes — selección de coches y registro en España',
  en: 'FAQ — car sourcing and registration in Spain',
};

const descriptions: Record<string, string> = {
  ru: 'Ответы на популярные вопросы: импорт авто из Германии, ITV, IEDMT, регистрация в DGT, налоги.',
  es: 'Respuestas a preguntas: importación desde Alemania, ITV, IEDMT, registro en la DGT, impuestos.',
  en: 'Answers to common questions: importing from Germany, ITV, IEDMT, DGT registration, taxes.',
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
    alternates: generateAlternates('/faq', locale),
  };
}

export default function FaqLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
