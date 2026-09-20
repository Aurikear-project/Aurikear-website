import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { qualifications, specialisms, timeline } from "@/lib/practice";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About – Aurikear" },
      {
        name: "description",
        content:
          "Meet Aurikear's HCPC-registered audiologist: First Class BSc and PhD from UCL, 15+ years of paediatric and adult clinical care.",
      },
    ],
  }),
});

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Aurikear"
        title="Meet your audiologist"
        lede="A passion for hearing science, a commitment to compassionate care, and a research career built at University College London."
        image="/images/portrait-lena.jpg"
        imageAlt=""
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <FramedImage
              src="/images/portrait-lena.jpg"
              alt="Aurikear's clinical audiologist"
              className="aspect-portrait rounded-2xl"
            />
            <ul className="mt-5 space-y-2.5">
              {qualifications.map((q) => (
                <li
                  key={q.label}
                  className="rounded-xl border border-border bg-sky-pale px-4 py-3"
                >
                  <p className="text-xs font-bold tracking-wider text-primary-light uppercase">
                    {q.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{q.value}</p>
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <h2 className="font-display text-title font-bold">
              Dedicated to hearing health — from the first days of life
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-mid">
              <p>
                Aurikear was founded on a single principle: that every person
                deserves access to exceptional, evidence-based hearing care
                delivered with genuine compassion. Our audiologist began this
                journey in 2009 after graduating with a First Class BSc in
                Audiology from University College London — one of the world’s
                leading institutions for hearing science.
              </p>
              <p>
                From the very start of her career, she specialised in the full
                spectrum of audiology: diagnosing hearing loss in newborns,
                supporting children through their early developmental years, and
                providing nuanced, life-changing care for adults experiencing
                hearing loss.
              </p>
              <p>
                Driven by a commitment to advancing the field, she returned to
                UCL to complete a PhD, focusing on Cortical Auditory Evoked
                Potentials (CAEPs) — complex brainwave measurements that reveal
                how the auditory cortex processes sound. This published research
                underpins a deeply scientific approach to clinical practice.
              </p>
            </div>

            <ol className="mt-10 space-y-6">
              {timeline.map((item, i) => (
                <li key={item.title} className="relative flex gap-4">
                  {i < timeline.length - 1 ? (
                    <span
                      className="absolute top-10 bottom-[-24px] left-[17px] w-px bg-border"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-fg">
                    {item.mark}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-muted uppercase">
                      {item.year}
                    </p>
                    <h3 className="mt-0.5 font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mid">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Eyebrow className="mt-10">Clinical specialisms</Eyebrow>
            <ul className="mt-3 flex flex-wrap gap-2">
              {specialisms.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-sky-pale px-3.5 py-1.5 text-sm font-semibold text-primary"
                >
                  {s}
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 rounded-2xl border border-border bg-sky-pale p-6">
              <p className="font-display text-lg font-semibold text-primary-deep">
                Philosophy of care
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mid italic">
                “Every patient — whether a one-day-old baby or a 90-year-old —
                deserves to be heard. I combine the rigour of academic research
                with a warm, unhurried clinical approach. No question is too
                small, no concern too minor. My goal is always to give each
                person the clearest possible understanding of their hearing and
                the best possible outcome.”
              </p>
            </blockquote>

            <Button asChild className="mt-8">
              <Link to="/contact">
  Contact us
  <ArrowRight className="size-4" />
</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
