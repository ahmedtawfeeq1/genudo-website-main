import { Container, Eyebrow } from "@/components/ui";
import { GenuCharacter } from "@/components/genu/GenuCharacter";
import type { GenuState } from "@/components/genu/registry";

// Multiple configured employees passing the same opportunity along a process —
// NOT autonomous multi-agent delegation (proposal is explicit on this).
const team: { state: GenuState; role: string; hands: string }[] = [
  { state: "searching", role: "Research", hands: "Enriches the contact" },
  { state: "calling", role: "Outreach", hands: "Reaches out on channel" },
  { state: "scheduler", role: "Scheduling", hands: "Books the next step" },
  { state: "analyst", role: "Reporting", hands: "Reports the result" },
];

export function Workforce() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Your workforce works together</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Several employees, one opportunity, one process.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Configure more than one AI employee and they move the same
            opportunity along your pipeline — each handing context to the next.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* shared thread line on large screens */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-line lg:block"
          />
          {team.map((m, idx) => (
            <li key={m.role} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 rounded-full bg-canvas p-2">
                <GenuCharacter state={m.state} size={104} motion="ready" label="" />
              </div>
              <span className="eyebrow mt-4 flex items-center gap-2">
                <span className="tnum text-ink-muted/60">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {m.role}
              </span>
              <p className="mt-1.5 text-sm text-ink">{m.hands}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
