/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        corail:      "#F34F4C",
        "corail-dk": "#c23533",
        clair:       "#F7F7F7",
        encre:       "#212121",
        "encre-lt":  "#444444",
        surface:     "#FFFFFF",
        muted:       "#6B6B6B",
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
