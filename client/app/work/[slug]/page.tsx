import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries, getProjectBySlug } from "@/lib/i18n";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return dictionaries.es.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found — NEZT" };

  return {
    title: `${project.client}: ${project.title} — NEZT`,
    description: project.heroSummary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail slug={slug} />;
}
