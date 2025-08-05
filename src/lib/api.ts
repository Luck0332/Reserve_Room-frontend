// lib/api.ts
import { Room, Booking, User, RoomSearchCriteria } from './types'; // Import types ที่เรากำหนดไว้ใน lib/types.ts

// กำหนด Base URL ของ Backend API ของคุณ
// ควรเก็บไว้ใน .env.local เพื่อความปลอดภัยและง่ายต่อการจัดการเมื่อ Deploy
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api'; // สมมติว่า Backend API อยู่ที่ Port 3001

// ฟังก์ชันสำหรับจัดการ HTTP Response
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Something went wrong' }));
    throw new Error(errorData.message || 'Network response was not ok.');
  }
  return response.json();
}

/**
 * ดึงข้อมูลห้องพักทั้งหมด หรือตามเงื่อนไขการค้นหา
 * @param criteria เงื่อนไขการค้นหา เช่น location, checkIn, checkOut, guests
 * @returns Promise<Room[]>
 */
export async function getRooms(criteria?: RoomSearchCriteria): Promise<Room[]> {
  const query = criteria ? new URLSearchParams(criteria as any).toString() : ''; // แปลง object เป็น query string
  const url = `${API_BASE_URL}/rooms${query ? `?${query}` : ''}`;
  const response = await fetch(url, {
    cache: 'no-store' // ไม่ cache ใน Server Component (ถ้าต้องการข้อมูลล่าสุดเสมอ)
  });
  return handleResponse<Room[]>(response);
}

/**
 * ดึงรายละเอียดของห้องพักเฉพาะ
 * @param roomId ID ของห้องพัก
 * @returns Promise<Room>
 */
export async function getRoomDetails(roomId: string): Promise<Room> {
  const response = await fetch(`${API_BASE_URL}/rooms/${roomId}`, {
    cache: 'no-store' // ไม่ cache ถ้าต้องการข้อมูลล่าสุด
  });
  return handleResponse<Room>(response);
}

/**
 * สร้างการจองห้องพักใหม่
 * @param bookingData ข้อมูลการจอง
 * @returns Promise<Booking>
 */
export async function createBooking(bookingData: Omit<Booking, 'id' | 'status'>): Promise<Booking> {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`, // ถ้ามีการใช้ Token สำหรับ Authentication
    },
    body: JSON.stringify(bookingData),
  });
  return handleResponse<Booking>(response);
}

/**
 * ดึงข้อมูลการจองของผู้ใช้
 * @param userId ID ของผู้ใช้ (หรือใช้ token)
 * @returns Promise<Booking[]>
 */
export async function getUserBookings(userId: string): Promise<Booking[]> {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/bookings`, {
    headers: {
      // 'Authorization': `Bearer ${token}`,
    },
    cache: 'no-store'
  });
  return handleResponse<Booking[]>(response);
}

// ... คุณสามารถเพิ่มฟังก์ชัน API อื่นๆ ได้ตามความต้องการ เช่น login, register, updateProfile