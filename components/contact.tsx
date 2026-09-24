import { Phone, Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 70% at 100% 0%, rgba(18,89,183,0.30), transparent 55%)',
        }}
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Unverbindlich anfragen
          </p>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Was können wir für Sie erledigen?
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Rufen Sie uns an oder senden Sie uns eine E-Mail. Für eine schnelle
            Einschätzung können Sie Bilder und eine kurze Beschreibung
            mitschicken.
          </p>
        </div>

        <div className="grid gap-4">
          <a
            href="tel:017646647043"
            className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-border-strong sm:gap-4 sm:p-6"
          >
            <span className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Telefon
                </span>
                <strong className="mt-1 break-all text-base font-semibold tracking-tight sm:text-lg">
                  0176 46647043
                </strong>
              </span>
            </span>
            <ArrowUpRight
              className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
          </a>

          <a
            href="mailto:Kontakt.kansel@gmail.com"
            className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-border-strong sm:gap-4 sm:p-6"
          >
            <span className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  E-Mail
                </span>
                <strong className="mt-1 break-all text-base font-semibold tracking-tight sm:text-lg">
                  Kontakt.kansel@gmail.com
                </strong>
              </span>
            </span>
            <ArrowUpRight
              className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
