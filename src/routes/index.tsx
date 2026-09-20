import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Microscope, Star } from "lucide-react";
import { FramedImage } from "@/components/framed-image";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/icons";
import {
  jsonLd,
  practice,
  qualifications,
  services,
  stats,
  testimonials,
} from "@/lib/practice";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden bg-primary-deep text-foam">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-foam/25 bg-foam/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-foam uppercase">
              <span className="size-1.5 rounded-full bg-sky" />
              UCL PhD · HCPC registered audiologist
            </p>
            <h1 className="font-display text-display font-bold text-foam">
              Expert hearing care
              <br />
              you can <em className="not-italic text-sky">trust</em>
            </h1>
            <p className="mt-5 max-w-lg text-lede leading-relaxed text-foam/80">
              {practice.lede}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="foam" size="lg">
                <Link to="/booking">Book a hearing test</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View services
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FramedImage
              src="/images/exterior.jpg"
              alt="The front exterior of the Aurikear clinic and garden"
              className="col-span-2 aspect-photo rounded-2xl"
              priority
            />
            {stats.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-foam/20 bg-foam/10 px-4 py-4 backdrop-blur-sm"
              >
                <p className="font-display text-3xl font-bold leading-none text-foam">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-foam/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section tone="off">
        <div className="text-center">
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="font-display text-title font-bold">
            Comprehensive audiology services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            From routine hearing assessments to specialist paediatric care and
            custom ear protection.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={service.to}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-paper p-7 shadow-border transition-[transform,box-shadow] duration-200 ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-lift"
            >
                <span className="flex size-20 items-center justify-center rounded-2xl bg-sky-pale text-primary">
                <ServiceIcon name={service.icon} className="size-8" />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Learn more
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-fg transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="teal" className="py-12 md:py-14">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {stats.map((item) => (
            <div key={item.label} className="min-w-28 text-center">
              <p className="font-display text-4xl font-bold text-foam">{item.value}</p>
              <p className="mt-1 text-sm text-foam/75">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative">
            <FramedImage
              src="/images/portrait-lena.jpg"
              alt="Aurikear's clinical audiologist"
              className="aspect-portrait rounded-2xl"
            />
            <div className="absolute -right-3 -bottom-4 rounded-2xl bg-primary-deep px-5 py-4 text-foam shadow-lift md:-right-6">
              <p className="font-display text-2xl leading-none font-bold">PhD</p>
              <p className="mt-1 text-xs text-foam/80">UCL auditory research</p>
            </div>
          </div>
          <div>
            <Eyebrow>Meet your audiologist</Eyebrow>
            <h2 className="font-display text-title font-bold">
              Research-led expertise, compassionate care
            </h2>
            <p className="mt-4 leading-relaxed text-mid">
              With a First Class BSc from UCL (2009) and a completed PhD focusing
              on Cortical Auditory Evoked Potentials, our audiologist combines
              published academic research with deep clinical experience across
              all ages — from newborn hearing screens to adult amplification.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {qualifications.slice(0, 4).map((q) => (
                <div
                  key={q.label}
                  className="flex items-start gap-3 rounded-xl bg-sky-pale p-3.5"
                >
                  {q.label.includes("Research") ? (
                    <Microscope className="mt-0.5 size-4 shrink-0 text-primary" />
                  ) : (
                    <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
                  )}
                  <p className="text-sm font-semibold leading-snug text-mid">{q.value}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8">
              <Link to="/about">
                Full biography
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="off">
        <div className="text-center">
          <Eyebrow>Patient stories</Eyebrow>
          <h2 className="font-display text-title font-bold">
            Trusted by families & professionals
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border bg-paper p-7 shadow-border"
            >
              <div className="flex gap-0.5 text-primary-light" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-mid">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-sky text-sm font-bold text-primary-deep">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="teal" className="text-center">
        <Eyebrow className="text-sky">Take the first step</Eyebrow>
        <h2 className="font-display text-title font-bold text-foam">
          Ready to improve your hearing?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-foam/80">
          A hearing test is quick, painless, and could make a profound
          difference. Book yours today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="foam" size="lg">
            <Link to="/booking">Book a hearing test</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
