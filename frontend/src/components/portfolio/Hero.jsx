import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stats = [
  { label: "EXPERIENCE", value: "1+ years" },
  { label: "STACK", value: "Full-stack" },
];

export default function Hero() {
  return (
    <header id="top" className="flex min-h-[88vh] flex-col justify-center py-24">
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-4 py-2 text-sm text-muted-foreground">
        <span className="size-2 animate-pulse rounded-full bg-foreground shadow-[0_0_12px_color-mix(in_oklch,var(--foreground)_50%,transparent)]" />
        Open to opportunities
      </div>

      <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        Hi, I&apos;m{" "}
        <span className="relative inline-block">
          Mayank
          <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-foreground/10" />
        </span>
        .
        <br />I build for the web.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Full-stack developer focused on React, Node, and crafting interfaces
        that feel alive. I ship side projects on the weekends, grind LeetCode
        daily, and care deeply about how things feel — not just how they look.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href="#work">
            View my work
            <ArrowDown className="size-4" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="gap-1.5 rounded-xl bg-foreground/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25"
          >
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground">
              {stat.label}
            </span>
            <span className="text-xl font-bold">{stat.value}</span>
          </Card>
        ))}
      </div>
    </header>
  );
}
