const BASE_URL = 'https://autoexperteu.com';

export function generateAlternates(path: string = '') {
  const p = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return {
    canonical: `${BASE_URL}/ru${p}`,
    languages: {
      'ru':        `${BASE_URL}/ru${p}`,
      'es':        `${BASE_URL}/es${p}`,
      'en':        `${BASE_URL}/en${p}`,
      'x-default': `${BASE_URL}/ru${p}`,
    },
  };
}
