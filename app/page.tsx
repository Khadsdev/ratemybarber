import { supabase } from "@/lib/supabase-clinet";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // Fetch all approved barbers from Supabase
  const { data: barbers, error } = await supabase
    .from("barbers")
    .select("id, name, photo_url, city, description")
    .eq("status", "approved") // only get approved barbers
    .order("created_at", { ascending: false }); // newest first

  if (error) {
    console.error("Error fetching barbers:", error);
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className=" p-6 flex justify-between items-center relative z-40">
        {/* Left: Social links*/}
        <div className="flex space-x-6">
          <Link href="https://x.com" className="hover:underline">
            Twitter
          </Link>
          <Link href="https://github.com" className="hover:underline">
            GitHub
          </Link>
        </div>

        {/* Center: Website name / logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">
          <Link href="/">RateMyBarber</Link>
        </div>

        {/* Right: Sign in link (for admin login later) */}
        <div>
          <Link href="/login" className="hover:underline">
            Sign In
          </Link>
        </div>
      </nav>
      {/* ================= Banner Section ================= */}
      <header
        className=" py-10 w-full px-1 md:px-8 relative font-bold text-2xl md:text-3xl bg-cover bg-center bg-no-repeat min-h-[600px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/banner.png')",
        }}>
        <div className=" bg-opacity-100 h-full flex flex-col justify-center items-center text-white p-40">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Barber</h1>
          <p className="text-lg">Discover and review barbers near you</p>
          <div className="w-11/12 md:w-full max-w-2xl md:max-w-3xl mx-auto">
            <div className="relative z-40 text-base text-black">
              <input
                type="text"
                placeholder="Search for a barber"
                className="mt-12 shadow-md focus:outline-none border-2 border-primary bg-white rounded-2xl  py-3 px-6 block w-full "
              />
            </div>
          </div>
        </div>
      </header>
      {/* ================= Main Content ================= */}
      <main className="">
        <div className="py-8 space-y-16 md:py-16 w-11/12 m-auto">
          <div className="space-y-2">
            <h3 className="font-medium text-2xl text-center inline-block">
              Barbers
            </h3>

            {/* Barber Cards Grid */}
            <div className="flex flex-wrap justify-center">
              {/* Check if barbers exist */}
              {barbers && barbers.length > 0 ? (
                barbers.map((barber) => (
                  <div
                    key={barber.id}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4">
                    {/* Clickable barber image → leads to barber profile page */}
                    <Link href={`/barber/${barber.id}`}>
                      <Image
                        className="rounded-t-lg w-full h-48 object-cover"
                        src={barber.photo_url || "/default-barber.png"}
                        alt={barber.name}
                      />
                    </Link>

                    {/*Barber info */}
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {barber.name}
                      </h5>
                      {/* City (if its available) */}
                      {barber.city && (
                        <p className="text-sm text-gray-500 mb-2">
                          {barber.city}
                        </p>
                      )}
                      {barber.description && (
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {barber.description}
                        </p>
                      )}
                      <a
                        href={`/barber/${barber.id}`}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                     focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Rate here!
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 mt-6">
                  No approved barbers yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
