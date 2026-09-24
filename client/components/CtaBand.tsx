import Button from "./Button";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { contact } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="container-nezt relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                <span className="label-tech">{contact.eyebrow}</span>
              </div>
              <h2 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {contact.body}
              </p>
            </div>
            <Button href="/contact" size="md" className="shrink-0">
              Start a project
              <Icon name="arrow-right" size={16} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
