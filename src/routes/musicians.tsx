import { createFileRoute, Link } from "@tanstack/react-router";
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

function Musicians() {
  return (
    <main>
      <PageHero
        eyebrow="Hearing protection"
        title="Custom musician ear plugs"
        lede="Your hearing is your instrument. Protect it without compromising a single note."
        image="/images/lifestyle.jpg"
        imageAlt=""
      />
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>Why custom?</Eyebrow>
            <h2 className="font-display text-title font-bold">
              Flat attenuation. Perfect fit. Uncompromised sound.
            </h2>
            <p className="mt-4 leading-relaxed text-mid">
              Standard foam earplugs block high frequencies more than low,
              creating a muffled, unnatural sound. Custom musician ear plugs use
              precision acoustic filters that reduce all frequencies equally —
              so music sounds exactly as it should, just quieter and safer.
            </p>
            <p className="mt-3 leading-relaxed text-mid">
              Made from an impression of your unique ear canal, they fit
              perfectly, stay in place during performance, and can be worn for
              hours in complete comfort.
            </p>
          </div>
          <FramedImage
            src="/images/hearing-aid.jpg"
            alt="A precision hearing device held in the palm of a hand"
            className="aspect-wide rounded-2xl bg-ink"
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {musicianAudiences.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-border bg-bg p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-sky-pale text-primary">
                <ServiceIcon name={card.icon} />
              </span>
              <h3 className="mt-4 font-bold text-primary-deep">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-primary-deep px-6 py-12 text-center text-foam md:px-12">
          <h2 className="font-display text-3xl font-bold text-foam">
            Noise-induced hearing loss is permanent.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            One appointment is all it takes to protect the hearing you’ll rely
            on for the rest of your life. Ear impressions take under 15 minutes.
          </p>
          <Button asChild variant="foam" className="mt-7">
            <Link to="/booking">Book ear impressions</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
