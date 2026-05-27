"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

/**
 * The card that sits at each timeline node. A shadcn <Card> with the shared
 * portfolio treatment: a hairline gradient along the top edge and a subtle
 * lift on hover.
 */
export function TimelineCard({ className, ...props }) {
  return (
    <Card
      className={cn(
        "relative gap-0 overflow-hidden py-0 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.45)] transition-all duration-300",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-foreground/25 before:to-transparent",
        "hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * Vertical timeline rail shared by the Projects, Experience and Education
 * sections. A faint static line runs the full height; a brighter "progress"
 * line fills in as the section scrolls through the viewport.
 */
export function Timeline({ children, className }) {
  const railRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    const progress = progressRef.current;
    if (!rail || !progress) return;

    function update() {
      const rect = rail.getBoundingClientRect();
      const total = rect.height;
      const scrolled = Math.min(
        Math.max((window.innerHeight * 0.5 - rect.top) / total, 0),
        1
      );
      progress.style.height = `${scrolled * total}px`;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={railRef} className={cn("relative pl-10 sm:pl-[60px]", className)}>
      {/* Static rail */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-3.5 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent sm:left-5" />
      {/* Progress fill */}
      <div
        ref={progressRef}
        style={{ height: 0 }}
        className="pointer-events-none absolute top-0 left-3.5 z-[1] w-0.5 bg-gradient-to-b from-foreground/10 via-foreground to-foreground/10 shadow-[0_0_14px_color-mix(in_oklch,var(--foreground)_40%,transparent)] transition-[height] duration-300 ease-out sm:left-5"
      />
      {children}
    </div>
  );
}

/**
 * A single node on the timeline: a dot, a short connector and whatever card
 * you pass as children. Reveals itself when scrolled into view.
 */
export function TimelineItem({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset.inView = "true";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-in-view="false"
      className={cn(
        "group/item relative mb-16 translate-y-10 opacity-0 transition-[opacity,transform] duration-700 ease-out last:mb-0",
        "data-[in-view=true]:translate-y-0 data-[in-view=true]:opacity-100",
        className
      )}
    >
      {/* Connector from rail to card */}
      <span className="pointer-events-none absolute top-[31px] -left-5 h-0.5 w-3.5 bg-border sm:top-[35px] sm:-left-7 sm:w-[22px]" />
      {/* Dot on the rail */}
      <span className="pointer-events-none absolute top-[26px] -left-[33px] z-[2] size-3 rounded-full border-2 border-foreground/40 bg-background transition-all duration-500 group-data-[in-view=true]/item:scale-110 group-data-[in-view=true]/item:border-foreground group-data-[in-view=true]/item:bg-foreground group-data-[in-view=true]/item:shadow-[0_0_0_5px_color-mix(in_oklch,var(--foreground)_8%,transparent),0_0_18px_color-mix(in_oklch,var(--foreground)_40%,transparent)] sm:top-7 sm:-left-[47px] sm:size-4" />
      {children}
    </div>
  );
}
