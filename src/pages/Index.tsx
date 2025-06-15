
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { useLoadingStatus } from "@/hooks/useLoadingStatus";
import { useExitIntent } from "@/hooks/useExitIntent";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import SideNavigation from "@/components/SideNavigation";

const Index = () => {
  const { isLoading, handleLoadingComplete } = useLoadingStatus();
  const { isExitModalOpen, setIsExitModalOpen } = useExitIntent(isLoading);
  const { activeSection, scrollProgress } = useScrollEffects(isLoading);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    // Hide default cursor
    document.body.style.cursor = 'none';
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden flex flex-col">
      <CustomCursor />
      <ExitIntentModal isOpen={isExitModalOpen} onOpenChange={setIsExitModalOpen} />
      
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <SideNavigation activeSection={activeSection} />
      
      <Navigation activeSection={activeSection} />
      <main className="flex-grow">
        <div className="section-fade">
          <HeroSection />
        </div>
        <div className="section-fade">
          <AboutSection />
        </div>
        <div className="section-fade">
          <ExperienceSection />
        </div>
        <div className="section-fade">
          <ProjectsSection />
        </div>
        <div className="section-fade">
          <SkillsSection />
        </div>
        <div className="section-fade">
          <CertificationsSection />
        </div>
        <div className="section-fade">
          <ContactSection onOpenModal={setIsExitModalOpen} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
