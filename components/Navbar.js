"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";

export default function Navbar() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, T } = useLang();

  const liens = [
    { href: "/",               label: T(tr.nav.accueil) },
    { href: "/recherches",     label: T(tr.nav.recherches) },
    { href: "/engagement",     label: T(tr.nav.engagement) },
    { href: "/vulgarisation",  label: T(tr.nav.vulgarisation) },
    { href: "/equipe",         label: T(tr.nav.equipe) },
    { href: "/cv",             label: T(tr.nav.cv) },
  ];

  const estActif = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Elevated shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => { setOuvert(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-sombre border-b border-white/10 transition-shadow duration-200 ${
        scrolled ? "shadow-[0_4px_16px_rgba(0,0,0,0.45)]" : "shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
      }`}
      role="banner"
    >
      <nav
        className="max-w-content mx-auto px-5 flex items-center justify-between h-16"
        aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corail focus-visible:ring-offset-2"
          aria-label="Dr. Nkodia Hardy — Accueil"
        >
          <span className="font-oswald uppercase font-bold text-lg tracking-wide text-encre-inv group-hover:text-ocre-vif transition-colors duration-150">
            Nkodia <span className="text-ocre-vif">Hardy</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-encre-inv/60">
            {T(tr.nav.sousTitre)}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5" role="list">
          {liens.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-oswald uppercase text-sm tracking-wide px-3 py-2 inline-block transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corail focus-visible:ring-offset-2
                  ${estActif(l.href)
                    ? "text-ocre-vif border-b-2 border-ocre-vif pb-1.5"
                    : "text-encre-inv/75 hover:text-ocre-vif"
                  }`}
                aria-current={estActif(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* Language toggle — desktop */}
          <li className="ml-3" aria-label="Langue / Language">
            <div className="flex items-center border border-white/15 rounded-sm overflow-hidden text-xs font-oswald uppercase tracking-wide">
              <button
                onClick={() => setLang("fr")}
                aria-pressed={lang === "fr"}
                aria-label="Français"
                className={`min-w-[44px] min-h-[36px] px-3 transition-colors duration-150
                  ${lang === "fr" ? "bg-ocre-vif text-sombre" : "text-encre-inv/75 hover:bg-white/10"}`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                aria-label="English"
                className={`min-w-[44px] min-h-[36px] px-3 transition-colors duration-150
                  ${lang === "en" ? "bg-ocre-vif text-sombre" : "text-encre-inv/75 hover:bg-white/10"}`}
              >
                EN
              </button>
            </div>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language toggle — mobile */}
          <div
            className="flex items-center border border-white/15 rounded-sm overflow-hidden text-xs font-oswald uppercase tracking-wide"
            aria-label="Langue / Language"
          >
            <button
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              aria-label="Français"
              className={`min-w-[44px] min-h-[44px] px-2.5 transition-colors duration-150
                ${lang === "fr" ? "bg-ocre-vif text-sombre" : "text-encre-inv/75"}`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="English"
              className={`min-w-[44px] min-h-[44px] px-2.5 transition-colors duration-150
                ${lang === "en" ? "bg-ocre-vif text-sombre" : "text-encre-inv/75"}`}
            >
              EN
            </button>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={ouvert}
            aria-controls="mobile-menu"
            onClick={() => setOuvert((v) => !v)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-encre-inv
              hover:text-ocre-vif transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corail focus-visible:ring-offset-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {ouvert ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {ouvert && (
        <ul
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-sombre"
          role="list"
        >
          {liens.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={estActif(l.href) ? "page" : undefined}
                className={`flex items-center font-oswald uppercase text-sm tracking-wide px-5 min-h-[52px] border-b border-white/8
                  transition-colors duration-150
                  ${estActif(l.href)
                    ? "text-ocre-vif border-l-4 border-l-ocre-vif pl-4"
                    : "text-encre-inv/75 hover:text-ocre-vif hover:bg-white/5"
                  }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
