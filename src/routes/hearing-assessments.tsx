import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.aurikear.co.uk";
const PAGE_URL = `${SITE_URL}/hearing-assessments`;

const PAGE_TITLE =
  "Private Hearing Tests & Adult Hearing Assessments | Aurikear";

const PAGE_DESCRIPTION =
  "Private adult hearing tests and comprehensive hearing assessments with an HCPC-registered audiologist. Clear results, clinical testing and personalised recommendations.";

export const Route = createFileRoute("/hearing-assessments")({
  component: HearingAssessments,

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

const assessmentSteps = [
  {
    number: "01",
    title: "Understanding your hearing",
    body:
      "We begin by discussing your hearing, any changes you have noticed, your medical and hearing history, and the situations in which you find listening difficult.",
  },
  {
    number: "02",
    title: "Clinical examination",
    body:
      "Your ears are examined before testing so that we can identify anything that may affect your hearing or the assessment.",
  },
  {
    number: "03",
    title: "Hearing tests",
    body:
      "Using calibrated audiological equipment, we assess your hearing across different frequencies and use additional tests where clinically appropriate.",
  },
  {
    number: "04",
    title: "Results & next steps",
    body:
      "Your results are explained clearly, with time to ask questions. We then discuss appropriate recommendations and any further care that may be helpful.",
  },
];

const tests = [
  "Pure-tone audiometry using air and bone conduction",
  "Speech audiometry and speech-in-noise testing where appropriate",
  "Tympanometry and acoustic reflex testing where clinically indicated",
  "Clear explanation of your audiogram and hearing results",
  "Written report and recommendations",
  "Onward referral where further medical assessment is appropriate",
];

const reasons = [
  "You have noticed a change in your hearing",
  "Conversations are becoming harder to follow",
  "You find it difficult to hear in background noise",
  "You have been advised to arrange a hearing assessment",
  "You are considering hearing aids or hearing technology",
  "You would simply like a clearer understanding of your hearing",
];

const appointmentDetails = [
  "Approximately 60 minutes",
  "Full diagnostic hearing assessment",
  "Results explained during your appointment",
  "Written report and recommendations",
];

function HearingAssessments() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Adult hearing"
        title="Adult hearing assessments"
        lede="Understand your hearing with a thorough clinical assessment, clear results and guidance on the appropriate next steps."
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        {/* Introduction */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>Your assessment</Eyebrow>

            <h2 className="font-display text-title font-bold">
              More than a hearing test
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              A thorough hearing assessment is the foundation of good hearing
              care. It helps us understand not only whether there is a hearing
              loss, but also the nature of any change and how it may be
              affecting everyday listening.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              Using calibrated audiological equipment in a clinical setting,
              we carry out a detailed evaluation of your hearing and take the
              time to explain what the results mean for you.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              Every assessment is individual. The tests used will depend on
              your hearing concerns, history and clinical findings.
            </p>
          </div>

          <FramedImage
            src="/images/hearing-assessment-clinical-equipment.jpg"
            alt="Audiologist carrying out an adult hearing assessment"
            className="aspect-wide rounded-2xl"
          />
        </div>

        {/* Assessment journey */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <Eyebrow>What to expect</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Your hearing assessment, step by step
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-mid">
              Your appointment is unhurried and tailored to you. We explain
              each stage as we go and make sure you have the opportunity to
              discuss any concerns or questions.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {assessmentSteps.map((step) => (
              <article
                key={step.number}
                className="relative flex gap-5 border-b border-border py-7 first:pt-0 md:first:pt-0 md:[&:nth-child(2)]:pt-0"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg">
                  {step.number}
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-primary-deep">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mid">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Tests and when to book */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>Clinical testing</Eyebrow>

            <h2 className="font-display text-3xl font-bold">
              A detailed picture of your hearing
            </h2>

            <p className="mt-3 leading-relaxed text-mid">
              Your assessment may include a combination of tests selected
              according to your individual needs and clinical findings.
            </p>

            <ul className="mt-5">
              {tests.map((test) => (
                <li
                  key={test}
                  className="flex items-start gap-3 border-b border-border py-3 text-sm text-mid last:border-0"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span>{test}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow>When to arrange an assessment</Eyebrow>

            <h2 className="font-display text-3xl font-bold">
              When should I have my hearing checked?
            </h2>

            <p className="mt-3 leading-relaxed text-mid">
              You do not need to wait until hearing difficulties become
              significant. An assessment can provide reassurance, establish a
              useful baseline or identify changes that may benefit from further
              support.
            </p>

            <ul className="mt-5">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 border-b border-border py-3 text-sm text-mid last:border-0"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="mt-16 rounded-2xl border border-border bg-sky-pale p-8 md:p-12">
          <Eyebrow>Your results</Eyebrow>

          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-start">
            <div>
              <h2 className="font-display text-title font-bold">
                Clear answers. No rushed decisions.
              </h2>

              <p className="mt-4 max-w-2xl leading-relaxed text-mid">
                At the end of your assessment, we will talk through the results
                with you and explain what they mean in everyday terms. You will
                have time to ask questions and understand the options available
                to you.
              </p>

              <p className="mt-3 max-w-2xl leading-relaxed text-mid">
                Depending on the findings, this may simply mean monitoring your
                hearing, discussing hearing technology, or recommending further
                medical assessment where appropriate.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-border">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-light">
                Appointment
              </p>

              <p className="mt-2 font-display text-2xl font-bold text-primary-deep">
                Adult hearing assessment
              </p>

              <ul className="mt-5 space-y-3">
                {appointmentDetails.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm text-mid"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-pale text-primary">
                      <Check
                        className="size-3"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary-deep px-6 py-12 text-center text-foam md:px-12">
          <Eyebrow className="text-sky">Your hearing matters</Eyebrow>

          <h2 className="font-display text-3xl font-bold text-foam">
            Understand your hearing with confidence
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            Arrange an adult hearing assessment and receive a clear,
            evidence-based explanation of your hearing and the next steps
            available to you.
          </p>

          <Button asChild variant="foam" className="mt-7">
            <Link to="/contact">
              Arrange an appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}

export default HearingAssessments;