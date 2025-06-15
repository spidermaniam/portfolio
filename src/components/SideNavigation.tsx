
import React from 'react';

const SECTIONS = ["home", "about", "experience", "projects", "skills", "certifications", "contact"];

interface SideNavigationProps {
  activeSection: string;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ activeSection }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-6">
        {SECTIONS.map((section) => (
          <button
            key={section}
            onClick={() => {
              const element = document.getElementById(section);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
