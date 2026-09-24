import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/practice";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Clinical Services – Aurikear" },
      {
        name: "description",
        content:
          "Explore Aurikear's clinical audiology services, including hearing assessments, hearing aids, paediatric audiology, musician earplugs and custom swim moulds.",
      },
    ],
  }),
});

export function ServicesPage() {
  return (
    <main className="bg-foam/20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Our Clinical Services
          </h1>

          <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
            Research-led audiological care tailored to your needs. Combining
            UCL-trained expertise with specialist clinical technology and
            personalised care.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={service.to}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div>
                {service.image && (
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <h2 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-primary-deep">
                  {service.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-deep">
                  Explore {service.title}

                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ServicesPage;