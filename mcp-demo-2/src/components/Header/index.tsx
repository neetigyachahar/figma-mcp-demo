import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 py-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Explore What</h1>
        <h1 className="text-2xl font-bold">Your Home Needs</h1>
      </div>
      <div className="relative">
        <div className="w-10 h-10 flex items-center justify-center bg-orange-50 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <div className="absolute top-0 right-0 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">1</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
