'use client';
// components/rooms/RoomCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/lib/types';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <Link href={`/rooms/${room.id}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={room.imageUrl || '/images/placeholder-room.jpg'}
          alt={room.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{room.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{room.location}</p>
        <div className="flex justify-between items-baseline mt-3">
          <span className="text-blue-600 text-2xl font-bold">฿{room.price}</span>
          <span className="text-gray-500 text-sm">/ คืน</span>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;

