
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
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
  const [shouldShowLoadingScreen, setShouldShowLoadingScreen] = useState(true); // Default to true, check session and update
  const { isExitModalOpen, setIsExitModalOpen } = useExitIntent(isLoading && shouldShowLoadingScreen); // Pass combined loading state
  const { activeSection, scrollProgress } = useScrollEffects(isLoading && shouldShowLoadingScreen); // Pass combined loading state

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    // Hide default cursor
    document.body.style.cursor = 'none';

    const hasSeenLoading = sessionStorage.getItem('hasSeenPortfolioLoadingScreen');
    if (hasSeenLoading) {
      setShouldShowLoadingScreen(false);
      // If we are not showing the loading screen, and the hook might still think it's loading,
      // call handleLoadingComplete to ensure the main content is shown.
      // This assumes useLoadingStatus initializes isLoading to true.
      handleLoadingComplete();
    }
  }, [handleLoadingComplete]); // Added handleLoadingComplete to dependencies as it's called

  useEffect(() => {
    // Set the flag in sessionStorage when the loading screen is actually active
    if (shouldShowLoadingScreen && isLoading) {
      sessionStorage.setItem('hasSeenPortfolioLoadingScreen', 'true');
    }
  }, [shouldShowLoadingScreen, isLoading]);

  // If loading is determined by session AND the loading hook, show LoadingScreen
  if (shouldShowLoadingScreen && isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Render main content if either loading screen was skipped by session or has completed
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden flex flex-col">
      <CustomCursor />
      <ExitIntentModal isOpen={isExitModalOpen} onOpenChange={setIsExitModalOpen} />
      
      {/* Conditional rendering of scroll progress and side nav based on loading state */}
      {(!isLoading || !shouldShowLoadingScreen) && (
        <>
          <div
            className="scroll-progress"
            style={{ width: `${scrollProgress}%` }}
          />
          <SideNavigation activeSection={activeSection} />
        </>
      )}
      
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
          <TestimonialsSection />
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
