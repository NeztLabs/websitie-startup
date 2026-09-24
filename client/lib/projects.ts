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

export const projects: Project[] = [
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
