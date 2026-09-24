import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/projects";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
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

  return (
    <main className="py-12 md:py-20">
      <div className="container-nezt">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-accent transition-colors"
        >
          <span className="rotate-180">
            <Icon name="arrow-right" size={14} />
          </span>
          Volver a todos los proyectos
        </Link>

        {/* Hero Header */}
        <div className="mt-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-mono font-semibold uppercase tracking-wider text-accent">
              {project.client}
            </span>
            <span className="text-border">/</span>
            <span className="text-muted">{project.sector}</span>
            <span className="text-border">/</span>
            <span className="text-faint font-mono">{project.timeline}</span>
          </div>

          <h1 className="mt-6 font-display text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-fg leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
            {project.heroSummary}
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-md border border-border bg-bg-elev p-6 md:p-8">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="border-b border-border/60 pb-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pb-0 sm:pr-6">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-fg">
                {metric.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Content Grid */}
        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Main Case Breakdown */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <section className="space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-fg">
                El Desafío Operativo
              </h2>
              <p className="text-base leading-relaxed text-muted">
                {project.challenge}
              </p>
            </section>

            {/* The Solution */}
            <section className="space-y-6">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-fg">
                La Solución & Entregables de Ingeniería
              </h2>
              <p className="text-base leading-relaxed text-muted">
                {project.solution.overview}
              </p>

              <div className="space-y-3">
                {project.solution.keyDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-sm border border-border bg-surface/40 p-4 transition-colors hover:border-accent/30"
                  >
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-xs bg-accent/15 text-accent shrink-0 font-mono text-xs">
                      ✓
                    </span>
                    <p className="text-sm leading-relaxed text-muted">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Architecture */}
            <section className="space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-fg">
                Diagrama de Arquitectura
              </h2>
              <div className="rounded-md border border-border bg-surface/80 p-6 font-mono text-xs leading-relaxed text-fg">
                <p className="text-accent mb-2">// Flujo de Datos & Capas de Sistema:</p>
                <div className="rounded-sm bg-bg p-4 border border-border/60 text-muted overflow-x-auto">
                  {project.solution.architecture}
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar: Meta & Stack */}
          <div className="lg:col-span-4 space-y-8">
            <div className="surface-card p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-faint font-semibold">
                  Cliente & Entorno
                </h3>
                <p className="mt-2 text-sm font-semibold text-fg">
                  {project.client}
                </p>
                <p className="text-xs text-muted">{project.sector}</p>
              </div>

              <div className="border-t border-border pt-5">
                <h3 className="text-xs uppercase tracking-wider text-faint font-semibold mb-3">
                  Tecnologías Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-xs border border-border bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted leading-relaxed mb-4">
                  ¿Tienes un proyecto con desafíos técnicos similares?
                </p>
                <Button href="/contact" size="md" className="w-full">
                  Hablar con un Ingeniero
                  <Icon name="arrow-right" size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <CtaBand />
      </div>
    </main>
  );
}
