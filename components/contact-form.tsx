'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tight">
            Let's <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent italic">Connect</span> <br/>
            And Start Your <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent italic">Journey</span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Whether you're a candidate looking for your next big break or a company seeking top talent, we're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="bg-white/80 backdrop-blur-sm p-10 sm:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E]"></div>
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-900">Name</label>
                    <Input id="name" placeholder="John Carter" className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] h-12 rounded-xl transition-all duration-300" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-900">Phone</label>
                    <Input id="phone" type="tel" placeholder="(123) 456-789" className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] h-12 rounded-xl transition-all duration-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-900">Email</label>
                  <Input id="email" type="email" placeholder="example@email.com" className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] h-12 rounded-xl transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-900">Message</label>
                  <Textarea id="message" placeholder="Tell us about your requirements..." className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] min-h-[160px] rounded-xl resize-none transition-all duration-300" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-[#5C4DFF] to-[#33348D] hover:from-[#4A3BE6] hover:to-[#2A2B7A] text-white py-7 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">Send Message</Button>
              </form>
          </div>
          
          <div className="space-y-10">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px] relative group">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#5C4DFF]/10 flex items-center justify-center mb-4">
                    <Mail className="h-5 w-5 text-[#5C4DFF]" />
                </div>
                <p className="font-bold text-black mb-1">Email</p>
                <p className="text-sm text-gray-600">support@iimsc.co</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#5C4DFF]/10 flex items-center justify-center mb-4">
                    <Phone className="h-5 w-5 text-[#5C4DFF]" />
                </div>
                <p className="font-bold text-black mb-1">Call</p>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#5C4DFF]/10 flex items-center justify-center mb-4">
                    <MapPin className="h-5 w-5 text-[#5C4DFF]" />
                </div>
                <p className="font-bold text-black mb-1">Location</p>
                <p className="text-sm text-gray-600">Seawoods, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
