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
      {/* SECTION 1 — HERO */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row bg-white">
        {/* LEFT — Text column */}
        <div className="flex flex-col justify-center w-full md:w-[55%] bg-white px-6 md:px-10 lg:px-16 py-12 md:py-0">
          <div
            className={`transition-all duration-500 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <p className="text-[#7B5EA7] text-xs uppercase tracking-widest mb-3">
              I AM
            </p>
            <h1 className="text-[#2D2D2D] font-semibold leading-[1.25] text-2xl md:text-3xl lg:text-4xl">
              a builder of products that make
              <br />
              <span className="text-[#7B5EA7]">people&apos;s lives a little easier.</span>
            </h1>
            <div className="mt-6 flex flex-col gap-3 max-w-sm">
              <Link
                href="/prototypes"
                className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-200 py-3 px-5 flex flex-row items-center gap-3"
              >
                <svg className="w-5 h-5 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[#7B5EA7] font-semibold text-sm flex-1">AI Prototypes</span>
                <span className="text-[#7B5EA7] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
              <Link
                href="/case-studies"
                className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-200 py-3 px-5 flex flex-row items-center gap-3"
              >
                <svg className="w-5 h-5 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[#7B5EA7] font-semibold text-sm flex-1">Case Studies</span>
                <span className="text-[#7B5EA7] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
              <Link
                href="/resume"
                className="group rounded-xl bg-[#F5F5F5] hover:bg-[#E8E0F0] border-2 border-transparent hover:border-[#7B5EA7] transition-all duration-200 py-3 px-5 flex flex-row items-center gap-3"
              >
                <svg className="w-5 h-5 text-[#7B5EA7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-[#7B5EA7] font-semibold text-sm flex-1">Resume</span>
                <span className="text-[#7B5EA7] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            </div>
          </div>
        </div>
        {/* RIGHT — Photo column */}
        <div className="relative w-full md:w-[45%] h-[50vh] md:h-screen overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            }}
          >
            <Image
              src="/images/thays3.jpg"
              alt="Thays Pritchard"
              fill
              className="object-cover object-[50%_25%]"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT ME */}
      <section className="pt-8 pb-16 bg-white px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
            <p className="text-[#7B5EA7] text-xs uppercase tracking-widest mb-8">
              ABOUT ME
            </p>
            <div className="text-[#2D2D2D] text-base md:text-lg font-normal space-y-6" style={{ lineHeight: 1.9 }}>
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

      {/* SECTION 4 — QUOTE */}
      <section ref={quoteRef} className="py-24 bg-white px-6 md:px-10 lg:px-16">
        <div
          className={`text-left transition-all duration-500 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <p className="text-[#7B5EA7] font-serif leading-none opacity-30 mb-[-1.5rem]" style={{ fontSize: "7rem" }}>&#8220;</p>
          <p className="text-[#7B5EA7] text-xl md:text-2xl font-light italic leading-[1.9]">
            I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.
          </p>
          <p className="text-[#2D2D2D]/60 text-sm text-right mt-6">— Thays Pritchard</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#E8E0F0] py-8">
        <div className="px-6 md:px-10 lg:px-16 text-sm text-[#2D2D2D]/60 text-left">
          <p>© 2026 Thays Pritchard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
