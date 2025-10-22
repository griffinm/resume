import { TopNav } from '@/components/TopNav';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Palette",
  description: "Explore the complete color system and design palette used throughout Griffin Mahoney's portfolio. View color schemes, gradients, and usage examples for blue, purple, green, orange, teal, pink, and indigo.",
};

export default function ColorsPage() {
  const colorPalettes = [
    {
      name: 'Blue',
      description: 'Trust, professionalism, stability',
      shades: [
        { name: '50', bg: 'bg-blue-50', text: 'text-gray-900' },
        { name: '100', bg: 'bg-blue-100', text: 'text-gray-900' },
        { name: '500', bg: 'bg-blue-500', text: 'text-white' },
        { name: '600', bg: 'bg-blue-600', text: 'text-white' },
        { name: '700', bg: 'bg-blue-700', text: 'text-white' },
        { name: '800', bg: 'bg-blue-800', text: 'text-white' },
      ],
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
      hoverGradient: 'from-blue-600 to-blue-800',
    },
    {
      name: 'Purple',
      description: 'Creativity, wealth, sophistication',
      shades: [
        { name: '50', bg: 'bg-purple-50', text: 'text-gray-900' },
        { name: '100', bg: 'bg-purple-100', text: 'text-gray-900' },
        { name: '500', bg: 'bg-purple-500', text: 'text-white' },
        { name: '600', bg: 'bg-purple-600', text: 'text-white' },
        { name: '700', bg: 'bg-purple-700', text: 'text-white' },
        { name: '800', bg: 'bg-purple-800', text: 'text-white' },
      ],
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
      hoverGradient: 'from-purple-600 to-purple-800',
    },
    {
      name: 'Green',
      description: 'Growth, harmony, freshness',
      shades: [
        { name: '50', bg: 'bg-green-50', text: 'text-gray-900' },
        { name: '100', bg: 'bg-green-100', text: 'text-gray-900' },
        { name: '500', bg: 'bg-green-500', text: 'text-white' },
        { name: '600', bg: 'bg-green-600', text: 'text-white' },
        { name: '700', bg: 'bg-green-700', text: 'text-white' },
        { name: '800', bg: 'bg-green-800', text: 'text-white' },
      ],
      gradient: 'bg-gradient-to-br from-green-500 to-green-700',
      hoverGradient: 'from-green-600 to-green-800',
    },
    {
      name: 'Orange',
      description: 'Energy, enthusiasm, warmth',
      shades: [
        { name: '50', bg: 'bg-orange-50', text: 'text-gray-900' },
        { name: '100', bg: 'bg-orange-100', text: 'text-gray-900' },
        { name: '500', bg: 'bg-orange-500', text: 'text-white' },
        { name: '600', bg: 'bg-orange-600', text: 'text-white' },
        { name: '700', bg: 'bg-orange-700', text: 'text-white' },
        { name: '800', bg: 'bg-orange-800', text: 'text-white' },
      ],
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
      hoverGradient: 'from-orange-600 to-orange-800',
      isNew: true,
    },
    {
      name: 'Teal',
      description: 'Clarity, innovation, modernity',
      shades: [
        { name: '50', bg: 'bg-teal-50', text: 'text-gray-900' },
        { name: '100', bg: 'bg-teal-100', text: 'text-gray-900' },
        { name: '500', bg: 'bg-teal-500', text: 'text-white' },
        { name: '600', bg: 'bg-teal-600', text: 'text-white' },
        { name: '700', bg: 'bg-teal-700', text: 'text-white' },
        { name: '800', bg: 'bg-teal-800', text: 'text-white' },
      ],
      gradient: 'bg-gradient-to-br from-teal-500 to-teal-700',
      hoverGradient: 'from-teal-600 to-teal-800',
      isNew: true,
    },
    {
      name: 'Pink',
      description: 'Creativity, passion, compassion',
      shades: [
        { name: '50', bg: 'bg-pink-50', text: 'text-gray-900' },
        { name: '100', bg: 'bg-pink-100', text: 'text-gray-900' },
        { name: '500', bg: 'bg-pink-500', text: 'text-white' },
        { name: '600', bg: 'bg-pink-600', text: 'text-white' },
        { name: '700', bg: 'bg-pink-700', text: 'text-white' },
        { name: '800', bg: 'bg-pink-800', text: 'text-white' },
      ],
      gradient: 'bg-gradient-to-br from-pink-500 to-pink-700',
      hoverGradient: 'from-pink-600 to-pink-800',
      isNew: true,
    },
    {
      name: 'Indigo',
      description: 'Wisdom, integrity, authority',
      shades: [
        { name: '50', bg: 'bg-indigo-50', text: 'text-gray-900' },
        { name: '100', bg: 'bg-indigo-100', text: 'text-gray-900' },
        { name: '500', bg: 'bg-indigo-500', text: 'text-white' },
        { name: '600', bg: 'bg-indigo-600', text: 'text-white' },
        { name: '700', bg: 'bg-indigo-700', text: 'text-white' },
        { name: '800', bg: 'bg-indigo-800', text: 'text-white' },
      ],
      gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      hoverGradient: 'from-indigo-600 to-indigo-800',
      isNew: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <TopNav />
      
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Back Button */}
        <Link
          href="/"
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
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Color Palette
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Explore the complete color system used throughout the portfolio
          </p>
          <a 
            href="/COLOR_GUIDE.md"
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View Full Color Guide Documentation
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Color Palettes */}
        <div className="space-y-12">
          {colorPalettes.map((palette) => (
            <div key={palette.name} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {palette.name}
                    </h2>
                    {palette.isNew && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{palette.description}</p>
                </div>
              </div>

              {/* Color Shades */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                {palette.shades.map((shade) => (
                  <div key={shade.name} className="text-center">
                    <div className={`${shade.bg} ${shade.text} rounded-lg p-6 mb-2 font-medium shadow-sm`}>
                      {shade.name}
                    </div>
                    <div className="text-sm text-gray-600">{palette.name}-{shade.name}</div>
                  </div>
                ))}
              </div>

              {/* Gradient Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Gradients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className={`${palette.gradient} text-white rounded-lg p-6 text-center font-medium shadow-lg`}>
                      Primary Gradient
                    </div>
                    <code className="text-xs text-gray-600 mt-2 block">
                      {palette.gradient}
                    </code>
                  </div>
                  <div>
                    <div className={`bg-gradient-to-br ${palette.hoverGradient} text-white rounded-lg p-6 text-center font-medium shadow-lg`}>
                      Hover Gradient
                    </div>
                    <code className="text-xs text-gray-600 mt-2 block">
                      bg-gradient-to-br {palette.hoverGradient}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gray Scale */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Gray Scale
          </h2>
          <p className="text-gray-600 mb-6">Neutral colors for backgrounds, borders, and text</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`bg-gray-${shade} rounded-lg p-4 mb-2 shadow-sm ${shade >= 600 ? 'text-white' : 'text-gray-900'} font-medium`}
                >
                  {shade}
                </div>
                <div className="text-xs text-gray-600">gray-{shade}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Color Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Text Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Light Backgrounds</h3>
              <div className="space-y-3 bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-900 font-semibold">Primary Heading (gray-900)</p>
                <p className="text-gray-800">Secondary Heading (gray-800)</p>
                <p className="text-gray-700">Tertiary Heading (gray-700)</p>
                <p className="text-gray-600">Body Text (gray-600)</p>
                <p className="text-gray-500">Muted Text (gray-500)</p>
                <p className="text-blue-600">Link Text (blue-600)</p>
                <p className="text-purple-600">Purple Link (purple-600)</p>
                <p className="text-green-600">Success Text (green-600)</p>
                <p className="text-orange-600">Warning Text (orange-600)</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dark Backgrounds</h3>
              <div className="space-y-3 bg-gray-900 p-6 rounded-lg">
                <p className="text-white font-semibold">White Text (white)</p>
                <p className="text-blue-100">Blue Light (blue-100)</p>
                <p className="text-purple-100">Purple Light (purple-100)</p>
                <p className="text-green-100">Green Light (green-100)</p>
                <p className="text-orange-100">Orange Light (orange-100)</p>
                <p className="text-teal-100">Teal Light (teal-100)</p>
                <p className="text-pink-100">Pink Light (pink-100)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Button Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Interactive Elements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalettes.map((palette) => (
              <button
                key={palette.name}
                className={`group relative overflow-hidden ${palette.gradient} text-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium`}
              >
                <span className="relative z-10">{palette.name} Button</span>
                <div className={`absolute inset-0 bg-gradient-to-br ${palette.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </button>
            ))}
          </div>
        </div>

        {/* Usage Guide Link */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg p-8 mt-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Need More Details?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Check out the comprehensive color guide documentation for detailed usage examples, 
            accessibility notes, color psychology, and code snippets.
          </p>
          <a 
            href="/COLOR_GUIDE.md"
            target="_blank"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Open Color Guide
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

