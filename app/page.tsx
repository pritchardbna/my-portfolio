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
              className="text-[#7B5EA7] uppercase mb-3"
              style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}
            >
              I AM
            </p>
            <h1 className="text-[#2D2D2D] font-bold leading-[1.2]" style={{ fontSize: "2.5rem" }}>
              a builder of products that make
              <br />
              <span className="text-[#7B5EA7]">people&apos;s lives a little easier.</span>
            </h1>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B5EA7] hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:pritchardbna@gmail.com"
                className="text-[#7B5EA7] hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
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

      {/* SECTION 2 — WHO I AM */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[780px] mx-auto">
          <p
            className="text-[#7B5EA7] text-xs uppercase text-center mb-6"
            style={{ letterSpacing: "0.3em" }}
          >
            WHO I AM
          </p>
          <p className="text-[#7B5EA7] text-2xl font-light italic text-center mb-10">
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
      </section>

      {/* SECTION 3 — QUOTE */}
      <section ref={quoteRef} className="py-24 px-6 bg-[#F5F5F5]">
        <div
          className={`max-w-[860px] mx-auto rounded-2xl bg-[#7B5EA7] px-16 py-14 text-center transition-all duration-700 delay-150 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white text-2xl italic leading-[1.8]">
            <span className="mr-2">&quot;</span>
            I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.
            <span className="ml-2">&quot;</span>
          </p>
          <p className="text-[#E8E0F0] text-sm mt-8">— Thays Pritchard</p>
        </div>
      </section>

      {/* SECTION 4 — NAVIGATION CARDS */}
      <section className="py-24 px-6 bg-[#7B5EA7]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-white text-xs uppercase tracking-[0.3em] mb-8">
            WHERE TO NEXT?
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/prototypes"
              className="group rounded-2xl bg-white p-8 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.3)] flex flex-col"
            >
              <svg className="w-8 h-8 text-[#7B5EA7] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-3">AI Prototypes</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.7] flex-1">
                Hands-on AI tools I&apos;ve built to show what&apos;s possible when product thinking meets GenAI — from requirement generators to claims workflow simulators.
              </p>
              <span className="text-[#7B5EA7] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="group rounded-2xl bg-white p-8 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.3)] flex flex-col"
            >
              <svg className="w-8 h-8 text-[#7B5EA7] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-3">Case Studies</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.7] flex-1">
                Deep dives into real product problems I&apos;ve solved — including $5M in cost savings, a +5pt NPS lift, and a GenAI pilot that shaped a 2026 roadmap.
              </p>
              <span className="text-[#7B5EA7] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
            <Link
              href="/resume"
              className="group rounded-2xl bg-white p-8 border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.3)] flex flex-col"
            >
              <svg className="w-8 h-8 text-[#7B5EA7] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-3">Resume</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.7] flex-1">
                9+ years of product experience across Fortune 100 clients — full lifecycle ownership from discovery through deployment.
              </p>
              <span className="text-[#7B5EA7] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          </div>
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
