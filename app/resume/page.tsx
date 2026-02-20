"use client";

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              margin: 0.75in;
            }
            @media print {
              nav, .no-print { display: none !important; }
              body { background: white !important; }
              .document-card { box-shadow: none !important; padding: 0 !important; }
            }
          `,
        }}
      />

      <div className="mx-auto max-w-[800px] px-4 py-8">
        <div className="no-print mb-6 text-center">
          <button
            type="button"
            onClick={handlePrint}
            className="text-sm font-inter text-[#4A3068] hover:underline focus:outline-none"
          >
            Export to PDF ↓
          </button>
        </div>

        <article className="document-card mx-auto max-w-[800px] rounded-none bg-white p-12 shadow-md">
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
                  <li>Launched proprietary claim valuation methodology — now processing 2M+ claims annually across global clients.</li>
                  <li>Built workflow automation for 500+ agents — improved process compliance 80% and reduced Supply Chain costs $5M/year.</li>
                  <li>Claim reimbursement pilot: 80% faster buyout completion, 75% ops workload reduction, +5pt NPS, 15% more online completions.</li>
                  <li>Pioneered In-Store Pickup at UBreakIFix — first-to-market fulfillment option — led end-to-end from journey design to launch.</li>
                  <li>Ran GenAI discovery pilot validating AI-assisted device identification during claims.</li>
                  <li>Contributed to 2026 roadmap recommending GenAI automation across claim valuation and device identification.</li>
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
                  <li>Delivered digital payouts, eSIM activation, and Next Day Expert Delivery across 80% of the US.</li>
                  <li>Managed backlog and sprint planning across multiple concurrent initiatives.</li>
                  <li>Hired, onboarded, and developed new team members.</li>
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
                  <li>Led US logistics operations transition to the Philippines.</li>
                  <li>Managed team of 21 running daily import logistics.</li>
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
