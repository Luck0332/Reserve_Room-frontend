// app/layout.tsx
import './globals.css'; // ตรวจสอบว่ามีบรรทัดนี้หรือไม่ และ path ถูกต้อง
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ระบบจองห้องพัก',
  description: 'จองห้องพักง่ายๆ ในไม่กี่คลิก',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}