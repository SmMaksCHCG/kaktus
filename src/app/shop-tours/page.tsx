import type { Metadata } from "next";
import { CategoryLanding } from "@/components/category-landing";

export const metadata: Metadata = {
  title: "Шоп-туры из Минска",
  description: "Шоп-туры в Белосток, Вильнюс, Москву, Варшаву и Ригу.",
};

export default function ShopToursPage() {
  return (
    <CategoryLanding
      category="shop"
      title="Шоп-туры"
      lead="Регулярные рейсы без посредников: рынки, аутлеты и понятный график посадки в Минске."
      image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
