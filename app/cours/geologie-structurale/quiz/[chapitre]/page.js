import { notFound } from "next/navigation";
import QuizInteractif from "@/components/QuizInteractif";

import ch1 from "@/data/quizzes/chapitre1.json";
import ch2 from "@/data/quizzes/chapitre2.json";
import ch3 from "@/data/quizzes/chapitre3.json";
import ch4 from "@/data/quizzes/chapitre4.json";
import ch5 from "@/data/quizzes/chapitre5.json";
import ch6 from "@/data/quizzes/chapitre6.json";

const quizzes = { "1": ch1, "2": ch2, "3": ch3, "4": ch4, "5": ch5, "6": ch6 };

export function generateStaticParams() {
  return Object.keys(quizzes).map((chapitre) => ({ chapitre }));
}

export function generateMetadata({ params }) {
  const data = quizzes[params.chapitre];
  if (!data) return {};
  return {
    title: `Quiz Surveillé — ${data.title.fr} — Dr. Nkodia Hardy`,
    description: `Quiz d'auto-évaluation surveillé pour ${data.title.fr}`,
  };
}

export default function QuizGSPage({ params }) {
  const data = quizzes[params.chapitre];
  if (!data) notFound();

  return (
    <QuizInteractif
      quiz={data}
      chapitre={`Géologie Structurale — Chapitre ${params.chapitre}`}
    />
  );
}
