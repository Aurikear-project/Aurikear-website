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

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About – Aurikear" },
      {
        name: "description",
        content:
          "Meet Aurikear's HCPC-registered audiologist: First Class BSc and PhD from UCL, with 15+ years of paediatric and adult clinical care.",
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

function About() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="About Aurikear"
        title="Meet your audiologist"
        lede="A passion for hearing science, a commitment to compassionate care, and a research career built at University College London."
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
              alt="Aurikear's clinical audiologist"
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
              Dedicated to hearing health — from the first days of life
            </h2>

            <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-mid">
              <p>
                Aurikear was founded on a simple principle: everyone deserves
                exceptional, evidence-based hearing care delivered with genuine
                compassion. Our audiologist began her career in 2009 after
                graduating with a First Class BSc in Audiology from University
                College London.
              </p>

              <p>
                Her clinical experience spans paediatric and adult audiology —
                from assessing hearing in babies and supporting children
                through their developmental years, to helping adults understand
                and manage changes in their hearing.
              </p>

              <p>
                She later returned to UCL to complete a PhD focused on Cortical
                Auditory Evoked Potentials (CAEPs), exploring how the auditory
                cortex processes sound. Her research background continues to
                shape the way she practises today — combining evidence-based
                audiology with careful listening, clear explanations and care
                tailored to each patient.
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
        <div className="mt-16">
          <Eyebrow>Clinical specialisms</Eyebrow>

          <h2 className="max-w-2xl font-display text-title font-bold">
            Specialist care across every stage of life
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-mid">
            From hearing assessments in babies and children to adult hearing
            care, Aurikear combines specialist clinical experience with an
            individual approach to every patient.
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
              clinical approach. No question is too small, no concern too minor.
              My goal is always to give each person the clearest possible
              understanding of their hearing and the best possible outcome.
            </p>
          </blockquote>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-2xl bg-primary-deep px-6 py-12 text-center text-white md:px-12">
          <Eyebrow className="text-sky">
            Take the first step
          </Eyebrow>

          <h2 className="font-display text-3xl font-bold text-white">
            Ready to talk about your hearing?
          </h2>

          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-foam/80">
            Get in touch to discuss your needs or arrange an appointment at one
            of our hospital clinics.
          </p>

          <Button asChild variant="foam" className="mt-7">
            <Link to="/contact">
              Arrange an appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}