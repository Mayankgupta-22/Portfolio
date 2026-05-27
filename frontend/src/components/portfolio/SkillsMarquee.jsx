import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiJsonwebtokens,
  SiZod,
  SiCloudinary,
  SiCplusplus,
  SiGit,
} from "react-icons/si";
import { LuShield } from "react-icons/lu";

import { cn } from "@/lib/utils";

// The stack I work with. `color` is either an official brand hex, or
// "foreground" for monochrome logos that should adapt to the theme.
const SKILLS = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "foreground" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "foreground" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JWT", Icon: SiJsonwebtokens, color: "foreground" },
  { name: "Zod", Icon: SiZod, color: "#3E67B1" },
  { name: "Cloudinary", Icon: SiCloudinary, color: "#3448C5" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "NextAuth", Icon: LuShield, color: "foreground" },
];

// One copy of the strip. Rendered twice (the clone is aria-hidden) so the
// animation can loop seamlessly. `group-hover` pauses both copies together.
function SkillStrip({ clone = false }) {
  return (
    <ul
      aria-hidden={clone || undefined}
      className="flex shrink-0 items-center motion-safe:animate-[marquee_36s_linear_infinite] group-hover:[animation-play-state:paused]"
    >
      {SKILLS.map(({ name, Icon, color }) => (
        <li key={name} className="flex shrink-0 flex-col items-center gap-2 px-4">
          <div className="flex size-16 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-colors hover:border-foreground/25 hover:bg-accent">
            <Icon
              className={cn(
                "size-8 shrink-0",
                color === "foreground" && "text-foreground"
              )}
              style={color !== "foreground" ? { color } : undefined}
              aria-hidden
            />
          </div>
          <span className="font-mono text-xs font-medium whitespace-nowrap text-muted-foreground">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function SkillsMarquee() {
  return (
    <section aria-label="Technologies I work with">
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <SkillStrip />
        <SkillStrip clone />
      </div>
    </section>
  );
}
