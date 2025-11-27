import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

const SERVICES = [
  {
    title: "Visa Application Support",
    image:"/visa-application-support.png", // Passport/Visa image
    isPrimary: true, // This card has the purple tint
  },
  {
    title: "Relocation Assistance",
    image:
      "/relocation-assistance.png", // Apartment/Moving
  },
  {
    title: "Language Training",
    image:
      "/language-training.png", // Books/Learning
  },
  {
    title: "Cultural Integration",
    image:
      "/cultural-integration.png", // Temple/Culture
  },
  {
    title: "Family Support",
    image:
      "/family-support.png", // Family hands
  },
  {
    title: "Post-Arrival Guidance",
    image:
      "/post-arrival-guidance.png", // Meeting/Guidance
  },
];

export default function CandidateServices() {
  return (
    <main className="min-h-screen bg-gray-100 font-instrumental-sans text-gray-900">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[200px] sm:h-[200px] lg:h-[350px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/service-new.png"
            alt="Construction workers"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>

        {/* "SERVICES" Huge Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-end z-10 pointer-events-none pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[10vw] sm:text-[10vw] md:text-[6vw] lg:text-[4vw] font-bold text-white tracking-wide leading-none select-none">
              SERVICES
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-[15px] max-w-[1600px] py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* --- Comprehensive Support Section --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col lg:flex-row">
          {/* Text Side */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-gray-500 font-bold uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
              COMPREHENSIVE SUPPORT
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-b from-[#5C4DFF] to-[#cccccc] text-transparent bg-clip-text leading-snug">
              We go beyond recruitment. Our end-to-end services ensure you are
              fully prepared for your new life in Europe.
            </h3>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative h-64 sm:h-80 lg:h-auto min-h-[300px] opacity-100">
            <Image src="/hand-bg.png" alt="" fill className="object-cover" />
          </div>
        </section>


      {/* --- 2. Additional Services Grid --- */}
      <section className="space-y-8 sm:space-y-12">
        {/* Section Title */}
        <div className="text-center">
           <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl">
            ADDITIONAL SERVICES
          </h3>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative h-48 sm:h-56 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                <h4 className="text-white text-xl sm:text-2xl font-bold leading-tight drop-shadow-md duration-300">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
      </div>
    </main>
  );
}
