import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Направления",
    links: [
      { href: "/bus-tours", label: "Автобусные туры" },
      { href: "/shop-tours", label: "Шоп-туры" },
      { href: "/avia", label: "Авиатуры" },
      { href: "/sea", label: "Отдых на море" },
      { href: "/rental", label: "Аренда автобусов" },
    ],
  },
  {
    title: "Компания",
    links: [
      { href: "/about", label: "О компании" },
      { href: "/contacts", label: "Контакты" },
      { href: "/info", label: "Полезная информация" },
      { href: "/tours", label: "Все туры" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo className="text-white" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {site.legalName}. Подбираем туры под бюджет, даты и настроение — от
            тёплого моря до атмосферных городов Европы.
          </p>
          <p className="mt-3 text-xs text-white/45">УНП {site.unp}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-heading text-sm tracking-wide text-lagoon uppercase">
              {col.title}
            </p>
            <ul className="mt-3 grid gap-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="font-heading text-sm tracking-wide text-lagoon uppercase">
            Контакты
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-white/80">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-white">
                  {p.label}: {p.display}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-white/65">{site.address}</p>
          <p className="text-sm text-white/55">{site.hours.weekdays}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Транспортно-туристическая компания «Кактус-тур» © {site.since}–2026
          </p>
          <p>
            Подарочная концепция сайта. Официальный:{" "}
            <a
              href="https://kaktustour.com/"
              className="underline decoration-white/30 underline-offset-2 hover:text-white"
            >
              kaktustour.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
