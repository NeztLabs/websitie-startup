import type { Metadata } from "next";
import Work from "@/components/Work";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Trabajos seleccionados — NEZT",
  description:
    "Software en producción, plataformas web a medida, microservicios en Go y arquitecturas de automatización diseñados por NEZT.",
};

export default function WorkPage() {
  return (
    <main>
      <Work />
      <CtaBand />
    </main>
  );
}
