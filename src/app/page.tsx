// app/page.tsx
import RoomSearchForm from '@/components/forms/RoomSearchForm';
import RoomCard from '@/components/rooms/RoomCard'; // สมมติว่ามี RoomCard component

export default function HomePage() {
  // สมมติว่าดึงข้อมูลห้องพักยอดนิยมมาแสดง
  const featuredRooms = [
    {
      id: '1',
      name: 'ห้องวิวทะเล',
      price: 1500,
      imageUrl: '/images/room1.avif',
      location: 'พัทยา',
      pricePerNight: 1500,
      description: 'ห้องพักวิวทะเลสุดหรู พร้อมสิ่งอำนวยความสะดวกครบครัน',
      amenities: ['Wi-Fi', 'แอร์', 'ทีวี', 'อาหารเช้า'],
      images: ['/images/room1.jpg'],
      reviews: [],
      capacity: 2,
    },
    {
      id: '2',
      name: 'ห้อง Deluxe',
      price: 2000,
      imageUrl: '/images/room2.jpg',
      location: 'กรุงเทพฯ',
      pricePerNight: 2000,
      description: 'ห้อง Deluxe ใจกลางเมือง สะดวกสบาย',
      amenities: ['Wi-Fi', 'แอร์', 'ทีวี', 'อ่างอาบน้ำ'],
      images: ['/images/room2.jpg'],
      reviews: [],
      capacity: 3,
    },
  ];

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-6">ค้นหาห้องพักในฝันของคุณ</h1>
      <div className="max-w-3xl mx-auto mb-10">
        <RoomSearchForm />
      </div>

      <h2 className="text-3xl font-semibold mb-8">ห้องพักยอดนิยม</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}