import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <header className="bg-[#1E1E1E] py-3 px-6 flex items-center justify-between border-b border-[#2D2D2D]">
      <div className="flex items-center">
        <button className="mr-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="flex-1 max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Explore"
            className="w-full bg-[#2D2D2D] text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400">
              <path d="M12 19c-4.3 0-7.8-3.4-7.8-7.8 0-4.3 3.4-7.8 7.8-7.8 4.3 0 7.8 3.4 7.8 7.8 0 4.3-3.4 7.8-7.8 7.8z"></path>
              <path d="M15 9l-6 6"></path>
              <path d="M9 9l6 6"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
          JD
        </div>
      </div>
    </header>
  );
};

export default Header;
