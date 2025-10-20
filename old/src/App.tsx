import React from 'react';
import { Header } from './components/Header/Header';
import { Summary } from './components/Summary/Summary';
import { ExperienceItem } from './components/Experience';
import { ProjectItem } from './components/Projects';
import { Container } from './components/Layout';
import { ResumeSection } from './components/ResumeSection/ResumeSection';

import * as data from "@/utils/data";
import { EducationItem } from './components/Education';
import { Skills } from './components/Skills/Skills';

export default function App() {

  return (
      <Container.Container>
        <Header props={data.headerData} />
        <Container.Content>
          <main className="md:col-span-2 print:col-span-2 space-y-8 print:space-y-6">
            <Summary props={data.summaryData} />

            <ResumeSection title="Experience">
              {data.experiences.map((experience) => (
                <ExperienceItem key={experience.startDate.toISOString()} {...experience} />
              ))}
            </ResumeSection>

            {data.projects.length > 0 && (
              <ResumeSection title="Projects">
                {data.projects.map((project, index) => (
                  <ProjectItem key={index} {...project} />
                ))}
              </ResumeSection>
            )}

          </main>

          <aside className="md:col-span-1 print:col-span-1 space-y-8 print:space-y-6">

            <ResumeSection title="Skills">
              <Skills skills={data.skills} />
            </ResumeSection>
            
            <ResumeSection title="Education">
              {data.education.map((education) => (
                <EducationItem key={education.endDate.toISOString()} {...education} />
              ))}
            </ResumeSection>


          </aside>
        </Container.Content>
        
        <footer className="text-center mt-8 pt-4 border-t border-secondary text-text-light text-xs print:hidden">
            <p>Built with Tailwind CSS and React</p>
        </footer>

      </Container.Container>
  );
}
