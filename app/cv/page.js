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
  const { T, lang } = useLang();
  /* Version longue (3 p.) et version courte (1 p.), dans la langue affichée.
     Suffixe _web : variantes épurées, sans date de naissance, sans téléphone
     et sans les coordonnées des référents. Sources dans cv-sources/. */
  const suffixe = lang === "en" ? "EN" : "FR";
  const cvLong = `/cv/CV_Nkodia_Hardy_${suffixe}_web.pdf`;
  const cvCourt = `/cv/CV_Nkodia_Hardy_${suffixe}_court_web.pdf`;

  return (
    <>
      <Hero
        titre={T(tr.cv.hero)}
        sousTitre={T(profil.titre)}
        image="/images/bannieres/cv.svg"
      />
      <section className="max-w-content mx-auto px-5 py-16 grid gap-12 md:grid-cols-[260px_1fr]">
        <aside>
          <div className="group overflow-hidden rounded-sm shadow-md">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/photo-nkodia-hardy2.jpg"
                alt="Dr. Nkodia Hardy Medry Dieu-Veil"
                fill
                sizes="260px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
          {/* Téléchargement du CV — version longue en premier */}
          <div className="mt-5 bg-surface p-5 border border-black/8">
            <p className="font-oswald uppercase text-sm tracking-wide text-corail mb-3">
              {T({ fr: "Télécharger le CV", en: "Download the CV" })}
            </p>
            <a href={cvLong} download className="btn-corail w-full">
              {T({ fr: "Version complète (PDF)", en: "Full version (PDF)" })}
            </a>
            <a
              href={cvCourt}
              download
              className="lien-corail text-sm mt-3 inline-block"
            >
              {T({ fr: "Version courte, 1 page", en: "Short version, 1 page" })} ↓
            </a>
          </div>

          <div className="mt-5 bg-surface p-5 border border-black/8">
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
                    <p className="font-semibold leading-snug">{T(e.intitule)}</p>
                    <p className="text-sm text-encre/60">{T(e.lieu)}</p>
                    {e.mention && (
                      <p className="text-sm text-corail/75 italic mt-0.5">{T(e.mention)}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Bloc>

          <Bloc titre={T(tr.cv.competences)}>
            <div className="flex flex-wrap gap-2">
              {cv.competences.map((c, i) => (
                <span key={i} className="bg-surface border border-black/10 px-3 py-1.5 text-sm">{T(c)}</span>
              ))}
            </div>
          </Bloc>

          <Bloc titre={T(tr.cv.experience)}>
            <ul className="space-y-6">
              {cv.experience.map((x, i) => (
                <li key={i} className="border-l-2 border-corail pl-4">
                  <p className="font-oswald uppercase text-xs tracking-wide text-encre/50">{x.periode}</p>
                  <p className="font-semibold leading-snug mt-0.5">{T(x.poste)}</p>
                  <p className="text-sm text-encre/60">
                    {x.institution}{x.lieu && ` — ${T(x.lieu)}`}
                  </p>
                  {x.details && x.details.length > 0 && (
                    <ul className="mt-1.5 space-y-0.5 list-disc pl-4">
                      {x.details.map((d, j) => (
                        <li key={j} className="text-sm text-encre/75">{T(d)}</li>
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
                <li key={i} className="leading-relaxed">{T(d)}</li>
              ))}
            </ul>
          </Bloc>
        </div>
      </section>
    </>
  );
}
