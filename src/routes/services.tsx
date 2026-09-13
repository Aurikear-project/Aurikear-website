import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { FramedImage } from "@/components/framed-image";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/practice";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services – Aurikear" },
      {
        name: "description",
        content:
          "Hearing assessments, independent hearing aid fitting, musician ear plugs, paediatric audiology, and custom swim moulds.",
      },
    ],
  }),
});

function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title="Hearing care for every stage of life"
        lede="A comprehensive range of clinical audiology services delivered with expertise, care, and the latest technology."
        image="/images/diagnostic.jpg"
        imageAlt=""
      />
      <Section>
        <div className="divide-y divide-border">
          {services.map((service, i) => {
            const reverse = i % 2 === 1;
            const ctaTo = service.href.startsWith("/services")
              ? "/booking"
              : (service.href as "/paediatric" | "/musicians");
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 items-center gap-8 py-12 md:grid-cols-2 md:gap-14 md:py-14"
              >
                <FramedImage
                  src={service.image}
                  alt={service.imageAlt}
                  className={cn(
                    "aspect-wide rounded-2xl",
                    reverse ? "md:order-2" : "md:order-1",
                  )}
                />
                <div className={reverse ? "md:order-1" : "md:order-2"}>
                  <p className="text-xs font-bold tracking-[0.14em] text-primary-light uppercase">
                    {service.eyebrow}
                  </p>
                  <h2 className="font-display mt-2 text-3xl font-bold">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-mid">{service.body}</p>
                  <ul className="mt-5 space-y-0">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 border-b border-border py-2.5 text-sm text-mid last:border-0"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6">
                    <Link to={ctaTo}>
                      {service.href.startsWith("/services")
                        ? "Book this service"
                        : "Learn more"}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
