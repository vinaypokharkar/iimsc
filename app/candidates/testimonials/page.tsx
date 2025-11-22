import React from 'react';
import { Quote, Play } from 'lucide-react';
import Image from 'next/image';

export default function CandidateTestimonials() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-6">
              Candidate <span className="text-[#5C4DFF] italic">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Hear directly from professionals who have successfully built their careers in Europe with IIMSC.
            </p>
          </div>
          
          {/* Video Testimonials Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-black mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#5C4DFF] rounded-full"></span>
              Video Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-1">
                  {/* Placeholder for Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <p className="text-white font-bold text-lg mb-1">Success Story #{item}</p>
                    <p className="text-white/80 text-sm">Automotive Engineer • Germany</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Written Testimonials Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#33348D] rounded-full"></span>
              Written Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <Quote className="w-8 h-8 text-[#5C4DFF]/20 mb-4" />
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "The support I received from IIMSC was incredible. From the initial interview to landing in Munich, they were with me every step of the way."
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5C4DFF] to-[#33348D] flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(64 + item)}
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm">Candidate Name</p>
                      <p className="text-xs text-gray-500">Relocated to Germany</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
