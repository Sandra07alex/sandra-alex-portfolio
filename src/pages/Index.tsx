import SmoothScroll from "@/components/SmoothScroll";
import HeroSection from "@/components/portfolio/HeroSection";
import IntroSection from "@/components/portfolio/IntroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <SmoothScroll>
      <main className="bg-background">
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
};

export default Index;
