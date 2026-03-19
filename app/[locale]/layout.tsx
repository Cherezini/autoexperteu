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
  const pathWithoutLocale = pathname.replace(/^\/(ru|es|en)/, '') || '';
  return {
    alternates: generateAlternates(pathWithoutLocale),
  };
}

export default function LocaleLayout({ children, params }: Props) {
  return <NavbarClient locale={params.locale}>{children}</NavbarClient>;
}
