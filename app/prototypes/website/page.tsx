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

        {/* Page header (above card) */}
        <header className="mb-8">
          <p className="font-playfair text-xs uppercase tracking-[0.2em] text-[#4A3068] mb-2">
            AI PROJECTS
          </p>
          <h1 className="font-playfair text-3xl font-extrabold text-[#2D2D2D]">
            I Built a Website in 15 Hours
          </h1>
          <p className="font-inter text-base text-[#666666] italic mt-1">
            With Zero Coding Experience
          </p>
          <p className="font-inter text-sm text-[#9B89B4] mt-2">
            By Thays Pritchard • February 2026
          </p>
          <div className="mt-4 w-16 h-0.5 bg-[#4A3068] rounded-full" aria-hidden />
        </header>

        {/* White article card */}
        <article className="bg-white max-w-[800px] mx-auto p-12 shadow-md rounded-sm">
          {/* Intro paragraph */}
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D]">
            A few weeks ago, I decided to build a professional portfolio website. Not with Squarespace or Wix — I wanted something custom, something that would actually showcase AI prototypes I&apos;d built. There was just one problem: I don&apos;t know how to code.
          </p>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D] mt-4">
            Fifteen hours and about $96 later, I have a live site at www.thayspritchard.com — complete with animated sections, interactive skill tabs, a mobile hamburger menu, and automatic deployments whenever I push changes.
          </p>

          {/* The Toolkit */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            The Toolkit
          </h2>
          <div className="w-16 h-0.5 bg-[#4A3068] rounded-full mb-6" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <p className="text-2xl mb-2">🧠</p>
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Claude — The Strategist
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                My AI co-pilot for the entire project. Claude explained concepts I didn&apos;t understand, gave me step-by-step terminal commands, troubleshooted errors when builds failed, and walked me through connecting my domain to Vercel screen-by-screen. Think of it as having a patient senior developer on call 24/7.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                💰 Cost: $22/month (already subscribed)
              </p>
            </div>
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <p className="text-2xl mb-2">✨</p>
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Cursor — The Code Writer
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                An AI-powered code editor where I describe what I want in plain English — &quot;add a hamburger menu on mobile&quot; or &quot;make the skills section interactive&quot; — and it generates the actual code. I never wrote a line manually.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                💰 Cost: $22/month
              </p>
            </div>
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <p className="text-2xl mb-2">🚀</p>
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Vercel — The Publisher
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                Free hosting that connects to GitHub. Every time I push code, Vercel automatically rebuilds and deploys my site — usually in about 60 seconds. No server configuration, no FTP, no complexity.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                💰 Cost: Free
              </p>
            </div>
            <div className="bg-white border border-[#E8E0F0] rounded-lg p-6">
              <p className="text-2xl mb-2">🌐</p>
              <h3 className="font-playfair text-base font-bold text-[#4A3068] mb-2">
                Cloudflare — The Domain
              </h3>
              <p className="font-inter text-sm text-[#2D2D2D] leading-[1.8]">
                Where I registered thayspritchard.com. Cloudflare sells domains at wholesale prices with free WHOIS privacy. Connecting it to Vercel required adding some DNS records, which Claude walked me through.
              </p>
              <p className="font-inter text-xs text-[#9B89B4] mt-3">
                💰 Cost: $52 for 5 years
              </p>
            </div>
          </div>

          {/* What Surprised Me */}
          <h2 className="font-playfair text-xl font-bold text-[#4A3068] mt-10 mb-6">
            What Surprised Me
          </h2>
          <div className="w-16 h-0.5 bg-[#4A3068] rounded-full mb-6" aria-hidden />
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
          <div className="w-16 h-0.5 bg-[#4A3068] rounded-full mb-6" aria-hidden />
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
          <div className="w-16 h-0.5 bg-[#4A3068] rounded-full mb-6" aria-hidden />
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D]">
            Design mobile-first. Most of my rework came from building for desktop and retrofitting for smaller screens.
          </p>
          <p className="font-inter text-base leading-[1.9] text-[#2D2D2D] mt-4">
            Keep prompts short. Asking Cursor for one thing at a time produced more reliable results than long, multi-section requests.
          </p>
        </article>

        {/* Bottom summary card */}
        <div className="bg-[#4A3068] text-white rounded-lg p-8 max-w-[600px] mx-auto mt-8 text-center">
          <p className="font-inter text-base font-medium">
            ⏱️ 15 hours  💰 ~$96 first month  🎯 A site I&apos;m proud of
          </p>
          <p className="font-inter text-sm italic text-white/90 mt-3">
            A year ago, this would have meant months of learning or hundreds in developer fees.
          </p>
        </div>
      </div>
    </div>
  );
}
