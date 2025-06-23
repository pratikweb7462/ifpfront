// hooks/useGsapAnimation.ts
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = (
  ref: React.RefObject<HTMLElement>,
  animation: (el: HTMLElement) => void
) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      animation(ref.current!);
    }, ref);

    return () => ctx.revert();
  }, [pathname]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);
};
