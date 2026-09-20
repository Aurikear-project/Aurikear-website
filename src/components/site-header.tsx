import * as Dialog from "@radix-ui/react-dialog";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/practice";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/95 shadow-[0_2px_20px_rgba(26,122,138,0.06)] backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-fg">Skip to content</a>
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <ul className="flex items-center">
            {navLinks.map((link) => {
              const active =
                link.to === "/"
                  ? pathname === "/"
                  : pathname === link.to || pathname.startsWith(`${link.to}/`);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-150",
                      active
                        ? "bg-sky-pale text-primary"
                        : "text-mid hover:bg-sky-pale hover:text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button asChild size="sm" className="ml-3 rounded-full bg-primary px-5 text-white hover:bg-primary-deep">
            <Link to="/contact">Contact us</Link>
          </Button>
        </nav>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 data-[state=open]:animate-in" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-paper px-5 py-5 shadow-lift outline-none">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-lg font-bold text-primary-deep">Menu</Dialog.Title>
                <Dialog.Close asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="size-5" />
                  </Button>
                </Dialog.Close>
              </div>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-semibold text-ink hover:bg-sky-pale hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>Contact us</Link>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
