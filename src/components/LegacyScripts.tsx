'use client';

import { useEffect } from 'react';

/**
 * Loads a page's original vanilla-JS behavior files (in order) AFTER the
 * server-rendered legacy markup is already in the DOM, so scripts that read
 * the DOM on load find their elements — this reproduces the exact original
 * behavior (hero animations, the who-is-genu flying scene, the GENU robot).
 *
 * This is the deliberate "wrap the existing JS" bootstrap. As you convert a
 * section into a real React component, delete its script from this list and
 * port the logic into a hook/effect.
 */
export default function LegacyScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    let cancelled = false;
    let i = 0;

    const mountRobots = () => {
      const G = (window as unknown as { GENU?: { mountAll?: (r?: ParentNode) => void } }).GENU;
      if (G?.mountAll) G.mountAll(document);
    };

    const loadNext = () => {
      if (cancelled) return;
      if (i >= scripts.length) {
        mountRobots();
        return;
      }
      const src = scripts[i++];
      const existing = document.querySelector(`script[data-legacy="${src}"]`);
      if (existing) {
        loadNext();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.dataset.legacy = src;
      s.onload = loadNext;
      s.onerror = loadNext;
      document.body.appendChild(s);
    };

    loadNext();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
