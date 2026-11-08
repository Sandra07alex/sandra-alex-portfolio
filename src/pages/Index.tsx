import SmoothScroll from "@/components/SmoothScroll";
import strongWoman from "@/assets/strong-woman-line-art.png";
import HeroSection from "@/components/portfolio/HeroSection";
import IntroSection from "@/components/portfolio/IntroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import VolunteeringSection from "@/components/portfolio/VolunteeringSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <SmoothScroll>
      <main className="bg-background">
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <VolunteeringSection />
        <ContactSection />
        <div className="flex justify-center px-6 pb-16">
          <img
            src={strongWoman}
            alt="Line illustration of a strong woman coding, speaking, volunteering and growing her career"
            loading="lazy"
            width={1536}
            height={1024}
            className="w-full max-w-4xl select-none opacity-80"
          />
        </div>
      </main>
    </SmoothScroll>
  );
};

export default Index;
