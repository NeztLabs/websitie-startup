import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import { labs } from "@/lib/content";

export default function Labs() {
  return (
    <section
      id="labs"
      className="relative overflow-hidden border-y border-border bg-bg-elev/50 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dot-matrix opacity-40 [mask-image:radial-gradient(80%_70%_at_100%_0%,black,transparent_75%)]"
      />
      <div className="container-nezt relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              <span className="label-tech">Division</span>
            </div>
            <h2 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
              NEZT <span className="text-gold-gradient">LABS</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {labs.body}
            </p>
            <p className="mt-6 font-display text-xs tracking-[0.3em] text-fg">
              {labs.tagline}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:col-span-7">
          {labs.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 2) as 0 | 1}
              className="bg-bg"
            >
              <div className="group h-full p-7 transition-colors duration-200 hover:bg-surface">
                <span className="grid h-10 w-10 place-items-center rounded-sm border border-border text-accent transition-colors duration-200 group-hover:border-accent">
                  <Icon name={item.icon as IconName} size={18} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
