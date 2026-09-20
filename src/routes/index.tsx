import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return (
    <div className="bg-foam/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Welcome to AuriKear
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/80 md:text-xl">
            Research-led audiological care tailored to your needs. Combining
            UCL-trained expertise with state-of-the-art diagnostic technology across leading London clinics.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/services"
              className="rounded-xl bg-sky px-6 py-3 font-semibold text-white shadow-sm hover:bg-sky/90 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-foam/40 bg-white px-6 py-3 font-semibold text-ink hover:bg-foam/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;