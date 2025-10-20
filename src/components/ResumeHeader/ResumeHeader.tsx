import { PersonalInfo } from "@/types/resume";
import { ActionIcon } from "@mantine/core";
import { MailIcon, PhoneIcon, MapPinIcon, WorldIcon, LinkedinIcon, GithubIcon } from "../Icons";

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
}

export function ResumeHeader({ personalInfo }: ResumeHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-8 md:px-10 md:py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-6">{personalInfo.title}</p>
      
      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <MailIcon size={18} />
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-200 transition-colors">
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
          <ActionIcon component="a" href={`https://${personalInfo.website}`} target="_blank" size="lg" variant="light" color="white">
            <WorldIcon size={20} />
          </ActionIcon>
        )}
        {personalInfo.linkedin && (
          <ActionIcon component="a" href={`https://${personalInfo.linkedin}`} target="_blank" size="lg" variant="light" color="white">
            <LinkedinIcon size={20} />
          </ActionIcon>
        )}
        {personalInfo.github && (
          <ActionIcon component="a" href={`https://${personalInfo.github}`} target="_blank" size="lg" variant="light" color="white">
            <GithubIcon size={20} />
          </ActionIcon>
        )}
      </div>
    </header>
  );
}

