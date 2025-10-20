'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'summary', label: 'Summary' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'volunteer', label: 'Volunteer' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      // Close menu on mobile after clicking
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md print:hidden"
    >
      <div className="max-w-5xl mx-auto px-4 py-3">
        {/* Mobile hamburger button */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            {activeSection ? navItems.find(item => item.id === activeSection)?.label : 'Navigation'}
          </span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation - always visible on md+ */}
        <ul className="hidden md:flex flex-wrap gap-2 md:gap-4 justify-center items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

