import { Certification } from "@/types/resume";

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (certifications.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-600 pb-2 inline-flex items-center gap-2">
        <svg className="w-6 h-6 text-orange-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        Certifications
      </h2>
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <div key={index} className="p-4 border border-orange-200 rounded-lg bg-gradient-to-br from-orange-50 to-pink-50 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 text-sm mb-1">{cert.name}</h3>
            <p className="text-xs text-orange-600 font-medium mb-1">{cert.issuer}</p>
            <p className="text-xs text-gray-600">Issued: {cert.date}</p>
            {cert.expiryDate && (
              <p className="text-xs text-gray-600">Expires: {cert.expiryDate}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

