import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Instrument_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

const instrumentalSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrumental-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "IIMSC - Talent Beyond Borders",
  description: "Cross-border automotive hiring, relocation, and mobility orchestration between India and Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentalSans.variable} ${playfairDisplay.variable} antialiased bg-white relative min-h-screen`}>
        {/* Global Background */}
        <div className="fixed inset-0 bg-noise opacity-20 z-0 pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-to-br from-[#5C4DFF]/5 via-white to-[#33348D]/5 z-0 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
