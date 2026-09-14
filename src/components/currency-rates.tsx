import { getRates } from "@/lib/rates";

export async function CurrencyRates({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const rates = await getRates();
  const dark = variant === "dark";

  return (
    <div
      className={`flex items-center gap-1.5 ${dark ? "text-white" : "text-foreground"}`}
      aria-label="Курсы валют НБРБ"
    >
      {rates.map((rate) => (
        <div
          key={rate.code}
          className={`flex min-w-[4.6rem] items-center justify-between gap-2 rounded-md px-2 py-1 text-xs ring-1 ${
            dark
              ? "bg-black/25 ring-white/10"
              : "bg-white/80 ring-border"
          }`}
        >
          <span className="font-semibold tracking-wide">{rate.code}</span>
          <span className={dark ? "text-lagoon" : "text-cactus font-medium"}>
            {rate.value}
          </span>
        </div>
      ))}
    </div>
  );
}
