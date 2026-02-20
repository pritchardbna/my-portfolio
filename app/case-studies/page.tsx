export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 px-4 md:px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Case Studies
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Real-world examples of product management success stories
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                  E-commerce Platform
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Scaling Product Discovery Experience
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Led the redesign of the product discovery experience for a major e-commerce 
                platform, resulting in a 35% increase in conversion rates and improved 
                user engagement metrics.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">35%</div>
                  <div className="text-sm text-gray-600">Increase in Conversion</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">6 Months</div>
                  <div className="text-sm text-gray-600">Time to Market</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">Agile</div>
                  <div className="text-sm text-gray-600">Methodology</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                  SaaS Platform
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                AI-Powered Feature Prioritization System
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Developed and launched an AI-powered feature prioritization tool that 
                reduced decision-making time by 50% and improved alignment between product, 
                engineering, and business stakeholders.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600">Faster Decisions</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">90%</div>
                  <div className="text-sm text-gray-600">Stakeholder Alignment</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">AI/ML</div>
                  <div className="text-sm text-gray-600">Technology</div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                  Mobile App
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                User Research-Driven Product Redesign
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Conducted extensive user research and interviews to inform a complete 
                product redesign, resulting in a 40% improvement in user satisfaction 
                scores and a 25% reduction in support tickets.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">40%</div>
                  <div className="text-sm text-gray-600">Satisfaction Increase</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-gray-600">Support Reduction</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <div className="text-2xl font-bold text-purple-600">User Research</div>
                  <div className="text-sm text-gray-600">Methodology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
