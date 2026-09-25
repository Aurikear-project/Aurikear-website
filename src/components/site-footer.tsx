import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { practice, services } from "@/lib/practice";
import { Logo } from "./logo";

const footerPages = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Contact", to: "/contact" as const },
];

const hospitalClinics = [
  {
    name: "Nuffield Health Brentwood Hospital",
    phone: "01277 695695",
    phoneHref: "tel:01277695695",
    mapUrl:
      "https://maps.google.com/?q=Nuffield+Health+Brentwood+Hospital",
  },
  {
    name: "Nuffield Health The Holly Hospital",
    phone: "020 8505 3311",
    phoneHref: "tel:02085053311",
    mapUrl:
      "https://maps.google.com/?q=Nuffield+Health+The+Holly+Hospital",
  },
  {
    name: "Spire Cambridge Lea Hospital",
    phone: "01223 266900",
    phoneHref: "tel:01223266900",
    mapUrl:
      "https://maps.google.com/?q=Spire+Cambridge+Lea+Hospital",
  },
  {
    name: "Spire Hartswood Hospital",
    phone: "01277 232525",
    phoneHref: "tel:01277232525",
    mapUrl:
      "https://maps.google.com/?q=Spire+Hartswood+Hospital",
  },
  {
    name: "Spire London East Hospital",
    phone: "020 8551 1100",
    phoneHref: "tel:02085511100",
    mapUrl:
      "https://maps.google.com/?q=Spire+London+East+Hospital",
  },
];

const serviceLabels: Record<string, string> = {
  assessments: "Adult hearing assessments",
  paediatric: "Paediatric audiology",
  "hearing-aids": "Hearing aids",
  "musician-plugs": "Musician earplugs",
  "swim-moulds": "Swim moulds",
};

export function SiteFooter() {
  return (
    <footer className="bg-ink text-foam/65">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 md:px-8">
        <div className="grid gap-10 border-b border-foam/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_1fr_1.6fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Logo inverted />

            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Research-led audiology combining UCL-trained clinical expertise
              with warm, personalised care.
            </p>

            <a
              href="mailto:aurikear@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foam/80 transition-colors hover:text-sky"
            >
              <Mail
                className="size-4 shrink-0"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              aurikear@gmail.com
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-4 text-sm font-bold text-foam">Explore</p>

            <ul className="space-y-2.5">
              {footerPages.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foam/55 transition-colors hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-sm font-bold text-foam">Services</p>

            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.to}
                    className="text-sm text-foam/55 transition-colors hover:text-sky"
                  >
                    {serviceLabels[service.slug] ?? service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospital clinics */}
          <div>
            <p className="mb-4 text-sm font-bold text-foam">
              Hospital clinics
            </p>

            <ul className="space-y-4">
              {hospitalClinics.map((clinic) => (
                <li key={clinic.name}>
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 text-xs font-medium leading-relaxed text-foam/80 transition-colors hover:text-sky"
                  >
                    <MapPin
                      className="mt-0.5 size-3.5 shrink-0 text-sky/70 transition-colors group-hover:text-sky"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <span>{clinic.name}</span>
                  </a>

                  <a
                    href={clinic.phoneHref}
                    className="mt-1 flex items-center gap-2 pl-[22px] text-xs text-foam/55 transition-colors hover:text-sky"
                  >
                    <Phone
                      className="size-3"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    {clinic.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col gap-3 py-5 text-xs md:flex-row md:items-center md:justify-between">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Aurikear. All rights reserved.{" "}
            {practice.registration}. Registration number: HAD 02867.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="transition-colors hover:text-sky"
            >
              Privacy
            </Link>

            <Link
              to="/accessibility"
              className="transition-colors hover:text-sky"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}