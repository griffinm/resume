import { Education } from "@/types/resume";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) return null;
  
  return (
    <>
      <h2 className="resume-section-header">
        <svg className="resume-icon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        Education
      </h2>
      {education.map((edu) => (
        <div key={edu.id} className="p-6 border border-green-200 rounded-lg mb-4 bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
              <p className="text-green-600 font-medium">{edu.institution}</p>
              {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
            </div>
            <div className="text-sm text-gray-600 md:text-right">
              <p>{edu.startDate} - {edu.endDate}</p>
              <p>{edu.location}</p>
            </div>
          </div>
          {edu.honors && edu.honors.length > 0 && (
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700 mb-1">Honors:</p>
              <div className="flex flex-wrap gap-2">
                {edu.honors.map((honor, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full text-sm font-semibold shadow-sm">
                    {honor}
                  </span>
                ))}
              </div>
            </div>
          )}
          {edu.relevantCourses && edu.relevantCourses.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">Relevant Coursework:</p>
              <p className="text-sm text-gray-600">{edu.relevantCourses.join(", ")}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

