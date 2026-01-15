"use client";
import React from "react";

export default function Settings() {
  return (
    <div>
      {/* ================= HEADER ================= */}
      <div className="mb-6 border-b border-black/10 pb-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Settings
        </h1>
      </div>
      {/* ================= SETTINGS MAIN SECTION ================= */}
      <div className="">
        <div className=" text-gray-600">
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="transition-colors rounded-lg font-medium hover:bg-gray-100 py-2 px-8  border bg-white text-gray-700 border-gray-400   ">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
