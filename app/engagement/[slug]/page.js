"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { projets } from "@/data/projets";

export default function ProjetDetail({ params }) {
  const { T } = useLang();
  const projet = projets.find((p) => p.id === params.slug);

  if (!projet) notFound();

  return (
    <>
      <Hero
        titre={projet.id.toUpperCase()}
        sousTitre={T({ fr: "Un projet de collaboration universitaire en géosciences en Afrique centrale", en: "A university collaboration project in geosciences in Central Africa" })}
        image="/images/bannieres/engagement.svg"
      />

      <div className="max-w-content mx-auto px-5 py-16">

        {/* Back */}
        <Link href="/engagement" className="lien-corail text-sm inline-block mb-10">
          {T(tr.engagement.retour)}
        </Link>

        {/* Méta */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="tag-corail">{T(tr.engagement.financement)} : {projet.financement}</span>
          <span className="tag">{projet.periode}</span>
        </div>

        {/* Titre complet */}
        <h1 className="font-oswald uppercase text-2xl md:text-3xl leading-snug mb-10 max-w-3xl">
          {T(projet.titre)}
        </h1>

        {/* ── Contexte ─────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="font-oswald uppercase text-2xl mb-3">{T(tr.engagement.contexte)}</h2>
          <span className="barre-corail" />
          <p className="prose-site">{T(projet.contexte)}</p>
        </section>

        {/* ── Vision ───────────────────────────────────────────────── */}
        <section className="mb-14 bg-surface border border-black/8 p-8 rounded-sm">
          <h2 className="font-oswald uppercase text-2xl mb-3">{T(tr.engagement.vision)}</h2>
          <span className="barre-corail" />
          <blockquote className="font-bitter italic text-lg text-encre/85 leading-relaxed max-w-3xl">
            {T(projet.vision)}
          </blockquote>
        </section>

        {/* ── Partenaires ──────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="font-oswald uppercase text-2xl mb-3">{T(tr.engagement.partenaires)}</h2>
          <span className="barre-corail" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projet.partenaires.map((p, i) => (
              <div key={i} className="carte p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{p.drapeau}</span>
                  <div>
                    <p className="font-oswald text-sm uppercase tracking-wide leading-tight">{p.universite}</p>
                    <p className="text-xs text-corail">{T(p.pays)}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {p.personnes.map((pers, j) => (
                    <li key={j}>
                      <p className="text-sm font-semibold leading-snug">{pers.nom}</p>
                      <p className="text-xs text-encre/55 italic">{T(pers.role)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Objectifs ────────────────────────────────────────────── */}
        <section className="mb-14">
          <h2 className="font-oswald uppercase text-2xl mb-3">{T(tr.engagement.objectifs)}</h2>
          <span className="barre-corail" />
          <ol className="space-y-4 list-none">
            {T(projet.objectifs).map((obj, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="shrink-0 font-oswald text-corail text-lg w-7 leading-snug">
                  {i + 1}.
                </span>
                <p className="text-encre/80 leading-relaxed text-sm">{obj}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Mon rôle ─────────────────────────────────────────────── */}
        <section className="mb-14 border-l-2 border-corail pl-6">
          <h2 className="font-oswald uppercase text-xl mb-2">{T(tr.engagement.monRole)}</h2>
          <p className="prose-site text-sm">{T(projet.monRole)}</p>
        </section>

        {/* ── Photos ───────────────────────────────────────────────── */}
        {projet.images && projet.images.length > 0 && (
          <section className="mb-14">
            <h2 className="font-oswald uppercase text-2xl mb-3">Photos</h2>
            <span className="barre-corail" />
            <div className="grid gap-4 sm:grid-cols-2">
              {projet.images.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface">
                  <Image
                    src={img}
                    alt={`${T(projet.titre)} — photo ${i + 1}`}
                    fill
                    sizes="(max-width:640px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Documents ────────────────────────────────────────────── */}
        <section>
          <h2 className="font-oswald uppercase text-2xl mb-3">{T(tr.engagement.documents)}</h2>
          <span className="barre-corail" />
          {projet.documentsUrl ? (
            <a href={projet.documentsUrl} target="_blank" rel="noopener noreferrer" className="btn-corail">
              {T(tr.engagement.telecharger)}
            </a>
          ) : (
            <p className="text-sm text-encre/50 italic">
              {T({ fr: "Document disponible prochainement.", en: "Document available soon." })}
            </p>
          )}
        </section>

      </div>
    </>
  );
}
