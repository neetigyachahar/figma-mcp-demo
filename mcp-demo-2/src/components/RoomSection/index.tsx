import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RoomCardProps {
  name: string;
  image: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ name, image }) => {
  return (
    <Link href="#" className="relative min-w-[110px] h-36 rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
        <p className="text-sm font-medium text-white">{name}</p>
      </div>
    </Link>
  );
};

const RoomSection = () => {
  const rooms = [
    { name: 'Dining Room', image: '/images/rooms/dining-room.svg' },
    { name: 'Bed Room', image: '/images/rooms/bed-room.svg' },
    { name: 'Office Room', image: '/images/rooms/office-room.svg' },
  ];

  return (
    <section className="px-5 py-3">
      <h2 className="text-xl font-bold mb-2">Rooms</h2>
      <p className="text-gray-500 text-sm mb-4">Furniture for every corners in your home</p>

      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {rooms.map((room, index) => (
          <RoomCard key={index} name={room.name} image={room.image} />
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
