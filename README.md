# Кактус-тур

Подарочная концепция сайта транспортно-туристической компании [Кактус-тур](https://kaktustour.com/) (Минск): автобусные и шоп-туры, авиапакеты, море и аренда автобусов.

**Открыть в браузере:** [https://smmakschcg.github.io/kaktus/](https://smmakschcg.github.io/kaktus/)

Это не официальный продакшен-сайт. Офис, телефоны и направления взяты из открытых данных компании, тексты и вёрстка — новые. Дальше можно подключить живые даты, оплату и CMS.

## Что внутри

- Главная с подбором тура, курсами НБРБ и популярными маршрутами
- Каталог с фильтрами и карточками туров
- Разделы: автобусы, шоп-туры, море, авиа, аренда
- Контакты, карта, форма заявки

Стек: Next.js, TypeScript, Tailwind, shadcn/ui.

Сайт собирается Actions и кладётся в ветку `gh-pages`. Чтобы ссылка открывалась у всех, один раз включите хостинг:

1. Откройте [Settings → Pages](https://github.com/SmMaksCHCG/kaktus/settings/pages)
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/ (root)` → Save

После этого адрес работает постоянно: [https://smmakschcg.github.io/kaktus/](https://smmakschcg.github.io/kaktus/)

## Запуск локально

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Сборка:

```bash
npm run build
npm start
```

Статическая сборка как на GitHub Pages:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/kaktus npm run build
```

## Дальше улучшать

- Реальные цены и календарь выездов
- Отправка заявок на почту / в Telegram
- Фото с рейсов вместо стоковых
- Личный кабинет и онлайн-оплата, если понадобится
