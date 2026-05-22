"use client";

/**
 * Quiz interactif surveillé — Dr. Nkodia Hardy
 * 4 écrans : Identification → Consentement → Quiz → Résultats
 * Anti-fraude : plein écran, minuteur, détection DevTools, anti-copie
 */

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";

/* ─── Constantes ────────────────────────────────────────────────── */
const DUREE_Q          = 60;   // secondes par question
const SEUIL_SORT_AVERT = 3;    // avertissement à 3 sorties
const SEUIL_SORT_STOP  = 4;    // interruption à 4 sorties
const SEUIL_DT_STOP    = 2;    // interruption à 2 détections DevTools
const SEUIL_DT_PX      = 160;  // pixels d'écart déclenchant la détection

/* ─── Utilitaires ───────────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmtTime(s) {
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/* ─── Composant principal ───────────────────────────────────────── */
export default function QuizInteractif({ quiz, chapitre }) {
  const questions = quiz.questions;
  const total     = questions.length;

  /* ── Étape ─────────────────────────────────────────────────────── */
  const [etape, setEtape] = useState("id"); // id | consent | quiz | result

  /* ── Identification ─────────────────────────────────────────────── */
  const [et, setEt] = useState({
    nom: "", prenom: "", matricule: "", email: "",
    universite: "Université Marien Ngouabi",
    annee: "2025-2026",
    niveau: "Licence 2 — L2",
    filiere: "Géologie",
  });
  const [consent, setConsent] = useState(false);

  /* ── Randomisation stable ───────────────────────────────────────── */
  const [qOrd] = useState(() => shuffle(questions.map((_, i) => i)));
  const [cOrd] = useState(() =>
    questions.map((q) => shuffle([...Array(q.options.fr.length).keys()]))
  );

  /* ── État quiz ──────────────────────────────────────────────────── */
  const [qi,    setQi]    = useState(0);
  const [reps,  setReps]  = useState(() => Array(total).fill(null));
  const [timer, setTimer] = useState(DUREE_Q);
  const [duree, setDuree] = useState(0);

  /* ── Anti-fraude state ──────────────────────────────────────────── */
  const [sorties,    setSorties]    = useState(0);
  const [dtDetecte,  setDtDetecte]  = useState(false);
  const [interrompu, setInterrompu] = useState(false);
  const [modal,      setModal]      = useState(null); // null | "devtools" | "sortie"
  const [envoiOk,    setEnvoiOk]    = useState(null); // null | true | false

  /* ── Résultats ──────────────────────────────────────────────────── */
  const [scoreFinal, setScoreFinal] = useState(0);
  const [pctFinal,   setPctFinal]   = useState(0);

  /* ── Refs (valeurs fraîches dans les effets) ────────────────────── */
  const qiRef    = useRef(0);
  const repsRef  = useRef(Array(total).fill(null));
  const sortRef  = useRef(0);
  const dtRef    = useRef(0);
  const dureeRef = useRef(0);
  const etapeRef = useRef("id");

  /* Sync refs ← state */
  useEffect(() => { qiRef.current    = qi;    }, [qi]);
  useEffect(() => { repsRef.current  = reps;  }, [reps]);
  useEffect(() => { etapeRef.current = etape; }, [etape]);

  /* ── Fullscreen ─────────────────────────────────────────────────── */
  const enterFS = useCallback(() => {
    const el = document.documentElement;
    (el.requestFullscreen ?? el.webkitRequestFullscreen)?.call(el);
  }, []);

  const exitFS = useCallback(() => {
    if (document.fullscreenElement)
      (document.exitFullscreen ?? document.webkitExitFullscreen)?.call(document);
  }, []);

  /* ── Calcul score ───────────────────────────────────────────────── */
  const calcScore = useCallback((finalReps) => {
    let score = 0;
    qOrd.forEach((origIdx, pos) => {
      const rep = finalReps[pos];
      if (rep !== null && cOrd[origIdx][rep] === questions[origIdx].answer) score++;
    });
    return score;
  }, [qOrd, cOrd, questions]);

  /* ── Soumission ─────────────────────────────────────────────────── */
  const soumettre = useCallback(async (finalReps, isStop) => {
    exitFS();
    etapeRef.current = "result";

    const score = calcScore(finalReps);
    const pct   = Math.round((score / total) * 100);
    setScoreFinal(score);
    setPctFinal(pct);
    setInterrompu(isStop);
    setEtape("result");

    const payload = {
      nom: et.nom, prenom: et.prenom, matricule: et.matricule,
      email: et.email, universite: et.universite, annee: et.annee,
      niveau: et.niveau, filiere: et.filiere,
      chapitre, score, total, pourcentage: pct,
      duree: dureeRef.current, sortiesOnglet: sortRef.current,
      devToolsDetecte: dtRef.current > 0, interrompu: isStop,
    };

    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
    if (url) {
      try {
        await fetch(url, {
          method: "POST", mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setEnvoiOk(true);
      } catch {
        setEnvoiOk(false);
      }
    }
  }, [et, chapitre, total, calcScore, exitFS]);

  /* ── Avancer à la question suivante ────────────────────────────── */
  const avancer = useCallback((newReps) => {
    const next = qiRef.current + 1;
    if (next >= total) {
      soumettre(newReps, false);
    } else {
      qiRef.current = next;
      setQi(next);
      setTimer(DUREE_Q);
    }
  }, [total, soumettre]);

  /* ── Sélectionner une réponse ───────────────────────────────────── */
  const choisir = useCallback((k) => {
    const newReps = [...repsRef.current];
    newReps[qiRef.current] = k;
    repsRef.current = newReps;
    setReps(newReps);
    avancer(newReps);
  }, [avancer]);

  /* ── Timer par question ─────────────────────────────────────────── */
  useEffect(() => {
    if (etape !== "quiz") return;
    const id = setInterval(() => {
      if (etapeRef.current !== "quiz") { clearInterval(id); return; }
      dureeRef.current += 1;
      setDuree((d) => d + 1);
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [etape]);

  /* Auto-avancement quand le timer atteint 0 */
  useEffect(() => {
    if (etape !== "quiz" || timer > 0) return;
    setTimer(DUREE_Q);
    avancer([...repsRef.current]);
  }, [timer, etape, avancer]);

  /* ── Anti-copie : raccourcis clavier ────────────────────────────── */
  useEffect(() => {
    if (etape !== "quiz") return;
    const onKey = (e) => {
      if (e.key === "F12")                                             return e.preventDefault();
      if (e.ctrlKey && e.shiftKey && "IJCK".includes(e.key))         return e.preventDefault();
      if (e.metaKey && e.altKey  && "IJC".includes(e.key))           return e.preventDefault();
      if (e.ctrlKey && "caxspu".includes(e.key.toLowerCase()))        return e.preventDefault();
      if (e.key === "PrintScreen")                                     return e.preventDefault();
    };
    const onCtx = (e) => e.preventDefault();
    window.addEventListener("keydown",     onKey, true);
    document.addEventListener("contextmenu", onCtx, true);
    return () => {
      window.removeEventListener("keydown",     onKey, true);
      document.removeEventListener("contextmenu", onCtx, true);
    };
  }, [etape]);

  /* ── Détection DevTools ─────────────────────────────────────────── */
  useEffect(() => {
    if (etape !== "quiz") return;
    const id = setInterval(() => {
      if (etapeRef.current !== "quiz") { clearInterval(id); return; }
      const ouvert =
        window.outerHeight - window.innerHeight > SEUIL_DT_PX ||
        window.outerWidth  - window.innerWidth  > SEUIL_DT_PX;
      if (!ouvert) return;
      dtRef.current += 1;
      setDtDetecte(true);
      if (dtRef.current >= SEUIL_DT_STOP) {
        clearInterval(id);
        soumettre([...repsRef.current], true);
      } else {
        setModal("devtools");
      }
    }, 500);
    return () => clearInterval(id);
  }, [etape, soumettre]);

  /* ── Détection sortie onglet / plein écran ──────────────────────── */
  useEffect(() => {
    if (etape !== "quiz") return;
    const handle = () => {
      if (!document.hidden && document.fullscreenElement) return;
      sortRef.current += 1;
      setSorties(sortRef.current);
      if (sortRef.current >= SEUIL_SORT_STOP) {
        soumettre([...repsRef.current], true);
      } else if (sortRef.current >= SEUIL_SORT_AVERT) {
        setModal("sortie");
      }
    };
    document.addEventListener("visibilitychange", handle);
    document.addEventListener("fullscreenchange",  handle);
    return () => {
      document.removeEventListener("visibilitychange", handle);
      document.removeEventListener("fullscreenchange",  handle);
    };
  }, [etape, soumettre]);

  /* ── Helpers UI ─────────────────────────────────────────────────── */
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(et.email);
  const idOk    = ["nom","prenom","matricule","email"].every((k) => et[k].trim()) && emailOk;

  const msgFinal =
    pctFinal >= 80 ? { txt: "Excellent !", cls: "text-green-600" } :
    pctFinal >= 60 ? { txt: "Bien",         cls: "text-blue-600" } :
    pctFinal >= 40 ? { txt: "À revoir",     cls: "text-amber-600" } :
                     { txt: "Insuffisant",  cls: "text-red-600" };

  const origIdx = qOrd[qi];
  const q       = questions[origIdx];
  const perm    = cOrd[origIdx];
  const danger  = timer <= 10;

  /* ── Reset complet ──────────────────────────────────────────────── */
  const reset = () => {
    const vide = Array(total).fill(null);
    setReps(vide);      repsRef.current = vide;
    setQi(0);           qiRef.current   = 0;
    setTimer(DUREE_Q);
    setDuree(0);        dureeRef.current = 0;
    setSorties(0);      sortRef.current  = 0;
    setDtDetecte(false); dtRef.current   = 0;
    setInterrompu(false);
    setEnvoiOk(null);
    setModal(null);
    setScoreFinal(0);
    setPctFinal(0);
    setConsent(false);
    setEtape("id");
    etapeRef.current = "id";
  };

  /* ════════════════════════════════════════════════════════════════
     ÉCRAN 1 — Identification
  ════════════════════════════════════════════════════════════════ */
  if (etape === "id") return (
    <div className="min-h-screen bg-clair flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-md p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-[3px] bg-corail block" />
          <p className="font-oswald uppercase text-xs tracking-widest text-encre/50">{quiz.title.fr}</p>
        </div>
        <h1 className="font-oswald text-3xl uppercase mb-1">Identification</h1>
        <p className="text-sm text-encre/55 mb-7">Les champs marqués * sont obligatoires.</p>

        <div className="space-y-4">
          {/* Nom / Prénom */}
          <div className="grid grid-cols-2 gap-4">
            {[["nom","Nom *","NGUEMA"],["prenom","Prénom *","Jean"]].map(([k,l,ph]) => (
              <label key={k} className="block">
                <span className="text-xs font-oswald uppercase tracking-wide block mb-1">{l}</span>
                <input type="text" value={et[k]} placeholder={ph}
                  onChange={(e) => setEt({ ...et, [k]: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-corail transition" />
              </label>
            ))}
          </div>

          {/* Matricule */}
          <label className="block">
            <span className="text-xs font-oswald uppercase tracking-wide block mb-1">Matricule *</span>
            <input type="text" value={et.matricule} placeholder="2025GEO001"
              onChange={(e) => setEt({ ...et, matricule: e.target.value })}
              className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-corail transition" />
          </label>

          {/* Email */}
          <label className="block">
            <span className="text-xs font-oswald uppercase tracking-wide block mb-1">Email *</span>
            <input type="email" value={et.email} placeholder="prenom.nom@etu.umng.cg"
              onChange={(e) => setEt({ ...et, email: e.target.value })}
              className={`w-full border px-3 py-2.5 text-sm focus:outline-none transition ${
                et.email && !emailOk ? "border-red-400 bg-red-50" : "border-black/15 focus:border-corail"
              }`} />
            {et.email && !emailOk && <p className="text-red-500 text-xs mt-1">Format d'email invalide</p>}
          </label>

          {/* Université */}
          <label className="block">
            <span className="text-xs font-oswald uppercase tracking-wide block mb-1">Université</span>
            <input type="text" value={et.universite}
              onChange={(e) => setEt({ ...et, universite: e.target.value })}
              className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-corail transition" />
          </label>

          {/* Année + Niveau */}
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-oswald uppercase tracking-wide block mb-1">Année académique</span>
              <select value={et.annee} onChange={(e) => setEt({ ...et, annee: e.target.value })}
                className="w-full border border-black/15 px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-corail transition">
                {["2024-2025","2025-2026","2026-2027"].map((y) => <option key={y}>{y}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-oswald uppercase tracking-wide block mb-1">Niveau</span>
              <input type="text" value={et.niveau}
                onChange={(e) => setEt({ ...et, niveau: e.target.value })}
                className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-corail transition" />
            </label>
          </div>

          {/* Filière */}
          <label className="block">
            <span className="text-xs font-oswald uppercase tracking-wide block mb-1">Filière</span>
            <input type="text" value={et.filiere}
              onChange={(e) => setEt({ ...et, filiere: e.target.value })}
              className="w-full border border-black/15 px-3 py-2.5 text-sm focus:outline-none focus:border-corail transition" />
          </label>
        </div>

        <button disabled={!idOk} onClick={() => setEtape("consent")}
          className="btn-corail w-full mt-8 disabled:opacity-40 disabled:cursor-not-allowed">
          Suivant →
        </button>

        <div className="mt-4 text-center">
          <Link href="/cours" className="text-xs text-encre/40 hover:text-corail transition">
            ← Retour aux cours
          </Link>
        </div>
      </div>
    </div>
  );

  /* ════════════════════════════════════════════════════════════════
     ÉCRAN 2 — Consentement
  ════════════════════════════════════════════════════════════════ */
  if (etape === "consent") return (
    <div className="min-h-screen bg-clair flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-md p-8">
        <h1 className="font-oswald text-3xl uppercase mb-6">Conditions de passation</h1>

        <div className="bg-amber-50 border border-amber-200 p-5 mb-6 text-sm leading-relaxed text-encre/80 space-y-3">
          <p className="font-oswald text-xs uppercase tracking-wide text-amber-700 mb-1">⚠ Engagement anti-fraude — à lire attentivement</p>
          <p>
            Je m'engage à effectuer ce quiz <strong>seul(e)</strong>, sans utiliser d'outils
            d'intelligence artificielle (ChatGPT, Claude, Gemini, etc.) ni de ressources
            externes (cours, internet, camarades). Tout usage de ces outils est assimilé à une
            <strong> fraude</strong> au sens du règlement universitaire.
          </p>
          <p>
            Je comprends que le quiz se déroulera en <strong>plein écran</strong> et que toute
            sortie du plein écran, changement d'onglet ou ouverture des outils développeur
            sera <strong>enregistrée</strong> et transmise à l'enseignant.
          </p>
        </div>

        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 w-4 h-4 shrink-0 accent-[#1E7A40]" />
          <span className="text-sm text-encre/80 leading-relaxed">
            J'ai lu et j'accepte les conditions ci-dessus. Je m'engage à respecter le règlement universitaire.
          </span>
        </label>

        <div className="flex gap-3 mt-8">
          <button onClick={() => setEtape("id")} className="btn-contour flex-1">← Retour</button>
          <button disabled={!consent}
            onClick={() => { setEtape("quiz"); etapeRef.current = "quiz"; enterFS(); }}
            className="btn-corail flex-1 disabled:opacity-40 disabled:cursor-not-allowed">
            Démarrer →
          </button>
        </div>
      </div>
    </div>
  );

  /* ════════════════════════════════════════════════════════════════
     ÉCRAN 3 — Quiz
  ════════════════════════════════════════════════════════════════ */
  if (etape === "quiz") return (
    <div className="min-h-screen bg-[#0f1117] flex flex-col" style={{ userSelect: "none" }}>

      {/* ── Modal avertissement ──────────────────────────────────── */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6">
          <div className="bg-white max-w-md w-full p-8 shadow-2xl">
            <p className={`font-oswald text-xl uppercase mb-3 ${modal === "devtools" ? "text-red-600" : "text-amber-600"}`}>
              {modal === "devtools" ? "⚠ Outils développeur détectés" : `⚠ ${sorties} sorties enregistrées`}
            </p>
            <p className="text-sm text-encre/80 leading-relaxed">
              {modal === "devtools"
                ? "Outils développeur détectés. Veuillez les fermer pour continuer. Une nouvelle détection interrompra le quiz et soumettra vos réponses automatiquement."
                : `Vous avez quitté la zone de quiz ${sorties} fois. À la prochaine sortie, le quiz sera interrompu et soumis automatiquement à l'enseignant.`}
            </p>
            <button onClick={() => { setModal(null); enterFS(); }} className="btn-corail mt-6 w-full">
              Fermer et continuer
            </button>
          </div>
        </div>
      )}

      {/* ── Barre supérieure ─────────────────────────────────────── */}
      <div className="bg-[#0a0b10] border-b border-white/8 px-5 py-3 flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-1 h-5 bg-corail rounded-full shrink-0" />
          <span className="font-oswald text-white/40 text-xs uppercase tracking-wide hidden sm:block truncate">
            {quiz.title.fr}
          </span>
          <span className="font-oswald text-white text-sm font-semibold">
            Q {qi + 1}&thinsp;/&thinsp;{total}
          </span>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <div className="text-right">
            <p className="text-white/30 text-[9px] uppercase tracking-wide leading-none">Durée</p>
            <p className="font-oswald text-white text-base">{fmtTime(duree)}</p>
          </div>
          <div className={`text-right min-w-[52px] ${danger ? "animate-pulse" : ""}`}>
            <p className="text-white/30 text-[9px] uppercase tracking-wide leading-none">Restant</p>
            <p className={`font-oswald text-3xl font-bold leading-none ${danger ? "text-red-400" : "text-corail"}`}>
              {timer}
            </p>
          </div>
        </div>
      </div>

      {/* ── Barre de progression ──────────────────────────────────── */}
      <div className="h-0.5 bg-white/8 shrink-0">
        <div className="h-full bg-corail transition-all duration-500"
          style={{ width: `${(qi / total) * 100}%` }} />
      </div>

      {/* ── Zone question ────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-5 py-10 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <p className="font-oswald uppercase text-[10px] tracking-[0.3em] text-white/25 mb-5">
            Question {qi + 1} sur {total} · {quiz.title.fr}
          </p>

          <h2 className="font-oswald text-2xl md:text-3xl text-white leading-tight mb-8">
            {q.question.fr}
          </h2>

          <ul className="space-y-3">
            {perm.map((origChoix, k) => (
              <li key={k}>
                <button onClick={() => choisir(k)}
                  className="w-full text-left border border-white/10 px-5 py-4 rounded-sm
                    text-white/75 text-sm leading-relaxed
                    hover:border-corail hover:bg-corail/10 hover:text-white
                    active:scale-[0.99] transition-all duration-100 flex items-start gap-4">
                  <span className="font-oswald text-corail text-xl shrink-0 w-6 leading-tight">
                    {String.fromCharCode(65 + k)}
                  </span>
                  <span>{q.options.fr[origChoix]}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Indicateur sorties */}
          {sorties > 0 && (
            <p className="text-white/20 text-xs mt-8 font-oswald uppercase tracking-wide">
              ⚠ {sorties} sortie{sorties > 1 ? "s" : ""} enregistrée{sorties > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  /* ════════════════════════════════════════════════════════════════
     ÉCRAN 4 — Résultats
  ════════════════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-clair flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-md p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[3px] bg-corail block" />
          <p className="font-oswald uppercase text-xs tracking-widest text-encre/50">Résultats du quiz</p>
        </div>
        <h1 className="font-oswald text-2xl uppercase leading-tight">
          {et.prenom} {et.nom}
        </h1>
        <p className="text-sm text-encre/50 mb-6 mt-0.5">
          {quiz.title.fr} · {et.filiere} {et.niveau} · {et.annee}
        </p>

        {/* Score */}
        <div className="bg-clair py-8 text-center mb-6">
          <p className={`font-oswald text-8xl font-bold leading-none ${msgFinal.cls}`}>
            {pctFinal}%
          </p>
          <p className="font-oswald text-2xl text-encre/40 mt-2">
            {scoreFinal} / {total}
          </p>
          <div className="h-2 bg-black/8 mt-4 mx-8 overflow-hidden">
            <div className="h-full bg-corail transition-all duration-700"
              style={{ width: `${pctFinal}%` }} />
          </div>
          <p className={`font-oswald uppercase text-xl mt-3 font-bold ${msgFinal.cls}`}>
            {msgFinal.txt}
          </p>
        </div>

        {/* Détails */}
        <div className="space-y-2.5 text-sm border-t border-black/8 pt-4">
          {[
            ["Chapitre",                  chapitre],
            ["Matricule",                 et.matricule],
            ["Durée totale",              fmtTime(duree)],
            ["Sorties onglet / plein écran", String(sorties)],
            ["DevTools détectés",         dtDetecte ? "OUI" : "NON"],
            interrompu ? ["Quiz interrompu automatiquement", "OUI"] : null,
          ].filter(Boolean).map(([l, v]) => (
            <div key={l} className="flex justify-between items-center">
              <span className="text-encre/60">{l}</span>
              <span className={`font-oswald font-bold ${
                l.includes("Sorties") && sorties > 0 ? "text-amber-600" :
                l.includes("DevTools") && dtDetecte  ? "text-red-600" :
                l.includes("interrompu")              ? "text-red-600" :
                "text-encre"
              }`}>{v}</span>
            </div>
          ))}
        </div>

        {/* Statut envoi */}
        <div className="mt-4 text-xs text-center min-h-[18px]">
          {envoiOk === true  && <p className="text-corail">✓ Résultats envoyés à l'enseignant.</p>}
          {envoiOk === false && <p className="text-encre/40 italic">Envoi impossible — les résultats ont été consignés localement.</p>}
          {envoiOk === null  && process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL &&
            <p className="text-encre/40 italic">Envoi en cours…</p>}
        </div>

        <div className="flex gap-3 mt-5">
          <button onClick={reset} className="btn-corail flex-1">
            Recommencer
          </button>
          <Link href="/cours" className="btn-contour flex-1 text-center">
            ← Cours
          </Link>
        </div>
      </div>
    </div>
  );
}
