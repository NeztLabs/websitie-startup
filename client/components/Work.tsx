import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { work } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-nezt">
        <Reveal>
          <SectionHeading
            label="Selected work"
            title="Systems in production."
            intro="A sample of what we build and the outcomes it produced. Details available under NDA."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {work.map((item, i) => (
            <Reveal key={item.client} delay={(i % 3) as 0 | 1 | 2}>
              <article className="surface-card flex h-full flex-col p-7">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display tracking-[0.14em] text-fg">
                    {item.client}
                  </span>
                  <span className="text-faint">{item.sector}</span>
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-fg">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>

                <div className="mt-7 flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <div className="font-display text-2xl font-semibold text-gold-gradient">
                      {item.metric}
                    </div>
                    <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                      {item.metricLabel}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xs border border-border px-2.5 py-1 text-[0.6875rem] text-faint"
                      >
                        {tag}
                      </span>
                    ))}
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
