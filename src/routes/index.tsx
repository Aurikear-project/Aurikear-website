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
      <div className="border-y border-white/10 bg-primary-deep">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center divide-x divide-white/15">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center px-10 py-8 text-white"
            >
              <span className="font-display text-4xl font-bold tracking-tight">
                {s.value}
              </span>
              <span className="mt-1.5 text-xs font-medium opacity-60 uppercase tracking-widest">
                {s.label}
              </span>
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
          <p className="mt-4 text-mid max-w-xl mx-auto leading-relaxed">
            From routine hearing assessments to specialist paediatric care
            and custom ear protection — all under one roof.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              to={svc.to}
              className="group flex flex-col rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(26,122,138,0.12)] hover:border-primary/25"
            >
              {svc.image && (
                <div className="overflow-hidden h-44">
                  <img
                    src={svc.image}
                    alt={svc.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-primary-light mb-2">
                  {svc.eyebrow}
                </p>
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-primary transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-mid leading-relaxed flex-1">
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

      {/* Insurance band */}
      <div className="border-y border-border bg-sky-pale py-10">
        <div className="mx-auto max-w-5xl px-4">
          <p className="mb-7 text-center text-xs font-bold uppercase tracking-[0.16em] text-muted">
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
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* About strip */}
      <Section tone="off">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <Eyebrow>Meet your audiologist</Eyebrow>
            <h2 className="font-display text-title font-bold mt-2">
              Research-led expertise,<br />compassionate care
            </h2>
            <p className="mt-5 leading-relaxed text-mid text-base">
              With a First Class BSc and PhD from UCL, our audiologist brings
              over 15 years of clinical excellence to every patient — from
              newborn hearing screens through to adult amplification and
              hearing protection.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-3">
              {[
                { icon: "🎓", text: "First Class BSc & PhD, UCL" },
                { icon: "👶", text: "Newborn, child & adult care" },
                { icon: "🔬", text: "Published research — CAEPs" },
                { icon: "✅", text: "HCPC registered audiologist" },
              ].map((q) => (
                <li
                  key={q.text}
                  className="flex items-start gap-3 rounded-xl bg-white border border-border p-4 shadow-border"
                >
                  <span className="text-xl leading-none mt-0.5">{q.icon}</span>
                  <span className="text-sm font-semibold text-mid leading-snug">
                    {q.text}
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-9">
              <Link to="/about">
                Full biography <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-sky-pale to-sky border border-border aspect-[4/5] flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-4">🩺</div>
                <p className="text-sm font-semibold text-primary-deep opacity-60">
                  Aurikear Audiology
                </p>
              </div>
            </div>
            {/* Credential badge */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-primary-deep text-white px-5 py-4 shadow-lift">
              <p className="font-display text-2xl font-bold leading-none">PhD</p>
              <p className="text-xs opacity-75 mt-1">UCL Auditory Research</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center">
          <Eyebrow>Patient stories</Eyebrow>
          <h2 className="font-display text-title font-bold mt-2">
            Trusted by families &amp; professionals
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-border bg-white p-7 shadow-border transition-all duration-300 hover:shadow-lift hover:-translate-y-1"
            >
              {/* Large quote mark */}
              <span className="absolute top-5 right-6 font-display text-6xl text-sky leading-none select-none">
                "
              </span>
              <div className="text-amber-400 tracking-widest text-sm mb-4">
                ★★★★★
              </div>
              <p className="text-sm leading-relaxed text-mid relative z-10">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-border">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <div className="relative overflow-hidden bg-primary-deep py-20 text-center text-white">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-xl px-4">
          <Eyebrow className="text-sky/80">Take the first step</Eyebrow>
          <h2 className="font-display text-title font-bold mt-2">
            Ready to improve your hearing?
          </h2>
          <p className="mt-4 text-foam/70 leading-relaxed">
            A hearing assessment could make a profound difference to your daily life.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
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