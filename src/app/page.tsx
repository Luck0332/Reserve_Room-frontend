// app/page.tsx
import RoomCard from '../components/RoomCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">รายการห้องพัก</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <RoomCard
              key={id}
              title={`ห้องพัก ${id}`}
              image={`/rooms/room${id}.jpg`}
              price={1000 + id * 100}
              rating={4.5}
              location="กรุงเทพฯ"
            />
          ))}
        </section>
      </div>
    </div>
  )
}
