// postcss.config.js
module.exports = {
  plugins: {
    'tailwindcss/nesting': {}, // ใช้ 'tailwindcss/nesting' แทน 'tailwindcss' โดยตรง
    tailwindcss: {},          // เพิ่ม Tailwind CSS plugin เข้าไป
    autoprefixer: {},         // เพิ่ม Autoprefixer สำหรับความเข้ากันได้กับ Browser
  },
};