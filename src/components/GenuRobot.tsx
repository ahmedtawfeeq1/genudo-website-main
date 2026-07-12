'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

type GenuGlobal = {
  mountAll?: (root?: ParentNode) => void;
  build?: (el: Element, opts?: Record<string, unknown>) => unknown;
};

type Props = {
  /** Face expression: idle | happy | thinking | working | done | wave … (see genu-robot.js) */
  expr?: string;
  /** Prop/action: none | phone | search | write … */
  action?: string;
  /** Brand hue, e.g. "#6468f0" */
  hue?: string;
  /** Enable idle float/hover motion */
  move?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * React wrapper around the original GENU robot builder (public/genu/genu-robot.js,
 * loaded once via <LegacyScripts>). Renders the container the builder expects and
 * asks it to mount on this node after paint.
 *
 * Reusable component — drop <GenuRobot expr="happy" action="phone" hue="#6468f0" />
 * anywhere. The builder reads the data-* attributes below.
 */
export default function GenuRobot({
  expr = 'idle',
  action = 'none',
  hue,
  move,
  className,
  style
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tries = 0;
    const mount = () => {
      const G = (window as unknown as { GENU?: GenuGlobal }).GENU;
      if (G?.mountAll) {
        G.mountAll(el.parentElement ?? document);
      } else if (tries++ < 60) {
        setTimeout(mount, 50);
      }
    };
    mount();
  }, []);

  return (
    <div
      ref={ref}
      className={['genu', className].filter(Boolean).join(' ')}
      data-genu
      data-expr={expr}
      data-action={action}
      data-hue={hue}
      data-move={move ? '' : undefined}
      style={style}
    />
  );
}
