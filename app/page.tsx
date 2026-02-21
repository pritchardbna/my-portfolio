"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const TAGLINE_LINES = [
  "Every product I build",
  "starts with a need",
  "that evolves into",
  "meaningful solutions.",
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);

  const [typewriterLineIndex, setTypewriterLineIndex] = useState(-1);
  const [typewriterCharIndex, setTypewriterCharIndex] = useState(0);
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  const [card1Open, setCard1Open] = useState(false);
  const [card2Open, setCard2Open] = useState(false);
  const [card3Open, setCard3Open] = useState(false);
  const [card4Open, setCard4Open] = useState(false);

  useEffect(() => {
    const initialDelay = 3200;
    const charDelay = 85;
    const pauseBetween = 600;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let t = initialDelay;

    TAGLINE_LINES.forEach((line, lineIdx) => {
      timeouts.push(
        setTimeout(() => {
          setTypewriterLineIndex(lineIdx);
          setTypewriterCharIndex(0);
        }, t)
      );
      for (let c = 1; c <= line.length; c++) {
        t += charDelay;
        const charCount = c;
        timeouts.push(
          setTimeout(() => {
            setTypewriterCharIndex(charCount);
            if (
              lineIdx === TAGLINE_LINES.length - 1 &&
              charCount === line.length
            ) {
              setTypewriterComplete(true);
            }
          }, t)
        );
      }
      t += pauseBetween;
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const nodes = [heroRef, aboutRef, card1Ref, card2Ref, card3Ref, card4Ref, quoteRef, resumeRef]
      .map((r) => r.current)
      .filter(Boolean) as Element[];
    nodes.forEach((el) => observer.observe(el));
    return () => nodes.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .fade-in {
              opacity: 0;
              transform: translateY(24px);
              transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .fade-in.visible {
              opacity: 1;
              transform: translateY(0);
            }
          `,
        }}
      />

      <div className="mx-auto max-w-[1000px] px-10">
        {/* HERO */}
        <section ref={heroRef} className="fade-in">
          <div className="flex flex-col lg:flex-row items-center gap-16 py-16">
            <div className="flex-1">
              <h1 className="hero-title-fade font-playfair text-4xl font-extrabold text-[#4A3068] mb-2">
                Hey, I&apos;m Thays
              </h1>
              <h2 className="font-raleway text-base font-extrabold uppercase tracking-[0.08em] text-[#2D2D2D] mb-8">
                SENIOR PRODUCT MANAGER
              </h2>
              <div className="font-raleway">
                {TAGLINE_LINES.map((line, i) => {
                  const notStarted = typewriterLineIndex < i;
                  const isActive = typewriterLineIndex === i;
                  const text = isActive ? line.slice(0, typewriterCharIndex) : notStarted ? "" : line;
                  const showCursor = isActive && !typewriterComplete;
                  const lineClass =
                    i === 0 || i === 3
                      ? "text-xl font-bold text-[#2D2D2D] min-h-[1.6em]"
                      : "text-base font-light text-[#666666] min-h-[1.6em]";
                  return (
                    <p
                      key={i}
                      className={lineClass}
                      style={{ opacity: notStarted ? 0 : 1 }}
                    >
                      {text}
                      {showCursor && <span className="animate-pulse opacity-50">|</span>}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[340px] h-[420px] flex-shrink-0">
              <img
                src="/images/thays-headshot.jpg"
                alt="Thays Pritchard"
                className="block"
                style={{
                  width: "340px",
                  height: "420px",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E8E0F0]" />

        {/* ABOUT ME — accordion cards */}
        <section ref={aboutRef} className="fade-in py-12">
          <h2 className="font-playfair text-3xl font-bold text-[#4A3068] text-center mb-8">
            About Me
          </h2>
          <div className="max-w-[800px] mx-auto flex flex-col gap-4">
            <div
              ref={card1Ref}
              className="fade-in rounded-lg bg-white px-7 py-6 shadow-sm border border-transparent transition-all duration-200 hover:shadow-md hover:border-[#E8E0F0] hover:-translate-y-1"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setCard1Open((o) => !o)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setCard1Open((o) => !o)}
                aria-expanded={card1Open}
              >
                <h3 className="font-playfair text-lg font-bold text-[#4A3068]">Experience</h3>
                <svg
                  className={`w-5 h-5 text-[#9B89B4] transition-transform duration-200 flex-shrink-0 ${card1Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="font-inter text-sm text-[#666] leading-[1.8] mt-3">
                A goal-driven Senior Product Manager with 9+ years delivering automation solutions for Fortune 100 clients.
              </p>
              <div
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: card1Open ? "500px" : "0" }}
              >
                <p className="font-inter text-base text-[#2D2D2D] leading-[1.9] mt-2">
                  Proven track record owning the full product lifecycle — from discovery through deployment — partnering with Engineering, Data Science, Legal, and Supply Chain to bring new capabilities to market. Known for translating complex business challenges into elegant, scalable solutions that drive measurable outcomes.
                </p>
              </div>
            </div>

            <div
              ref={card2Ref}
              className="fade-in rounded-lg bg-white px-7 py-6 shadow-sm border border-transparent transition-all duration-200 hover:shadow-md hover:border-[#E8E0F0] hover:-translate-y-1"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setCard2Open((o) => !o)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setCard2Open((o) => !o)}
                aria-expanded={card2Open}
              >
                <h3 className="font-playfair text-lg font-bold text-[#4A3068]">Skillset</h3>
                <svg
                  className={`w-5 h-5 text-[#9B89B4] transition-transform duration-200 flex-shrink-0 ${card2Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="font-inter text-sm text-[#666] leading-[1.8] mt-3">
                Expert in product strategy, backlog management, sprint planning, and Agile methodologies.
              </p>
              <div
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: card2Open ? "500px" : "0" }}
              >
                <p className="font-inter text-base text-[#2D2D2D] leading-[1.9] mt-2">
                  Skilled in workflow automation using low-code platforms, AI/GenAI integration, and data-driven decision making. Proficient with Jira, Confluence, and GenAI tools including ChatGPT, Claude, VO, and Perplexity. Brings a rare combination of product thinking and operational depth — equally comfortable defining a roadmap and getting into the details that make execution work.
                </p>
              </div>
            </div>

            <div
              ref={card3Ref}
              className="fade-in rounded-lg bg-white px-7 py-6 shadow-sm border border-transparent transition-all duration-200 hover:shadow-md hover:border-[#E8E0F0] hover:-translate-y-1"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setCard3Open((o) => !o)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setCard3Open((o) => !o)}
                aria-expanded={card3Open}
              >
                <h3 className="font-playfair text-lg font-bold text-[#4A3068]">My Goals</h3>
                <svg
                  className={`w-5 h-5 text-[#9B89B4] transition-transform duration-200 flex-shrink-0 ${card3Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="font-inter text-sm text-[#666] leading-[1.8] mt-3">
                I&apos;m drawn to teams that build with purpose — where technology serves people.
              </p>
              <div
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: card3Open ? "500px" : "0" }}
              >
                <p className="font-inter text-base text-[#2D2D2D] leading-[1.9] mt-2">
                  I want to bring my background in automation, cross-functional leadership, and customer experience to a team building something that truly matters, keep pushing the boundaries of what GenAI makes possible in product management, and help the people around me grow along the way.
                </p>
              </div>
            </div>

            <div
              ref={card4Ref}
              className="fade-in rounded-lg bg-white px-7 py-6 shadow-sm border border-transparent transition-all duration-200 hover:shadow-md hover:border-[#E8E0F0] hover:-translate-y-1"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setCard4Open((o) => !o)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setCard4Open((o) => !o)}
                aria-expanded={card4Open}
              >
                <h3 className="font-playfair text-lg font-bold text-[#4A3068]">What I Do for Fun</h3>
                <svg
                  className={`w-5 h-5 text-[#9B89B4] transition-transform duration-200 flex-shrink-0 ${card4Open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="font-inter text-sm text-[#666] leading-[1.8] mt-3">
                When I step away from the screen, I trade roadmaps for mountain trails.
              </p>
              <div
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: card4Open ? "500px" : "0" }}
              >
                <p className="font-inter text-base text-[#2D2D2D] leading-[1.9] mt-2">
                  You&apos;ll find me hiking or riding motorcycles with my husband through winding roads in the mountains — always chasing the next view. Back home, I channel that same focus into decorative sewing, finding joy in the details and the craft of making something beautiful by hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E8E0F0]" />

        {/* QUOTE */}
        <section ref={quoteRef} className="fade-in py-10 text-center">
          <div className="w-10 h-0.5 bg-[#7B5EA7] mx-auto mb-6" aria-hidden />
          <p className="font-playfair text-[4rem] text-[#9B89B4] opacity-50 leading-none mb-2">&quot;</p>
          <p className="font-raleway text-lg font-normal text-[#2D2D2D] leading-[1.9] max-w-[620px] mx-auto mb-4">
            I&apos;m drawn to teams that build with purpose — where technology serves people and innovation is grounded in real human needs. I want to bring my background in automation, cross-functional leadership, and customer experience to a team building something that truly matters.
          </p>
          <p className="font-inter text-sm text-[#7B5EA7] mt-4">— Thays Pritchard</p>
          <div className="w-10 h-0.5 bg-[#7B5EA7] mx-auto mt-6" aria-hidden />
        </section>

        <div className="w-full h-px bg-[#E8E0F0]" />

        {/* CTA */}
        <section ref={resumeRef} className="fade-in py-12 text-center">
          <p className="font-playfair text-xl text-[#4A3068] mb-6">Looking for Experience?</p>
          <Link
            href="/resume"
            className="inline-block bg-[#4A3068] text-white px-10 py-4 rounded-full font-inter font-bold hover:opacity-90 transition-opacity"
          >
            View My Resume
          </Link>
        </section>
      </div>
    </div>
  );
}
