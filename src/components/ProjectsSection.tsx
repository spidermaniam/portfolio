
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CardHint",
      description:
        "CardHint offers real-time suggestions, probability calculations, and a user-friendly interface to help players of all skill levels improve their game. It features a responsive design for seamless use on desktop and mobile devices. The backend is powered by a custom algorithm that analyzes game states to provide optimal moves, all built with a modern React and TypeScript stack.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&crop=center",
      link: "https://cardhint.com/",
      github: "#",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      featured: true,
      keyFeatures: [
        "Real-time Hints",
        "Probability Analysis",
        "Responsive Design",
        "Custom Game Algorithm",
      ],
    },
    {
      title: "3D Printer HMI",
      description:
        "A full-stack Human Machine Interface providing a sleek web dashboard to manage 3D printers. Key features include live camera feeds via MJPEG-streamer, real-time temperature and progress monitoring, G-code file management, and remote print control. The responsive frontend is built with React, communicating with a Flask backend that interfaces with the Moonraker API for seamless printer control.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop&crop=center",
      link: "#",
      github: "#",
      technologies: ["React", "Flask", "Python", "Moonraker API"],
      featured: true,
      keyFeatures: [
        "Live Camera Feed",
        "Remote Print Control",
        "Real-time Monitoring",
        "Flask & Moonraker API",
      ],
    },
    {
      title: "Test Automation Framework",
      description:
        "A robust framework to automate end-to-end testing for hardware devices. Using Python with Selenium and Pytest, it orchestrates complex test scenarios, validates hardware-software interactions, and generates detailed reports. Integrated with AWS for scalable, parallel test execution, this framework significantly improved test coverage and reduced manual testing cycles by over 50%.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center",
      link: "#",
      github: "#",
      technologies: ["Python", "Selenium", "Pytest", "AWS"],
      featured: false,
      keyFeatures: [
        "End-to-end Automation",
        "Detailed Reporting",
        "Scalable AWS Integration",
        "Pytest & Selenium",
      ],
    },
  ];

  /** A reusable Card component so featured & non-featured share identical markup */
  const Card = ({
    project,
  }: {
    project: (typeof projects)[number];
  }) => (
    <div className="project-card bg-card border border-border rounded-xl overflow-hidden group grid grid-rows-[auto_1fr_auto] halo-effect h-full">
      {/* Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 relative z-10 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors font-mono">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed font-mono text-sm">
          {project.description}
        </p>

        {project.keyFeatures && (
          <div className="mb-6">
            <h4 className="font-semibold mb-2 font-mono text-sm text-foreground/90">
              Key Features:
            </h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 font-mono text-sm">
              {project.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="p-8 pt-0 flex gap-4 mt-auto">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors font-mono text-sm"
        >
          <ExternalLink size={16} />
          {project.featured ? "Live Demo" : "Demo"}
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
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background halos */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="scroll-animate text-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20 font-mono">
          Featured <span className="text-foreground">Projects</span>
        </h2>

        {/* Featured grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 stagger-animate items-stretch">
          {projects.filter((p) => p.featured).map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>

        {/* Non-featured grid (same edge-to-edge style) */}
        <div className="grid gap-8 stagger-animate items-stretch md:grid-cols-2">
          {projects.filter((p) => !p.featured).map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
