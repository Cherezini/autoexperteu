import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // www → non-www (301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.autoexperteu.com' }],
        destination: 'https://autoexperteu.com/:path*',
        permanent: true,
      },
      // fao → faq
      {
        source: '/:locale(ru|es|en)/fao',
        destination: '/:locale/faq',
        permanent: true,
      },
      {
        source: '/:locale(ru|es|en)/fao/:path*',
        destination: '/:locale/faq/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
