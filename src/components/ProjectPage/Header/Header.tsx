export function Header() {
  return (
    <div className="project-section">
      <div className="flex items-center mb-6">
        <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
          <svg
            className="w-12 h-12 text-purple-600 dark:text-purple-400"
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Budgeting App
        </h1>
      </div>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        This is a personal finance management tool. I decided to build this as an alternative to Mint.com, which I used for many years.
        This application incoperates all of the features from Mint that I liked, and adds some additional features that I wanted.
      </p>
    </div>
  );
}
