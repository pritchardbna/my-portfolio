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
    <div className="min-h-screen bg-[#F5F5F5] font-sans font-inter">
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

      <div className="mx-auto max-w-[900px] px-4 md:px-6">
      {/* SECTION 1 — HERO — two columns: text left, image right */}
      <section ref={heroRef} className="fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
          {/* Left — 60% — text */}
          <div className="lg:w-[60%] flex flex-col justify-center">
            <h1 className="hero-title-fade font-playfair text-4xl font-extrabold text-[#4A3068] mb-4">
              Hey, I&apos;m Thays
            </h1>
            <h2 className="font-raleway text-2xl font-extrabold uppercase text-[#2D2D2D] mb-8">
              SENIOR PRODUCT MANAGER
            </h2>
            <div className="font-raleway text-[#2D2D2D] not-italic" style={{ lineHeight: "1.6" }}>
              {TAGLINE_LINES.map((line, i) => {
                const notStarted = typewriterLineIndex < i;
                const isActive = typewriterLineIndex === i;
                const text = isActive ? line.slice(0, typewriterCharIndex) : notStarted ? "" : line;
                const showCursor = isActive && !typewriterComplete;
                const lineClass =
                  i === 0 || i === 3
                    ? "text-xl font-bold min-h-[1.6em]"
                    : "text-lg font-light min-h-[1.6em]";
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

          {/* Right — 40% — image */}
          <div className="lg:w-[40%] flex items-center justify-center">
            <img
              src="/images/thays-headshot.jpg"
              alt="Thays Pritchard"
              className="mx-auto block w-[200px] h-[240px] lg:w-full lg:max-w-[320px] lg:h-[380px]"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "12px",
                WebkitMaskImage: "radial-gradient(ellipse 88% 92% at 50% 48%, black 55%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 88% 92% at 50% 48%, black 55%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT ME */}
      <section ref={aboutRef} className="fade-in bg-[#F5F5F5] pt-10 pb-8 px-0">
        <div className="w-full">
          <h2 className="text-[#4A3068] text-3xl font-bold font-playfair text-center mb-12">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            <div ref={card1Ref} className="fade-in rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-[#4A3068] text-base font-bold font-playfair mb-4">Experience</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.8] font-inter">
                A goal-driven Senior Product Manager with 9+ years of experience delivering automation solutions and customer-facing products for Fortune 100 clients including AT&T and Verizon. Proven track record owning the full product lifecycle — from discovery through deployment — partnering with Engineering, Data Science, Legal, and Supply Chain to bring new capabilities to market. Known for translating complex business challenges into elegant, scalable solutions that drive measurable outcomes.
              </p>
            </div>

            <div ref={card2Ref} className="fade-in rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-[#4A3068] text-base font-bold font-playfair mb-4">Skillset</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.8] font-inter">
                Expert in product strategy, backlog management, sprint planning, and Agile methodologies. Skilled in workflow automation using low-code platforms, AI/GenAI integration, and data-driven decision making. Proficient with Jira, Confluence, and GenAI tools including ChatGPT, Claude, VO, and Perplexity. Brings a rare combination of product thinking and operational depth — equally comfortable defining a roadmap and getting into the details that make execution work.
              </p>
            </div>

            <div ref={card3Ref} className="fade-in rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-[#4A3068] text-base font-bold font-playfair mb-4">My Goals</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.8] font-inter">
                I&apos;m drawn to teams that build with purpose — where technology serves people and innovation is grounded in real human needs. I want to bring my background in automation, cross-functional leadership, and customer experience to a team building something that truly matters, keep pushing the boundaries of what GenAI makes possible in product management, and help the people around me grow along the way.
              </p>
            </div>

            <div ref={card4Ref} className="fade-in rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-[#4A3068] text-base font-bold font-playfair mb-4">What I Do for Fun</h3>
              <p className="text-[#2D2D2D] text-sm leading-[1.8] font-inter">
                When I step away from the screen, I trade roadmaps for mountain trails. You&apos;ll find me hiking or riding motorcycles with my husband through winding roads in the mountains — always chasing the next view. Back home, I channel that same focus into decorative sewing, finding joy in the details and the craft of making something beautiful by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal quote */}
      <section ref={quoteRef} className="fade-in bg-[#F5F5F5] py-10 px-0">
        <div className="flex flex-col items-center">
          <div className="w-10 h-0.5 bg-[#7B5EA7] rounded-full" aria-hidden />
          <p className="text-[#9B89B4] font-playfair text-center opacity-40 mt-8" style={{ fontSize: "5rem", lineHeight: 1 }}>
            &quot;
          </p>
          <blockquote className="max-w-[700px] mx-auto text-center mt-0">
            <p className="text-[#2D2D2D] text-xl font-normal font-playfair leading-[1.9]">
              I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and the work of the people it serves more meaningful.
            </p>
            <p className="font-inter text-sm text-[#7B5EA7] mt-4">— Thays Pritchard</p>
          </blockquote>
          <div className="w-10 h-0.5 bg-[#7B5EA7] rounded-full mt-8" aria-hidden />
        </div>
      </section>

      {/* SECTION 3 — RESUME */}
      <section ref={resumeRef} className="fade-in bg-[#F5F5F5] py-16 px-0">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#4A3068] text-xl font-bold mb-8 font-playfair">
            Looking for Experience?
          </p>
          <Link
            href="/resume"
            className="inline-block bg-[#4A3068] text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity font-inter"
          >
            View My Resume
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}
