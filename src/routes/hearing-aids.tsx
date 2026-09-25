import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AudioLines,
  BatteryCharging,
  Bluetooth,
  Check,
  Ear,
  HeartHandshake,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/hearing-aids")({
  component: HearingAids,
  head: () => ({
    meta: [
      { title: "Hearing Aids – Aurikear" },
      {
        name: "description",
        content:
          "Personalised hearing aid fitting from Aurikear. Explore advanced Oticon and Phonak hearing aids with expert fitting, real-ear measurement and ongoing aftercare.",
      },
    ],
  }),
});

const hearingAidTypes = [
  {
    icon: Ear,
    title: "Receiver-in-the-ear",
    short: "RITE / RIC",
    body:
      "Small and discreet, with the main hearing aid sitting behind the ear and a fine wire connecting to a receiver in the ear. A popular combination of comfort, discretion and advanced technology.",
  },
  {
    icon: ShieldCheck,
    title: "Behind-the-ear",
    short: "BTE",
    body:
      "Reliable and versatile hearing aids suitable for a wide range of hearing losses, including people who require more powerful amplification.",
  },
  {
    icon: Sparkles,
    title: "Custom in-the-ear",
    short: "ITE / ITC / CIC",
    body:
      "Individually made to fit your ear. Different sizes and styles are available depending on your hearing, dexterity, features and cosmetic preferences.",
  },
  {
    icon: BatteryCharging,
    title: "Rechargeable",
    short: "Simple everyday charging",
    body:
      "Convenient rechargeable technology allows many hearing aids to be charged overnight, reducing the need to handle and replace small batteries.",
  },
  {
    icon: RefreshCw,
    title: "CROS solutions",
    short: "For single-sided hearing loss",
    body:
      "For people whose hearing cannot be aided in one ear, CROS technology can transmit sound from that side to the better-hearing ear.",
  },
  {
    icon: Bluetooth,
    title: "Connected hearing",
    short: "Calls, music & more",
    body:
      "Many modern hearing aids offer wireless connectivity for compatible phones and other devices, helping hearing technology fit naturally into everyday life.",
  },
];

const hearingAidJourney = [
  {
    number: "01",
    title: "Hearing assessment",
    body:
      "We begin with a comprehensive diagnostic hearing assessment to understand your hearing and identify where you may be experiencing difficulty.",
  },
  {
    number: "02",
    title: "Discuss your needs",
    body:
      "We take time to understand your lifestyle, listening environments, priorities, dexterity, cosmetic preferences, connectivity needs and budget.",
  },
  {
    number: "03",
    title: "Choose your technology",
    body:
      "We'll explain the hearing aid styles and technology that may be appropriate for you, helping you make an informed choice without expecting you to choose from a catalogue.",
  },
  {
    number: "04",
    title: "Professional fitting",
    body:
      "Your hearing aids are fitted and programmed around your hearing. Where appropriate, custom ear moulds can be made for a secure, comfortable and acoustically suitable fit.",
  },
  {
    number: "05",
    title: "Real-ear verification",
    body:
      "Where clinically appropriate, real-ear measurement can be used to assess the sound delivered in your individual ear and help verify your fitting.",
  },
  {
    number: "06",
    title: "Ongoing aftercare",
    body:
      "Follow-up appointments, fine-tuning, advice, cleaning and ongoing adjustments help you adapt to your hearing aids and keep them working effectively.",
  },
];

const techLevels = [
  {
    level: "Essential",
    desc:
      "Designed for people whose listening needs are generally centred around quieter environments and everyday conversation.",
  },
  {
    level: "Advanced",
    desc:
      "Additional support for people who regularly encounter group conversations, restaurants and more varied listening environments.",
  },
  {
    level: "Premium",
    desc:
      "The manufacturers' most advanced technology for people seeking maximum support across complex and changing listening environments.",
  },
];

function HearingAids() {
  return (
    <main>
      {/* HERO */}
      <PageHero
        eyebrow="Hearing technology"
        title="Hear more of what matters"
        lede="Modern hearing technology, carefully selected and professionally fitted around your hearing, lifestyle and individual needs."
      >
        <Button asChild variant="foam" className="mt-7">
          <Link to="/contact">
            Arrange an appointment
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        {/* INTRODUCTION */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Personalised hearing care</Eyebrow>

          <h2 className="font-display text-title font-bold">
            Hearing aids designed around you
          </h2>

          <p className="mt-5 leading-relaxed text-mid">
            No two people experience hearing loss in exactly the same way. Your
            hearing aids should reflect not only your hearing, but also your
            lifestyle, preferences and the situations in which you want to hear
            better.
          </p>

          <p className="mt-4 leading-relaxed text-mid">
            At Aurikear, we work with advanced hearing technology from Oticon
            and Phonak. Following a comprehensive hearing assessment, we'll
            explain the options that are most appropriate for you and help you
            make an informed choice.
          </p>
        </div>

        {/* HEARING AID STYLES */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <Eyebrow>Styles &amp; solutions</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Find the style that suits you
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              Hearing aids come in different shapes, sizes and configurations.
              The right option depends on your hearing as well as how you want
              your hearing aids to fit into everyday life.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hearingAidTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-sky-pale text-primary-deep">
                    <Icon
                      className="size-5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary-light">
                    {item.short}
                  </p>

                  <h3 className="mt-1 font-display text-xl font-bold text-primary-deep">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-mid">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* MANUFACTURERS */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our hearing technology</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Leading hearing technology
            </h2>

            <p className="mt-4 leading-relaxed text-mid">
              We work with Oticon and Phonak, giving you access to a broad range
              of modern hearing solutions for different hearing and lifestyle
              needs.
            </p>
          </div>

          {/* OTICON */}
          <div className="mt-12 grid items-center gap-10 rounded-3xl border border-border bg-sky-pale/50 p-7 md:grid-cols-2 md:gap-14 md:p-12">
            <div>
              <Eyebrow>Oticon</Eyebrow>

              <h3 className="font-display text-3xl font-bold text-primary-deep">
                Hear the sounds around you
              </h3>

              <p className="mt-4 leading-relaxed text-mid">
                Aurikear works with Oticon hearing technology, including
                discreet receiver-in-the-ear devices, custom hearing aids and
                behind-the-ear solutions.
              </p>

              <p className="mt-3 leading-relaxed text-mid">
                Rather than choosing a device based on specifications alone,
                we'll help you understand which Oticon technology and style may
                be appropriate for your hearing, listening needs and
                preferences.
              </p>

              <a
                href="https://www.oticon.co.uk/products/hearing-aids"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 font-semibold text-primary-deep hover:underline"
              >
                Explore Oticon hearing aids
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

            <FramedImage
              src="/images/hearing-aid-consultation-female.jpg"
              alt="Aurikear audiologist discussing hearing aid options with a patient"
              className="aspect-wide rounded-2xl"
            />
          </div>

          {/* PHONAK */}
          <div className="mt-8 grid items-center gap-10 rounded-3xl border border-border bg-bg p-7 md:grid-cols-2 md:gap-14 md:p-12">
            <FramedImage
              src="/images/hearing-aid-consultation-male.jpg"
              alt="Audiologist discussing hearing aid options with a patient"
              className="aspect-wide rounded-2xl md:order-1"
            />

            <div className="md:order-2">
              <Eyebrow>Phonak</Eyebrow>

              <h3 className="font-display text-3xl font-bold text-primary-deep">
                Technology for everyday listening
              </h3>

              <p className="mt-4 leading-relaxed text-mid">
                Aurikear works with a wide range of Phonak hearing technology,
                including receiver-in-the-ear, custom, power, paediatric and
                CROS solutions.
              </p>

              <p className="mt-3 leading-relaxed text-mid">
                From conversations at home to challenging listening
                environments, we'll explore the Phonak options that may best
                match your individual hearing needs and everyday life.
              </p>

              <a
                href="https://www.phonak.com/en-uk/hearing-devices/hearing-aids"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 font-semibold text-primary-deep hover:underline"
              >
                Explore Phonak hearing aids
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <p className="mt-4 text-xs text-mid">
                Phonak Lyric is not currently provided by Aurikear.
              </p>
            </div>
          </div>
        </div>

        {/* PERSONAL APPROACH */}
        <div className="mt-24 rounded-3xl bg-primary-deep px-7 py-12 text-white md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-foam/70">
              More than technology
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              The right hearing aid is personal
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foam/80">
              The best hearing aid isn't simply the newest or most expensive
              device. It's one that is appropriate for your hearing, your
              lifestyle and the situations that matter to you.
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-foam/80">
              We'll explain your options clearly and recommend technology based
              on your individual assessment rather than expecting you to choose
              from a catalogue.
            </p>
          </div>
        </div>

        {/* HEARING AID JOURNEY */}
        <div className="mt-24">
          <div className="max-w-3xl">
            <Eyebrow>Your care</Eyebrow>

            <h2 className="font-display text-title font-bold">
              Your hearing aid journey
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-mid">
              Choosing the technology is only one part of successful hearing
              care. From your first assessment through to fitting and ongoing
              support, we'll guide you through each stage.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {hearingAidJourney.map((item, index) => (
              <article
                key={item.number}
                className="relative flex gap-5 border-b border-border py-7 first:pt-0 md:first:pt-0 md:[&:nth-child(2)]:pt-0"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg">
                  {item.number}
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-primary-deep">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-mid">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-sky-pale px-5 py-5">
            <HeartHandshake
              className="mt-0.5 size-5 shrink-0 text-primary"
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <p className="text-sm leading-relaxed text-mid">
              <span className="font-bold text-primary-deep">
                Support doesn't end at the fitting.
              </span>{" "}
              Hearing needs can change over time, so ongoing review and
              adjustment remain an important part of your hearing care.
            </p>
          </div>
        </div>

        {/* TECHNOLOGY LEVELS */}
        <div className="mt-20 rounded-2xl border border-border bg-sky-pale p-8 md:p-12">
          <Eyebrow>Technology levels</Eyebrow>

          <h2 className="font-display text-title font-bold">
            Technology to match your lifestyle
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-mid">
            Hearing aids are available at different technology levels. Rather
            than choosing on specifications alone, we'll help you understand
            which features are likely to provide meaningful benefit in the
            places you spend your time.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {techLevels.map((item) => (
              <div
                key={item.level}
                className="rounded-xl border border-border bg-white p-5 shadow-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="font-display text-lg font-semibold text-primary-deep">
                  {item.level}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-mid">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-white/70 px-5 py-4">
            <Check
              className="mt-0.5 size-5 shrink-0 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />

            <p className="text-sm leading-relaxed text-mid">
              <span className="font-bold text-primary-deep">
                Technology level isn't the same as suitability.
              </span>{" "}
              The right choice depends on your hearing, listening environments,
              lifestyle and the features that are likely to provide meaningful
              benefit for you.
            </p>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-12 rounded-2xl bg-primary-deep px-6 py-12 text-center text-white md:px-12">
          <Eyebrow className="text-sky">Your hearing matters</Eyebrow>

          <h2 className="font-display text-3xl font-bold">
            Ready to find the right hearing solution?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-foam/80">
            Whether you're concerned about your hearing or already considering
            hearing aids, we'll help you understand your options and choose
            technology suited to your hearing, lifestyle and individual needs.
          </p>

          <Button asChild variant="foam" className="mt-7">
            <Link to="/contact">
              Arrange an appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}

export default HearingAids;