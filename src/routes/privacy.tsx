import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { practice } from "@/lib/practice";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      {
        title: "Privacy Notice | Aurikear",
      },
      {
        name: "description",
        content:
          "Aurikear's privacy notice explains how personal information may be handled when you use our website, contact us or receive audiology care.",
      },
    ],
  }),
});

function Privacy() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        lede="How personal information may be handled when you use the Aurikear website, contact us or receive audiology care."
      />

      <Section>
        <div className="max-w-3xl space-y-10 leading-relaxed text-mid">
          {/* Introduction */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              About this privacy notice
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                Aurikear provides private audiology services for babies,
                children and adults at hospital and clinic locations.
              </p>

              <p>
                This notice explains how personal information may be handled
                when you use this website, contact Aurikear directly or receive
                audiology care from us.
              </p>

              <p>
                The hospitals and clinics at which appointments take place are
                separate organisations and have their own responsibilities
                under data protection law. Their privacy notices explain how
                they handle information collected through their own booking,
                administration and patient record systems.
              </p>
            </div>
          </section>

          {/* Appointments */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Booking an appointment
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                Aurikear does not currently operate an online patient booking
                system through this website.
              </p>

              <p>
                Appointments are booked directly with the hospital or clinic
                at which you will be seen. Information you provide when making
                or managing an appointment is therefore handled by the
                relevant hospital or clinic in accordance with its own privacy
                notice.
              </p>

              <p>
                Please visit our{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  contact page
                </Link>{" "}
                for information about clinic locations and how to arrange an
                appointment.
              </p>
            </div>
          </section>

          {/* Clinical information */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Information used during your care
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                When providing audiology care, information about you and your
                health may be used where necessary to assess your hearing,
                provide appropriate advice and care, communicate clinical
                findings and maintain appropriate clinical records.
              </p>

              <p>
                This may include information such as your relevant medical and
                hearing history, symptoms, assessment results, clinical
                findings, recommendations and information relating to your
                ongoing care.
              </p>

              <p>
                Where the patient is a baby or child, relevant information
                about a parent, guardian or other person involved in arranging
                or supporting their care may also be used.
              </p>

              <p>
                Clinical information may form part of the records maintained
                by the hospital or clinic at which you are seen. The way those
                records are stored and managed will depend on the arrangements
                at the relevant hospital or clinic.
              </p>
            </div>
          </section>

          {/* Lawful basis */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Why health information is used
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                Data protection law requires personal information to be used
                lawfully, fairly and transparently. The lawful basis that
                applies will depend on the purpose for which information is
                being used.
              </p>

              <p>
                Health information is given additional protection under UK
                data protection law. Where health information is used in
                connection with audiology care, this may include processing
                necessary for medical diagnosis and the provision or
                management of health care by, or under the responsibility of,
                a health professional who is subject to professional
                confidentiality.
              </p>
            </div>
          </section>

          {/* Sharing */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Sharing information
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                Information may be shared where necessary and appropriate for
                your care, for example with the hospital or clinic at which
                you are seen and with other healthcare professionals involved
                in your care.
              </p>

              <p>
                Information may also be disclosed where required or permitted
                by law or where necessary to meet applicable professional,
                regulatory or safeguarding obligations.
              </p>

              <p>
                Aurikear does not sell patient personal information.
              </p>
            </div>
          </section>

          {/* Direct contact */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Contacting Aurikear directly
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                If you contact Aurikear directly by email, telephone or through
                another communication method, we may receive information such
                as your name, contact details and the information contained in
                your enquiry.
              </p>

              <p>
                We will use that information as necessary to respond to your
                enquiry and, where appropriate, direct you to the relevant
                hospital or clinic.
              </p>

              <p>
                Please avoid sending unnecessary sensitive medical information
                by ordinary email.
              </p>
            </div>
          </section>

          {/* Website */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Using this website
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                Aurikear does not currently use this website as a patient
                booking system.
              </p>

              <p>
                Limited technical information may be processed as necessary to
                deliver, maintain and protect the website. This can include
                information routinely processed when a website is accessed,
                such as technical request and security information.
              </p>

              <p>
                If optional analytics, advertising or other technologies that
                require consent are introduced in the future, this privacy
                notice and any relevant cookie information should be updated
                accordingly.
              </p>
            </div>
          </section>

          {/* Retention */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              How long information is kept
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                Personal information should be kept only for as long as it is
                needed for the purpose for which it is being used and in
                accordance with applicable legal, professional and clinical
                record-keeping requirements.
              </p>

              <p>
                Records held by a hospital or clinic are subject to that
                organisation&apos;s own retention arrangements and privacy
                policies.
              </p>
            </div>
          </section>

          {/* Rights */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Your data protection rights
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                Data protection law gives individuals a number of rights in
                relation to their personal information. Depending on the
                circumstances, these can include rights to access personal
                information, correct inaccurate information, restrict certain
                processing, object to certain uses of information or request
                erasure.
              </p>

              <p>
                These rights are not absolute and do not all apply in every
                situation. In particular, healthcare records may sometimes
                need to be retained despite a request for deletion.
              </p>

              <p>
                If your request relates to information held in a hospital or
                clinic&apos;s patient or booking system, you may need to make
                the request directly to that organisation.
              </p>
            </div>
          </section>

          {/* Contact and complaints */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Questions or concerns
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                If you have a question about how Aurikear has handled
                information about you, please contact us at{" "}
                <a
                  href={practice.emailHref}
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {practice.email}
                </a>{" "}
                or call {practice.phone}.
              </p>

              <p>
                You also have the right to raise a concern with the
                Information Commissioner&apos;s Office (ICO), the UK&apos;s
                independent data protection regulator.
              </p>

              <p>
                For questions concerning information held directly by a
                hospital or clinic, you should contact that organisation using
                the details provided in its privacy notice.
              </p>
            </div>
          </section>

          {/* Review date */}
          <section className="border-t border-border pt-6">
            <p className="text-sm">
              <strong className="text-ink">Last reviewed:</strong> September
              2026
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}