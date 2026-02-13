import {firstImageUrl, getCarId, StockCar} from '@/lib/stock';
import {Link} from '@/i18n/navigation';

export default function CarCard({car}: {car: StockCar}) {
  const img = firstImageUrl((car as any).image_urls || (car as any).photos || (car as any).image_url);
  const id = getCarId(car);
  const title = (car as any).title || `${(car as any).brand || ''} ${(car as any).model || ''}`.trim() || id || 'Car';
  const price = (car as any).price_eur || (car as any).price || '';
  const year = (car as any).year || (car as any).anio || '';
  const location = (car as any).location || '';

  const card = (
    <article className="border rounded-lg overflow-hidden">
      <div className="aspect-[16/10] bg-gray-100">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <div className="mt-2 text-sm text-gray-700 flex flex-wrap gap-x-3 gap-y-1">
          {year ? <span>{year}</span> : null}
          {location ? <span>{location}</span> : null}
          {price ? <span className="font-semibold">{price} €</span> : null}
        </div>
        {id ? (
          <div className="mt-2 text-xs text-gray-500">ID: {id}</div>
        ) : null}
      </div>
    </article>
  );

  return id ? (
    <Link href={`/catalogo-de-coches/${encodeURIComponent(id)}`} className="block hover:opacity-95">
      {card}
    </Link>
  ) : (
    card
  );
}
