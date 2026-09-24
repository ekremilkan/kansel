import { Check } from 'lucide-react'

const highlights = [
  'Direkter Ansprechpartner',
  'Verbindliches Festpreisangebot',
  'Termingerechte Ausführung',
  'Ordentliche Übergabe',
]

export function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-surface py-24 md:py-36">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="about-mark relative hidden min-h-[360px] overflow-hidden bg-panel/35 p-8 sm:p-10 md:block lg:min-h-[440px]">
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 hidden select-none items-center justify-start pl-8 text-[22rem] font-bold leading-none tracking-[-0.16em] text-accent/[0.09] md:flex lg:pl-12 lg:text-[30rem]">
            K
          </span>
          <div className="relative flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.28em] text-accent">KDL / 01</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>
          <p className="relative mt-24 max-w-sm text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
            Praktische Lösungen
            <br />
            statt langer Umwege.
          </p>
        </div>

        <div>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Über uns
          </p>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Persönlicher Service, auf den Sie zählen können.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
            Kansel Dienstleistungen steht für saubere Arbeit, klare Absprachen
            und flexible Termine. Nach der Besichtigung erhalten Sie von uns
            einen verbindlichen Festpreis – ohne versteckte Kosten. Unsere
            Preise sind fair und transparent kalkuliert und berücksichtigen den
            tatsächlichen Aufwand sowie die aktuellen Material-, Entsorgungs-
            und Betriebskosten.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
