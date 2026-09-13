import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { AuthProvider } from "@/lib/auth/provider";
import { practice } from "@/lib/practice";
import appCss from "../styles.css?url";

const APP_NAME = "Aurikear";

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-bold tracking-[0.14em] text-primary-light uppercase">
        404
      </p>
      <h1 className="font-display mt-2 text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-mid">
        That page isn’t on the {practice.name} site. Head home, or book a visit
        from the menu.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-fg"
      >
        Back to home
      </a>
    </main>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} – Hear for good` },
      {
        name: "description",
        content:
          "Research-led independent audiology in London for newborns, children, and adults. HCPC registered. UCL-trained. Book a hearing test.",
      },
      { name: "theme-color", content: "#0c5a72" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: Root,
});

function Root() {
  return (
    <html lang="en-GB" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
