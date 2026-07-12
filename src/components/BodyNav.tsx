'use client';

import { useEffect } from 'react';

/**
 * Sets <body data-nav="..."> for pages whose legacy CSS is scoped to it
 * (e.g. who-is-genu's dark-glass header rules). Restores the previous value
 * on unmount so client-side navigation stays clean.
 */
export default function BodyNav({ value }: { value: string }) {
  useEffect(() => {
    const prev = document.body.getAttribute('data-nav');
    document.body.setAttribute('data-nav', value);
    return () => {
      if (prev === null) document.body.removeAttribute('data-nav');
      else document.body.setAttribute('data-nav', prev);
    };
  }, [value]);
  return null;
}
