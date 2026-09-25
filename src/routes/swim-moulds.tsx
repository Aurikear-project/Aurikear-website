import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  Check,
  HeartPulse,
  PersonStanding,
  ShieldCheck,
  Waves,
} from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.aurikear.co.uk";
const PAGE_URL = `${SITE_URL}/swim-moulds`;

const PAGE_TITLE =
  "Custom Swim Moulds & Swimming Earplugs | Aurikear";

const PAGE_DESCRIPTION =
  "Custom swim moulds and swimming earplugs for children and adults, professionally fitted from precise ear impressions to help protect the ears from water.";

export const Route = createFileRoute("/swim-moulds")({
  component: SwimMoulds,

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

const suitableFor = [
  {
    icon: PersonStanding,
    title: "Regular swimmers",
    body:
      "Custom swim moulds can help reduce repeated water exposure and provide comfortable ear protection for regular swimming.",
  },
  {
    icon: Baby,
    title: "Children with grommets",
    body:
      "Custom swim moulds can provide additional water protection for children with grommets or ventilation tubes where water precautions have been recommended.",
  },
  {
    icon: HeartPulse,
    title: "Post-surgery patients",
    body:
      "Where water protection has been recommended following ear surgery, custom swim moulds can help protect the ear during recovery.",
  },
  {
    icon: Waves,
    title: "Water sports",
    body:
      "A practical option for surfers, triathletes, open-water swimmers and others who spend extended periods in the water.",
  },
];

const features = [
  "Precise ear impressions for an individually made fit",
  "Soft, hypoallergenic medical-grade silicone",
  "Designed to help reduce water entering the ear",
  "Floats in water — easy to find if dropped",
  "Available in a wide range of colours",
  "Suitable for children and adults",
  "Long-lasting and easy to clean",
  "Quick and straightforward ear impression appointment",
];

const appointmentSteps = [
  {
    number: "01",
    title: "Discuss your needs",
    body:
      "We'll talk about who the moulds are for, how they'll be used and any relevant ear history or water protection needs.",
  },
  {
    number: "02",
    title: "Check your ears",
    body:
      "Your ears are examined before impressions are taken to make sure it is appropriate to proceed.",
  },
  {
    number: "03",
    title: "Ear impressions",
    body:
      "Detailed impressions are taken so your swim moulds can be individually manufactured to fit your ears.",
  },
  {
    number: "04",
    title: "Your custom moulds",
    body:
      "Your finished swim moulds are supplied with guidance on fitting, removal, cleaning and care.",
  },
];

function SwimMoulds() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Water protection"
        title="Custom swim moulds"
        lede="Individually made ear protection for swimmers of all ages — designed for a comfortable, secure fit and to help keep water out."
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        {/* Why custom? */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>Why custom?</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Made to fit. Designed to keep water out.
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              Unlike generic swimming earplugs, custom swim moulds are
              individually made from an impression of your ear. Your ear
              impressions are taken professionally by an experienced
              audiologist, allowing your moulds to be made for a comfortable
              and secure fit.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              Made from soft, hypoallergenic silicone, swim moulds are designed
              to help reduce water entering the ear while swimming. They are
              comfortable to wear, available in a range of colours and float if
              dropped in the water, making them easier to retrieve.
            </p>
          </div>

          <FramedImage
            src="/images/swimmer-wearing-swim-moulds.jpg"
            alt="Swimmer wearing custom swimming earplugs and swim moulds"
            className="aspect-wide rounded-2xl"
          />
        </div>

        {/* Who they're for */}
        <div className="mt-16">
          <Eyebrow>Who they&apos;re for</Eyebrow>

          <h2 className="font-display text-title font-bold">
            Swimming ear protection for children and adults
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-mid">
            Custom swim moulds can be useful for a range of swimming and water
            protection needs, from regular swimming to situations where
            additional ear protection has been recommended.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {suitableFor.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white text-primary shadow-border">
                    <Icon
                      className="size-5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-4 font-bold text-primary-deep">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mid">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 rounded-2xl border border-border bg-sky-pale p-8 md:p-12">
          <Eyebrow>Features</Eyebrow>

          <h2 className="font-display text-title font-bold">
            What makes our custom swim moulds different
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-sky-pale text-primary">
                  <Check
                    className="size-4"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span className="text-sm leading-relaxed text-mid">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Appointment journey */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <Eyebrow>Your appointment</Eyebrow>

            <h2 className="font-display text-title font-bold">
              From ear impressions to custom fit
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-mid">
              Custom swim moulds start with understanding how you plan to use
              them. We&apos;ll then take the impressions needed for moulds made
              specifically for your ears.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {appointmentSteps.map((step) => (
              <article
                key={step.number}
                className="relative flex gap-5 border-b border-border py-7 first:pt-0 md:first:pt-0 md:[&:nth-child(2)]:pt-0"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg">
                  {step.number}
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-primary-deep">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mid">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-border bg-sky-pale px-6 py-5 md:px-8">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-border">
            <ShieldCheck
              className="size-5"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </span>

          <div>
            <h3 className="font-bold text-primary-deep">
              Made around your individual ears
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-mid">
              Because each mould is made from your own ear impressions, the fit
              is individual to you. We&apos;ll also explain how to insert,
              remove and care for your swim moulds.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-primary-deep px-6 py-12 text-center text-white md:px-12">
          <Eyebrow className="text-sky">Custom ear protection</Eyebrow>

          <h2 className="font-display text-3xl font-bold">
            Ready for custom swim moulds?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            Ear impressions are quick and straightforward. Arrange an
            appointment and we&apos;ll take the impressions needed for your
            individually made swim moulds.
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

export default SwimMoulds;