import { Language } from "@/types/resume";
import { Badge, Paper } from "@mantine/core";

interface LanguagesSectionProps {
  languages: Language[];
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Languages
      </h2>
      <div className="space-y-3">
        {languages.map((lang, index) => (
          <Paper key={index} p="md" withBorder>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{lang.name}</h3>
              <Badge variant="light" color="blue">{lang.proficiency}</Badge>
            </div>
          </Paper>
        ))}
      </div>
    </section>
  );
}

