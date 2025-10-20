import { Language } from "@/types/resume";

interface LanguagesSectionProps {
  languages: Language[];
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  if (languages.length === 0) return null;
  
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Languages
      </h2>
      <div className="space-y-3">
        {languages.map((lang, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{lang.name}</h3>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">{lang.proficiency}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

