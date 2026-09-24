import type { Metadata } from "next";
import Process from "@/components/Process";
import Principles from "@/components/Principles";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Proceso & Principios — NEZT",
  description:
    "Un modelo de entrega pensado en la responsabilidad: cinco etapas con resultados definidos, y los principios que sostenemos cuando el proyecto se pone difícil.",
};

export default function ProcessPage() {
  return (
    <main>
      <Process />
      <Principles />
      <CtaBand />
    </main>
  );
}
