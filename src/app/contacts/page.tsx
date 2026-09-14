import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { TourRequestForm } from "@/components/tour-request-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Офис Кактус-тур в ТЦ ГЛОБО, телефоны и форма заявки.",
};

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading text-3xl sm:text-5xl">Контакты</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Офис в ТЦ «ГЛОБО». В будни — за стойкой, в выходные отвечаем удалённо.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
            <MapPin className="size-5 text-cactus" />
            <h2 className="font-heading mt-2 text-lg">Адрес</h2>
            <p className="mt-1 text-sm">{site.address}</p>
            <p className="text-sm text-muted-foreground">{site.postal}</p>
            <p className="mt-2 text-sm">
              {site.hours.weekdays}
              <br />
              {site.hours.weekend}
            </p>
          </div>
          <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
            <Phone className="size-5 text-cactus" />
            <h2 className="font-heading mt-2 text-lg">Телефоны</h2>
            <ul className="mt-2 grid gap-1 text-sm">
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="hover:underline">
                    {p.label}: {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
            <Mail className="size-5 text-cactus" />
            <h2 className="font-heading mt-2 text-lg">Почта</h2>
            <ul className="mt-2 grid gap-1 text-sm">
              {site.emails.map((e) => (
                <li key={e.value}>
                  <a href={`mailto:${e.value}`} className="hover:underline">
                    {e.value}
                  </a>
                  <span className="text-muted-foreground"> — {e.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
          <h2 className="font-heading text-xl">Написать нам</h2>
          <p className="mt-1 mb-5 text-sm text-muted-foreground">
            Можете задать вопрос формой — ответим как можно быстрее.
          </p>
          <TourRequestForm />
        </div>
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-foreground/10">
        <iframe
          title="Офис на карте"
          src={site.mapEmbed}
          className="h-80 w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
