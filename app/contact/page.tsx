import React from 'react';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-4 pb-12 relative overflow-hidden font-instrumental-sans">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#5C4DFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-medium text-black tracking-tight mb-8 text-center">
          Get in <span className="text-[#5C4DFF] ">Touch</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-light">
          We'd love to hear from you. Please fill out the form below and we'll get back to you shortly.
        </p>
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100">
            <ContactForm />
        </div>
      </div>
    </main>
  );
}
