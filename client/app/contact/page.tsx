import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Iniciar un proyecto — NEZT",
  description:
    "Contanos qué estás construyendo. Compartí el problema y las restricciones, y respondemos dentro de un día hábil con un punto de vista y próximos pasos.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
