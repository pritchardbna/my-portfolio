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
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 relative">
      <div className="w-full px-4 md:px-8 py-4">
        <div className="flex flex-row items-center justify-between gap-6">
          {/* Left — Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-[#4A3068] text-lg font-bold font-playfair">
              Thays Pritchard
            </Link>
          </div>

          {/* Right — Desktop: Links and Icons; Mobile: Hamburger */}
          <div className="hidden lg:flex flex-row items-center gap-6 flex-shrink-0">
            {navLinks}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="lg:hidden flex-shrink-0 p-2 text-[#4A3068] text-xl leading-none transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile compact dropdown */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full right-0 w-[180px] bg-white border border-[#E8E0F0] rounded-b-lg py-2 z-50 lg:hidden"
          style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          aria-hidden={!mobileMenuOpen}
        >
          <Link
            href="/"
            className="block py-2.5 px-5 font-inter text-sm font-medium text-[#2D2D2D] hover:bg-[#F5F5F5] hover:text-[#4A3068] transition-all duration-150 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/prototypes"
            className="block py-2.5 px-5 font-inter text-sm font-medium text-[#2D2D2D] hover:bg-[#F5F5F5] hover:text-[#4A3068] transition-all duration-150 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI Projects
          </Link>
          <Link
            href="/resume"
            className="block py-2.5 px-5 font-inter text-sm font-medium text-[#2D2D2D] hover:bg-[#F5F5F5] hover:text-[#4A3068] transition-all duration-150 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
