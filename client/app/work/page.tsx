import type { Metadata } from "next";
import Work from "@/components/Work";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Selected work — NEZT",
  description:
    "Systems in production: a sample of what we build and the outcomes it produced across fintech, healthcare, and supply chain.",
};

export default function WorkPage() {
  return (
    <main>
      <Work />
      <CtaBand />
    </main>
  );
}
