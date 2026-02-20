"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex flex-row items-center justify-between gap-6 py-4 min-h-[4rem]">
          {/* Left — Name */}
          <div className="flex-shrink-0">
            <p className="text-[#2D2D2D] text-base font-semibold">
              Thays Pritchard
            </p>
          </div>
          
          {/* Right — Links and Icons */}
          <div className="flex flex-row items-center gap-6 flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-[#2D2D2D] text-sm font-medium hover:text-[#7B5EA7] transition-colors"
            >
              Home
            </button>
            <Link
              href="/prototypes"
              className="text-[#2D2D2D] text-sm font-medium hover:text-[#7B5EA7] transition-colors"
            >
              AI Projects
            </Link>
            <a
              href="mailto:pritchardbna@gmail.com"
              className="text-[#2D2D2D] hover:text-[#7B5EA7] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D2D2D] hover:text-[#7B5EA7] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
