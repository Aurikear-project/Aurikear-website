import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { AuthProvider } from "@/lib/auth/provider";
import { jsonLd, practice } from "@/lib/practice";
import appCss from "../styles.css?url";

const APP_NAME = "Aurikear";

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-light">
        404
      </p>

      <h1 className="mt-2 font-display text-3xl font-bold text-ink">
        Page not found
      </h1>

      <p className="mt-3 leading-relaxed text-mid">
        That page isn&apos;t on the {practice.name} site. Return to the
        homepage or visit our contact page for clinic and appointment
        information.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-fg transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>

        <Link
          to="/contact"
          className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-white px-5 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
        >
          View clinic locations
        </Link>
      </div>
    </main>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      // Default title
      {
        title: `${APP_NAME} – Private Audiology`,
      },

      // Default description
      {
        name: "description",
        content:
          "Private audiology for babies, children and adults. HCPC-registered, UCL-trained expertise in hearing assessments, hearing aids and specialist ear protection.",
      },

      // Search engine instructions
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      // Default Open Graph metadata
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: APP_NAME,
      },
      {
        property: "og:title",
        content: "Aurikear – Private Audiology",
      },
      {
        property: "og:description",
        content:
          "Private audiology for babies, children and adults, including hearing assessments, hearing aids and specialist ear protection.",
      },
      {
        property: "og:locale",
        content: "en_GB",
      },

      // Default social sharing metadata
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Aurikear – Private Audiology",
      },
      {
        name: "twitter:description",
        content:
          "Private audiology for babies, children and adults, including hearing assessments, hearing aids and specialist ear protection.",
      },

      // Browser theme colour
      {
        name: "theme-color",
        content: "#0c5a72",
      },
    ],

    links: [
      // Favicon
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },

      // Main stylesheet
      {
        rel: "stylesheet",
        href: appCss,
      },

      // Google Fonts connection optimisation
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      // Fonts
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap",
      },

      // PWA manifest
      {
        rel: "manifest",
        href: "/__grok/manifest.webmanifest",
      },

      // Apple touch icon
      {
        rel: "apple-touch-icon",
        href: "/__grok/icon-180.png",
      },
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

        {/* Site-wide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
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