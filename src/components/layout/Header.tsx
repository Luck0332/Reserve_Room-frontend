// components/layout/Header.tsx
'use client'; // เป็น Client Component ถ้ามีเมนู responsive หรือ user info

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// import { useSession, signOut } from 'next-auth/react'; // ถ้าใช้ next-auth

const Header: React.FC = () => {
  // const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
          <span className="text-2xl font-bold text-blue-700">BookMe!</span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/">หน้าหลัก</Link>
          <Link href="/rooms">ห้องพักทั้งหมด</Link>
          {/* {session ? (
            <>
              <Link href="/dashboard">แดชบอร์ด</Link>
              <button onClick={() => signOut()} className="hover:text-blue-600">ออกจากระบบ</button>
            </>
          ) : (
            <Link href="/auth/login">เข้าสู่ระบบ</Link>
          )} */}
          <Link href="/auth/login">เข้าสู่ระบบ</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>หน้าหลัก</Link>
            <Link href="/rooms" onClick={() => setIsMenuOpen(false)}>ห้องพักทั้งหมด</Link>
            {/* {session ? (
              <>
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>แดชบอร์ด</Link>
                <button onClick={() => { signOut(); setIsMenuOpen(false); }} className="text-left hover:text-blue-600">ออกจากระบบ</button>
              </>
            ) : (
              <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>เข้าสู่ระบบ</Link>
            )} */}
            <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>เข้าสู่ระบบ</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;