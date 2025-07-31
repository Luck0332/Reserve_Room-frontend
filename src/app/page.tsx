// app/page.tsx
import RoomCard from '../components/RoomCard'

const rooms = [
	{
		id: 1,
		title: 'ห้องพัก 1',
		image: '/images/room1.avif',
		price: 1100,
		rating: 4.5,
		location: 'กรุงเทพฯ',
	},
	{
		id: 2,
		title: 'ห้องพัก 2',
		image: '/images/room2.jpeg',
		price: 1200,
		rating: 4.2,
		location: 'เชียงใหม่',
	},
	{
		id: 3,
		title: 'ห้องพัก 3',
		image: '/images/room3.jpeg',
		price: 1300,
		rating: 4.8,
		location: 'ภูเก็ต',
	},
	{
		id: 4,
		title: 'ห้องพัก 4',
		image: '/images/room4.jpg',
		price: 1400,
		rating: 4.3,
		location: 'ขอนแก่น',
	},
	{
		id: 5,
		title: 'ห้องพัก 5',
		image: '/images/room5.jpg',
		price: 1500,
		rating: 4.7,
		location: 'พัทยา',
	},
	{
		id: 6,
		title: 'ห้องพัก 6',
		image: '/images/room6.jpg',
		price: 1600,
		rating: 4.6,
		location: 'หาดใหญ่',
	},
]

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 py-8">
				<h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
					รายการห้องพัก
				</h2>
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{rooms.map((room) => (
						<RoomCard
							key={room.id}
							title={room.title}
							image={room.image}
							price={room.price}
							rating={room.rating}
							location={room.location}
						/>
					))}
				</section>
			</div>
		</div>
	)
}
