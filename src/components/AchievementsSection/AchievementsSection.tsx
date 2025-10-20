import { Achievement } from "@/types/resume";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  if (achievements.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Achievements & Awards
      </h2>
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-700">{achievement.description}</p>
              </div>
              <span className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-sm font-medium whitespace-nowrap">{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

