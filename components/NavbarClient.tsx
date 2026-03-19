'use client';

// components/NavbarClient.tsx
// Сюда перенесена вся навигация из app/[locale]/layout.tsx
// Этот файл — 'use client'. app/[locale]/layout.tsx теперь серверный.

import { useState, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function labels(locale: string) {
  const isES = locale === 'es';
  const isEN = locale === 'en';
  return {
    home:        isES ? 'Inicio'           : isEN ? 'Home'             : 'Главная',
    avtopodbor:  isES ? 'Selección de coche': isEN ? 'Car sourcing'    : 'Подбор авто',
    germany:     isES ? 'Coches de Alemania': isEN ? 'Cars from Germany': 'Авто из Германии',
    registro:    isES ? 'Matriculación'     : isEN ? 'Registration'    : 'Регистрация АВТО',
    faq:         isES ? 'FAQ'               : isEN ? 'FAQ'             : 'Вопросы',
    contact:     isES ? 'Contacto'          : isEN ? 'Contact'         : 'Контакты',
    germanyAlicante:   isES ? 'Coches en Alicante'       : isEN ? 'Cars to Alicante'         : 'Авто в Аликанте',
    germanyCost:       isES ? 'Cuánto cuesta'             : isEN ? 'How much it costs'        : 'Стоимость',
    germanyTaxes:      isES ? 'Impuestos y documentos'    : isEN ? 'Taxes and documents'      : 'Налоги и документы',
    germanyDgt:        isES ? 'Matriculación DGT'         : isEN ? 'DGT registration'         : 'Регистрация в DGT',
  };
}

export default function NavbarClient({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const L = labels(locale);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [germanyOpen, setGermanyOpen]   = useState(false);
  const [germanyHover, setGermanyHover] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const germanyBase = `/${locale}/avto-iz-germanii`;

  const germanyDropdown = [
    { name: L.germanyAlicante, href: `${germanyBase}/alicante` },
    { name: L.germanyCost,     href: `${germanyBase}/skolko-stoit` },
    { name: L.germanyTaxes,    href: `${germanyBase}/nalogi-i-dokumenty` },
    { name: L.germanyDgt,      href: `${germanyBase}/registraciya-dgt` },
  ];

  const navItems = [
    { name: L.home,       href: `/${locale}` },
    { name: L.avtopodbor, href: `/${locale}/avtopodbor` },
    { name: L.germany,    href: germanyBase, hasDropdown: true },
    { name: L.registro,   href: `/${locale}/registro` },
    { name: L.faq,        href: `/${locale}/faq` },
    { name: L.contact,    href: `/${locale}/contacto` },
  ];

  const isGermanyActive = pathname?.startsWith(germanyBase);

  function handleGermanyMouseEnter() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setGermanyHover(true);
  }
  function handleGermanyMouseLeave() {
    hoverTimeout.current = setTimeout(() => setGermanyHover(false), 150);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ШАПКА */}
      <div
        className="sticky top-0 w-full z-50 shadow-md"
        style={{ backgroundImage: 'linear-gradient(180deg, #011D32 0%, #0B3B73 100%)' }}
      >
        <div className="container mx-auto px-4">
          <header className="flex items-center justify-between h-[80px] lg:h-[110px]">

            {/* ЛОГОТИП */}
            <div className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 relative z-50 ml-2 lg:ml-4 xl:ml-8">
              <Link href={`/${locale}`}>
                <Image
                  src="/logo_auto.png"
                  alt="AUTOEXPERT EU"
                  width={350}
                  height={90}
                  className="h-[65px] md:h-[75px] lg:h-20 xl:h-24 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* ТЕКСТ В ЦЕНТРЕ (мобильная версия) */}
            <div className="lg:hidden flex-1 text-center px-2">
              <span className="text-[#E6D3A1] font-black text-base tracking-widest whitespace-nowrap">
                AutoexpertEU
              </span>
            </div>

            {/* ДЕСКТОПНОЕ МЕНЮ */}
            <nav className="hidden lg:flex items-center gap-0.5 p-1 bg-black/25 rounded-2xl backdrop-blur-2xl border border-white/10">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={handleGermanyMouseEnter}
                      onMouseLeave={handleGermanyMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-2 xl:px-3 py-2 text-[13px] xl:text-[15px] font-bold transition-all duration-300 flex items-center justify-center min-h-[48px] gap-1 ${
                          isGermanyActive ? 'text-white' : 'text-[#E6D3A1] hover:text-white'
                        }`}
                      >
                        <span className="relative z-10 block text-center leading-tight whitespace-normal max-w-[100px] xl:max-w-[125px]">
                          {item.name}
                        </span>
                        <svg
                          className={`relative z-10 flex-shrink-0 w-3 h-3 transition-transform duration-200 ${germanyHover ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24" fill="none" aria-hidden="true"
                        >
                          <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {isGermanyActive && (
                          <motion.div
                            layoutId="nav-active-pill"
                            className="absolute inset-0 bg-white/15 border border-white/20 rounded-xl"
                            transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                            style={{ backdropFilter: 'blur(16px)' }}
                          />
                        )}
                      </Link>

                      <AnimatePresence>
                        {germanyHover && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl overflow-hidden shadow-xl border border-white/10"
                            style={{ background: 'linear-gradient(180deg, #011D32 0%, #0B3B73 100%)' }}
                            onMouseEnter={handleGermanyMouseEnter}
                            onMouseLeave={handleGermanyMouseLeave}
                          >
                            <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#011D32] border-l border-t border-white/10" />
                            <div className="py-2 px-1">
                              {germanyDropdown.map((sub) => {
                                const isSubActive = pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
                                      isSubActive
                                        ? 'bg-white/15 text-white'
                                        : 'text-[#E6D3A1] hover:bg-white/10 hover:text-white'
                                    }`}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 flex-shrink-0" />
                                    {sub.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-2 xl:px-3 py-2 text-[13px] xl:text-[15px] font-bold transition-all duration-300 flex items-center justify-center min-h-[48px] ${
                      isActive ? 'text-white' : 'text-[#E6D3A1] hover:text-white'
                    }`}
                  >
                    <span className="relative z-10 block text-center leading-tight whitespace-normal max-w-[100px] xl:max-w-[125px]">
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-white/15 border border-white/20 rounded-xl"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                        style={{ backdropFilter: 'blur(16px)' }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА (десктоп) */}
            <div className="hidden lg:flex items-center gap-3 text-sm font-bold mr-2 xl:mr-6">
              {(['es', 'en', 'ru'] as const).map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}`}
                  className={locale === lang ? 'text-white underline decoration-2' : 'opacity-40 hover:opacity-100'}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* ИКОНКА МЕНЮ (мобильная версия) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 p-1 flex items-center justify-center transition-transform active:scale-90 mr-2"
              aria-label="Toggle Menu"
            >
              <img src="/icons/menua.png" alt="Menu" className="h-[70px] w-auto object-contain" />
            </button>
          </header>
        </div>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
              style={{ backgroundColor: '#0B3B73' }}
            >
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.href}>
                        <button
                          onClick={() => setGermanyOpen(!germanyOpen)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-colors ${
                            isGermanyActive ? 'bg-white/10 text-white' : 'text-[#E6D3A1]'
                          }`}
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${germanyOpen ? 'rotate-180' : ''}`}
                            viewBox="0 0 24 24" fill="none" aria-hidden="true"
                          >
                            <path d="M8 10l4 4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {germanyOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <Link
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-3 pl-8 pr-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                                  pathname === item.href ? 'text-white bg-white/10' : 'text-[#E6D3A1]/80 hover:text-white'
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-50" />
                                {locale === 'es' ? 'Vista general' : locale === 'en' ? 'Overview' : 'Все об авто из Германии'}
                              </Link>
                              {germanyDropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`flex items-center gap-3 pl-8 pr-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                                    pathname === sub.href ? 'text-white bg-white/10' : 'text-[#E6D3A1]/80 hover:text-white'
                                  }`}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-50" />
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`p-4 rounded-xl text-lg font-bold transition-colors ${
                        pathname === item.href ? 'bg-white/10 text-white' : 'text-[#E6D3A1]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Языки */}
                <div className="flex justify-around mt-4 py-4 border-t border-white/10 text-[#E6D3A1]">
                  {(['es', 'en', 'ru'] as const).map((lang) => (
                    <Link
                      key={lang}
                      href={`/${lang}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={locale === lang ? 'text-white font-black' : 'opacity-50'}
                    >
                      {lang.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* КОНТЕНТ */}
      <div className="container mx-auto px-4 relative z-10 mt-2 flex-grow">
        <main>{children}</main>

        {/* ПОДВАЛ */}
        <footer className="border-t pt-8 mt-12 text-xs text-neutral-400 pb-8">
          <div className="flex flex-wrap gap-6 mb-4">
            {navItems.map((item) => (
              <Link key={item.href} className="hover:text-black transition-colors" href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <div>© 2025 AUTOEXPERT EU</div>
            <div className="opacity-70">
              {locale === 'es' ? (
                <>Sitio diseñado por Igor Cherezov. Desarrollado por CL DISTANCE LEGAL ADVICE AND INVESTMENTS{' '}<a href="mailto:office@cldistance.com" className="hover:text-black transition-colors underline">office@cldistance.com</a></>
              ) : locale === 'en' ? (
                <>Site designed by Igor Cherezov. Developed by CL DISTANCE LEGAL ADVICE AND INVESTMENTS{' '}<a href="mailto:office@cldistance.com" className="hover:text-black transition-colors underline">office@cldistance.com</a></>
              ) : (
                <>Дизайн сайта — Игорь Черезов. Разработка — CL DISTANCE LEGAL ADVICE AND INVESTMENTS{' '}<a href="mailto:office@cldistance.com" className="hover:text-black transition-colors underline">office@cldistance.com</a></>
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
