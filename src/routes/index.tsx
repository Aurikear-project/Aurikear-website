import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-foam/20 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky uppercase">
              UCL-Trained Audiological Care
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Expert Hearing & Care Specialist in London
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink/70">
              AuriKear delivers specialized paediatric audiology, diagnostic hearing assessments, and custom musician ear protection across premier London private hospitals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="rounded-xl bg-sky px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky/90 transition-all"
              >
                Our Clinical Services
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-foam/40 bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-sm hover:bg-foam/20 transition-all"
              >
                Contact Preferred Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Highlight Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-2xl bg-foam/10 p-8 border border-foam/20">
              <h3 className="text-xl font-bold text-ink">Paediatric Audiology</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                Comprehensive hearing assessments tailored specifically for infants and children in a gentle environment.
              </p>
              <Link to="/paediatric" className="mt-4 inline-block text-xs font-semibold text-sky hover:underline">
                Learn more &rarr;
              </Link>
            </div>

            <div className="rounded-2xl bg-foam/10 p-8 border border-foam/20">
              <h3 className="text-xl font-bold text-ink">Musician Ear Plugs</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                Custom-molded attenuation hearing protection designed for performers, sound engineers, and music lovers.
              </p>
              <Link to="/musicians" className="mt-4 inline-block text-xs font-semibold text-sky hover:underline">
                Learn more &rarr;
              </Link>
            </div>

            <div className="rounded-2xl bg-foam/10 p-8 border border-foam/20">
              <h3 className="text-xl font-bold text-ink">Hospital Clinics</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                Consultations available directly at leading private London clinics including Great Ormond Street and private suites.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-xs font-semibold text-sky hover:underline">
                View clinic details &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;