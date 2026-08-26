/**
 * Full-width hero banner.
 * Pass `image="/images/my-photo.jpg"` for a real photo background.
 * Pass `position="top"` / "center" / "bottom" to control the focal point.
 * Without an image, uses the geological gradient pattern.
 */
export default function Hero({ titre, sousTitre, image, position = "center" }) {
  const fond = image
    ? `linear-gradient(rgba(15,15,15,0.55), rgba(15,15,15,0.72)), url(${image})`
    : [
        "linear-gradient(rgba(12,12,12,0.52), rgba(12,12,12,0.80))",
        "repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0 14px, rgba(0,0,0,0) 14px 28px)",
        "linear-gradient(160deg, #c9a98c 0%, #9a8a78 40%, #5a554f 80%, #2e2b27 100%)",
      ].join(", ");

  return (
    <section
      className="w-full relative overflow-hidden"
      aria-label={`En-tête — ${titre}`}
      style={{
        backgroundImage: fond,
        backgroundSize: "cover",
        backgroundPosition: position,
      }}
    >
      {/* Subtle bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.18))" }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-5 py-20 md:py-32 relative z-10">
        {/* Accent bar */}
        <span
          className="block w-14 h-[3px] bg-ocre-vif mb-6"
          aria-hidden="true"
          style={{ boxShadow: "0 0 8px rgba(200,121,59,0.5)" }}
        />

        <h1
          className="font-oswald uppercase text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
        >
          {titre}
        </h1>

        {sousTitre && (
          <p
            className="mt-5 text-white/90 text-base sm:text-lg md:text-xl max-w-2xl font-sans leading-relaxed"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            {sousTitre}
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50"
        aria-hidden="true"
      >
        <span className="w-px h-6 bg-white/70 animate-[fadeUp_1.5s_ease_infinite_alternate]" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 1l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
