// app/components/RoomCard.tsx
interface Props {
  title: string
  image: string
  price: number
  rating: number
  location: string
}

export default function RoomCard({ title, image, price, rating, location }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-red-500 font-bold">{price.toLocaleString()} ฿</span>
          <span className="text-yellow-500 text-sm">★ {rating}</span>
        </div>
      </div>
    </div>
  )
}
