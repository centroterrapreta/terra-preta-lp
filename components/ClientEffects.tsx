"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // Scroll reveal
    const revEls = document.querySelectorAll<HTMLElement>(".r");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.08 }
    );
    revEls.forEach((el) => obs.observe(el));
    requestAnimationFrame(() => {
      revEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });
    });


    // Counter animation
    function animCount(el: HTMLElement) {
      const target = +(el.getAttribute("data-t") ?? 0);
      const dur = 2000;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    const cObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animCount(e.target as HTMLElement);
            cObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>("[data-t]").forEach((el) => cObs.observe(el));

    return () => {
      obs.disconnect();
      cObs.disconnect();
    };
  }, []);

  return null;
}
