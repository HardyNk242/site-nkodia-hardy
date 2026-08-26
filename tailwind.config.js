/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Direction « Atlas tectonique ». Contrastes verifies WCAG AA.
           Sur fond CLAIR l'accent est `corail`; sur fond FONCE il faut
           `ocre-vif` (corail n'y donne que 2,89:1).                      */
        corail:         "#A0561F",  /* ocre latéritique — accent sur clair   */
        "corail-dk":    "#8A4818",  /* hover                                 */
        "ocre-vif":     "#C8793B",  /* accent sur fond foncé + aplats        */
        clair:          "#F3F0E9",  /* ivoire minéral — fond principal       */
        encre:          "#303633",  /* gris roche — texte principal          */
        "encre-lt":     "#5C6560",  /* texte secondaire                      */
        "encre-inv":    "#F3F0E9",  /* texte sur surface foncée              */
        "encre-inv-lt": "#B9B3A8",  /* texte secondaire sur surface foncée   */
        surface:        "#FFFFFF",  /* cartes                                */
        muted:          "#5C6560",
        sombre:         "#1E2422",  /* anthracite — navbar, pied, sections   */
        vert:           "#244C43",  /* vert profond — sections d'accent      */
        sable:          "#D8C2A6",  /* remplissages, jamais du texte         */
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "Impact", "sans-serif"],
        sans:   ["var(--font-open-sans)", "Segoe UI", "sans-serif"],
        bitter: ["var(--font-bitter)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      spacing: {
        section: "4rem",   /* 64px */
        block:   "2.5rem", /* 40px */
      },
      borderRadius: {
        card: "2px",
      },
      boxShadow: {
        card:    "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px 0 rgba(0,0,0,0.10), 0 2px 4px -1px rgba(0,0,0,0.06)",
        section: "0 0 0 1px rgba(0,0,0,0.04)",
      },
      opacity: {
        "6":  "0.06",
        "8":  "0.08",
        "12": "0.12",
        "18": "0.18",
      },
      transitionDuration: {
        micro: "150ms",
        base:  "200ms",
        slow:  "300ms",
      },
      transitionTimingFunction: {
        "out-smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-up": "fadeUp 320ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
