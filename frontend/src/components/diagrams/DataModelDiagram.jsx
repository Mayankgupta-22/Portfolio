"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { withDagreLayout } from "@/lib/diagrams/with-dagre-layout";
import EntityNode from "./EntityNode";

const NODE_WIDTH = 260;
// Estimated card height: title row + each field row + vertical padding.
// Used by dagre for layout; the actual rendered card sizes to its content.
function estimateHeight(fieldCount) {
  return 56 + fieldCount * 18 + 16;
}

const nodeTypes = { entity: EntityNode };

function buildGraph({ entities, relations, groups }) {
  const nodes = entities.map((e) => ({
    id: e.id,
    type: "entity",
    position: { x: 0, y: 0 },
    data: {
      name: e.id,
      color: groups[e.group]?.color ?? "blue",
      fields: e.fields,
      width: NODE_WIDTH,
      height: estimateHeight(e.fields.length),
    },
  }));

  const edges = relations.map((r, i) => ({
    id: `e${i}-${r.source}-${r.target}-${r.via ?? ""}`,
    source: r.source,
    target: r.target,
    type: "smoothstep",
    label: r.type ?? "",
    animated: r.type === "N:M",
    style: { strokeWidth: 1.25, stroke: "var(--color-muted-foreground)", opacity: 0.55 },
    labelStyle: { fontSize: 10, fill: "var(--color-muted-foreground)" },
    labelBgStyle: { fill: "var(--color-card)", opacity: 0.85 },
  }));

  return { nodes, edges };
}

// Sync xyflow's colorMode with the site's class-based dark mode. The class is
// the source of truth (set pre-paint by the inline script in layout.js).
function useColorMode() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setMode(el.classList.contains("dark") ? "dark" : "light");
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return mode;
}

export default function DataModelDiagram({
  entities,
  relations,
  groups,
  direction = "LR",
}) {
  const colorMode = useColorMode();

  // Build the graph + run dagre layout once on mount. We feed the result into
  // useNodesState/useEdgesState so every drag flows through onNodesChange
  // into state — entity boxes can be freely repositioned and the new
  // positions persist (within the session). Refresh the page to reset.
  const initial = useMemo(() => {
    const { nodes, edges } = buildGraph({ entities, relations, groups });
    return {
      nodes: withDagreLayout(nodes, edges, { direction }),
      edges,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [nodes, , onNodesChange] = useNodesState(initial.nodes);
  const [edges, , onEdgesChange] = useEdgesState(initial.edges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      nodesConnectable={false}
      fitView
      fitViewOptions={{ padding: 0.15 }}
      colorMode={colorMode}
      minZoom={0.1}
      maxZoom={2.5}
    >
      <Background gap={24} size={1} />
      <Controls className="!rounded-md !border !border-border !bg-card !shadow-md" />
      <MiniMap
        pannable
        zoomable
        className="!rounded-md !border !border-border !bg-card"
        nodeColor={(n) => {
          const c = n.data?.color;
          if (c === "blue") return "#0ea5e9";
          if (c === "purple") return "#8b5cf6";
          if (c === "orange") return "#f97316";
          if (c === "green") return "#10b981";
          if (c === "yellow") return "#f59e0b";
          if (c === "red") return "#f43f5e";
          return "#888";
        }}
      />
    </ReactFlow>
  );
}
