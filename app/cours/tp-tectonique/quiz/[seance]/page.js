import { notFound } from "next/navigation";
import QuizInteractif from "@/components/QuizInteractif";

import tp1 from "@/data/quizzes/tp-tectonique-1.json";
import tp2 from "@/data/quizzes/tp-tectonique-2.json";
import tp3 from "@/data/quizzes/tp-tectonique-3.json";
import tp4 from "@/data/quizzes/tp-tectonique-4.json";

const quizzes = { "1": tp1, "2": tp2, "3": tp3, "4": tp4 };

export function generateStaticParams() {
  return Object.keys(quizzes).map((seance) => ({ seance }));
}

export function generateMetadata({ params }) {
  const data = quizzes[params.seance];
  if (!data) return {};
  return {
    title: `Quiz Surveillé — ${data.title.fr} — Dr. Nkodia Hardy`,
    description: `Quiz d'auto-évaluation surveillé pour ${data.title.fr}`,
  };
}

export default function QuizTPPage({ params }) {
  const data = quizzes[params.seance];
  if (!data) notFound();

  return (
    <QuizInteractif
      quiz={data}
      chapitre={`TP Tectonique — Séance ${params.seance}`}
    />
  );
}
