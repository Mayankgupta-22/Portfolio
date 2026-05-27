import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiJsonwebtokens,
  SiCloudinary,
  SiZod,
} from "react-icons/si";
import {
  LuBrain,
  LuNetwork,
  LuDatabase,
  LuBinary,
  LuGlobe,
  LuGitBranch,
  LuShield,
  LuCode,
} from "react-icons/lu";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Maps a skill name to its icon and color. Keys are normalized (lowercase,
// version numbers stripped — see normalize() below).
//
// `color`:
//   "#rrggbb"     -> official brand color (applied inline)
//   "foreground"  -> theme-adaptive (black in light mode, white in dark) for
//                    logos that are monochrome and would otherwise disappear
//   undefined     -> muted gray, used for conceptual (non-brand) skills
const ICONS = {
  // colored brand logos
  react: { Icon: SiReact, color: "#61DAFB" },
  "react.js": { Icon: SiReact, color: "#61DAFB" },
  "node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  "tailwind css": { Icon: SiTailwindcss, color: "#06B6D4" },
  tailwindcss: { Icon: SiTailwindcss, color: "#06B6D4" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  cloudinary: { Icon: SiCloudinary, color: "#3448C5" },
  zod: { Icon: SiZod, color: "#3E67B1" },
  // monochrome logos -> adapt to the theme so they never disappear
  "next.js": { Icon: SiNextdotjs, color: "foreground" },
  nextjs: { Icon: SiNextdotjs, color: "foreground" },
  express: { Icon: SiExpress, color: "foreground" },
  jwt: { Icon: SiJsonwebtokens, color: "foreground" },
  // conceptual skills (no brand logo exists) -> muted gray
  "nextauth.js": { Icon: LuShield },
  nextauth: { Icon: LuShield },
  "data structures": { Icon: LuBinary },
  algorithms: { Icon: LuGitBranch },
  "artificial intelligence": { Icon: LuBrain },
  databases: { Icon: LuDatabase },
  "web development": { Icon: LuGlobe },
  "rest apis": { Icon: LuNetwork },
  "rest api": { Icon: LuNetwork },
};

// "Next.js 16" -> "next.js", "Tailwind CSS v4" -> "tailwind css", "React 18" -> "react".
function normalize(name) {
  return name
    .toLowerCase()
    .replace(/\s*v?\d+(?:\.\d+)*$/, "")
    .trim();
}

export default function SkillBadge({ name }) {
  const entry = ICONS[normalize(name)];
  const Icon = entry?.Icon ?? LuCode;
  const color = entry?.color;
  const brandColor = color && color.startsWith("#") ? color : undefined;

  return (
    <Badge variant="outline" className="gap-1.5 rounded-md font-mono">
      <Icon
        className={cn(
          "size-3.5 shrink-0",
          color === "foreground" && "text-foreground",
          !color && "text-muted-foreground"
        )}
        style={brandColor ? { color: brandColor } : undefined}
        aria-hidden
      />
      {name}
    </Badge>
  );
}
