import { Container } from "@/components/ui";
import { GenuCharacter } from "@/components/genu/GenuCharacter";
import { outcomes } from "@/lib/fixtures";

export function OutcomeStrip() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="grid grid-cols-2 gap-px overflow-hidden rounded-none md:grid-cols-4">
        {outcomes.map((o) => (
          <div
            key={o.label}
            className="flex items-center gap-3 px-2 py-6 md:px-4"
          >
            <GenuCharacter state={o.state} size={44} motion="still" label="" />
            <p className="text-sm font-medium leading-snug text-ink">
              {o.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
