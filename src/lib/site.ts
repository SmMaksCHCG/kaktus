export const site = {
  name: "Кактус-тур",
  legalName: "ЧУП «Кактус-тур»",
  tagline: "Твоё идеальное путешествие начинается здесь",
  description:
    "Транспортно-туристическая компания в Минске: автобусные туры по Европе и Беларуси, шоп-туры, авиатуры, отдых на море и аренда автобусов.",
  since: 2005,
  unp: "190827290",
  address: "ул. Уманская, 54–56, ТЦ «ГЛОБО», 2 этаж, офис 56",
  postal: "220089, г. Минск, а/я 93",
  mapQuery: "Минск Уманская 54 ГЛОБО",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=27.618%2C53.863%2C27.642%2C53.876&layer=mapnik&marker=53.8695%2C27.6308",
  hours: {
    weekdays: "Пн–Пт: 10:00–18:00",
    weekend: "Сб, Вс: работаем удалённо",
  },
  phones: [
    { label: "A1", display: "+375 29 127-65-67", href: "tel:+375291276567" },
    { label: "МТС", display: "+375 29 755-65-67", href: "tel:+375297556567" },
    { label: "Городской", display: "+375 17 207-99-77", href: "tel:+375172079977" },
    { label: "Факс", display: "+375 17 207-45-33", href: "tel:+375172074533" },
  ],
  emails: [
    { label: "Офис", value: "office@kaktustour.com" },
    { label: "Туристический отдел", value: "belarus@kaktustour.com" },
    { label: "Шоп-туры", value: "minsk@kaktustour.com" },
  ],
  messengers: {
    viber: "viber://chat?number=%2B375291276567",
    telegram: "https://t.me/+375291276567",
    whatsapp: "https://wa.me/375291276567",
  },
} as const;

export const nav = [
  {
    href: "/bus-tours",
    label: "Автобусные туры",
    children: [
      { href: "/bus-tours", label: "Все автобусные туры" },
      { href: "/tours?cat=europe", label: "Туры по Европе" },
      { href: "/tours?cat=belarus", label: "Экскурсии по Беларуси" },
      { href: "/tours?cat=weekend", label: "Туры выходного дня" },
    ],
  },
  {
    href: "/shop-tours",
    label: "Шоп-туры",
    children: [
      { href: "/tours/shop-belostok", label: "Белосток" },
      { href: "/tours/shop-vilnius", label: "Вильнюс" },
      { href: "/tours/shop-moscow", label: "Москва" },
      { href: "/tours/shop-warsaw", label: "Варшава" },
      { href: "/tours/shop-riga", label: "Рига — Юрмала" },
    ],
  },
  { href: "/avia", label: "Авиатуры" },
  {
    href: "/sea",
    label: "Отдых на море",
    children: [
      { href: "/tours/sea-abkhazia", label: "Абхазия" },
      { href: "/tours/sea-gelendzhik", label: "Геленджик / Кабардинка" },
      { href: "/tours/sea-georgia", label: "Грузия" },
      { href: "/tours/sea-sudak", label: "Судак" },
    ],
  },
  { href: "/rental", label: "Аренда автобусов" },
  { href: "/contacts", label: "Контакты" },
] as const;
