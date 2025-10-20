export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  location: string;
  description: string;
  achievements: string[];
  acquisition?: {
    acquirer: string;
    year: number;
  };
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface VolunteerWork {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
}

export interface Reference {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  relationship: string;
}

export interface Resume {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  achievements: Achievement[];
  volunteerWork: VolunteerWork[];
  references: Reference[];
}

