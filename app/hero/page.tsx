import React from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import Services from '@/components/services';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="font-instrumental-sans">
            <h1 className="text-6xl font-bold">
              Talent <span className="text-primary-dark italic">Beyond</span> Borders
            </h1>
          </div>
          <div>
            <p className="text-gray-600 text-base font-medium">
              From a nation of 1.45 billion, we’re proud to represent India’s powerhouse of nearly 29 million talents from the Indian Automotive Industry, ready to drive Europe’s automotive industry into the future.
            </p>
          </div>
        </div>
        <div className="mt-12 relative flex justify-center items-center">
          <video
            src="/hero-video.mp4" // Replace with your video file path
            autoPlay
            muted
            loop
            playsInline
            className="w-350 h-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
           
          </div>
        </div>
      </div>
      <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-instrumental-sans">
          Explore Our <span className="text-primary-dark">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden">
            <Image
              src="/candiate.png"
              alt="For Candidates"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20 flex flex-col justify-end h-full p-8 text-white">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">For Candidates</CardTitle>
                <CardDescription className="text-white">
                  We don’t just hire many—we hire right. Here, it’s quality over quantity: prestigious employers meet motivated professionals.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/candidates" className="bg-primary-dark text-white py-3 px-6 rounded-md flex items-center justify-between w-full">
                  Explore More <ArrowRight className="ml-2" />
                </Link>
              </CardFooter>
            </div>
          </Card>
          <Card className="relative overflow-hidden">
            <Image
              src="/company-card-bg.png"
              alt="For Companies"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20 flex flex-col justify-end h-full p-8 text-white">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">For Companies</CardTitle>
                <CardDescription className="text-white">
                  We don’t just hire many—we hire right. Here, it’s quality over quantity: prestigious employers meet motivated professionals.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/companies" className="bg-primary-dark text-white py-3 px-6 rounded-md flex items-center justify-between w-full">
                  Explore More <ArrowRight className="ml-2" />
                </Link>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroPage;
