"use client";

import { useState } from "react";
import { Container, Eyebrow, Panel } from "@/components/ui";
import { GenuCharacter } from "@/components/genu/GenuCharacter";
import { capabilities } from "@/lib/fixtures";

export function Capabilities() {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  return (
    <section id="capabilities" className="border-b border-line py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>One GENU, many capabilities</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The same employee, shaped for the job in front of it.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Pick a task. GENU changes state — the work changes with it. Every
            state maps to a real capability in the product.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* task selector */}
          <div
            className="flex flex-col gap-1.5"
            role="tablist"
            aria-label="Capabilities"
          >
            {capabilities.map((c, idx) => (
              <button
                key={c.key}
                role="tab"
                aria-selected={idx === active}
                onClick={() => setActive(idx)}
                className={`group flex items-center justify-between rounded-lg border px-4 py-3.5 text-left transition-colors ${
                  idx === active
                    ? "border-indigo bg-indigo-tint/50"
                    : "border-line bg-white hover:border-ink-muted/40"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    idx === active ? "text-indigo-deep" : "text-ink"
                  }`}
                >
                  {c.verb}
                </span>
                <span
                  aria-hidden
                  className={`text-lg transition-transform ${
                    idx === active
                      ? "translate-x-0 text-indigo"
                      : "-translate-x-1 text-transparent group-hover:text-line"
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* proof panel */}
          <Panel status={`state · ${cap.state}`}>
            <div className="flex flex-col items-center gap-5 py-4 text-center">
              <GenuCharacter
                key={cap.key}
                state={cap.state}
                size={160}
                motion="working"
              />
              <div>
                <p className="text-xl font-semibold text-ink">{cap.outcome}</p>
                <p className="mt-3 inline-block rounded-md bg-canvas px-3 py-1.5 font-mono text-xs text-ink-muted ring-1 ring-line-soft">
                  {cap.proof}
                </p>
              </div>
            </div>
          </Panel>
        </div>
      </Container>
    </section>
  );
}
