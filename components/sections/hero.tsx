"use client";

import { useEffect, useState } from "react";
import { Button, Container, Eyebrow, Panel } from "@/components/ui";
import { GenuCharacter } from "@/components/genu/GenuCharacter";
import { heroSteps, pipelineStages, SIGNUP_URL } from "@/lib/fixtures";
import { useReducedMotion } from "@/lib/use-reduced-motion";

// step index → how far the deal has advanced in the pipeline strip
const stageForStep = [0, 0, 0, 1, 2, 3];

export function Hero() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!playing || reduced) return;
    const t = setInterval(
      () => setI((n) => (n + 1) % heroSteps.length),
      2600,
    );
    return () => clearInterval(t);
  }, [playing, reduced]);

  const step = heroSteps[i];
  const stage = stageForStep[i];
  const show = (s: number) => i >= s;

  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* faint indigo wash, kept under the accent-restraint budget */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,var(--color-indigo-tint)_0%,transparent_60%)]"
      />
      <Container className="relative grid gap-12 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:py-24">
        {/* ── copy ── */}
        <div>
          <Eyebrow>AI workforce · humans in control</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Build AI employees that move work forward.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Give every AI employee the knowledge, communication channels and
            tools it needs to work with clients and stakeholders — from first
            message to completed outcome.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={SIGNUP_URL} className="px-5 py-3 text-base">
              Build your AI employee
            </Button>
            <Button href="#how" variant="secondary" className="px-5 py-3 text-base">
              See how it works
            </Button>
          </div>
        </div>

        {/* ── operational scene: GENU + a real surface ── */}
        <div className="relative">
          <div className="pointer-events-none absolute -top-6 right-2 z-10 sm:right-6">
            <GenuCharacter
              state={step.state}
              size={128}
              motion={i === heroSteps.length - 1 ? "ready" : "working"}
              label={step.status}
            />
          </div>

          <Panel status={`genu · ${step.status}`} className="mt-16">
            {/* live step label */}
            <div className="mb-4 flex items-start gap-3">
              <span
                className="mt-0.5 size-2 shrink-0 rounded-full bg-indigo"
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold text-ink">{step.title}</p>
                <p className="text-sm text-ink-muted">{step.detail}</p>
              </div>
            </div>

            {/* conversation + work rows */}
            <div className="space-y-2.5">
              <Bubble side="in">Do you deliver to Alexandria?</Bubble>

              {show(1) && (
                <Row tone="knowledge" active={i === 1}>
                  Knowledge · Delivery zones → Alexandria · same-day
                </Row>
              )}
              {show(2) && (
                <Bubble side="out">
                  Yes — same-day to Alexandria. How many units?
                </Bubble>
              )}
              {show(3) && (
                <Row tone="action" active={i === 3}>
                  Action · Create quote · <span className="tnum">200 OK</span>
                </Row>
              )}
              {show(4) && (
                <Row tone="followup" active={i >= 4}>
                  Follow-up scheduled · in 2 days
                </Row>
              )}
            </div>

            {/* pipeline strip */}
            <div className="mt-5 border-t border-line-soft pt-4">
              <div className="mb-2 flex items-center justify-between">
                <Eyebrow>Pipeline</Eyebrow>
                {show(5) && (
                  <span className="rounded-full bg-indigo-tint px-2 py-0.5 text-[11px] font-semibold text-indigo-deep">
                    You can take over
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {pipelineStages.map((s, idx) => (
                  <div
                    key={s}
                    className={`rounded-md border px-2 py-2 text-center text-[11px] font-medium transition-colors ${
                      idx === stage
                        ? "border-indigo bg-indigo-tint text-indigo-deep"
                        : idx < stage
                          ? "border-line-soft bg-canvas text-ink-muted"
                          : "border-line-soft text-ink-muted/60"
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          {/* stepper controls */}
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="rounded-md border border-line bg-white px-2.5 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:text-ink"
              aria-label={playing ? "Pause demo" : "Play demo"}
            >
              {playing && !reduced ? "❚❚ Pause" : "▶ Play"}
            </button>
            <div className="flex gap-1.5" role="tablist" aria-label="Demo steps">
              {heroSteps.map((s, idx) => (
                <button
                  key={s.status}
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={s.status}
                  onClick={() => {
                    setI(idx);
                    setPlaying(false);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-6 bg-indigo" : "w-1.5 bg-line hover:bg-ink-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const out = side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
          out
            ? "bg-indigo text-white"
            : "bg-canvas text-ink ring-1 ring-line-soft"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

const toneStyle: Record<string, string> = {
  knowledge: "border-indigo-light/50 bg-indigo-tint/40 text-indigo-deep",
  action: "border-line bg-canvas text-ink",
  followup: "border-line bg-canvas text-ink-muted",
};

function Row({
  tone,
  active,
  children,
}: {
  tone: keyof typeof toneStyle;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md border px-3 py-2 font-mono text-xs transition-shadow ${toneStyle[tone]} ${
        active ? "shadow-[0_0_0_2px_var(--color-indigo-tint)]" : ""
      }`}
    >
      {children}
    </div>
  );
}
