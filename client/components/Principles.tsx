"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "./I18nProvider";

export default function Principles() {
  const { t } = useI18n();

  return (
    <section id="principles" className="py-24 md:py-32">
      <div className="container-nezt">
        <Reveal>
          <SectionHeading
            label={t.principlesSection.label}
            title={t.principlesSection.title}
            intro={t.principlesSection.intro}
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {t.principles.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) as 0 | 1}>
              <div className="border-t border-border-strong pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[0.6875rem] tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
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
