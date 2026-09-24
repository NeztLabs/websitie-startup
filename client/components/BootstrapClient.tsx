"use client";

import { useEffect } from "react";

/**
 * Carga el JS de Bootstrap solo en el cliente.
 * Necesario para dropdowns, collapse, modals, tooltips, etc.
 * El CSS (grid + utilities) se importa en app/layout.tsx para SSR.
 */
export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return null;
}
