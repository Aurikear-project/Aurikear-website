import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.aurikear.co.uk";
const PAGE_URL = `${SITE_URL}/about`;

const PAGE_TITLE =
  "Dr Kinjal Mehta | Consultant Audiologist | Aurikear";

const PAGE_DESCRIPTION =
  "Meet Dr Kinjal Mehta, Consultant Audiologist and HCPC Registered Audiologist providing specialist hearing care for babies, children and adults.";

export const Route = createFileRoute("/about")({
  component: About,

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
        content: PAGE_URL,
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
        href: PAGE_URL,
      },
    ],
  }),
});

function About() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="About Aurikear"
        title="Hello, I'm Kinjal"
        lede="I'm an audiologist for babies, children and adults. My appointments are unhurried, my explanations are clear, and I treat you, or your child, as a person and not a set of results."
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      {/* Approach to care, then portrait */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
          <FramedImage
            src="/images/audiologist-portrait.jpg"
            alt="Dr Kinjal Mehta, Consultant Audiologist"
            className="aspect-portrait rounded-t-full rounded-b-2xl"
          />

          <div>
            <Eyebrow>How I care for my patients</Eyebrow>

            <h2 className="font-display text-title font-semibold text-ink">
              Time to listen, and answers you can understand
            </h2>

            <p className="mt-2 font-semibold leading-relaxed text-primary-deep">
              Dr Kinjal Mehta · BSc (Hons), PhD, RAHD · HCPC Registered Audiologist
            </p>

            <div className="mt-7 max-w-3xl space-y-5 leading-relaxed text-mid">
              <p>
                Hearing care is about more than completing a test. I want to
                understand the person behind the results, explain what I find in
                plain language, and help you and your family feel confident about
                the options.
              </p>

              <p>
                If you&apos;re a parent, please ask me anything, at any point. I
                know an appointment about your child&apos;s hearing can feel
                worrying, so I&apos;ll always tell you what I&apos;m doing and
                what I&apos;m finding as we go. With little ones I use play and
                gentle games, so it feels like fun and not a test.
              </p>

              <p>
                If you&apos;re an adult, you&apos;ll have the time and
                information you need to make decisions at your own pace. Nothing
                is rushed, and there&apos;s no pressure.
              </p>
              {/* TODO: optional anonymised example, e.g. a child who was nervous at first but ended up enjoying the games. */}
            </div>
          </div>
        </div>
      </Section>

      {/* Background */}
      <Section tone="off">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>My background</Eyebrow>

          <h2 className="max-w-3xl font-display text-title font-semibold text-ink">
            Specialist experience, built over fifteen years
          </h2>

          <div className="mt-6 space-y-5 leading-relaxed text-mid">
            <p>
              I began my career in 2009 after graduating with First Class Honours
              in Audiology from University College London, and went on to
              complete a PhD at UCL. Since then I&apos;ve diagnosed hearing loss
              in newborn babies and supported people through rehabilitation and
              long-term hearing care.
            </p>

            <p>
              I&apos;m a Paediatric Team Lead at Whittington Health NHS Trust,
              and I see private patients at Nuffield Health The Holly and Nuffield
              Health Brentwood hospitals.
            </p>

            <p>
              My work with children includes monitoring glue ear and using
              age-appropriate assessments such as visual reinforcement
              audiometry, play audiometry and tympanometry. For adults and
              children I also prescribe hearing aids and take ear impressions.
            </p>

            <p>
              I have particular interests in custom ear protection and in-ear
              monitors for musicians and shooters, sleep and swim plugs, and
              audiological assessments and special damages reports for
              medico-legal cases.
            </p>
          </div>
        </div>
      </Section>

      {/* Explore services */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Clinical services</Eyebrow>

          <h2 className="font-display text-title font-semibold text-ink">
            Where would you like to start?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            Read about the care I offer for adults, children, hearing aids and
            specialist ear protection.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/hearing-assessments"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
            >
              Adult hearing assessments
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>

            <Link
              to="/paediatric"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
            >
              Children&apos;s hearing
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>

            <Link
              to="/hearing-aids"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
            >
              Hearing aids
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>

            <Link
              to="/musicians"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
            >
              Musician earplugs
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>

            <Link
              to="/swim-moulds"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-sky-pale"
            >
              Custom swim moulds
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <div className="relative overflow-hidden bg-primary-deep py-20 text-center text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-2xl px-5">
          <Eyebrow className="text-white">Take the first step</Eyebrow>

          <h2 className="font-display text-title font-semibold !text-white">
            Ready to talk about your hearing?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foam/80">
            Find the clinic that suits you best and arrange an appointment, or send
            me a message first.
          </p>

          <Button asChild variant="foam" size="lg" className="mt-8">
            <Link to="/contact">
              View clinics &amp; appointments
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default About;