import Link from 'next/link';
import { ReactNode } from 'react';

interface HomeButtonProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradientFrom: string;
  gradientTo: string;
  hoverGradientFrom: string;
  hoverGradientTo: string;
  textColor: string;
}

export function HomeButton({
  href,
  title,
  description,
  icon,
  gradientFrom,
  gradientTo,
  hoverGradientFrom,
  hoverGradientTo,
  textColor,
}: HomeButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-white/20 rounded-full">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {title}
        </h2>
        <p className={`${textColor} text-sm md:text-base`}>
          {description}
        </p>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${hoverGradientFrom} ${hoverGradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </Link>
  );
}

