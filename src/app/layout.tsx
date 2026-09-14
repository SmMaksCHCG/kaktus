import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const unbounded = Unbounded({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "Кактус-тур — транспортно-туристическая компания в Минске",
    template: "%s · Кактус-тур",
  },
  description:
    "Автобусные туры по Европе и Беларуси, шоп-туры, авиатуры, отдых на море и аренда автобусов. Офис в ТЦ «ГЛОБО», Минск.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
