"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/services" className="hover:text-gray-200">Services</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          <Link href="/login" className="hover:text-gray-200">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <Link href="/" className="block hover:text-gray-200">Home</Link>
          <Link href="/about" className="block hover:text-gray-200">About</Link>
          <Link href="/services" className="block hover:text-gray-200">Services</Link>
          <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
