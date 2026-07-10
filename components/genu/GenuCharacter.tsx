import { GENU, type GenuState } from "./registry";

type Motion = "ready" | "working" | "still";

const SIZES = { avatar: 40, card: 96, section: 200, hero: 300 } as const;

type Props = {
  state?: GenuState;
  /** preset name or explicit pixel size */
  size?: keyof typeof SIZES | number;
  motion?: Motion;
  /** override the registry label; pass "" for a purely decorative instance */
  label?: string;
  className?: string;
};

// ponytail: SVGs ship as static markup, so <img> gives each instance its own
// document — no id/class collisions — and all motion lives in one CSS wrapper
// (what the proposal asked for). Upgrade path: inline + namespace only if a
// state ever needs per-part recoloring from outside.
export function GenuCharacter({
  state = "base",
  size = "section",
  motion = "ready",
  label,
  className = "",
}: Props) {
  const asset = GENU[state];
  const px = typeof size === "number" ? size : SIZES[size];
  const decorative = label === "";
  const alt = decorative ? "" : label ?? asset.label;

  const float =
    motion === "still"
      ? ""
      : motion === "working"
        ? "motion-safe:animate-[genu-float_3s_ease-in-out_infinite]"
        : "motion-safe:animate-[genu-float_6s_ease-in-out_infinite]";

  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: px, height: px }}
    >
      {/* Soft activity halo — reads as "work in progress" without extra props. */}
      {motion === "working" && (
        <span
          aria-hidden
          className="absolute inset-[12%] rounded-full bg-indigo/20 blur-xl motion-safe:animate-[genu-pulse_2.4s_ease-in-out_infinite]"
        />
      )}
      <img
        src={asset.src}
        alt={alt}
        aria-hidden={decorative || undefined}
        width={px}
        height={px}
        draggable={false}
        className={`relative h-full w-full select-none object-contain ${float}`}
      />
    </span>
  );
}
