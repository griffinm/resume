import { Certification } from "@/types/resume";
import { Paper } from "@mantine/core";

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 inline-block">
        Certifications
      </h2>
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <Paper key={index} p="md" withBorder>
            <h3 className="font-semibold text-gray-800 text-sm mb-1">{cert.name}</h3>
            <p className="text-xs text-blue-600 mb-1">{cert.issuer}</p>
            <p className="text-xs text-gray-600">Issued: {cert.date}</p>
            {cert.expiryDate && (
              <p className="text-xs text-gray-600">Expires: {cert.expiryDate}</p>
            )}
          </Paper>
        ))}
      </div>
    </section>
  );
}

