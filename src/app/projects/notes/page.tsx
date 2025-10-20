import { TopNav } from '@/components/TopNav';
import Link from 'next/link';

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <TopNav />
      
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-green-100 rounded-lg mr-4">
              <svg
                className="w-12 h-12 text-green-600"
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Notes App
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A powerful note-taking and organization application with rich text editing capabilities 
            and intelligent categorization features.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About This Project
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              This project is currently under development. Check back soon for more details!
            </p>
            <p className="mb-4">
              The notes application will feature:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rich text editing with formatting options</li>
              <li>Organizational folders and tags</li>
              <li>Quick search and filtering</li>
              <li>Markdown support</li>
              <li>Cloud synchronization</li>
              <li>Collaborative note sharing</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

