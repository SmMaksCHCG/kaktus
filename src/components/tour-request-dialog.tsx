"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TourRequestForm } from "@/components/tour-request-form";

export function TourRequestDialog({
  label = "Подобрать тур",
  defaultTour,
}: {
  label?: string;
  defaultTour?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button size="lg" className="h-11 rounded-xl px-5 font-medium" />
        }
      >
        {label}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Заявка на подбор тура</DialogTitle>
          <DialogDescription>
            Заполните короткую форму — подберём вариант под бюджет, даты и настроение.
          </DialogDescription>
        </DialogHeader>
        <TourRequestForm defaultTour={defaultTour} compact />
      </DialogContent>
    </Dialog>
  );
}
