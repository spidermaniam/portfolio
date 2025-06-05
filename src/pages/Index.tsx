
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";
import SectionScroller from "../components/SectionScroller";
import { SectionData } from "../hooks/useSectionMachine";

// Import existing components
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    // Hide default cursor
    document.body.style.cursor = 'none';
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const sections: SectionData[] = [
    { id: 0, title: "Welcome", component: HeroSection },
    { id: 1, title: "About Me", component: AboutSection },
    { id: 2, title: "Experience", component: ExperienceSection },
    { id: 3, title: "Projects", component: ProjectsSection },
    { id: 4, title: "Skills", component: SkillsSection },
    { id: 5, title: "Certifications", component: CertificationsSection },
    { id: 6, title: "Contact", component: ContactSection },
  ];

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <CustomCursor />
      <SectionScroller sections={sections} />
    </div>
  );
};

export default Index;
