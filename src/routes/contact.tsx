import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Check,
  MapPin,
  Phone,
} from "lucide-react";

import { Eyebrow, Section } from "@/components/section";
import { clinics } from "@/lib/practice";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Appointments & Clinic Locations – Aurikear" },
      {
        name: "description",
        content:
          "Find Aurikear clinic locations and hospital contact details for adult and paediatric audiology appointments, hearing aids and custom ear moulds.",
      },
    ],
  }),
});

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="border-b border-border bg-sky-pale/50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>Appointments & locations</Eyebrow>

          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Arrange an appointment
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
            Aurikear provides specialist audiology services at a number of
            private hospital locations. Choose the clinic most appropriate for
            you and contact the hospital directly to arrange your appointment.
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
            Online booking through Aurikear is not currently available.
            Appointment types vary between locations, so check the services
            listed below and then contact the hospital directly using the
            telephone number provided.
          </p>
        </div>

        {/* Clinic cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {clinics.map((clinic) => (
            <article
              key={clinic.id}
              className="flex flex-col rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
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

              {/* Services */}
              <div className="mt-6 rounded-xl bg-sky-pale p-4">
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

              {/* Contact actions */}
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
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
          ))}
        </div>

        {/* Paediatric guidance */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border bg-sky-pale px-6 py-10 md:px-12 md:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Children's appointments</Eyebrow>

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
          </div>
        </div>

        {/* Booking reminder */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Eyebrow>Before you call</Eyebrow>

          <h2 className="font-display text-2xl font-bold text-primary-deep">
            Tell the hospital which appointment you need
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            When contacting the hospital, let the booking team know the type of
            audiology appointment you require so they can help arrange the
            appropriate appointment.
          </p>
        </div>
      </Section>
    </main>
  );
}