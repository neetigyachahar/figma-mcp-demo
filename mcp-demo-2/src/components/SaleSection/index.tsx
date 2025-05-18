import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SaleSection = () => {
  return (
    <section className="px-5 py-3">
      <div className="relative w-full h-32 bg-orange-50 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/sale-banner.svg"
            alt="Sale banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 p-5 flex flex-col justify-center h-full">
          <h3 className="text-2xl font-bold text-orange-500">Sale</h3>
          <p className="text-orange-800 mt-1">
            All chair up to <span className="font-bold">70%</span> off
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
