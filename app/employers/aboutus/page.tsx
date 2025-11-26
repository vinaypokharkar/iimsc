"use client";

import React from "react";
import Image from "next/image";
import { Eye, Handshake, Infinity as InfinityIcon, Waypoints } from "lucide-react";

export default function EmployerAboutUs() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] font-instrumental-sans text-gray-900 pb-20">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-black">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 w-full h-full opacity-60">
           <Image 
            src="/emp-aboutus.png" 
            alt="About Us Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center px-6 md:px-20 mt-20 max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-wide uppercase">
            About Us
          </h1>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 relative z-10 space-y-12">

        {/* --- 2. INTRO CARD (Bridging the Gap) --- */}
        <div className="bg-white rounded-[40px] p-10 md:p-20 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            {/* Bridge Icon Placeholder - using Waypoints as a metaphor */}
            <Waypoints className="w-16 h-16 text-[#334155]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Bridging the Gap Between <br />
            <span className="text-[#5C4DFF] ">Talent & Opportunity</span>
          </h2>
          
          <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            We are a premier recruitment agency specializing in connecting European employers with high-quality Indian talent. Our mission is to simplify international hiring through transparency, efficiency, and excellence.
          </p>
        </div>

        {/* --- 3. MISSION SECTION --- */}
        <div className="bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[400px]">
          {/* Left Content */}
          <div className="p-10 md:p-16 flex flex-col justify-center md:w-1/2 space-y-6">
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-wider">
              Our Mission
            </h3>
            <p className="text-[#5C4DFF] text-xl md:text-2xl font-medium leading-relaxed">
              To empower businesses by providing them with the skilled workforce they need to thrive, while offering life-changing opportunities to talented professionals from India. We aim to be the most trusted partner in international recruitment.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="relative md:w-1/2 min-h-[300px] bg-black">
             <Image 
              src="https://placehold.co/800x600/000000/333333?text=Abstract+Structure" 
              alt="Mission Abstract" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* --- 4. CORE VALUES SECTION --- */}
        <div className="space-y-8">
          <h3 className="text-center text-gray-500 font-bold uppercase tracking-widest text-lg">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-white rounded-[30px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#5C4DFF]">
                <Eye className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Transparency</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clear, honest communication at every step.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-[30px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#5C4DFF]">
                <Handshake className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Ethical Recruitment</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fair, responsible hiring practices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-[30px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 text-[#5C4DFF]">
                <InfinityIcon className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Long-Term Support</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standing with candidates and employers beyond placement.
              </p>
            </div>
          </div>
        </div>

        {/* --- 5. RECRUITMENT PROCESS --- */}
        <div className="py-12 text-center space-y-16">
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
        </div>

        {/* --- 6. CTA SECTION --- */}
        <div className="relative rounded-[40px] overflow-hidden h-[400px] md:h-[500px] w-full shadow-lg">
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
        </div>

      </div>
    </main>
  );
}
