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
        <Link
          to={`/projects/${project.id}`}
          className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors font-mono text-sm"
        >
          <ArrowRight size={16} />
          View Project
        </Link>
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
