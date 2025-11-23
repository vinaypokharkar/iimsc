"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

// --- Types & Data ---

// Adjusted for a wider, semicircular arc
// rotate: tilts the image to point towards the center
// y: pushes the side images down to create the curve
const HERO_IMAGES = [
  { 
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80", 
    rotate: -25, 
    y: 200,  // Lower for outer edges
    delay: 0 
  },
  { 
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80", 
    rotate: -25, 
    y: 80, 
    delay: 0.1 
  },
  { 
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80", 
    rotate: -15, 
    y: -10, 
    delay: 0.2 
  }, 
  { 
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80", 
    rotate: 0, 
    y: -60  ,    // Center is highest
    delay: 0.3 
  },   
  { 
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80", 
    rotate: 15, 
    y: -10, 
    delay: 0.4 
  },
  { 
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80", 
    rotate: 25, 
    y: 80, 
    delay: 0.5 
  },
  { 
    src: "https://images.unsplash.com/photo-1574462811041-52939d9ee192?auto=format&fit=crop&w=400&q=80", 
    rotate: 25, 
    y: 200, 
    delay: 0.6 
  }, 
];

export default function LandingPage() {
  const [hoveredRole, setHoveredRole] = useState<
    "candidate" | "employer" | null
  >(null);

  return (
    <main className="font-instrumental text-gray-900 selection:bg-blue-100 overflow-x-hidden">
      <div style={{
        minHeight: '100vh',
        margin: '10px',
        backgroundImage: 'url(/Rectangle-711.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        borderRadius: '0.75rem',
      }}>
        {/* --- Navbar --- */}
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-2">
          
          <Image 
            src="/iimsc-logo-removedbg.png"
            alt="IIMSC Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            <Globe size={16} />
            <span className="hidden sm:inline">Default (English)</span>
          </button>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative w-full max-w-7x2 mx-auto px-4 pt-10 pb-20 flex flex-col items-center text-center z-10 bg-transparent">
        {/* 
{/* 
           --- Semicircular Image Arc --- 
           Logic: The parent is width 100% and hidden overflow.
           The child is WIDER than 100% (e.g. 120%) and centered. 
           This pushes the first and last items off-screen.
        */}
        <div className="relative w-full flex justify-center mb-12 md:mb-10 overflow-hidden py-4">
          <div className="flex items-start justify-between w-[200%] sm:w-[160%] md:w-[125%] lg:w-[115%] px-4 pt-12 h-[220px] md:h-[450px]">
            {HERO_IMAGES.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 150, scale: 0.8 }}
                animate={{ opacity: 1, y: img.y, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: img.delay, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                style={{ 
                  rotate: img.rotate,
                }}
                className="relative group shrink-0" // shrink-0 prevents squishing
              >
                {/* Image Card: Square + Rounded-3xl */}
                <div className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 bg-gray-200 rounded-xl">
                  <Image 
                    src={img.src} 
                    alt="Worker Profile" 
                    fill 
                    className="object-cover w-full h-full rounded-xl"
                    sizes="(max-width: 768px) 100px, 200px"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6 mb-12 md:mb-16 z-20 mt-4 md:mt-0"
          style={{ position: 'absolute', left: '25%',right: '25%', top: 'calc(50% - 180px)', transform: 'translateX(-50%)' }}
        >
          <h1 className="text-[50px] md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Your Gateway to Global <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
              Automotive Opportunities
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-4xl mx-auto text-[20px] font-medium">
            From a nation of 1.45 billion, we’re proud to represent India’s powerhouse of nearly 29 million talents
            from the Indian Automotive Industry, ready to drive Europe’s automotive industry into the future.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide text-5xl"
        >
          Choose the path that matches your goals.
        </motion.p>

        {/* --- Interactive Role Selection (Overlapping Cards) --- */}
        <div
          className="relative w-full flex items-center justify-center py-12"
          onMouseLeave={() => setHoveredRole(null)}
        >
          <div className="relative w-[95%] max-w-5xl h-[120px] md:h-[200px]">
            {/* Candidate Card - Left */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 ${hoveredRole === 'candidate' ? 'z-0 md:z-0' : 'z-0 md:z-0'}`}>
              <Card
                role="candidate"
                imageSrc="/candidates.png"
                className="rotate-0"
                isActive={hoveredRole === "candidate"}
                isInactive={hoveredRole === "employer"}
                onHover={() => setHoveredRole("candidate")}
                defaultTitle="For Candidates"
                expandedContent={{
                  title: "For Candidates",
                  subtitle:
                    "We help skilled professionals move from India to Europe with full support at every step.",
                  cta: "Find Your Dream Career",
                  theme: "light",
                }}
              />
            </div>

            {/* Employer Card - Right (Overlapping) */}
              <div className={`absolute right-10 top-1/2 -translate-y-1/2 ${hoveredRole === 'employer' ? 'z-50 md:z-50' : 'z-40 md:z-40'} md:left-[55%]`}>
              <Card
                role="employer"
                imageSrc="/employers.png"
                isActive={hoveredRole === "employer"}
                isInactive={hoveredRole === "candidate"}
                onHover={() => setHoveredRole("employer")}
                defaultTitle="For Employers"
                expandedContent={{
                  title: "For Employers",
                  subtitle:
                    "Hire skilled automotive professionals from India with fast, reliable, end-to-end recruitment support.",
                  cta: "Hire Top-Tier Talent",
                  theme: "dark",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background Elements */}
      {/* Removed to show background image */}
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

// --- Helper Components ---

interface CardProps {
  role: string;
  isActive: boolean;
  isInactive: boolean;
  onHover: () => void;
  defaultTitle: string;
  imageSrc: string;
  className?: string;
  dimensions?: {
    activeWidth?: number;
    defaultWidth?: number;
    shrunkWidth?: number;
    activeHeight?: number;
    defaultHeight?: number;
    activeBorderRadius?: number;
    defaultBorderRadius?: number;
  };
  expandedContent: {
    title: string;
    subtitle: string;
    cta: string;
    theme: "light" | "dark";
  };
}

function Card({
  isActive,
  isInactive,
  onHover,
  defaultTitle,
  imageSrc,
  className,
  dimensions,
  expandedContent,
}: CardProps) {
  const isDark = expandedContent.theme === "dark";

  // Default dimensions - CUSTOMIZE THESE VALUES
  const dims = {
    activeWidth: dimensions?.activeWidth || 600,
    defaultWidth: dimensions?.defaultWidth || 600,
    shrunkWidth: dimensions?.shrunkWidth || 200,
    activeHeight: dimensions?.activeHeight || 280,
    defaultHeight: dimensions?.defaultHeight || 180,
    activeBorderRadius: dimensions?.activeBorderRadius || 28,
    defaultBorderRadius: dimensions?.defaultBorderRadius || 40,
  };

  // Styles
  const baseClasses =
    "relative flex flex-col justify-center transition-colors duration-500 ease-out overflow-hidden cursor-pointer shadow-sm";

  const themeClasses = isActive
    ? isDark
      ? "bg-slate-950 text-white shadow-2xl shadow-slate-900/20"
      : "bg-white text-gray-900 shadow-2xl shadow-blue-900/5 border border-gray-100"
    : isDark
    ? "bg-black text-white"
    : "bg-white text-black border border-gray-200";

  return (
    <motion.div
      layout
      onMouseEnter={onHover}
      whileHover={{
        y: -22,
        scaleY: 1.05,
        rotate: isActive ? 0 : -0.6,
        boxShadow: isActive
          ? "0 32px 70px rgba(2,6,23,0.45)"
          : "0 20px 40px rgba(2,6,23,0.20)",
      }}
      whileTap={{ scale: 0.995 }}
      className={`${baseClasses} ${themeClasses} ${className || ""}`}
      initial={false}
      animate={{
        // Desktop sizes - now customizable
        // IMPORTANT: only the active (hovered) card changes size.
        // Non-active cards remain at `defaultWidth/defaultHeight` so
        // hovering one card does NOT alter the other's dimensions.
        width: isActive ? dims.activeWidth : dims.defaultWidth,
        height: isActive ? dims.activeHeight : dims.defaultHeight,
        borderRadius: isActive ? dims.activeBorderRadius : dims.defaultBorderRadius,
        boxShadow: isActive ? "0 20px 48px rgba(2,6,23,0.14)" : "0 8px 18px rgba(2,6,23,0.06)",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
        mass: 1,
      }}
      // Mobile override via style prop for simple responsiveness if strictly needed,
      // though typically layout animations are best left to Framer Motion entirely.
      // We use CSS classes to handle the stacking on mobile naturally.
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: isActive ? 1 : 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={imageSrc}
          alt={defaultTitle}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="relative z-10 w-full h-full p-6 md:p-10 flex flex-col justify-center">
        {/* Title Row */}
        <motion.div
          layout="position"
          className={`text-lg md:text-xl font-bold flex items-center justify-between w-full text-left ${
            isActive ? "mb-4 items-start" : "items-center"
          }`}
        >
          <span className="whitespace-nowrap">
            {isActive ? expandedContent.title : defaultTitle}
          </span>

          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={`p-2 rounded-full shrink-0 ${
                isDark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <MoveRight size={20} />
            </motion.div>
          )}
        </motion.div>

        {/* Expanded Content */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 5, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <p
                className={`text-sm md:text-base leading-relaxed max-w-[85%] text-left ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {expandedContent.subtitle}
              </p>

              <div className="mt-auto pt-2">
                <p
                  className={`text-lg font-bold flex items-center gap-2 text-left ${
                    isDark ? "text-blue-300" : "text-blue-700"
                  }`}
                >
                  {expandedContent.cta}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
