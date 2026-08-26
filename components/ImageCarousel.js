"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "./Placeholder";

/* SVG chevron — no HTML entity, consistent stroke */
function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M11 4L6 9l5 5" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M7 4l5 5-5 5" />
    </svg>
  );
}

export default function ImageCarousel({ items, autoDelay = 4000 }) {
  const piste = useRef(null);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const defiler = useCallback((dir) => {
    const el = piste.current;
    if (!el) return;
    const carte = el.querySelector("[data-carte]");
    const pas = carte ? carte.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * pas, behavior: "smooth" });
  }, []);

  const surScroll = useCallback(() => {
    const el = piste.current;
    if (!el) return;
    const carte = el.querySelector("[data-carte]");
    const pas = carte ? carte.offsetWidth + 20 : 320;
    setIndex(Math.round(el.scrollLeft / pas));
  }, []);

  /* Auto-scroll — pauses on hover */
  useEffect(() => {
    if (pause) return;
    const id = setInterval(() => {
      const el = piste.current;
      if (!el) return;
      const carte = el.querySelector("[data-carte]");
      const pas = carte ? carte.offsetWidth + 20 : 320;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + pas, behavior: "smooth" });
    }, autoDelay);
    return () => clearInterval(id);
  }, [pause, autoDelay]);

  return (
    <div
      className="relative"
      role="region"
      aria-label="Galerie d'images"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* Track */}
      <div
        ref={piste}
        onScroll={surScroll}
        className="scroll-cache flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2"
        aria-live="polite"
      >
        {items.map((it, i) => {
          const inner = (
            <>
              <div className="rounded-sm overflow-hidden aspect-[3/2] relative">
                {it.src ? (
                  <Image
                    src={it.src}
                    alt={it.legende}
                    fill
                    sizes="(max-width:640px) 80vw, (max-width:1024px) 46vw, 31vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Placeholder label={it.legende} ratio="aspect-[3/2]" />
                )}
                {it.href && (
                  <div className="absolute inset-0 bg-sombre/0 group-hover:bg-sombre/30 transition-colors duration-300 flex items-end justify-end p-3">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-oswald uppercase tracking-wide text-encre-inv bg-sombre/75 px-2 py-1 rounded-sm">
                      Voir →
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="mt-2.5 text-sm text-encre/65 font-bitter italic leading-snug">
                {it.legende}
              </figcaption>
            </>
          );

          return (
            <figure
              key={i}
              data-carte
              className="snap-start shrink-0 w-[80%] sm:w-[46%] lg:w-[31%] group"
              aria-label={it.legende}
            >
              {it.href ? (
                <Link href={it.href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corail focus-visible:ring-offset-2">
                  {inner}
                </Link>
              ) : inner}
            </figure>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        {/* Dot indicators */}
        <div className="flex gap-2 items-center" role="tablist" aria-label="Position dans la galerie">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Image ${i + 1}`}
              onClick={() => {
                const el = piste.current;
                if (!el) return;
                const carte = el.querySelector("[data-carte]");
                const pas = carte ? carte.offsetWidth + 20 : 320;
                el.scrollTo({ left: i * pas, behavior: "smooth" });
              }}
              className={`rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corail focus-visible:ring-offset-1
                ${i === index ? "w-6 h-2 bg-corail" : "w-2 h-2 bg-encre/20 hover:bg-encre/40"}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Image précédente"
            onClick={() => defiler(-1)}
            className="w-11 h-11 border-2 border-encre/20 flex items-center justify-center
              text-encre hover:border-corail hover:text-corail
              transition-all duration-150 rounded-sm
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corail focus-visible:ring-offset-2
              active:scale-95"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={() => defiler(1)}
            className="w-11 h-11 border-2 border-encre/20 flex items-center justify-center
              text-encre hover:border-corail hover:text-corail
              transition-all duration-150 rounded-sm
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corail focus-visible:ring-offset-2
              active:scale-95"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
