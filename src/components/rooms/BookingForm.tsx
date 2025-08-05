// components/forms/BookingForm.tsx
'use client'; // เป็น Client Component เพราะเป็นฟอร์มที่มี interaction

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createBooking } from '@/lib/api'; // สมมติว่ามีฟังก์ชันนี้ใน lib/api
import { Room } from '@/lib/types'; // Import Room type
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal'; // สำหรับ Modal ยืนยัน/แจ้งเตือน

interface BookingFormProps {
  room: Room;
  checkInDate: string;  // ได้รับมาจาก BookingCalendar หรือ SearchForm
  checkOutDate: string; // ได้รับมาจาก BookingCalendar หรือ SearchForm
  totalPrice: number;   // คำนวณมาจาก BookingCalendar
  numberOfNights: number; // คำนวณมาจาก BookingCalendar
}

const BookingForm: React.FC<BookingFormProps> = ({
  room,
  checkInDate,
  checkOutDate,
  totalPrice,
  numberOfNights,
}) => {
  const router = useRouter();
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // ตรวจสอบว่าวันที่ถูกเลือกแล้วหรือไม่
  const isFormValid = guestName && guestEmail && guestPhone && checkInDate && checkOutDate && totalPrice > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmationModalOpen(true); // เปิด Modal เพื่อยืนยันข้อมูล
  };

  const confirmBooking = async () => {
    setIsLoading(true);
    setError(null);
    setIsConfirmationModalOpen(false); // ปิด Modal ยืนยัน

    try {
      const bookingData = {
        roomId: room.id,
        checkInDate,
        checkOutDate,
        totalPrice,
        guestName,
        guestEmail,
        guestPhone,
        userId: 'temp-user-id', // TODO: แทนที่ด้วย ID ผู้ใช้จริงจากระบบ Auth
      };

      const newBooking = await createBooking(bookingData);
      console.log('Booking created:', newBooking);
      router.push(`/booking/success?bookingId=${newBooking.id}`);
    } catch (err: any) {
      console.error('Failed to create booking:', err);
      setError(err.message || 'เกิดข้อผิดพลาดในการจอง กรุณาลองใหม่');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">สรุปการจอง</h2>
      <div className="mb-4 p-4 bg-blue-50 rounded-md border border-blue-200">
        <p className="text-lg font-semibold">{room.name}</p>
        <p className="text-gray-700">เข้าพัก: {checkInDate}</p>
        <p className="text-gray-700">ออก: {checkOutDate}</p>
        <p className="text-gray-700">จำนวน: {numberOfNights} คืน</p>
        <p className="text-2xl font-bold text-blue-600 mt-2">ราคารวม: ฿{totalPrice.toLocaleString()}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อ-นามสกุล ผู้เข้าพัก
          </label>
          <Input
            id="guestName"
            type="text"
            placeholder="ชื่อ-นามสกุล"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="guestEmail" className="block text-sm font-medium text-gray-700 mb-1">
            อีเมล
          </label>
          <Input
            id="guestEmail"
            type="email"
            placeholder="example@email.com"
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="guestPhone" className="block text-sm font-medium text-gray-700 mb-1">
            เบอร์โทรศัพท์
          </label>
          <Input
            id="guestPhone"
            type="tel"
            placeholder="0XX-XXX-XXXX"
            value={guestPhone}
            onChange={(e) => setGuestPhone(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md" role="alert">
            {error}
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={!isFormValid || isLoading}>
          {isLoading ? 'กำลังดำเนินการ...' : 'ยืนยันการจอง'}
        </Button>
      </form>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        title="ยืนยันข้อมูลการจอง"
      >
        <p className="mb-4">กรุณาตรวจสอบข้อมูลก่อนยืนยันการจอง:</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>ห้องพัก:</strong> {room.name}</li>
          <li><strong>วันที่เข้าพัก:</strong> {checkInDate}</li>
          <li><strong>วันที่ออก:</strong> {checkOutDate}</li>
          <li><strong>จำนวนคืน:</strong> {numberOfNights}</li>
          <li><strong>ชื่อผู้เข้าพัก:</strong> {guestName}</li>
          <li><strong>อีเมล:</strong> {guestEmail}</li>
          <li><strong>เบอร์โทรศัพท์:</strong> {guestPhone}</li>
          <li><strong>ราคารวม:</strong> <span className="font-bold text-blue-600">฿{totalPrice.toLocaleString()}</span></li>
        </ul>
        <div className="flex justify-end space-x-3">
          <Button variant="secondary" onClick={() => setIsConfirmationModalOpen(false)}>
            ยกเลิก
          </Button>
          <Button onClick={confirmBooking} disabled={isLoading}>
            {isLoading ? 'กำลังยืนยัน...' : 'ยืนยัน'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingForm;