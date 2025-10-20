'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/colors', label: 'Colors' },
];

export function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md print:hidden">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <ul className="flex flex-wrap gap-2 md:gap-4 justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 ${
                  isActive(link.href)
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

