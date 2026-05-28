import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import DataModelDiagram from "@/components/diagrams/DataModelDiagram";
import {
  entities,
  relations,
  groups,
} from "@/components/diagrams/data/hrms-data-model";

export const metadata = {
  title: "HRMS · Data Model",
  description:
    "Interactive data model for the HRMS / Talent Recruitment Platform — entities, relationships, and groups visualized with React Flow.",
};

const LEGEND = [
  { color: "blue",   label: "User & Profile",       hex: "#0ea5e9" },
  { color: "green",  label: "Jobs & Applications",  hex: "#10b981" },
  { color: "purple", label: "Assessment",           hex: "#8b5cf6" },
  { color: "yellow", label: "Reference",            hex: "#f59e0b" },
];

export default function HrmsDataModelPage() {
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
          HRMS · Data Model
        </h1>
        <Link
          href="/diagrams/hrms-architecture"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          See architecture &rarr;
        </Link>
      </header>
      <div className="border-b border-border bg-background/60 px-6 py-2 backdrop-blur">
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
          {LEGEND.map((g) => (
            <li key={g.color} className="inline-flex items-center gap-1.5">
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
        <DataModelDiagram
          entities={entities}
          relations={relations}
          groups={groups}
          direction="LR"
        />
      </div>
    </div>
  );
}
