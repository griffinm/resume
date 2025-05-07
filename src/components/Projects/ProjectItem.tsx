import { ProjectItemProps } from "@/utils/types";

export const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, githubUrl, liveDemoUrl, technologies }) => {
  return (
    <article>
      <h3 className="text-xl font-medium text-text-main print:text-lg">
        {title}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm print:text-xs ml-2">
            (GitHub)
          </a>
        )}
        {liveDemoUrl && (
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm print:text-xs ml-2">
            (Live Demo)
          </a>
        )}
      </h3>
      <p className="text-text-light text-base print:text-sm">
        {description}
      </p>
      {technologies && technologies.length > 0 && (
        <p className="text-xs text-secondary mt-1 print:text-xxs">
          Technologies: {technologies.join(', ')}
        </p>
      )}
    </article>
  );
};