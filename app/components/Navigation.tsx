import { Mail, Linkedin } from "lucide-react";

export default function Navigation() {
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
          
          {/* Right — Icons only */}
          <div className="flex flex-row items-center gap-4 flex-shrink-0">
            <a
              href="mailto:pritchardbna@gmail.com"
              className="text-[#7B5EA7] hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7B5EA7] hover:opacity-80 transition-opacity"
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
