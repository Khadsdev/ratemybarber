"use client";

import React, { useMemo, useState } from "react";

/**
 * Admin Submissions Page
 * - For now: UI only (no fetching)
 * - Tabs switch between "Pending Reviews" and "Pending Barbers"
 * - Later: we will fetch and render actual rows from Supabase
 */
export default function AdminSubmissionsPage() {
  // Which tab is active right now?
  const [activeTab, setActiveTab] = useState<"barbers" | "reviews">("reviews");

  // Dummy counts for now (later these come from DB)
  const pendingCounts = useMemo(
    () => ({
      barbers: 2,
      reviews: 3,
    }),
    []
  );

  return (
    <div className="w-full">
      {/* ================= PAGE HEADER ================= */}
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Submissions
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Review pending submissions and keep the platform clean.
        </p>
      </header>

      {/* ================= TABS ================= */}
      <div className="border-b border-slate-200">
        <div className="flex items-center gap-10">
          {/* TAB: Pending Barbers */}
          <button
            type="button"
            onClick={() => setActiveTab("barbers")}
            className={[
              "relative pb-4 text-md transition flex items-center gap-4",
              activeTab === "barbers"
                ? "text-slate-900 font-semibold"
                : "text-slate-500 hover:text-slate-700 font-medium",
            ].join(" ")}
            aria-selected={activeTab === "barbers"}>
            Pending Barbers
            {activeTab === "barbers" && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-emerald-500 rounded-full" />
            )}
            {/* Count pill */}
            <span className="text-sm font-semibold bg-slate-200 text-slate-700 px-3 py-1 rounded-full">
              {pendingCounts.barbers}
            </span>
          </button>

          {/* TAB: Pending Reviews */}
          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={[
              "relative pb-4 text-md transition flex items-center gap-3",
              activeTab === "reviews"
                ? "text-slate-900 font-semibold"
                : "text-slate-500 hover:text-slate-700 font-medium",
            ].join(" ")}
            aria-selected={activeTab === "reviews"}>
            <span>Pending Reviews</span>

            {/* Count pill */}
            <span className="text-sm font-semibold bg-slate-200 text-slate-700 px-3 py-1 rounded-full">
              {pendingCounts.reviews}
            </span>

            {activeTab === "reviews" && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-emerald-500 rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* ================= TAB CONTENT (PLACEHOLDER) ================= */}
      <section className="mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
          {activeTab === "reviews" ? (
            <p className="text-lg text-slate-600">
              Pending <span className="font-semibold">reviews</span> will render
              here next (with <span className="font-semibold">Approve</span> /{" "}
              <span className="font-semibold">Reject</span> actions).
            </p>
          ) : (
            <p className="text-lg text-slate-600">
              Pending <span className="font-semibold">barber requests</span>{" "}
              will render here next (with{" "}
              <span className="font-semibold">Approve</span> /{" "}
              <span className="font-semibold">Reject</span> actions).
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
