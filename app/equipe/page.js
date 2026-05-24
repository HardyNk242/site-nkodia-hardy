"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { equipe } from "@/data/site";

export default function Equipe() {
  const { T } = useLang();

  return (
    <>
      <Hero titre={T(tr.equipe.hero)} sousTitre={T(tr.equipe.sousTitre)} />
      <section className="max-w-content mx-auto px-5 py-16">
        <h2 className="titre-section">{T(tr.equipe.collaborateurs)}</h2>
        <span className="barre-corail" />
        <p className="max-w-3xl text-encre/75 leading-relaxed mb-10">
          {T(tr.equipe.bio)}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((m, i) => (
            <article key={i} className="carte overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.nom}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Placeholder label="Portrait" ratio="aspect-square" />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-oswald text-lg leading-snug">{m.nom}</h3>
                <p className="text-corail text-sm font-semibold mt-1">{T(m.role)}</p>
                <p className="text-encre/60 text-sm mt-1">{m.affiliation}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-l-4 border-corail bg-surface p-6">
          <p className="font-bitter italic text-lg text-encre/80">
            {T(tr.equipe.invite)}
          </p>
          <a href="mailto:hardy.nkodia@umng.cg" className="lien-corail mt-3 inline-block">
            {T(tr.equipe.contact)}
          </a>
        </div>
      </section>
    </>
  );
}
