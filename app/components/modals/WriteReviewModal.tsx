"use client";

import React, { useEffect, useState } from "react";
import ReviewForm from "../forms/ReviewForm";

type WriteReviewModalProps = {
  barberId: string;
};

export default function WriteReviewModal({ barberId }: WriteReviewModalProps) {
  // Controls whether the modal is open
  const [isOpen, setIsOpen] = useState(false);

  // Close modal helper
  const closeModal = () => setIsOpen(false);

  // Optional: close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* This is the clickable “Write a review” trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-sm font-medium text-blue-600 hover:text-blue-700">
        Write a review
      </button>

      {/* Modal UI only renders when open */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop (clicking outside closes modal) */}
          <button
            type="button"
            aria-label="Close modal backdrop"
            onClick={closeModal}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal panel wrapper */}
          <div className="relative min-h-full flex items-center justify-center px-4 py-10">
            {/* Modal panel */}
            <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  Write a review
                </h3>

                {/* Close button */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Close modal">
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="px-5 py-5">
                <ReviewForm
                  barberId={barberId}
                  onCancel={closeModal}
                  onSuccess={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
