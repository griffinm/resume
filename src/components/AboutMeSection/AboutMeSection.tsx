export function AboutMeSection() {
  return (
    <div>
      <h2 className="resume-section-header">
        <svg className="resume-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        About Me
      </h2>
      <div className="flex flex-col gap-4">
      <p>
        Over the past 20 years, I have worked in nearly every role within the software engineering world. I have always loved building things—whether 
        products, teams, or companies. My passion lies in seeing the results of my efforts, and the efforts of those I work with, come to life and 
        achieve success. In addition to building, I value every opportunity to coach others and to learn from them.
      </p>
      <p>
        I believe my greatest strength is taking an idea from &quot;0 to 1&quot;—transforming a vague concept or identified opportunity into working 
        software. I am capable of handling or managing the front end, back end, infrastructure, and security. When it comes to choosing technology, 
        I prefer to use proven and well-understood tools rather than chasing what&apos;s new and shiny. I also work closely with product vision 
        holders to refine and iterate on their ideas.
      </p>
      <p>
        When I&apos;m not at &quot;work,&quot; you can usually find me tinkering on a side project—either building a solution to a problem I&apos;ve 
        encountered or putting a new technology through its paces. My side projects have included real-time event detection from security cameras, 
        personal finance apps, organizational tools, RF experiments using SDRs, computer building, home energy monitoring in Grafana, and training 
        new AI models on both personal and public datasets.
      </p>

      </div>
    </div>
  );
}

