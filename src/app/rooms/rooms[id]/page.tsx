// app/rooms/[roomId]/page.tsx
import { getRoomDetails } from '@/lib/api';
import RoomGallery from '@/components/rooms/RoomGallery';
// import BookingCalendar from '@/components/booking/BookingCalendar';
import RoomReviews from '@/components/rooms/RoomReviews';
import BookingCalendar from '@/components/rooms/BookingCalendar';

interface RoomDetailsPageProps {
  params: {
    roomId: string;
  };
}

export default async function RoomDetailsPage({ params }: RoomDetailsPageProps) {
  const room = await getRoomDetails(params.roomId); // Server Component fetches data

  if (!room) {
    return <div className="text-center py-10">ไม่พบห้องพักที่ระบุ</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-4">{room.name}</h1>
      <p className="text-xl text-gray-600 mb-6">{room.location}</p>

      <RoomGallery images={room.images} roomName={''} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-3">เกี่ยวกับห้องพัก</h2>
          <p className="text-gray-700 mb-6">{room.description}</p>

          <h3 className="text-xl font-semibold mb-2">สิ่งอำนวยความสะดวก</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {room.amenities.map((amenity: string, index: number) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">รีวิว</h3>
          <RoomReviews reviews={room.reviews} />
        </div>

        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">จองห้องพัก</h2>
          <p className="text-3xl font-bold text-blue-600 mb-4">
            ฿{room.pricePerNight} / คืน
          </p>
          <BookingCalendar roomId={room.id} /> {/* Client Component */}
          {/* BookingForm อาจจะซ่อนไว้แล้วแสดงเมื่อเลือกวันเสร็จ */}
        </div>
      </div>
    </div>
  );
}