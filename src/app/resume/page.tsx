import { resumeData } from "@/data/resume";
import { ResumeHeader } from "@/components/ResumeHeader";
import { Navigation } from "@/components/Navigation";
import { TopNav } from "@/components/TopNav";
import { AboutMeSection } from "@/components/AboutMeSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume showcasing Griffin Mahoney's work experience, technical skills, projects, and education. View detailed information about software engineering expertise and leadership experience.",
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: "Resume | Griffin Mahoney",
    description: "Professional resume showcasing Griffin Mahoney's work experience, technical skills, projects, and education.",
    url: '/resume',
    type: 'profile',
  },
};

export default function ResumePage() {
  const { 
    personalInfo, 
    workExperience, 
    education, 
    skills, 
    projects, 
  } = resumeData;

  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-0 sm:py-8 px-0 sm:px-4 md:py-12 print:bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-t-lg print:shadow-none">
            <ResumeHeader personalInfo={personalInfo} />
          </div>

          <Navigation />

          <div className="bg-white shadow-lg rounded-b-lg print:shadow-none">
            <div className="px-6 py-8 md:px-10 md:py-10 flex flex-col gap-8 sm:gap-12">
            
              <section id="summary">
                <AboutMeSection />
              </section>

              <section id="highlights">
                <HighlightsSection />
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
            </div>
          </div> {/* END of content sections */}
        </div> {/* END OF MAIN CONTENT */}
      </main>
    </>
  );
}
