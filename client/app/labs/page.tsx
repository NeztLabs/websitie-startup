import type { Metadata } from "next";
import Labs from "@/components/Labs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "NEZT LABS — NEZT",
  description:
    "El núcleo de ingeniería de NEZT, convertido en software: motores de automatización, herramientas de evaluación de IA, bases de infraestructura y conectores de datos.",
};

export default function LabsPage() {
  return (
    <main>
      <Labs />
      <CtaBand />
    </main>
  );
}
