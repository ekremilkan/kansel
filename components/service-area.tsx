import { MapPin } from 'lucide-react'

const regions = [
  'Mannheim',
  'Heidelberg',
  'Ludwigshafen',
  'Speyer',
  'Neustadt',
  'Karlsruhe',
  'Darmstadt',
  'Umgebung',
]

export function ServiceArea() {
  return (
    <section id="einsatzgebiet" className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Regional für Sie da</p>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Unser Einsatzgebiet
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            Wir sind in der Metropolregion Rhein-Neckar und den umliegenden
            Gebieten unterwegs.
          </p>
        </div>

        <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {regions.map((region) => (
            <li key={region}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {region}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
