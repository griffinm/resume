import { WorkExperience } from "@/types/resume";
import { Accordion } from "@mantine/core";

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Work Experience
      </h2>
      <Accordion variant="separated" chevronPosition="left" defaultValue={workExperience[0]?.id}>
        {workExperience.map((job) => (
          <Accordion.Item key={job.id} value={job.id}>
            <Accordion.Control>
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
            </Accordion.Control>
            <Accordion.Panel>
              <p className="text-gray-700 mb-3">{job.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="leading-relaxed">{achievement}</li>
                ))}
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

