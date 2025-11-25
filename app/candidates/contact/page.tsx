import React from 'react';
import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

export default function CandidateContact() {
  return (
    <main className="min-h-screen pt-4 pb-12 relative overflow-hidden font-instrumental-sans bg-gray-50">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-medium text-black tracking-tight mb-6">
              Get in <span className="text-[#5C4DFF] italic">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Have questions about your career in Europe? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="bg-[#5C4DFF]/10 p-3 rounded-xl shrink-0">
                    <Mail className="w-6 h-6 text-[#5C4DFF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-sm text-gray-500 mb-2">For general inquiries and support</p>
                    <a href="mailto:candidates@iimsc.co" className="text-[#5C4DFF] font-medium hover:underline">candidates@iimsc.co</a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="bg-[#5C4DFF]/10 p-3 rounded-xl shrink-0">
                    <Phone className="w-6 h-6 text-[#5C4DFF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-sm text-gray-500 mb-2">Mon-Fri from 9am to 6pm</p>
                    <a href="tel:+91876543210" className="text-[#5C4DFF] font-medium hover:underline">+91 8765 43210</a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="bg-[#5C4DFF]/10 p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-[#5C4DFF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-sm text-gray-500 mb-2">Come say hello at our office</p>
                    <p className="text-gray-900 font-medium">Seawoods Grand Central Mall, Navi Mumbai, India</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[300px] relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.959281155468!2d73.0002536752043!3d19.02195098217249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3de43ac6b61%3A0x1c5d5d1b3d2b5f0!2sSeawoods%20Grand%20Central%20Mall!5e0!3m2!1sen!2sin!4v1700502585889!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#5C4DFF] p-6 sm:p-10 text-white relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                   <div className="relative z-10">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Send us a Message</h2>
                      <p className="text-blue-100">Fill out the form below and we'll get back to you as soon as possible.</p>
                   </div>
                </div>
                <div className="p-6 sm:p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
