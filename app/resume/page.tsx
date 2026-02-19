"use client";

import Link from "next/link";
import { useState } from "react";

// LinkedIn Icon SVG
const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Phone Icon SVG
const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Email Icon SVG
const EmailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Icons for "See My Work" cards
const SparklesIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

// Skills data with expanded descriptions
const skills: Record<string, string[]> = {
  "Product & Strategy": [
    "Product Lifecycle Management: Owned the full product lifecycle from discovery through deployment for fulfillment automation initiatives serving AT&T and Verizon — translating business goals into requirements, managing build, and driving adoption at scale across millions of claims annually.",
    "Product Roadmap Development: Synthesized pilot results and customer behavior data into a 2026 fulfillment roadmap for senior leadership — making the case for GenAI-driven automation across claim valuation, replacement decisions, and device identification.",
    "Backlog Management & Sprint Planning: Managed backlog prioritization and coordinated sprint planning across multiple concurrent initiatives with Engineering and Data Science teams, ensuring release objectives were consistently met in a fast-moving environment.",
    "User Story Development: Translated complex business logic for net-new ATC capabilities — including claim valuation and upgrade offers — into clear, actionable user stories that enabled development teams to build new features across Phones, Appliances, and Connected Devices from the ground up.",
    "Requirements Analysis: Defined end-to-end fulfillment requirements and customer experience journeys for In-Store Pickup at UBreakIFix — a first-to-market capability — mapping both customer and technician journeys from claim initiation through in-store resolution.",
    "Agile Methodologies: Applied Agile frameworks throughout product development at Asurion — running sprints, managing priorities, and coordinating cross-functional teams to deliver new customer-facing capabilities including digital payouts, eSIM activation, and Next Day Expert Delivery across 80% of the US."
  ],
  "Automation & Tech": [
    "Process Automation: Built and deployed a workflow automation tool for 500+ agents using an in-house low-code platform — a decision-based triage system that guides agents through claim scenarios, lifting process compliance by 80% and cutting Supply Chain costs by $5M annually.",
    "Workflow Automation: Designed the decision logic and claim routing workflows behind the agent tool — replacing inconsistent manual processes with a scalable, repeatable system that delivered the right outcome based on what was actually happening with each claim.",
    "Low-Code Platforms: Delivered a production-grade automation tool using a low-code platform similar to Power Automate — enabling rapid development and deployment without requiring full engineering resources, and serving as a model for future automation initiatives.",
    "AI/GenAI Integration: Led a discovery pilot with an external data vendor to validate whether GenAI could normalize device data and improve identification accuracy during claims — building the business case for AI-assisted automation in a step that had historically required significant manual effort.",
    "Data Analytics: Used pilot data and customer behavior insights to quantify outcomes and inform roadmap decisions — including an 80% drop in buyout completion time, 75% reduction in operations workload, and +5pt NPS lift from the reimbursement pilot.",
    "Jira & Confluence: Used Jira to manage backlogs, track sprint progress, and maintain visibility across concurrent initiatives; used Confluence to document product requirements, process flows, and decision logs — keeping cross-functional teams aligned throughout build and launch."
  ],
  "AI Tools": [
    "ChatGPT: Uses ChatGPT daily to accelerate requirements drafting, synthesize research, and pressure-test product thinking — significantly reducing time spent on early-stage discovery and documentation.",
    "Claude: Leverages Claude for deep analysis, long-form requirements work, and structured thinking on complex product problems — particularly useful for synthesizing large amounts of stakeholder input into clear recommendations.",
    "VO: Uses VO for AI-powered content and creative work — applying it to prototype development and portfolio building to demonstrate what modern PM execution looks like with GenAI tools.",
    "Perplexity: Uses Perplexity for real-time research and competitive analysis — quickly surfacing relevant context during discovery and roadmap planning to make faster, better-informed decisions.",
    "GenAI Workflow Integration: Completed certification in Integrating AI into Team Workflows — actively applies GenAI tools across the full product lifecycle to improve productivity, decision-making speed, and output quality."
  ],
  "Leadership & Collaboration": [
    "Stakeholder Management: Navigated complex cross-functional alignment across Legal, Engineering, Data Science, Supply Chain, and Client teams to socialize concepts, pressure-test approaches, secure sign-off, and maintain momentum — in an environment where competing priorities were constant.",
    "Cross-Functional Team Leadership: Led product initiatives spanning Engineering, Program Management, Data Science, Legal, Client, and Supply Chain teams — translating strategy into execution across every function involved in the claims lifecycle and consistently delivering on time.",
    "Customer Experience Optimization: Designed and ran a claim reimbursement pilot embedded directly in the Replacement Portal — resulting in 80% faster buyout completion, 75% reduction in operations center workload, +5pt NPS, and 15% more customers completing claims online.",
    "Client Relationship Management: Managed product performance and client relationships for Latin American programs at Asurion — defining KPI frameworks, leading new product launches, and optimizing advance exchange processes to improve customer experience and operational efficiency.",
    "Team Development: Hired, onboarded, and developed new team members while building a collaborative, high-performing team culture — investing in coaching and creating an environment where people could grow alongside the product."
  ],
  "Languages": [
    "Portuguese (Native): Native Brazilian Portuguese speaker — has supported Latin American client programs, cross-border operations, and global logistics throughout her career, bringing cultural fluency alongside language fluency.",
    "English (Fluent): Fully fluent — all professional work, stakeholder communication, product documentation, and executive presentations conducted in English across Fortune 100 client environments.",
    "Spanish (Conversational): Conversational Spanish used to support collaboration with Latin American partners, clients, and teams — enabling clearer communication across regional programs."
  ]
};

const SKILL_TABS = [
  "Product & Strategy",
  "Automation & Tech",
  "AI Tools",
  "Leadership & Collaboration",
  "Languages"
] as const;

// Tabbed Skills Section (useState, one category visible, fade on change)
function SkillsSection() {
  const [activeTab, setActiveTab] = useState<typeof SKILL_TABS[number]>("Product & Strategy");

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Accomplishments
        </h2>

        {/* Tab row: 5 clickable buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {SKILL_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Callout-style blocks for active tab; fixed min-height to avoid jump */}
        <div className="min-h-[400px]">
          <div key={activeTab} className="animate-fade-in space-y-4">
            {skills[activeTab].map((skillText, index) => {
              const [skillName, ...descriptionParts] = skillText.split(": ");
              const description = descriptionParts.join(": ");
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 text-left"
                >
                  <span className="leading-relaxed">
                    <span className="font-bold text-gray-900">{skillName}</span>
                    {description && (
                      <>
                        <span className="text-gray-900">: </span>
                        <span className="text-gray-700">{description}</span>
                      </>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Thays Pritchard
            </h1>
            <p className="mb-4 text-xl font-semibold text-purple-600 md:text-2xl">
              Sr. Product Manager | AI Product Management Certified
            </p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 md:text-base">
              <span className="flex items-center gap-1">
                <PhoneIcon />
                615-707-2358
              </span>
              <span className="hidden md:inline">•</span>
              <a href="mailto:pritchardbna@gmail.com" className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                <EmailIcon />
                pritchardbna@gmail.com
              </a>
              <span className="hidden md:inline">•</span>
              <span>Greater Nashville-TN Area</span>
              <span className="hidden md:inline">•</span>
              <a
                href="https://www.linkedin.com/in/thays-pritchard-2b92371b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
                <span className="hidden sm:inline">LinkedIn®</span>
                <span className="sm:hidden">LinkedIn®</span>
              </a>
            </div>
            <a
              href="/resume/Thays_Pritchard_Resume.pdf"
              download
              className="inline-block rounded-full bg-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
            >
              Download Resume
            </a>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm border border-purple-100 text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">Summary</h2>
            <p className="leading-relaxed text-gray-700 text-left max-w-3xl mx-auto">
              Product Management professional with 9+ years building customer-facing products and 
              internal tools for Fortune 100 clients including AT&T and Verizon. Proven track record 
              managing the full product lifecycle from discovery through deployment — partnering 
              cross-functionally with Engineering, Data Science, Legal, and Supply Chain teams. 
              Background in global logistics provides a grounded perspective on execution and 
              operational excellence. Passionate about applying GenAI to build smarter, more 
              efficient products that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <SkillsSection />

      {/* AI Projects Section */}
      <section className="bg-purple-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            AI Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* AI Prototypes Card */}
            <Link
              href="/prototypes"
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <SparklesIcon />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">AI Prototypes</h3>
              <p className="mb-4 text-gray-600">
                Explore hands-on tools I've built using AI — from product requirement generators 
                to claims workflow simulators. Built to show what's possible, not just what's been done.
              </p>
              <div className="flex items-center font-semibold text-purple-600 group-hover:gap-2 transition-all">
                View <span className="ml-1">→</span>
              </div>
            </Link>

            {/* Case Studies Card */}
            <Link
              href="/case-studies"
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <FileTextIcon />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">Case Studies</h3>
              <p className="mb-4 text-gray-600">
                Deep dives into real product problems I've solved — including the automation that 
                saved $5M, the fulfillment pilot that moved NPS by 5 points, and the GenAI discovery 
                that shaped a 2026 roadmap.
              </p>
              <div className="flex items-center font-semibold text-purple-600 group-hover:gap-2 transition-all">
                View <span className="ml-1">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <div className="rounded-lg bg-white p-8 shadow-lg border border-gray-100">
              <h3 className="mb-6 border-b-2 border-purple-200 pb-2 text-2xl font-bold text-gray-900">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">BBA, Marketing & IT</h4>
                  <p className="text-purple-700">Lipscomb University, Nashville, TN</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AA, Business Management</h4>
                  <p className="text-purple-700">Columbia State Community College</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-lg bg-white p-8 shadow-lg border border-gray-100">
              <h3 className="mb-6 border-b-2 border-purple-200 pb-2 text-2xl font-bold text-gray-900">
                Certifications
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>AI Product Management Certification — Section</p>
                <p>Digital Product Management Certification — The 280 Group</p>
                <p>Integrating AI into Team Workflows — Section</p>
                <p>Agile Project Management with Jira Cloud — LinkedIn® Learning</p>
                <p>Scrum: The Basics — LinkedIn® Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
