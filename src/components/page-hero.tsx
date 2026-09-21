import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./section";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-primary-deep text-foam">
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 size-full object-cover opacity-35"
          loading="eager"
          decoding="async"
        />
      ) : null}
      {/* Layered gradient for depth */}
      <div
        className={cn(
          "absolute inset-0",
          image
            ? "bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary-deep/50"
            : "bg-gradient-to-br from-primary-deep via-primary to-primary-light/80",
        )}
      />
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-[500px] rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-[300px] rounded-full bg-white/4" />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <Eyebrow className="text-sky/90 tracking-[0.18em]">{eyebrow}</Eyebrow>
          <h1 className="font-display text-display font-bold text-white mt-3 leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lede leading-relaxed text-foam/75 font-light">
            {lede}
          </p>
          {children}
        </div>
      </div>
    </header>
  );
}