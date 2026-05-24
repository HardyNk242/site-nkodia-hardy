"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { profil, cv } from "@/data/site";

function Bloc({ titre, children }) {
  return (
    <div className="mb-12">
      <h2 className="font-oswald uppercase text-2xl">{titre}</h2>
      <span className="barre-corail" />
      {children}
    </div>
  );
}

export default function CV() {
  const { T } = useLang();

  return (
    <>
      <Hero titre={T(tr.cv.hero)} sousTitre={T(profil.titre)} />
      <section className="max-w-content mx-auto px-5 py-16 grid gap-12 md:grid-cols-[260px_1fr]">
        <aside>
          <div className="group overflow-hidden rounded-sm shadow-md">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/photo-profil-new.jpg"
                alt="Dr. Nkodia Hardy Medry Dieu-Veil"
                fill
                sizes="260px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
          <div className="mt-5 bg-surface p-5 border border-white/8">
            <p className="font-oswald uppercase text-sm tracking-wide text-corail mb-2">{T(tr.cv.contact)}</p>
            <p className="text-sm text-encre/75 leading-relaxed">{cv.infos}</p>
            <p className="text-sm mt-2 text-encre/75">{T(profil.institution)}</p>
            <a href={`mailto:${profil.liens.email}`} className="lien-corail text-sm mt-2 inline-block">
              {profil.liens.email}
            </a>
            <div className="mt-3 flex gap-3">
              <a href={profil.liens.researchgate} target="_blank" rel="noopener noreferrer" className="lien-corail text-sm">ResearchGate →</a>
              <a href={profil.liens.scholar} target="_blank" rel="noopener noreferrer" className="lien-corail text-sm">Scholar →</a>
            </div>
          </div>
          <a href="/cv/cv-nkodia-hardy.pdf" className="btn-corail w-full mt-4">
            {T(tr.cv.telecharger)}
          </a>
          <p className="text-xs text-encre/50 mt-2 font-bitter italic">
            Fichier PDF à déposer dans /public/cv/.
          </p>
        </aside>

        <div>
          <Bloc titre={T(tr.cv.profil)}>
            <p className="text-encre/80 leading-relaxed">{T(cv.profil)}</p>
          </Bloc>

          <Bloc titre={T(tr.cv.education)}>
            <ul className="space-y-5">
              {cv.education.map((e, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 font-oswald uppercase text-corail text-sm w-36 leading-snug">
                    {e.periode}
                  </span>
                  <div>
                    <p className="font-semibold leading-snug">{e.intitule}</p>
                    <p className="text-sm text-encre/60">{e.lieu}</p>
                    {e.mention && (
                      <p className="text-sm text-corail/75 italic mt-0.5">{e.mention}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Bloc>

          <Bloc titre={T(tr.cv.competences)}>
            <div className="flex flex-wrap gap-2">
              {cv.competences.map((c, i) => (
                <span key={i} className="bg-surface border border-white/10 px-3 py-1.5 text-sm">{c}</span>
              ))}
            </div>
          </Bloc>

          <Bloc titre={T(tr.cv.experience)}>
            <ul className="space-y-6">
              {cv.experience.map((x, i) => (
                <li key={i} className="border-l-2 border-corail pl-4">
                  <p className="font-oswald uppercase text-xs tracking-wide text-encre/50">{x.periode}</p>
                  <p className="font-semibold leading-snug mt-0.5">{x.poste}</p>
                  <p className="text-sm text-encre/60">
                    {x.institution}{x.lieu && ` — ${x.lieu}`}
                  </p>
                  {x.details && x.details.length > 0 && (
                    <ul className="mt-1.5 space-y-0.5 list-disc pl-4">
                      {x.details.map((d, j) => (
                        <li key={j} className="text-sm text-encre/75">{d}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Bloc>

          <Bloc titre={T(tr.cv.distinctions)}>
            <ul className="space-y-3 list-disc pl-5 text-encre/80">
              {cv.distinctions.map((d, i) => (
                <li key={i} className="leading-relaxed">{d}</li>
              ))}
            </ul>
          </Bloc>
        </div>
      </section>
    </>
  );
}
