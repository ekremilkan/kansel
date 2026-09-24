import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const legalDocuments = {
  "allgemeine-geschaeftsbedingungen": {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    eyebrow: "Kansel Dienstleistungen",
    sections: [
      [
        "§1 Geltungsbereich",
        "Diese AGB gelten für alle Angebote, Aufträge und Leistungen von Kansel Dienstleistungen.",
      ],
      [
        "§2 Leistungen",
        "Entrümpelung, Entsorgung, Demontage, Reinigung sowie weitere vereinbarte Dienstleistungen.",
      ],
      [
        "§3 Angebote",
        "Angebote sind freibleibend. Ein Vertrag kommt durch schriftliche oder mündliche Auftragsbestätigung zustande.",
      ],
      [
        "§4 Preise",
        "Es gelten die vereinbarten Preise. Zusatzleistungen werden gesondert berechnet.",
      ],
      [
        "§5 Zahlung",
        "Rechnungen sind sofort nach Erhalt ohne Abzug fällig, sofern nichts anderes vereinbart wurde.",
      ],
      [
        "§6 Termine",
        "Vereinbarte Termine sind einzuhalten. Verzögerungen durch höhere Gewalt bleiben vorbehalten.",
      ],
      [
        "§7 Mitwirkungspflicht",
        "Der Auftraggeber sorgt für freien Zugang zum Arbeitsbereich.",
      ],
      [
        "§8 Haftung",
        "Für Vorsatz und grobe Fahrlässigkeit wird nach den gesetzlichen Vorschriften gehaftet. Für leichte Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.",
      ],
      [
        "§9 Stornierung",
        "Eine kostenfreie Stornierung ist bis 24 Stunden vor dem Termin möglich. Danach können Ausfallkosten berechnet werden.",
      ],
      [
        "§10 Schlussbestimmungen",
        "Es gilt deutsches Recht. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.",
      ],
    ],
  },
  datenschutzerklaerung: {
    title: "Datenschutzhinweise (DSGVO)",
    eyebrow: "Kansel Dienstleistungen",
    sections: [
      [
        "Verantwortlicher",
        "Kansel Dienstleistungen\nInhaber: Selim Han Kandogmus\nRobert Koch Straße 11, 68535 Edingen-Neckarhausen\nTelefon: 0176 46647043\nE-Mail: kontakt.kansel@gmail.com",
      ],
      [
        "1. Zweck der Datenverarbeitung",
        "Wir verarbeiten personenbezogene Daten zur Erstellung von Angeboten, Durchführung von Aufträgen, Rechnungsstellung, Kommunikation mit Kunden sowie zur Erfüllung gesetzlicher Pflichten.",
      ],
      [
        "2. Verarbeitete Daten",
        "Name, Anschrift, Telefonnummer, E-Mail-Adresse, Objektadresse, Rechnungsdaten sowie auftragsbezogene Informationen.",
      ],
      [
        "3. Rechtsgrundlagen",
        "Die Verarbeitung erfolgt insbesondere zur Vertragserfüllung, zur Erfüllung gesetzlicher Verpflichtungen und auf Grundlage berechtigter Interessen gemäß DSGVO.",
      ],
      [
        "4. Speicherdauer",
        "Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Vertragsabwicklung und aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.",
      ],
      [
        "5. Weitergabe von Daten",
        "Eine Weitergabe erfolgt nur, soweit sie zur Vertragsabwicklung erforderlich oder gesetzlich vorgeschrieben ist.",
      ],
      [
        "6. Rechte der betroffenen Personen",
        "Sie haben insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch nach Maßgabe der DSGVO.",
      ],
      [
        "7. Kontakt",
        "Bei Fragen zum Datenschutz wenden Sie sich an die oben genannten Kontaktdaten.",
      ],
    ],
  },
  impressum: {
    title: "Impressum",
    eyebrow: "Kansel Dienstleistungen",
    sections: [
      [
        "Angaben gemäß § 5 DDG",
        "Kansel Dienstleistungen\nInhaber: Selim Han Kandogmus\nRobert-Koch-Straße 11\n68535 Edingen-Neckarhausen\nDeutschland",
      ],
      ["Kontakt", "Telefon: 0176 46647043\nE-Mail: Kontakt.kansel@gmail.com"],
      ["Unternehmensform", "Einzelunternehmen"],
      [
        "Umsatzsteuer",
        "Kleinunternehmer gemäß § 19 UStG.\nGemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.",
      ],
      ["Wirtschafts-Identifikationsnummer", "DE439012612-00001"],
      [
        "Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV",
        "Selim Han Kandogmus\nRobert-Koch-Straße 11\n68535 Edingen-Neckarhausen\nDeutschland",
      ],
      [
        "Verbraucherstreitbeilegung",
        "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ],
      [
        "Haftung für Links",
        "Unsere Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
      ],
    ],
  },
  widerrufsbelehrung: {
    title: "Widerrufsbelehrung",
    eyebrow: "Kansel Dienstleistungen",
    sections: [
      [
        "Unternehmensdaten",
        "Kansel Dienstleistungen\nInhaber: Selim Han Kandogmus\nRobert Koch Straße 11, 68535 Edingen-Neckarhausen\nTel.: 0176 46647043\nE-Mail: kontakt.kansel@gmail.com",
      ],
      [
        "Widerrufsrecht",
        "Verbraucher haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses bzw. bei Dienstleistungen nach den gesetzlichen Vorschriften.",
      ],
      [
        "Ausübung des Widerrufs",
        "Zur Ausübung des Widerrufsrechts genügt eine eindeutige Erklärung per Brief oder E-Mail an Kansel Dienstleistungen.",
      ],
      [
        "Folgen des Widerrufs",
        "Im Falle eines wirksamen Widerrufs werden bereits geleistete Zahlungen entsprechend den gesetzlichen Bestimmungen erstattet. Hat der Kunde ausdrücklich verlangt, dass die Dienstleistung vor Ablauf der Widerrufsfrist beginnt, ist ein angemessener Betrag für die bis zum Widerruf erbrachten Leistungen zu zahlen.",
      ],
      [
        "Vorzeitiges Erlöschen des Widerrufsrechts",
        "Das Widerrufsrecht kann vorzeitig erlöschen, wenn die Dienstleistung vollständig erbracht wurde und der Verbraucher zuvor ausdrücklich zugestimmt hat, dass mit der Ausführung begonnen wird und ihm bekannt ist, dass er dadurch sein Widerrufsrecht bei vollständiger Vertragserfüllung verliert.",
      ],
      [
        "Hinweis",
        "Diese Widerrufsbelehrung ist als Vorlage gedacht und sollte vor der Verwendung im Geschäftsverkehr an deine konkreten Abläufe angepasst und bei Bedarf rechtlich geprüft werden.",
      ],
    ],
  },
} as const;

type LegalSlug = keyof typeof legalDocuments;

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(legalDocuments).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = legalDocuments[slug as LegalSlug];

  return document
    ? { title: `${document.title} | Kansel Dienstleistungen` }
    : { title: "Rechtliche Informationen | Kansel Dienstleistungen" };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const document = legalDocuments[slug as LegalSlug];

  if (!document) notFound();

  return (
    <>
      <SiteHeader />
      <main
        id="top"
        className="min-h-screen bg-background pb-8 pt-24 sm:pb-12 sm:pt-32"
      >
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Zurück zur Startseite
            </Link>

            <header className="mt-10 border-b border-border pb-8">
              {document.eyebrow && (
                <p className="section-label mb-3">{document.eyebrow}</p>
              )}
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                {document.title}
              </h1>
            </header>

            <article className="py-8 sm:py-12">
              {document.sections.map(([heading, content]) => (
                <section
                  key={heading}
                  className="border-b border-border py-7 first:pt-0 last:border-b-0"
                >
                  <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                    {heading}
                  </h2>
                  <p className="whitespace-pre-line text-base leading-8 text-muted-foreground">
                    {content}
                  </p>
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
