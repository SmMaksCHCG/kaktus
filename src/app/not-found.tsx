import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-sm tracking-wide text-cactus uppercase">404</p>
      <h1 className="font-heading mt-2 text-3xl">Такой страницы нет</h1>
      <p className="mt-3 text-muted-foreground">
        Возможно, тур сняли с продажи или ссылка устарела. Вернитесь в каталог — там живые маршруты.
      </p>
      <Link href="/tours" className="mt-6 inline-block font-medium text-cactus-dark underline">
        Смотреть туры
      </Link>
    </div>
  );
}
