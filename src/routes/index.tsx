import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  practice,
  services,
  stats,
  testimonials,
} from "@/lib/practice";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aurikear – Hear for Good" },
      {
        name: "description",
        content:
          "Research-led independent audiology for newborns, children, and adults. HCPC registered. UCL-trained with 15+ years' clinical experience.",
      },
    ],
  }),
});

function Home() {
  return (
    <main>
      <PageHero
        eyebrow="HCPC Registered · UCL PhD · 15+ Years' Experience"
        title={practice.headline}
        lede={practice.lede}
        image="/images/diagnostic.jpg"
        imageAlt="Audiologist conducting a hearing assessment"
      />

      {/* Stats band */}
      <div className="border-y border-border bg-primary">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center divide-x divide-white/20">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center px-8 py-6 text-white">
              <span className="font-display text-4xl font-bold">{s.value}</span>
              <span className="mt-1 text-xs opacity-75">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="text-center">
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="font-display text-title font-bold mt-2">
            Comprehensive audiology services
          </h2>
          <p className="mt-3 text-mid max-w-xl mx-auto">
            From routine hearing assessments to specialist paediatric care
            and custom ear protection — all under one roof.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              to={svc.to}
              className="group rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
            >
              <h3 className="font-bold text-ink group-hover:text-primary transition">
                {svc.title}
              </h3>
              <p className="mt-2 text-sm text-mid leading-relaxed">
                {svc.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                Learn more <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Insurance band */}
      <div className="border-y border-border bg-sky-pale py-8">
        <div className="mx-auto max-w-5xl px-4">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-muted">
            Accepted insurance providers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: "Bupa",       src: "/images/insurers/bupa.png" },
              { name: "AXA Health", src: "/images/insurers/axa.png" },
              { name: "Vitality",   src: "/images/insurers/vitality.png" },
              { name: "Aviva",      src: "/images/insurers/aviva.png" },
              { name: "Cigna",      src: "/images/insurers/cigna.png" },
              { name: "WPA",        src: "/images/insurers/wpa.png" },
              { name: "Healix",     src: "/images/insurers/healix.png" },
            ].map((ins) => (
              <img
                key={ins.name}
                src={ins.src}
                alt={ins.name}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
      {/* About strip */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Eyebrow>Meet your audiologist</Eyebrow>
            <h2 className="font-display text-title font-bold mt-2">
              Research-led expertise, compassionate care
            </h2>
            <p className="mt-4 leading-relaxed text-mid">
              With a First Class BSc and PhD from UCL, our audiologist brings
              over 15 years of clinical excellence to every patient — from
              newborn hearing screens through to adult amplification and
              hearing protection.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: "🎓", text: "First Class BSc & PhD, UCL" },
                { icon: "👶", text: "Newborn, child & adult care" },
                { icon: "🔬", text: "Published research — CAEPs" },
                { icon: "✅", text: "HCPC registered audiologist" },
              ].map((q) => (
                <li
                  key={q.text}
                  className="flex items-start gap-2.5 rounded-xl bg-sky-pale border border-border p-3.5"
                >
                  <span className="text-lg">{q.icon}</span>
                  <span className="text-sm font-semibold text-mid">{q.text}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/about">
                Full biography <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-2xl bg-sky-pale border border-border aspect-[4/5] flex items-center justify-center text-8xl">
            🩺
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-sky-pale">
        <div className="text-center">
          <Eyebrow>Patient stories</Eyebrow>
          <h2 className="font-display text-title font-bold mt-2">
            Trusted by families &amp; professionals
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <div className="text-amber-400 tracking-widest text-sm mb-3">★★★★★</div>
              <p className="text-sm leading-relaxed text-mid">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <div className="bg-primary py-16 text-center text-white">
        <div className="mx-auto max-w-xl px-4">
          <Eyebrow className="text-white/70">Take the first step</Eyebrow>
          <h2 className="font-display text-title font-bold mt-2">
            Ready to improve your hearing?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Contact us <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}