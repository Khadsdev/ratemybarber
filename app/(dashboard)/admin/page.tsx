export default function AdminDashboardPage() {
  // For now, static counts (we’ll fetch pending counts from Supabase later)
  const pendingReviewsCount = 3;

  return (
    <div>
      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Review pending submissions and keep the platform clean.
        </p>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex items-end gap-8 border-b border-black/10">
        <button
          type="button"
          className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
          Pending Barbers
        </button>

        <button
          type="button"
          className="pb-3 text-sm font-semibold text-gray-900 border-b-2 border-emerald-500 flex items-center gap-2">
          Pending Reviews
          <span className="text-xs font-semibold bg-black/10 text-gray-800 rounded-full px-2 py-0.5">
            {pendingReviewsCount}
          </span>
        </button>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="mt-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search pending…"
            className="w-full rounded-2xl border border-black/10 bg-white px-12 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {/* search icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </div>
        </div>
      </div>

      {/* ================= LIST CONTAINER ================= */}
      <div className="mt-5 rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
        {/* Placeholder rows (we’ll map real pending reviews here) */}
        <div className="p-5 text-gray-600">
          Pending reviews will render here next (with Approve / Reject actions).
        </div>
      </div>
    </div>
  );
}
