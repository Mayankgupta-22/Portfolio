import { Handle, Position } from "@xyflow/react";

import { cn } from "@/lib/utils";

// Same palette as the data-model EntityNode, plus a neutral "gray" for
// non-branded surfaces (Client, Email, etc.).
const COLORS = {
  blue:   { accent: "bg-sky-500",     text: "text-sky-400",     ring: "ring-sky-500/30"     },
  purple: { accent: "bg-violet-500",  text: "text-violet-400",  ring: "ring-violet-500/30"  },
  orange: { accent: "bg-orange-500",  text: "text-orange-400",  ring: "ring-orange-500/30"  },
  green:  { accent: "bg-emerald-500", text: "text-emerald-400", ring: "ring-emerald-500/30" },
  yellow: { accent: "bg-amber-400",   text: "text-amber-400",   ring: "ring-amber-500/30"   },
  red:    { accent: "bg-rose-500",    text: "text-rose-400",    ring: "ring-rose-500/30"    },
  gray:   { accent: "bg-zinc-500",    text: "text-zinc-300",    ring: "ring-zinc-500/30"    },
};

/**
 * Service / layer card used in the system-architecture diagram. 4 handles
 * (l/r/t/b) so edges can enter/exit from any side — the data file picks the
 * right pair per edge.
 *
 * data:
 *   title    — required
 *   subtitle — optional small line under title
 *   color    — keyof COLORS
 *   items    — array of strings; rendered as a list, or as wrap-badges when
 *              `layout: "badges"` (used for the many-route API Routers)
 */
export default function ArchCard({ data }) {
  const c = COLORS[data.color] ?? COLORS.gray;
  const items = data.items ?? [];
  const layout = data.layout ?? "list";
  return (
    <div
      className={cn(
        "min-w-[220px] overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-md ring-1",
        c.ring
      )}
      style={{ width: data.width ?? 240 }}
    >
      <Handle type="target" position={Position.Left}   id="l" className="!h-2 !w-2 !border-0 !bg-foreground/40" />
      <Handle type="source" position={Position.Right}  id="r" className="!h-2 !w-2 !border-0 !bg-foreground/40" />
      <Handle type="target" position={Position.Top}    id="t" className="!h-2 !w-2 !border-0 !bg-foreground/40" />
      <Handle type="source" position={Position.Bottom} id="b" className="!h-2 !w-2 !border-0 !bg-foreground/40" />

      <div className={cn("h-1 w-full", c.accent)} />
      <div className="border-b border-border px-3 py-2">
        <p className={cn("font-mono text-sm font-bold tracking-tight", c.text)}>
          {data.title}
        </p>
        {data.subtitle ? (
          <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
            {data.subtitle}
          </p>
        ) : null}
      </div>

      {items.length > 0 ? (
        layout === "badges" ? (
          <div className="flex flex-wrap gap-1 px-3 py-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded border border-border bg-foreground/5 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <ul className="space-y-0.5 px-3 py-2">
            {items.map((item) => (
              <li
                key={item}
                className="font-mono text-[11px] leading-tight text-foreground/85"
              >
                {item}
              </li>
            ))}
          </ul>
        )
      ) : null}
    </div>
  );
}
