import { createFileRoute } from "@tanstack/react-router";
import { Clock, Lock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/booking")({
  component: Booking,
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    if (typeof search.service === "string" && search.service.length > 0) {
      return { service: search.service };
    }
    return {};
  },
  head: () => ({
    meta: [
      { title: "Book an appointment – Aurikear" },
      {
        name: "description",
        content:
          "Request a hearing test, paediatric assessment, or custom ear protection appointment with Aurikear in London.",
      },
    ],
  }),
});

function Booking() {
  const { service } = Route.useSearch();
  return (
    <main>
      <PageHero
        eyebrow="Get started"
        title="Book an appointment"
        lede="Fill in the form below and we’ll confirm your appointment within one working day."
        image="/images/clinic-exterior.jpg"
        imageAlt="The front exterior of the Aurikear clinic"
      />
      <Section tone="off">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
          <BookingForm defaultService={service} />
          <aside className="space-y-4">
            <InfoCard icon={MapPin} title="Location">
              {practice.addressLines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </InfoCard>
            <InfoCard icon={Clock} title="Opening hours">
              {practice.hours.map((h) => (
                <p key={h.days}>
                  {h.days}: {h.time}
                </p>
              ))}
            </InfoCard>
            <InfoCard icon={Phone} title="Prefer to call?">
              <p>
                <a href={practice.phoneHref} className="font-semibold text-primary">
                  {practice.phone}
                </a>
              </p>
              <p>
                <a href={practice.emailHref} className="font-semibold text-primary">
                  {practice.email}
                </a>
              </p>
            </InfoCard>
            <InfoCard icon={Lock} title="Confidentiality" tone="pale">
              <p>
                All information is treated with full clinical confidentiality in
                accordance with UK GDPR and the Data Protection Act 2018.
              </p>
            </InfoCard>
            <InfoCard icon={Mail} title="After you send">
              <p>
                This preview stores your request on this device so you can see
                the confirmation. On the live clinic site it would go to the
                practice inbox.
              </p>
            </InfoCard>
          </aside>
        </div>
      </Section>
    </main>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
  tone = "paper",
}: {
  icon: typeof Phone;
  title: string;
  children: ReactNode;
  tone?: "paper" | "pale";
}) {
  return (
    <div
      className={
        tone === "pale"
          ? "rounded-2xl border border-border bg-sky-pale p-5"
          : "rounded-2xl border border-border bg-paper p-5"
      }
    >
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-primary-deep">
        <Icon className="size-4" />
        {title}
      </h2>
      <div className="space-y-1 text-sm text-mid">{children}</div>
    </div>
  );
}
