
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import NotFound from "./NotFound";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.cursor = 'none';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CustomCursor />
      <div className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 font-mono text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>

          <main>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-mono">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-12 shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4 font-mono border-b pb-2">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed font-mono mt-4">{project.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 font-mono border-b pb-2">Key Features</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 font-mono mt-4">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                {project.link && project.link !== "#" && (
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors font-mono text-sm"
                  >
                      <ExternalLink size={16} />
                      Visit Live Site
                  </a>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
