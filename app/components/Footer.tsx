"use client";

import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4A3068] text-white py-8 px-4 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-playfair text-base font-bold uppercase text-white mb-4">
          WANT TO GET IN TOUCH?
        </p>
        <div className="flex justify-center items-center gap-4 mb-0">
          <a
            href="mailto:pritchardbna@gmail.com"
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-xs text-white opacity-60 mt-4">
          © 2026 Thays Pritchard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
