import { Link } from "@tanstack/react-router";
import { navLinks, practice, services } from "@/lib/practice";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-foam/65">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 md:px-8">
        <div className="grid gap-10 border-b border-foam/10 pb-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Research-led audiology for all ages, from newborn to adult.
              Combining UCL-trained clinical expertise with warm, personalised
              care.
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
            <p className="mb-3 text-sm font-bold text-foam">Contact</p>
            <ul className="space-y-2 text-sm">
              {practice.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                <a href={practice.phoneHref} className="hover:text-sky">
                  {practice.phone}
                </a>
              </li>
              <li>
                <a href={practice.emailHref} className="hover:text-sky">
                  {practice.email}
                </a>
              </li>
              <li>
                <Link to="/booking" className="hover:text-sky">
                  Book an appointment
                </Link>
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
