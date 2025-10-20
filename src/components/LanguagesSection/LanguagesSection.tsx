import { Language } from "@/types/resume";

interface LanguagesSectionProps {
  languages: Language[];
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  if (languages.length === 0) return null;
  
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-600 pb-2 inline-flex items-center gap-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        Languages
      </h2>
      <div className="space-y-3">
        {languages.map((lang, index) => (
          <div key={index} className="p-4 border border-indigo-200 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{lang.name}</h3>
              <span className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-sm">{lang.proficiency}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

