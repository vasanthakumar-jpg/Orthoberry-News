import React, { useState } from 'react';
import { IoEllipse, IoFilterOutline } from 'react-icons/io5';
import { TfiMenuAlt } from 'react-icons/tfi';
import { HashLink } from 'react-router-hash-link';

export default function LatestBlog() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State to control overlay visibility

  const blogs = [
    { id: 'smiling', src: '/images/smiling.png', alt: 'Smiling' },
    { id: 'young', src: '/images/young.png', alt: 'Young' },
    { id: 'beach', src: '/images/beach.png', alt: 'Beach' },
    { id: 'yoga', src: '/images/yoga.png', alt: 'Yoga' },
    { id: 'cycle', src: '/images/cycle.png', alt: 'Cycle' },
    { id: 'ear', src: '/images/ear.png', alt: 'Ear' },
  ];

  const handleOverlayToggle = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div>
      <div className="flex justify-between my-6 mx-6">
        <h1 className="text-2xl md:text-4xl font-medium">Latest Blogs</h1>
        <div className="flex gap-2 text-[24px] md:text-[32px] ">
          <IoFilterOutline className='transition duration-300 hover:scale-110 cursor-pointer' onClick={handleOverlayToggle} /> {/* Toggle overlay on icon click */}
          <TfiMenuAlt className='transition duration-300 hover:scale-110 cursor-pointer' onClick={handleOverlayToggle} />
        </div>
      </div>
      <div className="mx-4 flex flex-col">
        {blogs.map((blog) => (
          <Blog key={blog.id} to={`/content/${blog.id}`} imageSrc={blog.src} alt={blog.alt} />
        ))}
      </div>

      {/* Overlay for filters */}
      {isOverlayVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center md:justify-end items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[543px] h-[352px] relative px-2 md:px-4 mx-4 md:right-20 ">
            <div className='flex justify-between my-4'>
            <h2 className="text-2xl font-semibold ">Topics</h2>
            <button className="text-base p-2 md:px-4 md:py-2 border border-black rounded-[5px] hover:border-black hover:bg-black hover:text-white">Topics All Topics</button>
            </div>
            {/* Filter content */}
            <div>
              {/* Your filter options here */}
              <div className='flex flex-wrap gap-2 md:gap-3 '>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Fitness</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Dental Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Sleep</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Mental Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Sleep</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Gut Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Mental Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Virus</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Body Building</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Sleep</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg hover:border-black hover:bg-black hover:text-white transition duration-300 hover:scale-110'>Dental Health</button>
            </div>
            </div>
            {/* Bottom right corner buttons */}
            <div className="absolute bottom-4 right-4 flex gap-4 ">
              <button
                onClick={handleOverlayToggle}
                className="border border-black text-sm font-medium py-2 px-4 rounded-md transition duration-300 hover:scale-110"
              >
                Cancel
              </button>
              <button
                onClick={handleOverlayToggle}
                className="bg-black text-white text-sm font-medium py-2 px-4 rounded-md transition duration-300 hover:scale-110"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Blog = ({ to, imageSrc, alt }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 my-2">
      <div className="cursor-pointer">
        <HashLink smooth to={to}>
          <img
            src={imageSrc}
            alt={alt}
            className="h-full w-[400px] transform transition-transform duration-300 hover:scale-95"
          />
        </HashLink>
      </div>
      <div className="flex flex-col md:flex-col-reverse">
        <div className="flex gap-1">
          <button className="flex py-2 px-3 md:p-3 bg-[#EEEFFF] rounded-[15px] text-base hover:bg-[#D8D8FF] hover:text-[#0512FF] transition-colors duration-300">
            <IoEllipse className="text-[6px] my-2.5 mr-1 text-[#0512FF]" /> Health
          </button>
          <button className="flex py-2 px-3 md:p-3 bg-[#FFEEEE] rounded-[15px] text-base hover:bg-[#FFCCCC] hover:text-[#ff0509] transition-colors duration-300">
             <IoEllipse className="text-[6px] my-2.5 mr-1 text-[#FF0509]" /> Diabetes
          </button>
        </div>
        <div>
          <h1 className="font-medium text-lg md:text-2xl">
            Uncontrolled diabetes increases risk of hearing loss; doctors call for more awareness, screening Premium
          </h1>
          <p className="text-[#7E7E7E] text-sm my-3">
            Uncontrolled diabetes increases the risk of hearing loss due to the damage high blood sugar causes to blood
            vessels and nerves essential for hearing. Despite this, hearing health is rarely prioritised in...
          </p>
        </div>
      </div>
    </div>
  );
};
