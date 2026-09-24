import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/hearing-aids")({
  component: HearingAids,
  head: () => ({
    meta: [
      { title: "Hearing Aids – Aurikear" },
      {
        name: "description",
        content:
          "Independent hearing aid fitting and aftercare. Access to all leading brands, real-ear measurement, and ongoing support.",
      },
    ],
  }),
});

function HearingAids() {
  return (
    <main>
      <PageHero
        eyebrow="Amplification"
        title="Hearing aids"
        lede="Independent, unbiased advice on the most suitable hearing aid technology for your degree of hearing loss, lifestyle, and budget."
        image="/images/hearing-aid.jpg"
        imageAlt="A modern receiver-in-canal hearing aid"
      />

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>Why choose Aurikear?</Eyebrow>
            <h2 className="font-display text-title font-bold">
              Independent advice. Every leading brand.
            </h2>
            <p className="mt-4 leading-relaxed text-mid">
              Unlike high-street chains tied to a single manufacturer, Aurikear
              is entirely independent. That means we recommend the hearing aid
              that is genuinely right for you — not the one that earns the
              highest commission.
            </p>
            <p className="mt-3 leading-relaxed text-mid">
              We use real-ear measurement to verify every fitting, ensuring your
              hearing aids are precisely calibrated to your individual ear canal
              and audiogram. Every fitting is followed by structured aftercare
              to ensure you get the very best from your devices.
            </p>
          </div>
          <FramedImage
            src="/images/hearing-aid.jpg"
            alt="A modern receiver-in-canal hearing aid held in a patient's hand"
            className="aspect-wide rounded-2xl"
          />
        </div>

        {/* What's included */}
        <div className="mt-16">
          <Eyebrow>What's included</Eyebrow>
          <h2 className="font-display text-title font-bold">
            A complete hearing aid service
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Comprehensive assessment",
                body: "A full diagnostic hearing evaluation before any recommendation is made, ensuring the right solution for your specific hearing profile.",
              },
              {
                title: "Independent brand selection",
                body: "Access to all leading hearing aid manufacturers including Phonak, Oticon, Starkey, Signia, Widex, and ReSound.",
              },
              {
                title: "Custom ear moulds",
                body: "Where appropriate, bespoke ear moulds are made for a precise, comfortable fit that maximises sound quality.",
              },
              {
                title: "Real-ear measurement",
                body: "Every fitting is verified with real-ear measurement — the gold standard in hearing aid verification — ensuring accurate amplification.",
              },
              {
                title: "Structured aftercare",
                body: "Follow-up appointments to fine-tune your devices as your hearing adapts, with ongoing support whenever you need it.",
              },
              {
                title: "Ongoing maintenance",
                body: "Regular cleaning, checks, and adjustments to keep your hearing aids performing at their best for years to come.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="font-bold text-primary-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mid">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Technology levels */}
        <div className="mt-16 rounded-2xl bg-sky-pale border border-border p-8 md:p-12">
          <Eyebrow>Technology levels</Eyebrow>
          <h2 className="font-display text-title font-bold">
            From essential to premium
          </h2>
          <p className="mt-4 leading-relaxed text-mid max-w-2xl">
            Modern hearing aids are available across a range of technology
            levels to suit different listening needs and budgets. We'll guide
            you through the options and help you choose the level that matches
            your lifestyle.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                level: "Essential",
                desc: "Clear hearing in quiet environments and one-to-one conversations. Ideal for a quieter lifestyle.",
              },
              {
                level: "Advanced",
                desc: "Improved performance in background noise, restaurants, and group settings. Most popular choice.",
              },
              {
                level: "Premium",
                desc: "Outstanding clarity in all environments, including busy public spaces, music, and TV streaming.",
              },
            ].map((t) => (
              <div
                key={t.level}
                className="rounded-xl bg-white border border-border p-5 shadow-border"
              >
                <p className="font-display text-lg font-semibold text-primary-deep">
                  {t.level}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mid">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-primary-deep px-6 py-12 text-center text-white md:px-12">
          <h2 className="font-display text-3xl font-bold">
            Ready to explore your hearing aid options?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            Get in touch to arrange a comprehensive hearing assessment and
            independent hearing aid consultation.
          </p>
          <Button asChild variant="foam" className="mt-7">
            <Link to="/contact">
              Contact us <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}