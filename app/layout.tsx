import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://autoexperteu.com'),
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AutoExpert EU',
  description: 'Подбор и импорт автомобилей из Германии в Испанию под ключ. Аукционы B2B, доставка, регистрация в DGT.',
  url: 'https://autoexperteu.com',
  logo: 'https://autoexperteu.com/icon.png',
  telephone: '+34-XXX-XXX-XXX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alicante',
    addressRegion: 'Comunidad Valenciana',
    addressCountry: 'ES',
  },
  areaServed: 'ES',
  availableLanguage: ['Russian', 'Spanish', 'English'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KFJSSCWV3Q"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KFJSSCWV3Q');
            gtag('config', 'AW-17987311531');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
