import Image from "next/image";
import { Phone, ArrowRight, Check } from "lucide-react";

const trustPoints = [
  "Flexible Termine",
  "Verbindliche Festpreise",
  "Keine versteckten Kosten",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[720px] w-[58%] bg-[radial-gradient(ellipse_at_top_right,rgba(18,89,183,0.3),transparent_65%)]"
      />
      <div className="container-page relative min-h-[720px] pb-16 pt-0 md:pb-20 lg:pt-32">
        <div className="hero-reveal hero-logo flex h-56 items-center justify-center pt-12 lg:hidden">
          <Image
            src="/assets/kansel-logo-transparent.png"
            alt="Kansel Dienstleistungen – Haus, Transporter und Container"
            width={360}
            height={360}
            className="h-auto w-full max-w-[15rem] object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] lg:gap-10">
          <div>
            <h1 className="hero-reveal hero-title mt-7 max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.85rem]">
              <span className="hero-title-line">Wir packen an.</span>{" "}
              <span className="hero-title-line text-accent">
                Sauber. Zuverlässig. Direkt.
              </span>
            </h1>
          </div>

          <div className="hero-reveal hero-logo relative hidden items-center justify-center lg:flex">
            <div
              aria-hidden="true"
              className="absolute inset-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
            />
            <Image
              src="/assets/kansel-logo-transparent.png"
              alt="Kansel Dienstleistungen – Haus, Transporter und Container"
              width={520}
              height={520}
              className="relative h-auto w-full max-w-[31rem] object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.4)]"
              priority
            />
          </div>
        </div>

        <div className="mt-0 grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] lg:gap-10">
          <div>
            <p className="hero-reveal hero-copy max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ihr Ansprechpartner für Entrümpelung, Entsorgung, Demontage und
              Reinigung – schnell vor Ort und persönlich erreichbar.
            </p>
          </div>

          <div className="hero-reveal hero-actions grid w-full grid-cols-1 gap-3 sm:flex sm:flex-nowrap sm:justify-evenly sm:gap-4 lg:items-start lg:pt-1">
            <a
              href="tel:017646647043"
              className="call-button relative isolate inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover sm:px-6"
            >
              <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              <span className="relative z-10">Jetzt anrufen</span>
            </a>
            <a
              href="#kontakt"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-4 text-base font-semibold text-foreground transition-colors hover:bg-surface sm:px-6"
            >
              Angebot anfragen
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <ul className="hero-reveal hero-trust mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}
