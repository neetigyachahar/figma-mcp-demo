import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, discountPrice, image }) => {
  return (
    <div className="min-w-[160px] max-w-[180px]">
      <div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-square mb-2">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover"
        />
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>
      <p className="text-gray-500 text-sm">{name}</p>
      <div className="flex items-center space-x-2">
        {discountPrice ? (
          <>
            <p className="font-semibold text-red-500">${discountPrice}</p>
            <p className="text-gray-400 text-sm line-through">${price}</p>
          </>
        ) : (
          <p className="font-semibold">${price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
