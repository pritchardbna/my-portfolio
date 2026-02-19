export default function Prototypes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            AI-Powered Prototypes
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Innovative tools designed to transform product development workflows
          </p>
        </div>
      </section>

      {/* Prototypes Grid */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* PRD Generator */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                PRD Generator
              </h3>
              <p className="mb-4 text-gray-600">
                Streamline product requirements documentation with AI-powered generation 
                that captures user stories, acceptance criteria, and technical specifications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Automated user story generation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Acceptance criteria suggestions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Technical specification templates
                </li>
              </ul>
            </div>

            {/* User Interview Analyzer */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                User Interview Analyzer
              </h3>
              <p className="mb-4 text-gray-600">
                Extract actionable insights from user interviews using AI to identify 
                patterns, pain points, and opportunities for product improvement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Automated transcript analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Pain point identification
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Insight pattern recognition
                </li>
              </ul>
            </div>

            {/* Feature Prioritization Assistant */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Feature Prioritization Assistant
              </h3>
              <p className="mb-4 text-gray-600">
                Make data-driven prioritization decisions with AI that analyzes impact, 
                effort, and strategic alignment to help you focus on what matters most.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Impact vs. effort analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Strategic alignment scoring
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Automated prioritization recommendations
                </li>
              </ul>
            </div>

            {/* AI Roadmap Planner */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                AI Roadmap Planner
              </h3>
              <p className="mb-4 text-gray-600">
                Build comprehensive product roadmaps with AI assistance that considers 
                dependencies, timelines, and resource constraints for strategic planning.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Dependency mapping
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Timeline optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  Resource constraint analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
