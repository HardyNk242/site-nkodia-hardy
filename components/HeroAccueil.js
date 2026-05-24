"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { profil } from "@/data/site";

/**
 * Home-page hero
 *  • hero-bg2.jpg fills the full width without horizontal cropping
 *  • Photo and card start at the very top, filling 100 vh
 *  • Photo edges are diffused via CSS mask-image (no hard border)
 *  • Card opacity raised to 0.96 for legibility
 *  • SVG icons for ResearchGate and Google Scholar
 *  • Green accent (#1E7A40) throughout
 */
export default function HeroAccueil() {
  const { T } = useLang();

  const CARD_W = 400;    /* px — same for portrait and info box */
  const GREEN  = "#1E7A40";
  const GREEN_DK = "#155530";

  return (
    <section
      className="w-full relative overflow-visible"
      aria-label="Présentation — Dr. Nkodia Hardy"
      style={{ minHeight: "100vh" }}
    >
      {/* Side vignettes — rock texture fades into dark body bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(26,28,26,0.55) 0%, transparent 18%, transparent 82%, rgba(26,28,26,0.55) 100%)",
        }}
      />

      {/*
        items-start  → portrait + card are anchored at the very top
        items-stretch → both reach the same height
        justify-center → the pair is centred horizontally in the background
      */}
      <div className="relative z-10 w-full flex items-start justify-center">
        <div className="flex items-stretch justify-center">

          {/* ── Portrait — visible lg+, hidden below ─────────────────── */}
          <div
            className="hidden lg:block relative shrink-0"
            style={{
              width: CARD_W,
              minHeight: "100vh",
              /*
                mask-image:
                  top    → transparent 0 % → opaque at 6 %   (fade-in from top)
                  bottom → opaque at 88 %  → transparent 100 % (fade-out at bottom)
                  right  → opaque 0 %      → transparent 100 % (blend into card)
                  All three gradients intersect so only the fully-visible area shows.
              */
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 6%, black 88%, transparent 100%), " +
                "linear-gradient(to right,  black 0%, black 72%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 6%, black 88%, transparent 100%), " +
                "linear-gradient(to right,  black 0%, black 72%, transparent 100%)",
              WebkitMaskComposite: "destination-in",
              maskComposite: "intersect",
            }}
          >
            <Image
              src="/images/photo-profil-new.jpg"
              alt="Dr. Nkodia Hardy Medry Dieu-Veil"
              fill
              sizes={`${CARD_W}px`}
              className="object-cover object-top"
              priority
            />
          </div>

          {/* ── Info box — same width as portrait ────────────────────── */}
          <div
            className="flex flex-col justify-center px-8 py-10 relative z-20 w-full lg:w-auto lg:shrink-0"
            style={{
              width: CARD_W,
              minHeight: "100vh",
              background: "rgba(26, 28, 26, 0.96)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              marginBottom: -72,
            }}
          >
            {/* Green accent bar */}
            <span
              className="block w-10 h-[3px] mb-5"
              style={{ backgroundColor: GREEN }}
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
                backgroundColor: `${GREEN}55`,
              }}
            />

            {/* Biography */}
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

            {/* Profile links — SVG icons */}
            <div className="flex items-center gap-4">

              {/* ResearchGate */}
              <a
                href={profil.liens.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ResearchGate"
                className="flex items-center justify-center rounded-sm transition-all duration-150"
                style={{ width: 40, height: 40, background: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = `${GREEN}33`)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                <Image
                  src="/images/ResearchGate_icon_SVG.svg"
                  alt="ResearchGate"
                  width={26}
                  height={26}
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>

              {/* Google Scholar */}
              <a
                href={profil.liens.scholar}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="flex items-center justify-center rounded-sm transition-all duration-150"
                style={{ width: 40, height: 40, background: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = `${GREEN}33`)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                <Image
                  src="/images/Google_Scholar_logo.svg"
                  alt="Google Scholar"
                  width={26}
                  height={26}
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>

              {/* Contact — text link */}
              <a
                href={`mailto:${profil.liens.email}`}
                className="font-oswald uppercase tracking-wide text-xs transition-colors duration-150"
                style={{ color: "#A6A29C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A6A29C")}
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
