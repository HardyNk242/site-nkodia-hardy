"use client";

/**
 * Liste complete des publications, filtrable par axe de recherche.
 *
 * Rendue en bas de /recherches : les axes et les publications vivent
 * desormais sur une seule page. Les liens profonds #axe-0N et #hors-axes
 * restent valables et amenent le lecteur directement a la liste filtree.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { themesRecherche } from "@/data/site";
import { publications } from "@/data/publications";


/* Pastilles de type. Les couleurs Tailwind par defaut (ambre, violet,
   sarcelle) echouaient au contraste — blanc sur amber-500 ne donnait que
   2,15:1 — et sortaient de la palette. Toutes ramenees aux jetons du site,
   toutes >= 4,5:1. */
const couleurType = {
  Article: "bg-corail text-white",
  Communication: "bg-sombre text-encre-inv",
  Livre: "bg-vert text-white",
  Thèse: "bg-encre text-encre-inv",
  Mémoire: "bg-encre-lt text-white",
  "Jeu de données": "bg-ocre-vif text-sombre",
};

/** Puce de filtre — un axe, « toutes » ou « hors axes ». */
function Puce({ actif, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={actif}
      className={`font-oswald uppercase text-[11px] tracking-wide px-3 py-1.5 border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-corail ${
        actif
          ? "bg-corail text-white border-corail"
          : "border-corail/35 text-corail hover:bg-corail/15"
      }`}
    >
      {children}
    </button>
  );
}

export default function PublicationsParAxe() {
  const { T } = useLang();
  /* null = toutes · 1-4 = un axe · "hors" = travaux hors programme */
  const [axeActif, setAxeActif] = useState(null);

  /* Lien profond : /recherches#axe-03, ou clic sur une carte d'axe. */
  useEffect(() => {
    const lireHash = () => {
      const h = window.location.hash;
      const m = h.match(/^#axe-0?([1-9])$/);
      const cible = m ? Number(m[1]) : h === "#hors-axes" ? "hors" : null;
      setAxeActif(cible);
      /* #axe-0N ne designe aucun element du DOM : c'est donc a nous
         d'amener le lecteur jusqu'a la liste. */
      if (cible !== null) {
        document
          .getElementById("publications")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };
    lireHash();
    window.addEventListener("hashchange", lireHash);
    return () => window.removeEventListener("hashchange", lireHash);
  }, []);

  const choisir = (v) => {
    setAxeActif(v);
    const hash = v === null ? "" : v === "hors" ? "#hors-axes" : `#axe-0${v}`;
    window.history.replaceState(null, "", hash || window.location.pathname);
  };

  const correspond = (it, cible) =>
    cible === "hors" ? !it.axes?.length : it.axes?.includes(cible);

  const compte = (cible) =>
    publications.reduce(
      (n, b) => n + b.items.filter((it) => correspond(it, cible)).length,
      0
    );

  const total = publications.reduce((n, b) => n + b.items.length, 0);

  /* Le regroupement par année est conservé ; les années vidées disparaissent. */
  const blocs =
    axeActif === null
      ? publications
      : publications
          .map((b) => ({ ...b, items: b.items.filter((it) => correspond(it, axeActif)) }))
          .filter((b) => b.items.length > 0);

  const axeCourant = typeof axeActif === "number" ? themesRecherche[axeActif - 1] : null;

  return (
    <>
      <section
        id="publications"
        className="max-w-content mx-auto px-5 py-16 scroll-mt-24 border-t border-black/10"
      >
        <h2 className="titre-section">{T(tr.publications.hero)}</h2>
        <span className="barre-corail" />
        <p className="max-w-3xl text-encre/75 leading-relaxed mb-10">
          {T(tr.publications.sousTitre)}
        </p>
        {/* Filtre par axe de recherche */}
        <div className="mb-10">
          <ul className="flex flex-wrap gap-2" role="list">
            <li>
              <Puce actif={axeActif === null} onClick={() => choisir(null)}>
                {T({ fr: "Toutes", en: "All" })} ({total})
              </Puce>
            </li>
            {themesRecherche.map((t, i) => (
              <li key={i}>
                <Puce actif={axeActif === i + 1} onClick={() => choisir(i + 1)}>
                  {T(tr.recherches.axe)} {String(i + 1).padStart(2, "0")} —{" "}
                  {T(t.titreCourt)} ({compte(i + 1)})
                </Puce>
              </li>
            ))}
            <li>
              <Puce actif={axeActif === "hors"} onClick={() => choisir("hors")}>
                {T({ fr: "Hors axes", en: "Outside the programme" })} ({compte("hors")})
              </Puce>
            </li>
          </ul>

          {axeCourant && (
            <div className="mt-5 border-l-2 border-corail/40 pl-4 max-w-3xl">
              <p className="font-oswald text-lg leading-snug">{T(axeCourant.titre)}</p>
              <p className="text-sm text-encre/70 leading-relaxed mt-1">
                {T(axeCourant.resume)}
              </p>
              <a href="#axes" className="lien-corail text-sm mt-2 inline-block">
                {T({ fr: "Voir la fiche de l'axe", en: "See the theme card" })} ↑
              </a>
            </div>
          )}
        </div>

        {blocs.map((bloc) => (
          <div key={bloc.annee} className="mb-12">
            <h3 className="font-oswald text-5xl text-corail font-bold">{bloc.annee}</h3>
            <span className="block w-full h-px bg-black/10 my-5" />
            <ul className="space-y-5">
              {bloc.items.map((it, i) => (
                <li key={i} className="carte overflow-hidden flex flex-col">
                  {/* Carte enrichie : image + résumé public */}
                  {it.image && (
                    <div className="relative w-full" style={{ aspectRatio: "16/7", maxHeight: 320 }}>
                      <Image
                        src={it.image}
                        alt={it.ref.slice(0, 80)}
                        fill
                        sizes="(max-width:768px) 100vw, 900px"
                        className="object-contain object-center bg-sombre"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col gap-2 shrink-0">
                      <span
                        className={`self-start font-oswald uppercase text-xs tracking-wide px-3 py-1 ${
                          couleurType[it.type] || "bg-sombre text-encre"
                        }`}
                      >
                        {it.type}
                      </span>
                      {it.badge && (
                        <span className="self-start font-oswald uppercase text-xs tracking-wide px-3 py-1 bg-ocre-vif text-sombre">
                          {it.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-encre/85 leading-relaxed">{it.ref}</p>
                      {it.doi && (
                        <a
                          href={`https://doi.org/${it.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lien-corail text-sm mt-2 inline-block"
                        >
                          DOI : {it.doi} →
                        </a>
                      )}
                      {it.doiAConfirmer && (
                        <span className="block text-sm mt-2 text-encre/50 italic">
                          {T(tr.publications.doiConfirmer)} {it.doiAConfirmer}
                          {it.noteUrl && (
                            <>
                              {" — "}
                              <a href={it.noteUrl} target="_blank" rel="noopener noreferrer" className="lien-corail">
                                {T(tr.publications.voirSource)}
                              </a>
                            </>
                          )}
                        </span>
                      )}
                      {!it.doi && !it.doiAConfirmer && it.noteUrl && (
                        <a href={it.noteUrl} target="_blank" rel="noopener noreferrer" className="lien-corail text-sm mt-2 inline-block">
                          {T(tr.publications.voirSource)}
                        </a>
                      )}
                      {/* Travaux hors programme : étiquette neutre, pas un 5ᵉ axe */}
                      {it.categorie && (
                        <span className="inline-block mt-3 font-oswald uppercase text-[11px] tracking-wide px-2 py-1 border border-encre-lt/35 text-encre-lt">
                          {T(it.categorie)}
                        </span>
                      )}

                      {/* Rattachement aux axes du programme de recherche */}
                      {it.axes?.length > 0 && (
                        <ul className="flex flex-wrap gap-2 mt-3" role="list">
                          {it.axes.map((n) => {
                            const axe = themesRecherche[n - 1];
                            if (!axe) return null;
                            return (
                              <li key={n}>
                                <button
                                  type="button"
                                  title={T(axe.titre)}
                                  onClick={() => {
                                    choisir(n);
                                    document
                                      .getElementById("publications")
                                      ?.scrollIntoView({ behavior: "smooth" });
                                  }}
                                  className="inline-block font-oswald uppercase text-[11px] tracking-wide px-2 py-1 border border-corail/35 text-corail hover:bg-corail hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-corail"
                                >
                                  {T(tr.recherches.axe)} {String(n).padStart(2, "0")} —{" "}
                                  {T(axe.titreCourt)}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {/* Résumé grand public */}
                      {it.resumePublic && (
                        <div className="mt-4 border-l-2 border-corail/40 pl-4">
                          <p className="text-xs font-oswald uppercase tracking-wide text-corail mb-1">
                            {T({ fr: "En bref", en: "Plain-language summary" })}
                          </p>
                          <p className="text-sm text-encre/75 leading-relaxed font-bitter italic">
                            {T(it.resumePublic)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-sm text-encre/55 font-bitter italic">
          {T(tr.publications.listeComplete)}{" "}
          <a href="https://www.researchgate.net/profile/Hardy-Medry-Dieu-Veil-Nkodia" target="_blank" rel="noopener noreferrer" className="lien-corail">ResearchGate</a>{" "}
          {T({ fr: "et", en: "and" })}{" "}
          <a href="https://scholar.google.com/citations?user=gYOI-FkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="lien-corail">Google Scholar</a>.
        </p>
      </section>
    </>
  );
}
