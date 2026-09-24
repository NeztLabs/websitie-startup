import type { Metadata } from "next";
import Work from "@/components/Work";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Selected Work — NEZT",
  description:
    "Production software, custom web platforms, Go microservices, and automation architectures engineered by NEZT.",
};

export default function WorkPage() {
  return (
    <main>
      <Work />
      <CtaBand />
    </main>
  );
}
