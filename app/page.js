"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import ImageCarousel from "@/components/ImageCarousel";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import {
  profil,
  publicationsRecentes,
  dansLesJournaux,
  evenements,
  carrousel,
} from "@/data/site";

export default function Accueil() {
  const { T } = useLang();

  return (
    <>
      <Hero titre={profil.nom} sousTitre={T(profil.titre)} image="/images/hero-bg.jpg" />

      {/* Profil + citation */}
      <section className="max-w-content mx-auto px-5 py-16 grid gap-10 md:grid-cols-[280px_1fr] items-center">
        <div className="group overflow-hidden rounded-sm shadow-md">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/photo-nkodia-hardy.jpg"
              alt="Dr. Nkodia Hardy Medry Dieu-Veil"
              fill
              sizes="(max-width:768px) 100vw, 280px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>
        <div>
          <h2 className="titre-section">{T(tr.home.profil)}</h2>
          <span className="barre-corail" />
          <blockquote className="font-bitter italic text-xl md:text-2xl text-encre/80 leading-relaxed">
            {T(profil.citation)}
          </blockquote>
          <p className="mt-5 text-encre/75 leading-relaxed">
            {T(tr.home.bio)}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={profil.liens.researchgate} target="_blank" rel="noopener noreferrer" className="btn-corail">
              ResearchGate
            </a>
            <a href={profil.liens.scholar} target="_blank" rel="noopener noreferrer" className="btn-contour">
              Google Scholar
            </a>
          </div>
        </div>
      </section>

      {/* Récentes publications */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-content mx-auto px-5 py-16">
          <h2 className="titre-section">{T(tr.home.pubsRecentes)}</h2>
          <span className="barre-corail" />
          <div className="grid gap-8 md:grid-cols-2">
            {publicationsRecentes.map((p, i) => (
              <article key={i} className="carte flex flex-col group overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`Figure — ${p.revue}`}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Placeholder label={`Figure — ${p.revue}`} ratio="aspect-[16/9]" />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-oswald text-corail text-sm uppercase tracking-wide">
                    {p.annee} · {p.revue}
                  </span>
                  <h3 className="font-oswald text-xl mt-2 leading-snug">{p.titre}</h3>
                  <p className="text-sm text-encre/65 mt-2">{p.auteurs}</p>
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lien-corail mt-4 text-sm"
                  >
                    {T(tr.home.lireArticle)} DOI : {p.doi}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <Link href="/publications" className="lien-corail inline-block mt-8">
            {T(tr.home.voirTout)}
          </Link>
        </div>
      </section>

      {/* Dans les journaux + Événements */}
      <section className="max-w-content mx-auto px-5 py-16 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="titre-section">{T(tr.home.dansJournaux)}</h2>
          <span className="barre-corail" />
          <ul className="space-y-5">
            {dansLesJournaux.map((j, i) => (
              <li key={i} className="border-l-2 border-corail pl-4">
                {j.image && (
                  <div className="mb-3 overflow-hidden rounded-sm relative h-32 w-full group">
                    <Image
                      src={j.image}
                      alt={T(j.titre)}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <a
                  href={j.url}
                  target={j.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-oswald text-lg hover:text-corail transition-colors leading-snug"
                >
                  {T(j.titre)}
                </a>
                <p className="text-sm text-encre/60 mt-1">
                  {j.media} — {j.date}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="titre-section">{T(tr.home.evenements)}</h2>
          <span className="barre-corail" />
          <ul className="space-y-4">
            {evenements.map((e, i) => (
              <li key={i} className="carte p-5 flex gap-4 hover:shadow-md transition-shadow duration-200">
                <span className="shrink-0 w-1.5 bg-corail rounded-full" />
                <div>
                  <h3 className="font-oswald text-lg leading-snug">{T(e.titre)}</h3>
                  <p className="text-sm text-encre/60 mt-1">
                    {T(e.lieu)} · {e.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Carrousel d'images */}
      <section className="bg-white border-t border-black/5">
        <div className="max-w-content mx-auto px-5 py-16">
          <h2 className="titre-section">{T(tr.home.enImages)}</h2>
          <span className="barre-corail" />
          <ImageCarousel items={carrousel.map((c) => ({ ...c, legende: T(c.legende) }))} />
        </div>
      </section>

      {/* Bandeau profils */}
      <section className="bg-encre text-white">
        <div className="max-w-content mx-auto px-5 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-oswald uppercase text-2xl md:text-3xl">
            {T(tr.home.suivre)}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={profil.liens.researchgate} target="_blank" rel="noopener noreferrer" className="btn-corail">
              ResearchGate
            </a>
            <a
              href={profil.liens.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-oswald uppercase tracking-wide text-sm px-5 py-2.5 transition hover:bg-white hover:text-encre"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
