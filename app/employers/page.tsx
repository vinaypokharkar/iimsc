"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, Wrench, Users, Hourglass, Globe, ShieldCheck, CheckCircle } from "lucide-react";

export default function EmployerHome() {
  return (
    <main className="min-h-screen bg-[#EAEAEA] font-instrumental-sans text-gray-900 pb-20">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-black">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 w-full h-full opacity-80">
           <Image 
            src="/emp-bg.png" 
            alt="Employer Hero" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-20 max-w-[1400px] mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Hire Top Talent <br />
            From India
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            We provide end-to-end recruitment solutions for European companies seeking skilled professionals. From sourcing to visa processing, we handle it all.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="px-8 py-3 bg-white text-[#33348D] rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
              Partner With Us
            </Link>
            <Link href="/employers/aboutus" className="px-8 py-3 bg-[#5C4DFF] text-white rounded-full font-medium hover:bg-[#4837cc] transition-colors shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 relative z-20 space-y-24">

        {/* --- 2. SERVICE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Automotive */}
          <Link href="/employers/automotive-hiring" className="bg-white rounded-[20px] p-8 flex justify-between items-start hover:shadow-lg transition-shadow group h-[200px]">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                Automotive <br /> Hiring
              </h3>
              <div className="text-xs text-gray-500 font-medium flex items-center group-hover:text-[#5C4DFF] transition-colors">
                Read More <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </div>
            <div className="text-gray-300 group-hover:text-[#5C4DFF] transition-colors">
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
          </Link>

          {/* Card 2: IT Hiring */}
          <Link href="/employers/it-hiring" className="bg-white rounded-[20px] p-8 flex justify-between items-start hover:shadow-lg transition-shadow group h-[200px]">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                IT Hiring
              </h3>
              <div className="text-xs text-gray-500 font-medium flex items-center group-hover:text-[#5C4DFF] transition-colors">
                Read More <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </div>
            <div className="text-gray-300 group-hover:text-[#5C4DFF] transition-colors">
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
          </Link>

          {/* Card 3: Skilled Workers */}
          <Link href="/employers/skilled-worker-hiring" className="bg-white rounded-[20px] p-8 flex justify-between items-start hover:shadow-lg transition-shadow group h-[200px]">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                Skilled <br /> Workers
              </h3>
              <div className="text-xs text-gray-500 font-medium flex items-center group-hover:text-[#5C4DFF] transition-colors">
                Read More <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </div>
            <div className="text-gray-300 group-hover:text-[#5C4DFF] transition-colors">
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
          </Link>
        </div>

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
        <div className="space-y-12">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-black">
            What Makes IIMSC <span className="text-[#33348D]">Different</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Diff 1 */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 flex justify-between items-start relative overflow-hidden h-[300px]">
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                  Candidate-First <br /> Approach
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We put you at the center of everything. With 30+ years of combined expertise, we help Indian automotive professionals build real careers with Europe's most respected brands.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 text-[#7F7FFF] opacity-80 font-bold text-[200px] leading-none -mb-10 -mr-4">
                1
              </div>
            </div>

            {/* Diff 2 */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 flex justify-between items-start relative overflow-hidden h-[300px]">
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                  Europe's Largest <br /> Automotive Network
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Choose from 60+ top automotive companies across Europe. From passenger vehicles and trucks to machinery, modifications, tires, and inspection — we connect you to the right opportunity.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 text-[#7F7FFF] opacity-80 font-bold text-[200px] leading-none -mb-10 -mr-4">
                2
              </div>
            </div>

            {/* Diff 3 */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 flex justify-between items-start relative overflow-hidden h-[300px]">
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                  Simple Process, <br /> Trusted Results
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  With 1,200+ placements across 8 countries, our dedicated managers guide you from start to finish. No advance payments — your trust and success come first.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 text-[#7F7FFF] opacity-80 font-bold text-[200px] leading-none -mb-10 -mr-4">
                3
              </div>
            </div>

            {/* Diff 4 */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 flex justify-between items-start relative overflow-hidden h-[300px]">
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                  Support Beyond <br /> Recruitment
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  From job change guidance to relocation, family support, and settling your kids abroad — we stay with you long after placement. For us, it's a relationship, not a transaction.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 text-[#7F7FFF] opacity-80 font-bold text-[200px] leading-none -mb-10 -mr-4">
                4
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
