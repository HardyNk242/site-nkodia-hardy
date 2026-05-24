"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { profil } from "@/data/site";

/**
 * Home-page hero:
 *  • hero-bg2.jpg fills the full banner width without cropping
 *    (backgroundSize: "100% auto" → shows the whole horizontal image)
 *  • Portrait photo floats on the left of the composition
 *  • Dark semi-transparent info box on the right (dark rock palette)
 *  • Info box has a slight negative bottom margin to overlap the next section
 */
export default function HeroAccueil() {
  const { T } = useLang();

  return (
    <section
      className="w-full relative overflow-visible"
      aria-label="Présentation — Dr. Nkodia Hardy"
      style={{
        backgroundColor: "#1A1C1A",
        backgroundImage: "url(/images/hero-bg2.jpg)",
        backgroundSize: "100% auto",   /* full width, no horizontal crop */
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        minHeight: 620,
      }}
    >
      {/* Subtle side vignettes so rock texture fades into the dark body bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(26,28,26,0.55) 0%, transparent 18%, transparent 82%, rgba(26,28,26,0.55) 100%)",
        }}
      />

      {/* ── Two-column composition ────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-5">
        <div className="flex items-end">

          {/* ── Portrait ── hidden on mobile, visible lg+ */}
          <div
            className="hidden lg:block relative shrink-0"
            style={{ width: 480, height: 640 }}
          >
            <Image
              src="/images/photo-profil-new.jpg"
              alt="Dr. Nkodia Hardy Medry Dieu-Veil"
              fill
              sizes="480px"
              className="object-cover object-top"
              priority
            />
            {/* Right edge fades into the info box */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(42,43,42,0.92))",
              }}
            />
          </div>

          {/* ── Info box ───────────────────────────────────────────────── */}
          <div
            className="flex flex-col justify-center px-8 py-10 w-full lg:w-auto lg:flex-1 relative z-20"
            style={{
              maxWidth: 400,
              minHeight: 580,
              background: "rgba(42, 43, 42, 0.90)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              marginBottom: -72,   /* overlaps the next section */
            }}
          >
            {/* Sandstone accent bar */}
            <span
              className="block w-10 h-[3px] mb-5"
              style={{ backgroundColor: "#C2A88D" }}
              aria-hidden="true"
            />

            {/* Name */}
            <h1
              className="font-oswald uppercase font-bold leading-tight"
              style={{ fontSize: 24, color: "#F4F1ED" }}
            >
              Dr. Hardy Nkodia
            </h1>

            {/* Professional title */}
            <p
              className="font-oswald uppercase tracking-widest mt-1.5 leading-snug"
              style={{ fontSize: 11, color: "#A6A29C" }}
            >
              {T(profil.titre)}
            </p>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="mt-5 mb-5"
              style={{
                width: "100%",
                maxWidth: 300,
                height: 1,
                backgroundColor: "rgba(194,168,141,0.35)",
              }}
            />

            {/* Biography — 3 short paragraphs */}
            <div
              className="space-y-3 font-sans text-justify"
              style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(244,241,237,0.82)" }}
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

            {/* Second divider */}
            <div
              aria-hidden="true"
              className="mt-5 mb-5"
              style={{ height: 1, backgroundColor: "rgba(244,241,237,0.10)" }}
            />

            {/* Social / profile links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={profil.liens.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-oswald uppercase tracking-wide text-xs px-4 py-2 transition-colors"
                style={{ background: "#C2A88D", color: "#1A1C1A" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#A8906B")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C2A88D")}
              >
                ResearchGate
              </a>
              <a
                href={profil.liens.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-oswald uppercase tracking-wide text-xs px-4 py-2 transition-colors"
                style={{
                  border: "1px solid rgba(194,168,141,0.50)",
                  color: "#F4F1ED",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C2A88D";
                  e.currentTarget.style.color = "#C2A88D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(194,168,141,0.50)";
                  e.currentTarget.style.color = "#F4F1ED";
                }}
              >
                Google Scholar
              </a>
              <a
                href={`mailto:${profil.liens.email}`}
                className="inline-flex items-center font-oswald uppercase tracking-wide text-xs px-4 py-2 transition-colors"
                style={{
                  border: "1px solid rgba(244,241,237,0.18)",
                  color: "#A6A29C",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(194,168,141,0.40)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(244,241,237,0.18)")}
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
