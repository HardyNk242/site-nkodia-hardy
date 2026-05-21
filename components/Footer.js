"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";

export default function Footer() {
  const { T } = useLang();

  return (
    <footer className="bg-encre text-white/75 mt-20" role="contentinfo">
      <div className="max-w-content mx-auto px-5 py-14 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-oswald uppercase text-white text-base font-semibold tracking-wide">
            Dr. Nkodia Hardy
          </p>
          <span className="block w-8 h-px bg-corail mt-2 mb-3" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-white/65">
            {T(tr.footer.description)}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-oswald uppercase text-white text-xs tracking-widest mb-4">
            {T(tr.footer.nav)}
          </p>
          <ul className="space-y-2 text-sm" role="list">
            {[
              { href: "/publications", label: T(tr.nav.publications) },
              { href: "/recherches",   label: T(tr.nav.recherches) },
              { href: "/cours",        label: T(tr.footer.cours) },
              { href: "/cv",           label: T(tr.footer.cv) },
              { href: "/equipe",       label: T(tr.nav.equipe) },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-corail transition-colors duration-150
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-corail"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & profiles */}
        <div>
          <p className="font-oswald uppercase text-white text-xs tracking-widest mb-4">
            {T(tr.footer.profils)}
          </p>
          <ul className="space-y-2 text-sm" role="list">
            <li>
              <a
                href="https://www.researchgate.net/profile/Nkodia-Hardy-Medry-Dieu-Veil"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-corail transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-corail"
              >
                ResearchGate ↗
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=nkodia-hardy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-corail transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-corail"
              >
                Google Scholar ↗
              </a>
            </li>
            <li>
              <a
                href="mailto:hardy.nkodia@umng.cg"
                className="hover:text-corail transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-corail"
              >
                hardy.nkodia@umng.cg
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-content mx-auto px-5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Dr. Nkodia Hardy — Université Marien Ngouabi. {T(tr.footer.droits)}
          </p>
          <p className="text-xs text-white/30">
            Brazzaville, République du Congo
          </p>
        </div>
      </div>
    </footer>
  );
}
