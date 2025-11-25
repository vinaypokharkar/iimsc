import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Server, Database, Globe, Cpu, Shield } from 'lucide-react';

export default function ITHiring() {
  return (
    <main className="min-h-screen pt-4 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-[#33348D]/20 shadow-sm mb-8">
            <Code className="w-4 h-4 text-[#33348D]" />
            <span className="text-sm font-medium text-[#33348D] tracking-wide uppercase">
              Tech Talent Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-black tracking-tight mb-6 leading-tight">
            IT & Tech <br />
            <span className="text-[#33348D] italic">Recruitment</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
            Access a vast pool of pre-vetted Indian tech talent. From software developers to data scientists, we help you build world-class engineering teams.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#33348D] text-white rounded-full font-medium hover:bg-[#2a2b7a] shadow-lg hover:shadow-[#33348D]/30 transition-all hover:-translate-y-1">
            Find Tech Talent <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Tech Stack Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium text-black mb-12 text-center">Expertise We Source</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Software Development", icon: Code, desc: "Full-stack, Frontend (React, Vue), Backend (Node, Python, Java)." },
              { title: "Cloud & DevOps", icon: Server, desc: "AWS, Azure, GCP, Docker, Kubernetes, CI/CD pipelines." },
              { title: "Data & AI", icon: Database, desc: "Data Engineering, Machine Learning, AI, and Analytics." },
              { title: "Cybersecurity", icon: Shield, desc: "Network security, ethical hacking, and compliance experts." },
              { title: "Embedded Systems", icon: Cpu, desc: "IoT, firmware development, and hardware integration." },
              { title: "Web & Mobile", icon: Globe, desc: "iOS, Android, Flutter, React Native, and responsive web apps." }
            ].map((role, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#33348D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#33348D] transition-colors">
                  <role.icon className="w-6 h-6 text-[#33348D] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Indian Tech Talent */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-100 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-black mb-6">The Indian Tech Advantage</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                India is a global hub for technology talent. Our candidates bring a combination of strong theoretical foundations, practical experience with cutting-edge stacks, and excellent English proficiency.
              </p>
              <ul className="space-y-4">
                {[
                  "Largest pool of STEM graduates globally.",
                  "Proficiency in English and western work culture.",
                  "Expertise in emerging technologies (AI, Blockchain).",
                  "Scalable remote or on-site teams."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#33348D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-100">
               {/* Placeholder for an image */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#33348D]/20 to-[#5C4DFF]/20 flex items-center justify-center">
                 <Code className="w-24 h-24 text-[#33348D]/40" />
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1E1E1E] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
               Scale Your Tech Team Today
             </h2>
             <p className="text-gray-400 text-lg mb-10 font-light">
               Don't let talent shortages hold you back. Connect with top-tier developers now.
             </p>
             <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
               Get Started <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
           </div>
        </div>
      </div>
    </main>
  );
}
