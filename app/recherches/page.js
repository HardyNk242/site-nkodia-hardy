"use client";

import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { themesRecherche } from "@/data/site";

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
              <Placeholder label={T(t.titre)} ratio="aspect-[16/9]" />
              <div className="p-6">
                <span className="font-oswald text-corail text-sm">
                  {T(tr.recherches.axe)} {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-oswald text-xl mt-1 leading-snug">{T(t.titre)}</h3>
                <p className="text-encre/75 leading-relaxed mt-3">{T(t.resume)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-encre text-white p-8 md:p-12">
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
