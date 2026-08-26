"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { themesRecherche } from "@/data/site";
import { publications } from "@/data/publications";

/** Nombre de publications rattachées à un axe (1-4). */
function compterPublications(axe) {
  return publications.reduce(
    (n, bloc) => n + bloc.items.filter((it) => it.axes?.includes(axe)).length,
    0
  );
}

export default function Recherches() {
  const { T } = useLang();

  return (
    <>
      <Hero titre={T(tr.recherches.hero)} sousTitre={T(tr.recherches.sousTitre)} />
      <section className="max-w-content mx-auto px-5 py-16">
        <h2 className="titre-section">{T(tr.recherches.thematiques)}</h2>
        <span className="barre-corail" />
        <p className="max-w-3xl text-encre/75 leading-relaxed mb-10">
          {T(tr.recherches.bio)}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {themesRecherche.map((t, i) => (
            <article key={i} className="carte overflow-hidden flex flex-col">
              {/* Schéma de l'axe — SVG, servi tel quel (l'optimiseur next/image
                  ne traite pas les SVG sans dangerouslyAllowSVG) */}
              <div className="relative w-full aspect-[16/9] bg-sombre">
                <Image
                  src={t.image}
                  alt={T(t.titre)}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                  unoptimized
                />
                <span className="absolute bottom-3 left-4 font-oswald uppercase text-xs tracking-[0.18em] text-corail">
                  {T(tr.recherches.axe)} {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-oswald text-xl leading-snug">{T(t.titre)}</h3>
                <p className="text-encre/75 leading-relaxed mt-3">{T(t.resume)}</p>

                {/* Sub-themes A / B / C — the numbered, scannable breakdown */}
                {t.sousThemes?.length > 0 && (
                  <ul className="mt-6 pt-5 border-t border-white/8 space-y-4" role="list">
                    {t.sousThemes.map((st) => (
                      <li key={st.lettre} className="flex gap-3">
                        <span
                          className="font-oswald text-corail text-sm shrink-0 leading-6"
                          aria-hidden="true"
                        >
                          {st.lettre}
                        </span>
                        <div>
                          <p className="font-oswald text-encre text-base leading-snug">
                            {T(st.titre)}
                          </p>
                          <p className="text-encre-lt text-sm leading-relaxed mt-1">
                            {T(st.detail)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Vers les publications de cet axe */}
                <a
                  href={`/publications#axe-0${i + 1}`}
                  className="mt-auto pt-5 border-t border-white/8 font-oswald uppercase text-sm tracking-wide text-corail hover:text-encre transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-corail"
                >
                  {compterPublications(i + 1)}{" "}
                  {T({ fr: "publications rattachées", en: "linked publications" })} →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-sombre text-encre p-8 md:p-12 border border-white/8">
          <h3 className="font-oswald uppercase text-2xl">{T(tr.recherches.terrains)}</h3>
          <span className="block w-16 h-1 bg-corail mt-3 mb-6" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              [T(tr.recherches.terrain1n), T(tr.recherches.terrain1d)],
              [T(tr.recherches.terrain2n), T(tr.recherches.terrain2d)],
              [T(tr.recherches.terrain3n), T(tr.recherches.terrain3d)],
            ].map(([name, desc]) => (
              <div key={name}>
                <p className="font-oswald uppercase text-corail">{name}</p>
                <p className="text-white/75 text-sm mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
