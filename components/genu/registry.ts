// Single source of truth mapping GENU states → approved SVG assets + default
// accessible labels. States, not nine separate characters. (Proposal §GENU.)

export type GenuState =
  | "base"
  | "thinking"
  | "searching"
  | "writing"
  | "calling"
  | "scheduler"
  | "support"
  | "analyst"
  | "marketer";

export const GENU: Record<GenuState, { src: string; label: string }> = {
  base: { src: "/genu/base.svg", label: "GENU, ready" },
  thinking: { src: "/genu/thinking.svg", label: "GENU reasoning" },
  searching: { src: "/genu/searching.svg", label: "GENU retrieving knowledge" },
  writing: { src: "/genu/writing.svg", label: "GENU writing a reply" },
  calling: { src: "/genu/calling.svg", label: "GENU on a call" },
  scheduler: { src: "/genu/scheduler.svg", label: "GENU scheduling" },
  support: { src: "/genu/support.svg", label: "GENU supporting a customer" },
  analyst: { src: "/genu/analyst.svg", label: "GENU analyzing results" },
  marketer: { src: "/genu/marketer.svg", label: "GENU running outreach" },
};
