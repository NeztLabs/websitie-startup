"use client";

import { useEffect, useRef, type ReactNode, type Ref } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "li" | "section" | "article";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const classes = `reveal ${delayClass} ${className}`.trim();

  if (as === "li") {
    return (
      <li ref={ref as Ref<HTMLLIElement>} className={classes}>
        {children}
      </li>
    );
  }

  if (as === "section") {
    return (
      <section ref={ref as Ref<HTMLElement>} className={classes}>
        {children}
      </section>
    );
  }

  if (as === "article") {
    return (
      <article ref={ref as Ref<HTMLElement>} className={classes}>
        {children}
      </article>
    );
  }

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={classes}>
      {children}
    </div>
  );
}
