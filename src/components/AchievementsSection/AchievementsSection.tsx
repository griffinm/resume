import { Achievement } from "@/types/resume";
import { Badge, Paper } from "@mantine/core";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Achievements & Awards
      </h2>
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <Paper key={achievement.id} p="md" withBorder>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-700">{achievement.description}</p>
              </div>
              <Badge variant="light" color="violet">{achievement.date}</Badge>
            </div>
          </Paper>
        ))}
      </div>
    </section>
  );
}

