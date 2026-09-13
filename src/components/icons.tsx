import {
  Baby,
  Backpack,
  Droplets,
  Ear,
  Guitar,
  Headphones,
  Moon,
  Music,
  SlidersHorizontal,
  Sparkle,
  Waves,
} from "lucide-react";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

const map = {
  waves: Waves,
  ear: Ear,
  music: Music,
  baby: Baby,
  droplets: Droplets,
  moon: Moon,
  toy: Sparkle,
  backpack: Backpack,
  guitar: Guitar,
  sliders: SlidersHorizontal,
  headphones: Headphones,
  spark: Sparkle,
} satisfies Record<string, ComponentType<{ className?: string }>>;

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name as keyof typeof map] ?? Waves;
  return <Icon className={cn("size-7", className)} strokeWidth={1.6} />;
}
