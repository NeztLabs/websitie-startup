import type { Dictionary } from "./es";

export const en: Dictionary = {
  brand: {
    name: "NEZT",
    tagline: "BUILD. CONNECT. SCALE.",
    descriptor: "Technology studio — software, automation, applied AI",
    email: "labsnezt@gmail.com",
    locations: ["Remote-first", "Montevideo, Uruguay"],
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Labs", href: "/labs" },
    { label: "Work", href: "/work" },
  ],
  header: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
  langToggle: "Switch to Spanish",
  common: {
    startProject: "Start a project",
  },
  hero: {
    eyebrow: "Software · Automation · Applied AI",
    title: ["We build the systems", "behind ambitious", "companies."],
    lead: "NEZT is a technology studio that designs, engineers, and operates the software and automation infrastructure modern companies depend on. Precise by default. Built to scale.",
    primaryCta: { label: "Start a project", href: "/contact" },
    secondaryCta: { label: "Explore services", href: "/services" },
    highlights: [
      { label: "High Concurrency", desc: "Go microservices & low-latency engines" },
      { label: "Tailored UI / UX", desc: "React, Vite & Next.js client systems" },
      { label: "Resilient Data", desc: "MongoDB, PostgreSQL & event streaming" },
      { label: "Direct Engineering", desc: "Senior engineers without layers or noise" },
    ],
  },
  techStack: {
    label: "Core Production Stack",
    items: [
      { name: "Go (Golang)", role: "High-Perf Services" },
      { name: "React / Vite", role: "Custom Dashboards" },
      { name: "Next.js", role: "Web Platforms" },
      { name: "TypeScript", role: "Type Safety" },
      { name: "MongoDB", role: "Document Databases" },
      { name: "PostgreSQL", role: "Relational Data" },
      { name: "Python", role: "AI & Automation" },
      { name: "Tailwind CSS", role: "Design Systems" },
    ],
  },
  capabilitiesSection: {
    label: "Capabilities",
    title: "One system, six layers.",
    intro:
      "We work across the whole stack, so nothing falls between vendors. Each layer is designed to be replaceable, observable, and yours.",
  },
  capabilities: [
    {
      id: "interface",
      name: "Interfaces",
      summary:
        "Product surfaces, portals, and internal tools people actually use.",
      tags: ["Web apps", "Dashboards", "Design systems"],
    },
    {
      id: "services",
      name: "Services & APIs",
      summary:
        "Domain logic exposed as clean, versioned, observable services.",
      tags: ["APIs", "Event-driven", "Microservices"],
    },
    {
      id: "automation",
      name: "Automation",
      summary:
        "Workflows that remove manual work and keep operations moving.",
      tags: ["Orchestration", "RPA", "Scheduling"],
    },
    {
      id: "intelligence",
      name: "Intelligence",
      summary:
        "Applied AI where it earns its place: prediction, retrieval, agents.",
      tags: ["LLM pipelines", "RAG", "Forecasting"],
    },
    {
      id: "data",
      name: "Data",
      summary:
        "Pipelines and warehouses that turn scattered sources into one truth.",
      tags: ["ETL / ELT", "Warehousing", "Streaming"],
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      summary:
        "Cloud foundations, IaC, and observability engineered for uptime.",
      tags: ["Cloud", "IaC", "Observability"],
    },
  ],
  servicesSection: {
    label: "Services",
    title: "Engineering, from architecture to operations.",
    intro:
      "We take on the systems that carry real weight — and stay accountable for how they perform in production.",
  },
  services: [
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
  ],
  processSection: {
    label: "Process",
    title: "A delivery model built for accountability.",
    intro:
      "Five stages, each with a defined output. You always know what is being built, why, and what comes next.",
  },
  process: [
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
  ],
  principlesSection: {
    label: "Principles",
    title: "How we make decisions.",
    intro:
      "The rules we hold to when a project gets hard — which is when they matter most.",
  },
  principles: [
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
  ],
  labsLabel: "Accelerators & Research",
  labs: {
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
  },
  workSection: {
    label: "Selected Work",
    title: "Real software. Proven outcomes.",
    intro:
      "Explore the platforms, architectures, and internal engines we've engineered for high-demand public and private operations.",
    architectureLabel: "Architecture & Technical Delivery:",
    metricsLabel: "Impact Metrics",
    viewCase: "View Full Case Study",
  },
  contactSection: {
    eyebrow: "Start a project",
    title: "Tell us what you're building.",
    body: "Share the problem and the constraints. We reply within one business day with a point of view and next steps — not a sales deck.",
  },
  contactInfo: {
    emailLabel: "Email",
    studiosLabel: "Studios",
  },
  contact: {
    projectTypes: [
      "Custom software",
      "Process automation",
      "Applied AI",
      "Data platform",
      "Systems integration",
      "Not sure yet",
    ],
    budgets: ["Under $25k", "$25k – $75k", "$75k – $200k", "$200k+", "Ongoing partnership"],
  },
  contactForm: {
    fullName: "Full name",
    workEmail: "Work email",
    company: "Company",
    projectType: "Project type",
    selectOne: "Select one",
    budget: "Budget range",
    selectRange: "Select a range",
    message: "What are you building?",
    namePlaceholder: "Jane Doe",
    companyPlaceholder: "Company name",
    messagePlaceholder: "Describe the problem, the constraints, and what success looks like.",
    replyNote: "We reply within one business day.",
    sending: "Sending…",
    send: "Send message",
    successTitle: "Message received.",
    successBody:
      "Thank you. A senior engineer will get back to you within one business day with next steps.",
    sendAnother: "Send another message",
    errorText:
      "Something went wrong sending your message. Please email us directly at {email}.",
  },
  footer: {
    social: "Social",
    rights: "All rights reserved.",
    columns: [
      {
        title: "Services",
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
          { label: "labsnezt@gmail.com", href: "mailto:labsnezt@gmail.com" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/neztlabs" },
          { label: "Instagram", href: "https://www.instagram.com/nezt.labs" },
        ],
      },
    ],
  },
  socials: [
    { label: "Website", href: "https://websitie-startup.vercel.app/", icon: "globe" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/neztlabs",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/nezt.labs",
      icon: "instagram",
    },
    { label: "Gmail", href: "mailto:labsnezt@gmail.com", icon: "mail" },
  ],
  telemetry: {
    tabs: {
      topology: "// Topology",
      events: "// Live Events",
      metrics: "// Telemetry",
    },
    selectedModule: "Selected Module:",
    statuses: {
      edge: "Active",
      api: "Healthy",
      db: "Synced",
      ui: "PWA Ready",
    },
    details: {
      edge: "TLS termination, global rate-limiting, and smart request routing.",
      api: "High-throughput business logic, concurrent workers, and JWT auth.",
      db: "High-availability document storage for catalog, articles, and orders.",
      ui: "Ultra-fast headless storefronts and responsive admin dashboards.",
    },
    metrics: {
      p95Label: "p95 Response",
      p95Sub: "99.98% SLA bound",
      uptimeLabel: "Uptime Target",
      uptimeSub: "Zero Unplanned Downtime",
      archLabel: "Architecture",
      archValue: "Distributed",
      archSub: "Go + NoSQL + CDN",
      obsLabel: "Observability",
      obsValue: "Structured",
      obsSub: "Telemetry & Audit Logs",
    },
  },
  projectPage: {
    back: "Back to all projects",
    challenge: "The Operational Challenge",
    solution: "The Solution & Engineering Deliverables",
    architecture: "Architecture Diagram",
    flowLabel: "// Data Flow & System Layers:",
    clientEnv: "Client & Environment",
    stack: "Technologies Used",
    ctaText: "Have a project with similar technical challenges?",
    ctaButton: "Talk to an Engineer",
  },
  projects: [
    {
      slug: "museo-interactivo-venezuela",
      title: "Interactive Web Platform & Custom CMS with Go and MongoDB",
      client: "Heritage & Cultural Museum",
      sector: "Cultural Heritage & Public Sector (Venezuela)",
      timeline: "Development & Production Deployment",
      heroSummary:
        "Ultra-high-performance institutional multipage portal coupled with a reactive CMS and a Go backend with MongoDB for cataloging, indexing, and instant search of collections.",
      challenge:
        "We faced the challenge of shaping the digital presence of a public and cultural institution with rigorous aesthetic and historical identity requirements. The client needed an informational website with high visual rigor that preserved the essence of the project while behaving in an agile, interactive way. The system had to solve the search and indexing of articles and heritage pieces, ensuring internal staff could manage the catalog autonomously, without technical dependencies.",
      solution: {
        overview:
          "We designed and implemented a three-layer decoupled architecture: an ultra-high-performance public portal, an interactive editorial management panel for curators, and a low-latency Go microservices API.",
        keyDeliverables: [
          "Multipage public frontend optimized with semantic HTML, modern CSS, and vanilla JavaScript to guarantee search engine indexing (institutional SEO) and load times under 200ms.",
          "Custom admin dashboard built with React, Vite, and Tailwind CSS, letting the museum team create, edit, and categorize articles and pieces with live preview.",
          "High-concurrency API backend written in Go (Golang), optimized to handle simultaneous requests with minimal resource usage.",
          "Document database in MongoDB for flexible modeling of heritage collections, metadata, and complex relationships.",
          "Production infrastructure and continuous deployment on Hostinger Cloud / VPS with reverse proxy and TLS configuration.",
        ],
        architecture:
          "Client Layer (Vanilla JS Multipage + React Vite Dashboard) ➔ Go API Gateway & Business Logic ➔ MongoDB Replica Store ➔ Hostinger Cloud Infrastructure.",
      },
      metrics: [
        { value: "<150ms", label: "Average response latency in the Go API" },
        { value: "100%", label: "Staff autonomy to edit the catalog" },
        { value: "0 sec", label: "Immediate indexing of new articles" },
      ],
      stack: [
        "Go (Golang)",
        "MongoDB",
        "React",
        "Tailwind CSS",
        "Vite",
        "JavaScript",
        "Hostinger VPS",
      ],
      featured: true,
    },
    {
      slug: "power-up-ecommerce",
      title: "High-Performance E-Commerce with Loyalty and Real-Time Analytics",
      client: "Power Up",
      sector: "Health, Nutrition & Functional Food",
      timeline: "Platform Design, Checkout & Operations",
      heroSummary:
        "End-to-end e-commerce platform for a nutrition and healthy food brand, solving 0-to-100 sales traceability, dynamic catalog, and customer retention.",
      challenge:
        "Power Up faced critical difficulties scaling its digital operations: keeping a synchronized public catalog was slow and manual; precise real-time sales and conversion tracking was impossible; and they lacked an automated mechanism to retain recurring customers and incentivize scheduled reorders.",
      solution: {
        overview:
          "We built a modern custom e-commerce platform, integrating a dynamic catalog with faceted filtering, buyer authentication, a secure payment gateway, and a native loyalty engine with an analytics dashboard.",
        keyDeliverables: [
          "Interactive, dynamic product catalog letting customers browse by nutritional categories, benefits, and availability without page reloads.",
          "User authentication and account system with order history and saved addresses.",
          "Secure checkout flow with payment gateway integration and background order confirmation.",
          "Built-in customer loyalty engine: automatic points accumulation, volume-purchase rewards, and benefits for recurring customers.",
          "Admin dashboard with real-time sales metrics, conversion rates, abandoned carts, and customer activity cohorts.",
        ],
        architecture:
          "Next.js / React Client ➔ Secure Checkout Pipeline ➔ Dynamic Catalog Engine ➔ Loyalty Points Processor ➔ Real-time Metrics & Analytics.",
      },
      metrics: [
        { value: "100%", label: "Live sales and order traceability" },
        { value: "+38%", label: "Customer retention with the loyalty engine" },
        { value: "<1 sec", label: "Inventory and catalog updates" },
      ],
      stack: [
        "React / Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Payment Gateway",
        "Loyalty Engine",
        "Real-time Analytics",
      ],
      featured: true,
    },
    {
      slug: "nezt-telemetry-engine",
      title: "Orchestration & Distributed Telemetry Engine for AI Pipelines",
      client: "NEZT Labs (Internal Platform)",
      sector: "Distributed Systems & Automation",
      timeline: "Internal Production Platform",
      heroSummary:
        "The observability and concurrent execution infrastructure built by NEZT to coordinate asynchronous workflows and monitor microservices in production.",
      challenge:
        "Modern systems integrating microservices, databases, and AI pipelines frequently suffer from non-deterministic latencies and silent failures. A centralized runtime was essential to audit every call and guarantee operational resilience.",
      solution: {
        overview:
          "We built a distributed telemetry library and engine that instruments every request with contextual traceability, monitoring p95 response times, error rates, and event flows in real time.",
        keyDeliverables: [
          "Distributed event bus to process asynchronous tasks and webhooks with exponential retries.",
          "Live telemetry panel with service performance and health metrics in microseconds.",
          "Circuit-breaking mechanisms to protect microservices against network degradation.",
        ],
        architecture:
          "Distributed Event Mesh ➔ Go Runtime Workers ➔ In-Memory State Cache ➔ Real-time WebSocket Streaming.",
      },
      metrics: [
        { value: "1.2ms", label: "Average internal processing latency" },
        { value: "99.99%", label: "Availability in production environments" },
        { value: "0 logs", label: "Lost events or transactions" },
      ],
      stack: [
        "Go (Golang)",
        "WebSockets",
        "Event-Driven Architecture",
        "Distributed Telemetry",
        "Redis",
      ],
      featured: true,
    },
  ],
};
