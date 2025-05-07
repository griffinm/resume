import React from 'react';
import { Header } from './components/Header/Header';
import { Summary } from './components/Summary/Summary';
import { ExperienceItem } from './components/Experience';
import { ProjectItem } from './components/Projects';
import { Container } from './components/Layout';
import { ResumeSection } from './components/ResumeSection/ResumeSection';

import * as data from "@/utils/data";

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

          {/* Right Column / Sidebar */}
          <aside className="md:col-span-1 print:col-span-1 space-y-8 print:space-y-6">
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-semibold text-primary border-b-2 border-secondary pb-1 mb-3 print:text-xl print:mb-2">Education</h2>
              <article>
                <h3 className="text-xl font-medium text-text-main print:text-lg">M.S. in Computer Science</h3>
                <p className="text-secondary text-base print:text-sm">University of Technology, City, State | Graduated May 2020</p>
              </article>
              <article className="mt-3 print:mt-2">
                <h3 className="text-xl font-medium text-text-main print:text-lg">B.S. in Software Engineering</h3>
                <p className="text-secondary text-base print:text-sm">State University, City, State | Graduated May 2018</p>
              </article>
            </section>

            {/* Skills Section */}
            <section>
                <h2 className="text-2xl font-semibold text-primary border-b-2 border-secondary pb-1 mb-3 print:text-xl print:mb-2">Skills</h2>
                <div>
                  <h4 className="font-medium text-text-main mb-1 print:text-base">Programming Languages:</h4>
                  <p className="text-text-light print:text-sm">JavaScript, Python, Java, C++, SQL</p>
                </div>
                <div className="mt-2 print:mt-1.5">
                  <h4 className="font-medium text-text-main mb-1 print:text-base">Frameworks & Libraries:</h4>
                  <p className="text-text-light print:text-sm">React, Node.js, Express, Spring Boot, Tailwind CSS, Bootstrap</p>
                </div>
                <div className="mt-2 print:mt-1.5">
                  <h4 className="font-medium text-text-main mb-1 print:text-base">Databases:</h4>
                  <p className="text-text-light print:text-sm">PostgreSQL, MongoDB, MySQL</p>
                </div>
                <div className="mt-2 print:mt-1.5">
                  <h4 className="font-medium text-text-main mb-1 print:text-base">Tools & Platforms:</h4>
                  <p className="text-text-light print:text-sm">Git, Docker, AWS, Jenkins, JIRA</p>
                </div>
                <div className="mt-2 print:mt-1.5">
                  <h4 className="font-medium text-text-main mb-1 print:text-base">Other:</h4>
                  <p className="text-text-light print:text-sm">Agile Methodologies, RESTful APIs, UI/UX Design Principles</p>
                </div>
            </section>
          </aside>
        </Container.Content>
        
        <footer className="text-center mt-8 pt-4 border-t border-secondary text-text-light text-xs print:hidden">
            <p>Built with Tailwind CSS. Modern, simple, and designed to fit on one page.</p>
        </footer>

      </Container.Container>
  );
}
