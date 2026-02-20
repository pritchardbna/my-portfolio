"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SECTION 1 — HERO */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-10 lg:px-16">
        {/* "HEY, I'M THAYS 👋" above photo */}
        <div className="text-center mb-6">
          <h1 className="text-[#2D2D2D] text-5xl font-[800] uppercase font-montserrat">
            HEY, I&apos;M THAYS 👋
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
              background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
            }}
          />
          
          {/* Text overlay - positioned on left, vertically centered */}
          <div className="relative h-full flex items-center pl-8 md:pl-16">
            <div className="max-w-[480px]">
              {/* Large bold heading */}
              <h2 className="text-white uppercase text-4xl font-[800] leading-[1.1] font-montserrat">
                SENIOR PRODUCT MANAGER
              </h2>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote section below hero */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <blockquote className="max-w-[600px] mx-auto text-center">
          <p className="text-[#2D2D2D] text-lg md:text-xl italic leading-relaxed mb-2">
            &quot;I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.&quot;
          </p>
          <p className="text-[#2D2D2D] text-base">— Thays Pritchard</p>
        </blockquote>
      </section>

      {/* SECTION 2 — ALL ABOUT THAYS */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <h2 className="text-[#2D2D2D] text-5xl font-[800] uppercase font-montserrat text-center mb-16">
            ALL ABOUT THAYS
          </h2>
          
          {/* Three subsections */}
          <div className="space-y-16">
            {/* EXPERIENCE */}
            <div className="text-center">
              <h3 className="text-[#7B5EA7] text-xl font-[800] uppercase font-montserrat mb-6">
                EXPERIENCE
              </h3>
              <p className="text-[#2D2D2D] text-lg leading-[1.9] max-w-[750px] mx-auto">
                A goal-driven Senior Product Manager with 9+ years of experience delivering automation solutions and customer-facing products for Fortune 100 clients including AT&T and Verizon. Proven track record owning the full product lifecycle — from discovery through deployment — partnering with Engineering, Data Science, Legal, and Supply Chain to bring new capabilities to market. Known for translating complex business challenges into elegant, scalable solutions that drive measurable outcomes.
              </p>
            </div>
            
            {/* SKILLSET */}
            <div className="text-center">
              <h3 className="text-[#7B5EA7] text-xl font-[800] uppercase font-montserrat mb-6">
                SKILLSET
              </h3>
              <p className="text-[#2D2D2D] text-lg leading-[1.9] max-w-[750px] mx-auto">
                Expert in product strategy, backlog management, sprint planning, and Agile methodologies. Skilled in workflow automation using low-code platforms, AI/GenAI integration, and data-driven decision making. Proficient with Jira, Confluence, and GenAI tools including ChatGPT, Claude, VO, and Perplexity. Brings a rare combination of product thinking and operational depth — equally comfortable defining a roadmap and getting into the details that make execution work.
              </p>
            </div>
            
            {/* GOALS */}
            <div className="text-center">
              <h3 className="text-[#7B5EA7] text-xl font-[800] uppercase font-montserrat mb-6">
                GOALS
              </h3>
              <p className="text-[#2D2D2D] text-lg leading-[1.9] max-w-[750px] mx-auto">
                Always looking to work with teams that build with purpose — where technology serves people and innovation is grounded in real human needs. Passionate about applying GenAI to reduce manual effort, improve customer experiences, and unlock new capabilities. Committed to continuous learning and to building products that make someone&apos;s day a little easier — and someone&apos;s work a little more meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — AI PROJECTS */}
      <section className="bg-white md:bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="text-[#7B5EA7] text-sm uppercase tracking-[0.2em] mb-6">
            AI PROJECTS
          </p>
          
          {/* Placeholder text */}
          <p className="text-[#2D2D2D] text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Coming soon — hands-on AI tools built to show what&apos;s possible when product thinking meets GenAI.
          </p>
          
          {/* Link */}
          <Link
            href="/prototypes"
            className="inline-block text-[#7B5EA7] hover:opacity-80 transition-opacity font-medium"
          >
            View Projects →
          </Link>
        </div>
      </section>

      {/* SECTION 4 — RESUME */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="text-[#7B5EA7] text-sm uppercase tracking-[0.2em] mb-8">
            LOOKING FOR EXPERIENCE? 👀
          </p>
          
          {/* Download button */}
          <a
            href="/resume/Thays_Pritchard_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7B5EA7] text-white font-bold uppercase px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </section>

      {/* SECTION 5 — CONTACT FOOTER */}
      <footer className="bg-[#7B5EA7] text-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="font-bold text-lg md:text-xl mb-8">
            WANT TO GET IN TOUCH?
          </p>
          
          {/* Icon buttons */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <a
              href="mailto:pritchardbna@gmail.com"
              className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white transition-all group"
              aria-label="Email"
            >
              <Mail size={32} className="text-white group-hover:text-[#7B5EA7] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/thays-pritchard-37062bna/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} className="text-white group-hover:text-[#7B5EA7] transition-colors" />
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
