import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 34"
      fill="none"
      aria-hidden="true"
      className={cn("h-[1.15em] w-[1em]", className)}
    >
      <path
        d="M6 30 C6 30, 26 23, 22 5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        className="opacity-40"
      />
      <path
        d="M10 28 C10 28, 22 21, 18 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="19.5" cy="6.5" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  inverted = false,
  stacked = true,
  className,
}: {
  inverted?: boolean;
  stacked?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex flex-col no-underline",
        inverted ? "text-foam" : "text-primary-deep",
        className,
      )}
      aria-label="Aurikear home"
    >
      <span className="flex items-end">
        <span className="font-display text-2xl leading-none font-bold tracking-tight">
          auriKear
        </span>
        <Mark className={cn("mb-0.5 ml-1.5", inverted ? "text-sky" : "text-primary-light")} />
      </span>
      {stacked ? (
        <span
          className={cn(
            "mt-0.5 text-xs leading-none italic",
            inverted ? "text-foam/50" : "text-primary-light",
          )}
        >
          Hear for good
        </span>
      ) : null}
    </Link>
  );
}
