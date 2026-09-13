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
          className="absolute inset-0 size-full object-cover opacity-45"
          loading="eager"
          decoding="async"
        />
      ) : null}
      <div
        className={cn(
          "absolute inset-0",
          image
            ? "bg-primary-deep/78"
            : "bg-primary-deep",
        )}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow className="text-sky">{eyebrow}</Eyebrow>
          <h1 className="font-display text-display font-bold text-foam">{title}</h1>
          <p className="mt-4 max-w-xl text-lede leading-relaxed text-foam/80">{lede}</p>
          {children}
        </div>
      </div>
    </header>
  );
}
