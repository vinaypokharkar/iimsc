"use client";

import React from "react";
import Image from "next/image";
import { Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Metadata } from "next";


// --- Dummy Data ---

// 1. Testimonial Data (The Text Cards)
const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    role: "Automotive Engineer",
    quote: "The support I received from IIMSC was incredible. From the initial interview to landing in Munich, they were with me every step of the way.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Mechanical Designer",
    quote: "I never thought moving to Europe would be this smooth. The visa guidance was perfect, and the team was always there to answer my questions.",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    role: "Production Manager",
    quote: "Highly professional service. They understood my skills perfectly and matched me with a top-tier German manufacturer.",
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "Quality Control",
    quote: "The cultural integration training really helped me settle in quickly. I felt prepared before I even boarded the flight.",
  },
  {
    id: 5,
    name: "Mike Chen",
    role: "EV Specialist",
    quote: "Finding a job in the EV sector was my dream. IIMSC made it a reality with their extensive network of employers.",
  },
  {
    id: 6,
    name: "Anita Roy",
    role: "Logistics Coordinator",
    quote: "Transparent, ethical, and fast. I recommend IIMSC to any Indian professional looking to build a career abroad.",
  },
];

// 2. Video Placeholder Data
// We create an array to map over. In a real app, these would be objects with specific thumbnail URLs.
const VIDEO_ITEMS = Array.from({ length: 6 }); // 6 items per row

// New video data with actual URLs
const VIDEO_DATA = [
  { id: 1, thumbnailUrl: '/services-bg.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 2, thumbnailUrl: '/services-bg.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 3, thumbnailUrl: '/services-bg.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 4, thumbnailUrl: '/services-bg.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 5, thumbnailUrl: '/services-bg.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 6, thumbnailUrl: '/services-bg.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

export default function TestimonialsPage() {

  return (
    <main className="min-h-screen bg-gray-100 font-sans text-gray-900 pb-20">
      
      {/* --- 1. HERO SECTION (Header) --- */}
      <section className="relative w-full h-[200px] sm:h-[200px] lg:h-[350px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          {/* REPLACE with your local image path, e.g., src="/images/thumbs-up-guy.jpg" */}
          <Image
            src="/testimonials-new.png"
            alt="Success Story"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent mix-blend-overlay" />
        </div>

        {/* "TESTIMONIALS" Huge Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-end z-10 pointer-events-none pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-[10vw] sm:text-[10vw] md:text-[6vw] lg:text-[4vw] font-bold text-white tracking-wide leading-none select-none">
              TESTIMONIALS
            </h1>
          </div>
        </div>
      </section>


      {/* --- 2. VIDEO MARQUEE SECTION --- */}
      <section className="py-12 space-y-6 overflow-hidden bg-gray-100">
        
        {/* Top Row: Right to Left (Moves Left) */}
        <MarqueeRow direction="left" speed={25}>
          {VIDEO_DATA.map((video) => (
            <VideoThumbnail 
              key={`top-${video.id}`}
              video={video}
            />
          ))}
        </MarqueeRow>

        {/* Bottom Row: Left to Right (Moves Right) */}
        <MarqueeRow direction="right" speed={25}>
          {VIDEO_DATA.map((video) => (
            <VideoThumbnail 
              key={`bottom-${video.id}`}
              video={video}
            />
          ))}
        </MarqueeRow>

      </section>


      {/* --- 3. CANDIDATE STORIES SECTION --- */}
      <section className="max-w-[1650px] mx-auto px-4 pt-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-[#5C4DFF]/90  to-[#33348D]/80 bg-clip-text text-transparent">
            <span className="">Candidate Stories</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-3xl max-w-3xl mx-auto">
            Hear directly from professionals who have successfully built their careers in Europe with IIMSC.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((story) => (
            <TestimonialCard key={story.id} data={story} />
          ))}
        </div>

      </section>
    </main>
  );
}


// --- SUB-COMPONENTS ---

// A. Video Thumbnail Component
function VideoThumbnail({
  video,
}: {
  video: typeof VIDEO_DATA[0];
}) {
  return (
    <div
      className="relative min-w-[280px] h-[180px] md:min-w-[350px] md:h-[220px] bg-gray-500 rounded-xl overflow-hidden shadow-md group cursor-pointer hover:opacity-90 transition-opacity mx-3"
    >
      <Image src={video.thumbnailUrl} alt="Video thumbnail" fill className="object-cover" />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play fill="black" className="text-black ml-1 w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
}

// B. Testimonial Card Component
function TestimonialCard({ data }: { data: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white p-8 rounded-2xl max-w-3xl  shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-[#6C5CE7] fill-[#6C5CE7]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 text-sm md:text-base  leading-relaxed">
        "{data.quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative shrink-0">
           {/* Replace with local image if available */}
           {/* <Image src="/path/to/avatar.jpg" fill className="object-cover" /> */}
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 text-xl">{data.name}</h4>
          <p className="text-xs text-gray-500 uppercase tracking-wide">{data.role}</p>
        </div>
      </div>
    </div>
  );
}

// C. Marquee Row Component (Handles the infinite scroll animation)
function MarqueeRow({ 
  children, 
  direction = "left", 
  speed = 20
}: { 
  children: React.ReactNode; 
  direction?: "left" | "right"; 
  speed?: number;
}) {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? "-50%" : 0,
      transition: {
        duration: speed,
        repeat: Infinity,
        // Use a numeric easing array (cubic-bezier) instead of a string to satisfy the typings
        // [0, 0, 1, 1] is equivalent to a linear easing curve
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative flex w-full overflow-hidden select-none mask-fade">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate="animate"
      >
        {/* We double the children to create the seamless loop effect */}
        <div className="flex">
          {children}
        </div>
        <div className="flex">
          {children}
        </div>
      </motion.div>
    </div>
  );
}