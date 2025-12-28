// app/components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        {/* Brand */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight">
            Rate<span className="text-emerald-400">My</span>Barber
          </h2>
          <p className="max-w-xs text-sm text-neutral-400">
            Discover the best barbers in your city. Real reviews. Real fades.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-1 flex-wrap gap-10 text-sm sm:justify-end">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Explore
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/barbers" className="hover:text-white">
                  Barbers
                </Link>
              </li>
              <li>
                <Link href="/reviews/new" className="hover:text-white">
                  Write a review
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Social – you can change URLs later */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Social
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white">
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} RateMyBarber. All rights reserved.</p>
          <p className="hidden sm:block">Built with ❤️ and fresh fades.</p>
        </div>
      </div>
    </footer>
  );
}
