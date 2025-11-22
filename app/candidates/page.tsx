import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, UserCheck, MessageSquare, Star } from 'lucide-react';
import Stats from '@/components/stats';
import Differentiators from '@/components/differentiators';

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

export default function CandidateHome() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] mb-20">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-display font-medium text-black tracking-tight mb-6 leading-tight">
              Build Your Career <br />
              <span className="text-[#5C4DFF] italic">
                Across Borders
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl font-light mb-10">
              We connect skilled Indian professionals with top European employers. Your journey to a global career starts here.
            </p>
            <div className="flex gap-4">
              <Link href="/candidates/jobs" className="px-8 py-4 bg-[#5C4DFF] text-white rounded-full font-medium hover:bg-[#33348D] shadow-lg hover:shadow-[#5C4DFF]/30 transition-all hover:-translate-y-1">
                View Open Positions
              </Link>
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

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          <Link href="/candidates/aboutus" className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#5C4DFF]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5C4DFF] transition-colors duration-300">
              <UserCheck className="w-6 h-6 text-[#5C4DFF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">About Us</h3>
            <p className="text-gray-600 mb-4">Learn about our mission to empower Indian talent globally.</p>
            <div className="flex items-center text-[#5C4DFF] font-medium">
              Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/candidates/services" className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#33348D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#33348D] transition-colors duration-300">
              <Briefcase className="w-6 h-6 text-[#33348D] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">Additional Services</h3>
            <p className="text-gray-600 mb-4">Visa assistance, relocation support, and more.</p>
            <div className="flex items-center text-[#33348D] font-medium">
              Explore Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/candidates/testimonials" className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#1E1E1E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E1E1E] transition-colors duration-300">
              <Star className="w-6 h-6 text-[#1E1E1E] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">Success Stories</h3>
            <p className="text-gray-600 mb-4">Hear from professionals who have successfully relocated.</p>
            <div className="flex items-center text-[#1E1E1E] font-medium">
              View Testimonials <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
      
      <Stats />
      <Differentiators />
    </main>
  );
}
