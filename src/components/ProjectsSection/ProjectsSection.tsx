import { Project } from "@/types/resume";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null;
  
  return (
    <>
      <h2 className="resume-section-header">
        <svg className="w-6 h-6 text-purple-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        Side Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-purple-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-4 border-b border-purple-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{project.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.link && (
                    <span className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-600 dark:to-teal-600 text-white rounded-full text-xs font-semibold shadow-sm">
                      🌐 Live
                    </span>
                  )}
                  {project.github && (
                    <span className="px-3 py-1.5 bg-gray-700 dark:bg-gray-600 text-white rounded-full text-xs font-semibold shadow-sm">
                      💻 GitHub
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 text-white rounded-full text-xs font-semibold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
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

