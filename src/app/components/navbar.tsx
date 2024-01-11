"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <nav className="bg-[#0a1539] shadow text-gray-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={handleShow}
              className="relative  inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" mt-4  flex relative gap-24  justify-between ">
            <div className="      ">
              <Link href={"/"}>
                <div className="hidden sm:flex items-center">
                  <span className="font-bold text-3xl text-gray-100 ">
                    GamZakat
                  </span>
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block sm:text-xl sm:space-x-8 ">
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-2 text-sm font-medium text-gray-100"
              >
                Home
              </a>
              <Link href={"/info"}>
                <span className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-100 hover:border-gray-300 hover:text-gray-700">
                  Learn
                </span>
              </Link>
              <Link href={"/masjids"}>
                <span className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-100 hover:border-gray-300 hover:text-gray-700">
                  Masjids
                </span>
              </Link>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-100 hover:border-gray-300 hover:text-gray-700"
              >
                Donations
              </a>
              {/* <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-100 hover:border-gray-300 hover:text-gray-700"
              >
                Projects
              </a>{" "} */}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full hidden md:block py-4 mt-5 bg-transparent text-gray-100 px-8  text-sm font-semibold hover:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Login / Signup
            </button>
          </div>
        </div>
      </div>

      {!show && (
        <div
          className="sm:hidden transition-all  ease-in-out duration-500"
          id="mobile-menu"
        >
          <div className="space-y-1 pb-4 pt-2">
            <a
              href="#"
              className="block border-l-4 border-indigo-500 bg-yellow-100 py-2 pl-3 pr-4 text-base font-medium text-black"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-100 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Team
            </a>
            <a
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-100 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Projects
            </a>
            <a
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-100 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Calendar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
