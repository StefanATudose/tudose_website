import { Project } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isInternal = project.isInternal;
  const linkUrl = project.link || "#";

  const cardContent = (
    <>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {project.subtitle && (
          <span className="text-xs font-semibold text-purple-600 tracking-wider uppercase mb-1">
            {project.subtitle}
          </span>
        )}
        <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-black/70 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[11px] font-medium bg-linear-to-r from-[#0a1628]/5 to-[#6b21a8]/5 text-black rounded-full border border-[#6b21a8]/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="text-sm font-semibold text-purple-600 group-hover:text-purple-700 transition-colors flex items-center gap-1 mt-auto">
          {isInternal ? (
            <span>Read Case Study</span>
          ) : (
            <span>Visit Project</span>
          )}
          <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </>
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      {isInternal ? (
        <Link href={linkUrl} className="flex flex-col h-full">
          {cardContent}
        </Link>
      ) : (
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          {cardContent}
        </a>
      )}
    </div>
  );
}