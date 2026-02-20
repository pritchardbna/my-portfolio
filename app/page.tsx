"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SECTION 1 — HERO */}
      <section className="bg-white py-16 px-6 md:px-10 lg:px-16">
        {/* "HEY, I'M THAYS" above photo */}
        <div className="text-center mb-6">
          <h1 className="text-[#4A3068] text-3xl font-bold uppercase font-playfair">
            HEY, I&apos;M THAYS
          </h1>
        </div>
        
        {/* Photo banner */}
        <div className="relative w-full h-[80vh]">
          {/* Full-width photo */}
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
          
          {/* Dark gradient overlay on left side */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)"
            }}
          />
          
          {/* Text overlay - positioned on left, vertically centered */}
          <div className="relative h-full flex items-center pl-8 md:pl-16">
            <div className="max-w-[480px]">
              {/* Large bold heading */}
              <h2 className="text-white uppercase text-4xl font-[800] leading-[1.1] font-playfair">
                SENIOR PRODUCT MANAGER
              </h2>
              {/* Tagline inside photo - three lines */}
              <div className="mt-4 font-playfair text-white not-italic" style={{ lineHeight: "1.6" }}>
                <p className="text-2xl font-[700]">
                  I am a builder of products
                </p>
                <p className="text-xl font-normal">
                  that make people&apos;s lives
                </p>
                <p className="text-2xl font-[700]">
                  a little easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT ME */}
      <section className="bg-white pt-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <h2 className="text-[#4A3068] text-4xl font-bold uppercase font-playfair text-center mb-16">
            ABOUT ME
          </h2>
          
          {/* Four subsections */}
          <div className="space-y-16">
            {/* EXPERIENCE */}
            <div className="text-center">
              <h3 className="text-[#4A3068] text-2xl font-bold uppercase font-playfair mb-6">
                EXPERIENCE
              </h3>
              <p className="text-[#2D2D2D] text-lg leading-[1.9] max-w-[850px] mx-auto font-inter">
                A goal-driven Senior Product Manager with 9+ years of experience delivering automation solutions and customer-facing products for Fortune 100 clients including AT&T and Verizon. Proven track record owning the full product lifecycle — from discovery through deployment — partnering with Engineering, Data Science, Legal, and Supply Chain to bring new capabilities to market. Known for translating complex business challenges into elegant, scalable solutions that drive measurable outcomes.
              </p>
            </div>
            
            {/* SKILLSET */}
            <div className="text-center">
              <h3 className="text-[#4A3068] text-2xl font-bold uppercase font-playfair mb-6">
                SKILLSET
              </h3>
              <p className="text-[#2D2D2D] text-lg leading-[1.9] max-w-[850px] mx-auto font-inter">
                Expert in product strategy, backlog management, sprint planning, and Agile methodologies. Skilled in workflow automation using low-code platforms, AI/GenAI integration, and data-driven decision making. Proficient with Jira, Confluence, and GenAI tools including ChatGPT, Claude, VO, and Perplexity. Brings a rare combination of product thinking and operational depth — equally comfortable defining a roadmap and getting into the details that make execution work.
              </p>
            </div>
            
            {/* GOALS */}
            <div className="text-center">
              <h3 className="text-[#4A3068] text-2xl font-bold uppercase font-playfair mb-6">
                GOALS
              </h3>
              <p className="text-[#2D2D2D] text-lg leading-[1.9] max-w-[850px] mx-auto font-inter">
                Always looking to work with teams that build with purpose — where technology serves people and innovation is grounded in real human needs. Passionate about applying GenAI to reduce manual effort, improve customer experiences, and unlock new capabilities. Committed to continuous learning and to building products that make someone&apos;s day a little easier — and someone&apos;s work a little more meaningful.
              </p>
            </div>
            
            {/* WHAT I DO FOR FUN */}
            <div className="text-center">
              <h3 className="text-[#4A3068] text-2xl font-bold uppercase font-playfair mb-6">
                WHAT I DO FOR FUN
              </h3>
              <p className="text-[#2D2D2D] text-lg leading-[1.9] max-w-[850px] mx-auto font-inter">
                When I step away from the screen, I trade roadmaps for mountain trails. You&apos;ll find me hiking or riding motorcycles with my husband through winding roads in the mountains — always chasing the next view. Back home, I channel that same focus into decorative sewing, finding joy in the details and the craft of making something beautiful by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal quote banner */}
      <section className="bg-[#9B89B4] mt-16 py-12 px-6 md:px-10 lg:px-16">
        <blockquote className="max-w-[800px] mx-auto text-center relative">
          <p className="text-white font-playfair italic leading-none opacity-40 absolute -top-4 left-0 right-0" style={{ fontSize: "8rem" }}>
            &quot;
          </p>
          <p className="text-white text-2xl italic leading-relaxed mb-2 font-playfair relative z-10 pt-8">
            &quot;I build products the way I care for people —<br />
            with intention, with heart, and with the belief<br />
            that technology should make someone&apos;s day a little<br />
            easier and someone&apos;s work a little more meaningful.&quot;
          </p>
          <p className="text-white text-base relative z-10 mt-4">— Thays Pritchard</p>
        </blockquote>
      </section>

      {/* SECTION 3 — RESUME */}
      <section className="bg-white py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="text-[#4A3068] text-2xl font-[700] uppercase mb-8 font-playfair">
            LOOKING FOR EXPERIENCE?
          </p>
          
          {/* Resume button */}
          <Link
            href="/resume"
            className="inline-block bg-[#4A3068] text-white font-bold uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity font-inter"
          >
            VIEW MY RESUME
          </Link>
        </div>
      </section>

      {/* SECTION 5 — CONTACT FOOTER */}
      <footer className="bg-[#4A3068] text-white py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="font-playfair font-[700] text-2xl uppercase mb-8">
            WANT TO GET IN TOUCH?
          </p>
          
          {/* Icon buttons */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <a
              href="mailto:pritchardbna@gmail.com"
              className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-[#E8E0F0] transition-all group"
              aria-label="Email"
            >
              <Mail size={32} className="text-white group-hover:text-[#4A3068] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-[#E8E0F0] transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} className="text-white group-hover:text-[#4A3068] transition-colors" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm opacity-90">
            © 2026 Thays Pritchard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
