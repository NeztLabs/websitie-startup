import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Start a project — NEZT",
  description:
    "Tell us what you're building. Share the problem and the constraints, and we'll reply within one business day with a point of view and next steps.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
