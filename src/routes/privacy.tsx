import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [{ title: "Privacy – Aurikear" }],
  }),
});

function Privacy() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lede="How Aurikear handles the personal information you share with the clinic."
      />
      <Section>
        <div className="max-w-2xl space-y-4 leading-relaxed text-mid">
          <p>
            Aurikear is the data controller for information you submit through
            this website. Clinical records are held under UK GDPR and the Data
            Protection Act 2018, and are used only to provide audiology care,
            communicate about appointments, and meet legal and professional
            obligations.
          </p>
          <p>
            Appointment requests collected on this site include your name,
            contact details, and the reason for your visit. We do not sell
            personal data, and we do not use it for marketing without a clear
            opt-in.
          </p>
          <p>
            You may ask to see, correct, or delete information we hold, or raise
            a concern with the ICO. Write to {practice.email} or call{" "}
            {practice.phone}.
          </p>
        </div>
      </Section>
    </main>
  );
}
