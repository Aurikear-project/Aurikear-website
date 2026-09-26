import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  GraduationCap,
  Microscope,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { practice, services, stats } from "@/lib/practice";

const SITE_URL = "https://www.aurikear.co.uk";

const PAGE_TITLE =
  "Private Audiologist for Adults & Children | Aurikear";

const PAGE_DESCRIPTION =
  "Private audiology for babies, children and adults. HCPC-registered, UCL-trained expertise in hearing assessments, hearing aids and specialist ear protection.";

const HERO_IMAGE =
  "/images/hearing-assessment-clinical-equipment.webp";

const HERO_IMAGE_640 =
  "/images/hearing-assessment-clinical-equipment-640.webp";

const HERO_IMAGE_960 =
  "/images/hearing-assessment-clinical-equipment-960.webp";

export const Route = createFileRoute("/")({
  component: Home,

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
        content: SITE_URL,
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
        href: SITE_URL,
      },

      /*
       * Preload the homepage LCP image.
       *
       * imagesrcset/imagesizes allow the browser to preload
       * the same responsive source that the hero will use.
       */
      {
        rel: "preload",
        as: "image",
        href: HERO_IMAGE_960,
        imageSrcSet: `${HERO_IMAGE_640} 640w, ${HERO_IMAGE_960} 960w, ${HERO_IMAGE} 1600w`,
        imageSizes: "100vw",
        fetchPriority: "high",
      },
    ],
  }),
});

const credentials = [
  {
    icon: BadgeCheck,
    title: "HCPC registered",
  },
  {
    icon: GraduationCap,
    title: "First Class BSc, UCL",
  },
  {
    icon: Microscope,
    title: "PhD, UCL",
  },
  {
    icon: Award,
    title: "15+ years",
  },
];

/*
 * Generate the responsive service-card filenames from
 * the original 800px WebP path.
 */
function getServiceImage400(image: string) {
  return image.replace(/\.webp$/i, "-400.webp");
}

function getServiceImage640(image: string) {
  return image.replace(/\.webp$/i, "-640.webp");
}

function Home() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="HCPC Registered · UCL PhD · 15+ Years' Experience"
        title={practice.headline}
        lede={practice.lede}
        image={HERO_IMAGE_960}
        imageSrcSet={`${HERO_IMAGE_640} 640w, ${HERO_IMAGE_960} 960w, ${HERO_IMAGE} 1600w`}
        imageSizes="100vw"
        imageAlt="Audiology equipment used during a professional hearing assessment"
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      {/* Credibility stats */}
      <div className="border-y border-white/10 bg-primary-deep">
        <div className="mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col items-center px-6 py-8 text-center text-white md:px-8",
                index > 0 ? "md:border-l md:border-white/15" : "",
                index % 2 === 1
                  ? "border-l border-white/15 md:border-l"
                  : "",
                index >= 2
                  ? "border-t border-white/15 md:border-t-0"
                  : "",
              ].join(" ")}
            >
              <span className="font-display text-4xl font-semibold tracking-tight">
                {stat.value}
              </span>

              <span className="mt-1.5 text-xs font-medium uppercase tracking-widest text-white/90">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Service pathways */}
      <Section>
        <div className="text-center">
          <Eyebrow>How can we help?</Eyebrow>

          <h2 className="mt-2 font-display text-title font-semibold">
            Find the right hearing care for you
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            Choose the area most relevant to you, or view all our services if
            you&apos;re not sure where to start.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={service.to}
              className={[
                "group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_16px_48px_rgba(26,122,138,0.12)]",
                "lg:col-span-2",
                service.slug === "paediatric" ? "lg:col-start-2" : "",
              ].join(" ")}
            >
              {service.homeImage && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={getServiceImage400(service.homeImage)}
                    srcSet={[
                      `${getServiceImage400(service.homeImage)} 400w`,
                      `${getServiceImage640(service.homeImage)} 640w`,
                      `${service.homeImage} 800w`,
                    ].join(", ")}
                    sizes="(min-width: 1024px) 368px, (min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)"
                    alt={service.imageAlt}
                    width={800}
                    height={370}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-deep">
                  {service.eyebrow}
                </p>

                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-primary">
                  {service.title}
                </h3>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Explore

                  <ArrowRight
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary-deep transition-colors hover:text-primary"
          >
            View all clinical services

            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      {/* Compact audiologist introduction */}
      <Section tone="off">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Your audiologist</Eyebrow>

            <h2 className="mt-2 max-w-2xl font-display text-title font-semibold">
              Specialist audiology.
              <br />
              Personal care.
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-mid">
              Aurikear is led by an HCPC-registered audiologist with a First
              Class BSc and PhD from University College London and more than 15
              years of clinical experience.
            </p>

            <Link
              to="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-deep transition-colors hover:text-primary"
            >
              Meet your audiologist

              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Credentials */}
          <div className="grid gap-3 sm:grid-cols-2">
            {credentials.map((credential) => {
              const Icon = credential.icon;

              return (
                <div
                  key={credential.title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-border"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-pale text-primary">
                    <Icon
                      className="size-4.5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm font-semibold leading-snug text-primary-deep">
                    {credential.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Insurance */}
      <div className="border-y border-border bg-sky-pale py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-deep">
              Private medical insurance
            </p>

            <h2 className="mt-2 font-display text-xl font-semibold text-ink">
              Using private medical insurance for your hearing care?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-mid">
              Aurikear works with a range of leading health insurers. Cover and
              authorisation requirements can vary, so please check with your
              insurer and the hospital when arranging your appointment.
            </p>

            <Link
              to="/contact"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary-deep transition-colors hover:text-primary"
            >
              View clinic locations

              <ArrowRight
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Insurer logos */}
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {[
              {
                name: "Bupa",
                src: "/images/insurers/bupa.webp",
              },
              {
                name: "AXA Health",
                src: "/images/insurers/axa.webp",
              },
              {
                name: "Vitality",
                src: "/images/insurers/vitality.webp",
              },
              {
                name: "Aviva",
                src: "/images/insurers/aviva.webp",
              },
              {
                name: "Cigna",
                src: "/images/insurers/cigna.webp",
              },
              {
                name: "WPA",
                src: "/images/insurers/wpa.webp",
              },
              {
                name: "Healix",
                src: "/images/insurers/healix.webp",
              },
            ].map((insurer) => (
              <div
                key={insurer.name}
                className="flex h-16 items-center justify-center rounded-xl border border-border bg-white px-4 shadow-border"
              >
                <img
                  src={insurer.src}
                  alt={insurer.name}
                  width={160}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="max-h-8 max-w-full object-contain grayscale opacity-75 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative overflow-hidden bg-primary-deep py-20 text-center text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-2xl px-4">
          <Eyebrow className="text-white">
            Take the first step
          </Eyebrow>

          <h2 className="mt-2 font-display text-title font-semibold !text-white">
            Ready to hear more of what matters?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foam/80">
            Whether you have concerns about your hearing, your child&apos;s
            hearing, or simply want expert advice, we&apos;re here to help.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Arrange an appointment
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}