export type StockCar = {
  id?: string;
  title?: string;
  brand?: string;
  model?: string;
  year?: number | string;
  price_eur?: number | string;
  location?: string;
  image_urls?: string;
  published?: boolean | string;
  [key: string]: any;
};

const SHEET_ID = process.env.NEXT_PUBLIC_STOCK_SHEET_ID || '1MN_njNODRUDkfwF6dFkoMYw3avpqZf-sYRw9G4Pf0Xo';
const SHEET_NAME = process.env.NEXT_PUBLIC_STOCK_SHEET_NAME || 'Stock';

function parseGviz(text: string) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('Unexpected gviz response');
  return JSON.parse(text.slice(start, end + 1));
}

function normalizeBoolean(v: any): boolean {
  if (v === true) return true;
  if (v === false) return false;
  if (typeof v === 'string') {
    const s = v.trim().toLowerCase();
    return s === 'true' || s === 'yes' || s === '1' || s === 'да';
  }
  if (typeof v === 'number') return v === 1;
  return false;
}

export function firstImageUrl(image_urls?: string): string | null {
  if (!image_urls) return null;
  const raw = String(image_urls).split(/\s*,\s*|\n+/).find(Boolean);
  if (!raw) return null;

  // Support common Google Drive link formats.
  const idMatch = raw.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]{10,})/);
  if (idMatch) {
    const id = idMatch[1];
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }

  return raw;
}

export function imageUrlsToDirect(image_urls?: string): string[] {
  if (!image_urls) return [];
  const parts = String(image_urls)
    .split(/\s*,\s*|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const urls: string[] = [];
  for (const raw of parts) {
    const idMatch = raw.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]{10,})/);
    if (idMatch) {
      urls.push(`https://drive.google.com/uc?export=view&id=${idMatch[1]}`);
    } else {
      urls.push(raw);
    }
  }
  return urls;
}

export function getFieldIgnoreCase<T = any>(obj: any, field: string): T | undefined {
  if (!obj) return undefined;
  const key = Object.keys(obj).find((k) => k.toLowerCase() === field.toLowerCase());
  return key ? (obj as any)[key] : undefined;
}

export function getCarId(car: any): string | undefined {
  const v = getFieldIgnoreCase<any>(car, 'id');
  if (v === undefined || v === null) return undefined;
  const s = String(v).trim();
  return s ? s : undefined;
}

export async function fetchStockCars(): Promise<StockCar[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to fetch stock: ${res.status}`);
  const text = await res.text();
  const json = parseGviz(text);

  const headers = json.table.cols.map((c: any) => (c.label || '').trim());

  const rows = json.table.rows.map((r: any) => {
    const obj: any = {};
    r.c.forEach((cell: any, i: number) => {
      const key = headers[i] || `col_${i}`;
      obj[key] = cell ? cell.v : '';
    });
    return obj as StockCar;
  });

  return rows;
}

export async function fetchPublishedCars(): Promise<StockCar[]> {
  const cars = await fetchStockCars();

  const published = cars.filter((c) => {
    const key = Object.keys(c).find((k) => k.toLowerCase() === 'published');
    return key ? normalizeBoolean((c as any)[key]) : false;
  });

  return published;
}

// Backwards-compatible API used by the homepage.
// Returns all rows from the sheet; callers can filter by Published.
export async function getCars(): Promise<StockCar[]> {
  return fetchStockCars();
}
