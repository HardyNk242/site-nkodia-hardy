"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Quiz from "./Quiz";
import PdfViewer from "./PdfViewer";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";

function CarteExercice({ ex, n, T }) {
  const [ouvert, setOuvert] = useState(false);
  return (
    <article className="carte">
      <button
        onClick={() => setOuvert((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="font-oswald text-corail text-2xl font-bold">
            {String(n).padStart(2, "0")}
          </span>
          <span className="font-oswald text-lg">{ex.titre}</span>
        </span>
        <span className="text-corail text-2xl leading-none">{ouvert ? "−" : "+"}</span>
      </button>
      {ouvert && (
        <div className="px-5 pb-5 border-t border-black/5">
          <p className="font-oswald uppercase text-xs tracking-wide text-encre/50 mt-4">
            {T(tr.cours.enonce)}
          </p>
          <p className="text-encre/80 leading-relaxed mt-1">{ex.enonce}</p>
          <p className="font-oswald uppercase text-xs tracking-wide text-corail mt-4">
            {T(tr.cours.corrige)}
          </p>
          <p className="text-encre/80 leading-relaxed mt-1 font-bitter">{ex.corrige}</p>
        </div>
      )}
    </article>
  );
}

export default function CoursDetail({ course }) {
  const [quizActif, setQuizActif] = useState(null);
  const { T } = useLang();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setQuizActif(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = quizActif ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [quizActif]);

  const quizIntroText = T(tr.cours.quizIntro).replace(
    "{label}",
    course.labelSection.toLowerCase()
  );

  return (
    <section className="max-w-content mx-auto px-5 py-14">
      <Link href="/cours" className="lien-corail text-sm inline-block mb-8">
        {T(tr.cours.retour)}
      </Link>

      <p className="max-w-3xl text-encre/75 leading-relaxed mb-12">
        {course.intro}
      </p>

      {/* ZONE A — Polycopié */}
      <PdfViewer fileId={course.fileId} />

      {/* ZONE B — Quiz par chapitre / séance */}
      <div className="mt-16">
        <h2 className="titre-section">{course.titreZoneB}</h2>
        <span className="barre-corail" />
        <p className="max-w-3xl text-encre/75 leading-relaxed mb-8">
          {quizIntroText}
        </p>

        <div className="grid gap-7 md:grid-cols-2">
          {course.sections.map((s) => (
            <article key={s.num} className="carte flex flex-col p-6">
              <span className="font-oswald uppercase text-corail text-sm tracking-wide">
                {course.labelSection} {s.num}
              </span>
              <h3 className="font-oswald text-xl leading-snug mt-1">{s.titre}</h3>
              <p className="text-sm text-encre/70 leading-relaxed mt-3 flex-grow">
                {s.themes}
              </p>
              <p className="text-xs text-encre/45 mt-3">
                {T(tr.cours.quizInfo).replace("{n}", s.quiz.questions.length)}
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button onClick={() => setQuizActif(s.quiz)} className="btn-contour text-sm">
                  {T(tr.cours.faireQuiz)}
                </button>
                <Link
                  href={`/cours/${course.slug}/quiz/${s.num}`}
                  className="btn-corail text-sm text-center"
                >
                  {T({ fr: "Quiz surveillé →", en: "Proctored quiz →" })}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Exercices corrigés */}
      {course.exercices && course.exercices.length > 0 && (
        <div className="mt-16">
          <h2 className="titre-section">{T(tr.cours.exercices)}</h2>
          <span className="barre-corail" />
          <p className="max-w-3xl text-encre/75 leading-relaxed mb-8">
            {T(tr.cours.exercicesBio)}
          </p>
          <div className="space-y-4">
            {course.exercices.map((ex, i) => (
              <CarteExercice key={i} ex={ex} n={i + 1} T={T} />
            ))}
          </div>
        </div>
      )}

      {/* Modale du quiz */}
      {quizActif && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 flex items-start md:items-center justify-center p-3 md:p-6 overflow-y-auto"
          onClick={() => setQuizActif(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full flex justify-center">
            <Quiz quiz={quizActif} onClose={() => setQuizActif(null)} />
          </div>
        </div>
      )}
    </section>
  );
}
