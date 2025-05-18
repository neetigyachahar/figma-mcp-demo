import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryProps {
  title: string;
  image: string;
}

const CategoryItem: React.FC<CategoryProps> = ({ title, image }) => {
  return (
    <Link href="#" className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-3 min-w-[100px]">
      <div className="relative w-12 h-12 mb-1">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
};

const CategorySection = () => {
  const categories = [
    { title: 'Chair', image: '/images/categories/chair.svg' },
    { title: 'Sofa', image: '/images/categories/sofa.svg' },
    { title: 'Desk', image: '/images/categories/desk.svg' },
  ];

  return (
    <section className="px-5 py-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <Link href="#" className="text-orange-500 text-sm flex items-center">
          See all
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category, index) => (
          <CategoryItem key={index} title={category.title} image={category.image} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
