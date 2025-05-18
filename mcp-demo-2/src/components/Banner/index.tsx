import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="px-5 py-2">
      <div className="relative w-full h-40 bg-indigo-50 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/sofa-banner.svg"
            alt="High quality sofa"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 p-5 flex flex-col justify-between h-full">
          <div>
            <p className="text-gray-700 text-sm">High quality sofa</p>
            <p className="text-gray-700 text-sm">started</p>
            <h3 className="text-4xl font-bold text-indigo-900 mt-1">70% <span className="text-lg">off</span></h3>
          </div>
          <Link href="#" className="text-gray-700 text-sm flex items-center">
            See all items
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
