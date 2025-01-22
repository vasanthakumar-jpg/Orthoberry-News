// import React from 'react'
// import { FaSearch } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// export default function Header() {
//   const imagePath = import.meta.env.VITE_IMAGE_PATH;
//   return (
//    <div className='flex justify-between m-4 md:my-[15px] md:mx-[50px]'>
//       <div>
//         <Link to="/">
//         <img src="/images/Orthoberry_logo.png" className='h-9' alt="" />
//         </Link>
//       </div>
//       <div>
//        <div className='flex '>
//        <FaSearch className='m-3 text-lg font-medium cursor-pointer'/>
//        <button className='bg-black text-white rounded-md p-1 md:px-2 md:py-2 hover:bg-white hover:text-black border hover:border-black '>Sign In</button>
//         </div> 
//       </div>
//     </div>
//   )
// }


import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  // Get the image path from environment variables
  const imagePath = import.meta.env.VITE_IMAGE_PATH;

  return (
    <div className="flex justify-between m-4 md:my-[15px] md:mx-[50px]">
      {/* Logo Section */}
      <div>
        <Link to="/">
          {/* Dynamically load the logo path */}
          <img
            src={`${imagePath}Orthoberry_logo.png`}
            className="h-9"
            alt="Orthoberry Logo"
          />
        </Link>
      </div>

      {/* Search and Sign-In Section */}
      <div>
        <div className="flex">
          <FaSearch className="m-3 text-lg font-medium cursor-pointer" />
          <button className="bg-black text-white rounded-md p-1 md:px-2 md:py-2 hover:bg-white hover:text-black border hover:border-black">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
