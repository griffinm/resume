import { VolunteerWork } from "@/types/resume";

interface VolunteerWorkSectionProps {
  volunteerWork: VolunteerWork[];
}

export function VolunteerWorkSection({ volunteerWork }: VolunteerWorkSectionProps) {
  if (volunteerWork.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-teal-600 pb-2 inline-flex items-center gap-2">
        <svg className="w-6 h-6 text-teal-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Volunteer Work
      </h2>
      <div className="space-y-4">
        {volunteerWork.map((work) => (
          <div key={work.id} className="border border-teal-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-teal-50 to-green-50 p-4 border-b border-teal-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{work.role}</h3>
                  <p className="text-teal-600 font-medium">{work.organization}</p>
                </div>
                <div className="text-sm text-gray-600 md:text-right">
                  <p>{work.startDate} - {work.endDate}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-700 mb-3">{work.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {work.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

