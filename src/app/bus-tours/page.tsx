import type { Metadata } from "next";
import { CategoryLanding } from "@/components/category-landing";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Автобусные туры",
  description: "Автобусные туры по Европе, Беларуси и туры выходного дня из Минска.",
};

export default function BusToursPage() {
  const extra = tours.filter((t) =>
    ["europe", "belarus", "weekend", "russia"].includes(t.category),
  );

  return (
    <>
      <CategoryLanding
        category="europe"
        title="Автобусные туры"
        lead="Европа, Беларусь и соседние города: ночные переезды по минимуму, остановки — там, где хочется выйти."
        image="https://images.unsplash.com/photo-1544620341-11cb2cd7c6d3?auto=format&fit=crop&w=1600&q=80"
      />
      <div className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-heading text-2xl">Ещё маршруты на автобусе</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extra
            .filter((t) => t.category !== "europe")
            .map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
        </div>
      </div>
    </>
  );
}
