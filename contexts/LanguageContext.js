"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LangCtx = createContext({ lang: "fr", setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const saved = localStorage.getItem("site-lang");
    if (saved === "en") setLang("en");
  }, []);

  const set = (l) => {
    setLang(l);
    localStorage.setItem("site-lang", l);
  };

  return (
    <LangCtx.Provider value={{ lang, setLang: set }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const { lang, setLang } = useContext(LangCtx);
  // T(value) → returns value[lang] if bilingual object {fr, en}, else value itself
  const T = (v) =>
    v && typeof v === "object" && ("fr" in v || "en" in v)
      ? v[lang] ?? v.fr ?? v.en ?? ""
      : v ?? "";
  return { lang, setLang, T };
}
