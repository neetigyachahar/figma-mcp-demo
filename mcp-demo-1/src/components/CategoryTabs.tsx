import { useState } from 'react';

const CategoryTabs = () => {
  const categories = [
    { id: 'all', name: 'All', active: true },
    { id: 'gaming', name: 'Gaming' },
    { id: 'thoughts', name: 'Thoughts' },
    { id: 'music', name: 'Music' },
    { id: 'trailers', name: 'Trailers' },
    { id: 'mixes', name: 'Mixes' },
    { id: 'avatar', name: 'Avatar' },
    { id: 'film-criticism', name: 'Film Criticism' },
    { id: 'korean-dramas', name: 'Korean Dramas' },
    { id: 'characters', name: 'Characters' },
    { id: 'acting', name: 'Acting' },
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  return (
    <div className="overflow-x-auto py-2 px-4">
      <div className="flex space-x-4 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category.id
                ? 'bg-white text-black'
                : 'bg-[#2D2D2D] text-white hover:bg-[#3D3D3D]'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
