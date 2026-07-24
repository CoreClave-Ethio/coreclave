import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ValuePillars } from "@/components/value-pillars";
import { CaseShowcase } from "@/components/case-showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValuePillars />
      <CaseShowcase />
    </>
  );
}
