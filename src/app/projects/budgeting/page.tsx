import { TopNav } from '@/components/TopNav';
import Link from 'next/link';

export default function BudgetingPage() {
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
            <div className="p-4 bg-purple-100 rounded-lg mr-4">
              <svg
                className="w-12 h-12 text-purple-600"
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Budgeting App
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive personal finance management tool designed to help users track expenses, 
            set budgets, and gain insights into their spending patterns.
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
              The budgeting application will feature:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expense tracking and categorization</li>
              <li>Budget creation and monitoring</li>
              <li>Visual analytics and spending reports</li>
              <li>Recurring transaction management</li>
              <li>Financial goal setting and tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

