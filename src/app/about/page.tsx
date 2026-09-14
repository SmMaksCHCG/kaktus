import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "О компании",
  description: "Кактус-тур — транспортно-туристическая компания в Минске с 2005 года.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm font-medium tracking-wide text-cactus uppercase">С {site.since} года</p>
      <h1 className="font-heading mt-1 text-3xl sm:text-5xl">О компании</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed">
        <p>
          {site.legalName} — транспортно-туристическая компания в Минске. Мы возим людей в Европу,
          по Беларуси и на море, собираем авиапакеты и сдаём собственные автобусы в аренду.
        </p>
        <p>
          Этот сайт собран как подарок: та же логика разделов, что на официальном{" "}
          <a href="https://kaktustour.com/" className="underline">
            kaktustour.com
          </a>
          , только с более спокойной вёрсткой, живым каталогом и формой подбора. Дальше его можно
          наполнять реальными датами, ценами и фотографий с рейсов.
        </p>
        <p>
          Офис: {site.address}. УНП {site.unp}.
        </p>
      </div>
      <Link href="/contacts" className="mt-8 inline-block font-medium text-cactus-dark underline">
        Как нас найти →
      </Link>
    </div>
  );
}
