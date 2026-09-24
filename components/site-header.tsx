"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Einsatzgebiet", href: "#einsatzgebiet" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 md:h-24">
          <a
            href="/"
            data-header-logo="true"
            data-visible={scrolled || menuOpen}
            className="group flex items-center gap-3 transition-opacity duration-300"
            aria-label="Kansel Dienstleistungen Startseite"
          >
            <Image
              src="/assets/kansel-logo-transparent.png"
              alt="Logo von Kansel Dienstleistungen"
              width={48}
              height={48}
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:rotate-[-4deg] md:h-12 md:w-12"
              priority
            />
            <span className="hidden text-sm font-semibold leading-tight tracking-tight sm:block">
              Kansel
              <span className="block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Dienstleistungen
              </span>
            </span>
          </a>

          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:017646647043"
              className="hidden items-center gap-2 rounded-full border border-border-strong bg-primary/10 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>0176 46647043</span>
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-primary/10 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#050b16] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-5 opacity-0"}`}
      >
        <nav
          aria-label="Mobile Navigation"
          className="container-page flex h-[100dvh] min-h-[100dvh] flex-col px-6 pb-8 pt-28 sm:px-8"
        >
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Navigation
            </span>
            <span className="font-mono text-accent">KDL / 04</span>
          </div>

          <div className="my-auto border-y border-border/80 py-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-border/70 py-5 last:border-b-0"
                style={{
                  transitionDelay: menuOpen
                    ? `${100 + index * 70}ms`
                    : `${(navItems.length - 1 - index) * 70}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(18px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "420ms",
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <span className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-accent">
                    0{index + 1}
                  </span>
                  <span className="text-[clamp(2rem,9vw,3.25rem)] font-medium leading-none tracking-[-0.05em] text-foreground">
                    {item.label}
                  </span>
                </span>
                <span className="text-2xl text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-end justify-between gap-5 border-t border-border/70 pt-5">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Direkter Kontakt
              </p>
              <a
                href="tel:017646647043"
                onClick={closeMenu}
                className="text-base font-semibold text-foreground"
              >
                0176 46647043
              </a>
            </div>
            <a
              href="tel:017646647043"
              onClick={closeMenu}
              className="call-button relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_hsl(var(--primary)/0.25)] transition-transform hover:-translate-y-0.5"
            >
              <Phone className="relative z-10 h-4 w-4" aria-hidden="true" />
              <span className="relative z-10">Anrufen</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
