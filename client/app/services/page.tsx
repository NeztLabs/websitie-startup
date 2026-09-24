import type { Metadata } from "next";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Servicios — NEZT",
  description:
    "Software a medida, automatización de procesos, IA aplicada, plataformas de datos, integración de sistemas y seguridad — desde la arquitectura hasta las operaciones.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <CtaBand />
    </main>
  );
}
