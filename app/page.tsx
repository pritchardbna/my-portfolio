"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);

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

      {/* SECTION 1 — HERO */}
      <section ref={heroRef} className="fade-in bg-white py-16 px-6 md:px-10 lg:px-16">
        <div className="text-center mb-6">
          <h1 className="text-[#4A3068] text-3xl font-bold font-playfair">
            Hey, I&apos;m Thays
          </h1>
        </div>

        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/thays2.jpg"
              alt="Thays Pritchard"
              fill
              className="object-cover"
              style={{ objectPosition: "center 60%" }}
              priority
            />
          </div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)",
            }}
          />
          <div className="relative h-full flex items-center pl-8 md:pl-16">
            <div className="max-w-[480px]">
              <h2 className="text-white uppercase text-4xl font-[800] leading-[1.1] font-raleway">
                SENIOR PRODUCT MANAGER
              </h2>
              <div className="mt-4 font-raleway text-white not-italic" style={{ lineHeight: "1.6" }}>
                <p className="text-2xl font-[700]">I am a builder of products</p>
                <p className="text-xl font-[300]">that make people&apos;s lives</p>
                <p className="text-2xl font-[700]">a little easier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT ME */}
      <section ref={aboutRef} className="fade-in bg-[#F5F5F5] pt-16 pb-8 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[#4A3068] text-3xl font-bold font-playfair text-center mb-12">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div ref={card1Ref} className="fade-in rounded-lg bg-white p-8 shadow-md">
              <h3 className="text-[#4A3068] text-xl font-bold font-playfair mb-4">Experience</h3>
              <p className="text-[#2D2D2D] text-base leading-[1.8] font-inter">
                A goal-driven Senior Product Manager with 9+ years of experience delivering automation solutions and customer-facing products for Fortune 100 clients including AT&T and Verizon. Proven track record owning the full product lifecycle — from discovery through deployment — partnering with Engineering, Data Science, Legal, and Supply Chain to bring new capabilities to market. Known for translating complex business challenges into elegant, scalable solutions that drive measurable outcomes.
              </p>
            </div>

            <div ref={card2Ref} className="fade-in rounded-lg bg-white p-8 shadow-md">
              <h3 className="text-[#4A3068] text-xl font-bold font-playfair mb-4">Skillset</h3>
              <p className="text-[#2D2D2D] text-base leading-[1.8] font-inter">
                Expert in product strategy, backlog management, sprint planning, and Agile methodologies. Skilled in workflow automation using low-code platforms, AI/GenAI integration, and data-driven decision making. Proficient with Jira, Confluence, and GenAI tools including ChatGPT, Claude, VO, and Perplexity. Brings a rare combination of product thinking and operational depth — equally comfortable defining a roadmap and getting into the details that make execution work.
              </p>
            </div>

            <div ref={card3Ref} className="fade-in rounded-lg bg-white p-8 shadow-md">
              <h3 className="text-[#4A3068] text-xl font-bold font-playfair mb-4">My Goals</h3>
              <p className="text-[#2D2D2D] text-base leading-[1.8] font-inter">
                Always looking to work with teams that build with purpose — where technology serves people and innovation is grounded in real human needs. Passionate about applying GenAI to reduce manual effort, improve customer experiences, and unlock new capabilities. Committed to continuous learning and to building products that make someone&apos;s day a little easier — and someone&apos;s work a little more meaningful.
              </p>
            </div>

            <div ref={card4Ref} className="fade-in rounded-lg bg-white p-8 shadow-md">
              <h3 className="text-[#4A3068] text-xl font-bold font-playfair mb-4">What I Do for Fun</h3>
              <p className="text-[#2D2D2D] text-base leading-[1.8] font-inter">
                When I step away from the screen, I trade roadmaps for mountain trails. You&apos;ll find me hiking or riding motorcycles with my husband through winding roads in the mountains — always chasing the next view. Back home, I channel that same focus into decorative sewing, finding joy in the details and the craft of making something beautiful by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal quote */}
      <section ref={quoteRef} className="fade-in bg-[#F5F5F5] py-10 px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="w-10 h-0.5 bg-[#7B5EA7] rounded-full" aria-hidden />
          <p className="text-[#9B89B4] font-playfair text-center opacity-40 mt-8" style={{ fontSize: "5rem", lineHeight: 1 }}>
            &quot;
          </p>
          <blockquote className="max-w-[700px] mx-auto text-center mt-0">
            <p className="text-[#2D2D2D] text-xl font-normal font-playfair leading-[1.9]">
              I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.
            </p>
            <p className="font-inter text-sm text-[#7B5EA7] mt-4">— Thays Pritchard</p>
          </blockquote>
          <div className="w-10 h-0.5 bg-[#7B5EA7] rounded-full mt-8" aria-hidden />
        </div>
      </section>

      {/* SECTION 3 — RESUME */}
      <section ref={resumeRef} className="fade-in bg-[#F5F5F5] py-16 px-6 md:px-10 lg:px-16">
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
  );
}
