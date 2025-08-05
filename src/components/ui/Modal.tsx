// components/ui/Modal.tsx
'use client'; // Modal ต้องเป็น Client Component เพราะมีการจัดการ State และ DOM event

import React from 'react';
import { createPortal } from 'react-dom'; // ใช้ createPortal เพื่อให้ Modal อยู่เหนือ DOM tree อื่นๆ

interface ModalProps {
  isOpen: boolean; // สถานะการเปิด/ปิด Modal
  onClose: () => void; // ฟังก์ชันเรียกเมื่อ Modal ปิด
  title: string; // หัวข้อ Modal
  children: React.ReactNode; // เนื้อหาภายใน Modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // ถ้า Modal ไม่เปิด ก็ไม่ต้องเรนเดอร์อะไรเลย

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // คลิกด้านนอก Modal เพื่อปิด
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg mx-4 relative"
        onClick={(e) => e.stopPropagation()} // ป้องกัน event propagation เมื่อคลิกใน Modal
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
          >
            &times; {/* สัญลักษณ์ 'x' สำหรับปิด */}
          </button>
        </div>
        <div className="modal-body">
          {children} {/* แสดงเนื้อหาที่ส่งเข้ามา */}
        </div>
      </div>
    </div>,
    document.body // Render Modal นอก Root DOM เพื่อให้แน่ใจว่าอยู่เหนือสุด
  );
};

export default Modal;