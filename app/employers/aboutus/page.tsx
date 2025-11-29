"use client";

import React from "react";
import Image from "next/image";
import { Eye, Handshake, Infinity as InfinityIcon, Waypoints } from "lucide-react";

export default function EmployerAboutUs() {
  return (
    <main className="min-h-screen bg-gray-100 font-instrumental-sans text-gray-900">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[200px] sm:h-[200px] lg:h-[350px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
           <Image 
            src="/emp-aboutus.png" 
            alt="About Us Background" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>
        
        {/* "ABOUT US" Huge Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-end z-10 pointer-events-none pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[10vw] sm:text-[10vw] md:text-[6vw] lg:text-[4vw] font-bold text-white tracking-wide leading-none select-none">
              ABOUT US
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-[15px] max-w-[1600px] py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">

        {/* --- 2. INTRO CARD (Bridging the Gap) --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            {/* Bridge Icon Placeholder - using Waypoints as a metaphor */}
            <Waypoints className="w-12 h-12 sm:w-16 sm:h-16 text-[#334155]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8 font-bold text-gray-900">
            Bridging the Gap Between <br className="hidden sm:block" />
            <span className="text-[#5C4DFF] ">Talent & Opportunity</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-4xl mx-auto">
            We are a premier recruitment agency specializing in connecting European employers with high-quality Indian talent. Our mission is to simplify international hiring through transparency, efficiency, and excellence.
          </p>
        </section>

        {/* --- 3. MISSION SECTION --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col lg:flex-row">
          {/* Text Side */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-gray-500 font-bold uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
              Our Mission
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-b from-[#5C4DFF] to-[#cccccc] text-transparent bg-clip-text leading-snug">
              To empower businesses by providing them with the skilled workforce they need to thrive, while offering life-changing opportunities to talented professionals from India. We aim to be the most trusted partner in international recruitment.
            </h3>
          </div>
          
          {/* Image Side */}
          <div className="flex-1 relative h-64 sm:h-80 lg:h-auto min-h-[300px] opacity-90">
             <Image 
              src="/building.png" 
              alt="Mission Abstract" 
              fill 
              className="object-cover"
            />
          </div>
        </section>

        {/* --- 4. CORE VALUES SECTION --- */}
        <section className="space-y-8 sm:space-y-12">
          <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-sm flex flex-col items-center gap-4 hover:shadow-lg transition-all duration-300">
              <div className="text-[#5C4DFF] mb-2">
                <Eye size={48} strokeWidth={1.5} className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#000000] to-[#666666] text-transparent bg-clip-text">
                Transparency
              </h4>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                Clear, honest communication at every step.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-sm flex flex-col items-center gap-4 hover:shadow-lg transition-all duration-300">
              <div className="text-[#5C4DFF] mb-2">
                <Handshake size={48} strokeWidth={1.5} className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#000000] to-[#666666] text-transparent bg-clip-text">
                Ethical Recruitment
              </h4>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                Fair, responsible hiring practices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center shadow-sm flex flex-col items-center gap-4 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-[#5C4DFF] mb-2">
                <InfinityIcon size={48} strokeWidth={1.5} className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#000000] to-[#666666] text-transparent bg-clip-text">
                Long-Term Support
              </h4>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                Standing with candidates and employers beyond placement.
              </p>
            </div>
          </div>
        </section>

        {/* --- 5. RECRUITMENT PROCESS --- */}
        <section className="py-12 text-center space-y-16">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our Recruitment Process
            </h2>
            <p className="text-gray-500 text-sm">
              A streamlined approach to ensure you get the best talent with minimal hassle.
            </p>
          </div>

          <div className="relative">
            {/* Dotted Line (Hidden on mobile, visible on md+) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-gray-300 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { 
                  step: "01", 
                  title: "Requirement Analysis", 
                  topDesc: "We understand your specific needs and culture." 
                },
                { 
                  step: "02", 
                  title: "Sourcing & Screening", 
                  topDesc: "Complete support for documentation and travel." 
                },
                { 
                  step: "03", 
                  title: "Interview & Selection", 
                  topDesc: "Rigorous vetting of candidates from our vast pool." 
                },
                { 
                  step: "04", 
                  title: "Onboarding & Visa", 
                  topDesc: "Facilitating interviews and practial tests." 
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  {/* Top Description (visible above circle on desktop) */}
                  <p className="hidden md:block text-xs text-gray-500 mb-6 h-10 max-w-[180px]">
                    {item.topDesc}
                  </p>

                  {/* Circle Number */}
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-[#5C4DFF]">{item.step}</span>
                  </div>

                  {/* Bottom Title */}
                  <h4 className="text-lg font-bold text-[#33348D] max-w-[150px] leading-tight">
                    {item.title}
                  </h4>
                  
                  {/* Mobile Description (visible below on mobile) */}
                  <p className="md:hidden text-xs text-gray-500 mt-2 max-w-[200px]">
                    {item.topDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. CTA SECTION --- */}
        <section className="relative rounded-[40px] overflow-hidden h-[400px] md:h-[500px] w-full shadow-lg">
          <Image 
            src="https://placehold.co/1600x600/333333/ffffff?text=Professional+Looking+Up" 
            alt="CTA Background" 
            fill 
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Partner with IIMSC today and experience the difference of working with a dedicated recruitment expert.
            </p>
            <button className="bg-[#5C4DFF] text-white px-8 py-4 rounded-full font-medium w-fit hover:bg-[#4837ff] transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
