interface SummarySectionProps {
  summary: string;
}

export function SummarySection({ summary }: SummarySectionProps) {
  if (!summary) return null;
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Professional Summary
      </h2>
      <p className="text-gray-700 leading-relaxed">{summary}</p>
    </section>
  );
}

