"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase-client";

type ReviewFormProps = {
  barberId: string; // comes from the barber profile page (/barber/[id])
  onSuccess: () => void; // called when insert succeeds (modal closes)
  onCancel: () => void; // called when user cancels (modal closes)
};

export default function ReviewForm({
  barberId,
  onSuccess,
  onCancel,
}: ReviewFormProps) {
  // -----------------------------
  // Form state
  // -----------------------------
  const [rating, setRating] = useState<number>(5);
  const [visitedDate, setVisitedDate] = useState<string>("");
  const [text, setText] = useState<string>("");

  // -----------------------------
  // UX state
  // -----------------------------
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // -----------------------------
  // Submit handler
  // -----------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage(null);
    setIsSubmitting(true);

    // TEMP: You said "auto-approved for now"
    // Later we change this to: status: "pending"
    const { error } = await supabase.from("reviews").insert({
      barber_id: barberId,
      rating,
      text,
      visited_date: visitedDate ? visitedDate : null,
      status: "approved",
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Error inserting review:", error);
      setErrorMessage("Could not submit review. Please try again.");
      return;
    }

    // Close modal on success
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Rating
        </label>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500">
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r} star{r === 1 ? "" : "s"}
            </option>
          ))}
        </select>
      </div>

      {/* Visited date */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Visited date
        </label>

        <input
          type="date"
          value={visitedDate}
          onChange={(e) => setVisitedDate(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Review text */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Your review
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={5}
          placeholder="Share what you liked, what you didn’t, and the overall experience…"
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-900 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
        />
      </div>

      {/* Error message */}
      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pt-2">
        {/* Cancel button */}
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
          Cancel
        </button>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-green-600 hover:bg-green-700
                     disabled:opacity-60 disabled:cursor-not-allowed">
          {isSubmitting ? "Submitting…" : "Submit review"}
        </button>
      </div>
    </form>
  );
}
