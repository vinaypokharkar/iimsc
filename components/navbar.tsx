import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming shadcn components are in components/ui
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8"> {/* Group logo and nav links */}
            <div className="flex items-center">
              <Image src="/IIMSC-Logo_ 2.png" alt="IIMSC Co Logo" width={100} height={150} />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 text-xl font-medium">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-xl font-medium">About</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 flex items-center text-xl font-medium">
                  For Candidates
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/candidates/overview">Overview</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/candidates/open-positions">Open Positions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/candidates/additional-services">Additional Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/candidates/testimony">Testimony</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="relative">
                <button className="text-gray-600 hover:text-gray-900 flex items-center text-xl font-medium">
                  For Companies
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4"> {/* Group language selector and contact button */}
            <div className="flex items-center space-x-2">
              {/* Placeholder for language icon */}
              <div>
                <Image src="/Google-Translate.png" alt="Language Icon" width={25} height={25} />
              </div>
              <span className="text-gray-600 text-base font-medium">Default (English)</span>
            </div>
            <button className="bg-blue-800 text-white px-6 py-2 hover:bg-blue-900 text-2xl font-bold w-50 h-15 ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

