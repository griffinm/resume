import { TopNav, HomeButton } from '@/components';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <TopNav />
      
      <div className="max-w-5xl mx-auto p-4 sm:py-8 mt-[20px] sm:mt-[80px]">
        <div className="text-center mb-4 sm:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-4">
            Griffin Mahoney&apos;s Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my professional experience, skills, and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Resume Button */}
          <HomeButton
            href="/resume"
            title="View Resume"
            description="Professional experience and skills"
            gradientFrom="from-blue-500"
            gradientTo="to-blue-700"
            hoverGradientFrom="from-blue-600"
            hoverGradientTo="to-blue-800"
            textColor="text-blue-100"
            icon={
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
            }
          />

          {/* Budgeting Project Button */}
          <HomeButton
            href="/projects/"
            title="View My Projects"
            description="A collection of personal projects I've built"
            gradientFrom="from-purple-500"
            gradientTo="to-purple-700"
            hoverGradientFrom="from-purple-600"
            hoverGradientTo="to-purple-800"
            textColor="text-purple-100"
            icon={
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            }
          />
        </div>
      </div>
    </main>
  );
}
