export default function Home() {
  return (
    <>
      <nav className="bg-blue-600 p-6 flex justify-between items-center relative z-40">
        {/* Left */}
        <div className="flex space-x-6">
          <a href="https://x.com" className="hover:underline">
            Twitter
          </a>
          <a href="https://github.com" className="hover:underline">
            GitHub
          </a>
        </div>

        {/* Middle */}
        <div className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">
          RateMyBarber
        </div>

        {/* Right */}
        <div>
          <a href="/login" className="hover:underline">
            Sign In
          </a>
        </div>
      </nav>
      {/* Banner */}
      <header
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: "url('/barber-banner.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Barber</h1>
          <p className="text-lg">Discover and review barbers near you</p>
        </div>
      </header>
      {/* Main Content */}
      <main className="p-6">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to RateMyBarber
          </h2>
          <p className="mb-4">
            RateMyBarber helps you find the best barbers in your area based on
            real user reviews. Whether you're looking for a quick trim or a
            stylish new cut, our community has got you covered.
          </p>
          <p>
            Start by searching for barbers in your city, reading reviews, and
            sharing your own experiences. Your feedback helps others make
            informed decisions and supports local businesses.
          </p>
        </section>
      </main>
    </>
  );
}
