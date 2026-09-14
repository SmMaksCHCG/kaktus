export type Rate = { code: string; value: string };

const fallback: Rate[] = [
  { code: "USD", value: "3,09" },
  { code: "EUR", value: "3,61" },
  { code: "RUB", value: "3,69" },
];

export async function getRates(): Promise<Rate[]> {
  try {
    const codes = ["USD", "EUR", "RUB"] as const;
    const results = await Promise.all(
      codes.map(async (code) => {
        const res = await fetch(
          `https://api.nbrb.by/exrates/rates/${code}?parammode=2`,
          { next: { revalidate: 3600 } },
        );
        if (!res.ok) throw new Error("nbrb");
        const data = (await res.json()) as {
          Cur_OfficialRate: number;
          Cur_Scale: number;
        };
        const perUnit = data.Cur_OfficialRate / (data.Cur_Scale || 1);
        const display =
          code === "RUB" ? (perUnit * 100).toFixed(2).replace(".", ",") : perUnit.toFixed(2).replace(".", ",");
        return { code: code === "RUB" ? "RUB100" : code, value: display };
      }),
    );
    return results.map((r) =>
      r.code === "RUB100" ? { code: "RUB", value: r.value } : r,
    );
  } catch {
    return fallback;
  }
}
