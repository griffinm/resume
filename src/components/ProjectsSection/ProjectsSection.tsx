import { Project } from "@/types/resume";
import { Badge, Accordion } from "@mantine/core";

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
      <Accordion variant="separated" chevronPosition="left">
        {projects.map((project) => (
          <Accordion.Item key={project.id} value={project.id}>
            <Accordion.Control>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.link && (
                    <Badge variant="light" color="green">
                      🌐 Live
                    </Badge>
                  )}
                  {project.github && (
                    <Badge variant="light" color="gray">
                      💻 GitHub
                    </Badge>
                  )}
                </div>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="filled" color="violet" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm">{highlight}</li>
                ))}
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

