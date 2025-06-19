import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "testimonials", label: "Testimonials" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── grid: 3 columns (logo | center | burger) ── */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16">
          {/* logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="pl-1 text-xl font-bold font-mono tracking-wide text-foreground
                       hover:opacity-80 transition-opacity"
          >
            Dhruv&nbsp;Puri
          </button>

          {/* desktop links */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-mono transition-all
                    ${
                      activeSection === item.id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* burger (mobile only) */}
          <div className="md:hidden justify-self-end">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((o) => !o)}
              className="p-2 rounded-md text-foreground hover:bg-muted transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md font-mono text-sm uppercase transition-colors
                  ${
                    activeSection === item.id
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}