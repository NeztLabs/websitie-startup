"use client";

import { useI18n } from "./I18nProvider";

export default function TechStackBar() {
  const { t } = useI18n();

  return (
    <div className="border-y border-border bg-bg-elev/40 py-6">
      <div className="container-nezt">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-faint">
            {t.techStack.label}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {t.techStack.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 rounded-xs border border-border/80 bg-surface/50 px-3 py-1.5 transition-colors hover:border-accent/40"
              >
                <span className="font-mono text-xs font-semibold text-fg">
                  {item.name}
                </span>
                <span className="text-[0.6875rem] text-faint">
                  / {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
