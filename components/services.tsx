import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tight">
            Explore Our <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent ">Services</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Connecting the best talent with the best opportunities across borders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Candidates Card */}
          <Link href="/candidates" className="group relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            <Image 
              src="/candiate.png" 
              alt="For Candidates" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="absolute bottom-0 left-0 w-full p-10 sm:p-12 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-5xl sm:text-6xl font-bold text-white leading-none tracking-tighter">For<br/>Candidates</h3>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                  <ArrowRight className="text-white w-8 h-8" />
                </div>
              </div>
              
              <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                 <p className="text-gray-200 text-lg leading-relaxed max-w-md pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  We don't just hire many—we hire right. Quality over quantity: prestigious employers meet motivated professionals.
                </p>
              </div>
            </div>
          </Link>

          {/* For Companies Card */}
          <Link href="/companies" className="group relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            <Image 
              src="/employers.png" 
              alt="For Companies" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="absolute bottom-0 left-0 w-full p-10 sm:p-12 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-5xl sm:text-6xl font-bold text-white leading-none tracking-tighter">For<br/>Companies</h3>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                  <ArrowRight className="text-white w-8 h-8" />
                </div>
              </div>
              
              <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                <p className="text-gray-200 text-lg leading-relaxed max-w-md pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Find the perfect match for your organization. We connect you with top-tier talent from the Indian automotive industry.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;