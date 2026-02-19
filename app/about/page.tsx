export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            About Me
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Learn more about my background, expertise, and passion for product management
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Professional Background
              </h2>
              <p>
                As a Senior Product Manager, I bring a unique combination of strategic 
                thinking and hands-on execution to every project. With extensive experience 
                in Agile methodologies, I excel at translating complex user needs into 
                actionable product roadmaps that drive meaningful business impact.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Expertise & Skills
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-purple-900">Product Strategy</h3>
                  <p className="text-gray-700">
                    Developing comprehensive product strategies aligned with business goals 
                    and user needs.
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-purple-900">Agile Methodologies</h3>
                  <p className="text-gray-700">
                    Deep expertise in Scrum, Kanban, and other Agile frameworks for 
                    efficient product delivery.
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-purple-900">AI & Prototyping</h3>
                  <p className="text-gray-700">
                    Building innovative AI-powered prototypes to validate ideas and 
                    streamline workflows.
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-purple-900">User Research</h3>
                  <p className="text-gray-700">
                    Conducting user interviews and research to inform product decisions 
                    and prioritize features.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                My Approach
              </h2>
              <p>
                I believe in the power of data-driven decision making combined with 
                empathetic user understanding. My approach centers on rapid iteration, 
                continuous learning, and building products that users genuinely love. 
                I'm passionate about leveraging modern technology, especially AI, to 
                solve complex product challenges and create more efficient workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-purple-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Let's Connect
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Interested in learning more or discussing potential collaboration?
          </p>
          <a
            href="mailto:pritchardbna@gmail.com"
            className="inline-block rounded-full bg-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
