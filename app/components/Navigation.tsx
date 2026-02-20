import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#2D2D2D] hover:text-[#7B5EA7] transition-colors">
            Thays Pritchard
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-[#2D2D2D] hover:text-[#7B5EA7] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/prototypes"
              className="text-sm font-medium text-[#2D2D2D] hover:text-[#7B5EA7] transition-colors"
            >
              Prototypes
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-[#2D2D2D] hover:text-[#7B5EA7] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium text-[#2D2D2D] hover:text-[#7B5EA7] transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
