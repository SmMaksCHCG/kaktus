import type { Metadata } from "next";
import { Suspense } from "react";
import { ToursCatalog } from "@/components/tours-catalog";

export const metadata: Metadata = {
  title: "Все туры",
  description: "Автобусные, шоп, авиа и морские туры из Минска.",
};

export default function ToursPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-4 py-10 text-muted-foreground">Загружаем каталог…</div>
      }
    >
      <ToursCatalog />
    </Suspense>
  );
}
