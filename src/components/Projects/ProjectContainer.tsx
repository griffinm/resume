import { ProjectItemProps } from '@/utils/types';

interface ProjectsContainerProps {
  children: React.ReactNode;
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ children }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary border-b-2 border-secondary pb-1 mb-3 print:text-xl print:mb-2">Projects</h2>
      <div className="space-y-4 print:space-y-3">
        {children}
      </div>
    </section>
  );
};