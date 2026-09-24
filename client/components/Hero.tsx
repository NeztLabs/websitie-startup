import Button from "./Button";
import Icon from "./Icon";
import SystemSchematic from "./SystemSchematic";
import { hero, metrics } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-tech opacity-60 [mask-image:radial-gradient(120%_90%_at_50%_0%,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[38rem] w-[38rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 15%, transparent), transparent 62%)",
        }}
      />

      <div className="container-nezt relative">
        <div className="grid items-center gap-12 pb-16 pt-16 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-28">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              <span className="label-tech">{hero.eyebrow}</span>
            </div>

            <h1 className="mt-7 font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.6rem]">
              {hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-[1.0625rem]">
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

            <p className="mt-10 font-display text-xs font-medium tracking-[0.34em] text-fg">
              BUILD. <span className="text-gold-gradient">CONNECT.</span> SCALE.
            </p>
          </div>

          <div className="relative lg:col-span-5">
            <SystemSchematic className="mx-auto h-[20rem] w-full max-w-[30rem] text-fg sm:h-[26rem] lg:h-[32rem] lg:max-w-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-8 border-t border-border py-10 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="px-1">
              <div className="font-display text-2xl font-semibold text-fg sm:text-3xl">
                {m.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-faint">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
