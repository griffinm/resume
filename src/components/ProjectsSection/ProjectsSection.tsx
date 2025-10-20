import { Project } from "@/types/resume";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Featured Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.link && (
                    <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">
                      🌐 Live
                    </span>
                  )}
                  {project.github && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      💻 GitHub
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
                    <span key={idx} className="px-2 py-1 bg-violet-600 text-white rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm">{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

