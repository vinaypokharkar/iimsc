'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const pathname = usePathname();
  const isCandidatePage = pathname?.startsWith('/candidates');
  const isEmployerPage = pathname?.startsWith('/employers');
  const isRootPage = pathname === '/';

  // if (isRootPage) return null;

  const aboutLink = isEmployerPage ? "/employers/aboutus" : "/candidates/aboutus";
  const contactLink = isCandidatePage ? "/candidates/contact" : "/contact"; // Fallback to global contact or candidate contact

  return (
    <footer className="pt-20 pb-0 relative overflow-hidden border-t border-gray-100">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image src="/iimsc-logo.jpg" alt="IIMSC Co" width={145} height={72} className="mb-6" />
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Connecting skilled automotive professionals from India to Europe's top companies through transparent, ethical, and long-term recruitment support.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="bg-gray-200 p-2.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#5C4DFF] hover:to-[#33348D] hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="bg-gray-200 p-2.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#5C4DFF] hover:to-[#33348D] hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="bg-gray-200 p-2.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#5C4DFF] hover:to-[#33348D] hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="bg-gray-200 p-2.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#5C4DFF] hover:to-[#33348D] hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href={aboutLink} className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/process" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Our Process</Link></li>
              <li><Link href="/success-stories" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Success Stories</Link></li>
              <li><Link href={contactLink} className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Terms and Services</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-black mb-6">Services</h3>
            <ul className="space-y-3">
              {isEmployerPage ? (
                 <>
                  <li><Link href="/employers/automotive-hiring" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Automotive Hiring</Link></li>
                  <li><Link href="/employers/it-hiring" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">IT Hiring</Link></li>
                  <li><Link href="/employers/skilled-worker-hiring" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Skilled Workers</Link></li>
                 </>
              ) : (
                <>
                  <li><Link href="/candidates/jobs" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Browse Jobs</Link></li>
                  <li><Link href="/candidates/services" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Visa & Immigration</Link></li>
                  <li><Link href="/candidates/services" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Relocation Support</Link></li>
                  <li><Link href="/candidates/testimonials" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Candidate Stories</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-bold text-black mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-700 flex items-start">
                <span className="font-semibold min-w-[60px]">Phone:</span> 
                <span>+91 8765 43210</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="font-semibold min-w-[60px]">Email:</span> 
                <span>support@iimsc.co</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="font-semibold min-w-[60px]">Address:</span> 
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Watermark */}
      <div className="w-full overflow-hidden leading-none opacity-[0.04] pointer-events-none select-none">
        <span className="text-[16vw] font-extrabold text-black whitespace-nowrap block text-center -mb-[4vw] tracking-tight">
          iimsc co
        </span>
      </div>
    </footer>
  );
};

export default Footer;
