import type { Metadata } from "next";
import Process from "@/components/Process";
import Principles from "@/components/Principles";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Process & Principles — NEZT",
  description:
    "A delivery model built for accountability: five stages with defined outputs, and the principles we hold to when a project gets hard.",
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
