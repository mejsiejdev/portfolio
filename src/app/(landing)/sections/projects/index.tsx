import { AnimatedSection } from "@/components/animated-section";
import { Project } from "./project";
import { API_URL } from "@/lib/api";

const revalidate = 3600 * 24;

export interface Project {
  name: string;
  description: string;
  image: string;
  image_dark?: string;
  tags: string[];
  demo: string;
  code?: string;
}

export async function Projects() {
  const data = await fetch(`${API_URL}/projects`, {
    next: { revalidate },
  });
  const projects = (await data.json()) as Project[];
  return (
    <AnimatedSection id="projects">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <Project key={project.name} index={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
