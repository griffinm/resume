import { Education } from "@/types/resume";
import { Badge, Paper } from "@mantine/core";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Education
      </h2>
      {education.map((edu) => (
        <Paper key={edu.id} p="lg" withBorder className="mb-4">
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
                  <Badge key={idx} variant="light" color="violet">
                    {honor}
                  </Badge>
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
        </Paper>
      ))}
    </section>
  );
}

