export const dynamic = "force-dynamic";

import WriteReviewModal from "@/app/components/modals/WriteReviewModal";
import { supabase } from "@/lib/supabase-client";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function BarberProfilePage({ params }: PageProps) {
  const { id: barberId } = await params;

  // 1) Fetch the barber (must be approved to be visible publicly)
  const { data: barber, error: barberError } = await supabase
    .from("barbers")
    .select("*")
    .eq("id", barberId)
    .eq("status", "approved")
    .single();

  // If barber not found or error, show a simple message
  if (barberError || !barber) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <h1 className="text-2xl font-bold text-gray-900">Barber not found</h1>
          <p className="mt-2 text-gray-600">
            This barber may not exist or is not approved yet.
          </p>
        </main>
      </div>
    );
  }

  // 2) Fetch approved reviews for this barber
  const { data: reviews, error: reviewsError } = await supabase
    .from("reviews")
    .select("*")
    .eq("barber_id", barberId)
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (reviewsError) {
    console.error("Error fetching reviews:", reviewsError);
  }

  const hasReviews = reviews && reviews.length > 0;
  const avgRating = barber.rating_avg ? Number(barber.rating_avg) : 0;
  const ratingCount = barber.rating_count ?? 0;

  return (
    <div className="min-h-screen pb-16 bg-[#f6f0e9]">
      {/* Top navigation */}

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* ================= BARBER HEADER ================= */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Image */}
          <div className="w-full h-64 md:h-80 bg-gray-200">
            <img
              src={barber.imageUrl || "/default-barber.jpg"}
              alt={barber.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-5 md:p-7">
            {/* Name */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              {barber.name}
            </h1>

            {/* Location */}
            {(barber.city || barber.area) && (
              <p className="mt-1 text-gray-600">
                {barber.city}
                {barber.city && barber.area ? " – " : ""}
                {barber.area}
              </p>
            )}

            {/* Rating */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {ratingCount > 0 ? (
                <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold text-gray-900">
                    {avgRating.toFixed(1)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({ratingCount} review{ratingCount === 1 ? "" : "s"})
                  </span>
                </div>
              ) : (
                <div
                  className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.
                 rounded-full">
                  <span className="text-gray-700 font-medium">
                    No reviews yet
                  </span>
                  <span className="text-gray-500 text-sm">
                    Be the first to rate
                  </span>
                </div>
              )}
            </div>

            {/* Specialty */}
            {barber.specialty && (
              <p className="mt-4 text-gray-800 font-medium">
                Specialty:{" "}
                <span className="font-bold text-gray-700">
                  {barber.specialty}
                </span>
              </p>
            )}

            {/* Description (optional) */}
            {barber.description && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {barber.description}
              </p>
            )}
          </div>
        </section>

        {/* ================= REVIEWS SECTION ================= */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Reviews
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Only approved reviews are shown publicly.
              </p>
            </div>

            {/* Later this will link to a review form or open a modal */}
            <WriteReviewModal barberId={barberId} />
          </div>

          {/* Review list */}
          {hasReviews ? (
            <div className="mt-6 space-y-4">
              {reviews!.map((review) => (
                <article
                  key={review.id}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  {/* Stars + date */}
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-yellow-500 font-semibold">
                      {"★".repeat(review.rating)}{" "}
                      <span className="text-gray-300">
                        {"★".repeat(5 - review.rating)}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {review.created_at
                        ? new Date(review.created_at).toLocaleDateString()
                        : ""}
                    </p>
                  </div>

                  {/* Visited date (optional) */}
                  {review.visited_date && (
                    <p className="text-xs text-gray-500 mt-1">
                      Visited:{" "}
                      {new Date(review.visited_date).toLocaleDateString()}
                    </p>
                  )}

                  {/* Review text */}
                  {review.text && (
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      {review.text}
                    </p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 text-gray-600">
              No approved reviews yet. Be the first to leave one.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
