import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/practice";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

export function ServicesPage() {
  return (
    <div className="bg-foam/20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Our Clinical Services
          </h1>

          <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
            Research-led audiological care tailored to your needs. Combining
            UCL-trained expertise with state-of-the-art diagnostic technology.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isAssessment = service.slug === "assessments";

            {/* HEARING ASSESSMENTS */}
            if (isAssessment) {
              return (
                <div
                  key={service.slug}
                  className="flex flex-col justify-between rounded-2xl border border-foam/20 bg-white p-6 shadow-sm"
                >
                  <div>
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="mb-4 h-48 w-full rounded-xl object-cover"
                      />
                    )}

                    <h2 className="text-xl font-semibold text-ink">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {service.summary}
                    </p>
                  </div>

                  {/* Direct Contact Notice */}
                  <div className="mt-6 border-t border-foam/20 pt-4 text-xs text-ink/60">
                    <span>
                      To inquire or arrange an appointment, please{" "}
                    </span>

                    <Link
                      to="/contact"
                      className="font-medium text-primary-deep hover:underline"
                    >
                      contact your preferred hospital clinic
                    </Link>

                    <span> or email </span>

                    <a
                      href="mailto:aurikear@gmail.com"
                      className="font-medium text-primary-deep hover:underline"
                    >
                      aurikear@gmail.com
                    </a>
                    .
                  </div>
                </div>
              );
            }

            {/* CLICKABLE SERVICE CARDS */}
            return (
              <Link
                key={service.slug}
                to={service.to}
                className="group flex flex-col justify-between rounded-2xl border border-foam/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
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

                  <h2 className="text-xl font-semibold text-ink transition-colors group-hover:text-primary-deep">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-foam/20 pt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-deep">
                    Explore {service.title}

                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;