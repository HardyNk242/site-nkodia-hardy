"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { courses } from "@/data/courses";

export default function CoursBibliotheque() {
  const { T } = useLang();

  return (
    <>
      <Hero titre={T(tr.cours.hero)} sousTitre={T(tr.cours.sousTitre)} />
      <section className="max-w-content mx-auto px-5 py-16">
        <h2 className="titre-section">
          {T({ fr: "Cours disponibles", en: "Available courses" })}
        </h2>
        <span className="barre-corail" />
        <p className="max-w-3xl text-encre/75 leading-relaxed mb-10">
          {T({
            fr: "Sélectionnez un cours pour accéder à son polycopié complet, consultable en ligne et téléchargeable, ainsi qu'à ses quiz d'auto-évaluation.",
            en: "Select a course to access its complete notes, available online and for download, along with its self-assessment quizzes.",
          })}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((c) => (
            <Link
              key={c.slug}
              href={`/cours/${c.slug}`}
              className="carte group flex flex-col overflow-hidden"
            >
              <div className="placeholder-roche aspect-[16/7] flex items-center justify-center relative">
                <span className="font-oswald text-white text-6xl font-bold tracking-wider drop-shadow">
                  {c.sigle}
                </span>
                <span className="absolute bottom-3 right-4 font-oswald uppercase text-white/85 text-xs tracking-[0.18em]">
                  {c.niveau}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-oswald text-2xl leading-snug group-hover:text-corail transition">
                  {c.titre}
                </h3>
                <p className="text-encre/75 leading-relaxed mt-2 flex-grow">
                  {c.resume}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xs uppercase tracking-wide text-encre/50 font-oswald">
                    {c.sections.length} {c.labelSection.toLowerCase()}s · quiz
                  </span>
                  <span className="lien-corail text-sm">{T(tr.cours.ouvrir)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
