import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-nezt">
        <Reveal>
          <SectionHeading
            label="Process"
            title="A delivery model built for accountability."
            intro="Five stages, each with a defined output. You always know what is being built, why, and what comes next."
          />
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          {process.map((stage, i) => (
            <Reveal as="li" key={stage.step} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border-strong font-display text-[0.625rem] font-medium tracking-wider text-accent">
                    {stage.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-border md:hidden"
                  />
                </div>
                <h3 className="mt-6 font-display text-base font-semibold text-fg">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
