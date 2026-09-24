import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { projects } from "@/lib/projects";

export default function Work({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-nezt">
        {showHeading && (
          <Reveal>
            <SectionHeading
              label="Selected Work"
              title="Real software. Proven outcomes."
              intro="Explore the platforms, architectures, and internal engines we've engineered for high-demand public and private operations."
            />
          </Reveal>
        )}

        <div className="mt-14 space-y-8">
          {displayProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) as 0 | 1 | 2}>
              <article className="surface-card group overflow-hidden p-8 md:p-10 transition-all duration-300 hover:border-accent/40">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                  {/* Left Column: Context, Challenge, Architecture */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                        {project.client}
                      </span>
                      <span className="text-border">/</span>
                      <span className="text-xs text-muted">
                        {project.sector}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-semibold leading-tight text-fg group-hover:text-accent transition-colors">
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-sm leading-relaxed text-muted">
                      {project.heroSummary}
                    </p>

                    <div className="rounded-sm border border-border/80 bg-surface/50 p-4">
                      <p className="text-xs font-semibold text-fg mb-1">
                        Arquitectura & Entrega Técnica:
                      </p>
                      <p className="font-mono text-xs text-muted leading-relaxed">
                        {project.solution.architecture}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xs border border-border bg-bg-elev/60 px-2.5 py-1 font-mono text-[0.6875rem] text-muted transition-colors group-hover:border-border-strong"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Metrics & CTA */}
                  <div className="lg:col-span-4 flex flex-col justify-between border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0 h-full">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-faint mb-4">
                        Métricas de Impacto
                      </p>
                      <div className="space-y-4">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="font-mono text-2xl font-bold text-fg">
                              {m.value}
                            </div>
                            <div className="text-xs text-muted leading-snug mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-fg transition-colors hover:text-accent"
                      >
                        Ver Caso Completo
                        <Icon name="arrow-right" size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
