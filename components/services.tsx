import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-instrumental-sans">
          Explore Our <span className="text-primary-dark">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden">
            <Image
              src="/candidate-card-bg.png"
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
  );
};

export default Services;
