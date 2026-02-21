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

        {/* ABOUT ME */}
        <section ref={aboutRef} className="fade-in py-12">
          <h2 className="font-playfair text-3xl font-bold text-[#4A3068] text-center mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div ref={card1Ref} className="fade-in rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-lg font-bold text-[#4A3068] mb-3">Experience</h3>
              <p className="font-inter text-base leading-[1.8] text-[#2D2D2D]">
                A goal-driven Senior Product Manager with 9+ years of experience delivering automation solutions and customer-facing products for Fortune 100 clients including AT&T and Verizon. Proven track record owning the full product lifecycle — from discovery through deployment — partnering with Engineering, Data Science, Legal, and Supply Chain to bring new capabilities to market. Known for translating complex business challenges into elegant, scalable solutions that drive measurable outcomes.
              </p>
            </div>
            <div ref={card2Ref} className="fade-in rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-lg font-bold text-[#4A3068] mb-3">Skillset</h3>
              <p className="font-inter text-base leading-[1.8] text-[#2D2D2D]">
                Expert in product strategy, backlog management, sprint planning, and Agile methodologies. Skilled in workflow automation using low-code platforms, AI/GenAI integration, and data-driven decision making. Proficient with Jira, Confluence, and GenAI tools including ChatGPT, Claude, VO, and Perplexity. Brings a rare combination of product thinking and operational depth — equally comfortable defining a roadmap and getting into the details that make execution work.
              </p>
            </div>
            <div ref={card3Ref} className="fade-in rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-lg font-bold text-[#4A3068] mb-3">My Goals</h3>
              <p className="font-inter text-base leading-[1.8] text-[#2D2D2D]">
                I&apos;m drawn to teams that build with purpose — where technology serves people and innovation is grounded in real human needs. I want to bring my background in automation, cross-functional leadership, and customer experience to a team building something that truly matters, keep pushing the boundaries of what GenAI makes possible in product management, and help the people around me grow along the way.
              </p>
            </div>
            <div ref={card4Ref} className="fade-in rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-lg font-bold text-[#4A3068] mb-3">What I Do for Fun</h3>
              <p className="font-inter text-base leading-[1.8] text-[#2D2D2D]">
                When I step away from the screen, I trade roadmaps for mountain trails. You&apos;ll find me hiking or riding motorcycles with my husband through winding roads in the mountains — always chasing the next view. Back home, I channel that same focus into decorative sewing, finding joy in the details and the craft of making something beautiful by hand.
              </p>
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
