import React from 'react';
import { Hourglass, Link as LinkIcon, Target, Waves } from 'lucide-react';

const stats = [
  { icon: <Hourglass className="h-7 w-7" />, value: '30+', label: 'Years Combined Expertise' },
  { icon: <LinkIcon className="h-7 w-7" />, value: '60+', label: 'European Automotive Partners' },
  { icon: <Target className="h-7 w-7" />, value: '1200+', label: 'Successful Placements' },
  { icon: <Waves className="h-7 w-7" />, value: '8+', label: 'Countries Across Europe Hiring' },
];

const Stats = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-xl">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#5C4DFF]/20 bg-[#5C4DFF]/5">
              <span className="text-sm font-semibold text-[#5C4DFF] tracking-wide uppercase">Our Impact</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-8">
              Numbers That <br/>
              <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent italic">Speak</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We've helped thousands of automotive professionals build global careers. Our results reflect the trust candidates and companies place in us every single day.
            </p>
            
            <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm inline-block">
              <p className="text-sm text-gray-500 mb-2">Trusted by industry leaders</p>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                    {/* Placeholder for logos/avatars */}
                    Logo
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#5C4DFF] border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  +60
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between h-64 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${index % 2 === 1 ? 'sm:translate-y-12' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAFAFA] flex items-center justify-center text-[#5C4DFF] mb-6 group-hover:bg-[#5C4DFF] group-hover:text-white transition-colors duration-300">
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
