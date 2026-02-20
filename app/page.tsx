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
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO (full screen) */}
      <section className="min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-16 px-6 pt-6 md:pt-8 md:pb-16 md:pl-16 md:pr-0 bg-white">
        <div
          className={`flex-1 max-w-xl transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-base font-bold uppercase tracking-[0.2em] text-[#7B5EA7] mb-3 animate-fade-in">
            I am
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] leading-tight mb-8">
            a builder of products that make{" "}
            <span className="text-[#7B5EA7]">people&apos;s lives a little easier.</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/prototypes"
              className="inline-block rounded-full bg-[#7B5EA7] px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="/resume"
              className="inline-block rounded-full border-2 border-[#7B5EA7] px-8 py-3.5 font-semibold text-[#7B5EA7] transition-all duration-300 hover:bg-[#E8E0F0]"
            >
              Read My Resume
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-end relative w-full min-w-0 h-full min-h-[60vh] md:min-h-0">
          <div
            className="relative w-full h-full min-h-[60vh] md:min-h-[85vh] overflow-hidden md:min-w-[50%]"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            }}
          >
            <Image
              src="/images/thays2.jpg"
              alt="Thays Pritchard"
              fill
              className="object-cover object-[45%_50%]"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — PERSONAL QUOTE */}
      <section
        ref={quoteRef}
        className="py-12 px-6 bg-[#7B5EA7]"
      >
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-150 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[#E8E0F0]/70 text-7xl md:text-8xl font-serif leading-none block mb-2">&quot;</span>
          <p className="text-[#F5F0FA] text-lg md:text-xl italic leading-relaxed mb-4">
            I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.
          </p>
          <p className="text-[#E8E0F0]/90 text-sm font-medium">— Thays Pritchard</p>
        </div>
      </section>

      {/* SECTION 3 — WHO I AM */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#7B5EA7] text-sm font-bold uppercase tracking-widest mb-6">
            Who I Am
          </p>
          <div className="space-y-5 text-[#2D2D2D] text-lg md:text-xl leading-relaxed font-medium text-left">
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

      {/* NAVIGATION CARDS */}
      <section className="py-16 md:py-24 px-6 bg-[#7B5EA7]">
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
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-3">
                AI Prototypes
              </h3>
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
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-3">
                Case Studies
              </h3>
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
              <h3 className="text-[#7B5EA7] font-bold text-xl mb-3">
                Resume
              </h3>
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
