// components/ui/Input.tsx
'use client'; // กำหนดให้เป็น Client Component

import React from 'react';

// กำหนด Props สำหรับ Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // `React.InputHTMLAttributes<HTMLInputElement>` จะรวม Attributes มาตรฐานทั้งหมดของ HTML input element เช่น type, value, onChange, placeholder, id, className, disabled ฯลฯ
  // คุณสามารถเพิ่ม Props ที่กำหนดเองได้ที่นี่ ถ้ามี
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  // Base styles สำหรับ Input
  const baseStyles = 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm';

  return (
    <input
      className={`${baseStyles} ${className || ''}`} // รวม base styles กับ className ที่ส่งเข้ามา
      {...props} // ส่งผ่าน Attributes อื่นๆ ทั้งหมดที่ได้รับไปยัง HTML input element
    />
  );
};

export default Input;