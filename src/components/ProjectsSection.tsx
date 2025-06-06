
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CardHint",
      description: "A modern web application for card game hints and strategies. Built with React and TypeScript for an intuitive user experience.",
      image: "/placeholder.svg",
      link: "https://cardhint.com/",
      github: "#",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      featured: true
    },
    {
      title: "3D Printer HMI",
      description: "Full-stack Human Machine Interface for 3D printers with real-time monitoring and control capabilities.",
      image: "/placeholder.svg",
      link: "#",
      github: "#",
      technologies: ["React", "Flask", "Python", "Moonraker API"],
      featured: true
    },
    {
      title: "Test Automation Framework",
      description: "Comprehensive automation framework for device testing with Python, reducing manual testing effort by 50%.",
      image: "/placeholder.svg",
      link: "#",
      github: "#",
      technologies: ["Python", "Selenium", "Pytest", "AWS"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Enhanced background with purple halo effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="scroll-animate text-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20 font-mono">
            Featured <span className="text-foreground">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-20 stagger-animate">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="scroll-animate">
                <div className="project-card bg-card border border-border rounded-xl overflow-hidden group h-full halo-effect">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors font-mono">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed font-mono text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors font-mono text-sm"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-mono text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 stagger-animate">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="scroll-animate">
                <div className="project-card bg-card border border-border rounded-xl p-6 group h-full halo-effect">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors font-mono">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm font-mono">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-sm font-mono"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-sm font-mono"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
