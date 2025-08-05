// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Logo & Description */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center mb-4">
            <Image src="/images/logo-white.png" alt="Logo White" width={30} height={30} className="mr-2" />
            <span className="text-2xl font-bold text-white">BookMe!</span>
          </Link>
          <p className="text-sm">
            ค้นหาและจองห้องพักในฝันของคุณได้อย่างง่ายดายและรวดเร็ว
            ประสบการณ์การเดินทางที่สมบูรณ์แบบเริ่มต้นที่นี่
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">ลิงก์ด่วน</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400 transition-colors duration-200">หน้าหลัก</Link></li>
            <li><Link href="/rooms" className="hover:text-blue-400 transition-colors duration-200">ห้องพักทั้งหมด</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-200">เกี่ยวกับเรา</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">ติดต่อเรา</Link></li>
          </ul>
        </div>

        {/* Section 3: Legal & Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">ข้อมูลและสนับสนุน</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors duration-200">นโยบายความเป็นส่วนตัว</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-blue-400 transition-colors duration-200">ข้อกำหนดและเงื่อนไข</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400 transition-colors duration-200">คำถามที่พบบ่อย</Link></li>
          </ul>
        </div>

        {/* Section 4: Contact Info & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">ติดต่อเรา</h3>
          <p className="text-sm mb-2">
            123 ถนนจองห้องพัก, แขวงสุขใจ, เขตบริการ, กรุงเทพฯ 10100
          </p>
          <p className="text-sm mb-2">
            โทร: <a href="tel:+6612345678" className="hover:text-blue-400">02-123-4567</a>
          </p>
          <p className="text-sm mb-4">
            อีเมล: <a href="mailto:info@bookme.com" className="hover:text-blue-400">info@bookme.com</a>
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              {/* Facebook Icon SVG (or use a library like react-icons) */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.34 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              {/* Twitter Icon SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.162 5.603a.75.75 0 0 0-.29-.623c-1.077-.67-2.345-.735-3.61-.252-.295.111-.53.287-.73.493a8.941 8.941 0 0 0-2.321-.774c-1.3-.223-2.61-.223-3.91 0A8.942 8.942 0 0 0 6.64 4.14a.75.75 0 0 0-.73-.493c-1.265-.483-2.533-.418-3.61.252a.75.75 0 0 0-.29.623c.09.91.26 1.8.497 2.651.25.918.528 1.77.854 2.61a.75.75 0 0 0 .54.51c.96.223 1.93.334 2.9.334s1.94-.111 2.9-.334a.75.75 0 0 0 .54-.51c.326-.84.604-1.692.854-2.61.237-.851.407-1.741.497-2.651z" clipRule="evenodd" /></svg>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        &copy; {currentYear} BookMe! All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;