"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SECTION 1 — HERO */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small line */}
          <p className="text-[#7B5EA7] text-sm uppercase tracking-[0.2em] mb-6">
            HEY, I&apos;M THAYS 👋
          </p>
          
          {/* Large bold heading */}
          <h1 className="text-[#2D2D2D] font-bold uppercase text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
            SENIOR PRODUCT MANAGER
          </h1>
          
          {/* Photo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-lg overflow-hidden border-2 border-[#7B5EA7]">
              <Image
                src="/images/thays2.jpg"
                alt="Thays Pritchard"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          
          {/* Quote */}
          <blockquote className="max-w-[600px] mx-auto">
            <p className="text-[#2D2D2D] text-lg md:text-xl italic leading-relaxed mb-2">
              &quot;I build products the way I care for people — with intention, with heart, and with the belief that technology should make someone&apos;s day a little easier and someone&apos;s work a little more meaningful.&quot;
            </p>
            <p className="text-[#2D2D2D] text-base">— Thays Pritchard</p>
          </blockquote>
        </div>
      </section>

      {/* SECTION 2 — ABOUT */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-[700px] mx-auto">
          {/* Label */}
          <p className="text-[#7B5EA7] text-sm uppercase tracking-[0.2em] mb-12 text-center">
            ALL ABOUT THAYS
          </p>
          
          {/* Three subsections */}
          <div className="space-y-12">
            {/* WHO I AM */}
            <div>
              <h2 className="text-[#2D2D2D] font-bold text-lg md:text-xl mb-4">
                WHO I AM
              </h2>
              <p className="text-[#2D2D2D] text-base md:text-lg leading-relaxed">
                I&apos;m a Senior Product Manager with 9+ years of experience building products that solve real problems for real people — from the moment a customer files a claim, to the automated systems that make that experience seamless at scale. I&apos;ve spent my career working with Fortune 100 companies like AT&T and Verizon, turning complex business challenges into elegant, human-centered solutions.
              </p>
            </div>
            
            {/* WHAT I DO */}
            <div>
              <h2 className="text-[#2D2D2D] font-bold text-lg md:text-xl mb-4">
                WHAT I DO
              </h2>
              <p className="text-[#2D2D2D] text-base md:text-lg leading-relaxed">
                I lead product strategy and execution for fulfillment automation and customer experience initiatives. I own the full product lifecycle — from discovery and roadmap definition through deployment — partnering with Engineering, Data Science, Legal, and Supply Chain. I bring the same care and precision to every product I build, whether I&apos;m piloting a GenAI initiative or mapping a customer journey end to end.
              </p>
            </div>
            
            {/* BEYOND WORK */}
            <div>
              <h2 className="text-[#2D2D2D] font-bold text-lg md:text-xl mb-4">
                BEYOND WORK
              </h2>
              <p className="text-[#2D2D2D] text-base md:text-lg leading-relaxed">
                Away from the screen, you&apos;ll find me on a mountain — hiking trails or riding motorcycles with my husband through winding roads — or at home doing what I love: decorative sewing, one stitch at a time.
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
