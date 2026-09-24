import Hero from "@/components/Hero";
import TechStackBar from "@/components/TechStackBar";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Labs from "@/components/Labs";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStackBar />
      <Work limit={2} />
      <Capabilities />
      <Labs />
      <CtaBand />
    </main>
  );
}
