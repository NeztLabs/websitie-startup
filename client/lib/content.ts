export const brand = {
  name: "NEZT",
  tagline: "BUILD. CONNECT. SCALE.",
  descriptor: "Technology studio — software, automation, applied AI",
  email: "hello@nezt.io",
  phone: "+1 (305) 555-0142",
  locations: ["Miami, US", "Buenos Aires, AR", "Remote-first"],
};

export const nav = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Labs", href: "/labs" },
  { label: "Work", href: "/work" },
];

export const hero = {
  eyebrow: "Software · Automation · Applied AI",
  title: ["We build the systems", "behind ambitious", "companies."],
  lead: "NEZT is a technology studio that designs, engineers, and operates the software and automation infrastructure modern companies depend on. Precise by default. Built to scale.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "Explore capabilities", href: "/#capabilities" },
};

export const metrics = [
  { value: "120+", label: "Systems shipped" },
  { value: "99.98%", label: "Managed uptime" },
  { value: "9 yrs", label: "Avg. engineer tenure" },
  { value: "18", label: "Industries served" },
];

export const capabilities = [
  {
    id: "interface",
    name: "Interfaces",
    summary: "Product surfaces, portals, and internal tools people actually use.",
    tags: ["Web apps", "Dashboards", "Design systems"],
  },
  {
    id: "services",
    name: "Services & APIs",
    summary: "Domain logic exposed as clean, versioned, observable services.",
    tags: ["APIs", "Event-driven", "Microservices"],
  },
  {
    id: "automation",
    name: "Automation",
    summary: "Workflows that remove manual work and keep operations moving.",
    tags: ["Orchestration", "RPA", "Scheduling"],
  },
  {
    id: "intelligence",
    name: "Intelligence",
    summary: "Applied AI where it earns its place: prediction, retrieval, agents.",
    tags: ["LLM pipelines", "RAG", "Forecasting"],
  },
  {
    id: "data",
    name: "Data",
    summary: "Pipelines and warehouses that turn scattered sources into one truth.",
    tags: ["ETL / ELT", "Warehousing", "Streaming"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    summary: "Cloud foundations, IaC, and observability engineered for uptime.",
    tags: ["Cloud", "IaC", "Observability"],
  },
];

export const services = [
  {
    icon: "code",
    title: "Custom software",
    body: "Product-grade platforms and internal systems, engineered from architecture to release. We own the hard parts: scale, reliability, and maintainability.",
    points: ["Discovery to delivery", "Senior full-stack teams", "Built to hand off"],
  },
  {
    icon: "flow",
    title: "Process automation",
    body: "We map where work gets stuck and remove the manual steps. Reliable workflows that run unattended and report their own health.",
    points: ["Workflow orchestration", "System-to-system sync", "Human-in-the-loop"],
  },
  {
    icon: "ai",
    title: "Applied AI",
    body: "AI that survives production. Retrieval, evaluation, and guardrails — deployed where it measurably improves the operation, not as a demo.",
    points: ["LLM & RAG pipelines", "Evaluation & guardrails", "Agents & copilots"],
  },
  {
    icon: "database",
    title: "Data platforms",
    body: "One reliable source of truth. Ingestion, modeling, and analytics infrastructure that teams can trust and build on.",
    points: ["Pipelines & warehousing", "Data modeling", "Analytics enablement"],
  },
  {
    icon: "integrate",
    title: "Systems integration",
    body: "We connect the tools you already run — ERPs, CRMs, third-party APIs — into one coherent system instead of a pile of point solutions.",
    points: ["API integration", "Legacy modernization", "Event architecture"],
  },
  {
    icon: "shield",
    title: "Security & reliability",
    body: "Hardened defaults, access control, and monitoring. Systems that hold up under load and under scrutiny.",
    points: ["Hardening & audits", "Observability", "Compliance-ready"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We start from the operation, not the codebase. Workshops, constraints, and success metrics defined up front.",
  },
  {
    step: "02",
    title: "Architect",
    body: "A system design and delivery plan you can interrogate — data flows, boundaries, and trade-offs made explicit.",
  },
  {
    step: "03",
    title: "Build",
    body: "Senior engineers ship in short, reviewable increments with automated tests and continuous delivery from day one.",
  },
  {
    step: "04",
    title: "Automate",
    body: "We replace manual operations with monitored workflows, so the system runs itself and reports its own health.",
  },
  {
    step: "05",
    title: "Scale",
    body: "Performance, observability, and documentation — then a clean handoff, or we stay on to operate and evolve it.",
  },
];

export const principles = [
  {
    title: "Systems, not features",
    body: "Every decision is made in the context of the whole system — data, reliability, and the people running it.",
  },
  {
    title: "Measured outcomes",
    body: "We commit to numbers before we write code, and report against them after. Engineering has to pay for itself.",
  },
  {
    title: "Built to hand off",
    body: "Documentation, tests, and clean architecture are deliverables, not afterthoughts. You own what we build.",
  },
  {
    title: "Senior by default",
    body: "Small teams of experienced engineers. No layers, no hand-offs, no juniors learning on your budget.",
  },
];

export const labs = {
  name: "NEZT LABS",
  tagline: "Research, products, and the parts we reuse.",
  body: "NEZT LABS is where we build the internal products that make every engagement faster: automation engines, AI evaluation tooling, and reusable infrastructure. It is the engineering core of NEZT, turned into software.",
  items: [
    {
      icon: "flow",
      title: "Automation engine",
      body: "A battle-tested orchestration core we deploy to remove manual operations.",
    },
    {
      icon: "ai",
      title: "AI evaluation kit",
      body: "Tooling to measure, guard, and improve applied AI in production.",
    },
    {
      icon: "infrastructure",
      title: "Infrastructure baseline",
      body: "A hardened, compliant cloud foundation we start every build from.",
    },
    {
      icon: "data",
      title: "Data connectors",
      body: "A growing library of integrations between the systems companies run.",
    },
  ],
};

export const work = [
  {
    client: "Ledger",
    sector: "Fintech operations",
    title: "Automated reconciliation across three systems",
    body: "Replaced a manual, spreadsheet-driven close process with an event-driven reconciliation engine and audit trail.",
    metric: "-71%",
    metricLabel: "manual processing",
    tags: ["Automation", "Integration"],
  },
  {
    client: "Atlas Health",
    sector: "Healthcare data",
    title: "A single source of truth for clinical operations",
    body: "Unified fourteen disconnected sources into a governed warehouse with role-based access and lineage.",
    metric: "14→1",
    metricLabel: "data sources unified",
    tags: ["Data", "Infrastructure"],
  },
  {
    client: "Orbit Logistics",
    sector: "Supply chain",
    title: "AI routing that cut cost per delivery",
    body: "A forecasting and routing service that adapts to demand in real time and explains its own decisions.",
    metric: "-22%",
    metricLabel: "cost per delivery",
    tags: ["Applied AI", "Software"],
  },
];

export const contact = {
  eyebrow: "Start a project",
  title: "Tell us what you're building.",
  body: "Share the problem and the constraints. We reply within one business day with a point of view and next steps — not a sales deck.",
  projectTypes: [
    "Custom software",
    "Process automation",
    "Applied AI",
    "Data platform",
    "Systems integration",
    "Not sure yet",
  ],
  budgets: ["Under $25k", "$25k – $75k", "$75k – $200k", "$200k+", "Ongoing partnership"],
};

export const footer = {
  columns: [
    {
      title: "Capabilities",
      links: [
        { label: "Software", href: "/services" },
        { label: "Automation", href: "/services" },
        { label: "Applied AI", href: "/services" },
        { label: "Data platforms", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Process", href: "/process" },
        { label: "NEZT LABS", href: "/labs" },
        { label: "Work", href: "/work" },
        { label: "Principles", href: "/process#principles" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "hello@nezt.io", href: "mailto:hello@nezt.io" },
        { label: "LinkedIn", href: "#" },
        { label: "GitHub", href: "#" },
      ],
    },
  ],
};
