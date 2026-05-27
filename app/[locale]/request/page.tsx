import ClanAutoSearchRU from "../../../components/ClanAutoSearchRU";
import ClanAutoSearchEN from "../../../components/ClanAutoSearchEN";
import ClanAutoSearchES from "../../../components/ClanAutoSearchES";
import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
    ru: "Заявка — Autoexpert EU",
    es: "Solicitud — Autoexpert EU",
    en: "Request — Autoexpert EU",
  };
  const descriptions: Record<string, string> = {
    ru: "Форма заявки на подбор автомобиля.",
    es: "Formulario de solicitud para la selección de coche.",
    en: "Application form for car sourcing.",
  };

  const locale = params.locale || "ru";
  const title = titles[locale];
  const description = descriptions[locale];
  const baseUrl = "https://autoexperteu.com";
  const pathname = `/${locale}/request`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        ru: `${baseUrl}/ru/request`,
        es: `${baseUrl}/es/request`,
        en: `${baseUrl}/en/request`,
        'x-default': `${baseUrl}/ru/request`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${pathname}`,
      siteName: "AutoexpertEU",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default function Page({ params }: Props) {
  const locale = params.locale;

  if (locale === "es") return <ClanAutoSearchES />;
  if (locale === "en") return <ClanAutoSearchEN />;
  return <ClanAutoSearchRU />;
}
