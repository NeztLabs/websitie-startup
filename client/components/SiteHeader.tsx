"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-nezt flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="NEZT home">
          <Logo size={26} />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            href="/contact"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Start a project
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-sm border border-border text-fg transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav
          className="container-nezt flex flex-col gap-1 py-6"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border py-4 font-display text-base tracking-wide text-fg transition-colors hover:text-accent"
            >
              {item.label}
              <Icon name="arrow-up-right" size={16} className="text-muted" />
            </Link>
          ))}
          <Button
            href="/contact"
            size="md"
            className="mt-5 w-full"
            onClick={() => setOpen(false)}
          >
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  );
}
