'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [hovered, setHovered] = useState<'candidate' | 'employer' | null>(null);

  return (
    <main className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col items-center justify-center font-instrumental-sans">
      
      {/* Ambient Background Glows - Lighter for Light Theme */}
      <div className="absolute top-[-20%] left-0 w-[800px] h-[800px] bg-[#5C4DFF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-0 w-[800px] h-[800px] bg-[#33348D]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 h-[85vh] flex flex-col md:flex-row gap-6 items-center justify-center relative z-10">
        
        {/* Candidate Card */}
        <Link 
          href="/candidates"
          className="group relative flex-1 w-full h-full max-h-[650px] rounded-[2rem] overflow-hidden transition-all duration-700 ease-out hover:flex-[1.3] border border-gray-200 hover:border-[#5C4DFF]/30 shadow-sm hover:shadow-2xl"
          onMouseEnter={() => setHovered('candidate')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/candidates.png" 
              alt="Candidates" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </div>

          {/* Overlay - Default Light, Hover Brand Color */}
          <div className="absolute inset-0 bg-white/90 transition-colors duration-700 mix-blend-normal group-hover:mix-blend-multiply" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-12 text-center z-20">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#33348D] transition-all duration-500 text-gray-900 border border-gray-200 group-hover:border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-medium text-gray-900 group-hover:text-white mb-4 tracking-tight transition-colors duration-500">
              Candidates
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-xs transform translate-y-4 transition-all duration-500 group-hover:text-white/90">
              Find your dream career in Europe.
            </p>
            
            <div className="mt-8 px-6 py-2 rounded-full border border-gray-300 text-gray-900 text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-[#33348D] group-hover:border-white">
              Explore Jobs
            </div>
          </div>
        </Link>

        {/* Employer Card */}
        <Link 
          href="/employers"
          className="group relative flex-1 w-full h-full max-h-[650px] rounded-[2rem] overflow-hidden transition-all duration-700 ease-out hover:flex-[1.3] border border-gray-200 hover:border-[#33348D]/30 shadow-sm hover:shadow-2xl"
          onMouseEnter={() => setHovered('employer')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/employers.png" 
              alt="Employers" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </div>

          {/* Overlay - Default Light, Hover Brand Color */}
          <div className="absolute inset-0 bg-white/90 transition-colors duration-700 mix-blend-normal group-hover:mix-blend-multiply" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-12 text-center z-20">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#33348D] transition-all duration-500 text-gray-900 border border-gray-200 group-hover:border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-medium text-gray-900 group-hover:text-white mb-4 tracking-tight transition-colors duration-500">
              Employers
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-xs transform translate-y-4 transition-all duration-500 group-hover:text-white/90">
              Hire top-tier global talent.
            </p>
            
            <div className="mt-8 px-6 py-2 rounded-full border border-gray-300 text-gray-900 text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white group-hover:text-[#33348D] group-hover:border-white">
              Find Talent
            </div>
          </div>
        </Link>

      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-8 text-gray-400 text-xs font-medium tracking-[0.2em] uppercase">
        IIMSC • Talent Beyond Borders
      </div>
    </main>
  );
}