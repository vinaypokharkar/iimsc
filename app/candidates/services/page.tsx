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
      <section className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/services-bg.png"
            alt="Construction workers"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>

        {/* "SERVICES" Huge Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-start z-10 pointer-events-none">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[150px] font-bold text-white tracking-wide leading-none select-none">
              SERVICES
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* --- Comprehensive Support Section --- */}
        <section className="bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col lg:flex-row">
          {/* Text Side */}
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm sm:text-base mb-4 sm:mb-6">
              COMPREHENSIVE SUPPORT
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#5C4DFF] to-[#cccccc] text-transparent bg-clip-text leading-snug">
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
         <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-sm sm:text-base">
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
                <h4 className="text-white text-xl sm:text-2xl font-bold leading-tight drop-shadow-md group-hover:text-[#5C4DFF] transition-colors duration-300">
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
