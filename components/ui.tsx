import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-indigo text-white hover:bg-indigo-deep shadow-[0_1px_2px_rgba(29,41,61,0.12)]",
  secondary:
    "bg-white text-ink ring-1 ring-line hover:ring-ink-muted hover:bg-canvas",
  ghost: "text-ink hover:bg-line-soft",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: BtnProps) {
  const external = href.startsWith("http");
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${styles[variant]} ${className}`;
  return external ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Operational panel chrome — a real-software frame with a mono status bar.
 *  GENU operates surfaces like these, not a chat window (proposal §visual grammar). */
export function Panel({
  status,
  children,
  className = "",
}: {
  status?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-white shadow-[var(--shadow-ambient)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line-soft bg-canvas/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
        </span>
        {status && (
          <span className="eyebrow ml-1 truncate">{status}</span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
