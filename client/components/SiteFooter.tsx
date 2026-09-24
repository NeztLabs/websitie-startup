import Link from "next/link";
import Logo from "./Logo";
import { brand, footer } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dot-matrix opacity-30 [mask-image:linear-gradient(to_top,black,transparent_70%)]"
      />
      <div className="container-nezt relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size={28} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              {brand.descriptor}
            </p>
            <p className="mt-6 font-display text-xs tracking-[0.3em] text-fg">
              BUILD. <span className="text-gold-gradient">CONNECT.</span> SCALE.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-[0.6875rem] uppercase tracking-[0.2em] text-faint">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="font-display tracking-[0.2em]">
            ENGINEERED SYSTEMS · NEZT LABS
          </p>
        </div>
      </div>
    </footer>
  );
}
