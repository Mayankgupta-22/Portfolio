import { cn } from "@/lib/utils";

const COLORS = {
  blue:   "text-sky-400",
  purple: "text-violet-400",
  orange: "text-orange-400",
  green:  "text-emerald-400",
  yellow: "text-amber-400",
  red:    "text-rose-400",
  gray:   "text-zinc-300",
};

/**
 * Group container for the system-architecture diagram. Children with
 * `parentId` pointing at this node render visually inside it. We just draw
 * the bordered box + header label; the children are real React-Flow nodes
 * positioned relative to this one.
 *
 * Width/height comes from the node's `style` prop (set in the data file).
 */
export default function ArchGroup({ data }) {
  const textColor = COLORS[data.color] ?? COLORS.gray;
  return (
    <div className="h-full w-full rounded-xl border-2 border-dashed border-border/70 bg-foreground/3 backdrop-blur-sm">
      <div className="border-b border-border/40 px-4 py-2">
        <p className={cn("font-mono text-sm font-bold tracking-tight", textColor)}>
          {data.title}
        </p>
        {data.subtitle ? (
          <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
            {data.subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
