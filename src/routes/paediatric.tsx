import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
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
          "Specialist hearing assessments for babies, toddlers and children, including VRA, play audiometry, tympanometry and glue ear monitoring.",
      },
    ],
  }),
});

const expect = [
  "A calm, child-friendly appointment at your child's pace",
  "Time to discuss your concerns and your child's hearing history",
  "Age-appropriate hearing tests selected for your child",
  "Clear explanation of the results and what they mean",
  "Time to ask questions and discuss next steps",
  "Onward referral or monitoring arranged where appropriate",
];

function Paediatric() {
  return (
    <main>
      <PageHero
        eyebrow="Children's hearing"
        title="Paediatric audiology"
        lede="Specialist hearing assessments for babies, toddlers and children — delivered with expertise, patience and a child-centred approach."
        image="/images/paediatric-hearing-assessment.jpg"
        imageAlt="Paediatric hearing assessment in a calm, child-friendly setting"
      />

      <Section>
        {/* Reassurance for parents */}
        <div className="rounded-2xl border border-border bg-sky-pale p-6 md:p-8">
          <Eyebrow>For parents & carers</Eyebrow>

          <h2 className="mt-2 font-display text-2xl font-bold text-primary-deep">
            A calm and reassuring experience
          </h2>

          <p className="mt-3 max-w-3xl leading-relaxed text-mid">
            If you have concerns about your child's hearing, an assessment can
            help you understand what they are hearing and whether any further
            support is needed. We provide a calm, welcoming environment and
            adapt each appointment to your child's age, development and
            individual needs.
          </p>

          <p className="mt-3 max-w-3xl leading-relaxed text-mid">
            Hearing assessments are non-invasive and designed to be as
            comfortable and engaging as possible. We'll explain what we're
            doing throughout the appointment and give you plenty of opportunity
            to ask questions.
          </p>
        </div>

        {/* Assessment by age */}
        <div className="mt-16">
          <Eyebrow>Assessment by age</Eyebrow>

          <h2 className="font-display text-title font-bold">
            The right test for every child
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-mid">
            Children's hearing is assessed differently depending on their age
            and developmental stage. We select the most appropriate techniques
            for your child and adapt the assessment around their responses.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {paediatricAges.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-sky-pale p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-paper text-primary">
                  <ServiceIcon name={card.icon} />
                </span>

                <h3 className="mt-4 font-bold text-primary-deep">
                  {card.title}
                </h3>

                <p className="text-xs font-semibold text-muted">
                  {card.age}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-mid">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Specialist care */}
        <div className="mt-20 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>Specialist services</Eyebrow>

            <h2 className="font-display text-3xl font-bold">
              Specialist children's hearing care
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              Children's hearing can change as they grow, and difficulties are
              not always obvious. We provide age-appropriate hearing assessments
              for a wide range of concerns, from routine hearing checks to
              ongoing monitoring.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              This includes assessment and monitoring of glue ear (otitis media
              with effusion), one of the most common causes of temporary hearing
              loss in childhood.
            </p>

            <p className="mt-3 leading-relaxed text-mid">
              We also work with children who may need a more flexible approach
              to testing, adapting the appointment and assessment techniques to
              the individual child wherever possible.
            </p>
          </div>

          {/* Appointment */}
          <div>
            <Eyebrow>What to expect</Eyebrow>

            <h2 className="font-display text-3xl font-bold">
              Your child's appointment
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              Every appointment is shaped around your child. We'll take time to
              understand your concerns before selecting the most appropriate
              tests for their age and developmental stage.
            </p>

            <ul className="mt-5">
              {expect.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-3 text-sm text-mid last:border-0"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-primary-deep px-6 py-12 text-center text-white md:px-12 md:py-14">
          <Eyebrow className="text-foam/70">We're here to help</Eyebrow>

          <h2 className="mt-2 font-display text-3xl font-bold text-white">
            Concerned about your child's hearing?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foam/80">
            Whether you've noticed a change, received a referral or simply want
            reassurance, we're here to help you understand your child's hearing.
          </p>

          <Button asChild variant="foam" className="mt-7">
            <Link to="/contact">
              Book a children's hearing assessment
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}