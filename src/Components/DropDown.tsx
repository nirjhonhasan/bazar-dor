"use client";

import { authClient, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const {data:session} = useSession();
  const user = session?.user;

  const handleSignout = async () =>{
          await authClient.signOut();
  }
  



  return (
    <div className="relative inline-block text-left">
      {/* ট্রিগার বাটন (প্রোফাইল নেম এবং অ্যাভাটর) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition"
      >
        <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
          A
        </span>
        <span className="text-gray-800 font-medium text-sm">{user?.name}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ড্রপডাউন বক্স */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-fadeIn">
          {/* ইউজার ইনফো সেকশন */}
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>

          {/* মেনু অপশনস */}
          <div className="py-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              {/* ইউজার আইকন */}
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              আমার প্রোফাইল
            </Link>




            <a
              onClick={handleSignout}
              className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
            >
              
              {/* লগআউট আইকন */}
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              সাইন আউট
            </a>


          </div>
        </div>
      )}
    </div>
  );
}