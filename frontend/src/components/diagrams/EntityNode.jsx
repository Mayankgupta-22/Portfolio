import { Handle, Position } from "@xyflow/react";

import { cn } from "@/lib/utils";

// Map a data-model group color → tailwind classes for the accent stripe,
// title color, and the soft ring around the card.
const GROUP_STYLES = {
  blue:   { accent: "bg-sky-500",     text: "text-sky-400",     ring: "ring-sky-500/30"     },
  purple: { accent: "bg-violet-500",  text: "text-violet-400",  ring: "ring-violet-500/30"  },
  orange: { accent: "bg-orange-500",  text: "text-orange-400",  ring: "ring-orange-500/30"  },
  green:  { accent: "bg-emerald-500", text: "text-emerald-400", ring: "ring-emerald-500/30" },
  yellow: { accent: "bg-amber-400",   text: "text-amber-400",   ring: "ring-amber-500/30"   },
  red:    { accent: "bg-rose-500",    text: "text-rose-400",    ring: "ring-rose-500/30"    },
};

export default function EntityNode({ data, sourcePosition, targetPosition }) {
  const styles = GROUP_STYLES[data.color] ?? GROUP_STYLES.blue;
  const tp = targetPosition ?? Position.Left;
  const sp = sourcePosition ?? Position.Right;
  return (
    <div
      style={{ width: data.width }}
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-md ring-1",
        styles.ring
      )}
    >
      <Handle type="target" position={tp} className="!h-2 !w-2 !border-0 !bg-foreground/40" />
      <Handle type="source" position={sp} className="!h-2 !w-2 !border-0 !bg-foreground/40" />

      <div className={cn("h-1 w-full", styles.accent)} />
      <div className="border-b border-border px-3 py-2">
        <p className={cn("font-mono text-sm font-bold tracking-tight", styles.text)}>
          {data.name}
        </p>
      </div>
      <ul className="space-y-0.5 px-3 py-2">
        {data.fields.map((f) => (
          <li
            key={f.name}
            className="flex items-center justify-between gap-2 font-mono text-[11px] leading-tight"
          >
            <span className="flex items-center gap-1 text-foreground">
              {f.pk ? (
                <span className="rounded bg-foreground/15 px-1 text-[9px] font-bold">PK</span>
              ) : null}
              {f.fk ? (
                <span className="rounded bg-foreground/10 px-1 text-[9px]">FK</span>
              ) : null}
              <span>{f.name}</span>
              {f.unique ? (
                <span className="ml-1 text-[9px] text-muted-foreground/70">uniq</span>
              ) : null}
            </span>
            <span className="text-muted-foreground">{f.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
