import Link from "next/link";

export default function WebsiteCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <div className="mx-auto max-w-[800px] px-4 py-8 md:px-6">
        {/* Back link */}
        <Link
          href="/prototypes"
          className="font-inter text-sm text-[#4A3068] hover:underline mb-8 inline-block"
        >
          ← Back to AI Projects
        </Link>

        {/* Page header */}
        <header className="mb-0">
          <p className="font-playfair text-xs uppercase tracking-[0.2em] text-[#4A3068] mb-2">
            AI PROJECTS
          </p>
          <h1 className="font-playfair text-3xl font-extrabold text-[#2D2D2D]">
            I Built a Website in 10 Hours
          </h1>
          <p className="font-inter text-base text-[#666666] italic mt-1">
            With Zero Coding Experience
          </p>
          <p className="font-inter text-sm text-[#666666] mt-2">
            By Thays Pritchard • February 2026
          </p>
          <div className="mt-6 mb-6 w-16 h-0.5 bg-[#4A3068] rounded-full" aria-hidden />
        </header>

        {/* Stats — single line */}
        <p className="font-inter text-sm text-[#666666] text-left mt-4">
          <span className="font-bold text-[#4A3068]">10 hrs</span>
          <span className="px-3" aria-hidden>·</span>
          <span className="font-bold text-[#4A3068]">~$75</span>/setup cost
          <span className="font-inter text-xs text-[#9B89B4] italic ml-1">(domain $52/5 yrs + tools)</span>
          <span className="px-3" aria-hidden>·</span>
          <span className="font-bold text-[#4A3068]">$0</span> developer fees
        </p>

        {/* White article card */}
        <article className="bg-white max-w-[800px] mx-auto pt-6 px-12 pb-12 shadow-md rounded-sm mt-8">
          {/* The Use Case */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mb-4">
            The Use Case
          </h2>
          {/* Intro paragraphs */}
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D]">
            A few weeks ago, I decided to build a professional portfolio website. Not with Squarespace or Wix — I wanted something custom, something that would actually showcase AI prototypes I&apos;d built. There was just one problem: I don&apos;t know how to code.
          </p>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D] mt-4">
            Ten hours and about $96 later, I have a live site at www.thayspritchard.com — complete with animated sections, interactive skill tabs, a mobile hamburger menu, and automatic deployments whenever I push changes.
          </p>

          {/* The Toolkit */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            The Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Claude — The Strategist
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                My AI co-pilot for the entire project. Claude explained concepts I didn&apos;t understand, gave me step-by-step terminal commands, troubleshooted errors when builds failed, and walked me through connecting my domain to Vercel screen-by-screen. Think of it as having a patient senior developer on call 24/7.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                Cost: $22/month (already subscribed)
              </p>
            </div>
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Cursor — The Code Writer
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                An AI-powered code editor where I describe what I want in plain English — &quot;add a hamburger menu on mobile&quot; or &quot;make the skills section interactive&quot; — and it generates the actual code. I never wrote a line manually.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                Cost: $22/month
              </p>
            </div>
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Vercel — The Publisher
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                Free hosting that connects to GitHub. Every time I push code, Vercel automatically rebuilds and deploys my site — usually in about 60 seconds. No server configuration, no FTP, no complexity.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                Cost: Free
              </p>
            </div>
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Cloudflare — The Domain
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                Where I registered thayspritchard.com. Cloudflare sells domains at wholesale prices with free WHOIS privacy. Connecting it to Vercel required adding some DNS records, which Claude walked me through.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                Cost: $52 for 5 years
              </p>
            </div>
          </div>

          {/* What Surprised Me */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            What Surprised Me
          </h2>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D]">
            The first homepage took maybe two hours, including installing Node.js and figuring out where Cursor&apos;s AI chat panel was hidden (it&apos;s Cmd+L). By the end of day one, I had a live URL I could share.
          </p>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D] mt-4">
            The process felt surprisingly iterative. Describe something to Cursor, see if it works, ask Claude when it breaks, try again. The back-and-forth felt natural — like working with a very patient collaborator who never gets frustrated.
          </p>

          {/* The Hard Parts */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            The Hard Parts
          </h2>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D]">
            Mobile responsiveness was the biggest time sink. Hero image cropping, hamburger navigation, full-width sections — each took multiple attempts.
          </p>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D] mt-4">
            DNS configuration felt intimidating — A records? CNAMEs? — but Claude walked me through it screen by screen. Twenty minutes of confusion, then it just worked.
          </p>

          {/* What I'd Do Differently */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            What I&apos;d Do Differently
          </h2>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D]">
            Design mobile-first. Most of my rework came from building for desktop and retrofitting for smaller screens.
          </p>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D] mt-4">
            Keep prompts short. Asking Cursor for one thing at a time produced more reliable results than long, multi-section requests.
          </p>

          {/* The Challenge */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            The Challenge
          </h2>
          <ul className="font-inter text-base leading-[1.9] text-[#2D2D2D] space-y-2 list-disc pl-6">
            <li>I needed a professional portfolio site to showcase my PM skills and AI prototypes.</li>
            <li>I didn&apos;t know how to code.</li>
            <li>I wanted something custom — not a generic template.</li>
            <li>Budget: minimal (free tools where possible).</li>
          </ul>

          {/* The Tools — quick reference */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            The Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-[#E8E0F0] p-4 bg-white">
              <div>
                <p className="font-playfair text-base font-bold text-[#4A3068]">Claude</p>
                <p className="font-inter text-sm text-[#666666]">AI assistant for guidance and prompts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#E8E0F0] p-4 bg-white">
              <div>
                <p className="font-playfair text-base font-bold text-[#4A3068]">Cursor</p>
                <p className="font-inter text-sm text-[#666666]">AI-powered code editor</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#E8E0F0] p-4 bg-white">
              <div>
                <p className="font-playfair text-base font-bold text-[#4A3068]">Vercel</p>
                <p className="font-inter text-sm text-[#666666]">Free hosting and deployment</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#E8E0F0] p-4 bg-white">
              <div>
                <p className="font-playfair text-base font-bold text-[#4A3068]">Cloudflare</p>
                <p className="font-inter text-sm text-[#666666]">Domain registration</p>
              </div>
            </div>
          </div>

          {/* The Prompts That Built It */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-2">
            The Prompts That Built It
          </h2>
          <p className="font-inter text-base text-[#666666] italic mb-6">
            The magic wasn&apos;t in writing code — it was in describing what I wanted clearly. Here are the actual prompts I used at key moments:
          </p>
          <div className="space-y-6">
            <div className="rounded-lg border border-[#E8E0F0] p-6 shadow-md bg-white">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">THE STARTER — Your First Homepage</h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8] mb-4">
                This was the very first prompt I gave Cursor after creating my project. It built the entire homepage structure in one go.
              </p>
              <div className="bg-gray-50 border border-gray-200 text-gray-700 italic text-sm p-4 rounded-lg whitespace-pre-wrap font-inter">{`Please replace the contents of app/page.tsx with a professional portfolio homepage for a Senior Product Manager named Thays Pritchard. Include: a hero section with my name and title, a short bio about being an experienced PM with Agile expertise who builds AI-powered prototypes, 4 prototype cards (PRD Generator, User Interview Analyzer, Feature Prioritization Assistant, AI Roadmap Planner), and a contact section. Use Tailwind CSS with a purple and white color scheme. Make it look modern and professional.`}</div>
            </div>
            <div className="rounded-lg border border-[#E8E0F0] p-6 shadow-md bg-white">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">ADDING STRUCTURE — Navigation & Pages</h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8] mb-4">
                Once the homepage existed, I needed to add multiple pages. This prompt created the full site architecture.
              </p>
              <div className="bg-gray-50 border border-gray-200 text-gray-700 italic text-sm p-4 rounded-lg whitespace-pre-wrap font-inter">{`Please update my portfolio to add navigation with 4 pages: About, Prototypes, Case Studies, and Resume. Create a navigation bar at the top of the homepage with links to each page. Create separate pages for each section: app/about/page.tsx, app/prototypes/page.tsx, app/case-studies/page.tsx, and app/resume/page.tsx. Add placeholder content to each page that matches the purple and white color scheme. Make the navigation look clean and professional.`}</div>
            </div>
            <div className="rounded-lg border border-[#E8E0F0] p-6 shadow-md bg-white">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">ADDING INTERACTIVITY — Tabbed Skills Section</h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8] mb-4">
                I wanted something that felt dynamic, not just static text. This prompt created clickable tabs that show different skill categories.
              </p>
              <div className="bg-gray-50 border border-gray-200 text-gray-700 italic text-sm p-4 rounded-lg whitespace-pre-wrap font-inter">{`Replace the skills section in app/resume/page.tsx with a clean interactive tabbed skills section titled 'My Skills'. Display 5 tab buttons: Product & Strategy, Automation & Tech, AI Tools, Leadership & Collaboration, Languages. When a tab is clicked, the bullet points for that category animate in below. First tab is active by default. Active tab should be filled with accent color, others are outline style. Use React useState for the interaction.`}</div>
            </div>
            <div className="rounded-lg border border-[#E8E0F0] p-6 shadow-md bg-white">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">FIXING MOBILE — Responsive Layout</h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8] mb-4">
                The site looked great on desktop but broken on phones. This prompt tackled multiple mobile issues at once.
              </p>
              <div className="bg-gray-50 border border-gray-200 text-gray-700 italic text-sm p-4 rounded-lg whitespace-pre-wrap font-inter">{`Fix mobile layout issues across the entire site. NAVIGATION: Convert to hamburger menu on mobile — hide nav links, show hamburger icon, open full-screen overlay when tapped. HERO IMAGE: Make full viewport width on mobile, use object-cover, position so the person appears on the right side of the frame. GLOBAL: On mobile, content should be full-width with small padding. Apply these fixes to ALL pages.`}</div>
            </div>
            <div className="rounded-lg border border-[#E8E0F0] p-6 shadow-md bg-white">
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">QUICK FIXES — Single-Purpose Prompts</h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8] mb-4">
                I learned that shorter, focused prompts worked better than long ones.
              </p>
              <div className="bg-gray-50 border border-gray-200 text-gray-700 italic text-sm p-4 rounded-lg whitespace-pre-wrap font-inter">{`Add Resume to the navigation bar between AI Projects and the email icon.

Update the header text to say 'Where Product Meets AI' with subtext 'These aren't just prototypes — they're proof of concept.'

Shorten the typewriter animation delay from 100ms to 50ms so it feels snappier.`}</div>
            </div>
          </div>

          {/* What I Learned */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            What Made Prompts Work
          </h2>
          <div className="rounded-lg border-2 border-[#E8E0F0] bg-[#F5F5F5] p-6 shadow-md">
            <ul className="font-inter text-base leading-[1.9] text-[#2D2D2D] space-y-2 list-disc pl-6">
              <li>Be specific about file names (<code className="bg-white/80 px-1 rounded text-sm">app/page.tsx</code>, not &quot;the homepage&quot;).</li>
              <li>Describe the visual outcome, not just the feature (&quot;purple accent color&quot; not &quot;make it pretty&quot;).</li>
              <li>One thing at a time worked better than mega-prompts.</li>
              <li>When something broke, I&apos;d paste the error message and ask Claude to explain it.</li>
            </ul>
          </div>

          {/* Results */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            Results
          </h2>
          <ul className="font-inter text-base leading-[1.9] text-[#2D2D2D] space-y-2 list-disc pl-6">
            <li>Built and deployed in ~10 hours total.</li>
            <li>$10/year total cost (just the domain).</li>
            <li>Fully responsive on mobile and desktop.</li>
            <li>Custom design, not a template.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
