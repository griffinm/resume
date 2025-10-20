import { Education } from "@/types/resume";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Education
      </h2>
      {education.map((edu) => (
        <div key={edu.id} className="p-6 border border-gray-200 rounded-lg mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
              <p className="text-blue-600 font-medium">{edu.institution}</p>
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
                  <span key={idx} className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-sm font-medium">
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
    </section>
  );
}

