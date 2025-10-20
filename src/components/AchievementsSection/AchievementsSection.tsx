import { Achievement } from "@/types/resume";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  if (achievements.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-pink-600 pb-2 inline-flex items-center gap-2">
        <svg className="w-6 h-6 text-pink-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Achievements & Awards
      </h2>
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="p-4 border border-pink-200 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-700">{achievement.description}</p>
              </div>
              <span className="px-3 py-1.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-semibold whitespace-nowrap shadow-sm">{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

