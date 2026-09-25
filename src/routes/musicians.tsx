import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Ear,
  Music,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { ServiceIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { musicianAudiences } from "@/lib/practice";

export const Route = createFileRoute("/musicians")({
  component: Musicians,
  head: () => ({
    meta: [
      { title: "Musician Earplugs – Aurikear" },
      {
        name: "description",
        content:
          "Custom musician earplugs with filtered hearing protection for musicians, performers, sound professionals and music lovers.",
      },
    ],
  }),
});

const benefits = [
  "Natural, balanced sound across frequencies",
  "Custom-made from impressions of your ears",
  "Comfortable for rehearsals and performances",
  "Interchangeable filters for different environments",
];

const filterLevels = [
  {
    level: "9 dB",
    title: "Lighter attenuation",
    body:
      "For situations where you want a modest reduction in sound while retaining as much environmental and musical detail as possible.",
  },
  {
    level: "15 dB",
    title: "Moderate attenuation",
    body:
      "A versatile option for many rehearsals, performances and amplified music environments where a greater reduction in sound is helpful.",
  },
  {
    level: "25 dB",
    title: "Higher attenuation",
    body:
      "For louder music environments where greater sound reduction may be appropriate while maintaining a more balanced listening experience.",
  },
];

const appointmentSteps = [
  {
    number: "01",
    icon: Music,
    title: "Discuss your needs",
    body:
      "We'll talk about where and how you use hearing protection, including rehearsals, performances, concerts and professional sound environments.",
  },
  {
    number: "02",
    icon: Ear,
    title: "Check your ears",
    body:
      "Your ears are examined before impressions are taken to make sure it is appropriate to proceed.",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Ear impressions",
    body:
      "Detailed impressions are taken so your hearing protection can be individually manufactured to fit your ears.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Custom protection",
    body:
      "Your finished earplugs are supplied and we'll explain their fit, use, care and the filter options appropriate for your listening needs.",
  },
];

function Musicians() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Hearing protection"
        title="Custom musician earplugs"
        lede="Your hearing is your instrument. Protect it without compromising a single note."
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        {/* Why custom */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>Why custom?</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Protect your hearing without losing the music
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              Standard foam earplugs tend to reduce high frequencies more than
              low frequencies, which can make music sound muffled and
              unnatural. Custom musician earplugs use precision acoustic
              filters designed to provide a more even reduction across
              frequencies.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              Made from an impression of your individual ear, they provide a
              secure and comfortable fit for rehearsals, performances and
              extended listening.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-mid"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-sky-pale text-primary">
                    <Check
                      className="size-3.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <FramedImage
            src="/images/musician-earplug-fitting.jpg"
            alt="Audiologist taking an ear impression for custom musician hearing protection"
            className="aspect-wide rounded-2xl"
          />
        </div>

        {/* Who they're for */}
        <div className="mt-20">
          <Eyebrow>Who they're for</Eyebrow>

          <h2 className="max-w-3xl font-display text-title font-bold">
            Hearing protection for people who depend on sound
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-mid">
            Whether you perform professionally, rehearse regularly or spend
            time in loud music environments, we can help you choose hearing
            protection suited to how you listen and perform.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {musicianAudiences.map((card) => {
              const isIemCard = card.title === "In-ear monitors";

              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white text-primary shadow-border">
                    <ServiceIcon name={card.icon} />
                  </span>

                  <h3 className="mt-4 font-bold text-primary-deep">
                    {isIemCard ? "For in-ear monitor users" : card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mid">
                    {isIemCard
                      ? "Accurate ear impressions can be taken for custom in-ear monitors, helping provide the manufacturer with the detailed impression required for an individual fit."
                      : card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Filter levels */}
        <div className="mt-20 rounded-3xl border border-border bg-sky-pale px-6 py-10 md:px-10 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Filtered hearing protection</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Turn the volume down, not the experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
              Musician earplugs use acoustic filters to reduce sound while
              preserving a more natural balance across frequencies. Different
              levels of attenuation can be selected according to your listening
              environment and individual needs.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {filterLevels.map((filter) => (
              <article
                key={filter.level}
                className="rounded-2xl border border-border bg-white p-6 shadow-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="inline-flex min-w-12 items-center justify-center whitespace-nowrap rounded-xl bg-sky-pale px-3 py-3 font-display text-lg font-bold text-primary-deep">
                  {filter.level}
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-primary-deep">
                  {filter.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-mid">
                  {filter.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-white/70 px-5 py-4">
            <Check
              className="mt-0.5 size-5 shrink-0 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />

            <p className="text-sm leading-relaxed text-mid">
              <span className="font-bold text-primary-deep">
                You don't need to choose a filter before your appointment.
              </span>{" "}
              The most appropriate level depends on your sound exposure,
              listening environment and individual needs. We'll discuss the
              options with you.
            </p>
          </div>
        </div>

        {/* Appointment journey */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <Eyebrow>Your appointment</Eyebrow>

            <h2 className="font-display text-title font-bold">
              From ear impression to custom fit
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-mid">
              Custom hearing protection starts with understanding how you use
              your hearing and where you need protection. We'll then take the
              measurements needed for hearing protection made specifically for
              your ears.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {appointmentSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-2xl border border-border bg-bg p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-sky-pale text-primary">
                      <Icon
                        className="size-5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="font-display text-sm font-bold text-primary-light">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-primary-deep">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mid">
                    {step.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Clinical guidance */}
        <div className="mt-16 rounded-2xl border border-border bg-sky-pale px-6 py-8 md:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-border">
              <ShieldCheck
                className="size-6"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <div>
              <h2 className="font-display text-xl font-bold text-primary-deep">
                Hearing protection should suit the way you listen
              </h2>

              <p className="mt-2 max-w-3xl leading-relaxed text-mid">
                The appropriate level of protection isn't necessarily the
                greatest possible attenuation. We'll consider your listening
                environment and how you use sound to help identify an
                appropriate option for you.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary-deep px-6 py-12 text-center text-foam md:px-12">
          <Eyebrow className="text-sky">Protect what matters</Eyebrow>

          <h2 className="font-display text-3xl font-bold text-foam">
            Keep enjoying the sound you love
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            Custom hearing protection starts with an ear impression
            appointment. We'll help you find protection suited to your
            listening, performance and individual needs.
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

export default Musicians;