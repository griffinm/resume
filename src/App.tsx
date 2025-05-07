import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-background text-text-main font-sans antialiased">
      <div className="resume-container max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg print:shadow-none print:my-0 print:mx-0 print:p-10">

        {/* Header Section */}
        <header className="mb-8 text-center print:text-left print:mb-6">
            <h1 className="text-4xl font-bold text-primary print:text-3xl">Your Name</h1>
            <p className="text-text-light text-lg print:text-base">
                <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a> &bull;
                <a href="mailto:youremail@example.com" className="hover:text-primary">youremail@example.com</a> &bull;
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a> &bull;
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
                {/* Optional: Portfolio Link */}
                {/* &bull; <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Portfolio</a> */}
            </p>
        </header>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3 print:gap-6">

            {/* Left Column / Main Column */}
            <main className="md:col-span-2 print:col-span-2 space-y-8 print:space-y-6">
                {/* Summary Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-primary border-b-2 border-secondary pb-1 mb-3 print:text-xl print:mb-2">Summary</h2>
                    <p className="text-text-light text-base print:text-sm">
                        Highly motivated and results-oriented software developer with X years of experience in...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>

                {/* Experience Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-primary border-b-2 border-secondary pb-1 mb-3 print:text-xl print:mb-2">Experience</h2>
                    <div className="space-y-4 print:space-y-3">
                        {/* Job 1 */}
                        <article>
                            <h3 className="text-xl font-medium text-text-main print:text-lg">Software Engineer</h3>
                            <p className="text-secondary text-base print:text-sm">ABC Company, City, State | Jan 2022 - Present</p>
                            <ul className="list-disc list-outside ml-5 text-text-light space-y-1 mt-1 print:text-sm print:space-y-0.5">
                                <li>Developed and maintained web applications using React, Node.js, and PostgreSQL.</li>
                                <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                                <li>Improved application performance by 20% through code optimization and database tuning.</li>
                            </ul>
                        </article>
                        {/* Job 2 */}
                        <article>
                            <h3 className="text-xl font-medium text-text-main print:text-lg">Junior Developer</h3>
                            <p className="text-secondary text-base print:text-sm">XYZ Corp, City, State | Jun 2020 - Dec 2021</p>
                            <ul className="list-disc list-outside ml-5 text-text-light space-y-1 mt-1 print:text-sm print:space-y-0.5">
                                <li>Assisted in the development of internal tools and automation scripts.</li>
                                <li>Participated in code reviews and contributed to improving code quality.</li>
                            </ul>
                        </article>
                    </div>
                </section>

                 {/* Projects Section (Optional) */}
                <section>
                    <h2 className="text-2xl font-semibold text-primary border-b-2 border-secondary pb-1 mb-3 print:text-xl print:mb-2">Projects</h2>
                    <div className="space-y-4 print:space-y-3">
                        <article>
                            <h3 className="text-xl font-medium text-text-main print:text-lg">Project Title 1 <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm print:text-xs">(GitHub)</a></h3>
                            <p className="text-text-light text-base print:text-sm">
                                Brief description of the project. Highlight technologies used and your role.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </article>
                        <article>
                            <h3 className="text-xl font-medium text-text-main print:text-lg">Project Title 2 <a href="https://project2link.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm print:text-xs">(Live Demo)</a></h3>
                            <p className="text-text-light text-base print:text-sm">
                                Another project description. Focus on achievements and skills demonstrated.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </article>
                    </div>
                </section>
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
        </div>
        
        <footer className="text-center mt-8 pt-4 border-t border-secondary text-text-light text-xs print:hidden">
            <p>Built with Tailwind CSS. Modern, simple, and designed to fit on one page.</p>
        </footer>

      </div>
    </div>
  );
}

export default App; 