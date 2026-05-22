import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import CoursDetail from "@/components/CoursDetail";
import { courses, getCourse } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const course = getCourse(params.slug);
  if (!course) return { title: "Cours introuvable — Dr. Nkodia Hardy" };
  return {
    title: `${course.titre} — Dr. Nkodia Hardy`,
    description: course.resume,
  };
}

export default function CoursPage({ params }) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  return (
    <>
      <Hero titre={course.titre} sousTitre={course.niveau} image="/images/hero-bg-courses-pages.jpg" position="center" />
      <CoursDetail course={course} />
    </>
  );
}
