import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
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
              <li><Link href="/about" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/process" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Our Process</Link></li>
              <li><Link href="/success-stories" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Success Stories</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Terms and Services</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-black mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/jobs" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Automotive Jobs</Link></li>
              <li><Link href="/relocation" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Relocation Support</Link></li>
              <li><Link href="/visa-guidance" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Visa Guidance</Link></li>
              <li><Link href="/family-assistance" className="text-gray-700 hover:text-[#5C4DFF] text-sm transition-colors">Family Assistance</Link></li>
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
