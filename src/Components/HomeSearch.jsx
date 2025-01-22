import React from 'react';
import { FaSearch } from 'react-icons/fa';
import left from "/images/LeftImage.png";

export default function HomeSearch() {
  return (
    <div className="flex justify-between flex-col lg:flex-row my-[50px] gap-[15px]">
      {/* Left Side Image */}
      <div>
        <img src={left} alt="Left Side Description" className="w-full" />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left 2xs:my-4 md:my-0">
        {/* Headline */}
        <div className="flex flex-col justify-center">
          <h1 className="font-medium text-[27px] lg:text-[40px]">
            Smarter Without Distraction
          </h1>
          <p className="font-medium md:text-2xl text-[#838383]">
            NewsFeed for ortho experts
          </p>
        </div>

        {/* Search Bar */}
        <div className="rounded-[50px] border border-[#DBDBDB] my-4 shadow-md w-full max-w-lg">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search for wellness tips, medical breakthroughs, etc."
              className="w-full px-4 py-2 outline-none text-sm md:text-base"
            />
            <FaSearch className="text-gray-400 mx-3 cursor-pointer" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {[
            'Fitness',
            'Health',
            'Mental Health',
            'Body Building',
            'Dental Health',
            'Sleep',
          ].map((label, index) => (
            <button
              key={index}
              className="py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition-transform duration-300 hover:scale-105"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      <div>
        <img
          src="/images/RightImage.png"
          alt="Right Side Description"
          className="w-full"
        />
      </div>
    </div>
  );
}
