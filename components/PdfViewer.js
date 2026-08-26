"use client";

import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";

export default function PdfViewer({ fileId }) {
  const { T } = useLang();
  const placeholder = !fileId || fileId.startsWith("REMPLACER");
  const preview = `https://drive.google.com/file/d/${fileId}/preview`;
  const download = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <div>
          <h2 className="titre-section text-2xl md:text-3xl">{T(tr.cours.polyCopie)}</h2>
          <span className="barre-corail !mb-0" />
        </div>
        {placeholder ? (
          <span className="inline-flex items-center gap-2 border-2 border-white/15 text-encre-inv/45 font-oswald uppercase tracking-wide text-sm px-5 py-2.5 cursor-not-allowed">
            {T(tr.cours.telecharger)}
          </span>
        ) : (
          <a href={download} className="btn-corail" target="_blank" rel="noopener noreferrer">
            {T(tr.cours.telecharger)}
          </a>
        )}
      </div>

      {placeholder ? (
        <div className="placeholder-roche w-full h-[420px] flex flex-col items-center justify-center text-center px-6">
          <p className="font-oswald uppercase text-white text-lg tracking-wide">
            {T(tr.cours.aVenir)}
          </p>
          <p className="text-white/85 text-sm mt-2 max-w-md">
            {T(tr.cours.aVenirInfo)}
          </p>
        </div>
      ) : (
        <div className="w-full bg-sombre border border-white/10 shadow-sm">
          <iframe
            src={preview}
            title={T(tr.cours.polyCopie)}
            className="w-full h-[600px] md:h-[820px]"
            allow="autoplay"
          />
        </div>
      )}
    </div>
  );
}
