import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Stats from '@/components/stats';
import Differentiators from '@/components/differentiators';
import { IconAboutUs, IconServices, IconSuccess } from '@/components/service-icons';

const flags = [
  { src: "https://flagcdn.com/at.svg", alt: "Austria" },
  { src: "https://flagcdn.com/be.svg", alt: "Belgium" },
  { src: "https://flagcdn.com/hr.svg", alt: "Croatia" },
  { src: "https://flagcdn.com/dk.svg", alt: "Denmark" },
  { src: "https://flagcdn.com/fi.svg", alt: "Finland" },
  { src: "https://flagcdn.com/de.svg", alt: "Germany" },
  { src: "https://flagcdn.com/gr.svg", alt: "Greece" },
  { src: "https://flagcdn.com/hu.svg", alt: "Hungary" },
  { src: "https://flagcdn.com/is.svg", alt: "Iceland" },
  { src: "https://flagcdn.com/lu.svg", alt: "Luxembourg" },
  { src: "https://flagcdn.com/nl.svg", alt: "Netherlands" },
  { src: "https://flagcdn.com/no.svg", alt: "Norway" },
  { src: "https://flagcdn.com/pl.svg", alt: "Poland" },
  { src: "https://flagcdn.com/sk.svg", alt: "Slovakia" },
  { src: "https://flagcdn.com/si.svg", alt: "Slovenia" },
  { src: "https://flagcdn.com/se.svg", alt: "Sweden" },
  { src: "https://flagcdn.com/ch.svg", alt: "Switzerland" },
  { src: "https://flagcdn.com/rs.svg", alt: "Serbia" },
  { src: "https://flagcdn.com/ba.svg", alt: "Bosnia and Herzegovina" },
];

export default function CandidateHome() {
  return (
    <main className="min-h-screen font-instrumental-sans ">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
            alt="Industrial Worker"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl pb-24 sm:pb-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Build Your Career <br />
              <span className="">Across Borders</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-xl font-light mb-10 leading-relaxed">
              We connect skilled Indian professionals with top European employers. Your journey to a global career starts here.
            </p>
            <Link 
              href="/candidates/jobs" 
              className="inline-flex items-center px-8 py-4 bg-white text-[#33348D] rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              View Open Positions
            </Link>
          </div>

          {/* Flag Carousel - Bottom Right */}
          <div className="absolute bottom-8 sm:bottom-12 right-0 w-full md:w-1/2 lg:w-1/3 overflow-hidden mask-gradient-x">
             <div className="flex gap-4 animate-scroll-left">
                {[...flags, ...flags, ...flags].map((flag, i) => (
                  <div key={i} className="relative w-16 h-12 md:w-20 md:h-14 shrink-0 rounded shadow-sm overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                    <Image
                      src={flag.src}
                      alt={flag.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- Navigation Cards --- */}
      <section className="py-20 mt-6 relative z-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* About Us */}
            <Link href="/candidates/aboutus" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[208px] w-full md:max-w-[429px] mx-auto border border-gray-100 relative overflow-hidden">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-3xl font-medium text-gray-800 group-hover:text-[#33348D] transition-colors duration-300 mb-1">About Us</h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Learn about our mission to empower Indian talent globally.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-end w-full mt-auto">
                  <div className="flex items-center text-gray-500 text-sm font-medium group-hover:text-[#5C4DFF] transition-colors duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <IconAboutUs className="w-16 h-16 text-gray-300 group-hover:text-[#5C4DFF] transition-colors duration-300" />
                </div>
              </div>
            </Link>

            {/* Additional Services */}
            <Link href="/candidates/services" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[208px] w-full md:max-w-[429px] mx-auto border border-gray-100 relative overflow-hidden">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-3xl font-medium text-gray-800 group-hover:text-[#33348D] transition-colors duration-300 mb-1">Additional Services</h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Visa assistance, relocation support, and more.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-end w-full mt-auto">
                  <div className="flex items-center text-gray-500 text-sm font-medium group-hover:text-[#5C4DFF] transition-colors duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <IconServices className="w-16 h-16 text-gray-300 group-hover:text-[#5C4DFF] transition-colors duration-300" />
                </div>
              </div>
            </Link>

            {/* Success Stories */}
            <Link href="/candidates/testimonials" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[208px] w-full md:max-w-[429px] mx-auto border border-gray-100 relative overflow-hidden">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-3xl font-medium text-gray-800 group-hover:text-[#33348D] transition-colors duration-300 mb-1">Success Stories</h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Hear from professionals who have successfully relocated.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-end w-full mt-auto">
                  <div className="flex items-center text-gray-500 text-sm font-medium group-hover:text-[#5C4DFF] transition-colors duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <IconSuccess className="w-16 h-16 text-gray-300 group-hover:text-[#5C4DFF] transition-colors duration-300" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
      
      <div className="">
        <Stats />
        <Differentiators />
      </div>

    </main>
  );
}
