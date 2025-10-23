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
          During the past almost 20 years I have worked in almost every role in the software engineering world. I have always loved building things, whether it&apos;s
            be products, teams, or companies my passion is in seeing the results of my efforts and the efforts of the people I work with come to life and to see 
            success. In addition to building, I also appreciate any opportunity to both coach people and learn from them. 
        </p>
        <p>
          I believe my best talent resides in taking an idea from &quot;0 to 1&quot; - meaning taking something from a vague idea or identified opportunity to working software. 
          I am able to do or manage the front end, back end, infrastructure, and security. When it comes to picking technology, I like to stick with what works and 
          what people know as opposed to always just using what is new and shiney. In addition to this I am able to work closely with the holder of the product vision 
          in order to refine and iterate their idea. 
        </p>
        <p>
          When I am not at &quot;work&quot; you can usually find me working on a side project either trying to build a solution for a problem I have or by taking a 
          new technology through its paces. These side projects include things like real time event detection from security cameras, personal finance apps, organizational 
          apps, RF projects using an SDR, building computers, monitoring home energy use in Grafana, and training new AI models on both personal and public data sets. 
        </p>
      </div>
    </div>
  );
}

