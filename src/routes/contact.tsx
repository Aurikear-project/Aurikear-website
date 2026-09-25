import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Eyebrow, Section } from "@/components/section";
import { clinics } from "@/lib/practice";
import { cn } from "@/lib/utils";

const SITE_URL = "https://www.aurikear.co.uk";
const PAGE_URL = `${SITE_URL}/contact`;

const PAGE_TITLE =
  "Audiology Appointments & Clinic Locations | Aurikear";

const PAGE_DESCRIPTION =
  "Arrange a private audiology appointment with Aurikear. View clinic locations in Brentwood, Buckhurst Hill, Cambridge, Hartswood and East London, with services for adults and children.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,

  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: PAGE_DESCRIPTION,
      },

      // Open Graph
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Aurikear",
      },
      {
        property: "og:title",
        content: PAGE_TITLE,
      },
      {
        property: "og:description",
        content: PAGE_DESCRIPTION,
      },
      {
        property: "og:url",
        content: PAGE_URL,
      },
      {
        property: "og:locale",
        content: "en_GB",
      },

      // Social sharing
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: PAGE_TITLE,
      },
      {
        name: "twitter:description",
        content: PAGE_DESCRIPTION,
      },
    ],

    links: [
      {
        rel: "canonical",
        href: PAGE_URL,
      },
    ],
  }),
});

const serviceLinks = [
  {
    label: "Adult hearing assessments",
    to: "/hearing-assessments" as const,
  },
  {
    label: "Children's hearing",
    to: "/paediatric" as const,
  },
  {
    label: "Hearing aids",
    to: "/hearing-aids" as const,
  },
  {
    label: "Musician earplugs",
    to: "/musicians" as const,
  },
  {
    label: "Custom swim moulds",
    to: "/swim-moulds" as const,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="border-b border-border bg-sky-pale/50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>Appointments &amp; locations</Eyebrow>

          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Arrange an appointment
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
            Aurikear provides private audiology services for adults and
            children at selected Nuffield Health and Spire hospitals. Find the
            clinic that provides the service you need, then contact the
            hospital directly to arrange your appointment.
          </p>
        </div>
      </section>

      <Section>
        {/* Booking guidance */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How to book</Eyebrow>

          <h2 className="font-display text-title font-bold">
            Choose the right clinic for your appointment
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            Appointment types vary between locations. Check the services
            available at each hospital below, then contact your preferred
            hospital directly using the telephone number provided.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            If you&apos;re unsure which service or clinic is appropriate,
            contact Aurikear and we&apos;ll help point you in the right
            direction.
          </p>
        </div>

        {/* Service navigation */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
          {serviceLinks.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
            >
              {service.label}

              <ArrowRight
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        {/* Clinic locations */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="text-center">
            <Eyebrow>Our clinic locations</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Private hospital audiology clinics
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-mid">
              Aurikear appointments are available across five private hospital
              locations. Services differ between hospitals, so please check the
              information for your preferred clinic before booking.
            </p>
          </div>

          {/* Clinic cards */}
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {clinics.map((clinic) => {
              const isLondonEast = clinic.id === "london-east";

              return (
                <article
                  key={clinic.id}
                  className={cn(
                    "flex flex-col rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                    isLondonEast && "md:col-span-2 md:p-8",
                  )}
                >
                  <div
                    className={cn(
                      isLondonEast &&
                        "md:grid md:grid-cols-[1fr_1.15fr] md:gap-12",
                    )}
                  >
                    {/* Clinic details */}
                    <div>
                      <div className="flex items-center gap-2 text-primary">
                        <Building2
                          className="size-4"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />

                        <span className="text-xs font-bold uppercase tracking-wider">
                          {clinic.type}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-bold text-primary-deep">
                        {clinic.name}
                      </h3>

                      <div className="mt-4 flex items-start gap-3">
                        <MapPin
                          className="mt-1 size-4 shrink-0 text-primary"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />

                        <address className="not-italic text-sm leading-relaxed text-mid">
                          {clinic.address}
                          <br />
                          {clinic.town}
                          <br />
                          {clinic.postcode}
                        </address>
                      </div>
                    </div>

                    {/* Services */}
                    <div
                      className={cn(
                        "mt-6 rounded-xl bg-sky-pale p-4",
                        isLondonEast && "md:mt-0 md:p-5",
                      )}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-light">
                        Aurikear services available
                      </p>

                      <ul className="mt-3 space-y-2.5">
                        {clinic.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-mid"
                          >
                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-white text-primary">
                              <Check
                                className="size-3"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            </span>

                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact actions */}
                  <div
                    className={cn(
                      "mt-auto flex flex-col gap-3 border-t border-border pt-6 sm:flex-row",
                      isLondonEast && "md:mt-6",
                    )}
                  >
                    <a
                      href={clinic.phoneHref}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-deep px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      aria-label={`Call ${clinic.name} on ${clinic.phone}`}
                    >
                      <Phone
                        className="size-4"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />

                      {clinic.phone}
                    </a>

                    <a
                      href={clinic.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
                      aria-label={`Visit the ${clinic.name} website`}
                    >
                      Hospital website

                      <ArrowUpRight
                        className="size-4"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Paediatric guidance */}
        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-border bg-sky-pale px-6 py-9 md:px-12 md:py-10">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Children&apos;s appointments</Eyebrow>

            <h2 className="mt-2 font-display text-2xl font-bold text-primary-deep md:text-3xl">
              Choosing the right clinic for your child
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              For children aged 4 years and over, appointments are available
              at Nuffield Health Brentwood Hospital, Nuffield Health The Holly
              Hospital, Spire Cambridge Lea Hospital and Spire Hartswood
              Hospital.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              Spire London East Hospital provides paediatric hearing
              assessments for children aged 8 months to 4 years and hearing
              assessments for children with complex needs.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-mid">
              When contacting the hospital, let the booking team know your
              child&apos;s age and the type of audiology appointment required
              so they can arrange the appropriate appointment.
            </p>

            <Link
              to="/paediatric"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-deep transition-colors hover:text-primary"
            >
              Learn about children&apos;s hearing assessments

              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Unsure what to book */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-white p-6 md:flex md:items-center md:justify-between md:gap-10 md:p-8">
          <div>
            <Eyebrow>Need some guidance?</Eyebrow>

            <h2 className="mt-1 font-display text-2xl font-bold text-primary-deep">
              Not sure what to book?
            </h2>

            <p className="mt-2 max-w-2xl leading-relaxed text-mid">
              If you&apos;re unsure which type of hearing appointment you need
              or which clinic is appropriate, contact Aurikear and we&apos;ll
              help point you in the right direction.
            </p>
          </div>

          <a
            href="mailto:aurikear@gmail.com"
            className="mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary-deep px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:mt-0"
          >
            <Mail
              className="size-4"
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Email Aurikear
          </a>
        </div>
      </Section>
    </main>
  );
}