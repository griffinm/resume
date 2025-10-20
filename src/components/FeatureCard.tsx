import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start p-4 bg-green-100 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 p-2 bg-green-500 rounded-lg mr-4">
        {icon}
      </div>
      <div className="text-green-900">
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}

