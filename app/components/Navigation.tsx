"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-[#2D2D2D] text-sm font-[500] hover:text-[#4A3068] transition-colors font-inter md:py-0 py-4"
        onClick={() => setMobileMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/prototypes"
        className="text-[#2D2D2D] text-sm font-[500] hover:text-[#4A3068] transition-colors font-inter md:py-0 py-4"
        onClick={() => setMobileMenuOpen(false)}
      >
        AI Projects
      </Link>
      <Link
        href="/resume"
        className="text-[#2D2D2D] text-sm font-[500] hover:text-[#4A3068] transition-colors font-inter md:py-0 py-4"
        onClick={() => setMobileMenuOpen(false)}
      >
        Resume
      </Link>
      <a
        href="mailto:pritchardbna@gmail.com"
        className="text-[#2D2D2D] hover:text-[#4A3068] transition-colors md:py-0 py-4"
        aria-label="Email"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Mail size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2D2D2D] hover:text-[#4A3068] transition-colors md:py-0 py-4"
        aria-label="LinkedIn"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Linkedin size={20} />
      </a>
    </>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="w-full px-4 md:px-8 py-4">
          <div className="flex flex-row items-center justify-between gap-6">
            {/* Left — Name */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-[#2D2D2D] text-base font-semibold font-inter">
                Thays Pritchard
              </Link>
            </div>

            {/* Right — Desktop: Links and Icons; Mobile: Hamburger */}
            <div className="hidden md:flex flex-row items-center gap-6 flex-shrink-0">
              {navLinks}
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex-shrink-0 p-2 text-[#2D2D2D] text-2xl leading-none hover:text-[#4A3068] transition-colors aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white transition-opacity duration-200 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-2xl text-[#2D2D2D] hover:text-[#4A3068] transition-colors aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
            <Link
              href="/"
              className="w-full text-center text-[#2D2D2D] text-lg font-[500] hover:text-[#4A3068] transition-colors font-inter py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/prototypes"
              className="w-full text-center text-[#2D2D2D] text-lg font-[500] hover:text-[#4A3068] transition-colors font-inter py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Projects
            </Link>
            <Link
              href="/resume"
              className="w-full text-center text-[#2D2D2D] text-lg font-[500] hover:text-[#4A3068] transition-colors font-inter py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
            <a
              href="mailto:pritchardbna@gmail.com"
              className="flex items-center justify-center gap-2 w-full text-[#2D2D2D] hover:text-[#4A3068] transition-colors py-4"
              aria-label="Email"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail size={24} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-[#2D2D2D] hover:text-[#4A3068] transition-colors py-4"
              aria-label="LinkedIn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Linkedin size={24} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
