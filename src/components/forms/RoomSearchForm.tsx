// components/forms/RoomSearchForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker'; // สมมติใช้ react-day-picker
import type { DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // ต้อง import CSS ด้วย
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';

const RoomSearchForm: React.FC = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [guests, setGuests] = useState(1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (location) queryParams.append('location', location);
    if (dateRange?.from) queryParams.append('checkIn', format(dateRange.from, 'yyyy-MM-dd'));
    if (dateRange?.to) queryParams.append('checkOut', format(dateRange.to, 'yyyy-MM-dd'));
    if (guests) queryParams.append('guests', String(guests));

    router.push(`/rooms?${queryParams.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          สถานที่
        </label>
        <Input
          id="location"
          type="text"
          placeholder="เช่น กรุงเทพฯ, เชียงใหม่"
          value={location}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">
          วันที่เข้าพัก - ออก
        </label>
        <Input
          id="dates"
          type="text"
          placeholder="เลือกวัน"
          readOnly
          value={dateRange?.from && dateRange.to ? `${format(dateRange.from, 'dd MMM')} - ${format(dateRange.to, 'dd MMM')}` : ''}
          onClick={() => setIsCalendarOpen(true)}
          className="cursor-pointer"
        />
        <Modal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} title="เลือกวันเข้าพัก">
          <DayPicker
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            min={1}
            pagedNavigation
          />
          <div className="mt-4 text-right">
            <Button onClick={() => setIsCalendarOpen(false)}>ยืนยัน</Button>
          </div>
        </Modal>
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
          จำนวนผู้เข้าพัก
        </label>
        <Input
          id="guests"
          type="number"
          min="1"
          value={guests}
          onChange={(e: { target: { value: string; }; }) => setGuests(parseInt(e.target.value))}
        />
      </div>

      <Button type="submit" size="lg">
        ค้นหาห้องพัก
      </Button>
    </form>
  );
};

export default RoomSearchForm;