import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { ServiceIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { paediatricAges } from "@/lib/practice";

export const Route = createFileRoute("/paediatric")({
  component: Paediatric,
  head: () => ({
    meta: [
      { title: "Paediatric Audiology & Children's Hearing – Aurikear" },
      {
        name: "description",
        content:
          "Specialist paediatric hearing assessments for children from 8 months onwards, including visual reinforcement audiometry, play audiometry, glue ear monitoring and assessments for children with complex needs.",
      },
    ],
  }),
});

const appointmentSteps = [
  {
    number: "01",
    title: "Understand your concerns",
    body:
      "We'll take time to discuss your concerns, your child's hearing history and anything you may have noticed at home, nursery or school.",
  },
  {
    number: "02",
    title: "Choose the right assessment",
    body:
      "We'll select age-appropriate hearing tests based on your child's developmental stage and adapt the appointment around their individual needs.",
  },
  {
    number: "03",
    title: "Assess their hearing",
    body:
      "Your child will take part in appropriate, non-invasive hearing tests delivered at their pace and designed to be as comfortable and engaging as possible.",
  },
  {
    number: "04",
    title: "Explain the results",
    body:
      "We'll talk you through the results clearly, explain what they mean for your child's hearing and give you plenty of opportunity to ask questions.",
  },
  {
    number: "05",
    title: "Agree the next steps",
    body:
      "Where appropriate, we'll discuss monitoring, further assessment or onward referral and explain what happens next.",
  },
];

function Paediatric() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Children's hearing"
        title="Paediatric audiology"
        lede="Specialist hearing assessments for children from 8 months onwards — delivered with expertise, patience and a child-centred approach."
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
            <Eyebrow>For parents &amp; carers</Eyebrow>

            <h2 className="font-display text-title font-bold">
              A calm and reassuring experience
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              If you have concerns about your child's hearing, an assessment
              can help you understand what they are hearing and whether any
              further support is needed.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              We provide a calm, welcoming environment and adapt each
              appointment to your child's age, development and individual
              needs. Hearing assessments are non-invasive and designed to be as
              comfortable and engaging as possible.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              We'll explain what we're doing throughout the appointment and
              give you plenty of opportunity to ask questions.
            </p>
          </div>

          <FramedImage
            src="/images/paediatric-hearing-assessment.jpg"
            alt="Child taking part in a specialist hearing assessment"
            className="aspect-wide rounded-2xl"
          />
        </div>

        {/* Assessment by age */}
        <div className="mt-16">
          <Eyebrow>Assessment by age</Eyebrow>

          <h2 className="font-display text-title font-bold">
            The right test for every child
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-mid">
            Children's hearing is assessed differently depending on their age
            and developmental stage. We select the most appropriate techniques
            for your child and adapt the assessment around their responses.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {paediatricAges.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-sky-pale p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white text-primary shadow-border">
                  <ServiceIcon name={item.icon} />
                </span>

                <h3 className="mt-4 font-bold text-primary-deep">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary-light">
                  {item.age}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-mid">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Specialist care */}
        <div className="mt-16">
          <div className="max-w-3xl">
            <Eyebrow>Specialist services</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Specialist children's hearing care
            </h2>

            <div className="mt-4 space-y-3 leading-relaxed text-mid">
              <p>
                Children's hearing can change as they grow, and difficulties
                are not always obvious. We provide age-appropriate hearing
                assessments for a wide range of concerns, from routine hearing
                checks to ongoing monitoring.
              </p>

              <p>
                This includes assessment and monitoring of glue ear (otitis
                media with effusion), one of the most common causes of
                temporary hearing loss in childhood.
              </p>

              <p>
                We also work with children who may need a more flexible
                approach to testing, adapting the appointment and assessment
                techniques to the individual child wherever possible.
              </p>
            </div>
          </div>
        </div>

        {/* Appointment journey */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <Eyebrow>What to expect</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Your child's appointment
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-mid">
              Every appointment is shaped around your child. We'll take time to
              understand your concerns before selecting the most appropriate
              tests for their age and developmental stage.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {appointmentSteps.map((step) => (
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

        {/* Clinic availability */}
        <div className="mt-16 rounded-2xl border border-border bg-sky-pale px-6 py-9 md:px-10 md:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Clinic availability</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Where children's appointments are available
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-mid">
              The hospital location for your child's assessment depends on
              their age and individual needs.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {/* 8 months to 4 years */}
            <div className="rounded-xl border border-border bg-white p-5 shadow-border">
              <span className="flex size-10 items-center justify-center rounded-xl bg-sky-pale text-primary">
                <MapPin
                  className="size-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary-light">
                8 months to 4 years
              </p>

              <h3 className="mt-2 font-display text-lg font-bold text-primary-deep">
                Spire London East Hospital
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-mid">
                Paediatric hearing assessments are available for children aged
                8 months to 4 years.
              </p>
            </div>

            {/* 4 years and over */}
            <div className="rounded-xl border border-border bg-white p-5 shadow-border">
              <span className="flex size-10 items-center justify-center rounded-xl bg-sky-pale text-primary">
                <MapPin
                  className="size-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary-light">
                4 years and over
              </p>

              <h3 className="mt-2 font-display text-lg font-bold text-primary-deep">
                Four hospital locations
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-mid">
                Children's hearing assessments are available at Nuffield
                Health Brentwood Hospital, Nuffield Health The Holly Hospital,
                Spire Cambridge Lea Hospital and Spire Hartswood Hospital.
              </p>
            </div>

            {/* Complex needs */}
            <div className="rounded-xl border border-border bg-white p-5 shadow-border">
              <span className="flex size-10 items-center justify-center rounded-xl bg-sky-pale text-primary">
                <MapPin
                  className="size-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary-light">
                Complex needs
              </p>

              <h3 className="mt-2 font-display text-lg font-bold text-primary-deep">
                Spire London East Hospital
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-mid">
                Hearing assessments are also available for children with
                complex needs.
              </p>
            </div>
          </div>

          {/* Clinic locations button */}
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="mt-8 rounded-full bg-white px-6 text-primary-deep shadow-border hover:bg-white/80"
            >
              <Link to="/contact">
                View clinic locations
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-2xl bg-primary-deep px-6 py-12 text-center text-foam md:px-12">
          <Eyebrow className="text-sky">We're here to help</Eyebrow>

          <h2 className="font-display text-3xl font-bold text-foam">
            Concerned about your child's hearing?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-foam/80">
            Whether you've noticed a change, received a referral or simply want
            reassurance, we're here to help you understand your child's
            hearing.
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

export default Paediatric;