export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  sector: string;
  timeline: string;
  heroSummary: string;
  challenge: string;
  solution: {
    overview: string;
    keyDeliverables: string[];
    architecture: string;
  };
  metrics: ProjectMetric[];
  stack: string[];
  featured: boolean;
}

export const es = {
  brand: {
    name: "NEZT",
    tagline: "BUILD. CONNECT. SCALE.",
    descriptor: "Estudio de tecnología — software, automatización, IA aplicada",
    email: "labsnezt@gmail.com",
    locations: ["Trabajo remoto", "Montevideo, Uruguay"],
  },
  nav: [
    { label: "Servicios", href: "/services" },
    { label: "Proceso", href: "/process" },
    { label: "Labs", href: "/labs" },
    { label: "Trabajos", href: "/work" },
  ],
  header: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  theme: {
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
  },
  langToggle: "Cambiar a inglés",
  common: {
    startProject: "Iniciar un proyecto",
  },
  hero: {
    eyebrow: "Software · Automatización · IA aplicada",
    title: ["Construimos los sistemas", "que sostienen a las", "empresas ambiciosas."],
    lead: "NEZT es un estudio de tecnología que diseña, construye e opera la infraestructura de software y automatización de la que dependen las empresas modernas. Preciso por defecto. Construido para escalar.",
    primaryCta: { label: "Iniciar un proyecto", href: "/contact" },
    secondaryCta: { label: "Explorar servicios", href: "/services" },
    highlights: [
      { label: "Alta concurrencia", desc: "Microservicios en Go y motores de baja latencia" },
      { label: "UI / UX a medida", desc: "Sistemas cliente con React, Vite y Next.js" },
      { label: "Datos resilientes", desc: "MongoDB, PostgreSQL y streaming de eventos" },
      { label: "Ingeniería directa", desc: "Ingenieros senior, sin capas ni ruido" },
    ],
  },
  techStack: {
    label: "Stack de producción principal",
    items: [
      { name: "Go (Golang)", role: "Servicios de alto rendimiento" },
      { name: "React / Vite", role: "Dashboards a medida" },
      { name: "Next.js", role: "Plataformas web" },
      { name: "TypeScript", role: "Seguridad de tipos" },
      { name: "MongoDB", role: "Bases documentales" },
      { name: "PostgreSQL", role: "Datos relacionales" },
      { name: "Python", role: "IA y automatización" },
      { name: "Tailwind CSS", role: "Sistemas de diseño" },
    ],
  },
  capabilitiesSection: {
    label: "Capacidades",
    title: "Un sistema, seis capas.",
    intro:
      "Trabajamos en toda la pila, así que nada queda atrapado entre proveedores. Cada capa está diseñada para ser reemplazable, observable y tuya.",
  },
  capabilities: [
    {
      id: "interface",
      name: "Interfaces",
      summary:
        "Superficies de producto, portales y herramientas internas que la gente usa de verdad.",
      tags: ["Aplicaciones web", "Dashboards", "Sistemas de diseño"],
    },
    {
      id: "services",
      name: "Servicios y APIs",
      summary:
        "Lógica de dominio expuesta como servicios limpios, versionados y observables.",
      tags: ["APIs", "Orientado a eventos", "Microservicios"],
    },
    {
      id: "automation",
      name: "Automatización",
      summary:
        "Flujos que eliminan el trabajo manual y mantienen la operación en movimiento.",
      tags: ["Orquestación", "RPA", "Tareas programadas"],
    },
    {
      id: "intelligence",
      name: "Inteligencia",
      summary:
        "IA aplicada donde se gana su lugar: predicción, recuperación, agentes.",
      tags: ["Pipelines LLM", "RAG", "Pronósticos"],
    },
    {
      id: "data",
      name: "Datos",
      summary:
        "Pipelines y almacenes que convierten fuentes dispersas en una sola verdad.",
      tags: ["ETL / ELT", "Almacenamiento", "Streaming"],
    },
    {
      id: "infrastructure",
      name: "Infraestructura",
      summary:
        "Fundamentos cloud, IaC y observabilidad diseñados para el uptime.",
      tags: ["Cloud", "IaC", "Observabilidad"],
    },
  ],
  servicesSection: {
    label: "Servicios",
    title: "Ingeniería, de la arquitectura a las operaciones.",
    intro:
      "Nos hacemos cargo de los sistemas que pesan de verdad — y respondemos por cómo rinden en producción.",
  },
  services: [
    {
      icon: "code",
      title: "Software a medida",
      body: "Plataformas de producto y sistemas internos, diseñados de la arquitectura al release. Nos ocupamos de las partes duras: escala, confiabilidad y mantenibilidad.",
      points: ["De discovery a entrega", "Equipos full-stack senior", "Listo para entregar"],
    },
    {
      icon: "flow",
      title: "Automatización de procesos",
      body: "Mapeamos dónde se traba el trabajo y eliminamos los pasos manuales. Flujos confiables que corren sin supervisión y reportan su propia salud.",
      points: ["Orquestación de flujos", "Sincronización sistema a sistema", "Humano en el loop"],
    },
    {
      icon: "ai",
      title: "IA aplicada",
      body: "IA que sobrevive en producción. Recuperación, evaluación y salvaguardas — desplegada donde mejora mediblemente la operación, no como demo.",
      points: ["Pipelines LLM y RAG", "Evaluación y salvaguardas", "Agentes y copilots"],
    },
    {
      icon: "database",
      title: "Plataformas de datos",
      body: "Una única fuente de verdad. Ingesta, modelado e infraestructura de analítica en la que los equipos pueden confiar.",
      points: ["Pipelines y almacenamiento", "Modelado de datos", "Habilitación analítica"],
    },
    {
      icon: "integrate",
      title: "Integración de sistemas",
      body: "Conectamos las herramientas que ya usan — ERPs, CRMs, APIs de terceros — en un sistema coherente en vez de un montón de puntos sueltos.",
      points: ["Integración por API", "Modernización de legado", "Arquitectura de eventos"],
    },
    {
      icon: "shield",
      title: "Seguridad y confiabilidad",
      body: "Valores seguros por defecto, control de acceso y monitoreo. Sistemas que aguantan carga y escrutinio.",
      points: ["Endurecimiento y auditorías", "Observabilidad", "Listo para cumplimiento"],
    },
  ],
  processSection: {
    label: "Proceso",
    title: "Un modelo de entrega pensado en la responsabilidad.",
    intro:
      "Cinco etapas, cada una con un resultado definido. Siempre sabés qué se está construyendo, por qué y qué sigue.",
  },
  process: [
    {
      step: "01",
      title: "Descubrir",
      body: "Partimos de la operación, no del código. Talleres, restricciones y métricas de éxito definidas desde el inicio.",
    },
    {
      step: "02",
      title: "Arquitecturar",
      body: "Un diseño de sistema y plan de entrega que podés interrogar — flujos de datos, límites y compromisos hechos explícitos.",
    },
    {
      step: "03",
      title: "Construir",
      body: "Ingenieros senior entregan en incrementos cortos y revisables, con tests automatizados y despliegue continuo desde el día uno.",
    },
    {
      step: "04",
      title: "Automatizar",
      body: "Reemplazamos operaciones manuales con flujos monitoreados, para que el sistema funcione solo y reporte su propia salud.",
    },
    {
      step: "05",
      title: "Escalar",
      body: "Rendimiento, observabilidad y documentación — y luego una entrega limpia, o nos quedamos a operar y evolucionar el sistema.",
    },
  ],
  principlesSection: {
    label: "Principios",
    title: "Cómo tomamos decisiones.",
    intro:
      "Las reglas que sostenemos cuando el proyecto se pone difícil — que es cuando más importan.",
  },
  principles: [
    {
      title: "Sistemas, no features",
      body: "Cada decisión se toma en contexto del sistema completo — datos, confiabilidad y las personas que lo operan.",
    },
    {
      title: "Resultados medidos",
      body: "Nos comprometemos con números antes de escribir código, y reportamos contra ellos después. La ingeniería tiene que pagarse sola.",
    },
    {
      title: "Hecho para entregar",
      body: "Documentación, tests y arquitectura limpia son entregables, no afterthoughts. Lo que construimos es tuyo.",
    },
    {
      title: "Senior por defecto",
      body: "Equipos chicos de ingenieros experimentados. Sin capas, sin hand-offs, sin juniors aprendiendo con tu presupuesto.",
    },
  ],
  labsLabel: "Aceleradores e investigación",
  labs: {
    body: "NEZT LABS es donde construimos los productos internos que hacen que cada proyecto sea más rápido: motores de automatización, herramientas de evaluación de IA e infraestructura reutilizable. Es el núcleo de ingeniería de NEZT, convertido en software.",
    items: [
      {
        icon: "flow",
        title: "Motor de automatización",
        body: "Un núcleo de orquestación probado en batalla que desplegamos para eliminar operaciones manuales.",
      },
      {
        icon: "ai",
        title: "Kit de evaluación de IA",
        body: "Herramientas para medir, proteger y mejorar la IA aplicada en producción.",
      },
      {
        icon: "infrastructure",
        title: "Base de infraestructura",
        body: "Una base cloud endurecida y conforme a normas con la que arrancamos cada proyecto.",
      },
      {
        icon: "data",
        title: "Conectores de datos",
        body: "Una biblioteca creciente de integraciones entre los sistemas que corren las empresas.",
      },
    ],
  },
  workSection: {
    label: "Trabajos seleccionados",
    title: "Software real. Resultados probados.",
    intro:
      "Explorá las plataformas, arquitecturas y motores internos que diseñamos para operaciones públicas y privadas de alta demanda.",
    architectureLabel: "Arquitectura & Entrega Técnica:",
    metricsLabel: "Métricas de Impacto",
    viewCase: "Ver Caso Completo",
  },
  contactSection: {
    eyebrow: "Iniciar un proyecto",
    title: "Contanos qué estás construyendo.",
    body: "Compartí el problema y las restricciones. Respondemos dentro de un día hábil con un punto de vista y próximos pasos — no con un deck de ventas.",
  },
  contactInfo: {
    emailLabel: "Email",
    studiosLabel: "Estudios",
  },
  contact: {
    projectTypes: [
      "Software a medida",
      "Automatización de procesos",
      "IA aplicada",
      "Plataforma de datos",
      "Integración de sistemas",
      "Todavía no lo sé",
    ],
    budgets: [
      "Menos de $25k",
      "$25k – $75k",
      "$75k – $200k",
      "$200k+",
      "Alianza continua",
    ],
  },
  contactForm: {
    fullName: "Nombre completo",
    workEmail: "Email de trabajo",
    company: "Empresa",
    projectType: "Tipo de proyecto",
    selectOne: "Seleccionar una opción",
    budget: "Presupuesto",
    selectRange: "Seleccionar un rango",
    message: "¿Qué estás construyendo?",
    namePlaceholder: "Jane Doe",
    companyPlaceholder: "Nombre de la empresa",
    messagePlaceholder: "Describí el problema, las restricciones y cómo se ve el éxito.",
    replyNote: "Respondemos dentro de un día hábil.",
    sending: "Enviando…",
    send: "Enviar mensaje",
    successTitle: "Mensaje recibido.",
    successBody:
      "Gracias. Un ingeniero senior te responderá dentro de un día hábil con los próximos pasos.",
    sendAnother: "Enviar otro mensaje",
    errorText:
      "Algo salió mal al enviar tu mensaje. Escribinos directo a {email}.",
  },
  footer: {
    social: "Redes",
    rights: "Todos los derechos reservados.",
    columns: [
      {
        title: "Servicios",
        links: [
          { label: "Software", href: "/services" },
          { label: "Automatización", href: "/services" },
          { label: "IA aplicada", href: "/services" },
          { label: "Plataformas de datos", href: "/services" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Proceso", href: "/process" },
          { label: "NEZT LABS", href: "/labs" },
          { label: "Trabajos", href: "/work" },
          { label: "Principios", href: "/process#principles" },
        ],
      },
      {
        title: "Contacto",
        links: [
          { label: "Contacto", href: "/contact" },
          { label: "labsnezt@gmail.com", href: "mailto:labsnezt@gmail.com" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/neztlabs" },
          { label: "Instagram", href: "https://www.instagram.com/nezt.labs" },
        ],
      },
    ],
  },
  socials: [
    { label: "Sitio web", href: "https://websitie-startup.vercel.app/", icon: "globe" },
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
      topology: "// Topología",
      events: "// Eventos en vivo",
      metrics: "// Telemetría",
    },
    selectedModule: "Módulo seleccionado:",
    statuses: {
      edge: "Activo",
      api: "Saludable",
      db: "Sincronizado",
      ui: "PWA Ready",
    },
    details: {
      edge: "Terminación TLS, rate-limiting global y enrutamiento inteligente de requests.",
      api: "Lógica de negocio de alto throughput, workers concurrentes y autenticación JWT.",
      db: "Almacenamiento de documentos de alta disponibilidad para catálogo, artículos y pedidos.",
      ui: "Storefronts headless ultrarrápidos y dashboards admin responsivos.",
    },
    metrics: {
      p95Label: "Respuesta p95",
      p95Sub: "99.98% bajo SLA",
      uptimeLabel: "Objetivo de uptime",
      uptimeSub: "Sin caídas no planificadas",
      archLabel: "Arquitectura",
      archValue: "Distribuida",
      archSub: "Go + NoSQL + CDN",
      obsLabel: "Observabilidad",
      obsValue: "Estructurada",
      obsSub: "Telemetría y logs de auditoría",
    },
  },
  projectPage: {
    back: "Volver a todos los proyectos",
    challenge: "El Desafío Operativo",
    solution: "La Solución & Entregables de Ingeniería",
    architecture: "Diagrama de Arquitectura",
    flowLabel: "// Flujo de Datos & Capas de Sistema:",
    clientEnv: "Cliente & Entorno",
    stack: "Tecnologías Utilizadas",
    ctaText: "¿Tienes un proyecto con desafíos técnicos similares?",
    ctaButton: "Hablar con un Ingeniero",
  },
  projects: [
    {
      slug: "museo-interactivo-venezuela",
      title: "Plataforma Web Interactiva y CMS a Medida con Go y MongoDB",
      client: "Museo Patrimonial & Cultural",
      sector: "Patrimonio Cultural & Gestión Pública (Venezuela)",
      timeline: "Desarrollo & Despliegue en Producción",
      heroSummary:
        "Portal institucional multipage de ultra alto rendimiento acoplado a un CMS reactivo y un backend en Go con MongoDB para catalogación, indexación y búsqueda instantánea de colecciones.",
      challenge:
        "Nos enfrentamos al desafío de concebir la presencia digital de una institución pública y cultural con requerimientos estéticos y de identidad histórica muy rigurosos. El cliente requería una web informativa con alto rigor visual que mantuviera la esencia del proyecto, pero con un comportamiento ágil e interactivo. El sistema debía resolver la búsqueda e indexación de artículos y patrimonio, garantizando que el personal interno pudiera gestionar el catálogo de forma autónoma y sin dependencias técnicas.",
      solution: {
        overview:
          "Diseñamos e implementamos una arquitectura desacoplada en tres capas: un portal público de ultra alto rendimiento, un panel de gestión editorial interactivo para curadores y una API de microservicios en Go de baja latencia.",
        keyDeliverables: [
          "Frontend público multipage optimizado con HTML semántico, CSS moderno y JavaScript vanilla para garantizar indexación en buscadores (SEO institucional) y tiempos de carga inferiores a 200ms.",
          "Dashboard administrativo a medida desarrollado con React, Vite y Tailwind CSS, permitiendo al equipo del museo crear, editar y categorizar artículos y piezas con previsualización en vivo.",
          "Backend API de alta concurrencia escrito en Go (Golang), optimizado para gestionar peticiones simultáneas con consumo mínimo de recursos.",
          "Base de datos de documentos en MongoDB para modelado flexible de colecciones patrimoniales, metadatos y relaciones complejas.",
          "Infraestructura de producción y despliegue continuo sobre Hostinger Cloud / VPS con configuración de proxy inverso y TLS.",
        ],
        architecture:
          "Client Layer (Vanilla JS Multipage + React Vite Dashboard) ➔ Go API Gateway & Business Logic ➔ MongoDB Replica Store ➔ Hostinger Cloud Infrastructure.",
      },
      metrics: [
        { value: "<150ms", label: "Latencia media de respuesta en API Go" },
        { value: "100%", label: "Autonomía del personal para editar catálogo" },
        { value: "0 seg", label: "Indexación inmediata de nuevos artículos" },
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
      title: "E-Commerce de Alto Rendimiento con Fidelización y Analítica en Tiempo Real",
      client: "Power Up",
      sector: "Salud, Nutrición & Functional Food",
      timeline: "Diseño de Plataforma, Checkout & Operación",
      heroSummary:
        "Plataforma integral de comercio electrónico para una marca de nutrición y alimentos saludables, resolviendo la trazabilidad de ventas de 0 a 100%, catálogo dinámico y retención de clientes.",
      challenge:
        "Power Up experimentaba dificultades críticas para escalar sus operaciones digitales: mantener un catálogo público sincronizado resultaba lento y manual; era imposible realizar un seguimiento analítico preciso de las ventas y la conversión en tiempo real; y carecían de un mecanismo automatizado para fidelizar clientes recurrentes e incentivar la recompra programada.",
      solution: {
        overview:
          "Construimos una plataforma e-commerce moderna a medida, integrando catálogo dinámico con filtros facetados, autenticación de compradores, pasarela de pago segura y un motor nativo de fidelización con dashboard analítico.",
        keyDeliverables: [
          "Catálogo de productos interactivo y dinámico, permitiendo a los clientes explorar por categorías nutricionales, beneficios y disponibilidad sin recargas de página.",
          "Sistema de autenticación y cuentas de usuario con historial de pedidos y direcciones guardadas.",
          "Flujo de checkout seguro con integración de pasarela de pagos y confirmación de órdenes en segundo plano.",
          "Motor de fidelización de clientes integrado: acumulación automática de puntos, recompensas por volumen de compra y beneficios para clientes recurrentes.",
          "Dashboard administrativo con métricas de ventas en tiempo real, tasas de conversión, carritos abandonados y cohortes de actividad de clientes.",
        ],
        architecture:
          "Next.js / React Client ➔ Secure Checkout Pipeline ➔ Dynamic Catalog Engine ➔ Loyalty Points Processor ➔ Real-time Metrics & Analytics.",
      },
      metrics: [
        { value: "100%", label: "Trazabilidad de ventas y órdenes en vivo" },
        { value: "+38%", label: "Retención de clientes con motor de fidelización" },
        { value: "<1 seg", label: "Actualización de inventario y catálogo" },
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
      title: "Motor de Orquestación y Telemetría Distribuida para Pipelines de IA",
      client: "NEZT Labs (Internal Platform)",
      sector: "Sistemas Distribuidos & Automatización",
      timeline: "Plataforma Interna de Producción",
      heroSummary:
        "La infraestructura de observabilidad y ejecución concurrente desarrollada por NEZT para coordinar flujos de trabajo asíncronos y monitorizar microservicios en producción.",
      challenge:
        "Los sistemas modernos que integran microservicios, bases de datos y pipelines de IA sufren frecuentemente de latencias no deterministas y fallos silenciosos. Era indispensable contar con un runtime centralizado que auditara cada llamada y garantizara resiliencia operativa.",
      solution: {
        overview:
          "Desarrollamos una librería y motor de telemetría distribuida que instrumenta cada solicitud con trazabilidad contextual, monitoreando tiempos de respuesta p95, tasas de error y flujos de eventos en tiempo real.",
        keyDeliverables: [
          "Bus de eventos distribuido para procesar tareas asíncronas y webhooks con reintentos exponenciales.",
          "Panel de telemetría en vivo con métricas de rendimiento y salud de servicios en microsegundos.",
          "Mecanismos de circuit-breaking para proteger microservicios ante degradaciones de red.",
        ],
        architecture:
          "Distributed Event Mesh ➔ Go Runtime Workers ➔ In-Memory State Cache ➔ Real-time WebSocket Streaming.",
      },
      metrics: [
        { value: "1.2ms", label: "Latencia media de procesamiento interno" },
        { value: "99.99%", label: "Disponibilidad en entornos de producción" },
        { value: "0 logs", label: "Pérdida de eventos o transacciones" },
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

export type Dictionary = typeof es;
