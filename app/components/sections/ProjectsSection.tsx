import { projects } from "@/app/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Featured Case Studies
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-light">
            A selection of projects that demonstrate my approach to software: building stable systems, 
            minimizing downtime, and designing with a clear understanding of the business goals behind the code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}