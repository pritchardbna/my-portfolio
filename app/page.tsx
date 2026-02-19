export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Thays Pritchard
          </h1>
          <h2 className="mb-8 text-2xl font-semibold text-purple-600 md:text-3xl">
            Senior Product Manager
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Experienced Product Manager with deep expertise in Agile methodologies, 
            dedicated to building innovative AI-powered prototypes that transform 
            product development workflows and drive meaningful user value.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            About Me
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              As a Senior Product Manager, I combine strategic thinking with hands-on 
              execution to deliver products that users love. My passion lies in leveraging 
              AI and modern technology to solve complex product challenges and streamline 
              workflows.
            </p>
            <p>
              With extensive experience in Agile methodologies, I excel at translating 
              user needs into actionable product roadmaps, prioritizing features that 
              drive business impact, and building prototypes that validate ideas quickly 
              and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Prototypes Section */}
      <section className="bg-purple-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            AI-Powered Prototypes
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* PRD Generator Card */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                PRD Generator
              </h3>
              <p className="text-gray-600">
                Streamline product requirements documentation with AI-powered generation 
                that captures user stories, acceptance criteria, and technical specifications.
              </p>
            </div>

            {/* User Interview Analyzer Card */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                User Interview Analyzer
              </h3>
              <p className="text-gray-600">
                Extract actionable insights from user interviews using AI to identify 
                patterns, pain points, and opportunities for product improvement.
              </p>
            </div>

            {/* Feature Prioritization Assistant Card */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Feature Prioritization Assistant
              </h3>
              <p className="text-gray-600">
                Make data-driven prioritization decisions with AI that analyzes impact, 
                effort, and strategic alignment to help you focus on what matters most.
              </p>
            </div>

            {/* AI Roadmap Planner Card */}
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                AI Roadmap Planner
              </h3>
              <p className="text-gray-600">
                Build comprehensive product roadmaps with AI assistance that considers 
                dependencies, timelines, and resource constraints for strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Let's Connect
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Interested in collaborating or learning more about my work? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:pritchardbna@gmail.com"
              className="rounded-full bg-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/thays-pritchard-2b92371b"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-purple-600 px-8 py-3 font-semibold text-purple-600 transition-all duration-300 hover:bg-purple-50"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Thays Pritchard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
