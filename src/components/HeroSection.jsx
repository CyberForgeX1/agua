import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSlider from "./swiper/HeroSlider";

export const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center  rounded-lg  p-5">
        <h2 className="text-6xl text-white font-bold mb-2">A Bank That</h2>
        <h2 className="text-6xl text-white font-bold mb-2">
          {" "}
          Helps You To Win
        </h2>
        <h2 className="text-5xl font-semibold text-yellow-600 my-4">
          The Game
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed">
          The Chess Bank is your partner in chess life. We offer you bank
          services that have been fully secure for 10 years. We guarantee you
          stability, speed, and nice bonuses when using the Sparktak app.
        </p>

        <div className="mt-5 flex gap-4">
          <Link
            href={"/"}
            className="border-2 px-20 py-4 bg-black text-white font-semibold rounded-sm hover:bg-gray-800 cursor-pointer"
          >
            OUR OFFERS
          </Link>
          <Link
            href={"/"}
            className="bg-yellow-500 px-20 py-4 text-black font-semibold rounded-sm hover:bg-amber-800 cursor-pointer"
          >
            CREATE CARDS
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          {/* <img
            src="/gold.png"
            alt="golden-card"
            className="w-[500px] h-[450px]"
          /> */}
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};
