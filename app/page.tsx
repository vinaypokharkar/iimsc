"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Types & Data ---

// High-quality professional headshots arranged in columns
const HERO_COLUMNS = [
  {
    id: 1,
    offset: "translate-y-16 md:translate-y-32",
    images: [
      { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[4/5]", width: "w-16 md:w-24 lg:w-32" },
      { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", aspect: "aspect-square", width: "w-16 md:w-24 lg:w-32", className: "mt-4" }
    ]
  },
  {
    id: 2,
    offset: "translate-y-8 md:translate-y-16",
    images: [
      { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[3/4]", width: "w-20 md:w-28 lg:w-40" }
    ]
  },
  {
    id: 3,
    offset: "translate-y-2 md:translate-y-4",
    images: [
      { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", aspect: "aspect-square", width: "w-16 md:w-24 lg:w-36" },
      { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[4/5]", width: "w-16 md:w-24 lg:w-36", className: "mt-4" }
    ]
  },
  {
    id: 4,
    offset: "-translate-y-4 md:-translate-y-8",
    images: [
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[3/4]", width: "w-20 md:w-32 lg:w-44" }
    ]
  },
  {
    id: 5,
    offset: "translate-y-6 md:translate-y-12", // Center peak
    images: [
      { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[4/5]", width: "w-24 md:w-36 lg:w-48" }
    ]
  },
  {
    id: 6,
    offset: "-translate-y-4 md:-translate-y-8",
    images: [
      { src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[3/4]", width: "w-20 md:w-32 lg:w-44" }
    ]
  },
  {
    id: 7,
    offset: "translate-y-2 md:translate-y-4",
    images: [
      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", aspect: "aspect-square", width: "w-16 md:w-24 lg:w-36" },
      { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[4/5]", width: "w-16 md:w-24 lg:w-36", className: "mt-4" }
    ]
  },
  {
    id: 8,
    offset: "translate-y-8 md:translate-y-16",
    images: [
      { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[3/4]", width: "w-20 md:w-28 lg:w-40" }
    ]
  },
  {
    id: 9,
    offset: "translate-y-16 md:translate-y-32",
    images: [
      { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80", aspect: "aspect-[4/5]", width: "w-16 md:w-24 lg:w-32" },
      { src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80", aspect: "aspect-square", width: "w-16 md:w-24 lg:w-32", className: "mt-4 " }
    ]
  }
];

export default function LandingPage() {
  return (
    <main className="font-instrumental-sans text-gray-900 selection:bg-[#5C4DFF]/20 flex-1 flex flex-col justify-center items-center w-full pb-16 md:pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <section className="w-full max-w-[95rem] mx-auto px-4 flex flex-col items-center text-center z-10 pt-10 md:pt-20">
        
        {/* --- Static Image Grid (Wave Effect) --- */}
        <div className="relative w-full flex justify-center mt-4 mb-10 md:mb-20">
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 w-full px-2 sm:px-4 flex-nowrap">
            {HERO_COLUMNS.map((col, colIndex) => {
               // Responsive visibility: Show center columns on mobile, expand outwards on larger screens
               // Center index is 4. 
               // Mobile: 3,4,5 (3 cols)
               // md: 2,3,4,5,6 (5 cols)
               // lg: 1,2,3,4,5,6,7 (7 cols)
               // xl: 0,1,2,3,4,5,6,7,8 (9 cols)
               let visibilityClass = "flex";
               if (colIndex === 0 || colIndex === 8) visibilityClass = "hidden xl:flex";
               else if (colIndex === 1 || colIndex === 7) visibilityClass = "hidden lg:flex";
               else if (colIndex === 2 || colIndex === 6) visibilityClass = "hidden md:flex";

               return (
                <div
                  key={colIndex}
                  className={`relative flex-col items-center transform ${col.offset} transition-transform duration-500 ${visibilityClass}`}
                >
                  {/* Dashed Line */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-[200%] border-l border-dashed border-gray-200 -z-10 hidden md:block opacity-60" />

                  {/* Images in Column */}
                  {col.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className={`relative overflow-hidden border-[2px] md:border-[4px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gray-50 rounded-[1rem] md:rounded-[1.5rem] ${img.aspect} ${img.width} ${img.className || ''}`}
                    >
                      <Image 
                        src={img.src} 
                        alt="Professional Talent" 
                        fill 
                        priority={colIndex >= 3 && colIndex <= 5}
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100px, 200px"
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12 z-20 flex flex-col items-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.1] md:leading-[0.95] tracking-tight text-gray-900">
            Your Gateway to <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#5C4DFF] to-[#33348D] bg-clip-text text-transparent">Global Opportunities</span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-light pt-4">
            Connecting India's <span className="bg-gradient-to-r from-[#5C4DFF] to-[#33348D] bg-clip-text text-transparent font-medium">29 million skilled professionals</span> with Europe's leading industries.
          </p>
        </div>

        {/* --- Interactive Role Selection --- */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <Card
            title="For Candidates"
            subtitle="Launch your international career."
            imageSrc="/candidates.png"
            href="/candidates"
            theme="light"
          />
          <Card
            title="For Employers"
            subtitle="Hire pre-vetted automotive talent."
            imageSrc="/employers.png"
            href="/employers"
            theme="dark"
          />
        </div>

      </section>
    </main>
  );
}

// --- Helper Components ---

interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  href: string;
  theme: "light" | "dark";
}

function Card({ title, subtitle, imageSrc, href, theme }: CardProps) {
  const isDark = theme === "dark";

  return (
    <Link href={href} className="block w-full group">
      <div className={`relative w-full min-h-[160px] md:min-h-[200px] h-auto rounded-[2rem] overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.02] ${isDark ? 'bg-black border border-gray-800' : 'bg-white border border-gray-100 shadow-sm'}`}>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
           <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-white/80'}`} />
        </div>

        {/* Default Background (when not hovered) */}
        <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 ${isDark ? 'bg-[#111]' : 'bg-white'}`}>
           <div className={`absolute inset-0 opacity-[0.03] bg-noise`} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-2xl md:text-3xl font-medium mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h3>
              <p className={`text-sm md:text-base max-w-xs transition-colors duration-300 ${
                isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-500 group-hover:text-gray-700'
              }`}>
                {subtitle}
              </p>
            </div>
            
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-white/10 text-white group-hover:bg-gradient-to-r group-hover:from-[#5C4DFF] group-hover:to-[#33348D] group-hover:text-white' 
                : 'bg-black/5 text-black group-hover:bg-gradient-to-r group-hover:from-[#5C4DFF] group-hover:to-[#33348D] group-hover:text-white'
            }`}>
              <ArrowUpRight size={20} />
            </div>
          </div>

          <div className={`flex items-center gap-2 font-medium text-xs uppercase tracking-widest transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
             isDark ? 'text-white' : 'text-black'
          }`}>
            Explore <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}