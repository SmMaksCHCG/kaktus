import type { Metadata } from "next";
import { CategoryLanding } from "@/components/category-landing";

export const metadata: Metadata = {
  title: "Отдых на море",
  description: "Абхазия, Геленджик, Грузия и Судак — автобусом или поездом из Минска.",
};

export default function SeaPage() {
  return (
    <CategoryLanding
      category="sea"
      title="Отдых на море"
      lead="Черноморье и дальше: билет в одну сторону или туда-обратно, отель подбираем отдельно — как удобнее."
      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
