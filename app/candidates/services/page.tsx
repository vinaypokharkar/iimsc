import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function CandidateServices() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-6">
              Comprehensive <span className="text-[#33348D] italic">Support</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              We go beyond recruitment. Our end-to-end services ensure you are fully prepared for your new life in Europe.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { title: 'Visa Application Support', desc: 'Expert guidance through the complex visa and work permit process.' },
                { title: 'Relocation Assistance', desc: 'Help with flights, accommodation, and initial settlement.' },
                { title: 'Language Training', desc: 'Resources and courses to help you master the local language.' },
                { title: 'Cultural Integration', desc: 'Workshops to help you adapt to the European work culture and lifestyle.' },
                { title: 'Family Support', desc: 'Guidance on bringing your family members to join you.' },
                { title: 'Post-Arrival Guidance', desc: 'Ongoing support even after you land, including banking and registration.' }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="mt-1 bg-[#33348D]/10 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-[#33348D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#33348D] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Need help with something specific?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Our team is here to answer all your questions about working and living in Europe.
              </p>
              <Link href="/candidates/contact" className="inline-flex items-center bg-white text-[#33348D] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
