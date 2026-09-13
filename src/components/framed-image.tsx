import { cn } from "@/lib/utils";

export function FramedImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden bg-sky-pale", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("framed size-full object-cover", imgClassName)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
