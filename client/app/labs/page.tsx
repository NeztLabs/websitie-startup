import type { Metadata } from "next";
import Labs from "@/components/Labs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "NEZT LABS — NEZT",
  description:
    "The engineering core of NEZT, turned into software: automation engines, AI evaluation tooling, infrastructure baselines, and data connectors.",
};

export default function LabsPage() {
  return (
    <main>
      <Labs />
      <CtaBand />
    </main>
  );
}
