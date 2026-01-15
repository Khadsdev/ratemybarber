"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  // Controls whether the mobile dropdown menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    // OUTER NAV: background + shadow, scrolls with page (not sticky)
    <nav className="bg-white border-b border-black/10">
      {/* INNER CONTAINER: spacing + layout */}
      <div className="px-4 py-3 flex justify-between items-center">
        {/* LEFT: Social links (desktop only) */}
        <div className="hidden md:flex space-x-4 text-gray-600">
          <Link href="https://x.com" className="hover:text-emerald-500">
            Twitter
          </Link>
          <Link href="https://github.com" className="hover:text-emerald-500">
            GitHub
          </Link>
        </div>

        {/* CENTER: Logo / site name */}
        <div className="text-xl font-extrabold tracking-tight flex-1 flex justify-center">
          <Link href="/" className="hover:opacity-90 transition">
            Rate
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              My
            </span>
            Barber
          </Link>
        </div>

        {/* RIGHT: 
            - Desktop: "Sign In"
            - Mobile: only burger button (Sign In is in dropdown)
        */}
        <div className="flex items-center space-x-3">
          {/* Desktop "Sign In" text */}
          <Link
            href="/login"
            className="hidden md:inline text-gray-600 hover:text-emerald-600">
            Sign In
          </Link>

          {/* Mobile burger menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
            aria-label="Toggle navigation menu">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU (only when isOpen is true) */}
      {/* MOBILE DROPDOWN MENU (only on small screens) */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-4">
          {/* BIG SIGN-IN BUTTON */}
          <div className="pt-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-emerald-600 text-white font-semibold py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Sign In
            </Link>
          </div>

          {/* Social section */}
          <div>
            <p className="text-xs uppercase text-gray-400 mb-2">Social</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://x.com"
                className="text-gray-700 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}>
                Twitter
              </Link>

              <Link
                href="https://github.com"
                className="text-gray-700 hover:text-emerald-600"
                onClick={() => setIsOpen(false)}>
                GitHub
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
