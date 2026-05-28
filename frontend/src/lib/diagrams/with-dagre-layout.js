import dagre from "@dagrejs/dagre";

const DEFAULT_NODE_WIDTH = 260;
const DEFAULT_NODE_HEIGHT = 160;

/**
 * Run dagre auto-layout over a set of React-Flow nodes + edges and return new
 * nodes with computed `position`, `sourcePosition`, and `targetPosition`.
 *
 * Per-node width/height can be supplied via node.data.width / node.data.height
 * (used by EntityNode, where height varies with the number of fields).
 */
export function withDagreLayout(nodes, edges, options = {}) {
  const {
    direction = "LR",
    nodeWidth = DEFAULT_NODE_WIDTH,
    nodeHeight = DEFAULT_NODE_HEIGHT,
    ranksep = 90,
    nodesep = 40,
    edgesep = 20,
  } = options;

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: direction, ranksep, nodesep, edgesep });

  nodes.forEach((n) => {
    g.setNode(n.id, {
      width: n.data?.width ?? nodeWidth,
      height: n.data?.height ?? nodeHeight,
    });
  });
  edges.forEach((e) => g.setEdge(e.source, e.target));

  dagre.layout(g);

  const isHorizontal = direction === "LR" || direction === "RL";
  return nodes.map((n) => {
    const { x, y } = g.node(n.id);
    const w = n.data?.width ?? nodeWidth;
    const h = n.data?.height ?? nodeHeight;
    return {
      ...n,
      position: { x: x - w / 2, y: y - h / 2 },
      sourcePosition: isHorizontal ? "right" : "bottom",
      targetPosition: isHorizontal ? "left" : "top",
    };
  });
}
