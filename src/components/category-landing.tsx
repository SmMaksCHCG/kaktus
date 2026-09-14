import Image from "next/image";
import { TourCard } from "@/components/tour-card";
import { TourRequestDialog } from "@/components/tour-request-dialog";
import { toursByCategory, type TourCategory } from "@/lib/tours";

export function CategoryLanding({
  category,
  title,
  lead,
  image,
}: {
  category: TourCategory;
  title: string;
  lead: string;
  image: string;
}) {
  const list = toursByCategory(category);

  return (
    <>
      <section className="relative h-64 overflow-hidden bg-ink sm:h-80">
        <Image src={image} alt="" fill className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 text-white">
          <h1 className="font-heading text-3xl sm:text-5xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-white/80">{lead}</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-10">
        {list.length === 0 ? (
          <p className="rounded-2xl bg-muted p-8 text-center text-muted-foreground">
            Сейчас в этой категории нет опубликованных карточек — оставьте заявку, подберём вручную.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        )}
        <div className="mt-10 flex flex-col items-start gap-3 rounded-3xl bg-cactus-dark p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-xl">Не нашли дату или направление?</p>
          <TourRequestDialog label="Написать менеджеру" />
        </div>
      </div>
    </>
  );
}
