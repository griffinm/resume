import { WorkExperience } from "@/types/resume";

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  if (workExperience.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Work Experience
      </h2>
      <div className="space-y-4">
        {workExperience.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.role}</h3>
                  <p className="text-blue-600 font-medium">{job.company}</p>
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
    </section>
  );
}

