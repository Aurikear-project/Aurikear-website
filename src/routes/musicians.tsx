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
        image="/images/musician-earplugs.jpg"
        imageAlt="Custom musician ear plugs"
      />
      <Section>
                <div>
          <Eyebrow>Why custom?</Eyebrow>
          <h2 className="font-display text-title font-bold">
            Flat attenuation. Perfect fit. Uncompromised sound.
          </h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <p className="leading-relaxed text-mid">
              Standard foam earplugs block high frequencies more than low,
              creating a muffled, unnatural sound. Custom musician ear plugs use
              precision acoustic filters that reduce all frequencies equally —
              so music sounds exactly as it should, just quieter and safer.
            </p>
            <p className="leading-relaxed text-mid">
              Made from an impression of your unique ear canal, they fit
              perfectly, stay in place during performance, and can be worn for
              hours in complete comfort.
            </p>
          </div>
          <img
            src="/images/musician-earplugs.jpg"
            alt="Custom musician ear plugs"
            className="mt-8 w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {musicianAudiences.map((card) => (
<article key={card.title} className="rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
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
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
