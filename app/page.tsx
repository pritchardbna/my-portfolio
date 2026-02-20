"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SOFT_PLUM = "#7B5EA7";
const LIGHT_PLUM = "#E8E0F0";
const DARK_GRAY = "#2D2D2D";

// Count-up hook for stats
function useCountUp(end: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [statsTrigger, setStatsTrigger] = useState(false);
  const quoteRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStatsTrigger(true),
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO (full screen) */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-6 py-20 md:py-0 md:px-16 bg-white">
        <div
          className={`flex-1 max-w-xl transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#7B5EA7] mb-4 animate-fade-in">
            I am
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-tight mb-8">
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
        <div className="flex-1 flex justify-center md:justify-end relative max-w-md">
          <div
            className="relative w-full aspect-[3/4] max-h-[80vh] rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 25px 50px -12px rgba(123, 94, 167, 0.2)" }}
          >
            <div
              className="absolute -inset-4 rounded-3xl bg-[#E8E0F0] -z-10"
              aria-hidden
            />
            <Image
              src="/images/thays.jpg"
              alt="Thays Pritchard"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — PERSONAL QUOTE */}
      <section
        ref={quoteRef}
        className="py-20 md:py-28 px-6 bg-[#7B5EA7]"
      >
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-150 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[#E8E0F0] text-7xl md:text-8xl font-serif leading-none block mb-4">&quot;</span>
          <p className="text-white text-xl md:text-2xl italic leading-relaxed mb-6">
            I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.
          </p>
          <p className="text-[#E8E0F0] font-semibold">— Thays Pritchard</p>
        </div>
      </section>

      {/* SECTION 3 — WHO I AM */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-4 border-[#7B5EA7]">
              <Image
                src="/images/thays.jpg"
                alt="Thays Pritchard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <p className="text-[#7B5EA7] text-sm font-semibold uppercase tracking-widest mb-6">
              Who I Am
            </p>
            <div className="space-y-5 text-[#2D2D2D] text-lg leading-relaxed">
              <p>
                I&apos;m a Senior Product Manager with 9+ years of experience building products that solve real problems for real people — from the moment a customer files a claim, to the automated systems that make that experience seamless at scale. I&apos;ve spent my career working with Fortune 100 companies like AT&T and Verizon, turning complex business challenges into elegant, human-centered solutions.
              </p>
              <p>
                I lead with curiosity, move with intention, and believe the best products are built when technology serves people — not the other way around. Whether I&apos;m piloting a GenAI initiative, aligning cross-functional teams, or mapping a customer journey end to end, I bring the same energy to everything I build: care, precision, and a deep commitment to getting it right.
              </p>
              <p>
                Away from the screen, you&apos;ll find me on a mountain — either hiking a trail or riding motorcycles with my husband through winding roads. And when I&apos;m home, I love decorative sewing. It&apos;s my way of slowing down and making something beautiful with my hands.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[#2D2D2D] border border-[#E8E0F0]">
                🏔️ Mountain Hiking
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[#2D2D2D] border border-[#E8E0F0]">
                🏍️ Motorcycle Riding
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[#2D2D2D] border border-[#E8E0F0]">
                🧵 Decorative Sewing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — QUICK STATS STRIP */}
      <section
        ref={statsRef}
        className="py-16 md:py-20 px-6 bg-[#E8E0F0]"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <StatBlock label="Years of Experience" value={9} suffix="+" trigger={statsTrigger} />
          <StatBlock label="Claims Processed Annually" value={2} suffix="M+" trigger={statsTrigger} />
          <StatBlock label="Cost Savings Delivered" value={5} suffix="M" prefix="$" trigger={statsTrigger} />
          <StatBlock label="NPS Points Lifted" value={5} suffix="+" trigger={statsTrigger} />
        </div>
      </section>

      {/* SECTION 5 — NAVIGATION CARDS */}
      <section className="py-20 md:py-28 px-6 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Link
            href="/prototypes"
            className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.25)] hover:-translate-y-1 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#2D2D2D] group-hover:text-[#7B5EA7] transition-colors mb-2">
              AI Prototypes
            </h3>
            <p className="text-[#2D2D2D]/80">Explore hands-on tools and demos.</p>
          </Link>
          <Link
            href="/case-studies"
            className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.25)] hover:-translate-y-1 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#2D2D2D] group-hover:text-[#7B5EA7] transition-colors mb-2">
              Case Studies
            </h3>
            <p className="text-[#2D2D2D]/80">Real problems, real impact.</p>
          </Link>
          <Link
            href="/resume"
            className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(123,94,167,0.25)] hover:-translate-y-1 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#2D2D2D] group-hover:text-[#7B5EA7] transition-colors mb-2">
              Resume
            </h3>
            <p className="text-[#2D2D2D]/80">Experience and accomplishments.</p>
          </Link>
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

function StatBlock({
  label,
  value,
  suffix = "",
  prefix = "",
  trigger,
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  trigger: boolean;
}) {
  const count = useCountUp(value, 1500, trigger);
  return (
    <div>
      <p className="text-3xl md:text-4xl font-bold text-[#7B5EA7] mb-1">
        {prefix}{count}{suffix}
      </p>
      <p className="text-[#2D2D2D] text-sm md:text-base">{label}</p>
    </div>
  );
}
