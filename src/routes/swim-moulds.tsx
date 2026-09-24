import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/swim-moulds")({
  component: SwimMoulds,
  head: () => ({
    meta: [
      { title: "Swim Moulds – Aurikear" },
      {
        name: "description",
        content:
          "Custom-fit waterproof swim moulds to prevent water ingress. Ideal for regular swimmers, post-surgery patients, and children with grommets.",
      },
    ],
  }),
});

function SwimMoulds() {
  return (
    <main>
      <PageHero
        eyebrow="Water protection"
        title="Custom swim moulds"
        lede="Precision-fit waterproof ear protection for swimmers of all ages — keeping water out so you can focus on your stroke."
        image="/images/swim-moulds.jpg"
        imageAlt="Custom swim moulds ear protection"
      />

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>Why custom?</Eyebrow>
            <h2 className="font-display text-title font-bold">
              A perfect seal. Every time.
            </h2>
            <p className="mt-4 leading-relaxed text-mid">
              Generic foam or silicone plugs can never match the precise
              contours of your individual ear canal. Custom swim moulds are
              made directly from an impression of your ear, creating a
              watertight seal that stays in place even during vigorous swimming.
            </p>
            <p className="mt-3 leading-relaxed text-mid">
              Made from soft, hypoallergenic silicone, they are comfortable to
              wear for extended periods and available in a range of colours.
              They float if dropped in the water, making them easy to retrieve.
            </p>
          </div>
          <FramedImage
            src="/images/swim-moulds.jpg"
            alt="Custom swim moulds ear protection"
            className="aspect-wide rounded-2xl"
          />
        </div>

        {/* Who they're for */}
        <div className="mt-16">
          <Eyebrow>Who they're for</Eyebrow>
          <h2 className="font-display text-title font-bold">
            Suitable for all ages and needs
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🏊",
                title: "Regular swimmers",
                body: "Prevent repeated water exposure that can lead to swimmer's ear and long-term ear canal irritation.",
              },
              {
                icon: "👶",
                title: "Children with grommets",
                body: "Essential protection for children with grommets or ventilation tubes, preventing water from reaching the middle ear.",
              },
              {
                icon: "🏥",
                title: "Post-surgery patients",
                body: "Protect healing ears following ear surgery, allowing a return to swimming during recovery.",
              },
              {
                icon: "🌊",
                title: "Water sports",
                body: "Ideal for surfers, triathletes, open-water swimmers, and anyone spending extended time in water.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-bold text-primary-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mid">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 rounded-2xl bg-sky-pale border border-border p-8 md:p-12">
          <Eyebrow>Features</Eyebrow>
          <h2 className="font-display text-title font-bold">
            What makes our swim moulds different
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Precision ear impressions for a perfect, watertight fit",
              "Soft, hypoallergenic medical-grade silicone",
              "Floats in water — easy to find if dropped",
              "Available in a wide range of colours",
              "Suitable for children and adults of all ages",
              "Long-lasting and easy to clean",
              "Much more effective than generic plugs",
              "Quick appointment — impressions take under 15 minutes",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-xl bg-white border border-border p-4 shadow-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              >
                <span className="mt-0.5 text-primary font-bold">✓</span>
                <span className="text-sm text-mid leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-primary-deep px-6 py-12 text-center text-white md:px-12">
          <h2 className="font-display text-3xl font-bold">
            Ready to protect your ears in the water?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            Ear impressions take under 15 minutes. Get in touch to arrange
            your swim mould appointment.
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