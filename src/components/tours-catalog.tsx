"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TourCard } from "@/components/tour-card";
import { categoryLabels, tours, toursByCategory, type TourCategory } from "@/lib/tours";

const filters: { href: string; label: string; cat?: TourCategory }[] = [
  { href: "/tours", label: "Все" },
  { href: "/tours?cat=europe", label: "Европа", cat: "europe" },
  { href: "/tours?cat=belarus", label: "Беларусь", cat: "belarus" },
  { href: "/tours?cat=weekend", label: "Выходные", cat: "weekend" },
  { href: "/tours?cat=shop", label: "Шоп-туры", cat: "shop" },
  { href: "/tours?cat=sea", label: "Море", cat: "sea" },
  { href: "/tours?cat=avia", label: "Авиа", cat: "avia" },
  { href: "/tours?cat=russia", label: "Россия", cat: "russia" },
];

export function ToursCatalog() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat") ?? undefined;
  const list = toursByCategory(cat);
  const title = cat && cat in categoryLabels ? categoryLabels[cat as TourCategory] : "Все туры";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-medium tracking-wide text-cactus uppercase">Каталог</p>
      <h1 className="font-heading mt-1 text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {list.length} {list.length === 1 ? "предложение" : "предложений"} из Минска. Цены — ориентир,
        точную стоимость скажем при брони.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = (f.cat ?? "") === (cat ?? "");
          return (
            <Link
              key={f.href}
              href={f.href}
              className={`rounded-full px-3 py-1.5 text-sm ring-1 ${
                active
                  ? "bg-cactus text-white ring-cactus"
                  : "bg-card text-foreground ring-border hover:ring-cactus/40"
              }`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>
      {list.length === 0 ? (
        <p className="mt-12 rounded-2xl bg-muted p-8 text-center text-muted-foreground">
          В этой категории пока пусто — посмотрите{" "}
          <Link href="/tours" className="underline">
            весь каталог
          </Link>{" "}
          или оставьте заявку на подбор.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      )}
      <p className="mt-10 text-sm text-muted-foreground">
        Всего в каталоге: {tours.length} маршрутов.
      </p>
    </div>
  );
}
