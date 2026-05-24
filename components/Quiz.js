"use client";

import { useMemo, useState } from "react";

const TXT = {
  fr: {
    questionLabel: "Question",
    of: "sur",
    pickAnswer: "Choisissez une réponse :",
    correct: "Bonne réponse !",
    wrong: "Réponse incorrecte.",
    goodWas: "Bonne réponse :",
    next: "Question suivante",
    seeResult: "Voir le résultat",
    yourScore: "Votre score",
    restart: "Recommencer le quiz",
    msgExcellent: "Excellent ! Maîtrise solide du chapitre.",
    msgGood: "Bon travail ! Quelques notions à revoir.",
    msgWork: "À retravailler — relisez le chapitre puis réessayez.",
    close: "Fermer",
  },
  en: {
    questionLabel: "Question",
    of: "of",
    pickAnswer: "Choose an answer:",
    correct: "Correct answer!",
    wrong: "Incorrect answer.",
    goodWas: "Correct answer:",
    next: "Next question",
    seeResult: "See the result",
    yourScore: "Your score",
    restart: "Restart the quiz",
    msgExcellent: "Excellent! Solid grasp of the chapter.",
    msgGood: "Good work! A few points to review.",
    msgWork: "Needs work — review the chapter and try again.",
    close: "Close",
  },
};

export default function Quiz({ quiz, onClose }) {
  const [lang, setLang] = useState("fr");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const t = TXT[lang];
  const questions = quiz.questions;
  const total = questions.length;
  const q = questions[index];

  const reponduCorrect = useMemo(
    () => selected !== null && selected === q?.answer,
    [selected, q]
  );

  const choisir = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[index].answer) setScore((s) => s + 1);
  };

  const suivant = () => {
    if (index + 1 < total) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const recommencer = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const pourcentage = Math.round((score / total) * 100);
  const message =
    pourcentage >= 80 ? t.msgExcellent : pourcentage >= 50 ? t.msgGood : t.msgWork;

  return (
    <div className="bg-surface w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl border border-white/10">
      {/* Barre supérieure */}
      <div className="flex items-center justify-between bg-sombre text-encre px-5 py-3 sticky top-0">
        <div>
          <p className="font-oswald uppercase text-sm tracking-wide leading-tight">
            {lang === "fr" ? "Quiz" : "Quiz"} — {quiz.title[lang]}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex border border-white/40 text-xs font-oswald uppercase">
            {["fr", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 ${
                  lang === l ? "bg-corail text-white" : "text-white/70"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            aria-label={t.close}
            className="text-white/80 hover:text-corail text-xl leading-none"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="p-6">
        {!finished ? (
          <>
            {/* Progression */}
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="font-oswald uppercase tracking-wide text-encre/60">
                {t.questionLabel} {index + 1} {t.of} {total}
              </span>
              <span className="font-oswald text-corail">
                {Math.round((index / total) * 100)}%
              </span>
            </div>
            <div className="h-2 bg-white/10 mb-6">
              <div
                className="h-full bg-corail transition-all duration-300"
                style={{ width: `${((index + (selected !== null ? 1 : 0)) / total) * 100}%` }}
              />
            </div>

            {/* Question */}
            <h3 className="font-oswald text-xl leading-snug mb-4">
              {q.question[lang]}
            </h3>
            <p className="text-xs uppercase tracking-wide text-encre/45 mb-2">
              {t.pickAnswer}
            </p>

            {/* Options */}
            <ul className="space-y-2.5">
              {q.options[lang].map((opt, i) => {
                let style =
                  "border-white/15 hover:border-corail hover:bg-corail/10";
                if (selected !== null) {
                  if (i === q.answer) style = "border-green-500 bg-green-900/30";
                  else if (i === selected) style = "border-corail bg-corail/15";
                  else style = "border-white/8 opacity-50";
                }
                return (
                  <li key={i}>
                    <button
                      onClick={() => choisir(i)}
                      disabled={selected !== null}
                      className={`w-full text-left border-2 px-4 py-3 transition flex gap-3 items-start ${style}`}
                    >
                      <span className="font-oswald text-corail shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Correction */}
            {selected !== null && (
              <div
                className={`mt-5 p-4 border-l-4 ${
                  reponduCorrect
                    ? "border-green-600 bg-green-50"
                    : "border-corail bg-corail/5"
                }`}
              >
                <p className="font-oswald uppercase text-sm">
                  {reponduCorrect ? t.correct : t.wrong}
                </p>
                {!reponduCorrect && (
                  <p className="text-sm mt-1">
                    <strong>{t.goodWas}</strong> {q.options[lang][q.answer]}
                  </p>
                )}
                <p className="text-sm mt-2 text-encre/80 leading-relaxed">
                  {q.explanation[lang]}
                </p>
                <button onClick={suivant} className="btn-corail mt-4">
                  {index + 1 < total ? t.next : t.seeResult}
                </button>
              </div>
            )}
          </>
        ) : (
          /* Écran de résultat */
          <div className="text-center py-6">
            <p className="font-oswald uppercase text-encre/55 tracking-wide">
              {t.yourScore}
            </p>
            <p className="font-oswald text-6xl text-corail font-bold my-2">
              {pourcentage}%
            </p>
            <p className="text-encre/70">
              {score} / {total}
            </p>
            <div className="h-2 bg-black/10 my-5 max-w-xs mx-auto">
              <div className="h-full bg-corail" style={{ width: `${pourcentage}%` }} />
            </div>
            <p className="font-bitter italic text-lg text-encre/80 mb-6">{message}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={recommencer} className="btn-corail">
                {t.restart}
              </button>
              <button onClick={onClose} className="btn-contour">
                {t.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
