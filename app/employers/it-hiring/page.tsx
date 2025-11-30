"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, Code, Server, Database, Shield, Cpu, Globe, ArrowRight } from "lucide-react";
import EmployerCTA from "@/components/EmployerCTA";

export default function ITHiring() {
  return (
    <main className="min-h-screen bg-gray-100 font-instrumental-sans text-gray-900">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[200px] sm:h-[200px] lg:h-[350px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
           <Image 
            src="/emp-aboutus.png" 
            alt="IT Hiring Background" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>
        
        {/* "IT HIRING" Huge Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-end z-10 pointer-events-none pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[10vw] sm:text-[10vw] md:text-[6vw] lg:text-[4vw] font-bold text-white tracking-wide leading-none select-none text-left">
              IT HIRING
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-[15px] max-w-[1600px] py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">

        {/* --- 2. INTRO CARD --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <Settings className="w-12 h-12 sm:w-16 sm:h-16 text-[#5C4DFF]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8 font-bold text-gray-900">
            IT & Tech <br className="hidden sm:block" />  
            <span className="bg-gradient-to-r from-[#5C4DFF]/90  to-[#33348D]/80 bg-clip-text text-transparent pr-1">Recruitment</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-4xl mx-auto mb-10">
            Access a vast pool of pre-vetted Indian tech talent. From software developers to data scientists, we help you build world-class engineering teams.
          </p>

          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#5C4DFF] text-white rounded-full font-medium hover:bg-[#4837cc] transition-all shadow-lg hover:shadow-[#5C4DFF]/30">
            Find Tech Talent <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>

        {/* --- 3. EXPERTISE WE SOURCE --- */}
        <section className="space-y-8 sm:space-y-12">
          <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl">
            Expertise We Source
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Software Development", icon: Code, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Cloud & DevOps", icon: Server, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Data & AI", icon: Database, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Cybersecurity", icon: Shield, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Embedded Systems", icon: Cpu, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Web & Mobile", icon: Globe, desc: "Expert diagnostics and repair for all vehicle types." }
            ].map((role, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col items-start hover:shadow-lg transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#E0E0FF] rounded-2xl flex items-center justify-center mb-6 ">
                  <role.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#5C4DFF] " strokeWidth={1.5} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{role.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. THE INDIAN TECH ADVANTAGE --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm relative">
          <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Indian Tech Advantage
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                India is a global hub for technology talent. Our candidates bring a combination of strong theoretical foundations, practical experience with cutting-edge stacks, and excellent English proficiency.
              </p>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { id: 1, text: "Largest pool of STEM graduates globally" },
                { id: 2, text: "Proficiency in English and western work culture" },
                { id: 3, text: "Expertise in emerging technologies (AI, Blockchain)" },
                { id: 4, text: "Scalable remote or on-site teams" }
              ].map((item) => (
                <div key={item.id} className="flex gap-4 items-start bg-gray-50 p-4 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-[#E0E0FF] text-[#5C4DFF] font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.id}
                  </div>
                  <p className="text-gray-700 text-sm font-medium leading-snug pt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Gradient Strip */}
          <div className="h-4 w-full bg-gradient-to-r from-[#5C4DFF] to-[#1a1a1a]"></div>
        </section>

        {/* --- 5. CTA SECTION --- */}
        <EmployerCTA 
          title="Scale Your Tech Team Today"
          description="Don't let talent shortages hold you back. Connect with top-tier developers now."
          imageSrc="/emp-cta.png"
          imageAlt="Tech Team CTA"
          imageClassName="scale-110"
          priority
        />

      </div>
    </main>
  );
}
