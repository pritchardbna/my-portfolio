"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const quoteRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setQuoteVisible(true),
      { threshold: 0.2 }
    );
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SECTION 1 — HERO (full viewport height) */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row bg-white">
        {/* Left 45% — Text (on mobile appears below photo) */}
        <div className="flex flex-col justify-center w-full md:w-[45%] px-6 md:px-8 lg:px-16 py-12 md:py-0">
          <div
            className={`transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p
              className="text-[#7B5EA7] font-bold uppercase mb-3"
              style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}
            >
              I AM
            </p>
            <h1 className="text-[#2D2D2D] font-bold leading-[1.2]" style={{ fontSize: "2.5rem" }}>
              a builder of products that make
              <br />
              <span className="text-[#7B5EA7]">people&apos;s lives a little easier.</span>
            </h1>
          </div>
        </div>
        {/* Right 55% — Photo (on mobile on top at 50vh) */}
        <div className="relative w-full md:w-[55%] h-[50vh] md:h-screen min-h-[50vh] md:min-h-0 flex-shrink-0 overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            }}
          >
            <Image
              src="/images/thays2.jpg"
              alt="Thays Pritchard"
              fill
              className="object-cover object-[60%_30%]"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT ME (left) + NAV CARDS (right) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-0 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — About Me, left-aligned */}
          <div className="flex-1 min-w-0">
            <p
              className="text-[#7B5EA7] text-xs font-bold uppercase text-left mb-6"
              style={{ letterSpacing: "0.3em" }}
            >
              ABOUT ME
            </p>
            <p className="text-[#7B5EA7] text-2xl font-bold italic text-left mb-10">
              A product manager who builds with intention.
            </p>
            <div className="text-[#2D2D2D] text-lg font-normal text-left space-y-8" style={{ lineHeight: 2 }}>
              <p>
                I&apos;m a Senior Product Manager with 9+ years of experience building products that solve real problems for real people — from the moment a customer files a claim, to the automated systems that make that experience seamless at scale. I&apos;ve spent my career working with Fortune 100 companies like AT&T and Verizon, turning complex business challenges into elegant, human-centered solutions.
              </p>
              <p>
                I lead with curiosity, move with intention, and believe the best products are built when technology serves people — not the other way around. Whether I&apos;m piloting a GenAI initiative, aligning cross-functional teams, or mapping a customer journey end to end, I bring the same energy to everything I build: care, precision, and a deep commitment to getting it right.
              </p>
              <p>
                Away from the screen, you&apos;ll find me on a mountain — hiking trails or riding motorcycles with my husband through winding roads — or at home doing what I love: decorative sewing, one stitch at a time.
              </p>
            </div>
          </div>
          {/* Right — Nav cards: compact, icon + title only, light lavender on hover, arrow on hover */}
          <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-3">
            <Link
              href="/prototypes"
              className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] p-3 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 flex flex-row items-center gap-3"
            >
              <svg className="w-6 h-6 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-base flex-1">AI Prototypes</h3>
              <span className="text-[#7B5EA7] font-medium opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] p-3 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 flex flex-row items-center gap-3"
            >
              <svg className="w-6 h-6 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-base flex-1">Case Studies</h3>
              <span className="text-[#7B5EA7] font-medium opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
            <Link
              href="/resume"
              className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] p-3 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 flex flex-row items-center gap-3"
            >
              <svg className="w-6 h-6 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-base flex-1">Resume</h3>
              <span className="text-[#7B5EA7] font-medium opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — QUOTE (bottom) — narrower max-width so 2–3 lines when expanded, more lines when smaller */}
      <section ref={quoteRef} className="py-24 px-6 md:px-8 lg:px-16 bg-white">
        <div
          className={`max-w-[600px] ml-0 md:ml-8 lg:ml-16 text-left transition-all duration-700 delay-150 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[#7B5EA7] font-serif leading-none opacity-40 mb-[-2rem]" style={{ fontSize: "8rem" }}>&quot;</p>
          <p className="text-[#7B5EA7] text-3xl font-light italic leading-[1.8]">
            I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.
          </p>
          <p className="text-[#2D2D2D]/70 text-sm mt-8 text-right">— Thays Pritchard</p>
        </div>
      </section>

      <footer className="bg-white border-t border-[#E8E0F0] px-6 py-8">
        <div className="max-w-6xl mx-auto px-0 md:px-8 lg:px-16 text-left text-sm text-[#2D2D2D]/70">
          <p>© {new Date().getFullYear()} Thays Pritchard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
