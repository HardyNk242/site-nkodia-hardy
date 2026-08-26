"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { presseArticles, videos } from "@/data/vulgarisation";

function SectionTitre({ titre }) {
  return (
    <>
      <h2 className="titre-section">{titre}</h2>
      <span className="barre-corail" />
    </>
  );
}

function YoutubeEmbed({ src, titre }) {
  return (
    <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-sombre">
      <iframe
        src={src}
        title={titre}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  );
}

export default function Vulgarisation() {
  const { T } = useLang();

  return (
    <>
      <Hero
        titre={T(tr.vulgarisation.hero)}
        sousTitre={T(tr.vulgarisation.sousTitre)}
        image="/images/bannieres/vulgarisation.svg"
      />

      {/* ── SECTION 1 — PRESSE ──────────────────────────────────────── */}
      <section id="presse" className="bg-clair">
        <div className="max-w-content mx-auto px-5 py-16">
          <SectionTitre titre={T(tr.vulgarisation.presse)} />
          <div className="grid gap-6 md:grid-cols-2">
            {presseArticles.map((art, i) => (
              <article key={i} className="carte flex flex-col group overflow-hidden">
                {art.image && (
                  <div className="relative h-40 overflow-hidden bg-sombre">
                    <Image
                      src={art.image}
                      alt={T(art.titre)}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs font-oswald uppercase tracking-wide text-corail mb-2">
                    {art.media} — {art.date}
                  </p>
                  <h3 className="font-oswald text-lg leading-snug flex-grow">{T(art.titre)}</h3>
                  {art.url && art.url !== "#" ? (
                    <a
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lien-corail text-sm mt-4 inline-block"
                    >
                      {T(tr.vulgarisation.voirArticle)}
                    </a>
                  ) : (
                    <span className="text-sm text-encre/35 mt-4 italic">
                      {T({ fr: "Lien à venir", en: "Link coming soon" })}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — VIDÉOS ──────────────────────────────────────── */}
      <section id="videos" className="bg-surface border-y border-black/8">
        <div className="max-w-content mx-auto px-5 py-16">
          <SectionTitre titre={T(tr.vulgarisation.videos)} />
          <div className="grid gap-10 md:grid-cols-2">
            {videos.map((v, i) => (
              <div key={i}>
                <YoutubeEmbed src={v.embedSrc || `https://www.youtube.com/embed/${v.youtubeId}`} titre={T(v.titre)} />
                <h3 className="font-oswald text-xl mt-4 leading-snug">{T(v.titre)}</h3>
                <p className="text-sm text-encre/70 mt-2 leading-relaxed">{T(v.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — COMMUNICATION SOCIÉTALE ────────────────────── */}
      <section id="societal" className="bg-clair">
        <div className="max-w-content mx-auto px-5 py-16">
          <SectionTitre titre={T(tr.vulgarisation.societal)} />
          <ul className="space-y-5">
            <li className="border-l-2 border-corail pl-5">
              <h3 className="font-oswald text-lg leading-snug">
                {T({ fr: "Activités de l'association Kongo Science", en: "Kongo Science association activities" })}
              </h3>
              <p className="text-sm text-encre/65 mt-1 leading-relaxed">
                {T({ fr: "Formation, mise en réseau et plaidoyer pour le renforcement des capacités scientifiques en Afrique.", en: "Training, networking and advocacy for scientific capacity building in Africa." })}
              </p>
              <Link href="/engagement#kongo" className="lien-corail text-sm mt-2 inline-block">
                {T({ fr: "Voir la section Engagement →", en: "See Engagement section →" })}
              </Link>
            </li>
            <li className="border-l-2 border-black/20 pl-5">
              <h3 className="font-oswald text-lg leading-snug text-encre/50">
                {T({ fr: "Interventions dans les écoles et auprès du grand public", en: "Interventions in schools and with the general public" })}
              </h3>
              <p className="text-sm text-encre/40 mt-1 italic">{T(tr.vulgarisation.aCompleter)}</p>
            </li>
            <li className="border-l-2 border-black/20 pl-5">
              <h3 className="font-oswald text-lg leading-snug text-encre/50">
                {T({ fr: "Posts LinkedIn pédagogiques notables", en: "Notable educational LinkedIn posts" })}
              </h3>
              <p className="text-sm text-encre/40 mt-1 italic">{T(tr.vulgarisation.aCompleter)}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
