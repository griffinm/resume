import { WorkExperience } from "@/types/resume";

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  if (workExperience.length === 0) return null;
  
  return (
    <>
      <h2 className="resume-section-header">
        <svg className="resume-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Work Experience
      </h2>
      <div className="space-y-4">
        {workExperience.map((job) => (
          <div key={job.id} className="border border-blue-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-blue-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.role}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-blue-600 font-medium">{job.company}</p>
                    {job.acquisition && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                        <span>🎯</span>
                        <span>Acquired by {job.acquisition.acquirer} ({job.acquisition.year})</span>
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-600 md:text-right">
                  <p>{job.startDate} - {job.endDate}</p>
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-3">{job.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="leading-relaxed">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

