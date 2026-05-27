import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import { Timeline, TimelineItem, TimelineCard } from "./Timeline";
import { projects } from "./data";
import SkillBadge from "./SkillBadge";

export default function ProjectsSection() {
  return (
    <section id="work" className="scroll-mt-24">
      <SectionHeading
        label="// currently working on"
        title="Projects that keep me up at night."
        subtitle="A rolling list of what I'm building, shipping, or rewriting — newest on top."
      />

      <Timeline>
        {projects.map((project, i) => (
          <TimelineItem key={project.title}>
            <TimelineCard>
              <CardContent className="p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs font-semibold tracking-[0.15em] text-muted-foreground">
                    {`PROJECT ${String(i + 1).padStart(2, "0")}`}
                    {project.featured ? " — FEATURED" : ""}
                  </span>
                  <Badge
                    variant="secondary"
                    className="gap-1.5 rounded-full font-mono tracking-wide uppercase"
                  >
                    <span className="size-1.5 rounded-full bg-foreground" />
                    {project.status}
                  </Badge>
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-5 max-w-2xl leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <SkillBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </TimelineCard>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
