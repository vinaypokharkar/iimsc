"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Globe } from "lucide-react";
import Image from "next/image";

// --- Types & Data ---

// Adjusted for a wider, semicircular arc
// rotate: tilts the image to point towards the center
// y: pushes the side images down to create the curve
const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80",
    rotate: -15,
    y: 120, // Lowest (Far Left)
    delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80",
    rotate: -10,
    y: 50, // Mid (Left)
    delay: 0.1,
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    rotate: -5,
    y: 20, // Inner (Left)
    delay: 0.2,
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80",
    rotate: 0,
    y: 0, // Highest (Center)
    delay: 0.3,
  },
  {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    rotate: 5,
    y: 20, // Inner (Right)
    delay: 0.4,
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
    rotate: 10,
    y: 50, // Mid (Right)
    delay: 0.5,
  },
  {
    src: "https://images.unsplash.com/photo-1574462811041-52939d9ee192?auto=format&fit=crop&w=400&q=80",
    rotate: 15,
    y: 90, // Lowest (Far Right)
    delay: 0.6,
  },
];

export default function LandingPage() {
  const [hoveredRole, setHoveredRole] = useState<
    "candidate" | "employer" | null
  >(null);

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 overflow-x-hidden ">
      {/* --- Navbar --- */}
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold italic text-xs ">
            IIMSC
          </div>
          <span className="font-bold text-blue-900 text-xl tracking-tight hidden sm:block">
            IIMSC Co
          </span>
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
      <section className="relative w-full max-w-7x2 mx-auto px-4 pt-10 pb-20 flex flex-col items-center text-center z-10">
        {/* 
           --- Semicircular Image Arc --- 
           We use a flex container with negative margins on mobile (to fit) 
           and wide gaps on desktop to create the spacious arc look.
        */}
        <div className="relative w-full flex justify-center mb-8 md:mb-2">
          {/* Container for the arc */}
          <div className="flex items-start justify-center gap-10 md:gap-6 lg:gap-8 pt-10 h-[400px] md:h-[300px]">
  {HERO_IMAGES.map((img, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: img.y, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: img.delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ 
        rotate: img.rotate,
      }}
      className="relative group"
    >
      {/* UPDATED: Added rounded-3xl for heavy rounded corners on squares */}
      <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-2 bg-gray-200">
        <Image 
          src={img.src} 
          alt="Worker Profile" 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100px, 200px"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
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
          className="max-w-4xl mx-auto space-y-6 mb-12 md:mb-16 relative z-20 mt-4 md:mt-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Your Gateway to Global <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
              Automotive Opportunities
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            From a nation of 1.45 billion, we're proud to represent India's
            powerhouse of nearly 29 million talents from the Indian Automotive
            Industry, ready to drive Europe's automotive industry into the
            future.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide"
        >
          Choose the path that matches your goals.
        </motion.p>

        {/* --- Interactive Role Selection --- */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 w-full h-auto md:h-[240px]"
          onMouseLeave={() => setHoveredRole(null)}
        >
          {/* Candidate Card */}
          <Card
            role="candidate"
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

          {/* Employer Card */}
          <Card
            role="employer"
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
      </section>

      {/* Background Elements */}
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent -z-10 pointer-events-none" />
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
  expandedContent,
}: CardProps) {
  const isDark = expandedContent.theme === "dark";

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
      className={`${baseClasses} ${themeClasses}`}
      initial={false}
      animate={{
        // Desktop sizes
        width: isActive ? 600 : isInactive ? 220 : 260,
        height: isActive ? 240 : 70,
        borderRadius: isActive ? 24 : 35,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 24,
        mass: 1,
      }}
      // Mobile override via style prop for simple responsiveness if strictly needed,
      // though typically layout animations are best left to Framer Motion entirely.
      // We use CSS classes to handle the stacking on mobile naturally.
    >
      <div className="relative w-full h-full p-6 md:p-10 flex flex-col justify-center">
        {/* Title Row */}
        <motion.div
          layout="position"
          className={`text-lg md:text-xl font-bold flex items-center justify-between w-full ${
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
              className={`p-2 rounded-full ${
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
                className={`text-sm md:text-base leading-relaxed max-w-[85%] ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {expandedContent.subtitle}
              </p>

              <div className="mt-auto pt-2">
                <p
                  className={`text-lg font-bold flex items-center gap-2 ${
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
