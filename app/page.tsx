import { Hero } from "@/components/sections/hero";
import { OutcomeStrip } from "@/components/sections/outcome-strip";
import { Capabilities } from "@/components/sections/capabilities";
import { Workflow } from "@/components/sections/workflow";
import { Workforce } from "@/components/sections/workforce";
import { ProofSections } from "@/components/sections/proof";
import { CtaBand } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <OutcomeStrip />
      <Workflow />
      <Capabilities />
      <Workforce />
      <ProofSections />
      <CtaBand />
    </>
  );
}
