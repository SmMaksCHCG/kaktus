import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;
  const name = String(body?.name ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  if (name.length < 2 || phone.length < 6) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  console.info("[tour-request]", { name, phone, note: body?.note });
  return NextResponse.json({ ok: true });
}
