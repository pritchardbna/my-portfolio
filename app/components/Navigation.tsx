"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="w-full px-8 py-4">
        <div className="flex flex-row items-center justify-between gap-6">
          {/* Left — Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-[#2D2D2D] text-base font-semibold font-inter">
              Thays Pritchard
            </Link>
          </div>
          
          {/* Right — Links and Icons */}
          <div className="flex flex-row items-center gap-6 flex-shrink-0">
            <Link
              href="/"
              className="text-[#2D2D2D] text-sm font-[500] hover:text-[#4A3068] transition-colors font-inter"
            >
              Home
            </Link>
            <Link
              href="/prototypes"
              className="text-[#2D2D2D] text-sm font-[500] hover:text-[#4A3068] transition-colors font-inter"
            >
              AI Projects
            </Link>
            <Link
              href="/resume"
              className="text-[#2D2D2D] text-sm font-[500] hover:text-[#4A3068] transition-colors font-inter"
            >
              Resume
            </Link>
            <a
              href="mailto:pritchardbna@gmail.com"
              className="text-[#2D2D2D] hover:text-[#4A3068] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D2D2D] hover:text-[#4A3068] transition-colors"
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
