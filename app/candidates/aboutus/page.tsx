import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CandidateAboutUs() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-6">
              About <span className="text-[#5C4DFF] italic">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Bridging the gap between Indian talent and European opportunities with integrity and excellence.
            </p>
          </div>
          
          <div className="prose prose-lg prose-gray max-w-none bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm mb-16">
            {/* Placeholder for content from 'About us.docx' */}
            <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium">
              We are dedicated to bridging the gap between Indian talent and European opportunities. Our team works tirelessly to ensure a smooth transition for every candidate.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With years of experience in the recruitment industry, we understand the challenges and aspirations of professionals looking to work abroad. We don't just find you a job; we help you build a life in a new country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower skilled Indian professionals by connecting them with reputable employers in Europe, fostering a global exchange of talent and culture. We believe in transparency, ethical recruitment, and long-term support.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#5C4DFF] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Join thousands of professionals who have successfully relocated to Europe with our help.
              </p>
              <Link href="/candidates/contact" className="inline-flex items-center bg-white text-[#5C4DFF] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
