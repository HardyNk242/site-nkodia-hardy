/**
 * Bloc image de substitution (placeholder). Remplacez par <Image> de next/image
 * lorsque les vraies photos seront disponibles dans /public/images/.
 */
export default function Placeholder({ label, ratio = "aspect-[4/3]", className = "" }) {
  return (
    <div
      className={`placeholder-roche ${ratio} w-full flex items-center justify-center text-center ${className}`}
    >
      <span className="font-oswald uppercase text-white/90 text-xs tracking-[0.18em] px-4 drop-shadow">
        {label || "Image à venir"}
      </span>
    </div>
  );
}
