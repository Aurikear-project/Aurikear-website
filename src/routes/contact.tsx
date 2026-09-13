import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact – Aurikear" },
      {
        name: "description",
        content:
          "Visit Aurikear in Islington, London. Call, email, or book a hearing test online. Monday to Saturday.",
      },
    ],
  }),
});

function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Aurikear"
        lede="We’d love to hear from you. Reach out with any questions or to book an appointment."
        image="/images/exterior.jpg"
        imageAlt=""
      />
      <Section tone="off">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <FramedImage
              src="/images/exterior.jpg"
              alt="The Aurikear clinic on a leafy London street"
              className="aspect-wide rounded-2xl"
            />
            <div className="mt-5 rounded-2xl border border-border bg-paper p-6">
              <h2 className="font-bold text-ink">Getting here</h2>
              <p className="mt-2 text-sm leading-relaxed text-mid">
                {practice.addressLines.join(", ")}. A short walk from Highbury
                & Islington station, with street parking nearby. Full
                directions are included with your appointment confirmation.
              </p>
              <a
                href={practice.mapsUrl}
                className="mt-3 inline-block text-sm font-bold text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <ContactRow icon={Phone} title="Phone">
              <a href={practice.phoneHref} className="font-semibold text-primary">
                {practice.phone}
              </a>
              <p>Call to book or ask a question. We aim to answer within one business day.</p>
            </ContactRow>
            <ContactRow icon={Mail} title="Email">
              <a href={practice.emailHref} className="font-semibold text-primary">
                {practice.email}
              </a>
              <p>We’ll respond within one working day.</p>
            </ContactRow>
            <ContactRow icon={Clock} title="Opening hours">
              {practice.hours.map((h) => (
                <p key={h.days}>
                  {h.days}: {h.time}
                </p>
              ))}
            </ContactRow>
            <ContactRow icon={MapPin} title="Clinic address">
              {practice.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </ContactRow>
            <Button asChild className="mt-3 w-full">
              <Link to="/booking">Book an appointment</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-sky-pale p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-fg">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0 text-sm leading-relaxed text-mid">
        <h3 className="font-bold text-primary-deep">{title}</h3>
        <div className="mt-1 space-y-0.5">{children}</div>
      </div>
    </div>
  );
}
