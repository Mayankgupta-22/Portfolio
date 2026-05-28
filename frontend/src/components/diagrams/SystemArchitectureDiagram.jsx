"use client";

import { useEffect, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ArchCard from "./ArchCard";
import ArchGroup from "./ArchGroup";

const nodeTypes = { archCard: ArchCard, archGroup: ArchGroup };

// Same dark-mode sync used by DataModelDiagram — keep xyflow's colorMode in
// step with the site's class-based dark mode.
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

export default function SystemArchitectureDiagram({ nodes: initialNodes, edges: initialEdges }) {
  const colorMode = useColorMode();
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      nodesConnectable={false}
      fitView
      fitViewOptions={{ padding: 0.12 }}
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
          return "#71717a";
        }}
      />
    </ReactFlow>
  );
}
