import { createFileRoute, Link } from "@tanstack/react-router";
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
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-foam/20 transition-all hover:shadow-md"
            >
              <div>
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mb-4 h-48 w-full rounded-xl object-cover"
                  />
                )}
                <h2 className="text-xl font-semibold text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </div>

              {/* Direct Contact Notice */}
              <div className="mt-6 pt-4 border-t border-foam/20 text-xs text-ink/60">
                <span>To inquire or arrange an appointment, please </span>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;