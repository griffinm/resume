import { Skill } from "@/types/resume";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) return null;
  
  return (
    <>
      <h2 className="resume-section-header">
        <svg className="resume-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => {
          return (
            <div key={index} className={`p-4 border border-blue-300 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-md transition-shadow`}>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-300 hover:border-blue-400 hover:bg-blue-200 transition-all`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

