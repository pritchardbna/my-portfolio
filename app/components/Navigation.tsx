import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-16 lg:px-24">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 sm:py-3">
          {/* Left — Name + subtitle */}
          <div>
            <p className="text-[#2D2D2D] text-base font-bold leading-tight">
              Thays Pritchard
            </p>
            <p className="text-[#7B5EA7] text-xs font-normal leading-tight mt-0.5">
              Sr. Product Manager · GenAI · Product Strategy · Customer Experience
            </p>
          </div>
          {/* Right — Icons + nav links, all plum */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[#7B5EA7]">
            <a
              href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:pritchardbna@gmail.com"
              className="hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <span className="hidden sm:inline text-[#7B5EA7]/60">·</span>
            <Link href="/" className="text-sm font-medium hover:opacity-80 transition-opacity">
              Home
            </Link>
            <span className="text-[#7B5EA7]/60">·</span>
            <Link href="/prototypes" className="text-sm font-medium hover:opacity-80 transition-opacity">
              Prototypes
            </Link>
            <span className="text-[#7B5EA7]/60">·</span>
            <Link href="/case-studies" className="text-sm font-medium hover:opacity-80 transition-opacity">
              Case Studies
            </Link>
            <span className="text-[#7B5EA7]/60">·</span>
            <Link href="/resume" className="text-sm font-medium hover:opacity-80 transition-opacity">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
