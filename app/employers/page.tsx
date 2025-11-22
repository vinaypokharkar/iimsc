import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, ShieldCheck, Globe, Settings, Briefcase, CheckCircle } from 'lucide-react';
import Stats from '@/components/stats';
import Differentiators from '@/components/differentiators';

export default function EmployerHome() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-[#33348D]/20 shadow-sm mb-8">
            <div className="w-2 h-2 bg-[#33348D] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-800 tracking-wide">
              Trusted by 50+ European Companies
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-black tracking-tight mb-6 leading-tight">
            Hire Top Talent <br />
            <span className="text-[#33348D] italic">
              From India
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light mb-10">
            We provide end-to-end recruitment solutions for European companies seeking skilled professionals. From sourcing to visa processing, we handle it all.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#33348D] text-white rounded-full font-medium hover:bg-[#2a2b7a] shadow-lg hover:shadow-[#33348D]/30 transition-all hover:-translate-y-1">
              Partner With Us
            </Link>
            <Link href="/employers/aboutus" className="px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-all hover:shadow-md">
              Learn More
            </Link>
          </div>
        </div>

        {/* Hiring Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <Link href="/employers/automotive-hiring" className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#5C4DFF]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5C4DFF] transition-colors duration-300">
              <Settings className="w-6 h-6 text-[#5C4DFF] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">Automotive Hiring</h3>
            <p className="text-gray-600 mb-4">Mechanics, painters, welders, and more.</p>
            <div className="flex items-center text-[#5C4DFF] font-medium">
              View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/employers/it-hiring" className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#33348D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#33348D] transition-colors duration-300">
              <Globe className="w-6 h-6 text-[#33348D] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">IT Hiring</h3>
            <p className="text-gray-600 mb-4">Developers, engineers, and tech specialists.</p>
            <div className="flex items-center text-[#33348D] font-medium">
              View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/employers/skilled-worker-hiring" className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#1E1E1E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E1E1E] transition-colors duration-300">
              <Users className="w-6 h-6 text-[#1E1E1E] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-medium text-black mb-3">Skilled Workers</h3>
            <p className="text-gray-600 mb-4">Construction, hospitality, and healthcare staff.</p>
            <div className="flex items-center text-[#1E1E1E] font-medium">
              View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-medium text-black mb-4">Why Choose <span className="text-[#33348D] italic">IIMSC?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We simplify international recruitment with our comprehensive process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
                { title: "Vetted Talent", desc: "Rigorous screening and skill assessment.", icon: ShieldCheck, color: "#5C4DFF" },
                { title: "Visa Support", desc: "End-to-end immigration and paperwork handling.", icon: Globe, color: "#33348D" },
                { title: "Fast Turnaround", desc: "Efficient processes to fill roles quickly.", icon: Briefcase, color: "#1E1E1E" },
                { title: "Retention Focus", desc: "Cultural integration for long-term success.", icon: CheckCircle, color: "#33348D" }
             ].map((item, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:bg-white transition-all">
                   <item.icon className="w-8 h-8 mb-4" style={{ color: item.color }} />
                   <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                   <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </div>
      
      <Stats />
      <Differentiators />
    </main>
  );
}
