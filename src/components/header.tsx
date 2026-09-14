"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TourRequestDialog } from "@/components/tour-request-dialog";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const mainPhone = site.phones[0];

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs">
          <p className="hidden sm:block text-white/75">
            {site.hours.weekdays} · {site.hours.weekend}
          </p>
          <a
            href={mainPhone.href}
            className="inline-flex items-center gap-1.5 font-medium text-lagoon hover:text-white"
          >
            <Phone className="size-3.5" />
            {mainPhone.label} {mainPhone.display}
          </a>
        </div>
      </div>
      <div className="border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Logo />
          <nav className="ml-4 hidden items-center gap-0.5 lg:flex">
            {nav.map((item) =>
              "children" in item && item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                  <div className="invisible absolute top-full left-0 z-50 min-w-56 translate-y-1 rounded-xl bg-card p-2 opacity-0 shadow-lg ring-1 ring-foreground/10 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="ml-auto hidden items-center gap-2 md:flex">
            <TourRequestDialog />
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <div className="ml-auto lg:hidden">
            <SheetTrigger
              render={<Button variant="outline" size="icon" />}
            >
              <Menu />
              <span className="sr-only">Меню</span>
            </SheetTrigger>
            </div>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>Меню</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-1 px-4 pb-6">
                {nav.map((item) => (
                  <div key={item.href} className="grid">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-2 py-2 font-medium hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                    {"children" in item &&
                      item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-4 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ))}
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 font-medium hover:bg-muted"
                >
                  О компании
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
