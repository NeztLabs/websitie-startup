export default function SystemSchematic({ className = "" }: { className?: string }) {
  const hub = { x: 360, y: 310 };
  const nodes = [
    { x: 232, y: 172, r: 3.2, pulse: true, accent: true },
    { x: 492, y: 168, r: 2.6, pulse: false, accent: false },
    { x: 528, y: 312, r: 3, pulse: true, accent: true },
    { x: 470, y: 452, r: 2.6, pulse: false, accent: false },
    { x: 250, y: 460, r: 3, pulse: false, accent: true },
    { x: 196, y: 312, r: 2.6, pulse: true, accent: false },
    { x: 360, y: 128, r: 2.4, pulse: false, accent: false },
    { x: 360, y: 500, r: 2.4, pulse: false, accent: true },
  ];

  const links = nodes.map((n) => ({ x: n.x, y: n.y }));
  const crossLinks: [number, number][] = [
    [0, 6],
    [1, 6],
    [2, 3],
    [4, 5],
  ];

  return (
    <svg
      viewBox="0 0 720 640"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="schemGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6E5E2A" />
          <stop offset="0.5" stopColor="#C99A2E" />
          <stop offset="1" stopColor="#E0B342" />
        </linearGradient>
        <radialGradient id="schemFade" cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <mask id="schemMask">
          <rect width="720" height="640" fill="url(#schemFade)" />
        </mask>
      </defs>

      <g mask="url(#schemMask)">
        <g
          stroke="currentColor"
          className="text-border-strong"
          strokeWidth="1"
          opacity="0.55"
        >
          <ellipse cx="360" cy="310" rx="86" ry="62" transform="rotate(-16 360 310)" />
          <ellipse cx="360" cy="310" rx="134" ry="98" transform="rotate(-16 360 310)" />
          <ellipse cx="360" cy="310" rx="188" ry="140" transform="rotate(-16 360 310)" />
          <ellipse cx="360" cy="310" rx="248" ry="188" transform="rotate(-16 360 310)" />
          <ellipse cx="360" cy="310" rx="314" ry="240" transform="rotate(-16 360 310)" />
        </g>

        <g stroke="url(#schemGold)" strokeWidth="1" opacity="0.7">
          {links.map((n, i) => (
            <line
              key={`l-${i}`}
              x1={hub.x}
              y1={hub.y}
              x2={n.x}
              y2={n.y}
              pathLength={1}
              className="draw-line"
              style={{ animationDelay: `${i * 90}ms` }}
            />
          ))}
          {crossLinks.map(([a, b], i) => (
            <line
              key={`c-${i}`}
              x1={links[a].x}
              y1={links[a].y}
              x2={links[b].x}
              y2={links[b].y}
              strokeOpacity="0.35"
              pathLength={1}
              className="draw-line"
              style={{ animationDelay: `${600 + i * 90}ms` }}
            />
          ))}
        </g>

        <circle cx={hub.x} cy={hub.y} r="6.5" fill="url(#schemGold)" />
        <circle
          cx={hub.x}
          cy={hub.y}
          r="14"
          stroke="url(#schemGold)"
          strokeWidth="1"
          opacity="0.5"
        />

        {nodes.map((n, i) => (
          <g key={`n-${i}`}>
            {n.pulse && (
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r * 2.4}
                fill={n.accent ? "url(#schemGold)" : "currentColor"}
                className="node-pulse"
                style={{ animationDelay: `${i * 340}ms` }}
                opacity="0.5"
              />
            )}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.accent ? "url(#schemGold)" : "currentColor"}
              className={n.accent ? "" : "text-muted"}
            />
          </g>
        ))}

        <g stroke="currentColor" className="text-border" strokeWidth="1">
          <path d="M40 40h28M40 40v28" />
          <path d="M680 600h-28M680 600v-28" />
        </g>
      </g>
    </svg>
  );
}
