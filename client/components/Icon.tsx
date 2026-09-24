import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "code"
  | "flow"
  | "ai"
  | "database"
  | "integrate"
  | "shield"
  | "infrastructure"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "mail"
  | "phone"
  | "pin"
  | "menu"
  | "close"
  | "node";

const paths: Record<IconName, ReactNode> = {
  code: (
    <>
      <path d="m9 8-5 4 5 4" />
      <path d="m15 8 5 4-5 4" />
      <path d="m13 5-2 14" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a3 3 0 0 0 3 3h3" />
      <path d="M15 6h3a3 3 0 0 1 3 3v3" />
    </>
  ),
  ai: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="5" cy="6" r="1.6" />
      <circle cx="19" cy="6" r="1.6" />
      <circle cx="5" cy="18" r="1.6" />
      <circle cx="19" cy="18" r="1.6" />
      <path d="M6.4 7.2 10 10.2M17.6 7.2 14 10.2M6.4 16.8 10 13.8M17.6 16.8 14 13.8" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </>
  ),
  integrate: (
    <>
      <path d="M10 4H6a2 2 0 0 0-2 2v4" />
      <path d="M14 20h4a2 2 0 0 0 2-2v-4" />
      <path d="M8 12h8" />
      <path d="m13 9 3 3-3 3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  infrastructure: (
    <>
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <rect x="3" y="15" width="18" height="5" rx="1" />
      <path d="M7 6.5h.01M7 17.5h.01" />
    </>
  ),
  "arrow-right": <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7m0 0H8m9 0v9" />,
  check: <path d="m5 12 4 4 10-10" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5L15 11.5 19 13v3a2 2 0 0 1-2 2A13 13 0 0 1 4 5a2 2 0 0 1 2-2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6 18 18M18 6 6 18" />,
  node: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
