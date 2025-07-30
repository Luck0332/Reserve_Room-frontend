import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Room Booking App',
  description: 'Booking website clone from Argoda-style',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
