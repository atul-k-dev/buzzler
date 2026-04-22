'use client';

import { useEffect } from 'react';

/**
 * SmoothScroll — uses native scroll with CSS scroll-behavior: smooth only.
 * Previously used locomotive-scroll which conflicted with Framer Motion's
 * useInView / IntersectionObserver and caused glitching on scrollbar/forced scroll.
 *
 * We keep this wrapper in case we want to add Lenis later in a
 * Framer-Motion-compatible way (useScroll hook), but for now it's a passthrough.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure the browser uses smooth scroll for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return <>{children}</>;
}
