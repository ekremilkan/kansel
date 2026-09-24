"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const CONSENT_STORAGE_KEY = "kansel-cookie-consent";
const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

type ConsentChoice = "accepted" | "necessary";

type CookieConsentProps = {
  initialChoice?: ConsentChoice;
};

export function CookieConsent({ initialChoice }: CookieConsentProps) {
  const [choice, setChoice] = useState<ConsentChoice | null>(
    initialChoice ?? null,
  );
  const [hasResolvedStorage, setHasResolvedStorage] = useState(
    initialChoice !== undefined,
  );

  useEffect(() => {
    if (initialChoice !== undefined) {
      setHasResolvedStorage(true);
      return;
    }

    const storedChoice = window.localStorage.getItem(
      CONSENT_STORAGE_KEY,
    ) as ConsentChoice | null;

    if (storedChoice === "accepted" || storedChoice === "necessary") {
      setChoice(storedChoice);
      document.cookie = `${CONSENT_STORAGE_KEY}=${storedChoice}; Max-Age=${CONSENT_COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
    }

    setHasResolvedStorage(true);
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextChoice);
    document.cookie = `${CONSENT_STORAGE_KEY}=${nextChoice}; Max-Age=${CONSENT_COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
    setChoice(nextChoice);
  };

  if (!hasResolvedStorage) return null;

  if (choice === "accepted") return <Analytics />;

  if (choice === "necessary") return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-60 sm:inset-x-6">
      <aside
        className="mx-auto w-full max-w-4xl rounded-2xl border border-border-strong bg-panel p-5 shadow-2xl sm:p-6"
        role="dialog"
        aria-labelledby="cookie-consent-title"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-foreground">
              Cookie-Einstellungen
            </p>
            <p
              id="cookie-consent-title"
              className="text-sm leading-relaxed text-muted-foreground"
            >
              Wir verwenden technisch notwendige Speicherungen, damit diese
              Website funktioniert. Optionale Dienste werden erst aktiviert,
              wenn du zustimmst.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:min-w-44">
            <button
              type="button"
              onClick={() => saveChoice("necessary")}
              className="rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => saveChoice("accepted")}
              className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
