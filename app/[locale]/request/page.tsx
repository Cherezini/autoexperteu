import ClanAutoSearchRU from "../../../components/ClanAutoSearchRU";
import ClanAutoSearchEN from "../../../components/ClanAutoSearchEN";
import ClanAutoSearchES from "../../../components/ClanAutoSearchES";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заявка — Autoexpert EU",
  description: "Форма заявки на подбор автомобиля.",
};

export default function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  if (locale === "es") return <ClanAutoSearchES />;
  if (locale === "en") return <ClanAutoSearchEN />;
  return <ClanAutoSearchRU />;
}
