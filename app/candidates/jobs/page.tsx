'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Search } from 'lucide-react';
import JobApplicationModal from '@/components/job-application-modal';
import Image from 'next/image';

export default function CandidateJobs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const openModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen  pb-12 relative overflow-hidden font-instrumental-sans">
      <JobApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[200px] sm:h-[200px] lg:h-[350px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src="/open-position-bg.png"
            alt="Open Positions"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>

        {/* "OPEN POSITIONS" Huge Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-end z-10 pointer-events-none pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[10vw] sm:text-[10vw] md:text-[6vw] lg:text-[4vw] font-bold text-white tracking-wide leading-none select-none">
              OPEN POSITIONS
            </h1>
          </div>
        </div>
      </section>

      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1E1E1E]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#33348D]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

      

      <div className="container mx-auto px-[15px] max-w-[1600px] py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">
      <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            
            <p className="text-center text-gray-500 font-bold uppercase tracking-wider text-4xl space-y-8 mb-6 mt-12">
              Explore exciting career opportunities across Europe's leading industries.
            </p>
          </div>

          {/* Search/Filter Placeholder */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-12 flex flex-col md:flex-row gap-4">
             <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="text" placeholder="Search for jobs (e.g. Welder, Nurse)" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5C4DFF]/20 focus:border-[#5C4DFF]" />
             </div>
             <button className="bg-[#1E1E1E] text-white px-8 py-3 rounded-xl font-medium hover:bg-black transition-colors">
                Search Jobs
             </button>
          </div>

          <div className="space-y-4 mb-16">
            {[
              { title: 'Senior Automotive Technician', loc: 'Munich, Germany', type: 'Full-time' },
              { title: 'Industrial Welder (MIG/TIG)', loc: 'Stuttgart, Germany', type: 'Contract' },
              { title: 'Registered Nurse', loc: 'Berlin, Germany', type: 'Full-time' },
              { title: 'Heavy Vehicle Driver', loc: 'Hamburg, Germany', type: 'Full-time' },
              { title: 'Construction Site Supervisor', loc: 'Frankfurt, Germany', type: 'Full-time' }
            ].map((job, index) => (
              <div 
                key={index} 
                onClick={() => openModal(job.title)}
                className="group bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-[#1E1E1E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#5C4DFF] transition-colors">{job.title}</h3>
                    <div className="flex flex-col gap-1.5 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.loc}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#5C4DFF] font-medium opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>

          {/* CTA Section */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden min-h-[400px]">
            <div className="flex-1 max-w-xl z-10 relative">
              <h2 className="text-3xl md:text-5xl font-bold text-[#5C4DFF] mb-6">
                Don't see the right role?
              </h2>
              <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed">
                Submit your CV to our talent pool and we'll contact you when a suitable position opens up.
              </p>
              <button 
                onClick={() => openModal('General Application')}
                className="inline-flex items-center bg-[#5C4DFF] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4837cc] transition-all shadow-lg hover:shadow-[#5C4DFF]/30 hover:-translate-y-1"
              >
                Submit General Application <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            {/* Image Container */}
            <div className="hidden md:block w-[50%] h-full absolute right-0 top-0">
               <Image 
                 src="/cta-job.png" 
                 alt="Professional" 
                 fill
                 className="object-cover object-center"
               />
               {/* Gradient to blend image */}
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
            </div>
          </div>

      </div>
    </main>
  );
}
