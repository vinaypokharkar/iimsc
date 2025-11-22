import React from 'react';
import Link from 'next/link';
import { CheckCircle, Globe, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function EmployerAboutUs() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-[#33348D]/20 shadow-sm mb-8">
            <span className="text-sm font-medium text-[#33348D] tracking-wide uppercase">
              About IIMSC
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-black tracking-tight mb-6 leading-tight">
            Bridging the Gap Between <br />
            <span className="text-[#33348D] italic">Talent & Opportunity</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            We are a premier recruitment agency specializing in connecting European employers with high-quality Indian talent. Our mission is to simplify international hiring through transparency, efficiency, and excellence.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-[#33348D]/10 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-[#33348D]" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses by providing them with the skilled workforce they need to thrive, while offering life-changing opportunities to talented professionals from India. We aim to be the most trusted partner in international recruitment.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-[#5C4DFF]/10 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-[#5C4DFF]" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Our Values</h2>
            <ul className="space-y-3">
              {[
                "Integrity & Transparency in every interaction.",
                "Excellence in service delivery and candidate quality.",
                "Commitment to long-term partnerships.",
                "Respect for cultural diversity and integration."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#33348D] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">Our Recruitment Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A streamlined approach to ensure you get the best talent with minimal hassle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Requirement Analysis", desc: "We understand your specific needs and culture." },
              { step: "02", title: "Sourcing & Screening", desc: "Rigorous vetting of candidates from our vast pool." },
              { step: "03", title: "Interview & Selection", desc: "Facilitating interviews and practical tests." },
              { step: "04", title: "Onboarding & Visa", desc: "Complete support for documentation and travel." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-gray-100 hover:bg-white transition-all group">
                <div className="text-5xl font-display font-bold text-gray-100 absolute top-4 right-4 group-hover:text-[#33348D]/10 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#33348D] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-white/80 text-lg mb-10 font-light">
              Partner with IIMSC today and experience the difference of working with a dedicated recruitment expert.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-[#33348D] rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
