import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { AchievementsSection } from "@/components/achievements/AchievementsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";

interface HomeProps {
  isIntroActive?: boolean;
}

export function Home({ isIntroActive = false }: HomeProps) {
  return (
    <main>
      <Hero isActive={!isIntroActive} />
      <About />
      <ProjectsSection />
      <JourneySection />
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
