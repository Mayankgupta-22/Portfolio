import Background from "@/components/portfolio/Background";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import SkillsMarquee from "@/components/portfolio/SkillsMarquee";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import Contact from "@/components/portfolio/Contact";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <Background />
      <Nav />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-28 px-6 pt-20 sm:px-8">
        <Hero />
        <SkillsMarquee />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <Contact />
      </main>

      <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
        <p>
          Built with caffeine and too many late-night commits — ©{" "}
          {new Date().getFullYear()} Mayank Gupta
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Mayankgupta-22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-gupta-858971282/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="mailto:officiamayankgupta22@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
