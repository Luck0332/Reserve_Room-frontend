// app/rooms/page.tsx
import RoomCard from '@/components/rooms/RoomCard';
import { getRooms } from '@/lib/api'; // สมมติมี function ดึงข้อมูลจาก backend

interface RoomsPageProps {
  searchParams: {
    location?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
  };
}

export default async function RoomsPage({ searchParams }: RoomsPageProps) {
  const rooms = await getRooms({
    ...searchParams,
    guests: searchParams.guests ? Number(searchParams.guests) : undefined,
  }); // Server Component fetching data

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">
        ห้องพักที่ค้นพบ ({rooms.length} ห้อง)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.length > 0 ? (
          rooms.map(room => <RoomCard key={room.id} room={room} />)
        ) : (
          <p className="col-span-full text-center text-gray-600">
            ไม่พบห้องพักตามเงื่อนไขที่ระบุ
          </p>
        )}
      </div>
    </div>
  );
}

