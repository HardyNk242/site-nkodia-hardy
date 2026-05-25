"use client";

import Link from "next/link";
import Image from "next/image";
import HeroAccueil from "@/components/HeroAccueil";
import Placeholder from "@/components/Placeholder";
import ImageCarousel from "@/components/ImageCarousel";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import {
  profil,
  publicationsRecentes,
  evenements,
  actualites,
} from "@/data/site";
import { presseArticles, videos } from "@/data/vulgarisation";

export default function Accueil() {
  const { T } = useLang();

  return (
    <>
      {/*
        ── Shared background for Hero + Citation ──────────────────────
        Both sit on the same rock-texture image. The citation section
        uses a semi-transparent overlay so the texture shows through.
      */}
      <div
        style={{
          backgroundColor: "#1A1C1A",
          backgroundImage: "url(/images/hero-bg2.jpg)",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <HeroAccueil />

        {/* Citation — sits ON TOP of the info card (higher z-index) */}
        <section
          className="pb-16 border-b border-white/6"
          style={{
            paddingTop: 240,      /* absorbs the -220 margin + a bit of breathing room */
            background: "rgba(26,28,26,0.58)",
            position: "relative",
            zIndex: 10,           /* appears in front of the card's z-index: 2        */
          }}
        >
          <div className="max-w-content mx-auto px-5">
            <h2 className="titre-section">{T(tr.home.profil)}</h2>
            <span className="barre-corail" />
            <blockquote className="font-bitter italic text-xl md:text-2xl text-encre/80 leading-relaxed max-w-3xl">
              {T(profil.citation)}
            </blockquote>
          </div>
        </section>
      </div>

      {/* Récentes publications */}
      <section className="bg-surface border-y border-white/8">
        <div className="max-w-content mx-auto px-5 py-16">
          <h2 className="titre-section">{T(tr.home.pubsRecentes)}</h2>
          <span className="barre-corail" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {publicationsRecentes.slice(0, 3).map((p, i) => (
              <article key={i} className="carte flex flex-col group overflow-hidden">
                <div className="relative bg-sombre" style={{ aspectRatio: "4/3" }}>
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`Figure — ${p.revue}`}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  ) : (
                    <Placeholder label={`Figure — ${p.revue}`} ratio="aspect-[4/3]" />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-oswald text-corail text-sm uppercase tracking-wide">
                    {p.annee} · {p.revue}
                  </span>
                  <h3 className="font-oswald text-xl mt-2 leading-snug">{p.titre}</h3>
                  <p className="text-sm text-encre/65 mt-2">{p.auteurs}</p>
                  {p.resume && (
                    <p className="text-sm text-encre/75 mt-3 leading-relaxed border-l-2 border-corail/30 pl-3 font-bitter italic">
                      {T(p.resume)}
                    </p>
                  )}
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

      {/* Presse + Vidéo + Événements */}
      <section className="max-w-content mx-auto px-5 py-16 grid gap-12 lg:grid-cols-2">
        {/* Dans les journaux — 2 articles */}
        <div>
          <h2 className="titre-section">{T(tr.home.dansJournaux)}</h2>
          <span className="barre-corail" />
          <ul className="space-y-5">
            {presseArticles.slice(0, 2).map((j, i) => (
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
          <Link href="/vulgarisation#presse" className="lien-corail text-sm inline-block mt-5">
            {T(tr.vulgarisation.voirTous)}
          </Link>
        </div>

        {/* Événements */}
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

      {/* Vidéo phare */}
      <section className="bg-surface border-y border-white/8">
        <div className="max-w-content mx-auto px-5 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-sombre">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
              title={T(videos[0].titre)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="titre-section">{T(videos[0].titre)}</h2>
            <span className="barre-corail" />
            <p className="text-encre/75 leading-relaxed mb-6">{T(videos[0].description)}</p>
            <Link href="/vulgarisation#videos" className="lien-corail text-sm">
              {T(tr.vulgarisation.voirVideos)}
            </Link>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="bg-surface border-t border-white/8">
        <div className="max-w-content mx-auto px-5 py-16">
          <h2 className="titre-section">{T(tr.home.actualites)}</h2>
          <span className="barre-corail" />
          {actualites.map((actu) => (
            <div key={actu.id} className="mb-12 last:mb-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                <p className="font-oswald uppercase text-corail text-sm tracking-wide">
                  {actu.date} · {T(actu.lieu)}
                </p>
                <p className="font-oswald text-lg leading-snug">{T(actu.titre)}</p>
              </div>
              <ImageCarousel
                items={actu.images.map((img) => ({
                  src: img.src,
                  legende: T(img.legende),
                  href: `/actualites/${actu.id}`,
                }))}
              />
              <Link href={`/actualites/${actu.id}`} className="lien-corail inline-block mt-5">
                {T(tr.home.voirActualite)}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bandeau profils */}
      <section className="bg-sombre text-encre border-t border-white/8">
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
              className="inline-flex items-center justify-center gap-2 border-2 border-encre/40 text-encre/80 font-oswald uppercase tracking-wide text-sm px-5 py-2.5 transition hover:border-corail hover:text-corail"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
