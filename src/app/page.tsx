import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bus, Palmtree, Plane, ShoppingBag, Shield, Clock, MapPin } from "lucide-react";
import { CurrencyRates } from "@/components/currency-rates";
import { TourCard } from "@/components/tour-card";
import { TourRequestDialog } from "@/components/tour-request-dialog";
import { TourRequestForm } from "@/components/tour-request-form";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { featuredTours } from "@/lib/tours";

const highlights = [
  {
    href: "/shop-tours",
    title: "Шоп-туры",
    text: "Белосток · Рига · Москва · Варшава",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    href: "/avia",
    title: "Раннее бронирование авиатуров",
    text: "Турция, Египет, Италия — по живым ценам",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe64c1e0?auto=format&fit=crop&w=900&q=80",
  },
  {
    href: "/sea",
    title: "Отдых на море",
    text: "Абхазия · Геленджик · Грузия",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    href: "/bus-tours",
    title: "Туры выходного дня",
    text: "Рига · Белосток · Москва · Питер",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
  },
];

const services = [
  { href: "/bus-tours", icon: Bus, title: "Автобусные туры", text: "Европа, Беларусь и соседние города без перелёта." },
  { href: "/shop-tours", icon: ShoppingBag, title: "Шоп-туры", text: "Регулярные рейсы и понятные правила ввоза." },
  { href: "/avia", icon: Plane, title: "Авиатуры", text: "Пакеты и сборка: отель, перелёт, страховка." },
  { href: "/sea", icon: Palmtree, title: "Море", text: "Автобус или поезд на Черноморье и дальше." },
];

const reasons = [
  { icon: Clock, title: "С 2005 года", text: "Свои маршруты, свои автобусы и привычка доводить поездку до конца." },
  { icon: Shield, title: "Без сюрпризов", text: "Говорим о визах, багаже и доплатах до того, как вы оплатите." },
  { icon: MapPin, title: "Офис в ГЛОБО", text: "Можно зайти, разложить карту на столе и выбрать живьём — не только в чате." },
];

export default function HomePage() {
  const featured = featuredTours();

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-cactus-dark/40" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-lagoon uppercase">
              🌵 Kaktus Tour · Минск
            </p>
            <h1 className="font-heading mt-4 max-w-xl text-4xl leading-[1.1] font-semibold sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Подберём тур под бюджет, даты и настроение — от тёплого моря до
              атмосферных городов Европы.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <TourRequestDialog label="Перейти к подбору" />
              <Link
                href="/tours"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-11 rounded-xl border-white/30 bg-white/5 px-5 text-white hover:bg-white/15",
                })}
              >
                Смотреть туры
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="mb-2 text-xs tracking-wide text-white/60 uppercase">
                Курс НБРБ
              </p>
              <CurrencyRates />
            </div>
            <a
              href={site.phones[0].href}
              className="rounded-2xl bg-cactus px-4 py-3 text-sm font-medium hover:bg-cactus/90"
            >
              {site.phones[0].label}: {site.phones[0].display}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative min-h-36 overflow-hidden rounded-2xl"
            >
              <Image src={item.image} alt="" fill className="object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="font-heading text-lg">{item.title}</p>
                <p className="text-sm text-white/80">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10 transition hover:ring-cactus/40"
            >
              <s.icon className="size-6 text-cactus" />
              <h2 className="font-heading mt-3 text-lg">{s.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium tracking-wide text-cactus uppercase">
              Популярные направления
            </p>
            <h2 className="font-heading mt-1 text-3xl">Найди свой оптимальный тур</h2>
          </div>
          <Link href="/tours" className="inline-flex items-center gap-1 text-sm font-medium text-cactus-dark">
            Все туры <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      <section className="bg-cactus-dark text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
          <div>
            <p className="text-lagoon">«Kaktus Tour» — туристическое агентство в Минске</p>
            <h2 className="font-heading mt-2 text-3xl">Подбор оптимального тура — проще простого</h2>
            <p className="mt-4 max-w-md text-white/75">
              Заполните форму — найдём вариант под ваши даты и бюджет. Можно
              сразу написать, куда тянет: море, замки или рынок в Белостоке.
            </p>
            <ul className="mt-8 grid gap-5">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <r.icon className="mt-0.5 size-5 text-lagoon" />
                  <div>
                    <p className="font-medium">{r.title}</p>
                    <p className="text-sm text-white/70">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 text-foreground shadow-xl">
            <h3 className="font-heading text-xl">Заказать подбор тура</h3>
            <p className="mt-1 mb-5 text-sm text-muted-foreground">
              Ответим в рабочее время. В выходные — удалённо.
            </p>
            <TourRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
