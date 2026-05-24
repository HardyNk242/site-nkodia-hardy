"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { profil } from "@/data/site";

export default function HeroAccueil() {
  const { T } = useLang();

  return (
    <section
      className="w-full relative overflow-visible"
      aria-label="Présentation — Dr. Nkodia Hardy"
      style={{
        backgroundImage:
          "linear-gradient(rgba(6,18,10,0.46), rgba(6,18,10,0.60)), url(/images/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        minHeight: 560,
      }}
    >
      {/* ── Two-column centred grid (max 980 px) ─────────────────────── */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-5">
        <div className="flex items-end justify-start">

          {/* LEFT — Portrait (visible lg+) */}
          <div
            className="hidden lg:block relative shrink-0"
            style={{ width: 560, height: 650 }}
          >
            <Image
              src="/images/photo-profil-new.jpg"
              alt="Dr. Nkodia Hardy Medry Dieu-Veil"
              fill
              sizes="560px"
              className="object-cover object-top"
              priority
            />
            {/* Right-edge fade → blends into info box */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(6,18,10,0.88))",
              }}
            />
          </div>

          {/* RIGHT — Info box */}
          <div
            className="flex flex-col justify-center px-8 py-10 w-full lg:w-[380px] lg:shrink-0 relative z-20"
            style={{
              minHeight: 560,
              background: "rgba(6, 18, 10, 0.80)",
              backdropFilter: "blur(4px)",
              marginBottom: -72,
            }}
          >
            {/* Green accent bar */}
            <span
              className="block w-10 h-[3px] bg-corail mb-5"
              aria-hidden="true"
            />

            {/* Name */}
            <h1
              className="font-oswald uppercase text-white font-bold leading-tight"
              style={{ fontSize: 24 }}
            >
              Dr. Hardy Nkodia
            </h1>

            {/* Professional title */}
            <p
              className="font-oswald text-white/65 uppercase tracking-widest mt-1.5 leading-snug"
              style={{ fontSize: 11 }}
            >
              {T(profil.titre)}
            </p>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="mt-5 mb-5"
              style={{
                width: "100%",
                maxWidth: 321,
                height: 1,
                background: "rgba(30,122,64,0.55)",
              }}
            />

            {/* Biography */}
            <div
              className="space-y-3 font-sans text-justify"
              style={{
                fontSize: 13,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              <p>
                {T({
                  fr: "Bonjour ! Je suis géologue structuraliste, enseignant-chercheur à l'Université Marien Ngouabi de Brazzaville et ancien postdoctorant à l'Université Nationale de Pukyong (Busan, Corée du Sud).",
                  en: "Hello! I am a structural geologist, lecturer-researcher at Marien Ngouabi University in Brazzaville, and former postdoctoral researcher at Pukyong National University (Busan, South Korea).",
                })}
              </p>
              <p>
                {T({
                  fr: "Mes travaux portent sur la cinématique des failles, l'inversion des contraintes tectoniques et la déformation cassante de la croûte continentale en Afrique centrale et en Asie de l'Est.",
                  en: "My research focuses on fault kinematics, tectonic stress inversion, and brittle deformation of the continental crust in Central Africa and East Asia.",
                })}
              </p>
              <p>
                {T({
                  fr: "Fondateur de l'association Kongo Science, je m'engage pour le renforcement des capacités scientifiques sur le continent africain.",
                  en: "As founder of the Kongo Science association, I am committed to building scientific capacity across the African continent.",
                })}
              </p>
            </div>

            {/* Second separator */}
            <div
              aria-hidden="true"
              className="mt-5 mb-5"
              style={{ height: 1, background: "rgba(255,255,255,0.14)" }}
            />

            {/* Social / profile links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={profil.liens.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-corail text-xs px-4 py-2"
              >
                ResearchGate
              </a>
              <a
                href={profil.liens.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white/30 text-white/85 font-oswald uppercase tracking-wide text-xs px-4 py-2 transition hover:bg-white/10 hover:border-white/70"
              >
                Google Scholar
              </a>
              <a
                href={`mailto:${profil.liens.email}`}
                className="inline-flex items-center border border-white/20 text-white/70 font-oswald uppercase tracking-wide text-xs px-4 py-2 transition hover:bg-white/10 hover:border-white/50"
              >
                {T({ fr: "Contact", en: "Contact" })}
              </a>
            </div>
          </div>
          {/* ── end info box ── */}
        </div>
      </div>
    </section>
  );
}
