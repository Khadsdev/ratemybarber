"use client";
import { supabase } from "@/lib/supabase-client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";

interface Barber {
  id: number;
  name: string;
  description: string;
  state: string;
  city: string;
  imageUrl: string;
  created_at: string;
  specialty: string;
}

export default function Login() {
  // Getters and setters
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [open, setOpen] = useState(false);

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
        <div className="mb-60 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
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
          <h2 className="pt-10">
            Her inne skal det komme en knapp som åpner en modal
          </h2>
          <button
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setOpen(true)}>
            Open Modal
          </button>

          {/* Dialog that popups */}
          <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-700 sm:mx-0 sm:size-10"></div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold text-black flex">
                          Write a review
                        </DialogTitle>

                        <form action="#">
                          <div className="grid gap-4 grid-cols-2 py-4 md:py-6">
                            <div className="col-span-2">
                              <label
                                htmlFor="name"
                                className="block mb-2.5 text-sm font-medium text-heading">
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                                placeholder="Type product name"
                                required
                              />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                              <label
                                htmlFor="price"
                                className="block mb-2.5 text-sm font-medium text-heading">
                                Price
                              </label>
                              <input
                                type="number"
                                name="price"
                                id="price"
                                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                                placeholder="$2999"
                                required
                              />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                              <label
                                htmlFor="category"
                                className="block mb-2.5 text-sm font-medium text-heading">
                                Category
                              </label>
                              <select
                                id="category"
                                defaultValue=""
                                className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                                <option value="" disabled>
                                  Select category
                                </option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                              </select>
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="description"
                                className="block mb-2.5 text-sm font-medium text-heading">
                                Product Description
                              </label>
                              <textarea
                                id="description"
                                rows={4}
                                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                                placeholder="Write product description here"
                              />
                            </div>
                          </div>

                          <div className="flex items-center space-x-4 border-t border-default pt-4 md:pt-6">
                            <button
                              type="submit"
                              className="inline-flex items-center text-black bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                              <svg
                                className="w-4 h-4 me-1.5 -ms-0.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 12h14m-7 7V5"
                                />
                              </svg>
                              Add new product
                            </button>

                            <button
                              data-modal-hide="crud-modal"
                              type="button"
                              className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">
                      Deactivate
                    </button>
                    <button
                      type="button"
                      data-autofocus
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>

        <div className="max-w-md mx-auto pt-10">
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
                    {barber.specialty}
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
