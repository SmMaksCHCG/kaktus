import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Route } from "lucide-react";
import { TourCard } from "@/components/tour-card";
import { TourRequestDialog } from "@/components/tour-request-dialog";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { categoryLabels, getTour, relatedTours, tours } from "@/lib/tours";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Тур не найден" };
  return { title: tour.title, description: tour.excerpt };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  const related = relatedTours(tour.slug);

  return (
    <article>
      <div className="relative h-[42vh] min-h-72 overflow-hidden bg-ink">
        <Image src={tour.image} alt={tour.title} fill priority className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 text-white">
          <Badge className="bg-white/90 text-ink">{categoryLabels[tour.category]}</Badge>
          <h1 className="font-heading mt-3 text-3xl sm:text-5xl">{tour.title}</h1>
          <p className="mt-2 max-w-2xl text-white/80">{tour.excerpt}</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Info icon={Clock} label="Длительность" value={tour.duration} />
            <Info icon={MapPin} label="Направление" value={tour.destination} />
            <Info icon={Route} label="Маршрут" value={tour.route} />
          </div>
          <p className="mt-8 text-base leading-relaxed">{tour.body}</p>
          <h2 className="font-heading mt-8 text-2xl">Что входит в настроение поездки</h2>
          <ul className="mt-4 grid gap-2">
            {tour.highlights.map((h) => (
              <li key={h} className="rounded-xl bg-card px-4 py-3 ring-1 ring-foreground/10">
                {h}
              </li>
            ))}
          </ul>
          {tour.status === "paused" && (
            <p className="mt-6 rounded-xl bg-bloom/10 p-4 text-sm">
              Выезды по этому направлению сейчас уточняются. Оставьте заявку — скажем актуальный статус.
            </p>
          )}
        </div>
        <aside className="h-fit rounded-3xl bg-card p-6 ring-1 ring-foreground/10 lg:sticky lg:top-28">
          <p className="text-sm text-muted-foreground">Ориентир по цене</p>
          <p className="font-heading text-3xl text-cactus-dark">{tour.priceFrom}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Точную стоимость, места в автобусе и отели подтверждаем при брони.
          </p>
          <div className="mt-5">
            <TourRequestDialog label="Забронировать / спросить" defaultTour={tour.title} />
          </div>
          <a href={site.phones[0].href} className="mt-3 block text-sm text-cactus hover:underline">
            Или сразу позвонить: {site.phones[0].display}
          </a>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="font-heading text-2xl">Похожие маршруты</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {related.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
          <Link href="/tours" className="mt-6 inline-block text-sm font-medium text-cactus-dark">
            Весь каталог →
          </Link>
        </section>
      )}
    </article>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-muted/60 p-4">
      <Icon className="size-4 text-cactus" />
      <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}
