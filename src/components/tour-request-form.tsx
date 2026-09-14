"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const channels = [
  { value: "call", label: "Перезвоните мне" },
  { value: "viber", label: "Viber" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "telegram", label: "Telegram" },
];

export function TourRequestForm({
  defaultTour,
  compact = false,
}: {
  defaultTour?: string;
  compact?: boolean;
}) {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
      form.reset();
      toast.success("Заявку приняли — менеджер свяжется в рабочее время.");
    } catch {
      toast.error("Не получилось отправить. Позвоните нам напрямую.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-cactus/10 p-6 text-center">
        <p className="font-heading text-lg">Заявка ушла в офис</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Обычно отвечаем в течение рабочего дня. Если срочно — звоните на A1.
        </p>
        <Button className="mt-4" variant="outline" onClick={() => setDone(false)}>
          Отправить ещё одну
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Ваше имя</Label>
          <Input id="name" name="name" required placeholder="Анна" autoComplete="name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="+375 29 000-00-00"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="grid gap-1.5">
          <Label htmlFor="channel">Связаться через</Label>
          <select
            id="channel"
            name="channel"
            defaultValue="call"
            className="h-9 rounded-lg border border-input bg-background px-2.5 text-sm"
          >
            {channels.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="date">Дата выезда</Label>
          <Input id="date" name="date" type="date" />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="note">Что подобрать</Label>
        <Textarea
          id="note"
          name="note"
          defaultValue={defaultTour ? `Интересует: ${defaultTour}` : ""}
          placeholder="Бюджет, море или города, сколько человек, дети…"
          className="min-h-24"
        />
      </div>
      <Button type="submit" disabled={pending} size="lg" className="h-11 rounded-xl">
        {pending ? "Отправляем…" : "Отправить заявку"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь, что менеджер свяжется с вами по указанному телефону.
      </p>
    </form>
  );
}
