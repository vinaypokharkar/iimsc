import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Hammer, Heart, Coffee, HardHat, Truck, Utensils } from 'lucide-react';

export default function SkilledWorkerHiring() {
  return (
    <main className="min-h-screen pt-4 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1E1E1E]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-[#1E1E1E]/20 shadow-sm mb-8">
            <HardHat className="w-4 h-4 text-[#1E1E1E]" />
            <span className="text-sm font-medium text-[#1E1E1E] tracking-wide uppercase">
              Essential Workforce
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-black tracking-tight mb-6 leading-tight">
            Skilled Worker <br />
            <span className="text-[#1E1E1E] italic">Recruitment</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
            Reliable, hardworking, and experienced professionals for construction, healthcare, hospitality, and manufacturing sectors.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#1E1E1E] text-white rounded-full font-medium hover:bg-black shadow-lg hover:shadow-[#1E1E1E]/30 transition-all hover:-translate-y-1">
            Hire Skilled Workers <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Sectors Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium text-black mb-12 text-center">Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Construction", icon: Hammer, desc: "Masons, carpenters, electricians, plumbers, and site supervisors." },
              { title: "Healthcare", icon: Heart, desc: "Nurses, caregivers, medical technicians, and support staff." },
              { title: "Hospitality", icon: Coffee, desc: "Chefs, housekeeping, front desk, and service personnel." },
              { title: "Manufacturing", icon: HardHat, desc: "Machine operators, assembly line workers, and quality control." },
              { title: "Logistics", icon: Truck, desc: "Warehouse staff, forklift operators, and inventory managers." },
              { title: "Food Service", icon: Utensils, desc: "Sous chefs, line cooks, bakers, and kitchen assistants." }
            ].map((role, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#1E1E1E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E1E1E] transition-colors">
                  <role.icon className="w-6 h-6 text-[#1E1E1E] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Skilled Workers */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-100 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-black mb-6">Reliability You Can Count On</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our skilled workers are known for their dedication, discipline, and ability to deliver high-quality work. We ensure all candidates are properly vetted and certified for their respective trades.
              </p>
              <ul className="space-y-4">
                {[
                  "Verified trade certifications and experience.",
                  "Strong work ethic and reliability.",
                  "Willingness to learn and adapt.",
                  "Long-term commitment to employers."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#1E1E1E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100">
               {/* Placeholder for an image */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/20 to-[#33348D]/20 flex items-center justify-center">
                 <HardHat className="w-24 h-24 text-[#1E1E1E]/40" />
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#33348D] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
               Fill Your Vacancies Fast
             </h2>
             <p className="text-white/80 text-lg mb-10 font-light">
               We have a ready pool of skilled workers waiting for the right opportunity.
             </p>
             <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#33348D] rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
               Contact Us Now <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
           </div>
        </div>
      </div>
    </main>
  );
}
