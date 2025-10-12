export default function Home() {
  const barbers = [
    {
      name: "Barber 1",
      description: "Expert in classic cuts and modern styles.",
      image: "/barber1.jpg",
    },
    {
      name: "Barber 2",
      description: "Specializes in fades and beard trims.",
      image: "/barber2.jpg",
    },
    {
      name: "Barber 3",
      description: "Known for precision cuts and styling.",
      image: "/barber3.jpg",
    },
  ];

  return (
    <>
      <nav className=" p-6 flex justify-between items-center relative z-40">
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
          <a href="/">RateMyBarber</a>
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
      {/* Main Content */}
      <main className="">
        <div className="py-8 space-y-16 md:py-16 w-11/12 m-auto">
          <div className="space-y-2">
            <h3 className="font-medium text-2xl text-center inline-block">
              Barbers
            </h3>
            <div className="">
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm 
              dark:bg-gray-800 dark:border-gray-700 inline-block m-4">
                <a href="#">
                  <img className="rounded-t-lg" src="banner.png" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg hover:bg-blue-800 f
                     ocus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
                     dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Rate here!
                  </a>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 inline-block m-4">
                <a href="#">
                  <img className="rounded-t-lg" src="banner.png" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                     focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Rate here!
                  </a>
                </div>
              </div>
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm
               dark:bg-gray-800 dark:border-gray-700 inline-block m-4">
                <a href="#">
                  <img className="rounded-t-lg" src="banner.png" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white
                     bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Rate here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
