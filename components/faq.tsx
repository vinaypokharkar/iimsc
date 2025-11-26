'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "Do I need to pay any fees to apply?",
    answer: "No, IIMSC is strictly against charging candidates. Our recruitment services are completely free for job seekers. All fees are paid by the employers."
  },
  {
    question: "How long does the visa process usually take?",
    answer: "The timeline varies by country and specific visa type, but generally, the process takes between 2 to 4 months from the time of job offer acceptance to visa issuance."
  },
  {
    question: "Do you provide accommodation support in the new country?",
    answer: "Yes, we assist with finding suitable accommodation. While the cost is typically borne by the candidate (unless specified otherwise by the employer), we help you navigate the local housing market and secure a place before you arrive."
  },
  {
    question: "Is language training mandatory?",
    answer: "For certain roles and countries (like Germany), basic language proficiency might be required. We provide language training support to help you meet these requirements and integrate smoothly."
  },
  {
    question: "What industries do you hire for?",
    answer: "We primarily specialize in the automotive, manufacturing, and construction sectors, hiring for roles such as mechanics, welders, electricians, and engineers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5C4DFF]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#33348D]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Header & CTA */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              
              
              <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight leading-[1.1] mb-6">
                Frequently Asked <br/>
                <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent pr-1 ">Questions</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                Everything you need to know about starting your international career with IIMSC. Can't find what you're looking for?
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`group rounded-3xl transition-all duration-300 border ${
                    openIndex === index 
                      ? 'bg-white border-[#5C4DFF]/20 shadow-xl shadow-[#5C4DFF]/5' 
                      : 'bg-white/50 border-gray-200 hover:bg-white hover:border-[#5C4DFF]/10 hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between p-6 sm:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-lg sm:text-xl font-medium pr-8 transition-colors duration-300 ${
                      openIndex === index ? 'text-[#33348D]' : 'text-gray-900 group-hover:text-[#33348D]'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-[#5C4DFF] text-white rotate-180' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-[#5C4DFF]/10 group-hover:text-[#5C4DFF]'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 sm:p-8 pt-0 text-gray-600 leading-relaxed text-base sm:text-lg font-light">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
