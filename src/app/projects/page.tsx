import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of personal projects built by Griffin Mahoney, including a budgeting app for personal finance management and a notes application for organization and note-taking.",
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: "Projects | Griffin Mahoney",
    description: "A collection of personal projects built by Griffin Mahoney, including a budgeting app for personal finance management and a notes application for organization and note-taking.",
    url: '/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of personal projects I&apos;ve built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Budgeting Project Card */}
          <Link
            href="/projects/budgeting"
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="p-8">
              <div className="mb-4 p-3 bg-purple-100 rounded-lg inline-block">
                <svg
                  className="w-10 h-10 text-purple-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Budgeting
              </h2>
              <p className="text-gray-600 mb-4">
                A personal finance management tool to track expenses, set budgets, and analyze spending patterns.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                Learn more
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Notes Project Card */}
          <Link
            href="/projects/notes"
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <div className="p-8">
              <div className="mb-4 p-3 bg-green-100 rounded-lg inline-block">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Notes
              </h2>
              <p className="text-gray-600 mb-4">
                A note-taking and organization application with rich text editing and categorization features.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                Learn more
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
    </div>
  );
}

