import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EmployerCTAProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  priority?: boolean;
}

const EmployerCTA: React.FC<EmployerCTAProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageClassName = "object-cover ",
  priority = false,
}) => {
  return (
    <section className="relative rounded-[40px] overflow-hidden h-[400px] md:h-[500px] w-full shadow-lg">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={imageClassName}
        priority={priority}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-gray-200 text-lg mb-8 font-light">
          {description}
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#33348D] px-10 py-4 rounded-full font-bold w-fit hover:bg-gray-100 transition-colors shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default EmployerCTA;
