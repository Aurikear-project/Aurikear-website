import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.97] hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg hover:bg-primary-deep shadow-[0_2px_8px_rgba(26,122,138,0.25)] hover:shadow-[0_6px_20px_rgba(26,122,138,0.35)]",
        secondary:
          "bg-paper text-primary-deep shadow-border hover:bg-sky-pale hover:shadow-lift",
        outline:
          "bg-transparent text-foam ring-1 ring-foam/40 hover:bg-foam/10 hover:ring-foam",
        ghost:
          "bg-transparent text-mid hover:bg-sky-pale hover:text-primary",
        foam:
          "bg-foam text-primary-deep hover:bg-sky-pale shadow-border hover:shadow-lift",
      },
      size: {
        sm: "h-9 rounded-full px-5 text-sm",
        md: "h-11 rounded-full px-6 text-sm",
        lg: "h-13 rounded-full px-8 text-base",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}