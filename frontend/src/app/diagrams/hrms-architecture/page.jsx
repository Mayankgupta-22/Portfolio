import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import SystemArchitectureDiagram from "@/components/diagrams/SystemArchitectureDiagram";
import {
  nodes,
  edges,
} from "@/components/diagrams/data/hrms-architecture";

export const metadata = {
  title: "Gravity Talent Portal · System Architecture",
  description:
    "System architecture for the Gravity Talent Portal — Client portals → Express App (middleware → auth → routers → controllers → services) → external services (MongoDB, S3, Gemini, Google APIs, Devskiller, LinkedIn, Email).",
};

const LEGEND = [
  { hex: "#71717a", label: "Client" },
  { hex: "#0ea5e9", label: "Middleware" },
  { hex: "#f43f5e", label: "Auth" },
  { hex: "#8b5cf6", label: "Routers" },
  { hex: "#f97316", label: "Controllers" },
  { hex: "#f59e0b", label: "Services" },
  { hex: "#10b981", label: "Data / External" },
];

export default function HrmsArchitecturePage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-background/85 px-6 py-3 backdrop-blur">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to portfolio
        </Link>
        <h1 className="font-mono text-sm font-semibold tracking-tight">
          Gravity Talent Portal · System Architecture
        </h1>
        <Link
          href="/diagrams/hrms-data-model"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          See data model →
        </Link>
      </header>
      <div className="border-b border-border bg-background/60 px-6 py-2 backdrop-blur">
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
          {LEGEND.map((g) => (
            <li key={g.label} className="inline-flex items-center gap-1.5">
              <span
                aria-hidden
                className="size-2 rounded-full"
                style={{ backgroundColor: g.hex }}
              />
              {g.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <SystemArchitectureDiagram nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}
