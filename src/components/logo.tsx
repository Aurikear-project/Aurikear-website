import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/*
 * Aurikear ear mark
 *
 * Kept as SVG rather than an image so the logo remains
 * perfectly sharp at every screen size.
 */
function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-[1.22em] w-[1.04em]", className)}
    >
      {/* Outer ear curve */}
      <path
        d="M7 36C14 33 23 27 27 18C30 11 28 5 23 3"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-45"
      />

      {/* Inner ear curve */}
      <path
        d="M11 32C17 29 22 24 23 18C24 13 22 9 18 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Inner cochlear detail */}
      <path
        d="M17 20C19 18 20 16 19 14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
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
        "group inline-flex flex-col no-underline",
        inverted ? "text-foam" : "text-primary-deep",
        className,
      )}
      aria-label="Aurikear home"
    >
      {/* Wordmark */}
      <span className="flex items-center">
        <span className="font-display text-[1.55rem] font-semibold leading-none tracking-[-0.045em]">
          auri
          <span className="text-[1.08em] font-bold">K</span>
          ear
        </span>

        <Mark
          className={cn(
            "ml-1.5",
            inverted ? "text-sky" : "text-primary-light",
          )}
        />
      </span>

      {/* Tagline */}
      {stacked ? (
        <span
          className={cn(
  "mt-0.5 pl-[0.12em] text-[0.64rem] font-medium leading-none tracking-[0.06em]",
  inverted ? "text-foam/65" : "text-primary-light",
)}
        >
          Hear for good
        </span>
      ) : null}
    </Link>
  );
}