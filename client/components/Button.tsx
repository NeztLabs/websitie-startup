import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-all duration-200 ease-[var(--ease-out-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-contrast hover:bg-accent-bright shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]",
  secondary:
    "border border-border-strong bg-transparent text-fg hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-5 py-3 text-sm",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLElement>;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  type = "button",
  onClick,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
