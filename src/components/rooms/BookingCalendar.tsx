// components/booking/BookingCalendar.tsx
'use client'; // เป็น Client Component เพราะมีการโต้ตอบกับผู้ใช้ (เลือกวัน)

import React, { useState, useEffect } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // ตรวจสอบให้แน่ใจว่า import CSS ของ react-day-picker
import { format, isBefore, isAfter, isSameDay } from 'date-fns';
import Button from '@/components/ui/Button';

interface BookingCalendarProps {
  roomId: string;
  onDatesSelect?: (dates: { checkIn: string; checkOut: string; nights: number; price: number }) => void;
  pricePerNight?: number; // ราคาต่อคืนของห้องพัก
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ roomId, onDatesSelect, pricePerNight = 0 }) => {
  const [selectedDates, setSelectedDates] = useState<DateRange | undefined>();
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberOfNights, setNumberOfNights] = useState(0);
  const [disabledDays, setDisabledDays] = useState<Date[]>([]); // สำหรับวันที่ไม่ว่าง

  // TODO: ดึงข้อมูลวันที่ไม่ว่างจาก Backend
  // useEffect(() => {
  //   const fetchBookedDates = async () => {
  //     // fetch data from /api/rooms/${roomId}/unavailable-dates
  //     // setDisabledDays(parsedDates);
  //   };
  //   fetchBookedDates();
  // }, [roomId]);

  useEffect(() => {
    if (selectedDates?.from && selectedDates.to) {
      const diffTime = Math.abs(selectedDates.to.getTime() - selectedDates.from.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumberOfNights(diffDays);
      setTotalPrice(diffDays * pricePerNight);

      if (onDatesSelect) {
        onDatesSelect({
          checkIn: format(selectedDates.from, 'yyyy-MM-dd'),
          checkOut: format(selectedDates.to, 'yyyy-MM-dd'),
          nights: diffDays,
          price: diffDays * pricePerNight,
        });
      }
    } else {
      setNumberOfNights(0);
      setTotalPrice(0);
      if (onDatesSelect) {
        onDatesSelect({ checkIn: '', checkOut: '', nights: 0, price: 0 });
      }
    }
  }, [selectedDates, pricePerNight, onDatesSelect]);

  const footer = selectedDates && selectedDates.from ? (
    <p className="text-center mt-4">
      {selectedDates.to ? (
        <>
          คุณเลือก: {format(selectedDates.from, 'dd MMM yy')} ถึง {format(selectedDates.to, 'dd MMM yy')}.<br />
          จำนวน {numberOfNights} คืน, รวม: <span className="font-bold text-blue-600">฿{totalPrice.toLocaleString()}</span>
        </>
      ) : (
        `คุณเลือกวันที่เข้าพัก: ${format(selectedDates.from, 'dd MMM yy')}`
      )}
    </p>
  ) : (
    <p className="text-center mt-4 text-gray-500">กรุณาเลือกวันเข้าพักและวันออก</p>
  );

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <DayPicker
        mode="range"
        selected={selectedDates}
        onSelect={setSelectedDates}
        numberOfMonths={2}
        disabled={[
          { before: new Date() }, // ปิดใช้งานวันที่ผ่านมาแล้ว
          ...disabledDays,       // วันที่ถูกจองแล้ว
        ]}
        footer={footer}
        className="mx-auto" // จัดให้อยู่ตรงกลาง
        classNames={{
          caption_label: 'text-lg font-semibold',
          head_cell: 'text-gray-500 font-normal text-sm',
          cell: 'p-1',
          day: 'rounded-full h-9 w-9 text-sm flex items-center justify-center hover:bg-blue-100',
          day_range_middle: 'bg-blue-100 rounded-none',
          day_range_start: 'bg-blue-600 text-white rounded-full',
          day_range_end: 'bg-blue-600 text-white rounded-full',
          day_selected: 'bg-blue-600 text-white rounded-full',
          day_disabled: 'text-gray-400 opacity-50',
        }}
      />
    </div>
  );
};

export default BookingCalendar;