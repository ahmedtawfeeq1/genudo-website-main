"use client";

import { useEffect, useState } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { GenuCharacter } from "@/components/genu/GenuCharacter";
import { workflowEvents } from "@/lib/fixtures";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import type { GenuState } from "@/components/genu/registry";

const eventState: GenuState[] = [
  "base",
  "searching",
  "writing",
  "thinking",
  "thinking",
  "scheduler",
  "scheduler",
];

export function Workflow() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const done = reduced || (!playing && active === workflowEvents.length - 1);

  useEffect(() => {
    if (reduced || !playing) return;
    const t = setInterval(
      () => setActive((n) => (n + 1) % workflowEvents.length),
      1400,
    );
    return () => clearInterval(t);
  }, [playing, reduced]);

  const replay = () => {
    setActive(0);
    setPlaying(true);
  };

  return (
    <section id="how" className="border-b border-line bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>One conversation, a complete workflow</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A single message becomes finished work.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Every conversation runs the same reliable path — retrieve, respond,
              capture, act, advance. Watch it, or step through each event.
            </p>
          </div>
          {!reduced && (
            <button
              onClick={replay}
              className="shrink-0 rounded-md border border-line bg-white px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              ↻ Replay
            </button>
          )}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[200px_1fr] lg:items-center">
          {/* GENU reacts to the active event */}
          <div className="mx-auto">
            <GenuCharacter
              key={done ? "done" : eventState[active]}
              state={done ? "analyst" : eventState[active]}
              size={180}
              motion={done ? "ready" : "working"}
              label={done ? "workflow complete" : workflowEvents[active]}
            />
          </div>

          {/* timeline */}
          <ol className="relative space-y-1">
            <span
              aria-hidden
              className="absolute left-[11px] top-2 bottom-2 w-px bg-line-soft"
            />
            {workflowEvents.map((ev, idx) => {
              const state =
                reduced || idx < active
                  ? "done"
                  : idx === active
                    ? "active"
                    : "todo";
              return (
                <li key={ev}>
                  <button
                    onClick={() => {
                      setActive(idx);
                      setPlaying(false);
                    }}
                    className="group flex w-full items-center gap-4 rounded-md px-2 py-2 text-left transition-colors hover:bg-canvas"
                  >
                    <span
                      className={`relative z-10 grid size-6 shrink-0 place-items-center rounded-full border text-[11px] font-semibold transition-colors ${
                        state === "active"
                          ? "border-indigo bg-indigo text-white"
                          : state === "done"
                            ? "border-indigo bg-indigo-tint text-indigo-deep"
                            : "border-line bg-white text-ink-muted/60"
                      }`}
                    >
                      {state === "done" ? "✓" : idx + 1}
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        state === "todo" ? "text-ink-muted/60" : "text-ink"
                      }`}
                    >
                      {ev}
                    </span>
                    {state === "active" && (
                      <span className="eyebrow ml-auto text-indigo">running</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
