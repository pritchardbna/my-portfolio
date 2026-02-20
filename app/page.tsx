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
        <div className="flex flex-col justify-center w-full md:w-[45%] px-6 md:pl-16 md:pr-12 py-12 md:py-0">
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
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
          {/* Right — Nav cards under the image area, descriptions on hover only */}
          <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-6">
            <Link
              href="/prototypes"
              className="group rounded-2xl bg-[#F5F5F5] hover:bg-white p-6 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.3)] flex flex-col"
            >
              <svg className="w-8 h-8 text-[#7B5EA7] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-2">AI Prototypes</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.7] opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-300">
                Hands-on AI tools I&apos;ve built to show what&apos;s possible when product thinking meets GenAI — from requirement generators to claims workflow simulators.
              </p>
              <span className="text-[#7B5EA7] font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="group rounded-2xl bg-[#F5F5F5] hover:bg-white p-6 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.3)] flex flex-col"
            >
              <svg className="w-8 h-8 text-[#7B5EA7] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-2">Case Studies</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.7] opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-300">
                Deep dives into real product problems I&apos;ve solved — including $5M in cost savings, a +5pt NPS lift, and a GenAI pilot that shaped a 2026 roadmap.
              </p>
              <span className="text-[#7B5EA7] font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
            <Link
              href="/resume"
              className="group rounded-2xl bg-[#F5F5F5] hover:bg-white p-6 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.3)] flex flex-col"
            >
              <svg className="w-8 h-8 text-[#7B5EA7] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-2">Resume</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.7] opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[200px] overflow-hidden transition-all duration-300">
                9+ years of product experience across Fortune 100 clients — full lifecycle ownership from discovery through deployment.
              </p>
              <span className="text-[#7B5EA7] font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — QUOTE (bottom) */}
      <section ref={quoteRef} className="py-24 px-6 bg-white">
        <div
          className={`max-w-[760px] mx-auto text-left transition-all duration-700 delay-150 ${
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
        <div className="max-w-4xl mx-auto text-center text-sm text-[#2D2D2D]/70">
          <p>© {new Date().getFullYear()} Thays Pritchard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
