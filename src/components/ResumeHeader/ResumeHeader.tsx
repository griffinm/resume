import { PersonalInfo } from "@/types/resume";
import { MailIcon, PhoneIcon, MapPinIcon, WorldIcon, LinkedinIcon, GithubIcon } from "../Icons";

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
}

export function ResumeHeader({ personalInfo }: ResumeHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-8 md:px-10 md:py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
      <p className="text-xl md:text-2xl text-indigo-100 mb-6">{personalInfo.title}</p>
      
      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <MailIcon size={18} />
          <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-200 transition-colors">
            {personalInfo.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon size={18} />
          <span>{personalInfo.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPinIcon size={18} />
          <span>{personalInfo.location}</span>
        </div>
      </div>
      
      <div className="flex gap-3 mt-4">
        {personalInfo.website && (
          <a 
            href={`https://${personalInfo.website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Website"
          >
            <WorldIcon size={20} />
          </a>
        )}
        {personalInfo.linkedin && (
          <a 
            href={`https://${personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        )}
        {personalInfo.github && (
          <a 
            href={`https://${personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
        )}
      </div>
    </header>
  );
}

