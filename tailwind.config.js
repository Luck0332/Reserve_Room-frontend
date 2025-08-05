// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // สำหรับ App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // ถ้ายังใช้ Page Router ควบคู่ไปด้วย
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // ถ้าโค้ดของคุณอยู่ใน src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}