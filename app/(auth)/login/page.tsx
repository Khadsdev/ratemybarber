"use client";
import { supabase } from "@/lib/supabase-client";
import React, { useEffect, useState } from "react";

interface Barber {
  id: number;
  name: string;
  description: string;
  state: string;
  city: string;
  imageUrl: string;
  created_at: string;
}

export default function Login() {
  // Getters and setters
  const [barbers, setBarbers] = useState<Barber[]>([]);

  //fetch barbers from supabase
  const fetchBarbers = async () => {
    const { error, data } = await supabase
      .from("barbers")
      .select("*")
      .order("created_at", { ascending: true });
    if (error) {
      console.log("there was an error fetching barbers", error.message);
      return;
    }
    setBarbers(data);
  };

  useEffect(() => {
    fetchBarbers();
  }, []);

  console.log(barbers);

  return (
    <>
      <div className="py-8 space-y-16 md:py-16 w-11/12 m-auto">
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => (window.location.href = "/")}>
          Back Home
        </button>
        <h2 className="text-3xl font-bold text-center mb-8">
          Sign In to RateMyBarber
        </h2>
        <div>
          <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=""></input>
            </div>
          </form>
        </div>
        <div className="max-w-md mx-auto">
          Her skal det komme barbers
          {barbers.map((barber, key) => (
            <div className="" key={key}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {barber.name}
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" alt="" src={barber.imageUrl} />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {barber.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {barber.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
