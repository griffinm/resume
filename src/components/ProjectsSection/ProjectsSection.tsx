import { Project } from "@/types/resume";
import Link from "next/link";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null;
  
  return (
    <>
      <h2 className="resume-section-header">
        <svg className="resume-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        Side Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-blue-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 border-b border-blue-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.link && (
                    <span className="px-3 py-1.5 bg-green-100 text-green-800 border border-green-200 rounded-full text-xs font-semibold shadow-sm">
                      <Link href={project.link} className="text-green-800">🌐 Live</Link>
                    </span>
                  )}
                  {project.github && (
                    <span className="px-3 py-1.5 bg-gray-700 text-white rounded-full text-xs font-semibold shadow-sm">
                      <Link href={project.github}>💻 GitHub</Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="bullet-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm">{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

