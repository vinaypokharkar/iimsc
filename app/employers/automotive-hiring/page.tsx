import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Settings, Wrench, PenTool, Truck } from 'lucide-react';

export default function AutomotiveHiring() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-[#5C4DFF]/20 shadow-sm mb-8">
            <Settings className="w-4 h-4 text-[#5C4DFF]" />
            <span className="text-sm font-medium text-[#5C4DFF] tracking-wide uppercase">
              Specialized Recruitment
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-black tracking-tight mb-6 leading-tight">
            Automotive <br />
            <span className="text-[#5C4DFF] italic">Hiring Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
            We connect European automotive companies with highly skilled Indian professionals. From mechanics to engineers, we find the talent that drives your business forward.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#5C4DFF] text-white rounded-full font-medium hover:bg-[#4837cc] shadow-lg hover:shadow-[#5C4DFF]/30 transition-all hover:-translate-y-1">
            Start Hiring Now <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Roles We Cover */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium text-black mb-12 text-center">Roles We Specialize In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Mechanics", icon: Wrench, desc: "Expert diagnostics and repair for all vehicle types." },
              { title: "Painters", icon: PenTool, desc: "Precision painting and refinishing specialists." },
              { title: "Welders", icon: Settings, desc: "Certified welders for structural and component work." },
              { title: "Truck Drivers", icon: Truck, desc: "Experienced heavy vehicle operators." },
              { title: "Auto Electricians", icon: Settings, desc: "Specialists in vehicle electrical systems." },
              { title: "Body Shop Technicians", icon: Wrench, desc: "Experts in collision repair and bodywork." }
            ].map((role, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#5C4DFF]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5C4DFF] transition-colors">
                  <role.icon className="w-6 h-6 text-[#5C4DFF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Hire Indian Automotive Talent */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-100 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-black mb-6">Why Hire Indian Automotive Talent?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Indian automotive professionals are renowned for their technical expertise, adaptability, and strong work ethic. They undergo rigorous training and often have experience working with international standards.
              </p>
              <ul className="space-y-4">
                {[
                  "Highly skilled and certified professionals.",
                  "Strong technical knowledge and problem-solving skills.",
                  "Adaptable to new technologies and environments.",
                  "Cost-effective recruitment solutions."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#5C4DFF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100">
               {/* Placeholder for an image */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#5C4DFF]/20 to-[#33348D]/20 flex items-center justify-center">
                 <Settings className="w-24 h-24 text-[#5C4DFF]/40" />
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1E1E1E] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
               Need Skilled Automotive Staff?
             </h2>
             <p className="text-gray-400 text-lg mb-10 font-light">
               Let us help you find the perfect candidates for your workshop or factory.
             </p>
             <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
               Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
           </div>
        </div>
      </div>
    </main>
  );
}
