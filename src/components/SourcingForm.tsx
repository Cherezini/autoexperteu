'use client';

import ClanAutoSearchRU from '../../components/ClanAutoSearchRU.jsx';
import ClanAutoSearchES from '../../components/ClanAutoSearchES.jsx';
import ClanAutoSearchEN from '../../components/ClanAutoSearchEN.jsx';

export default function SourcingForm({locale}: {locale: string}) {
  if (locale === 'ru') return <ClanAutoSearchRU />;
  if (locale === 'en') return <ClanAutoSearchEN />;
  return <ClanAutoSearchES />;
}
