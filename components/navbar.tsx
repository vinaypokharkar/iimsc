'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const isCandidatePage = pathname?.startsWith('/candidates');
  const isEmployerPage = pathname?.startsWith('/employers');
  const isRootPage = pathname === '/';

  // if (isRootPage) return null; // Hide navbar on split landing page

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex-shrink-0">
            <Image src="/iimsc-logo.jpg" alt="IIMSC Co Logo" width={130} height={45} className="h-11 w-auto" />
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {isCandidatePage && (
              <>
                <Link href="/candidates/" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <Link href="/candidates/aboutus" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</Link>
                <Link href="/candidates/services" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                <Link href="/candidates/jobs" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium transition-colors">Open Positions</Link>
                <Link href="/candidates/testimonials" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</Link>
              </>
            )}

            {isEmployerPage && (
              <>
                <Link href="/employers/" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <Link href="/employers/aboutus" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium flex items-center outline-none transition-colors">
                    Hiring Solutions <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/employers/automotive-hiring" className="w-full">Automotive Hiring</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/employers/it-hiring" className="w-full">IT Hiring</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/employers/skilled-worker-hiring" className="w-full">Skilled Workers</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center text-gray-800 text-sm font-medium cursor-pointer hover:text-[#5C4DFF] transition-colors">
                <Globe className="w-5 h-5 mr-2" />
                <div className="flex flex-col leading-tight">
                    <span>Default</span>
                    <span className="text-xs text-gray-600">(English)</span>
                </div>
            </div>
            <Link href="/contact" className="bg-gradient-to-r from-[#5C4DFF] to-[#33348D] hover:from-[#4A3BE6] hover:to-[#2A2B7A] text-white px-7 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

