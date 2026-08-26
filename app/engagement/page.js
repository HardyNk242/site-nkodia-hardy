"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { projets } from "@/data/projets";
import { pedagogieItems, kongoScience, conferencesEngagement } from "@/data/engagement";

function SectionTitre({ titre }) {
  return (
    <>
      <h2 className="titre-section">{titre}</h2>
      <span className="barre-corail" />
    </>
  );
}

export default function Engagement() {
  const { T } = useLang();

  return (
    <>
      <Hero
        titre={T(tr.engagement.hero)}
        sousTitre={T(tr.engagement.sousTitre)}
        image="/images/bannieres/engagement.svg"
      />

      {/* ── SECTION 1 — PROJETS ─────────────────────────────────────── */}
      <section className="bg-clair">
        <div className="max-w-content mx-auto px-5 py-16">
          <SectionTitre titre={T(tr.engagement.projets)} />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projets.map((p) => (
              <article key={p.id} className="carte flex flex-col group overflow-hidden">
                {/* Photo ou placeholder */}
                <div className="relative h-36 bg-surface border-b border-black/8 overflow-hidden">
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={T(p.titre)}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full">
                      <span className="font-oswald uppercase text-corail text-lg tracking-wide px-4 text-center leading-tight">
                        {p.id.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-oswald uppercase tracking-wide text-corail mb-1">
                    {T(tr.engagement.financement)} : {p.financement}
                  </span>
                  <h3 className="font-oswald text-lg leading-snug mt-1">{T(p.titre)}</h3>
                  <p className="text-sm text-encre/60 mt-1">{p.periode}</p>
                  <p className="text-sm text-encre/75 mt-3 leading-relaxed flex-grow">
                    {T(p.resume)}
                  </p>
                  <Link
                    href={`/engagement/${p.id}`}
                    className="btn-corail mt-5 w-full justify-center"
                  >
                    {T(tr.engagement.enSavoirPlus)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — INNOVATION PÉDAGOGIQUE ─────────────────────── */}
      <section className="bg-surface border-y border-black/8">
        <div className="max-w-content mx-auto px-5 py-16">
          <SectionTitre titre={T(tr.engagement.pedagogie)} />
          <ul className="space-y-6">
            {pedagogieItems.map((item, i) => (
              <li key={i} className="carte p-6 flex gap-5">
                <span className="shrink-0 w-1.5 bg-corail rounded-full" />
                <div>
                  <p className="font-oswald uppercase text-xs tracking-wide text-corail mb-0.5">
                    {item.periode}
                  </p>
                  <h3 className="font-oswald text-xl leading-snug">
                    {typeof item.institution === "object" ? T(item.institution) : item.institution}
                  </h3>
                  <p className="text-sm text-encre/60 mb-2">{T(item.lieu)}</p>
                  <p className="text-sm text-encre/80 leading-relaxed">{T(item.description)}</p>
                  {item.lien && (
                    <Link href={item.lien.href} className="lien-corail text-sm mt-2 inline-block">
                      {T(item.lien.label)}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 3 — KONGO SCIENCE ───────────────────────────────── */}
      <section className="bg-clair">
        <div className="max-w-content mx-auto px-5 py-16">
          <SectionTitre titre={T(tr.engagement.kongo)} />
          <div className="carte p-8 md:flex gap-8 items-start">
            {/* Logo placeholder */}
            <div className="shrink-0 w-28 h-28 bg-surface border border-black/10 flex items-center justify-center rounded-sm mb-6 md:mb-0">
              <span className="font-oswald uppercase text-corail text-xs tracking-wide text-center px-2 leading-tight">
                Kongo<br />Science
              </span>
            </div>
            <div className="flex-grow">
              <h3 className="font-oswald text-xl leading-snug">{T(kongoScience.titre)}</h3>
              <p className="text-sm text-corail mt-1 mb-4">{kongoScience.periode}</p>
              <p className="text-encre/80 leading-relaxed">{T(kongoScience.description)}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="mailto:hardy.nkodia@umng.cg"
                  className="btn-contour text-sm"
                >
                  Contact →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CONFÉRENCES ─────────────────────────────────── */}
      <section className="bg-surface border-t border-black/8">
        <div className="max-w-content mx-auto px-5 py-16">
          <SectionTitre titre={T(tr.engagement.conferences)} />
          <ul className="space-y-5">
            {conferencesEngagement.map((c, i) => (
              <li key={i} className="border-l-2 border-corail pl-5">
                <p className="font-oswald uppercase text-xs tracking-wide text-corail mb-0.5">
                  {c.date}
                </p>
                <h3 className="font-oswald text-lg leading-snug">{T(c.titre)}</h3>
                <p className="text-sm text-encre/70 mt-1 leading-relaxed">{T(c.details)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
