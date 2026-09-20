import { Link } from "@tanstack/react-router";
import { navLinks, practice, services } from "@/lib/practice";
import { Logo } from "./logo";

const hospitalClinics = [
  {
    name: "Nuffield Health Brentwood Hospital",
    phone: "01277 695695",
    mapUrl: "https://maps.google.com/?q=Nuffield+Health+Brentwood+Hospital",
  },
  {
    name: "Nuffield Health The Holly Hospital",
    phone: "020 8505 3311",
    mapUrl: "https://maps.google.com/?q=Nuffield+Health+The+Holly+Hospital",
  },
  {
    name: "Spire Cambridge Lea Hospital",
    phone: "01223 266900",
    mapUrl: "https://maps.google.com/?q=Spire+Cambridge+Lea+Hospital",
  },
  {
    name: "Spire Hartswood Hospital",
    phone: "01277 232525",
    mapUrl: "https://maps.google.com/?q=Spire+Hartswood+Hospital",
  },
  {
    name: "Spire London East Hospital",
    phone: "020 8551 1100",
    mapUrl: "https://maps.google.com/?q=Spire+London+East+Hospital",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-foam/65">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 md:px-8">
        <div className="grid gap-10 border-b border-foam/10 pb-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Research-led audiology combining UCL-trained clinical expertise with warm, personalised care.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold text-foam">Pages</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
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
          <div>
            <p className="mb-3 text-sm font-bold text-foam">Services</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.to}
                    className="text-sm text-foam/55 transition-colors hover:text-sky"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold text-foam">Hospital Clinics</p>
            <ul className="space-y-2 text-sm">
              {hospitalClinics.map((loc) => (
                <li key={loc.name} className="text-xs">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foam/80 font-medium block hover:text-sky transition-colors"
                  >
                    {loc.name}
                  </a>
                  <span className="text-foam/55">{loc.phone}</span>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="mailto:aurikear@gmail.com"
                  className="hover:text-sky text-sm text-foam/80 transition-colors"
                >
                  aurikear@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-5 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Aurikear. All rights reserved.{" "}
            {practice.registration}.
          </p>
          <p className="flex gap-3">
            <Link to="/privacy" className="hover:text-sky">
              Privacy
            </Link>
            <Link to="/accessibility" className="hover:text-sky">
              Accessibility
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}