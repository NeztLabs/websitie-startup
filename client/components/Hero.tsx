import Button from "./Button";
import Icon from "./Icon";
import SystemTelemetry from "./SystemTelemetry";
import { hero } from "@/lib/content";

export default function Hero() {
  const highlights = [
    { label: "High Concurrency", desc: "Go microservices & low-latency engines" },
    { label: "Tailored UI / UX", desc: "React, Vite & Next.js client systems" },
    { label: "Resilient Data", desc: "MongoDB, PostgreSQL & event streaming" },
    { label: "Direct Engineering", desc: "Senior engineers without layers or noise" },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[38rem] w-[38rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 12%, transparent), transparent 65%)",
        }}
      />

      <div className="container-nezt relative">
        <div className="grid items-center gap-12 pb-16 pt-16 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              <span className="label-tech">{hero.eyebrow}</span>
            </div>

            <h1 className="mt-6 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.6rem]">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[1.0625rem]">
              {hero.lead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} size="md">
                {hero.primaryCta.label}
                <Icon name="arrow-right" size={16} />
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                size="md"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-9 font-display text-xs font-medium tracking-[0.3em] text-muted">
              BUILD. CONNECT. SCALE.
            </p>
          </div>

          <div className="relative lg:col-span-5">
            <SystemTelemetry className="mx-auto w-full max-w-[32rem] text-fg lg:max-w-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 border-t border-border py-8 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="px-1">
              <div className="font-display text-sm font-semibold text-fg">
                {h.label}
              </div>
              <div className="mt-1 text-xs text-muted leading-relaxed">
                {h.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
