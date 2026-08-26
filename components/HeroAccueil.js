"use client";

/**
 * Écran d'ouverture de la page d'accueil — direction « Atlas tectonique ».
 *
 * Fond ivoire avec un filigrane de strates et de failles, portrait à droite
 * courant du sommet jusqu'au bas du bandeau de citation, accroche vulgarisée
 * et deux appels à l'action.
 *
 * Toutes les couleurs passent par les jetons Tailwind : aucun hexadécimal en
 * dur, pour que la palette reste pilotée depuis tailwind.config.js.
 */

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { profil } from "@/data/site";

export default function HeroAccueil() {
  const { T, lang } = useLang();
  const cv =
    lang === "en" ? "/cv/CV_Nkodia_Hardy_EN_web.pdf" : "/cv/CV_Nkodia_Hardy_FR_web.pdf";

  return (
    <header className="relative overflow-hidden bg-clair">
      {/* Filigrane : strates plissées recoupées par deux failles */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 560"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <g stroke="currentColor" fill="none" className="text-vert" opacity="0.10">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path
              key={i}
              strokeWidth="1.2"
              d={`M-60 ${60 + i * 80} q150 -36 300 0 t300 0 t300 0 t300 0`}
            />
          ))}
          <path d="M770 -20 L650 580" strokeWidth="2.4" opacity="0.55" />
          <path d="M330 -20 L240 580" strokeWidth="2.4" opacity="0.55" />
        </g>
      </svg>

      {/* Colonne texte + citation à gauche, portrait à droite sur les deux
          rangées. Sur mobile : texte, portrait, citation. */}
      <div className="relative max-w-content mx-auto px-5 grid gap-x-12 md:grid-cols-[1.35fr_1fr] md:grid-rows-[1fr_auto]">
        <div className="py-16 md:py-24 md:col-start-1 md:row-start-1">
          <p className="font-oswald uppercase text-xs tracking-[0.22em] text-corail mb-5">
            {T({
              fr: "Afrique centrale · Asie de l'Est · Géologie structurale",
              en: "Central Africa · East Asia · Structural geology",
            })}
          </p>

          <h1 className="font-oswald uppercase leading-[1.05] text-4xl md:text-6xl text-vert">
            {T({ fr: "Comprendre les failles.", en: "Understand the faults." })}
            <br />
            {T({ fr: "Lire les contraintes.", en: "Read the stresses." })}
            <br />
            <span className="text-corail">
              {T({ fr: "Réduire les risques.", en: "Reduce the risk." })}
            </span>
          </h1>

          <p className="mt-7 text-lg leading-relaxed max-w-xl text-encre">
            {T({
              fr: "Géologue structuraliste. Enseignant-chercheur à l'Université Marien Ngouabi de Brazzaville et ancien postdoctorant à l'Université Nationale de Pukyong, en Corée du Sud. Mes travaux portent sur la tectonique, les paléocontraintes et les failles actives en Afrique centrale et en Asie de l'Est.",
              en: "Structural geologist. Lecturer-researcher at Marien Ngouabi University in Brazzaville and former postdoctoral researcher at Pukyong National University, South Korea. My work addresses tectonics, palaeostress and active faults in Central Africa and East Asia.",
            })}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/recherches" className="btn-corail">
              {T({ fr: "Découvrir mes recherches", en: "Explore my research" })}
            </Link>
            <a href={cv} download className="btn-contour">
              {T({ fr: "Télécharger mon CV", en: "Download my CV" })}
            </a>
          </div>
        </div>

        {/* Portrait pleine hauteur */}
        <div className="relative min-h-[460px] md:min-h-0 md:col-start-2 md:row-start-1 md:row-span-2">
          <Image
            src="/images/photo-nkodia-hardy2.jpg"
            alt={profil.nom}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover object-top"
            priority
          />
          {/* Fondu sur le bord gauche : évite l'effet d'image collée */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #F3F0E9 0%, transparent 15%)",
            }}
          />
        </div>

        {/* Citation — bas de la colonne gauche, alignée sur le bas du portrait */}
        <blockquote className="font-bitter italic text-lg md:text-xl leading-relaxed px-8 py-10 bg-vert text-encre-inv md:col-start-1 md:row-start-2">
          {T(profil.citation)}
        </blockquote>
      </div>
    </header>
  );
}
