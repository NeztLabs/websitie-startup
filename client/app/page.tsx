import Hero from "@/components/Hero";
import TechStackBar from "@/components/TechStackBar";
import Work from "@/components/Work";
import Labs from "@/components/Labs";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStackBar />
      <Work limit={2} />
      <Labs />
      <CtaBand />
    </main>
  );
}
