import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { categoryLabels, type Tour } from "@/lib/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-white/90 text-ink hover:bg-white">
          {categoryLabels[tour.category]}
        </Badge>
        {tour.status === "paused" && (
          <Badge className="absolute top-3 right-3 bg-bloom text-white">
            Уточняйте даты
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium tracking-wide text-cactus uppercase">
          {tour.duration} · {tour.destination}
        </p>
        <h3 className="font-heading text-lg leading-snug">{tour.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">
          {tour.excerpt}
        </p>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-cactus-dark">{tour.priceFrom}</span>
          <span className="text-muted-foreground group-hover:text-foreground">
            Подробнее →
          </span>
        </div>
      </div>
    </Link>
  );
}
