"use client";

import { useRef, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("[Resume] ref attached:", !!resumeRef.current);
  }, []);

  const exportToPDF = async () => {
    console.log("[Resume] exportToPDF clicked, ref:", resumeRef.current);
    if (!resumeRef.current) {
      console.warn("[Resume] resumeRef.current is null, cannot export");
      return;
    }
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Thays_Pritchard_Resume.pdf");
      console.log("[Resume] PDF saved successfully");
    } catch (err) {
      console.error("[Resume] PDF export failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <div className="mx-auto max-w-[800px] px-4 py-8">
        <div className="mb-6 text-center">
          <button
            type="button"
            onClick={exportToPDF}
            className="text-sm font-inter text-[#4A3068] hover:underline focus:outline-none"
          >
            Export to PDF ↓
          </button>
        </div>

        <article ref={resumeRef} className="document-card mx-auto max-w-[800px] rounded-none bg-white p-12 shadow-md">
          {/* Name & Header */}
          <header className="text-center">
            <h1 className="font-playfair text-3xl font-extrabold uppercase tracking-tight text-[#2D2D2D]">
              Thays Pritchard
            </h1>
            <p className="mt-1 font-inter text-sm text-[#2D2D2D]">
              Sr. Product Manager | AI Product Management Certified
            </p>
            <p className="mt-1 font-inter text-xs text-[#666666]">
              615-707-2358 | pritchardbna@gmail.com | Fairview, TN | linkedin.com/in/thays-pritchard-37062bna
            </p>
            <div className="mt-4 border-b border-[#2D2D2D]/20" />
          </header>

          {/* Professional Summary */}
          <section className="mt-6">
            <h2 className="font-playfair text-xs font-normal uppercase tracking-[0.2em] text-[#4A3068] mb-2">
              Professional Summary
            </h2>
            <div className="mb-2 border-b border-[#4A3068]/30" />
            <p className="font-inter text-sm leading-[1.8] text-[#2D2D2D]">
              Product Management professional with 9+ years building customer-facing products and internal
              tools for Fortune 100 clients including AT&T and Verizon. Proven track record managing the full
              product lifecycle from discovery through deployment — partnering with Engineering, Data Science,
              Legal, and Supply Chain. Passionate about applying GenAI to build smarter, more efficient
              products that drive real business value.
            </p>
          </section>

          {/* Experience */}
          <section className="mt-6">
            <h2 className="font-playfair text-xs font-normal uppercase tracking-[0.2em] text-[#4A3068] mb-2">
              Experience
            </h2>
            <div className="mb-2 border-b border-[#4A3068]/30" />

            <div className="space-y-4">
              <div>
                <p className="font-inter text-sm font-bold text-[#2D2D2D]">
                  Senior Product Development Manager
                </p>
                <p className="font-inter text-xs italic text-[#666666]">
                  Asurion | Nashville, TN | 2021 – Present
                </p>
                <ul className="mt-2 list-none space-y-1 pl-0 font-inter text-sm leading-[1.7] text-[#2D2D2D] [&>li]:pl-4 [&>li]:relative [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['•'] [&>li]:before:text-[#4A3068]">
                  <li>Defined business and product requirements for net-new ATC capabilities — including claim valuation and upgrade offers — translating complex business logic into user stories that enabled development teams to build features from the ground up across Phones, Appliances, and Connected Devices.</li>
                  <li>Built and deployed workflow automation tool for 500+ agents using an in-house low-code platform — a decision-based triage workflow that guides agents through claim scenarios, lifting process compliance by 80% and cutting Supply Chain costs by $5M annually.</li>
                  <li>Designed and ran a claim reimbursement pilot directly within the Replacement Portal — buyout completion time dropped 80%, operations center workload reduced 75%, delivered +5pt NPS and 15% more customers completing claims online. Findings directly shaped the 2026 product roadmap for connected home fulfillment.</li>
                  <li>Defined fulfillment requirements and end-to-end customer experience journeys for In-Store Pickup at UBreakIFix — a first-to-market fulfillment option requiring detailed mapping of both customer and technician journeys from claim initiation through in-store resolution.</li>
                  <li>Led significant cross-functional alignment across Legal, Engineering, Data Science, Supply Chain, and Client teams to socialize concepts, pressure-test approaches, secure sign-off, and maintain momentum through build and launch in an environment where competing priorities were constant.</li>
                  <li>Ran a discovery pilot with an external data vendor to validate whether GenAI could normalize device data and improve identification accuracy during claims — building the business case for AI-assisted automation before committing to full integration.</li>
                  <li>Contributed to the 2026 fulfillment roadmap by synthesizing pilot results and customer behavior insights into recommendations for senior leadership — making the case for automation across claim valuation, replacement decisions, and GenAI-driven device identification.</li>
                </ul>
              </div>

              <div>
                <p className="font-inter text-sm font-bold text-[#2D2D2D]">
                  Product Fulfillment Manager
                </p>
                <p className="font-inter text-xs italic text-[#666666]">
                  Asurion | Nashville, TN | 2016 – 2021
                </p>
                <ul className="mt-2 list-none space-y-1 pl-0 font-inter text-sm leading-[1.7] text-[#2D2D2D] [&>li]:pl-4 [&>li]:relative [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['•'] [&>li]:before:text-[#4A3068]">
                  <li>Launched digital payouts, eSIM new device activation, and Next Day Expert Delivery to customers across 80% of the US — meaningfully improving operational efficiency and customer satisfaction for millions of customers.</li>
                  <li>Led discovery sessions with stakeholders to define product roadmap, managed backlog prioritization, and coordinated sprint planning with development teams to meet release objectives across multiple concurrent initiatives.</li>
                  <li>Managed cross-functional initiatives from concept through launch, delivering new customer experiences across mobility insurance and connected home programs.</li>
                  <li>Wrote and maintained requirements from discovery through release — ensuring development teams had clear, actionable user stories at every stage.</li>
                  <li>Hired, onboarded, and developed new team members; invested in coaching and building a collaborative team culture.</li>
                </ul>
              </div>

              <div>
                <p className="font-inter text-sm font-bold text-[#2D2D2D]">
                  Business Process & Implementation Manager
                </p>
                <p className="font-inter text-xs italic text-[#666666]">
                  Panalpina | Multiple Locations | 2012 – 2016
                </p>
                <ul className="mt-2 list-none space-y-1 pl-0 font-inter text-sm leading-[1.7] text-[#2D2D2D] [&>li]:pl-4 [&>li]:relative [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['•'] [&>li]:before:text-[#4A3068]">
                  <li>Owned strategy and implementation for logistics operations across global locations — including hands-on process design, team training, and standardization work.</li>
                  <li>Led the transition of US logistics operations to the Philippines — on the ground for training, process design, and standardization across two sites.</li>
                  <li>Managed a team of 21 running daily import logistics; centralized and standardized how ocean-freight cargo moved into the US.</li>
                  <li>Built foundation in international freight operations, client service, and global supply chain execution that informs operational perspective brought to product work today.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mt-6">
            <h2 className="font-playfair text-xs font-normal uppercase tracking-[0.2em] text-[#4A3068] mb-2">
              Skills
            </h2>
            <div className="mb-2 border-b border-[#4A3068]/30" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-2 font-inter text-xs text-[#2D2D2D] sm:grid-cols-2">
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Product & Strategy:</span> Product Lifecycle Management,
                  Roadmap Development, Backlog Management, Sprint Planning, User Story Development, Agile
                  Methodologies
                </p>
                <p>
                  <span className="font-semibold">Automation & Tech:</span> Process Automation, Workflow
                  Automation, Low-Code Platforms, AI/GenAI Integration, Data Analytics, Jira, Confluence
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">AI Tools:</span> ChatGPT, Claude, VO, Perplexity
                </p>
                <p>
                  <span className="font-semibold">Languages:</span> Portuguese (Native), English (Fluent),
                  Spanish (Conversational)
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mt-6">
            <h2 className="font-playfair text-xs font-normal uppercase tracking-[0.2em] text-[#4A3068] mb-2">
              Education
            </h2>
            <div className="mb-2 border-b border-[#4A3068]/30" />
            <ul className="list-none space-y-1 pl-0 font-inter text-sm text-[#2D2D2D]">
              <li>BBA, Marketing & IT — Lipscomb University, Nashville, TN</li>
              <li>AA, Business Management — Columbia State Community College</li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="mt-6">
            <h2 className="font-playfair text-xs font-normal uppercase tracking-[0.2em] text-[#4A3068] mb-2">
              Certifications
            </h2>
            <div className="mb-2 border-b border-[#4A3068]/30" />
            <ul className="list-none space-y-1 pl-0 font-inter text-sm text-[#2D2D2D]">
              <li>AI Product Management Certification — Section</li>
              <li>Digital Product Management Certification — The 280 Group</li>
              <li>Integrating AI into Team Workflows — Section</li>
              <li>Agile Project Management with Jira Cloud — LinkedIn Learning</li>
              <li>Scrum: The Basics — LinkedIn Learning</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
