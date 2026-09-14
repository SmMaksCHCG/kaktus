import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 text-inherit", className)}
    >
      <span className="relative grid size-10 shrink-0 place-items-center rounded-2xl bg-cactus text-white shadow-[0_8px_20px_-8px_rgba(31,122,77,0.8)]">
        <svg viewBox="0 0 48 48" className="size-7" aria-hidden>
          <path
            fill="currentColor"
            d="M24 8c-2.4 0-4 1.8-4 5.2V20h-5.2c-3.2 0-5.3 1.5-5.3 3.8 0 2 1.6 3.4 4 3.7V36c0 2.4 2.2 4 5.2 4h10.6c3 0 5.2-1.6 5.2-4V27.5c2.4-.3 4-1.7 4-3.7 0-2.3-2.1-3.8-5.3-3.8H28v-6.8C28 9.8 26.4 8 24 8Z"
          />
          <circle cx="30.5" cy="12.5" r="3.2" fill="#E45A7C" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="font-heading block text-[1.05rem] font-semibold tracking-tight">
          Кактус-тур
        </span>
        {!compact && (
          <span className="block text-[11px] font-medium tracking-wide text-current/70 uppercase">
            с 2005 · Минск
          </span>
        )}
      </span>
    </Link>
  );
}
