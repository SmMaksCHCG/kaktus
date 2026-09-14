import type { Metadata } from "next";
import { Bus, Check } from "lucide-react";
import { TourRequestDialog } from "@/components/tour-request-dialog";
import { buses } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Аренда автобусов в Минске",
  description: "Аренда туристических автобусов без посредников: договор, водитель, техника.",
};

export default function RentalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-medium tracking-wide text-cactus uppercase">Транспорт</p>
      <h1 className="font-heading mt-1 text-3xl sm:text-5xl">Аренда автобусов</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Свои машины, свой договор и водитель, который не появляется «за час до выезда». Подходит для
        корпоративов, свадеб, школьных групп и трансферов на курорты.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {buses.map((bus) => (
          <article key={bus.name} className="rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
            <Bus className="size-7 text-cactus" />
            <h2 className="font-heading mt-3 text-xl">{bus.name}</h2>
            <p className="text-sm text-muted-foreground">{bus.seats} посадочных мест</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {bus.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 text-cactus" /> {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-3xl bg-muted p-6 sm:p-8">
        <h2 className="font-heading text-2xl">Как бронируем</h2>
        <ol className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <li className="rounded-xl bg-card p-4">1. Пишете даты, маршрут и число пассажиров.</li>
          <li className="rounded-xl bg-card p-4">2. Считаем километраж и простой, присылаем договор.</li>
          <li className="rounded-xl bg-card p-4">3. Закрепляем машину и водителя — без «подменим утром».</li>
        </ol>
        <div className="mt-6">
          <TourRequestDialog label="Запросить расчёт" defaultTour="Аренда автобуса" />
        </div>
      </div>
    </div>
  );
}
