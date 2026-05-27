import { GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import { Timeline, TimelineItem, TimelineCard } from "./Timeline";
import { education } from "./data";
import SkillBadge from "./SkillBadge";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeading
        label="// education"
        title="Where I learned the fundamentals."
        subtitle="Degrees, coursework, and the foundations I keep building on."
      />

      <Timeline>
        {education.map((entry) => (
          <TimelineItem key={entry.institution}>
            <TimelineCard>
              <CardContent className="p-8">
                <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight sm:text-2xl">
                    <GraduationCap className="size-5 shrink-0 text-muted-foreground" />
                    {entry.degree}
                  </h3>
                  {entry.score ? (
                    <Badge
                      variant="secondary"
                      className="rounded-full font-mono tracking-wide"
                    >
                      {entry.score}
                    </Badge>
                  ) : null}
                </div>

                <p className="text-sm font-medium text-muted-foreground">
                  {entry.institution}
                  <span className="mx-2 text-muted-foreground/50">•</span>
                  <span className="text-muted-foreground/80">{entry.meta}</span>
                </p>
                <p className="mt-1 mb-5 font-mono text-xs tracking-wide text-muted-foreground">
                  {entry.duration}
                </p>

                <ul className="mb-5 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:text-foreground/50 before:content-['▸']"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {entry.tech.map((item) => (
                    <SkillBadge key={item} name={item} />
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
