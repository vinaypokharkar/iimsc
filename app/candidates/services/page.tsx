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
    <main className="min-h-screen bg-gray-100 font-instrumental text-gray-900">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[250px] md:h-[350px]">
        {/* Background Image */}
        {/* REPLACE src with your actual top image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/services-bg.png"
            alt="Construction workers"
            fill
            className="object-cover object-top"
            priority
          />
          {/* subtle overlay to ensure text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>

        {/* "SERVICES" Huge Text Overlay */}
        <div className="absolute top-10 left-0 w-full flex justify-start z-10 pointer-events-none ms-25">
          <h1 className="text-[12vw] md:text-[150px] font-bold text-white tracking-widest leading-none select-none mix-blend-overlay font-bold tracking-tight">
            SERVICES
          </h1>
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-4 space-y-12 mt-10 relative z-20">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[400px] w-11/12 mx-auto">
          {/* Text Side */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
            <span className="text-gray-500 font-semibold uppercase tracking-wider text-4xl mb-6">
              COMPREHENSIVE SUPPORT
            </span>
            <h3 className="text-xl md:text-4xl font-bold bg-gradient-to-b from-[#5C4DFF] to-[#cccccc] text-transparent bg-clip-text leading-snug">
              We go beyond recruitment. Our end-to-end services ensure you are
              fully prepared for your new life in Europe.
            </h3>
          </div>

          {/* Image Side */}
          {/* REPLACE src with your abstract stripes image */}
          <div className="flex-1 relative h-64 md:h-auto opacity-100">
            <Image src="/hand-bg.png" alt="" fill className="object-cover" />
          </div>
        </div>


      {/* --- 2. Additional Services Grid --- */}
      <div>
        {/* Section Title */}
        <div className="space-y-4 text-center mb-8">
         <h3 className="text-center text-gray-500 font-bold uppercase tracking-wider text-4xl space-y-8 mb-6 mt-12">
            ADDITIONAL SERVICES
          </h3>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1650px] mx-auto px-4">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative h-36 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlays */}
             

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full ">
                <h4 className="text-white text-3xl font-bold leading-tight drop-shadow-md">
                  {service.title.split(" ").slice(0, -1).join(" ")} <br />
                  {service.title.split(" ").slice(-1)}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
      </div>
    </main>
  );
}
