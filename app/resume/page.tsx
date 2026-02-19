"use client";

import Link from "next/link";
import { useState } from "react";

// LinkedIn Icon SVG
const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

// Skill data structure
interface Skill {
  name: string;
  category: string;
  description: string;
  accomplishment: string;
}

const skills: Skill[] = [
  {
    name: "Product Lifecycle Management",
    category: "Product & Strategy",
    description: "End-to-end product ownership from discovery through deployment",
    accomplishment: "Owned the full product lifecycle from discovery through deployment across fulfillment automation initiatives serving AT&T and Verizon — from initial concept and stakeholder alignment through build, launch, and post-launch iteration."
  },
  {
    name: "Product Roadmap Development",
    category: "Product & Strategy",
    description: "Strategic planning and roadmap creation",
    accomplishment: "Synthesized pilot results and customer behavior insights into a 2026 fulfillment roadmap recommendation for senior leadership, making the case for GenAI-driven automation across claim valuation and device identification."
  },
  {
    name: "Backlog Management & Sprint Planning",
    category: "Product & Strategy",
    description: "Agile backlog prioritization and sprint coordination",
    accomplishment: "Managed backlog prioritization and coordinated sprint planning across multiple concurrent initiatives with development teams, ensuring release objectives were consistently met."
  },
  {
    name: "User Story Development",
    category: "Product & Strategy",
    description: "Translating requirements into actionable user stories",
    accomplishment: "Translated complex business logic for net-new ATC capabilities — including claim valuation and upgrade offers — into clear user stories that gave development teams exactly what they needed to build from the ground up."
  },
  {
    name: "Requirements Analysis",
    category: "Product & Strategy",
    description: "Defining comprehensive product requirements",
    accomplishment: "Defined end-to-end fulfillment requirements and customer experience journeys for In-Store Pickup at UBreakIFix, a first-to-market capability requiring detailed mapping of both customer and technician journeys."
  },
  {
    name: "Agile Methodologies",
    category: "Product & Strategy",
    description: "Scrum, Kanban, and Agile frameworks",
    accomplishment: "Applied Agile throughout product development at Asurion — running sprints, managing backlog priorities, and coordinating cross-functional teams across Engineering, Data Science, and Operations."
  },
  {
    name: "Process Automation",
    category: "Automation & Tech",
    description: "Automating workflows and processes",
    accomplishment: "Built and deployed a workflow automation tool for 500+ agents using a low-code platform — lifting process compliance by 80% and cutting Supply Chain costs by $5M annually."
  },
  {
    name: "Workflow Automation",
    category: "Automation & Tech",
    description: "Designing automated decision workflows",
    accomplishment: "Designed a decision-based triage workflow that guides agents through claim scenarios to deliver the right outcome, replacing inconsistent manual processes with a scalable automated solution."
  },
  {
    name: "Low-Code Platforms",
    category: "Automation & Tech",
    description: "Building solutions with low-code tools",
    accomplishment: "Built the agent workflow automation tool using an in-house low-code platform similar to Power Automate — delivering a production-grade tool without requiring full engineering resources."
  },
  {
    name: "AI/GenAI Integration",
    category: "AI Tools",
    description: "Integrating AI and GenAI into products",
    accomplishment: "Ran a discovery pilot with an external data vendor to validate whether GenAI could normalize device data and improve identification accuracy during claims — building the business case for AI-assisted automation before committing to full integration."
  },
  {
    name: "Data Analytics",
    category: "AI Tools",
    description: "Analyzing data to inform decisions",
    accomplishment: "Used pilot data and customer behavior insights to quantify outcomes — including 80% drop in buyout completion time, 75% reduction in operations workload, and +5pt NPS lift — to shape roadmap decisions."
  },
  {
    name: "Jira",
    category: "Automation & Tech",
    description: "Project management with Jira",
    accomplishment: "Used Jira throughout product development at Asurion to manage backlogs, track sprint progress, and maintain visibility across concurrent initiatives."
  },
  {
    name: "Confluence",
    category: "Automation & Tech",
    description: "Documentation and knowledge management",
    accomplishment: "Documented product requirements, process flows, and decision logs in Confluence to keep cross-functional teams aligned throughout build and launch."
  },
  {
    name: "ChatGPT, Claude, VO, Perplexity",
    category: "AI Tools",
    description: "Using GenAI tools for productivity",
    accomplishment: "Actively uses GenAI tools daily to accelerate research, draft requirements, synthesize insights, and improve decision-making speed across product workflows."
  },
  {
    name: "Stakeholder Management",
    category: "Leadership & Collaboration",
    description: "Managing cross-functional relationships",
    accomplishment: "Navigated cross-functional alignment across Legal, Engineering, Data Science, Supply Chain, and Client teams to socialize concepts, pressure-test approaches, secure sign-off, and maintain momentum in an environment where competing priorities were constant."
  },
  {
    name: "Cross-Functional Team Leadership",
    category: "Leadership & Collaboration",
    description: "Leading diverse product teams",
    accomplishment: "Led product initiatives spanning Engineering, Program Management, Data Science, Legal, Client, and Supply Chain teams — translating strategy into execution across every function involved in the claims lifecycle."
  },
  {
    name: "Customer Experience Optimization",
    category: "Product & Strategy",
    description: "Improving customer experiences",
    accomplishment: "Embedded the reimbursement offer directly into the claim flow — resulting in 80% faster buyout completion, 75% reduction in ops center workload, +5pt NPS, and 15% more customers completing claims online."
  },
  {
    name: "Client Relationship Management",
    category: "Leadership & Collaboration",
    description: "Managing client relationships",
    accomplishment: "Managed product performance and client relationships for Latin American programs at Asurion, defining KPI frameworks and leading new product launches for global clients."
  },
  {
    name: "Portuguese (Native)",
    category: "Languages",
    description: "Native Brazilian Portuguese speaker",
    accomplishment: "Native Brazilian Portuguese speaker — has supported Latin American client programs and cross-border operations throughout her career."
  },
  {
    name: "English (Fluent)",
    category: "Languages",
    description: "Fully fluent English",
    accomplishment: "Fully fluent — all professional work, stakeholder communication, and product documentation conducted in English."
  },
  {
    name: "Spanish (Conversational)",
    category: "Languages",
    description: "Conversational Spanish",
    accomplishment: "Conversational Spanish supporting collaboration with Latin American partners and clients."
  }
];

const categories = ["All", "Product & Strategy", "Automation & Tech", "AI Tools", "Leadership & Collaboration", "Languages"];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Product & Strategy": "bg-purple-100 text-purple-700 border-purple-300",
    "Automation & Tech": "bg-blue-100 text-blue-700 border-blue-300",
    "AI Tools": "bg-indigo-100 text-indigo-700 border-indigo-300",
    "Leadership & Collaboration": "bg-pink-100 text-pink-700 border-pink-300",
    "Languages": "bg-green-100 text-green-700 border-green-300",
  };
  return colors[category] || "bg-gray-100 text-gray-700 border-gray-300";
};

export default function Resume() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

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
              <span>615-707-2358</span>
              <span className="hidden md:inline">•</span>
              <a href="mailto:pritchardbna@gmail.com" className="hover:text-purple-600 transition-colors">
                pritchardbna@gmail.com
              </a>
              <span className="hidden md:inline">•</span>
              <span>Fairview, TN</span>
              <span className="hidden md:inline">•</span>
              <a
                href="https://linkedin.com/in/thayspritchard-2b92371b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
                <span className="hidden sm:inline">linkedin.com/in/thayspritchard-2b92371b</span>
                <span className="sm:hidden">LinkedIn</span>
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

          <div className="rounded-lg bg-white p-6 shadow-sm border border-purple-100">
            <h2 className="mb-3 text-xl font-bold text-gray-900">Summary</h2>
            <p className="leading-relaxed text-gray-700">
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

      {/* See My Work Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            See My Work
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

      {/* Interactive Skills Explorer */}
      <section className="bg-purple-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Interactive Skills Explorer
          </h2>
          
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-purple-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill, index) => (
              <button
                key={index}
                onClick={() => handleSkillClick(skill)}
                className={`group rounded-lg border-2 p-4 text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${getCategoryColor(skill.category)}`}
              >
                <h4 className="font-semibold">{skill.name}</h4>
                <p className="mt-1 text-xs opacity-80">{skill.description}</p>
              </button>
            ))}
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
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span className="text-gray-700">AI Product Management Certification — Section</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span className="text-gray-700">Digital Product Management Certification — The 280 Group</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span className="text-gray-700">Integrating AI into Team Workflows — Section</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span className="text-gray-700">Agile Project Management with Jira Cloud — LinkedIn Learning</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span className="text-gray-700">Scrum: The Basics — LinkedIn Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal/Drawer for Skill Details */}
      {isModalOpen && selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={closeModal}>
          <div 
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(selectedSkill.category)}`}>
              {selectedSkill.category}
            </div>
            <h3 className="mb-4 text-3xl font-bold text-gray-900">{selectedSkill.name}</h3>
            <div className="mb-4">
              <h4 className="mb-2 font-semibold text-gray-900">Description</h4>
              <p className="text-gray-700">{selectedSkill.description}</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Real Accomplishment</h4>
              <p className="leading-relaxed text-gray-700">{selectedSkill.accomplishment}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
