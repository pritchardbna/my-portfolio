export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Resume
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Professional experience and qualifications
          </p>
        </div>
      </section>

      {/* Resume Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Contact Info */}
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Thays Pritchard</h2>
            <p className="mb-4 text-xl text-purple-600">Senior Product Manager</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <a href="mailto:pritchardbna@gmail.com" className="hover:text-purple-600">
                pritchardbna@gmail.com
              </a>
              <span>•</span>
              <a 
                href="https://www.linkedin.com/in/thays-pritchard-2b92371b" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-12">
            <h3 className="mb-4 border-b-2 border-purple-200 pb-2 text-2xl font-bold text-gray-900">
              Professional Summary
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Experienced Senior Product Manager with deep expertise in Agile methodologies 
              and a passion for building innovative AI-powered prototypes. Proven track record 
              of translating user needs into actionable product roadmaps, prioritizing features 
              that drive business impact, and delivering products that users love.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="mb-6 border-b-2 border-purple-200 pb-2 text-2xl font-bold text-gray-900">
              Professional Experience
            </h3>
            <div className="space-y-8">
              <div className="rounded-lg bg-purple-50 p-6">
                <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="text-xl font-bold text-gray-900">Senior Product Manager</h4>
                  <span className="text-gray-600">2020 - Present</span>
                </div>
                <p className="mb-3 text-purple-700 font-semibold">Company Name</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Led cross-functional teams to deliver innovative product features using Agile methodologies
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Developed and launched AI-powered prototypes that improved workflow efficiency by 40%
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Conducted user research and interviews to inform product strategy and prioritization
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Managed product roadmaps and collaborated with engineering, design, and business stakeholders
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-purple-50 p-6">
                <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="text-xl font-bold text-gray-900">Product Manager</h4>
                  <span className="text-gray-600">2017 - 2020</span>
                </div>
                <p className="mb-3 text-purple-700 font-semibold">Company Name</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Owned product features from conception to launch, working closely with engineering teams
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Analyzed user data and metrics to identify opportunities for product improvement
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">•</span>
                    Created detailed PRDs and user stories for development teams
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="mb-6 border-b-2 border-purple-200 pb-2 text-2xl font-bold text-gray-900">
              Key Skills
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white border border-purple-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">Product Management</h4>
                <p className="text-gray-600">Product Strategy, Roadmapping, Feature Prioritization, PRD Writing</p>
              </div>
              <div className="rounded-lg bg-white border border-purple-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">Agile Methodologies</h4>
                <p className="text-gray-600">Scrum, Kanban, Sprint Planning, Retrospectives</p>
              </div>
              <div className="rounded-lg bg-white border border-purple-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">User Research</h4>
                <p className="text-gray-600">User Interviews, Usability Testing, Persona Development</p>
              </div>
              <div className="rounded-lg bg-white border border-purple-200 p-4">
                <h4 className="mb-2 font-semibold text-gray-900">AI & Prototyping</h4>
                <p className="text-gray-600">AI-Powered Tools, Rapid Prototyping, MVP Development</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 border-b-2 border-purple-200 pb-2 text-2xl font-bold text-gray-900">
              Education
            </h3>
            <div className="rounded-lg bg-purple-50 p-6">
              <h4 className="text-xl font-bold text-gray-900">Degree Name</h4>
              <p className="text-purple-700 font-semibold">University Name</p>
              <p className="text-gray-600">Year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
