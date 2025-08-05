"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">เข้าสู่ระบบ</h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              อีเมล
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          ยังไม่มีบัญชี? <a href="/register" className="text-blue-600 hover:underline">สมัครสมาชิก</a>
        </p>
      </div>
    </div>
  );
}