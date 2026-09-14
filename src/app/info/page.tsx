import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Полезная информация",
  description: "Визы, багаж, дети и правила поездок — коротко и по делу.",
};

const items = [
  {
    q: "Визы",
    a: "Для части направлений гражданам РБ виза не нужна, для других — заранее. Перед бронью говорим, какой документ нужен именно на ваши даты, а не «вообще».",
  },
  {
    q: "Багаж в автобусе",
    a: "Один крупный чемодан в багажник и ручная кладь в салон — базовый ориентир. Для шоп-туров места больше: скажем лимит, когда подтвердим рейс.",
  },
  {
    q: "Дети",
    a: "Детское место и документы на границе зависят от возраста и страны. Не бронируйте «на глаз» — напишите возраст, подскажем.",
  },
  {
    q: "Отмена из‑за форс-мажора",
    a: "Если границы, погода или перевозчик ломают рейс, предлагаем перенос или возврат по условиям договора. Не держим людей в неопределённости неделями.",
  },
  {
    q: "Шоп-туры: ввоз в РБ",
    a: "Нормы меняются. Актуальные лимиты подтверждаем перед выездом — лучше, чем читать форум годичной давности.",
  },
];

export default function InfoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-heading text-3xl sm:text-5xl">Полезная информация</h1>
      <p className="mt-3 text-muted-foreground">
        Коротко то, о чём обычно спрашивают в офисе. Юридические тексты — в договоре при брони.
      </p>
      <Accordion className="mt-8">
        {items.map((item) => (
          <AccordionItem key={item.q} value={item.q}>
            <AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
