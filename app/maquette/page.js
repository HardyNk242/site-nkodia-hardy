/**
 * MAQUETTE — direction « Atlas tectonique contemporain », version corrigée.
 *
 * Page de travail : hors navigation, en noindex. À supprimer une fois la
 * direction tranchée (le dossier app/maquette/ entier).
 *
 * Composant serveur volontairement : pas de useLang, donc pas de "use client",
 * ce qui permet d'exporter `metadata` et d'interdire l'indexation.
 *
 * Les couleurs sont écrites en valeurs arbitraires Tailwind et NON ajoutées
 * à tailwind.config.js : le site en production n'est pas touché tant que la
 * direction n'est pas validée.
 */

import Image from "next/image";
import { Inter } from "next/font/google";
import { themesRecherche } from "@/data/site";
import { publications } from "@/data/publications";

/* Police de corps proposée, chargée pour que le rendu soit réel et non décrit. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "Maquette — Atlas tectonique contemporain",
  robots: { index: false, follow: false },
};

/* ── Jeton de couleur ────────────────────────────────────────────────── */
const IVOIRE = "#F3F0E9";
const ANTHRACITE = "#1E2422";
const VERT = "#244C43";
const OCRE_TEXTE = "#A85C24"; // texte et liens sur fond clair
const OCRE_VIF = "#C8793B"; // aplats et boutons uniquement
const SABLE = "#D8C2A6";
const GRIS = "#303633";

const palette = [
  { nom: "Ivoire minéral", hex: IVOIRE, usage: "Fond principal", ratio: "—", sur: "" },
  { nom: "Gris roche", hex: GRIS, usage: "Texte courant", ratio: "10,85", sur: "sur ivoire" },
  { nom: "Vert profond", hex: VERT, usage: "Sections foncées, titres", ratio: "8,43", sur: "sur ivoire" },
  { nom: "Ocre — texte", hex: OCRE_TEXTE, usage: "Liens et accents typographiques", ratio: "4,37", sur: "sur ivoire" },
  { nom: "Ocre — aplat", hex: OCRE_VIF, usage: "Boutons et aplats, jamais du texte sur ivoire", ratio: "2,95", sur: "insuffisant en texte" },
  { nom: "Sable", hex: SABLE, usage: "Remplissages et séparateurs, jamais du texte", ratio: "1,51", sur: "insuffisant en texte" },
  { nom: "Anthracite roche", hex: ANTHRACITE, usage: "Menu, pied de page", ratio: "—", sur: "" },
];

function compter(axe) {
  return publications.reduce(
    (n, b) => n + b.items.filter((it) => it.axes?.includes(axe)).length,
    0
  );
}

function Titre({ children, numero }) {
  return (
    <div className="mb-8">
      <span
        className="font-oswald uppercase text-xs tracking-[0.2em]"
        style={{ color: OCRE_TEXTE }}
      >
        {numero}
      </span>
      <h2 className="font-oswald uppercase text-3xl mt-1" style={{ color: VERT }}>
        {children}
      </h2>
      <span className="block w-14 h-1 mt-3" style={{ backgroundColor: OCRE_VIF }} />
    </div>
  );
}

export default function Maquette() {
  return (
    <div className={`${inter.variable}`} style={{ backgroundColor: IVOIRE, color: GRIS }}>
      {/* Bandeau de service */}
      <div
        className="px-5 py-3 text-center text-sm"
        style={{ backgroundColor: ANTHRACITE, color: SABLE }}
      >
        Page de travail — non référencée, absente du menu. À supprimer une fois la
        direction tranchée.
      </div>

      {/* ══════════════════ ÉCRAN D'OUVERTURE ══════════════════ */}
      <header className="relative overflow-hidden" style={{ backgroundColor: IVOIRE }}>
        {/* Tracé de failles en filigrane, très léger */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <g stroke={VERT} strokeWidth="1.2" fill="none" opacity="0.10">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d={`M-50 ${70 + i * 78} q150 -34 300 0 t300 0 t300 0 t300 0`}
              />
            ))}
            <path d="M760 -20 L640 520" strokeWidth="2.2" opacity="0.5" />
            <path d="M340 -20 L250 520" strokeWidth="2.2" opacity="0.5" />
          </g>
        </svg>

        {/* Colonne texte + citation à gauche, portrait à droite. Le portrait
            s'étire sur les deux rangées : il court du sommet du hero jusqu'au
            bas du bandeau de citation. Sur mobile la grille retombe sur une
            colonne (texte, portrait, citation), d'où le placement explicite
            en col-start / row-start pour md et au-delà. */}
        <div className="relative max-w-content mx-auto px-5 grid gap-x-12 md:grid-cols-[1.35fr_1fr] md:grid-rows-[1fr_auto]">
          <div className="py-16 md:py-24 md:col-start-1 md:row-start-1">
            <p
              className="font-oswald uppercase text-xs tracking-[0.22em] mb-5"
              style={{ color: OCRE_TEXTE }}
            >
              Afrique centrale · Asie de l&apos;Est · Géologie structurale
            </p>

            <h1
              className="font-oswald uppercase leading-[1.05] text-4xl md:text-6xl"
              style={{ color: VERT }}
            >
              Comprendre les failles.
              <br />
              Lire les contraintes.
              <br />
              <span style={{ color: OCRE_TEXTE }}>Réduire les risques.</span>
            </h1>

            <p
              className="mt-7 text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Géologue structuraliste. Enseignant-chercheur à l&apos;Université Marien
              Ngouabi de Brazzaville et ancien postdoctorant à l&apos;Université Nationale
              de Pukyong, en Corée du Sud. Mes travaux portent sur la tectonique, les
              paléocontraintes et les failles actives en Afrique centrale et en Asie de
              l&apos;Est.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#axes"
                className="font-oswald uppercase text-sm tracking-wide px-6 py-3 transition-opacity hover:opacity-85"
                style={{ backgroundColor: OCRE_VIF, color: ANTHRACITE }}
              >
                Découvrir mes recherches
              </a>
              <a
                href="#"
                className="font-oswald uppercase text-sm tracking-wide px-6 py-3 border-2 transition-colors"
                style={{ borderColor: VERT, color: VERT }}
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* Portrait pleine hauteur, sur les deux rangées */}
          <div className="relative min-h-[460px] md:min-h-0 md:col-start-2 md:row-start-1 md:row-span-2">
            <Image
              src="/images/photo-nkodia-hardy2.jpg"
              alt="Dr. Nkodia Hardy Medry Dieu-Veil"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-top"
              priority
            />
            {/* Fondu léger sur le bord gauche : évite l'effet d'image collée */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, ${IVOIRE} 0%, transparent 15%)`,
              }}
            />
          </div>

          {/* Citation — bas de la colonne de gauche, alignée sur le bas du portrait */}
          <blockquote
            className="font-bitter italic text-lg md:text-xl leading-relaxed px-8 py-10 md:col-start-1 md:row-start-2"
            style={{ backgroundColor: VERT, color: IVOIRE }}
          >
            « La roche garde la mémoire des forces qui l&apos;ont déformée : lire une
            structure, c&apos;est remonter le temps des contraintes. »
          </blockquote>
        </div>
      </header>

      {/* <div> et non <main> : le layout en fournit déjà un, et le HTML
          n'autorise qu'un seul élément main par document. */}
      <div className="max-w-content mx-auto px-5 py-20 space-y-24">
        {/* ══════════════════ PALETTE ══════════════════ */}
        <section>
          <Titre numero="01">Palette corrigée</Titre>
          <p className="max-w-3xl leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
            Un seul accent — l&apos;ocre — décliné en deux valeurs : une version foncée
            pour le texte, une version vive réservée aux aplats. Le vert profond passe
            des « couleurs principales » aux fonds de sections, pour éviter trois teintes
            en concurrence. Les rapports de contraste sont mesurés contre l&apos;ivoire.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {palette.map((c) => (
              <li key={c.nom} className="border" style={{ borderColor: "#00000018" }}>
                <div className="h-24" style={{ backgroundColor: c.hex }} />
                <div className="p-4">
                  <p className="font-oswald uppercase text-sm" style={{ color: VERT }}>
                    {c.nom}
                  </p>
                  <p className="text-xs mt-1 opacity-70">{c.hex}</p>
                  <p className="text-sm mt-2 leading-snug">{c.usage}</p>
                  {c.ratio !== "—" && (
                    <p
                      className="text-xs mt-2 font-oswald uppercase tracking-wide"
                      style={{
                        color: parseFloat(c.ratio.replace(",", ".")) >= 4.5 ? VERT : OCRE_TEXTE,
                      }}
                    >
                      {c.ratio}:1 — {c.sur}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ══════════════════ TYPOGRAPHIE ══════════════════ */}
        <section>
          <Titre numero="02">Typographie</Titre>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-oswald uppercase text-xs tracking-[0.2em] mb-3" style={{ color: OCRE_TEXTE }}>
                Titres — Oswald, condensé, conservé
              </p>
              <p className="font-oswald uppercase text-4xl leading-tight" style={{ color: VERT }}>
                Réactivation sismogène
              </p>
              <p className="font-oswald uppercase text-2xl mt-2" style={{ color: VERT }}>
                Faille du Pool
              </p>
              <p className="text-sm mt-4 leading-relaxed opacity-80">
                Le condensé reste, mais cantonné aux titres et aux métadonnées — plus au
                texte courant.
              </p>
            </div>
            <div>
              <p className="font-oswald uppercase text-xs tracking-[0.2em] mb-3" style={{ color: OCRE_TEXTE }}>
                Corps — Inter, réellement chargée sur cette page
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                L&apos;inversion des mécanismes au foyer permet de reconstituer le tenseur
                de contrainte réduit actuel, dont les orientations principales et le
                rapport de forme conditionnent la tendance au glissement des failles
                majeures.
              </p>
              <p className="text-base leading-relaxed mt-4 font-sans opacity-80">
                Le même paragraphe en Open Sans, la police actuelle du site, pour
                comparaison directe.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════ AXES ══════════════════ */}
        <section id="axes">
          <Titre numero="03">Axes de recherche</Titre>
          <p className="max-w-3xl leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
            Ce sont vos quatre axes réels, ceux de votre document de programme — et non la
            liste du brief, qui supprimait la géomorphologie et la néotectonique. Une
            phrase par carte, la figure, l&apos;effectif de publications, un lien.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2" role="list">
            {themesRecherche.map((t, i) => (
              <li
                key={i}
                className="flex flex-col border bg-white"
                style={{ borderColor: "#00000014" }}
              >
                <div className="relative aspect-[16/9]" style={{ backgroundColor: ANTHRACITE }}>
                  <Image
                    src={t.image}
                    alt={t.titre.fr}
                    fill
                    sizes="(max-width:640px) 100vw, 520px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span
                    className="font-oswald uppercase text-xs tracking-[0.2em]"
                    style={{ color: OCRE_TEXTE }}
                  >
                    Axe {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-oswald text-xl mt-1 leading-snug" style={{ color: VERT }}>
                    {t.titre.fr}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed flex-grow"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.resume.fr}
                  </p>
                  <a
                    href={`/recherches#axe-0${i + 1}`}
                    className="mt-5 pt-4 border-t font-oswald uppercase text-sm tracking-wide"
                    style={{ borderColor: "#00000014", color: OCRE_TEXTE }}
                  >
                    {compter(i + 1)} publications →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ══════════════════ PUBLICATION CONDENSÉE ══════════════════ */}
        <section>
          <Titre numero="04">Publication en page d&apos;accueil</Titre>
          <p className="max-w-3xl leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
            Version resserrée : figure, titre, revue et année, résultat principal, un
            bouton. Les résumés « En bref » restent sur la page Publications. Hauteur
            égalisée entre les trois cartes.
          </p>
          <article
            className="grid md:grid-cols-[300px_1fr] border bg-white"
            style={{ borderColor: "#00000014" }}
          >
            <div className="relative aspect-[4/3] md:aspect-auto" style={{ backgroundColor: ANTHRACITE }}>
              <Image
                src="/images/figure-pub-2026-korea-stress.png"
                alt="Carte du potentiel de glissement des failles coréennes"
                fill
                sizes="300px"
                className="object-contain"
              />
            </div>
            <div className="p-7">
              <div className="flex flex-wrap gap-2 mb-3">
                <span
                  className="font-oswald uppercase text-[11px] tracking-wide px-2 py-1"
                  style={{ backgroundColor: OCRE_VIF, color: ANTHRACITE }}
                >
                  Article
                </span>
                <span
                  className="font-oswald uppercase text-[11px] tracking-wide px-2 py-1 border"
                  style={{ borderColor: OCRE_TEXTE, color: OCRE_TEXTE }}
                >
                  Axe 04 — Aléa sismique
                </span>
              </div>
              <h3 className="font-oswald text-2xl leading-snug" style={{ color: VERT }}>
                Champ de contraintes actuel et structures sismogènes de la péninsule
                coréenne
              </h3>
              <p className="text-sm mt-2 opacity-75 font-oswald uppercase tracking-wide">
                Tectonophysics · 2026 · premier auteur
              </p>
              <p className="mt-4 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                Identifie les failles actives les plus susceptibles de rompre, par
                inversion de centaines de mécanismes au foyer et analyse de slip tendency.
              </p>
              <a
                href="https://doi.org/10.1016/j.tecto.2026.231261"
                className="inline-block mt-5 font-oswald uppercase text-sm tracking-wide px-5 py-2.5"
                style={{ backgroundColor: VERT, color: IVOIRE }}
              >
                Lire l&apos;article
              </a>
            </div>
          </article>
        </section>

        {/* ══════════════════ ARBITRAGES ══════════════════ */}
        <section>
          <Titre numero="05">Ce que j&apos;ai corrigé par rapport au brief</Titre>
          <ul className="space-y-5 max-w-3xl" role="list" style={{ fontFamily: "var(--font-inter)" }}>
            {[
              [
                "L'ocre du brief ne passe pas en texte",
                "#C8793B sur ivoire donne 2,95:1, sous le minimum WCAG même pour les grands titres. Les liens utilisent #A85C24 (4,37:1) ; l'ocre vif reste pour les aplats, avec du texte anthracite dessus (4,70:1) et jamais du blanc (3,36:1).",
              ],
              [
                "Une seule teinte d'accent",
                "Vert, ocre et sable en front simultané rendaient l'ensemble trouble. Le vert profond devient un fond de section, le sable un remplissage. L'ocre reste seul accent, comme le grès aujourd'hui.",
              ],
              [
                "Les axes du brief étaient faux",
                "La liste proposée supprimait la géomorphologie et la néotectonique, soit votre axe II et onze publications. Ce sont les quatre axes de votre document de programme qui sont repris.",
              ],
              [
                "La citation est conservée",
                "Réduite à une bande, pas supprimée. C'est la phrase la plus mémorable du site, exactement ce dont l'analyse comparative déplorait l'absence.",
              ],
              [
                "Les figures d'axes restent sombres",
                "Des planches foncées sur fond ivoire se lisent comme les planches d'un ouvrage de géologie. Si vous préférez, les quatre SVG se régénèrent en version claire en une commande.",
              ],
            ].map(([titre, corps]) => (
              <li key={titre} className="border-l-2 pl-5" style={{ borderColor: OCRE_VIF }}>
                <p className="font-oswald text-lg leading-snug" style={{ color: VERT }}>
                  {titre}
                </p>
                <p className="text-sm leading-relaxed mt-1">{corps}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed max-w-3xl opacity-75" style={{ fontFamily: "var(--font-inter)" }}>
            Maquette en français seulement : c&apos;est une page de travail. L&apos;implémentation
            réelle conserverait la parité FR/EN stricte du site, chaque chaîne passant par
            T() comme partout ailleurs.
          </p>
        </section>
      </div>

      {/* ══════════════════ PIED — reste sombre ══════════════════ */}
      <footer style={{ backgroundColor: ANTHRACITE, color: SABLE }}>
        <div className="max-w-content mx-auto px-5 py-14">
          <p className="font-oswald uppercase text-lg" style={{ color: IVOIRE }}>
            Dr. Nkodia Hardy
          </p>
          <span className="block w-10 h-px my-3" style={{ backgroundColor: OCRE_VIF }} />
          <p className="text-sm max-w-lg leading-relaxed">
            Le menu et le pied de page gardent l&apos;anthracite : environ 35 % de surfaces
            foncées, 65 % de fond clair.
          </p>
        </div>
      </footer>
    </div>
  );
}
