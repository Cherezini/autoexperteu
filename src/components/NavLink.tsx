'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export default function NavLink({href, children, className = '', activeClassName = ''}: Props) {
  const pathname = usePathname();
  // Locale home pages are like /ru, /es, /en and must be active ONLY on exact match.
  const isLocaleHome = /^\/(ru|es|en)$/.test(href);
  const isActive = isLocaleHome
    ? pathname === href
    : pathname === href || pathname?.startsWith(href + '/') || pathname?.startsWith(href + '?');

  return (
    <Link href={href} className={`${className} ${isActive ? activeClassName : ''}`.trim()}>
      {children}
    </Link>
  );
}
