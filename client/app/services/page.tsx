import type { Metadata } from "next";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services — NEZT",
  description:
    "Custom software, process automation, applied AI, data platforms, systems integration, and security — engineered from architecture to operations.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <CtaBand />
    </main>
  );
}
