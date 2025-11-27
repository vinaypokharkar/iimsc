'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Ensure pathname is not null for string operations
  const currentPath = pathname || '';
  const isCandidatePage = currentPath.startsWith('/candidates');
  const isEmployerPage = currentPath.startsWith('/employers');
  const isRootPage = currentPath === '/';

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
    <div className="h-20 w-full relative">
    <nav className="bg-white shadow-sm border-b border-gray-100 h-20 z-50 w-full fixed top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <Link href="/" className="flex-shrink-0">
            <Image src="/iimsc-logo.jpg" alt="IIMSC Co Logo" width={130} height={45} className="h-11 w-auto" />
          </Link>
          
          {/* Desktop Menu */}
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
                  <DropdownMenuTrigger className="group text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-sm font-medium flex items-center outline-none transition-colors data-[state=open]:text-[#5C4DFF] data-[state=open]:bg-gray-50">
                    Hiring Solutions 
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white min-w-[200px]" align="start" sideOffset={8}>
                    <DropdownMenuItem asChild>
                      <Link href="/employers/automotive-hiring" className="w-full cursor-pointer font-medium text-gray-700 hover:text-[#5C4DFF]">Automotive Hiring</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/employers/it-hiring" className="w-full cursor-pointer font-medium text-gray-700 hover:text-[#5C4DFF]">IT Hiring</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/employers/skilled-worker-hiring" className="w-full cursor-pointer font-medium text-gray-700 hover:text-[#5C4DFF]">Skilled Workers</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-gray-800 text-sm font-medium cursor-pointer hover:text-[#5C4DFF] transition-colors">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#5C4DFF] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4 p-4 pb-24 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {isCandidatePage && (
            <>
              <Link href="/candidates/" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-base font-medium transition-colors">Home</Link>
              <Link href="/candidates/aboutus" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-base font-medium transition-colors">About Us</Link>
              <Link href="/candidates/services" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-base font-medium transition-colors">Services</Link>
              <Link href="/candidates/jobs" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-base font-medium transition-colors">Open Positions</Link>
              <Link href="/candidates/testimonials" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-base font-medium transition-colors">Testimonials</Link>
            </>
          )}

          {isEmployerPage && (
            <>
              <Link href="/employers/" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-base font-medium transition-colors">Home</Link>
              <Link href="/employers/aboutus" className="text-gray-800 hover:text-[#5C4DFF] px-3 py-2 rounded-md text-base font-medium transition-colors">About Us</Link>
              <div className="px-3 py-2">
                <span className="text-gray-800 font-medium block mb-2">Hiring Solutions</span>
                <div className="pl-4 flex flex-col space-y-2 border-l-2 border-gray-100">
                  <Link href="/employers/automotive-hiring" className="text-gray-600 hover:text-[#5C4DFF] text-sm font-medium transition-colors">Automotive Hiring</Link>
                  <Link href="/employers/it-hiring" className="text-gray-600 hover:text-[#5C4DFF] text-sm font-medium transition-colors">IT Hiring</Link>
                  <Link href="/employers/skilled-worker-hiring" className="text-gray-600 hover:text-[#5C4DFF] text-sm font-medium transition-colors">Skilled Workers</Link>
                </div>
              </div>
            </>
          )}

          <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col space-y-4">
             <div className="flex items-center text-gray-800 text-sm font-medium px-3">
                <Globe className="w-5 h-5 mr-2" />
                <div className="flex flex-col leading-tight">
                    <span>Default</span>
                    <span className="text-xs text-gray-600">(English)</span>
                </div>
            </div>
            <Link href="/contact" className="bg-gradient-to-r from-[#5C4DFF] to-[#33348D] text-white px-4 py-3 rounded-lg text-center font-semibold shadow-md mx-3">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;

