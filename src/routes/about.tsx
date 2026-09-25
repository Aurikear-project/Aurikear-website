import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  GraduationCap,
  Microscope,
} from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { specialisms, timeline } from "@/lib/practice";

const SITE_URL = "https://www.aurikear.co.uk";
const PAGE_URL = `${SITE_URL}/about`;

const PAGE_TITLE =
  "About Aurikear | HCPC Registered Clinical Audiologist";

const PAGE_DESCRIPTION =
  "Meet Aurikear's HCPC-registered clinical audiologist, with a First Class BSc in Audiology and PhD from UCL and 15+ years of paediatric and adult audiology experience.";

export const Route = createFileRoute("/about")({
  component: About,

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

const credentials = [
  {
    icon: GraduationCap,
    title: "First Class BSc Audiology",
    detail: "University College London",
  },
  {
    icon: Microscope,
    title: "PhD",
    detail: "University College London",
  },
  {
    icon: Award,
    title: "15+ years",
    detail: "Paediatric & adult clinical care",
  },
  {
    icon: BadgeCheck,
    title: "HCPC registered",
    detail: "Clinical audiologist",
  },
];

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

function About() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="About Aurikear"
        title="Meet your audiologist"
        lede="HCPC-registered clinical audiology informed by more than 15 years of experience, specialist paediatric and adult care, and hearing research at University College London."
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        {/* Biography */}
        <div className="grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
          {/* Portrait and credentials */}
          <div>
            <FramedImage
              src="/images/audiologist-portrait.jpg"
              alt="Aurikear's HCPC-registered clinical audiologist"
              className="aspect-portrait rounded-2xl"
            />

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {credentials.map((credential) => {
                const Icon = credential.icon;

                return (
                  <div
                    key={credential.title}
                    className="flex items-center gap-3 rounded-xl border border-border bg-sky-pale p-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-border">
                      <Icon
                        className="size-5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-primary-deep">
                        {credential.title}
                      </p>

                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        {credential.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Background */}
          <div>
            <Eyebrow>Background &amp; experience</Eyebrow>

            <h2 className="max-w-2xl font-display text-title font-bold">
              Clinical experience shaped by hearing science
            </h2>

            <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-mid">
              <p>
                Aurikear was founded on a simple principle: everyone deserves
                evidence-based hearing care delivered with genuine compassion.
                Our audiologist began her career in 2009 after graduating with
                a First Class BSc in Audiology from University College London.
              </p>

              <p>
                Her clinical experience spans paediatric and adult audiology —
                from assessing hearing in babies and supporting children
                through their developmental years, to helping adults understand
                and manage changes in their hearing.
              </p>

              <p>
                She later returned to University College London to complete a
                PhD focused on Cortical Auditory Evoked Potentials (CAEPs),
                exploring how the auditory cortex processes sound. Her research
                background continues to shape the way she practises today —
                combining evidence-based audiology with careful listening,
                clear explanations and care tailored to each patient.
              </p>
            </div>

            {/* Career timeline */}
            <div className="mt-10">
              <Eyebrow>Experience &amp; research</Eyebrow>

              <ol className="mt-5 space-y-6">
                {timeline.map((item, i) => (
                  <li key={item.title} className="relative flex gap-4">
                    {i < timeline.length - 1 ? (
                      <span
                        className="absolute bottom-[-24px] left-[17px] top-10 w-px bg-border"
                        aria-hidden="true"
                      />
                    ) : null}

                    <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-fg">
                      {item.mark}
                    </span>

                    <div className="pb-1">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted">
                        {item.year}
                      </p>

                      <h3 className="mt-0.5 font-bold text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-mid">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Clinical specialisms */}
        <div className="mt-20">
          <Eyebrow>Clinical specialisms</Eyebrow>

          <h2 className="max-w-2xl font-display text-title font-bold">
            Specialist audiology across every stage of life
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-mid">
            From hearing assessments in babies and children to adult hearing
            care, hearing aids and custom ear protection, Aurikear combines
            specialist clinical experience with an individual approach to every
            patient.
          </p>

          <ul className="mt-7 grid max-w-4xl gap-3 sm:grid-cols-2">
            {specialisms.map((specialism) => {
              const displayName =
                specialism === "Hearing loss assessment"
                  ? "Adult hearing assessments"
                  : specialism;

              return (
                <li
                  key={specialism}
                  className="flex items-center gap-3 rounded-xl border border-border bg-sky-pale px-4 py-4"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-border">
                    <BadgeCheck
                      className="size-4"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm font-semibold text-primary-deep">
                    {displayName}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Internal service links */}
          <div className="mt-7 flex max-w-4xl flex-wrap gap-2">
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
        </div>

        {/* Philosophy of care */}
        <div className="mt-16 rounded-2xl border border-border bg-sky-pale px-6 py-10 md:px-10 md:py-12">
          <Eyebrow>Philosophy of care</Eyebrow>

          <blockquote className="max-w-4xl">
            <p className="font-display text-xl font-semibold leading-relaxed text-primary-deep md:text-2xl">
              “Every patient — whether a one-day-old baby or a 90-year-old —
              deserves to be heard.”
            </p>

            <p className="mt-4 max-w-3xl leading-relaxed text-mid">
              I combine the rigour of academic research with a warm, unhurried
              clinical approach. No question is too small, no concern too
              minor. My goal is always to give each person the clearest
              possible understanding of their hearing and the best possible
              outcome.
            </p>
          </blockquote>
        </div>

        {/* Why Aurikear */}
        <div className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Aurikear approach</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Evidence, experience and individual care
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
              Good audiology is about more than completing a hearing test.
              It means understanding the person behind the results, explaining
              findings clearly and helping each patient make informed decisions
              about their hearing care.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-bg p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-sky-pale text-primary">
                <Microscope
                  className="size-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-4 font-display text-lg font-bold text-primary-deep">
                Research-led
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-mid">
                Academic training and hearing research inform an
                evidence-based approach to clinical audiology.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-bg p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-sky-pale text-primary">
                <Award
                  className="size-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-4 font-display text-lg font-bold text-primary-deep">
                Experienced
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-mid">
                More than 15 years of clinical experience across paediatric and
                adult audiology.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-bg p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-sky-pale text-primary">
                <BadgeCheck
                  className="size-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-4 font-display text-lg font-bold text-primary-deep">
                Patient-centred
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-mid">
                Clear explanations, careful listening and recommendations
                tailored to each patient&apos;s individual needs.
              </p>
            </article>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-2xl bg-primary-deep px-6 py-12 text-center text-white md:px-12">
          <Eyebrow className="text-sky">Take the first step</Eyebrow>

          <h2 className="font-display text-3xl font-bold text-white">
            Ready to talk about your hearing?
          </h2>

          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-foam/80">
            Explore our clinic locations and arrange an audiology appointment
            at the hospital most appropriate for your needs.
          </p>

          <Button asChild variant="foam" className="mt-7">
            <Link to="/contact">
              View clinics &amp; appointments
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}

export default About;