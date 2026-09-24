import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { ServiceIcon } from "@/components/icons";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
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

const serviceGuidance = {
  assessments: {
    question: "Concerned about your hearing?",
    helpsWith: [
      "Changes in hearing",
      "Difficulty following conversation",
      "Baseline or diagnostic hearing assessment",
    ],
    action: "Contact us about an assessment",
    to: "/contact" as const,
  },

  paediatric: {
    question: "Concerned about your child's hearing?",
    helpsWith: [
      "Hearing concerns in babies and children",
      "Glue ear assessment and monitoring",
      "Age-appropriate hearing testing",
    ],
    action: "Explore children's hearing",
    to: "/paediatric" as const,
  },

  "hearing-aids": {
    question: "Finding it harder to hear clearly?",
    helpsWith: [
      "Hearing loss where amplification may help",
      "Choosing appropriate hearing technology",
      "Hearing aid fitting and ongoing support",
    ],
    action: "Explore hearing aids",
    to: "/hearing-aids" as const,
  },

  "musician-plugs": {
    question: "Need to protect your hearing around music?",
    helpsWith: [
      "Musicians and performers",
      "Sound engineers and music professionals",
      "Concerts and other loud music environments",
    ],
    action: "Explore musician earplugs",
    to: "/musicians" as const,
  },

  "swim-moulds": {
    question: "Need to keep water out of your ears?",
    helpsWith: [
      "Regular swimming",
      "Children who need water protection",
      "Custom-fit protection around water",
    ],
    action: "Explore swim moulds",
    to: "/swim-moulds" as const,
  },
} as const;

export function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-border bg-sky-pale/50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>Clinical services</Eyebrow>

          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
            From understanding a hearing concern to hearing technology and
            specialist ear protection, our services are tailored to your
            individual needs.
          </p>
        </div>
      </section>

      <Section>
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Find the right service</Eyebrow>

          <h2 className="font-display text-title font-bold">
            Hearing care for every stage of life
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            You don't need to know which test, treatment or service you need
            before getting in touch. The guide below can help you understand
            which area of our hearing care may be most relevant to you.
          </p>
        </div>

        {/* Service guide */}
        <div className="mx-auto mt-12 max-w-5xl divide-y divide-border border-y border-border">
          {services.map((service) => {
            const guidance =
              serviceGuidance[
                service.slug as keyof typeof serviceGuidance
              ];

            if (!guidance) return null;

            return (
              <article
                key={service.slug}
                className="grid gap-6 py-8 md:grid-cols-[1.1fr_1.4fr_auto] md:items-center md:gap-10 md:py-10"
              >
                {/* Service */}
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-sky-pale text-primary">
                    <ServiceIcon name={service.icon} />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary-light">
                      {service.eyebrow}
                    </p>

                    <h2 className="mt-1 font-display text-xl font-bold text-primary-deep">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-ink">
                      {guidance.question}
                    </p>
                  </div>
                </div>

                {/* Helps with */}
                <ul className="space-y-2.5">
                  {guidance.helpsWith.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-mid"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-sky-pale text-primary">
                        <Check
                          className="size-3"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <div className="md:text-right">
                  <Link
                    to={guidance.to}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-primary-deep transition-colors hover:text-primary"
                  >
                    {guidance.action}

                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Not sure */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border bg-sky-pale px-6 py-10 text-center md:px-12 md:py-12">
          <Eyebrow>Not sure where to start?</Eyebrow>

          <h2 className="mt-2 font-display text-2xl font-bold text-primary-deep md:text-3xl">
            Tell us what you're concerned about
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-mid">
            You don't need to choose a service yourself. Tell us a little about
            your hearing concern, or your child's hearing, and we can help guide
            you towards the appropriate next step.
          </p>

          <Button asChild className="mt-7">
            <Link to="/contact">
              Contact us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}

export default ServicesPage;