import Link from "next/link";

export default function Prototypes() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      {/* Page Header */}
      <section className="bg-[#F5F5F5] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-playfair text-xs uppercase tracking-[0.2em] text-[#4A3068] mb-2">
            AI PROJECTS
          </p>
          <h1 className="font-playfair text-3xl font-extrabold text-[#2D2D2D] mb-4">
            What I&apos;m Building
          </h1>
          <p className="mx-auto max-w-[600px] font-inter text-base text-[#666666] leading-[1.8]">
            These prototypes and proof of concepts were built to tackle some of the most challenging and time-consuming tasks Product Managers face every day. Each one demonstrates how GenAI can increase productivity and unlock new possibilities in product management — and reflects my personal journey exploring AI, learning how it makes products better and helps teams excel.
          </p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* PRD Generator */}
            <Link
              href="#"
              className="group block rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,137,180,0.25)] hover:-translate-y-0.5"
            >
              <h3 className="font-playfair text-xl font-bold text-[#2D2D2D] mb-3">
                PRD Generator
              </h3>
              <p className="font-inter text-sm text-[#666666] leading-[1.8] mb-4">
                Streamline product requirements documentation with AI-powered generation that captures user stories, acceptance criteria, and technical specifications.
              </p>
              <span className="font-inter text-sm font-medium text-[#4A3068] group-hover:underline">
                View Project →
              </span>
            </Link>

            {/* User Interview Analyzer */}
            <Link
              href="#"
              className="group block rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,137,180,0.25)] hover:-translate-y-0.5"
            >
              <h3 className="font-playfair text-xl font-bold text-[#2D2D2D] mb-3">
                User Interview Analyzer
              </h3>
              <p className="font-inter text-sm text-[#666666] leading-[1.8] mb-4">
                Extract actionable insights from user interviews using AI to identify patterns, pain points, and opportunities for product improvement.
              </p>
              <span className="font-inter text-sm font-medium text-[#4A3068] group-hover:underline">
                View Project →
              </span>
            </Link>

            {/* Feature Prioritization Assistant */}
            <Link
              href="#"
              className="group block rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,137,180,0.25)] hover:-translate-y-0.5"
            >
              <h3 className="font-playfair text-xl font-bold text-[#2D2D2D] mb-3">
                Feature Prioritization Assistant
              </h3>
              <p className="font-inter text-sm text-[#666666] leading-[1.8] mb-4">
                Make data-driven prioritization decisions with AI that analyzes impact, effort, and strategic alignment to help you focus on what matters most.
              </p>
              <span className="font-inter text-sm font-medium text-[#4A3068] group-hover:underline">
                View Project →
              </span>
            </Link>

            {/* AI Roadmap Planner */}
            <Link
              href="#"
              className="group block rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,137,180,0.25)] hover:-translate-y-0.5"
            >
              <h3 className="font-playfair text-xl font-bold text-[#2D2D2D] mb-3">
                AI Roadmap Planner
              </h3>
              <p className="font-inter text-sm text-[#666666] leading-[1.8] mb-4">
                Build comprehensive product roadmaps with AI assistance that considers dependencies, timelines, and resource constraints for strategic planning.
              </p>
              <span className="font-inter text-sm font-medium text-[#4A3068] group-hover:underline">
                View Project →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
