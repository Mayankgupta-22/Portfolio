import Background from "@/components/portfolio/Background";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import SkillsMarquee from "@/components/portfolio/SkillsMarquee";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import Contact from "@/components/portfolio/Contact";

export default function Portfolio() {
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

      <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-sm text-muted-foreground sm:px-8">
        Built with caffeine and too many late-night commits — ©{" "}
        {new Date().getFullYear()} Mayank Gupta
      </footer>
    </div>
  );
}
