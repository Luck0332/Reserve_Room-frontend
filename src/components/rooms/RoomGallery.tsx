// components/rooms/RoomGallery.tsx
'use client'; // เป็น Client Component เพราะมีการจัดการ state สำหรับการแสดงรูปภาพ

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button'; // นำเข้า Button

interface RoomGalleryProps {
  images: string[]; // array ของ URL รูปภาพ
  roomName: string; // ชื่อห้องสำหรับ alt text
}

const RoomGallery: React.FC<RoomGalleryProps> = ({ images, roomName }) => {
  const [mainImage, setMainImage] = useState<string>(images[0] || '/images/placeholder-room.jpg');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setMainImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setMainImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
        <span className="text-gray-500">ไม่มีรูปภาพ</span>
        <Image
          src="/images/placeholder-room.jpg"
          alt="Placeholder"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-50"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
      {/* Main Image */}
      <div className="relative w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <Image
          src={mainImage}
          alt={`${roomName} - รูปภาพหลัก`}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
          priority // เพิ่ม priority เพื่อโหลดรูปภาพหลักเร็วขึ้น
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="lg"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
            >
              &#10094; {/* Left arrow */}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
            >
              &#10095; {/* Right arrow */}
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-24 h-20 cursor-pointer rounded-md overflow-hidden border-2 ${
                index === currentIndex ? 'border-blue-500' : 'border-transparent'
              } hover:border-blue-400 transition-all duration-200`}
              onClick={() => handleThumbnailClick(image, index)}
            >
              <Image
                src={image}
                alt={`${roomName} - รูปภาพย่อ ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomGallery;