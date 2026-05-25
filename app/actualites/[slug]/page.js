"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";
import { actualites } from "@/data/site";

export default function ActualiteDetail({ params }) {
  const { T } = useLang();
  const actu = actualites.find((a) => a.id === params.slug);

  if (!actu) notFound();

  const description = T(actu.description);
  const paragraphes = description.split("\n\n").filter(Boolean);

  return (
    <>
      <Hero
        titre={T(actu.titre)}
        sousTitre={`${actu.date} · ${T(actu.lieu)}`}
        image={actu.cover}
        position="center"
      />

      <div className="max-w-content mx-auto px-5 py-16">

        {/* Back link */}
        <Link href="/#actualites" className="lien-corail text-sm inline-block mb-10">
          {T(tr.actualites.retour)}
        </Link>

        {/* Tag */}
        <span className="tag-corail mb-6 inline-block">
          {T(tr.actualites.fieldwork)}
        </span>

        {/* Sub-header */}
        <p className="font-oswald uppercase tracking-wide text-encre-lt text-sm mb-10">
          {T(actu.sousTitre)}
        </p>

        {/* Field report */}
        <section className="mb-16">
          <h2 className="font-oswald uppercase text-2xl mb-3">{T(tr.actualites.rapport)}</h2>
          <span className="barre-corail" />
          <div className="prose-site space-y-4">
            {paragraphes.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Photo gallery */}
        <section>
          <h2 className="font-oswald uppercase text-2xl mb-3">{T(tr.actualites.galerie)}</h2>
          <span className="barre-corail" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {actu.images.map((img, i) => (
              <figure key={i} className="group overflow-hidden rounded-sm">
                <div className="relative aspect-[3/2] bg-sombre">
                  <Image
                    src={img.src}
                    alt={T(img.legende)}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-encre/65 font-bitter italic leading-snug px-1 pb-2">
                  {T(img.legende)}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
