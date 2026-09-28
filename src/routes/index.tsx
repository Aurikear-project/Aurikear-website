import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { practice, services } from "@/lib/practice";

const SITE_URL = "https://www.aurikear.co.uk";

const PAGE_TITLE =
  "Private Audiologist for Adults & Children | Aurikear";

const PAGE_DESCRIPTION =
  "Private audiology for babies, children and adults. Specialist hearing assessments, hearing aids and custom ear protection.";

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

/*
 * Generate responsive service-card filenames from
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

      {/* Service pathways */}
      <Section>
        <div className="text-center">
          <Eyebrow>Where would you like to start?</Eyebrow>

          <h2 className="mt-2 font-display text-title font-semibold">
            Whatever is on your mind, we can start there
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            Choose whatever sounds closest to what you&apos;re worried about. If
            you&apos;re not sure, <Link to="/contact" className="font-semibold text-primary-deep underline underline-offset-4">send me a message</Link> and we&apos;ll work it out together.
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

      {/* Audiologist introduction */}
      <Section tone="off">
        <div className="grid items-center gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <FramedImage
            src="/images/audiologist-portrait.jpg"
            alt="Dr Kinjal Mehta, Consultant Audiologist"
            className="aspect-portrait max-w-xs rounded-t-full rounded-b-2xl"
          />

          <div className="max-w-2xl">
            <Eyebrow>A little about me</Eyebrow>

            <h2 className="mt-2 font-display text-title font-semibold text-ink">
              Hello, I&apos;m Kinjal
            </h2>

            {/* TODO: add one or two sentences in Dr Mehta's own words about why she became an audiologist. */}
            <p className="mt-5 leading-relaxed text-mid">
              I&apos;m a Consultant Audiologist and I&apos;ve cared for newborn
              babies, nervous children and adults of every age since 2009, in
              both NHS and private hospital practice. What stays with me is how
              much better an appointment goes when people feel unhurried and
              understood.
            </p>

            <p className="mt-4 leading-relaxed text-mid">
              So I explain what I&apos;m doing and what I find as we go, and I
              make sure you leave knowing your options.
            </p>

            <p className="mt-4 text-sm font-semibold text-primary-deep">
              Dr Kinjal Mehta · BSc (Hons), PhD, RAHD · HCPC Registered Audiologist
            </p>

            <Link
              to="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-deep transition-colors hover:text-primary"
            >
              Read more about my approach
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
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
              I work with a range of leading health insurers. Cover and authorisation
              requirements vary, so please check with your insurer and the
              hospital when booking. If you&apos;re unsure what your policy
              covers, get in touch and I&apos;ll help you work it out.
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
            Not sure whether you need an appointment?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foam/80">
            Send me your questions. There&apos;s no such thing as a silly one, and
            I&apos;m always happy to talk it through.
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