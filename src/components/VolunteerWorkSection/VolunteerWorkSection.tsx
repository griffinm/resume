import { VolunteerWork } from "@/types/resume";
import { Accordion } from "@mantine/core";

interface VolunteerWorkSectionProps {
  volunteerWork: VolunteerWork[];
}

export function VolunteerWorkSection({ volunteerWork }: VolunteerWorkSectionProps) {
  if (volunteerWork.length === 0) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Volunteer Work
      </h2>
      <Accordion variant="separated" chevronPosition="left">
        {volunteerWork.map((work) => (
          <Accordion.Item key={work.id} value={work.id}>
            <Accordion.Control>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{work.role}</h3>
                  <p className="text-blue-600 font-medium">{work.organization}</p>
                </div>
                <div className="text-sm text-gray-600 md:text-right">
                  <p>{work.startDate} - {work.endDate}</p>
                </div>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <p className="text-gray-700 mb-3">{work.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {work.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

