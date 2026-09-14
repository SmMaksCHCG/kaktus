import type { Metadata } from "next";
import { CategoryLanding } from "@/components/category-landing";

export const metadata: Metadata = {
  title: "Авиатуры",
  description: "Раннее бронирование авиатуров: Турция, Египет, Италия.",
};

export default function AviaPage() {
  return (
    <CategoryLanding
      category="avia"
      title="Авиатуры"
      lead="Раннее бронирование и честный расчёт: не «от», а понимание, сколько вы заплатите за номер и перелёт."
      image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
