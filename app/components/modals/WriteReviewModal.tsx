"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useTransition,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import ReviewForm from "../forms/ReviewForm";

type WriteReviewModalProps = {
  barberId: string;
};

export default function WriteReviewModal({ barberId }: WriteReviewModalProps) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  // For timing how long refresh takes
  const refreshStartRef = useRef<number | null>(null);

  // Lets us know when router.refresh() is "in flight"
  const [isPending, startTransition] = useTransition();

  const closeModal = useCallback(() => setIsOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  // Called after the review insert succeeds
  const handleSuccess = useCallback(() => {
    closeModal();

    refreshStartRef.current = performance.now();
    console.log("[WriteReviewModal] Starting router.refresh()...");

    startTransition(() => {
      router.refresh();
    });
  }, [closeModal, router, startTransition]);

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-green-600 hover:bg-green-700">
        Write a review
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onMouseDown={closeModal}>
          {/* Backdrop (outside click closes) */}
          <div className="absolute inset-0 " aria-hidden="true" />

          {/* Center wrapper */}
          <div className="relative min-h-full flex items-center justify-center px-4 py-10">
            {/* Panel (stop clicks inside from closing) */}
            <div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl border border-gray-100"
              onMouseDown={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  Write a review
                </h3>

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
                  onSuccess={handleSuccess}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
