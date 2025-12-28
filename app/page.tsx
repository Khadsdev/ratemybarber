import { supabase } from "@/lib/supabase-client";

export default async function Home() {
  // Fetch approved barbers from Supabase
  const { data: barbers, error } = await supabase
    .from("barbers")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching barbers:", error);
  }

  const hasBarbers = barbers && barbers.length > 0;

  return (
    <div className="min-h-screen pb-16 bg-[#f6f0e9] text-slate-900">
      <main className="relative">
        {/* ================= HERO / BANNER ================= */}
        <header
          className="relative w-full bg-cover bg-center bg-no-repeat min-h-[360px] md:min-h-[480px] lg:min-h-[540px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/banner.png')",
          }}>
          {/* Hero content */}
          <div className="flex items-center justify-center px-4 md:px-8">
            <div className="text-center text-white max-w-2xl md:max-w-3xl py-16 md:py-24 lg:py-28">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight drop-shadow-md">
                Find the Best Barbers in Your City
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-white/90 mb-8">
                Search by city, read real reviews, and share your experiences.
                No accounts, no fluff – just honest ratings from real people.
              </p>

              {/* Search bar (we’ll wire this up later) */}
              <div className="w-full max-w-xl mx-auto">
                <input
                  name="search"
                  type="text"
                  placeholder="Search for a barber or city (e.g. Oslo)…"
                  className="w-full py-3 px-5 rounded-2xl border border-gray-200 shadow-lg text-white 
                             focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Soft curved divider at the bottom of hero */}
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-16 overflow-hidden">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-full text-[#f6f0e9]"
              preserveAspectRatio="none">
              <path
                fill="currentColor"
                d="M0,256L60,240C120,224,240,192,360,186.7C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </header>

        {/* ================= “HOW IT WORKS” STRIP ================= */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
              <h3 className="font-semibold text-base md:text-lg mb-2">
                1. Search by City
              </h3>
              <p className="text-sm text-gray-600">
                Type in a city like <span className="font-medium">Oslo</span>{" "}
                and instantly see barbers people are talking about.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
              <h3 className="font-semibold text-base md:text-lg mb-2">
                2. Read Honest Reviews
              </h3>
              <p className="text-sm text-gray-600">
                See ratings, specialties, and real experiences before choosing a
                new barber.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
              <h3 className="font-semibold text-base md:text-lg mb-2">
                3. Share Your Experience
              </h3>
              <p className="text-sm text-gray-600">
                Leave a review after your visit and help others find great
                barbers too.
              </p>
            </div>
          </div>
        </section>

        {/* ================= BARBERS GRID SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Popular Barbers
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              Explore barbers with the most reviews and highest ratings. Click
              any card to see all reviews or add your own.
            </p>
          </div>

          {/* If we have barbers, show grid. If not, show fallback */}
          {hasBarbers ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {barbers!.map((barber) => {
                const hasReviews = (barber.rating_count ?? 0) > 0;
                const avgRating = barber.rating_avg
                  ? Number(barber.rating_avg)
                  : 0;

                return (
                  <article
                    key={barber.id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100">
                    {/* Image area – click to go to barber profile */}
                    <a href={`/barber/${barber.id}`}>
                      <img
                        src={barber.imageUrl || "/default-barber.png"}
                        alt={barber.name}
                        className="w-full h-56 object-cover"
                      />
                    </a>

                    {/* Text content */}
                    <div className="p-4 md:p-5">
                      {/* Name */}
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {barber.name}
                      </h3>

                      {/* Location: city + area if available */}
                      {(barber.city || barber.area) && (
                        <p className="text-sm text-gray-500 mt-1">
                          {barber.city}
                          {barber.city && barber.area ? " – " : ""}
                          {barber.area}
                        </p>
                      )}

                      {/* Rating summary: only show if there is at least 1 review */}
                      {hasReviews && (
                        <p className="mt-2 text-sm text-gray-700 flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium">
                            {avgRating.toFixed(1)}
                          </span>
                          <span className="text-gray-500">
                            · {barber.rating_count} review
                            {barber.rating_count === 1 ? "" : "s"}
                          </span>
                        </p>
                      )}

                      {/* Specialty or description (one-line vibe) */}
                      {(barber.specialty || barber.description) && (
                        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                          {barber.specialty || barber.description}
                        </p>
                      )}

                      {/* CTA button */}
                      <div className="mt-4">
                        <a
                          href={`/barber/${barber.id}`}
                          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg
                                     bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                          View &amp; Rate
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            // Fallback when there are no approved barbers
            <p className="text-center text-gray-500">
              No approved barbers yet. Check back soon!
            </p>
          )}
        </section>

        {/* ================= FOOTER ================= */}
      </main>
    </div>
  );
}
