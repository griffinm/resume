import { Skill } from "@/types/resume";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) return null;
  
  // Color themes for different skill categories
  const colorThemes = [
    { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', gradient: 'from-blue-50 to-blue-100' },
    { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', gradient: 'from-teal-50 to-teal-100' },
    { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', gradient: 'from-purple-50 to-purple-100' },
    { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', gradient: 'from-orange-50 to-orange-100' },
    { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', gradient: 'from-green-50 to-green-100' },
    { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', gradient: 'from-pink-50 to-pink-100' },
  ];
  
  return (
    <section className="mb-10">
      <h2 className="resume-section-header">
        <svg className="w-6 h-6 text-teal-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => {
          const theme = colorThemes[index % colorThemes.length];
          return (
            <div key={index} className={`p-4 border ${theme.border} rounded-lg bg-gradient-to-br ${theme.gradient} hover:shadow-md transition-shadow`}>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1.5 ${theme.bg} ${theme.text} rounded-full text-sm font-medium border ${theme.border}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

