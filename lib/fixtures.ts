// Deterministic demo data. No live product data, no invented channels, prices,
// integration counts, or metrics — outcomes are qualitative until approved
// evidence exists (proposal: "Claims that must remain data-driven or qualified").

import type { GenuState } from "@/components/genu/registry";

export const APP_URL = "https://app.genudo.ai";
export const SIGNUP_URL = `${APP_URL}/register`;
export const SIGNIN_URL = `${APP_URL}/login`;

// ── Hero: one employee completes a real outcome ──
// New request → knowledge → reply → action → pipeline → done.
export type HeroStep = {
  state: GenuState;
  status: string; // reads like a system status line
  title: string;
  detail: string;
  surface: "inbox" | "knowledge" | "reply" | "action" | "pipeline" | "done";
};

export const heroSteps: HeroStep[] = [
  {
    state: "base",
    status: "request received",
    title: "A new inquiry arrives",
    detail: "A prospect asks whether you deliver to their city.",
    surface: "inbox",
  },
  {
    state: "searching",
    status: "reading knowledge",
    title: "Checks your business knowledge",
    detail: "GENU looks up delivery zones in your knowledge table.",
    surface: "knowledge",
  },
  {
    state: "writing",
    status: "drafting reply",
    title: "Answers from what's true",
    detail: "Confirms same-day delivery and asks for the order size.",
    surface: "reply",
  },
  {
    state: "thinking",
    status: "running action",
    title: "Takes action in your systems",
    detail: "Triggers a connected tool to create the quote.",
    surface: "action",
  },
  {
    state: "scheduler",
    status: "advancing stage",
    title: "Moves the opportunity forward",
    detail: "Advances the deal and schedules a follow-up.",
    surface: "pipeline",
  },
  {
    state: "base",
    status: "done",
    title: "Outcome logged, human in the loop",
    detail: "You can step in from the inbox at any moment.",
    surface: "done",
  },
];

// ── "One GENU, many capabilities" ──
export type Capability = {
  key: string;
  state: GenuState;
  verb: string;
  outcome: string;
  proof: string;
};

export const capabilities: Capability[] = [
  {
    key: "research",
    state: "searching",
    verb: "Research a prospect",
    outcome: "Pulls context from your trusted knowledge before the first reply.",
    proof: "Knowledge tables + file knowledge, grounded in retrieval.",
  },
  {
    key: "call",
    state: "calling",
    verb: "Reach out on a channel",
    outcome: "Meets people where they already message you.",
    proof: "Provider-driven channels through one unified inbox.",
  },
  {
    key: "write",
    state: "writing",
    verb: "Write a follow-up",
    outcome: "Keeps the conversation moving without a manual reminder.",
    proof: "Stage-level follow-ups with per-pipeline limits.",
  },
  {
    key: "schedule",
    state: "scheduler",
    verb: "Schedule the next step",
    outcome: "Books the meeting and advances the stage.",
    proof: "Stages, entry conditions, and next actions.",
  },
  {
    key: "support",
    state: "support",
    verb: "Support a customer",
    outcome: "Handles the request, hands off when judgment matters.",
    proof: "Unified inbox with AI ↔ human handoff.",
  },
  {
    key: "analyze",
    state: "analyst",
    verb: "Report the result",
    outcome: "Shows outcomes, workload, and cost — not message volume.",
    proof: "Funnel, opportunity trends, and cost by stage.",
  },
];

// ── "One conversation, a complete workflow" timeline ──
export const workflowEvents = [
  "Message received",
  "Context retrieved",
  "Response sent",
  "Data captured",
  "Action triggered",
  "Pipeline updated",
  "Follow-up scheduled",
] as const;

// ── Outcome strip — qualitative only ──
export const outcomes = [
  { label: "Respond across channels", state: "calling" as GenuState },
  { label: "Work from trusted knowledge", state: "searching" as GenuState },
  { label: "Take action in connected systems", state: "thinking" as GenuState },
  { label: "Keep humans in control", state: "support" as GenuState },
];

// ── Product proof sections ──
export type Proof = {
  state: GenuState;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

export const proofSections: Proof[] = [
  {
    state: "searching",
    eyebrow: "Know the business",
    title: "Ground every employee in your real knowledge",
    body: "Files and structured knowledge tables give each AI employee the facts of your business, with retrieval and retraining you control.",
    points: ["File & table knowledge", "Retrieval settings", "Retraining flows"],
  },
  {
    state: "calling",
    eyebrow: "Communicate where you operate",
    title: "Meet clients on the channels they already use",
    body: "Provider-driven channels feed one unified inbox, so every conversation lands in the same place with full context.",
    points: ["Provider-driven channels", "Unified inbox", "Real-time messaging"],
  },
  {
    state: "thinking",
    eyebrow: "Do more than answer",
    title: "Connect conversations to the systems that do the work",
    body: "Stage actions call your tools with methods, headers, payloads and retries — and log every execution result.",
    points: ["Webhooks & tools", "API tokens", "MCP server surface"],
  },
  {
    state: "scheduler",
    eyebrow: "Work through a process",
    title: "Turn conversations into a pipeline your team can see",
    body: "Configurable pipelines, stages and entry conditions move opportunities forward, with follow-ups that don't rely on memory.",
    points: ["Pipelines & stages", "Drag-and-drop opportunities", "Follow-up limits"],
  },
  {
    state: "analyst",
    eyebrow: "Operate with oversight",
    title: "See outcomes, workload and cost",
    body: "Human handoff, action results and analytics keep you in control — including cost by stage and follow-up health.",
    points: ["AI ↔ human handoff", "Cost by stage", "Follow-up health"],
  },
];

// ── Small deterministic pipeline mock for the hero surface ──
export const pipelineStages = ["New", "Qualified", "Quoted", "Won"] as const;
