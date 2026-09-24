import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Phone,
} from "lucide-react";

import { Eyebrow, Section } from "@/components/section";
import { clinics } from "@/lib/practice";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Clinic Locations – Aurikear" },
      {
        name: "description",
        content:
          "Find Aurikear clinic locations and contact details for arranging an audiology appointment.",
      },
    ],
  }),
});

export default function ContactPage() {
  return (
    <main>
      {/* Clean page hero */}
      <section className="border-b border-border bg-sky-pale/50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>Contact Aurikear</Eyebrow>

          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Arrange an appointment
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
            Aurikear provides specialist audiology services at a number of
            private hospital locations. Choose the clinic most convenient for
            you and contact the hospital directly to enquire about an
            appointment.
          </p>
        </div>
      </section>

      <Section>
        {/* Booking guidance */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How to book</Eyebrow>

          <h2 className="font-display text-title font-bold">
            Choose your preferred clinic
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            Online booking through Aurikear is not currently available. To
            enquire about availability or arrange an appointment, please
            contact your preferred hospital using the details below.
          </p>
        </div>

        {/* Clinic locations */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {clinics.map((clinic) => (
              <article
                key={clinic.id}
                className="flex flex-col rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {/* Clinic type */}
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

                {/* Clinic name */}
                <h2 className="mt-3 font-display text-xl font-bold text-primary-deep">
                  {clinic.name}
                </h2>

                {/* Address */}
                <div className="mt-4 flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-relaxed text-mid">
                    {clinic.address}
                    <br />
                    {clinic.town}
                    <br />
                    {clinic.postcode}
                  </p>
                </div>

                {/* Services */}
                <div className="mt-5 rounded-xl bg-sky-pale px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-light">
                    Services available
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-mid">
                    {clinic.services}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-5">
                  <a
                    href={clinic.phoneHref}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-deep px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
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
            ))}
          </div>
        </div>

        {/* Help choosing */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border bg-sky-pale px-6 py-10 text-center md:px-12 md:py-12">
          <Eyebrow>Before you book</Eyebrow>

          <h2 className="mt-2 font-display text-2xl font-bold text-primary-deep md:text-3xl">
            Looking for a particular service?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-mid">
            Services can vary between clinic locations. Please check the
            services shown for each hospital above and contact the hospital
            directly if you would like to confirm whether a particular
            appointment is available.
          </p>
        </div>
      </Section>
    </main>
  );
}