import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/accessibility")({
  component: Accessibility,
  head: () => ({
    meta: [
      {
        title: "Accessibility | Aurikear",
      },
      {
        name: "description",
        content:
          "Accessibility information for Aurikear patients and website visitors, including support with communication needs and reasonable adjustments for appointments.",
      },
    ],
  }),
});

function Accessibility() {
  return (
    <main>
      <PageHero
        eyebrow="Accessibility"
        title="Hearing care that works for you"
        lede="We want Aurikear's services and website to be as accessible and straightforward as possible for babies, children, adults and their families."
      />

      <Section>
        <div className="max-w-3xl">
          <div className="space-y-10 leading-relaxed text-mid">
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Accessibility at your appointment
              </h2>

              <div className="mt-4 space-y-4">
                <p>
                  Everyone has different communication and accessibility
                  needs. If there is anything we can do to make your
                  appointment more comfortable or accessible, please let us
                  know when you book.
                </p>

                <p>
                  This may include allowing additional time for communication,
                  explaining information in a different way, or making other
                  reasonable adjustments where possible.
                </p>

                <p>
                  You are welcome to attend your appointment with a family
                  member, friend, carer or other person who supports you.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Babies, children and families
              </h2>

              <div className="mt-4 space-y-4">
                <p>
                  Aurikear provides audiology care for patients of different
                  ages, including babies and children. We aim to explain each
                  stage of an assessment clearly and adapt the appointment to
                  the individual needs of the patient wherever possible.
                </p>

                <p>
                  Parents and carers are encouraged to tell us about any
                  communication, sensory, developmental or practical needs
                  that may help us prepare appropriately for the appointment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Clinic accessibility
              </h2>

              <div className="mt-4 space-y-4">
                <p>
                  Aurikear provides appointments at clinic locations with
                  facilities that may vary between sites. If you require
                  step-free access, wheelchair access, accessible parking or
                  another specific facility, please contact us before your
                  appointment so that we can confirm the arrangements at your
                  chosen location.
                </p>

                <p>
                  You can find information about our clinic locations on the{" "}
                  <Link
                    to="/contact"
                    className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Website accessibility
              </h2>

              <div className="mt-4 space-y-4">
                <p>
                  We aim to make the Aurikear website clear and easy to use
                  across different devices and methods of navigation. We have
                  considered areas such as readable text, colour contrast,
                  keyboard navigation, visible focus indicators and
                  descriptive content.
                </p>

                <p>
                  We continue to review the website as it develops. If you
                  encounter information or a feature that is difficult to
                  access, please tell us so that we can investigate and, where
                  possible, improve it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Tell us what you need
              </h2>

              <div className="mt-4 space-y-4">
                <p>
                  If you have an accessibility requirement, need information
                  in a different format, or would like to discuss adjustments
                  before an appointment, please contact Aurikear.
                </p>

                <p>
                  Email{" "}
                  <a
                    href={practice.emailHref}
                    className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                  >
                    {practice.email}
                  </a>{" "}
                  or visit our{" "}
                  <Link
                    to="/contact"
                    className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}