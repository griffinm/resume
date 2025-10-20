import { Skill } from "@/types/resume";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

