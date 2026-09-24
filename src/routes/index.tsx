import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Microscope,
  BadgeCheck,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { practice, services, stats } from "@/lib/practice";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aurikear – Hear for Good" },
      {
        name: "description",
        content:
          "Independent audiology for babies, children and adults. Specialist hearing assessments, hearing aids and custom hearing protection from an HCPC-registered, UCL-trained audiologist.",
      },
    ],
  }),
});

function Home() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="HCPC Registered · UCL PhD · 15+ Years' Experience"
        title={practice.headline}
        lede={practice.lede}
        image="/images/hearing-assessment-clinical-equipment.jpg"
        imageAlt="Audiology equipment used during a professional hearing assessment"
      />

      {/* Stats */}
      <div className="border-y border-white/10 bg-primary-deep">
        <div className="mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col items-center px-6 py-8 text-center text-white md:px-8",
                index > 0 ? "md:border-l md:border-white/15" : "",
                index % 2 === 1
                  ? "border-l border-white/15 md:border-l"
                  : "",
                index >= 2
                  ? "border-t border-white/15 md:border-t-0"
                  : "",
              ].join(" ")}
            >
              <span className="font-display text-4xl font-semibold tracking-tight">
                {stat.value}
              </span>

              <span className="mt-1.5 text-xs font-medium uppercase tracking-widest opacity-60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="text-center">
          <Eyebrow>What we offer</Eyebrow>

          <h2 className="mt-2 font-display text-title font-semibold">
            Hearing care for every stage of life
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            From children&apos;s hearing assessments to hearing technology and
            specialist ear protection, we&apos;re here to help you hear,
            communicate and live well.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              to={svc.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_16px_48px_rgba(26,122,138,0.12)]"
            >
              {svc.homeImage && (
                <div className="h-44 overflow-hidden">
                  <img
                    src={svc.homeImage}
                    alt={svc.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-light">
                  {svc.eyebrow}
                </p>

                <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-primary">
                  {svc.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-mid">
                  {svc.summary}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section tone="off">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Meet your audiologist</Eyebrow>

            <h2 className="mt-2 font-display text-title font-semibold">
              Research-led expertise,
              <br />
              compassionate care
            </h2>

            <p className="mt-5 text-base leading-relaxed text-mid">
              With a First Class BSc and PhD from UCL, our audiologist brings
              over 15 years of clinical experience to every patient — from
              babies and children through to adults seeking hearing support,
              hearing technology or specialist ear protection.
            </p>

            <p className="mt-4 text-base leading-relaxed text-mid">
              Every appointment is personal, unhurried and guided by your
              individual needs, with clear explanations and evidence-based
              recommendations throughout.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  icon: GraduationCap,
                  text: "First Class BSc & PhD, UCL",
                },
                {
                  icon: HeartHandshake,
                  text: "Newborn, child & adult care",
                },
                {
                  icon: Microscope,
                  text: "Published auditory research",
                },
                {
                  icon: BadgeCheck,
                  text: "HCPC registered audiologist",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-border"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-pale text-primary">
                      <Icon
                        className="size-5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-sm font-semibold leading-snug text-mid">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Button asChild className="mt-9">
              <Link to="/about">
                Meet your audiologist
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src="/images/audiologist-portrait.jpg"
                alt="Aurikear clinical audiologist"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-primary-deep px-5 py-4 text-white shadow-lift">
              <p className="font-display text-2xl font-semibold leading-none text-white">
                PhD
              </p>

              <p className="mt-1 text-xs text-white/75">
                UCL Auditory Research
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Insurance */}
      <div className="border-y border-border bg-sky-pale py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
              Private medical insurance
            </p>

            <h2 className="mt-2 font-display text-xl font-semibold text-ink">
              Using private medical insurance for your hearing care?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-mid">
              Aurikear works with a range of leading health insurers. Please{" "}
              <Link
                to="/contact"
                className="font-semibold text-primary-deep underline decoration-primary-deep/30 underline-offset-2 transition-colors hover:text-primary"
              >
                contact us
              </Link>{" "}
              if you would like to check your cover before arranging an
              appointment.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              {
                name: "Bupa",
                src: "/images/insurers/bupa.png",
              },
              {
                name: "AXA Health",
                src: "/images/insurers/axa.png",
              },
              {
                name: "Vitality",
                src: "/images/insurers/vitality.png",
              },
              {
                name: "Aviva",
                src: "/images/insurers/aviva.png",
              },
              {
                name: "Cigna",
                src: "/images/insurers/cigna.png",
              },
              {
                name: "WPA",
                src: "/images/insurers/wpa.png",
              },
              {
                name: "Healix",
                src: "/images/insurers/healix.png",
              },
            ].map((insurer) => (
              <img
                key={insurer.name}
                src={insurer.src}
                alt={insurer.name}
                className="h-10 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative overflow-hidden bg-primary-deep py-20 text-center text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-2xl px-4">
          <Eyebrow className="text-sky/80">
            Take the first step
          </Eyebrow>

          <h2 className="mt-2 font-display text-title font-semibold !text-white">
            Ready to hear more of what matters?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foam/80">
            Whether you have concerns about your hearing, your child&apos;s
            hearing, or simply want expert advice, we&apos;re here to help.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}