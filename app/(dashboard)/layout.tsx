import type { ReactNode } from "react";
import Sidebar from "@/app/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f0e9] text-slate-900">
      {/* Thin divider line under the main Navbar */}
      <div className="border-t border-black/10" />

      {/* MOBILE: stack, DESKTOP: side-by-side */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-1px)]">
        {/* LEFT SIDEBAR */}
        <aside className="lg:w-[280px] lg:shrink-0">
          <Sidebar />
        </aside>

        {/* RIGHT CONTENT */}
        <section className="flex-1 bg-white lg:border-l border-black/10">
          {/* Padding adjusts for mobile vs desktop */}
          <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">{children}</div>
        </section>
      </div>
    </div>
  );
}
