"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  // Current URL path (ex: "/admin" or "/admin/settings")
  const pathname = usePathname();

  // Helper: decide if a link is active
  const isActive = (href: string) => {
    // exact match OR any nested route under it
    return pathname === href || pathname.startsWith(href + "/");
  };

  const linkBase = "flex items-center gap-3 px-3 py-2 rounded-xl transition";

  const activeLink =
    "bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold shadow-sm";

  const inactiveLink = "text-gray-700 hover:text-gray-900 hover:bg-white/40";

  return (
    <aside className="px-4 py-5 sm:px-6 lg:px-6 lg:py-8 border-b border-black/10 lg:border-b-0">
      {/* Account header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center">
          <span className="text-lg">👤</span>
        </div>

        <div>
          <p className="text-sm text-gray-600">Account</p>
          <p className="font-semibold">Admin</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="space-y-2">
        {/* My Reviews (Admin dashboard landing for now) */}
        <Link
          href="/admin"
          className={`${linkBase} ${
            isActive("/admin") && !isActive("/admin/settings")
              ? activeLink
              : inactiveLink
          }`}>
          <span>📝</span>
          <span>Submissions</span>
        </Link>

        {/* Settings */}
        <Link
          href="/admin/settings"
          className={`${linkBase} ${
            isActive("/admin/settings") ? activeLink : inactiveLink
          }`}>
          <span>⚙️</span>
          <span>Settings</span>
        </Link>

        {/* Sign out removed from sidebar (we’ll put it inside Settings page) */}
      </nav>
    </aside>
  );
}
