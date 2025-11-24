"use client";

import React from "react";
import Image from "next/image";

interface CTASectionProps {
  onContactClick?: () => void;
  className?: string; // Add className prop
}

export default function CTASection({ onContactClick, className }: CTASectionProps) {
  return (
    <section className={`my-20 ${className}`}>
      <div className="max-w-[1650px] mx-auto bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[350px] ">
        
        {/* --- Left Content --- */}
        <div className="flex-1 p-10 md:p-14 flex flex-col justify-center items-start">
          <h2 className="text-5xl md:text-[5xl] font-bold bg-gradient-to-r from-[#5C4DFF] to-[#2F3061] text-transparent bg-clip-text leading-tight mb-4">
            Ready to start your journey?
          </h2>
          
          <p className="text-gray-500 text-xl md:text-xl leading-relaxed max-w-md mb-8">
            Join thousands of professionals who have successfully relocated to Europe with our help.
          </p>

          <button 
            onClick={onContactClick}
            className="bg-gradient-to-r from-[#5C4DFF]  to-[#33348D] hover:opacity-90 transition-opacity text-white font-medium px-8 py-4 rounded-full shadow-md text-sm md:text-base"
          >
            Contact Us
          </button>
        </div>

        {/* --- Right Image --- */}
        <div className="flex-1 relative h-64 md:h-auto min-h-[300px]">
          {/* 
            Placeholder Image:
            Replace '/dotted-map.png' with your actual image path. 
            I've added 'object-right' to align the globe to the right as shown in design.
          */}
          <Image
            src="/globe2.png" // Temporary placeholder
            alt="Global Network"
            fill
            className="object-cover object-right md:object-center opacity-90 scale-110 md:scale-110"
          />
          
          {/* 
             Gradient Overlay for fading effect:
             This creates the smooth fade from the white background into the image 
             so it blends seamlessly like in your Figma design.
          */}
        </div>
        
      </div>
    </section>
  );
}