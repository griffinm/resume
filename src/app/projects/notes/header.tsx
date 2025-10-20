export function Header() {
  return (
    <div className="project-section">
      <div className="flex items-center mb-6">
        <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
          <svg
            className="w-12 h-12 text-green-600 dark:text-green-400"
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Notes App
        </h1>
      </div>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        I have used many note taking apps over the years, but I could never find one single app that had all
        of the features I wanted. So I decided to build my own.
      </p>
    </div>
  );
}

