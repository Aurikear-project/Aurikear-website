import { createFileRoute } from "@tanstack/react-router";
import {
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

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Appointments & Clinic Locations – Aurikear" },
      {
        name: "description",
        content:
          "Find Aurikear clinic locations and hospital contact details for adult hearing assessments, paediatric audiology, hearing aids, musician earplugs and custom swim moulds.",
      },
    ],
  }),
});

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
            Aurikear provides specialist audiology services at a number of
            private hospital locations. Select a clinic that offers the service
            you need, then contact the hospital directly to arrange your
            appointment.
          </p>
        </div>
      </section>

      <Section>
        {/* Booking guidance */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How to book</Eyebrow>

          <h2 className="font-display text-title font-bold">
            Choose a clinic for your appointment
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            Appointment types vary between locations. Check the services
            available at each hospital below, then contact the hospital
            directly using the telephone number provided.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            If you're unsure which type of appointment or clinic is right for
            you, contact Aurikear and we'll help point you in the right
            direction.
          </p>
        </div>

        {/* Paediatric quick guidance */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-border bg-sky-pale px-6 py-6 md:px-8">
          <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-start md:gap-5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-primary shadow-border">
              <Building2
                className="size-5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-light">
                Booking for a child?
              </p>

              <h3 className="mt-1 font-display text-lg font-bold text-primary-deep">
                Clinic availability depends on your child's age
              </h3>

              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-mid">
                Children aged 4 years and over can be seen at Nuffield Health
                Brentwood Hospital, Nuffield Health The Holly Hospital, Spire
                Cambridge Lea Hospital and Spire Hartswood Hospital. Spire
                London East Hospital provides paediatric hearing assessments
                for children aged 8 months to 4 years and hearing assessments
                for children with complex needs.
              </p>
            </div>
          </div>
        </div>

        {/* Clinic cards */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
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
                    {/* Hospital type */}
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

                    {/* Hospital name */}
                    <h2 className="mt-3 font-display text-xl font-bold text-primary-deep">
                      {clinic.name}
                    </h2>

                    {/* Address */}
                    <div className="mt-4 flex items-start gap-3">
                      <MapPin
                        className="mt-1 size-4 shrink-0 text-primary"
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
                  </div>

                  {/* Services */}
                  <div
                    className={cn(
                      "mt-6 rounded-xl bg-sky-pale p-4",
                      isLondonEast && "md:mt-0 md:p-5",
                    )}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-light">
                      Services available
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

        {/* Detailed paediatric guidance */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-border bg-sky-pale px-6 py-9 md:px-12 md:py-10">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Children's appointments</Eyebrow>

            <h2 className="mt-2 font-display text-2xl font-bold text-primary-deep md:text-3xl">
              Choosing the right clinic for your child
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              The appropriate clinic depends on your child's age and individual
              needs. For children aged 4 years and over, appointments are
              available at Nuffield Health Brentwood Hospital, Nuffield Health
              The Holly Hospital, Spire Cambridge Lea Hospital and Spire
              Hartswood Hospital.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              Spire London East Hospital provides paediatric hearing
              assessments for children aged 8 months to 4 years and hearing
              assessments for children with complex needs.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-mid">
              When contacting the hospital, let the booking team know your
              child's age and the type of audiology appointment required so
              they can arrange the appropriate appointment.
            </p>
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
              If you're unsure which type of hearing appointment you need or
              which clinic is appropriate, contact Aurikear and we'll help
              point you in the right direction.
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