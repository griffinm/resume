import { resumeData } from "@/data/resume";
import { ResumeHeader } from "@/components/ResumeHeader";
import { Navigation } from "@/components/Navigation";
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
  const showCertifications = certifications.length > 0;
  const showLanguages = languages.length > 0;


  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-0 sm:py-8 px-0 sm:px-4 md:py-12 print:bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-t-lg print:shadow-none">
          <ResumeHeader personalInfo={personalInfo} />
        </div>

        <Navigation />

        <div className="bg-white shadow-lg rounded-b-lg print:shadow-none">
          <div className="px-6 py-8 md:px-10 md:py-10">
          
          <section id="summary">
            <SummarySection summary={personalInfo.summary} />
          </section>

          <section id="skills">
            <SkillsSection skills={skills} />
          </section>

          <section id="experience">
            <WorkExperienceSection workExperience={workExperience} />
          </section>

          <section id="projects">
            <ProjectsSection projects={projects} />
          </section>

          <section id="education">
            <EducationSection education={education} />
          </section>

          {showCertifications || showLanguages ? (
            <section id="certifications">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <CertificationsSection certifications={certifications} />
                <LanguagesSection languages={languages} />
              </div>
            </section>
          ) : null}

          <section id="achievements">
            <AchievementsSection achievements={achievements} />
          </section>

          <section id="volunteer">
            <VolunteerWorkSection volunteerWork={volunteerWork} />
          </section>

          </div>
        </div>
      </div>
    </main>
  );
}
