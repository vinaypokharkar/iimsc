import React from 'react';
import Image from 'next/image';
import { Users, Briefcase } from 'lucide-react';

const rolesColumn1 = [
  { image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg", label: "Car Mechanic", category: "Automotive" },
  { image: "https://images.pexels.com/photos/14908957/pexels-photo-14908957.jpeg", label: "Auto Painter", category: "Automotive" },
  { image: "https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg", label: "Welder", category: "Automotive" },
  { image: "https://images.pexels.com/photos/1325725/pexels-photo-1325725.jpeg", label: "Auto Electrician", category: "Automotive" },
  { image: "https://images.pexels.com/photos/5835591/pexels-photo-5835591.jpeg", label: "Professional Driver", category: "Transport" },
];

const rolesColumn2 = [
  { image: "https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg", label: "Industrial Welder", category: "Industrial" },
  { image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg", label: "Pipe Fitter", category: "Industrial" },
  { image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg", label: "Electrician", category: "Industrial" },
  { image: "https://images.pexels.com/photos/6098057/pexels-photo-6098057.jpeg", label: "Nurse / Caregiver", category: "Healthcare" },
  { image: "https://images.pexels.com/photos/3769980/pexels-photo-3769980.jpeg", label: "Hotel Staff", category: "Hospitality" },
  
];

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-20">
          {/* Left Content */}
          <div className="space-y-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-[#5C4DFF]/20 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-[#5C4DFF] to-[#33348D] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800 tracking-wide">
                Connecting India & Europe
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-black leading-[1.05] tracking-tight">
              Talent{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent italic pr-2">
                  Beyond
                </span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#5C4DFF] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>{' '}
              <br className="hidden lg:block" />
              Borders
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              From a nation of 1.45 billion, we represent India's powerhouse of skilled talent. From <span className="font-semibold text-[#5C4DFF]">Automotive</span> to <span className="font-semibold text-[#33348D]">Healthcare</span>, <span className="font-semibold text-[#1E1E1E]">Construction</span> to <span className="font-semibold text-gray-700">Hospitality</span> we are ready to drive Europe's industry into the future.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
               <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <div className="p-2 bg-[#5C4DFF]/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-[#5C4DFF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">Industries</p>
                    <p className="text-lg font-bold text-black">12+</p>
                  </div>
               </div>
               <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <div className="p-2 bg-[#33348D]/10 rounded-lg">
                    <Users className="w-5 h-5 text-[#33348D]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">Active Pool</p>
                    <p className="text-lg font-bold text-black">29M+</p>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Right Content - Infinite Scroll Cards */}
          <div className="relative h-[600px] w-full flex gap-6 overflow-hidden mask-gradient-y">
            {/* Column 1 - Scrolling Up */}
            <div className="flex-1 relative">
               <div className="animate-scroll-up flex flex-col gap-4 absolute top-0 left-0 w-full">
                  {[...rolesColumn1, ...rolesColumn1, ...rolesColumn1].map((role, i) => (
                    <div key={i} className="relative h-48 w-full rounded-2xl overflow-hidden">
                       <Image 
                           src={role.image} 
                           alt={role.label}
                           fill
                           className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                       
                       <div className="absolute bottom-0 left-0 w-full p-5">
                          <p className="font-bold text-white text-xl tracking-wide leading-none">{role.label}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Column 2 - Scrolling Down */}
            <div className="flex-1 relative mt-12">
               <div className="animate-scroll-down flex flex-col gap-4 absolute -top-[100%] left-0 w-full">
                  {[...rolesColumn2, ...rolesColumn2, ...rolesColumn2].map((role, i) => (
                    <div key={i} className="relative h-48 w-full rounded-2xl overflow-hidden">
                       <Image 
                           src={role.image} 
                           alt={role.label}
                           fill
                           className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                       
                       <div className="absolute bottom-0 left-0 w-full p-5">
                          <p className="font-bold text-white text-xl tracking-wide leading-none">{role.label}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
