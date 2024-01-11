"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Donate/Modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#0a1539]  text-gray-100 py-8 ">
        <div className="md:flex items-center   justify-between   justify-items-center">
          <div className="px-10 md:w-1/2  justify-center">
            <button className="rounded-full py-2 text-sm px-10 font-bold  shadow-md ring-1 ring-[#070e26]    hover:bg-gray-50 bg-[#0c1843] text-yellow-100">
              Nisab for the year is D28, 000.
            </button>

            <div className="lg:text-7xl text-4xl md:w-full font-semibold px-4 items-center">
              <div className="py-4 mt-5 [word-spacing:0.5px]">
                {" "}
                We can make a diffence, Lets start now!
              </div>
            </div>
            <p className="sm:text-sm  text-xs px-4 py-5">
              We are greatly appreciate your donation, and your sacrifice. Your
              support helps to further our mission through including.
            </p>
            <div className="sm:flex gap-4 w-full justify-center sm:justify-start items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-full py-4 mt-5 bg-[#0b30b8] text-gray-100 md:px-16  px-32 text-sm font-semibold hover:text-gray-900 shadow-sm ring-1 ring-inset ring-blue-800 hover:bg-gray-50"
              >
                Donate
              </button>

              <button
                type="button"
                className="rounded-full py-4 mt-5  text-yellow-100 md:px-10 px-20  text-sm font-semibold hover:text-gray-900 shadow-sm ring-1 ring-inset ring-blue-800 hover:bg-gray-50"
              >
                Calculate your Zakat
              </button>
            </div>
          </div>
          <div className="hidden w-1/2 md:flex flex-end">
            <div className="bg-[#1d274e] w-full h-full flex justify-between">
              <div className="mt-10 w-full  relative">
                <div
                  className="h-full w-full absolute -left-10"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    alt="test"
                    src="/zakat.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="mt-10 flex flex-col">
                <p>
                  "Prophet Mohammad (PBUH) said Whoever fulfulled the needs of
                  his brother, Allah will fufill his needs."
                </p>
                <p className="py-2 mt-2">Sahih al-Bukhari 2442</p>
                <div className="flex flex-end justify-end w-full h-full mt-10">
                  <div>
                    <Image
                      alt="test"
                      src="/tes1.jpeg"
                      className=""
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
