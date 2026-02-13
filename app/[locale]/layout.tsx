'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function labels(locale: string) {
  const isES = locale === 'es';
  const isEN = locale === 'en';
  return {
    home: isES ? 'Inicio' : isEN ? 'Home' : 'Главная',
    avtopodbor: isES ? 'Selección de coche' : isEN ? 'Car sourcing' : 'Подбор авто', 
    registro: isES ? 'Matriculación' : isEN ? 'Registration' : 'Регистрация АВТО',
    faq: isES ? 'FAQ' : isEN ? 'FAQ' : 'Вопросы',
    contact: isES ? 'Contacto' : isEN ? 'Contact' : 'Контакты',
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const L = labels(locale);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: L.home, href: `/${locale}` },
    { name: L.avtopodbor, href: `/${locale}/avtopodbor` },
    { name: L.registro, href: `/${locale}/registro` },
    { name: L.faq, href: `/${locale}/fao` }, 
    { name: L.contact, href: `/${locale}/contacto` },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* ШАПКА — ТВОЙ ОРИГИНАЛЬНЫЙ КОД */}
      <div className="sticky top-0 w-full z-50 shadow-md" 
           style={{ backgroundImage: 'linear-gradient(180deg, #011D32 0%, #0B3B73 100%)' }}>
        <div className="container mx-auto px-4">
          <header className="flex items-center justify-between h-[80px] lg:h-[110px]">
            
            {/* ЛОГОТИП */}
            <div className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 relative z-50 ml-2 lg:ml-10">
              <Link href={`/${locale}`}>
                <Image
                  src="/logo_auto.png"
                  alt="AUTOEXPERT EU"
                  width={350} 
                  height={90}
                  className="h-[65px] md:h-[75px] lg:h-24 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* ТЕКСТ В ЦЕНТРЕ */}
            <div className="lg:hidden flex-1 text-center px-2">
              <span className="text-[#E6D3A1] font-black text-base tracking-widest whitespace-nowrap">
                AutoexpertEU
              </span>
            </div>

            {/* ДЕСКТОПНОЕ МЕНЮ */}
            <nav className="hidden lg:flex items-center gap-1 p-1 bg-black/25 rounded-2xl backdrop-blur-2xl border border-white/10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-5 py-2 text-sm xl:text-base font-bold transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-[#E6D3A1] hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
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

            {/* ЯЗЫКИ (Десктоп) */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-black mr-12 lg:mr-20" style={{ color: '#E6D3A1' }}>
              {['es', 'en', 'ru'].map((lang) => (
                <Link key={lang} href={`/${lang}`} className={locale === lang ? 'text-white underline decoration-2' : 'opacity-40 hover:opacity-100'}>
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* ИКОНКА МЕНЮ */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden relative z-50 p-1 flex items-center justify-center transition-transform active:scale-90 mr-2"
              aria-label="Toggle Menu"
            >
              <img 
                src="/icons/menuA.png" 
                alt="Menu" 
                className="h-[70px] w-auto object-contain"
              />
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
                {navItems.map((item) => (
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
                ))}
                
                <div className="flex justify-around mt-4 py-4 border-t border-white/10 text-[#E6D3A1]">
                  {['es', 'en', 'ru'].map((lang) => (
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
        
        {/* ПОДВАЛ С МУЛЬТИЯЗЫЧНЫМ ТЕКСТОМ И ТВОИМ ДИЗАЙНОМ */}
        <footer className="border-t pt-8 mt-12 text-xs text-neutral-400 pb-8">
          <div className="flex flex-wrap gap-6 mb-4">
            {navItems.map(item => (
              <Link key={item.href} className="hover:text-black transition-colors" href={item.href}>{item.name}</Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-1">
            <div>© 2025 AUTOEXPERT EU</div>
            <div className="opacity-70">
              {locale === 'es' ? (
                <>
                  Sitio diseñado por Igor Cherezov. Desarrollado por CL DISTANCE LEGAL ADVICE AND INVESTMENTS{' '}
                  <a href="mailto:office@cldistance.com" className="hover:text-black transition-colors underline">office@cldistance.com</a>
                </>
              ) : locale === 'en' ? (
                <>
                  Site designed by Igor Cherezov. Developed by CL DISTANCE LEGAL ADVICE AND INVESTMENTS{' '}
                  <a href="mailto:office@cldistance.com" className="hover:text-black transition-colors underline">office@cldistance.com</a>
                </>
              ) : (
                <>
                  Дизайн сайта — Игорь Черезов. Разработка — CL DISTANCE LEGAL ADVICE AND INVESTMENTS{' '}
                  <a href="mailto:office@cldistance.com" className="hover:text-black transition-colors underline">office@cldistance.com</a>
                </>
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}