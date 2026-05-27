import type { ReactNode } from 'react';

type Props = { children: ReactNode; params: { locale: string } };

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
