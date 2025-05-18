import React from 'react';
import Link from 'next/link';
import ProductCard from '../ProductCard';

const PopularSection = () => {
  const popularProducts = [
    {
      name: 'Sverom chair',
      price: 400,
      image: '/images/products/sverom-chair.svg'
    },
    {
      name: 'Norrviken chair and table',
      price: 999,
      image: '/images/products/norrviken-chair.svg'
    },
    {
      name: 'Ektorp sofa',
      price: 599,
      image: '/images/products/ektorp-sofa.svg'
    },
    {
      name: 'Jan Strandganvik sofa',
      price: 899,
      discountPrice: 599,
      image: '/images/products/strandganvik-sofa.svg'
    },
  ];

  return (
    <section className="px-5 py-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Popular</h2>
        <Link href="#" className="text-orange-500 text-sm flex items-center">
          See all
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {popularProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            discountPrice={product.discountPrice}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
