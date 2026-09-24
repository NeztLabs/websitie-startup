import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-nezt">
        <Reveal>
          <SectionHeading
            label="Services"
            title="Engineering, from architecture to operations."
            intro="We take on the systems that carry real weight — and stay accountable for how they perform in production."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) as 0 | 1 | 2}>
              <article className="surface-card group flex h-full flex-col p-7">
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
                <span className="grid h-11 w-11 place-items-center rounded-sm border border-border bg-bg-elev text-accent transition-colors duration-200 group-hover:border-accent">
                  <Icon name={service.icon as IconName} size={20} />
                </span>

                <h3 className="mt-6 font-display text-lg font-semibold text-fg">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.body}
                </p>

                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-[0.8125rem] text-faint"
                    >
                      <Icon
                        name="check"
                        size={13}
                        className="shrink-0 text-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
