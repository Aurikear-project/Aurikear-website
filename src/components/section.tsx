import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  paper: "bg-paper text-ink",
  off:   "bg-bg text-ink",
  teal:  "bg-primary-deep text-foam",
  ink:   "bg-ink text-foam",
} as const;

export function Section({
  children,
  className,
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", tones[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-xs font-bold tracking-[0.16em] text-primary-light uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}