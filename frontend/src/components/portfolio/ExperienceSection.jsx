import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import { Timeline, TimelineItem, TimelineCard } from "./Timeline";
import { experience } from "./data";
import SkillBadge from "./SkillBadge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading
        label="// experience"
        title="Where I've been building."
        subtitle="Roles, teams, and the things I shipped along the way."
      />

      <Timeline>
        {experience.map((job) => (
          <TimelineItem key={`${job.company}-${job.role}`}>
            <TimelineCard>
              <CardContent className="p-8">
                <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {job.role}
                  </h3>
                  {job.current ? (
                    <Badge
                      variant="secondary"
                      className="gap-1.5 rounded-full font-mono tracking-wide uppercase"
                    >
                      <span className="size-1.5 rounded-full bg-foreground" />
                      Current
                    </Badge>
                  ) : null}
                </div>

                <p className="text-sm font-medium text-muted-foreground">
                  {job.company}
                  <span className="mx-2 text-muted-foreground/50">•</span>
                  <span className="text-muted-foreground/80">{job.meta}</span>
                </p>
                <p className="mt-1 mb-5 font-mono text-xs tracking-wide text-muted-foreground">
                  {job.duration}
                </p>

                <ul className="mb-5 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:text-foreground/50 before:content-['▸']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <SkillBadge key={tech} name={tech} />
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
