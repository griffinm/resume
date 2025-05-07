export interface HeaderProps {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface SummaryProps {
  headline: string;
  summary: string;
}

export interface ExperienceProps {
  company: string;
  note?: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  bullets: string[];
}

export interface ProjectItemProps {
  title: string;
  description: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  technologies?: string[];
}

export interface EducationItemProps {
  school: string;
  degree: string;
  endDate: Date;
}
export interface Skills {
  category: string;
  skills: string[];
}
