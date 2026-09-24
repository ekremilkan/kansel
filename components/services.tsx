import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    index: "01",
    title: "Entrümpelung",
    description:
      "Wohnungen, Häuser, Keller, Garagen und Gewerbeflächen – besenrein und zuverlässig.",
    image: "/assets/services/entruempelung.webp",
    alt: "Professionelle Entrümpelung einer Wohnung",
  },
  {
    index: "02",
    title: "Entsorgung",
    description:
      "Fachgerechte Abfuhr von Sperrmüll, Holz, Altmetall, Bauschutt und weiteren Materialien.",
    image: "/assets/services/entsorgung.webp",
    alt: "Fachgerechte Entsorgung von Bauschutt",
  },
  {
    index: "03",
    title: "Demontage",
    description:
      "Fachgerechter Rückbau von Küchen, Möbeln, Böden und nicht tragenden Bauteilen. Dazu gehören auch Tapetenentfernung, Badentkernung, Fliesenabbruch sowie sorgfältige Teil- und Komplettentkernungen.",
    image: "/assets/services/demontage.webp",
    alt: "Fachgerechte Demontage und Fliesenabbruch",
  },
  {
    index: "04",
    title: "Reinigung",
    description:
      "Bauendreinigung, Grundreinigung und gründliche Reinigung nach Räumung oder Arbeiten.",
    image: "/assets/services/reinigung.webp",
    alt: "Professionelle Bauendreinigung",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Unsere Leistungen
            </p>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Alles aus einer Hand
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Für private Haushalte, Gewerbe, Hausverwaltungen und Baustellen.
          </p>
        </div>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {services.map((service, serviceIndex) => (
            <article
              key={service.index}
              className={`service-row group grid min-h-[31rem] items-center gap-10 py-10 md:grid-cols-2 md:gap-14 md:py-14 ${serviceIndex % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="flex h-full flex-col justify-center px-1 md:px-8">
                <span className="font-mono text-xs font-semibold tracking-[0.24em] text-accent">
                  {service.index}
                </span>
                <h3 className="mt-7 max-w-lg text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                  {service.title}
                </h3>
                <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                  {service.description}
                </p>
                <a
                  href="#kontakt"
                  className="mt-8 inline-flex w-fit items-center gap-2 border-b border-accent/50 pb-2 text-sm font-semibold text-accent transition-colors hover:border-foreground hover:text-foreground"
                >
                  Beratung anfragen
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.5rem] bg-panel md:aspect-[1.25/1]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale-[12%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
