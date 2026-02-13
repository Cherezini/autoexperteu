// Locale-aware navigation helpers for Next.js App Router.
// Works in both Server and Client Components.
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {routing} from './routing';

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
