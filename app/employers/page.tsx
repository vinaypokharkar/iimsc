"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, Wrench, Users, Hourglass, Globe, ShieldCheck, CheckCircle } from "lucide-react";

import Differentiators from "@/components/differentiators";

export default function EmployerHome() {
  return (
    <main className="min-h-screen font-instrumental-sans">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
           <Image 
            src="/emp-bg.png" 
            alt="Employer Hero" 
            fill 
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        {/* Overlay Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-end">
          <div className="max-w-3xl pb-24 sm:pb-20">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Hire Top Talent <br />
              <span className="">From India</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-xl font-light mb-10 leading-relaxed">
              We provide end-to-end recruitment solutions for European companies seeking skilled professionals. From sourcing to visa processing, we handle it all.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#33348D] rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                Partner With Us
              </Link>
              <Link href="/employers/aboutus" className="inline-flex items-center px-8 py-4 bg-[#5C4DFF] text-white rounded-full font-semibold hover:bg-[#4837cc] transition-all hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. SERVICE CARDS --- */}
      <section className="py-20 mt-6 relative z-20 px-4">
        <div className="container mx-auto max-w-8xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Automotive */}
            <Link href="/employers/automotive-hiring" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[208px] w-full md:max-w-[600px] mx-auto border border-gray-100 relative overflow-hidden">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#33348D] transition-colors duration-300 mb-1">
                    Automotive <br /> Hiring
                  </h3>
                </div>
                
                <div className="flex justify-between items-end w-full mt-auto">
                  <div className="flex items-center text-gray-500 text-sm font-medium group-hover:text-[#5C4DFF] transition-colors duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-gray-300 group-hover:text-[#5C4DFF] transition-colors duration-300">
                     <div 
                      className="w-16 h-16 bg-current" 
                      style={{
                        maskImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3aQWoDMQyFYa109ar3rN1jtBSyKh4yC1s8jf4PsgnC0swi4WGZAQAAAADaczP7NLNpZsPM4vXdiRos/L2on3+fOFSDhbl4cd+HarAwFi/u61ANFlY/HR+HarDgr5c33vzB7qgBANQLUC5W0y5AhVhNuwA1xWraBaghVtMuQIVYTbsA5WI1ANBdZqjxxHPaBbE7Ms9pF8TuyDynXRC7I/OcdkHsjsxz2gWxOzLPIYgB6E4tsLhYr+PzqAWWEOt1fB61wDLFeh2fRy2wDLFex+dRCywh1uv4PGqBxcV6EdYAPFnFVUAvOPOliquAUXDmSxVXAWfBmS9VXAUcBWe+VHEVMArOfKniKqAXnBkAFEmEEeFeZYJY5jyPenaJMCLcq0wQy5znUc8uEUaEe5UJYpnzPPXZAUCR2m1XmZC1i9ptV5mQtYvabVeZkLWL2m1XmZC1i9ptV5mQtYvabdcdhCwA2ENtFdCrrB3uorYKGIk1EtRWAWdijQS1VcCRWCNBbRUwEmskqK0COmuHAFCOdwtQaqJbgFIzuwUoNaNbgFIT3QKUGidAAQAAAADslF+R6CXcaB344AAAAABJRU5ErkJggg==")`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3aQWoDMQyFYa109ar3rN1jtBSyKh4yC1s8jf4PsgnC0swi4WGZAQAAAADaczP7NLNpZsPM4vXdiRos/L2on3+fOFSDhbl4cd+HarAwFi/u61ANFlY/HR+HarDgr5c33vzB7qgBANQLUC5W0y5AhVhNuwA1xWraBaghVtMuQIVYTbsA5WI1ANBdZqjxxHPaBbE7Ms9pF8TuyDynXRC7I/OcdkHsjsxz2gWxOzLPIYgB6E4tsLhYr+PzqAWWEOt1fB61wDLFeh2fRy2wDLFex+dRCywh1uv4PGqBxcV6EdYAPFnFVUAvOPOliquAUXDmSxVXAWfBmS9VXAUcBWe+VHEVMArOfKniKqAXnBkAFEmEEeFeZYJY5jyPenaJMCLcq0wQy5znUc8uEUaEe5UJYpnzPPXZAUCR2m1XmZC1i9ptV5mQtYvabVeZkLWL2m1XmZC1i9ptV5mQtYvabdcdhCwA2ENtFdCrrB3uorYKGIk1EtRWAWdijQS1VcCRWCNBbRUwEmskqK0COmuHAFCOdwtQaqJbgFIzuwUoNaNbgFIT3QKUGidAAQAAAADslF+R6CXcaB344AAAAABJRU5ErkJggg==")`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2: IT Hiring */}
            <Link href="/employers/it-hiring" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[208px] w-full md:max-w-[600px] mx-auto border border-gray-100 relative overflow-hidden">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#33348D] transition-colors duration-300 mb-1">
                    IT Hiring
                  </h3>
                </div>
                
                <div className="flex justify-between items-end w-full mt-auto">
                  <div className="flex items-center text-gray-500 text-sm font-medium group-hover:text-[#5C4DFF] transition-colors duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-gray-300 group-hover:text-[#5C4DFF] transition-colors duration-300">
                     <div 
                      className="w-16 h-16 bg-current" 
                      style={{
                        maskImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO3XMWrFMBBF0am09Sj7jJVlJAR+FQwmQmgU6RxwY141hc2NAAAAgEFKRLxHRIuIKyLq691fN3T6OebXr6d2bOjUbo772bGh03Vz3I+ODZ3uPi9vHRs6ldeBr4ef8NMGgLUUkZWriqxcTWTlukRWriqychWRBXCssliIHRd9dbEQOy762mIhdlz0XYuF2HHRVxcLseOirywWYqIP4P+FWJm42UodFGIzN1tpg0Js5mYr16AQm7nZSh0UYjM3WymDQmzmBoBnZbGAElkhsqZqiwWUyAqRNVVdLKBEVogsgB2Io2TiKJk4SiaOkomjZOIIYE8iK5nISiaykomsZCIrmcgC2JPISiaykomsZCIrmchKJrIAziWykomsZCIrmchKJrKSiSwAAABiC98ltQDC9OnJZAAAAABJRU5ErkJggg==")`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO3XMWrFMBBF0am09Sj7jJVlJAR+FQwmQmgU6RxwY141hc2NAAAAgEFKRLxHRIuIKyLq691fN3T6OebXr6d2bOjUbo772bGh03Vz3I+ODZ3uPi9vHRs6ldeBr4ef8NMGgLUUkZWriqxcTWTlukRWriqychWRBXCssliIHRd9dbEQOy762mIhdlz0XYuF2HHRVxcLseOirywWYqIP4P+FWJm42UodFGIzN1tpg0Js5mYr16AQm7nZSh0UYjM3WymDQmzmBoBnZbGAElkhsqZqiwWUyAqRNVVdLKBEVogsgB2Io2TiKJk4SiaOkomjZOIIYE8iK5nISiaykomsZCIrmcgC2JPISiaykomsZCIrmchKJrIAziWykomsZCIrmchKJrKSiSwAAABiC98ltQDC9OnJZAAAAABJRU5ErkJggg==")`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3: Skilled Workers */}
            <Link href="/employers/skilled-worker-hiring" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[208px] w-full md:max-w-[600px] mx-auto border border-gray-100 relative overflow-hidden">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#33348D] transition-colors duration-300 mb-1">
                    Skilled <br /> Workers
                  </h3>
                </div>
                
                <div className="flex justify-between items-end w-full mt-auto">
                  <div className="flex items-center text-gray-500 text-sm font-medium group-hover:text-[#5C4DFF] transition-colors duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-gray-300 group-hover:text-[#5C4DFF] transition-colors duration-300">
                     <div 
                      className="w-16 h-16 bg-current" 
                      style={{
                        maskImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABYElEQVR4nO3aQWpDIRSG0Tty67X77LPLaCmUDoq0kzz9iedAJkFEHCR8XKsAAAA4Xquq16oaVXVVVf/+7o41THxd1MevT79pDRNjcnHvN61h4ppc3NtNa5iY/XS83LSGifZ9edc/f7CPWAPAc0ZWE2t7I6uLtb2RNcTa3si6xNreyOpibW9kNbEGECUtspoQKyG2UlpkDSFWQmyltMjqQqyEGMAh0iKrCbESYiulRdYQYiXEVkqLrC7ESogB8ENkbdZF1l5DZO11iay9usjaq4ksAAAAAPhb2pPCdtpkLe1JYT9tspb2pHCcNllLe1J4nTZZS3tS2E+brKU9KWwmawAPkRYj7bTzpMVIP+08aTEyTjtPWoxcp50nLUb6aedJi5HmPADLpE2X2sJ9IqZmadOlvnCfiKlZ2nRpLNwnYmqWNl26Fu4TMTVLmy71hftETM3Spktt4T6mZgAAAPVEPgG0ZBNPn7PtOgAAAABJRU5ErkJggg==")`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABYElEQVR4nO3aQWpDIRSG0Tty67X77LPLaCmUDoq0kzz9iedAJkFEHCR8XKsAAAA4Xquq16oaVXVVVf/+7o41THxd1MevT79pDRNjcnHvN61h4ppc3NtNa5iY/XS83LSGifZ9edc/f7CPWAPAc0ZWE2t7I6uLtb2RNcTa3si6xNreyOpibW9kNbEGECUtspoQKyG2UlpkDSFWQmyltMjqQqyEGMAh0iKrCbESYiulRdYQYiXEVkqLrC7ESogB8ENkbdZF1l5DZO11iay9usjaq4ksAAAAAPhb2pPCdtpkLe1JYT9tspb2pHCcNllLe1J4nTZZS3tS2E+brKU9KWwmawAPkRYj7bTzpMVIP+08aTEyTjtPWoxcp50nLUb6aedJi5HmPADLpE2X2sJ9IqZmadOlvnCfiKlZ2nRpLNwnYmqWNl26Fu4TMTVLmy71hftETM3Spktt4T6mZgAAAPVEPgG0ZBNPn7PtOgAAAABJRU5ErkJggg==")`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 relative z-20 space-y-24">

        {/* --- 3. STATS SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Numbers That Speak <br />
              for <span className="text-[#5C4DFF]">Themselves</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
              We've helped thousands of automotive professionals build global careers — and our results reflect the trust candidates place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-[160px] shadow-sm">
              <div className="text-[#5C4DFF]">
                <Hourglass className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#5C4DFF]">30+</div>
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-1">
                  Years Combined Expertise
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-[160px] shadow-sm">
              <div className="text-[#5C4DFF]">
                <Settings className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#5C4DFF]">60+</div>
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-1">
                  European Automotive Partners
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-[160px] shadow-sm">
              <div className="text-[#5C4DFF]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#5C4DFF]">1200+</div>
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-1">
                  Successful Placements
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-[160px] shadow-sm">
              <div className="text-[#5C4DFF]">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#5C4DFF]">8+</div>
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-1">
                  Countries Across Europe Hiring
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. DIFFERENTIATORS SECTION --- */}
        <Differentiators />

      </div>
    </main>
  );
}
