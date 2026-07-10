import { Container, Eyebrow, Panel } from "@/components/ui";
import { GenuCharacter } from "@/components/genu/GenuCharacter";
import { proofSections, type Proof } from "@/lib/fixtures";

export function ProofSections() {
  return (
    <section id="product" className="bg-white">
      <Container className="divide-y divide-line">
        {proofSections.map((p, idx) => (
          <ProofRow key={p.eyebrow} p={p} flip={idx % 2 === 1} />
        ))}
      </Container>
    </section>
  );
}

function ProofRow({ p, flip }: { p: Proof; flip: boolean }) {
  return (
    <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      <div className={flip ? "md:order-2" : ""}>
        <div className="flex items-center gap-3">
          <GenuCharacter state={p.state} size={64} motion="ready" label="" />
          <Eyebrow>{p.eyebrow}</Eyebrow>
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {p.title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{p.body}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {p.points.map((pt) => (
            <li
              key={pt}
              className="rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink"
            >
              {pt}
            </li>
          ))}
        </ul>
      </div>

      <div className={flip ? "md:order-1" : ""}>
        <Mock state={p.state} status={p.eyebrow} />
      </div>
    </div>
  );
}

// one small, distinct surface per state — real-software texture, not a card grid
function Mock({ state, status }: { state: Proof["state"]; status: string }) {
  return (
    <Panel status={status.toLowerCase()}>
      {state === "searching" && (
        <table className="w-full text-left text-xs">
          <thead className="eyebrow">
            <tr className="[&>th]:pb-2 [&>th]:font-medium">
              <th>Zone</th>
              <th>Delivery</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody className="font-mono text-ink">
            {[
              ["Alexandria", "Same-day", "EGP 40"],
              ["Cairo", "Same-day", "EGP 30"],
              ["Giza", "Next-day", "EGP 35"],
            ].map((r, i) => (
              <tr
                key={r[0]}
                className={`[&>td]:border-t [&>td]:border-line-soft [&>td]:py-2.5 ${
                  i === 0 ? "text-indigo-deep" : ""
                }`}
              >
                <td>{r[0]}</td>
                <td>{r[1]}</td>
                <td className="tnum">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {state === "calling" && (
        <ul className="space-y-2 text-sm">
          {[
            ["New message", "unread"],
            ["In progress", "GENU"],
            ["Needs you", "handoff"],
          ].map(([label, tag], i) => (
            <li
              key={label}
              className="flex items-center justify-between rounded-md border border-line-soft px-3 py-2.5"
            >
              <span className="flex items-center gap-2.5 text-ink">
                <span
                  className={`size-2 rounded-full ${
                    i === 2 ? "bg-spark" : "bg-indigo"
                  }`}
                />
                {label}
              </span>
              <span className="font-mono text-[11px] text-ink-muted">{tag}</span>
            </li>
          ))}
        </ul>
      )}

      {state === "thinking" && (
        <div className="space-y-2 font-mono text-xs">
          {[
            ["POST /quote", "200"],
            ["POST /crm.contact", "200"],
            ["retry · webhook", "queued"],
          ].map(([call, code]) => (
            <div
              key={call}
              className="flex items-center justify-between rounded-md bg-canvas px-3 py-2.5 ring-1 ring-line-soft"
            >
              <span className="text-ink">{call}</span>
              <span
                className={`tnum ${code === "200" ? "text-indigo-deep" : "text-ink-muted"}`}
              >
                {code}
              </span>
            </div>
          ))}
        </div>
      )}

      {state === "scheduler" && (
        <div className="grid grid-cols-3 gap-2">
          {[
            ["New", 2],
            ["Qualified", 3],
            ["Won", 1],
          ].map(([stage, n], i) => (
            <div key={stage as string} className="rounded-md border border-line-soft p-2.5">
              <p className="eyebrow mb-2 flex items-center justify-between">
                <span>{stage}</span>
                <span className="tnum text-ink">{n}</span>
              </p>
              <div className="space-y-1.5">
                {Array.from({ length: n as number }).map((_, j) => (
                  <div
                    key={j}
                    className={`h-6 rounded ${
                      i === 1 && j === 0
                        ? "bg-indigo-tint ring-1 ring-indigo"
                        : "bg-canvas ring-1 ring-line-soft"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {state === "analyst" && (
        <div className="space-y-3">
          {[
            ["Qualify", 72],
            ["Quote", 54],
            ["Follow-up", 38],
          ].map(([label, pct]) => (
            <div key={label as string}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-ink">{label}</span>
                <span className="tnum font-mono text-ink-muted">{pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-canvas ring-1 ring-line-soft">
                <div
                  className="h-full rounded-full bg-indigo"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
          <p className="eyebrow pt-1">illustrative · not live data</p>
        </div>
      )}
    </Panel>
  );
}
