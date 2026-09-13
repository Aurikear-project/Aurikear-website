import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/accessibility")({
  component: Accessibility,
  head: () => ({
    meta: [{ title: "Accessibility – Aurikear" }],
  }),
});

function Accessibility() {
  return (
    <main>
      <PageHero
        eyebrow="The clinic"
        title="Accessibility"
        lede="Hearing care should be reachable. Here is how we try to make visits and this website easier to use."
      />
      <Section>
        <div className="max-w-2xl space-y-4 leading-relaxed text-mid">
          <p>
            The Compton Terrace clinic has a level entrance, a ground-floor
            waiting room, and a ground-floor test suite. If you use a
            wheelchair, please mention it when you book so we can allow extra
            time between appointments.
          </p>
          <p>
            We can provide written reports in large print, and we will always
            explain results in the room — not only on paper. A loop is
            available at reception. Bring a companion if you would like someone
            with you during testing.
          </p>
          <p>
            This website is written in HTML with labelled form fields, visible
            focus, and skip-to-content. If something is hard to use, email{" "}
            <a href={practice.emailHref} className="font-semibold text-primary">
              {practice.email}
            </a>{" "}
            or <Link to="/contact" className="font-semibold text-primary">contact us</Link>.
          </p>
        </div>
      </Section>
    </main>
  );
}
