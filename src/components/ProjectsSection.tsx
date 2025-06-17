import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const ProjectsSection = () => {
  /** A reusable Card component so featured & non-featured share identical markup */
  const Card = ({
    project,
  }: {
    project: Project;
  }) => (
    <div className="project-card bg-section-projects-card-bg border border-section-projects-border text-section-projects-card-foreground rounded-xl overflow-hidden group grid grid-rows-[auto_1fr_auto] halo-effect h-full">
      {/* Image */}
      <div className="aspect-video bg-section-projects-card-foreground/10 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-section-projects-card-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 relative z-10 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-section-projects-accent transition-colors font-mono">
          {project.title}
        </h3>
        <p className="text-section-projects-text-secondary mb-6 leading-relaxed font-mono text-sm">
          {project.description}
        </p>

        {project.keyFeatures && (
          <div className="mb-6">
            <h4 className="font-semibold mb-2 font-mono text-sm text-section-projects-card-foreground/90">
              Key Features:
            </h4>
            <ul className="list-disc list-inside text-section-projects-text-secondary space-y-1 font-mono text-sm">
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
              className="px-3 py-1 bg-section-projects-accent/10 text-section-projects-accent rounded-full text-sm font-medium font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="p-8 pt-0 flex gap-4 mt-auto">
        <Link
          to={`/projects/${project.id}`}
          className="flex items-center gap-2 px-4 py-2 bg-section-projects-accent text-section-projects-accent-foreground rounded-lg hover:bg-section-projects-accent/90 transition-colors font-mono text-sm"
        >
          <ArrowRight size={16} />
          View Project
        </Link>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-section-projects-bg text-section-projects-text-primary">
      {/* Background halos */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-section-projects-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-section-projects-accent/70 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="scroll-animate text-reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20 font-mono text-section-projects-text-primary">
          Featured <span className="text-section-projects-accent">Projects</span>
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
