"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, Code, Server, Database, Shield, Cpu, Globe, ArrowRight } from "lucide-react";

export default function ITHiring() {
  return (
    <main className="min-h-screen bg-[#EAEAEA] font-instrumental-sans text-gray-900 pb-20">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-black">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 w-full h-full opacity-70">
           <Image 
            src="https://placehold.co/1920x600/1a1a1a/ffffff?text=Dark+Textured+Background" 
            alt="IT Hiring Background" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center px-6 md:px-20 mt-20 md:mt-32 max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-wide uppercase">
            IT Hiring
          </h1>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 relative z-10 space-y-20">

        {/* --- 2. INTRO CARD --- */}
        <div className="bg-white rounded-[40px] p-10 md:p-16 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <Settings className="w-16 h-16 text-[#5C4DFF]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            IT & Tech <br />
            <span className="text-[#5C4DFF] ">Recruitment</span>
          </h2>
          
          <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-10">
            Access a vast pool of pre-vetted Indian tech talent. From software developers to data scientists, we help you build world-class engineering teams.
          </p>

          <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-[#5C4DFF] text-white rounded-full font-medium hover:bg-[#4837cc] transition-all shadow-lg hover:shadow-[#5C4DFF]/30">
            Find Tech Talent <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* --- 3. EXPERTISE WE SOURCE --- */}
        <div className="space-y-10">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-black">
            Expertise We Source
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Software Development", icon: Code, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Cloud & DevOps", icon: Server, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Data & AI", icon: Database, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Cybersecurity", icon: Shield, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Embedded Systems", icon: Cpu, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Web & Mobile", icon: Globe, desc: "Expert diagnostics and repair for all vehicle types." }
            ].map((role, i) => (
              <div key={i} className="bg-[#F9F9F9] rounded-[20px] p-8 flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#E0E0FF] rounded-lg flex items-center justify-center mb-4">
                  <role.icon className="w-6 h-6 text-[#5C4DFF]" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">{role.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. THE INDIAN TECH ADVANTAGE --- */}
        <div className="bg-white rounded-[30px] overflow-hidden shadow-sm relative">
          <div className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                The Indian Tech Advantage
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
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
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-[#E0E0FF] text-[#5C4DFF] font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.id}
                  </div>
                  <p className="text-gray-600 text-xs font-medium leading-snug pt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Gradient Strip */}
          <div className="h-4 w-full bg-gradient-to-r from-[#5C4DFF] to-[#1a1a1a]"></div>
        </div>

        {/* --- 5. CTA SECTION --- */}
        <div className="relative rounded-[40px] overflow-hidden h-[350px] md:h-[450px] w-full shadow-lg">
          <Image 
            src="https://placehold.co/1600x600/1a1a1a/ffffff?text=Tech+Team+Working" 
            alt="Tech Team CTA" 
            fill 
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Scale Your Tech Team Today
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-light">
              Don't let talent shortages hold you back. Connect with top-tier developers now.
            </p>
            <Link href="/contact" className="bg-white text-[#33348D] px-10 py-3 rounded-full font-bold w-fit hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
