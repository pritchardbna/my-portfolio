import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="w-full px-6 md:pl-16 md:pr-6">
        <div className="flex h-16 items-center justify-between">
          <span className="text-lg font-bold text-[#7B5EA7]">
            Thays Pritchard
          </span>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg font-semibold text-[#7B5EA7] hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/prototypes"
              className="text-lg font-semibold text-[#7B5EA7] hover:opacity-80 transition-opacity"
            >
              Prototypes
            </Link>
            <Link
              href="/case-studies"
              className="text-lg font-semibold text-[#7B5EA7] hover:opacity-80 transition-opacity"
            >
              Case Studies
            </Link>
            <Link
              href="/resume"
              className="text-lg font-semibold text-[#7B5EA7] hover:opacity-80 transition-opacity"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
