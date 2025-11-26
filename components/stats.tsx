import React from 'react';
import Image from 'next/image';
import { Briefcase, Handshake, UserCheck, Globe } from 'lucide-react';

const stats = [
  { icon: <Briefcase className="h-7 w-7" />, value: '30+', label: 'Years Combined Expertise' },
  { icon: <Handshake className="h-7 w-7" />, value: '60+', label: 'European Automotive Partners' },
  { icon: <UserCheck className="h-7 w-7" />, value: '1200+', label: 'Successful Placements' },
  { icon: <Globe className="h-7 w-7" />, value: '8+', label: 'Countries Across Europe Hiring' },
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80"
];

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-8">
              Numbers That Speak <br/>
              <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent pr-1 ">for Themselves</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We've helped thousands of automotive professionals build global careers — and our results reflect the trust candidates place in us.
            </p>
            
            <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm inline-block">
              <p className="text-sm text-gray-500 mb-2">Trusted by industry leaders</p>
              <div className="flex -space-x-4">
                {avatars.map((src, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image 
                      src={src} 
                      alt={`User ${i + 1}`} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#5C4DFF] border-2 border-white flex items-center justify-center text-xs font-bold text-white z-10">
                  +60
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white/80 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between h-64 shadow-sm border border-gray-100 ${index % 2 === 1 ? 'sm:translate-y-12' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAFAFA] flex items-center justify-center text-[#5C4DFF] mb-6">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-5xl font-bold bg-gradient-to-r from-[#5C4DFF] to-[#33348D] bg-clip-text text-transparent mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
