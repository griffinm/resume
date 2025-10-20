"use client";

import { resumeData } from "@/data/resume";
import { ResumeHeader } from "@/components/ResumeHeader";
import { SummarySection } from "@/components/SummarySection";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { VolunteerWorkSection } from "@/components/VolunteerWorkSection";

export default function ResumePage() {
  const { 
    personalInfo, 
    workExperience, 
    education, 
    skills, 
    projects, 
    certifications, 
    languages, 
    achievements, 
    volunteerWork 
  } = resumeData;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 md:py-12 print:bg-white">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none">
        
        <ResumeHeader personalInfo={personalInfo} />

        <div className="px-6 py-8 md:px-10 md:py-10">
          
          <SummarySection summary={personalInfo.summary} />

          <SkillsSection skills={skills} />

          <WorkExperienceSection workExperience={workExperience} />

          <ProjectsSection projects={projects} />

          <EducationSection education={education} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <CertificationsSection certifications={certifications} />
            <LanguagesSection languages={languages} />
          </div>

          <AchievementsSection achievements={achievements} />

          <VolunteerWorkSection volunteerWork={volunteerWork} />

        </div>
      </div>
    </main>
  );
}
