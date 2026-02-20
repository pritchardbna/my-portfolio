"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sectionPadding = "px-6 md:px-16 lg:px-24";
const sectionMax = "max-w-6xl mx-auto w-full";

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
      {/* SECTION 1 — HERO */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row bg-white">
        {/* Left 55% — Text */}
        <div className={`flex flex-col justify-center w-full md:w-[55%] min-w-0 ${sectionPadding} py-12 md:py-0`}>
          <div
            className={`max-w-6xl transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-[#7B5EA7] text-xs uppercase tracking-widest mb-2">
              I AM
            </p>
            <h1 className="text-[#2D2D2D] font-semibold leading-tight" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}>
              a builder of products that make <span className="text-[#7B5EA7]">people&apos;s lives a little easier.</span>
            </h1>
            <p className="text-[#7B5EA7] text-sm font-normal whitespace-nowrap mt-3">
              Sr. Product Manager · GenAI · Product Strategy · Customer Experience
            </p>
          </div>
        </div>
        {/* Right 45% — Photo */}
        <div className="relative w-full md:w-[45%] h-[50vh] md:h-screen min-h-[50vh] md:min-h-0 flex-shrink-0 overflow-hidden">
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
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT ME (full width, no side cards) */}
      <section className="py-24 bg-white">
        <div className={`${sectionMax} ${sectionPadding}`}>
          <div className="max-w-3xl">
            <p
              className="text-[#7B5EA7] text-xs font-bold uppercase text-left mb-6"
              style={{ letterSpacing: "0.3em" }}
            >
              ABOUT ME
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
        </div>
      </section>

      {/* SECTION 3 — THREE NAV BUTTONS */}
      <section className="py-12 bg-white">
        <div className={`${sectionMax} ${sectionPadding}`}>
          <div className="max-w-3xl flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-between">
            <Link
              href="/prototypes"
              className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 py-4 px-8 flex flex-row items-center gap-3 flex-1 sm:flex-initial min-w-0"
            >
              <svg className="w-6 h-6 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-[#7B5EA7] font-bold text-base">AI Prototypes</span>
              <span className="text-[#7B5EA7] font-medium opacity-0 group-hover:opacity-100 transition-opacity ml-auto">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 py-4 px-8 flex flex-row items-center gap-3 flex-1 sm:flex-initial min-w-0"
            >
              <svg className="w-6 h-6 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[#7B5EA7] font-bold text-base">Case Studies</span>
              <span className="text-[#7B5EA7] font-medium opacity-0 group-hover:opacity-100 transition-opacity ml-auto">→</span>
            </Link>
            <Link
              href="/resume"
              className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 py-4 px-8 flex flex-row items-center gap-3 flex-1 sm:flex-initial min-w-0"
            >
              <svg className="w-6 h-6 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-[#7B5EA7] font-bold text-base">Resume</span>
              <span className="text-[#7B5EA7] font-medium opacity-0 group-hover:opacity-100 transition-opacity ml-auto">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — QUOTE */}
      <section ref={quoteRef} className={`py-24 bg-white ${sectionPadding}`}>
        <div
          className={`max-w-[600px] text-left transition-all duration-700 delay-150 ${
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

      <footer className="bg-white border-t border-[#E8E0F0] py-8">
        <div className={`${sectionMax} ${sectionPadding} text-left text-sm text-[#2D2D2D]/70`}>
          <p>© {new Date().getFullYear()} Thays Pritchard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
