export default function TryNow() {
  return (
        <a 
          href="https://notes.griffinmahoney.me/signup" 
          target="_blank" 
          rel="noopener" 
          className="inline-block bg-gradient-to-br from-blue-500 to-blue-700 text-white px-10 py-5 rounded-xl shadow-xl hover:from-blue-600 hover:to-blue-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
        >
          <span className="flex items-center gap-3">
            <span>Create A Free Account Now</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </a>
  );
}
