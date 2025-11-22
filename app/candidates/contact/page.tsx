import React from 'react';
import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function CandidateContact() {
  return (
    <main className="min-h-screen pt-24 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-6">
              Get in <span className="text-[#5C4DFF] italic">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Have questions about your career in Europe? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-black mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#5C4DFF]/10 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-[#5C4DFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase mb-1">Email Us</p>
                      <a href="mailto:candidates@iimsc.co" className="text-black font-medium hover:text-[#5C4DFF] transition-colors">candidates@iimsc.co</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#5C4DFF]/10 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-[#5C4DFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase mb-1">Call Us</p>
                      <a href="tel:+91876543210" className="text-black font-medium hover:text-[#5C4DFF] transition-colors">+91 8765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#5C4DFF]/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-[#5C4DFF]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium uppercase mb-1">Visit Us</p>
                      <p className="text-black font-medium">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#5C4DFF] p-8 rounded-3xl text-white relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                 <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                    <p className="text-white/80 mb-2">Monday - Friday</p>
                    <p className="font-bold text-2xl">9:00 AM - 6:00 PM</p>
                    <p className="text-white/60 text-sm mt-1">Indian Standard Time</p>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
