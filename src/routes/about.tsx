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
        title="Meet your audiologist"
        lede="Specialist hearing care for babies, children and adults, delivered with clinical experience, clear explanations and an individual approach."
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      {/* Clinician profile */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
          {/* Portrait */}
          <div>
            <FramedImage
              src="/images/audiologist-portrait.jpg"
              alt="Dr Kinjal Mehta, Consultant Audiologist"
              className="aspect-portrait rounded-2xl"
            />
          </div>

          {/* Biography */}
          <div>
            <Eyebrow>Your audiologist</Eyebrow>

            <h1 className="font-display text-title font-semibold text-ink">
              Dr Kinjal Mehta
            </h1>

            <p className="mt-2 font-semibold leading-relaxed text-primary-deep">
              BSc (Hons), PhD, RAHD · HCPC Registered Audiologist
            </p>

            <p className="mt-1 text-sm font-semibold text-muted">
              Practising since 2009
            </p>

            <div className="mt-7 max-w-3xl space-y-5 leading-relaxed text-mid">
              <p>
                Dr Kinjal Mehta is a Consultant Audiologist specialising in
                hearing assessment and management for adults, babies and
                children. She practises privately at Nuffield Health The Holly
                and Nuffield Health Brentwood hospitals and is a Paediatric
                Team Lead at Whittington Health NHS Trust.
              </p>

              <p>
                Dr Mehta began her audiology career in 2009 after graduating
                with First Class Honours in Audiology from University College
                London. She subsequently completed a PhD at UCL and has
                developed extensive experience in paediatric and adult
                audiology, including the diagnosis of hearing loss in newborn
                babies and the rehabilitation and ongoing management of
                hearing difficulties.
              </p>

              <p>
                Her paediatric work includes monitoring children with glue ear
                and using age-appropriate assessment techniques including
                visual reinforcement audiometry, play audiometry and
                tympanometry. She also assesses and manages hearing loss in
                adults and children, including hearing aid prescription and
                aural impressions.
              </p>

              <p>
                Her wider clinical interests include custom ear protection and
                in-ear monitors for musicians and shooters, sleep and swim
                plugs, and audiological assessment and special damages
                reporting for medico-legal cases.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy of care */}
      <Section tone="off">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>Approach to care</Eyebrow>

          <h2 className="max-w-3xl font-display text-title font-semibold text-ink">
            Specialist expertise with a personal approach
          </h2>

          <div className="mt-6 space-y-5 leading-relaxed text-mid">
            <p>
              Hearing care is about more than completing a test. Dr Mehta aims
              to understand the individual behind the results, explain
              findings clearly and help each patient and family understand the
              options available to them.
            </p>

            <p>
              Her clinical approach combines extensive experience in adult and
              paediatric audiology with an academic background in hearing
              science. Assessments and recommendations are tailored to the
              patient&apos;s age, hearing needs and individual circumstances.
            </p>

            <p>
              Parents and carers are encouraged to ask questions throughout a
              child&apos;s assessment, while adult patients are given the time
              and information needed to make informed decisions about their
              hearing care.
            </p>
          </div>
        </div>
      </Section>

      {/* Explore services */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Clinical services</Eyebrow>

          <h2 className="font-display text-title font-semibold text-ink">
            Explore Aurikear&apos;s hearing care
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mid">
            Find out more about hearing assessments, children&apos;s audiology,
            hearing aids and specialist ear protection.
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
            Explore our clinic locations and arrange an audiology appointment
            at the hospital most appropriate for your needs.
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