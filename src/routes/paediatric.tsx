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
      { title: "Paediatric audiology – Aurikear" },
      {
        name: "description",
        content:
          "Specialist hearing assessments for newborns, toddlers, and children — VRA, play audiometry, glue ear monitoring, and newborn follow-up.",
      },
    ],
  }),
});

const expect = [
  "45–60 minutes for a full paediatric assessment",
  "Both parents or carers are always welcome",
  "We’ll start with a detailed developmental history",
  "Child-friendly, calm test room environment",
  "Full written report sent within 3–5 days",
  "Onward referrals arranged swiftly if needed",
];

function Paediatric() {
  return (
    <main>
      <PageHero
        eyebrow="Children's hearing"
        title="Paediatric audiology"
        lede="Specialist hearing assessments for newborns, toddlers, and children — delivered with expertise, patience, and a genuine love of working with young patients."
        image="/images/waiting-room.jpg"
        imageAlt=""
      />
      <Section>
        <div className="rounded-2xl border border-border bg-sky-pale p-6 md:p-8">
          <h2 className="font-display text-xl font-bold text-primary-deep">
            A reassuring note for parents
          </h2>
          <p className="mt-2 max-w-3xl leading-relaxed text-mid">
            Worrying about your child’s hearing is completely understandable,
            and coming for an assessment is the right thing to do. Our clinic is
            a calm, welcoming, child-friendly space. All assessments are
            non-invasive, pain-free, and adapted to your child’s age. We’ll take
            the time to explain every step clearly and answer all your
            questions.
          </p>
        </div>

        <Eyebrow className="mt-12">Assessment by age</Eyebrow>
        <h2 className="font-display text-title font-bold">The right test for every child</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {paediatricAges.map((card) => (
            <article
              key={card.title}
<div
  key={item.title}
  className="rounded-2xl border border-border bg-sky-pale p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
>
              <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-paper text-primary">
                <ServiceIcon name={card.icon} />
              </span>
              <h3 className="mt-4 font-bold text-primary-deep">{card.title}</h3>
              <p className="text-xs font-semibold text-muted">{card.age}</p>
              <p className="mt-3 text-sm leading-relaxed text-mid">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Specialist services</Eyebrow>
            <h2 className="font-display text-3xl font-bold">Glue ear & beyond</h2>
            <p className="mt-3 leading-relaxed text-mid">
              Glue ear (otitis media with effusion) is the most common cause of
              hearing loss in children. Our audiologist has extensive experience
              in its diagnosis, monitoring, and management — working closely
              with ENT specialists where referral is needed.
            </p>
            <p className="mt-3 leading-relaxed text-mid">
              We also provide hearing assessments for children with
              developmental delays, autism spectrum conditions, and other
              complex needs, adapting our methods flexibly to achieve accurate
              results.
            </p>
          </div>
          <div>
            <Eyebrow>What to expect</Eyebrow>
            <h2 className="font-display text-3xl font-bold">Your appointment</h2>
            <ul className="mt-4">
              {expect.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-border py-2.5 text-sm text-mid last:border-0"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-sky-pale px-6 py-12 text-center md:px-10">
          <h2 className="font-display text-2xl font-bold">
            Concerned about your child’s hearing?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-muted">
            Book a paediatric hearing assessment today. Early identification
            makes all the difference.
          </p>
          <Button asChild className="mt-6">
<Link to="/contact">
              Contact us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
