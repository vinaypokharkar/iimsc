"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, Hammer, Heart, Coffee, HardHat, Truck, Utensils, ArrowRight } from "lucide-react";

export default function SkilledWorkerHiring() {
  return (
    <main className="min-h-screen bg-gray-100 font-instrumental-sans text-gray-900">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[200px] sm:h-[200px] lg:h-[350px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
           <Image 
            src="https://placehold.co/1920x600/1a1a1a/ffffff?text=Dark+Textured+Background" 
            alt="Skilled Worker Background" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>
        
        {/* "SKILLED WORKERS" Huge Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-end z-10 pointer-events-none pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[10vw] sm:text-[10vw] md:text-[6vw] lg:text-[4vw] font-bold text-white tracking-wide leading-none select-none text-left">
              SKILLED<br />WORKERS
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
            Skilled Worker <br className="hidden sm:block" />
            <span className="text-[#5C4DFF] ">Recruitment</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-4xl mx-auto mb-10">
            Reliable, hardworking, and experienced professionals for construction, healthcare, hospitality, and manufacturing sectors.
          </p>

          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#5C4DFF] text-white rounded-full font-medium hover:bg-[#4837cc] transition-all shadow-lg hover:shadow-[#5C4DFF]/30">
            Find Tech Talent <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>

        {/* --- 3. SECTORS WE SERVE --- */}
        <section className="space-y-8 sm:space-y-12">
          <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl">
            Sectors We Serve
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Construction", icon: Hammer, desc: "Masons, carpenters, electricians, plumbers, and site supervisors." },
              { title: "Healthcare", icon: Heart, desc: "Nurses, caregivers, medical technicians, and support staff." },
              { title: "Hospitality", icon: Coffee, desc: "Chefs, housekeeping, front desk, and service personnel." },
              { title: "Manufacturing", icon: HardHat, desc: "Machine operators, assembly line workers, and quality control." },
              { title: "Logistics", icon: Truck, desc: "Warehouse staff, forklift operators, and inventory managers." },
              { title: "Food Service", icon: Utensils, desc: "Sous chefs, line cooks, bakers, and kitchen assistants." }
            ].map((role, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col items-start hover:shadow-lg transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#E0E0FF] rounded-2xl flex items-center justify-center mb-6">
                  <role.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#5C4DFF]" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{role.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. RELIABILITY SECTION --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm relative">
          <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Reliability You Can Count On
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our skilled workers are known for their dedication, discipline, and ability to deliver high-quality work. We ensure all candidates are properly vetted and certified for their respective trades.
              </p>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { id: 1, text: "Verified trade certifications and experience" },
                { id: 2, text: "Strong work ethic and reliability" },
                { id: 3, text: "Willingness to learn and adapt" },
                { id: 4, text: "Long-term commitment to employers" }
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
        <section className="relative rounded-[40px] overflow-hidden h-[400px] md:h-[500px] w-full shadow-lg">
          <Image 
            src="https://placehold.co/1600x600/1a1a1a/ffffff?text=Worker+in+Action" 
            alt="Skilled Worker CTA" 
            fill 
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Fill Your Vacancies Fast
            </h2>
            <p className="text-gray-200 text-lg mb-8 font-light">
              We have a ready pool of skilled workers waiting for the right opportunity.
            </p>
            <Link href="/contact" className="bg-white text-[#33348D] px-10 py-4 rounded-full font-bold w-fit hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
