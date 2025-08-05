import { ReactNode } from "react";

// lib/types.ts
export interface Room {
  pricePerNight: ReactNode;
  id: string;
  name: string;
  location: string;
  price: number; // ราคาต่อคืน
  imageUrl: string;
  description: string;
  amenities: string[];
  images: string[]; // สำหรับ Gallery
  reviews: Review[];
  capacity: number; // จำนวนผู้เข้าพักสูงสุด
  // ... อื่นๆ
}

export interface RoomSearchCriteria {
  location?: string;
  checkIn?: string; // Format YYYY-MM-DD
  checkOut?: string; // Format YYYY-MM-DD
  guests?: number;
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  // ... อื่นๆ
}

export interface User {
  id: string;
  email: string;
  name: string;
  // ... อื่นๆ
}