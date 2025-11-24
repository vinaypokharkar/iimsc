import React from "react";
import { Eye, Handshake, Infinity as InfinityIcon } from "lucide-react";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-100 font-instrumental text-gray-900">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[250px] md:h-[350px]">
        {/* Background Image */}
        {/* REPLACE src with your actual top image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/about-bg.png"
            alt="Construction workers"
            fill
            className="object-cover object-top"
            priority
          />
          {/* subtle overlay to ensure text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>

        {/* "ABOUT US" Huge Text Overlay */}
        <div className="absolute top-10 left-0 w-full flex justify-start z-10 pointer-events-none ms-25">
          <h1 className="text-[12vw] md:text-[150px] font-bold text-white tracking-widest leading-none select-none mix-blend-overlay font-bold tracking-tight">
            ABOUT US
          </h1>
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-4 space-y-12 mt-10 relative z-20">
        {/* --- 2. INTRO CARD --- */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 text-center shadow-sm w-11/12 mx-auto">
          {/* Bridge Icon (Custom SVG to match design) */}

          <h2 className="text-2xl md:text-4xl leading-tight mb-8 font-semibold text-[20px] md:text-[55px] text-gray-900">
            <span className="italic text-gradient font-bold">
              Bridging the gap
            </span>{" "}
            <span className="font-bold text-gray-900">between Indian</span>
            <br className="hidden md:block" />
            <span className="font-bold text-gray-900">
              talent and European opportunities
            </span>
            <br className="hidden md:block" />
            <span className="font-bold text-gray-900">with </span>
            <span className="italic text-gradient font-bold">integrity</span>
            <span className="font-bold text-gray-900"> and </span>
            <span className="italic text-gradient font-bold">excellence</span>
            <span className="font-bold text-gray-900">.</span>
          </h2>

          <p className="text-gray-500 text-xl md:text-xl leading-relaxed max-w-4xl mx-auto text-2xl">
            We are dedicated to bridging the gap between Indian talent and
            European opportunities. With years of experience in the recruitment
            industry, we understand the challenges and aspirations of
            professionals looking to work abroad. We don't just find you a job;
            we help you build a life in a new country.
          </p>
        </div>

        {/* --- 3. MISSION SECTION --- */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[400px] w-11/12 mx-auto">
          {/* Text Side */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
            <span className="text-gray-500 font-semibold uppercase tracking-wider text-4xl mb-6">
              Our Mission
            </span>
            <h3 className="text-xl md:text-4xl font-bold bg-gradient-to-b from-[#5C4DFF] to-[#cccccc] text-transparent bg-clip-text leading-snug">
              To empower skilled Indian professionals by connecting them with
              reputable employers in Europe, fostering a global exchange of
              talent and culture.
            </h3>
          </div>

          {/* Image Side */}
          {/* REPLACE src with your abstract stripes image */}
          <div className="flex-1 relative h-64 md:h-auto opacity-90">
            <Image
              src="/building.png"
              alt="Mission Abstract"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* --- 4. CORE VALUES --- */}
        <div className="space-y-8 ">
          <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-4xl">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto md:px-20">
            {/* Transparency */}
            <div className="bg-white rounded-[2rem] p-10 text-center shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-2">
                <Eye size={48} strokeWidth={1.5} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#000000] to-[#666666] text-transparent bg-clip-text">
                Transparency
              </h4>
              <p className="text-[#666666] text-xl">
                Clear, honest communication at every step.
              </p>
            </div>
            {/* Ethical Recruitment */}
            <div className="bg-white rounded-[2rem] p-10 text-center shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-2">
                <Handshake size={48} strokeWidth={1.5} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#000000] to-[#666666] text-transparent bg-clip-text">
                Ethical Recruitment
              </h4>
              <p className="text-[#666666] text-xl">
                Fair, responsible hiring practices.
              </p>
            </div>

            {/* Long-Term Support */}
            <div className="bg-white rounded-[2rem] p-10 text-center shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-2">
                <InfinityIcon size={48} strokeWidth={1.5} />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#000000] to-[#666666] text-transparent bg-clip-text ">
                Long-Term Support
              </h4>
              <p className="text-[#666666] text-xl">
                Standing with candidates and employers beyond placement.
              </p>
            </div>
          </div>
        </div>
        <CTASection className="mx-5 mb-20" />
      </div>
    </main>
  );
}
