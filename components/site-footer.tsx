import Image from "next/image";

const legalDocuments = [
  {
    label: "Allgemeine Geschäftsbedingungen",
    href: "/legal/allgemeine-geschaeftsbedingungen",
  },
  {
    label: "Datenschutzerklärung",
    href: "/legal/datenschutzerklaerung",
  },
  {
    label: "Widerrufsbelehrung",
    href: "/legal/widerrufsbelehrung",
  },
  {
    label: "Impressum",
    href: "/legal/impressum",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/kansel-logo-transparent.png"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 object-contain"
          />
          <p className="text-sm text-muted-foreground">
            © 2026 Kansel Dienstleistungen – Alle Rechte vorbehalten.
          </p>
        </div>

        <nav
          className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-end"
          aria-label="Rechtliches"
        >
          {legalDocuments.map((document) => (
            <a
              key={document.href}
              href={document.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {document.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
