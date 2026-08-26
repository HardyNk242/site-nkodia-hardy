"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { profil } from "@/data/site";

export default function Footer() {
  const { T } = useLang();

  return (
    <footer className="bg-sombre text-encre-inv/70 mt-20 border-t border-white/10" role="contentinfo">
      <div className="max-w-content mx-auto px-5 py-14 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-oswald uppercase text-encre-inv text-base font-semibold tracking-wide">
            Dr. Nkodia Hardy
          </p>
          <span className="block w-8 h-px bg-ocre-vif mt-2 mb-3" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-encre-inv/65">
            {T(tr.footer.description)}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-oswald uppercase text-ocre-vif text-xs tracking-widest mb-4">
            {T(tr.footer.nav)}
          </p>
          <ul className="space-y-2 text-sm" role="list">
            {[
              { href: "/recherches#publications", label: T(tr.nav.publications) },
              { href: "/recherches",   label: T(tr.nav.recherches) },
              { href: "/cours",        label: T(tr.footer.cours) },
              { href: "/cv",           label: T(tr.footer.cv) },
              { href: "/equipe",       label: T(tr.nav.equipe) },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-ocre-vif transition-colors duration-150
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ocre-vif"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & profiles */}
        <div>
          <p className="font-oswald uppercase text-ocre-vif text-xs tracking-widest mb-4">
            {T(tr.footer.profils)}
          </p>
          <ul className="space-y-2 text-sm" role="list">
            <li>
              <a
                href={profil.liens.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocre-vif transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ocre-vif"
              >
                ResearchGate ↗
              </a>
            </li>
            <li>
              <a
                href={profil.liens.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocre-vif transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ocre-vif"
              >
                Google Scholar ↗
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profil.liens.email}`}
                className="hover:text-ocre-vif transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ocre-vif"
              >
                {profil.liens.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-content mx-auto px-5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-encre-inv/50">
            © {new Date().getFullYear()} Dr. Nkodia Hardy — Université Marien Ngouabi. {T(tr.footer.droits)}
          </p>
          <p className="text-xs text-encre-inv/40">
            Brazzaville, République du Congo
          </p>
        </div>
      </div>
    </footer>
  );
}
