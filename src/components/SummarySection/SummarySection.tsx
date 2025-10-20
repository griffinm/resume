interface SummarySectionProps {
  summary: string;
}

export function SummarySection({ summary }: SummarySectionProps) {
  if (!summary) return null;
  
  return (
    <section className="mb-10">
      <h2 className="resume-section-header">
        <svg className="w-6 h-6 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Professional Summary
      </h2>
      <div className="">
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </div>
    </section>
  );
}

