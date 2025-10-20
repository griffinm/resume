import Link from 'next/link';
import { TopNav } from '@/components/TopNav';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <TopNav />
      
      <div className="max-w-5xl mx-auto px-4 py-0 sm:py-8 mt-[20px] sm:mt-[80px]">
        <div className="text-center mb-4 sm:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-4">
            Griffin Mahoney&apos;s Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my professional experience, skills, and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Resume Button */}
          <Link
            href="/resume"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-white/20 rounded-full">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                View Resume
              </h2>
              <p className="text-blue-100 text-sm md:text-base">
                Professional experience and skills
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Budgeting Project Button */}
          <Link
            href="/projects/budgeting"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-white/20 rounded-full">
                <svg
                  className="w-12 h-12 text-white"
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Budgeting
              </h2>
              <p className="text-purple-100 text-sm md:text-base">
                Personal finance management tool
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Notes Project Button */}
          <Link
            href="/projects/notes"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-white/20 rounded-full">
                <svg
                  className="w-12 h-12 text-white"
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Notes
              </h2>
              <p className="text-green-100 text-sm md:text-base">
                Note-taking and organization app
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </main>
  );
}
