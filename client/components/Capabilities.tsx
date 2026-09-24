import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative border-y border-border bg-bg-elev/50 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dot-matrix opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="container-nezt relative">
        <Reveal>
          <SectionHeading
            label="Capabilities"
            title="One system, six layers."
            intro="We work across the whole stack, so nothing falls between vendors. Each layer is designed to be replaceable, observable, and yours."
          />
        </Reveal>

        <div className="mt-14 border-t border-border">
          {capabilities.map((layer, i) => (
            <Reveal key={layer.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group grid items-center gap-4 border-b border-border py-6 transition-colors duration-200 hover:bg-surface/50 md:grid-cols-12 md:gap-8 md:px-2">
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="font-display text-[0.6875rem] tracking-[0.2em] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150"
                  />
                  <h3 className="font-display text-base font-semibold text-fg transition-colors duration-200 group-hover:text-accent">
                    {layer.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">
                  {layer.summary}
                </p>
                <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xs border border-border px-2.5 py-1 text-[0.6875rem] tracking-wide text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
