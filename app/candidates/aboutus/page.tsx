import React from "react";
import { Eye, Handshake, Infinity as InfinityIcon } from "lucide-react";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-100 font-instrumental-sans text-gray-900">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[200px] sm:h-[200px] lg:h-[350px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/about-new.png"
            alt="Construction workers"
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
        {/* --- 2. INTRO CARD --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center shadow-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8 font-bold text-gray-900">
            <span className="text-gradient">
              Bridging the gap
            </span>{" "}
            <span>between Indian</span>
            <br className="hidden sm:block" />
            <span>
              talent and European opportunities
            </span>
            <br className="hidden sm:block" />
            <span>with </span>
            <span className="text-gradient">integrity</span>
            <span> and </span>
            <span className="text-gradient">excellence</span>
            <span>.</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-4xl mx-auto">
            We are dedicated to bridging the gap between Indian talent and
            European opportunities. With years of experience in the recruitment
            industry, we understand the challenges and aspirations of
            professionals looking to work abroad. We don't just find you a job;
            we help you build a life in a new country.
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
              To empower skilled Indian professionals by connecting them with
              reputable employers in Europe, fostering a global exchange of
              talent and culture.
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

        {/* --- 4. CORE VALUES --- */}
        <section className="space-y-8 sm:space-y-12">
          <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Transparency */}
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
            {/* Ethical Recruitment */}
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

            {/* Long-Term Support */}
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
        
        <CTASection />
      </div>
    </main>
  );
}
