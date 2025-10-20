import { Skill } from "@/types/resume";
import { Badge, Paper } from "@mantine/core";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => (
          <Paper key={index} p="md" withBorder className="hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, idx) => (
                <Badge key={idx} variant="light" color="blue" size="lg">
                  {skill}
                </Badge>
              ))}
            </div>
          </Paper>
        ))}
      </div>
    </section>
  );
}

