import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

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
      { title: "Musician ear plugs – Aurikear" },
      {
        name: "description",
        content:
          "Custom musician ear plugs with flat attenuation. Precision filters in 9, 15, and 25 dB. Impressions in under 15 minutes.",
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

function Musicians() {
  return (
    <main>
      {/* Clean service hero */}
      <PageHero
        eyebrow="Hearing protection"
        title="Custom musician ear plugs"
        lede="Your hearing is your instrument. Protect it without compromising a single note."
      />

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
              unnatural. Custom musician ear plugs use precision acoustic
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

          {/* Consultation image */}
          <FramedImage
            src="/images/musician-earplug-fitting.jpg"
            alt="Audiologist fitting custom hearing protection for a musician"
            className="aspect-wide rounded-2xl"
          />
        </div>

        {/* Who they're for */}
        <div className="mt-16">
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
            {musicianAudiences.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-white text-primary shadow-border">
                  <ServiceIcon name={card.icon} />
                </span>

                <h3 className="mt-4 font-bold text-primary-deep">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-mid">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary-deep px-6 py-12 text-center text-foam md:px-12">
          <Eyebrow className="text-sky">
            Protect what matters
          </Eyebrow>

          <h2 className="font-display text-3xl font-bold text-foam">
            Keep enjoying the sound you love
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            Custom ear protection starts with a quick ear impression
            appointment. We’ll help you find the right protection for your
            listening and performance needs.
          </p>

          <Button asChild variant="foam" className="mt-7">
            <Link to="/contact">
              Arrange an appointment
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}