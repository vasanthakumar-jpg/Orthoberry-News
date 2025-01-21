import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function HomeSearch() {
  return (
    <div className='flex justify-between lg:flex-row flex-col my-[50px] gap-[15px]'>

{/* Left Side Image  */}
      <div>
      <img src="/images/LeftImage.png" alt="Description" />

      </div>
{/* Center Content */}
      <div className='2xs:my-4 md:my-0'>
      
        <div className='flex flex-col justify-center '>
            <h1 className='font-medium text-[27px] text-center md:textt-start lg:text-[40px]'>Smarter Without Distraction</h1>
            <p className='font-medium  md:text-2xl text-center text-[#838383] '>NewsFeed for ortho experts</p>
        </div> 
       
        
            <div className='rounded-[50px] border border-[#DBDBDB]  my-4 shadow-md mx-6' >
                <div className='flex justify-between cursor-pointer'>

                   <input type="text" placeholder='Seacrh for the wellness tips, medical breakthrough, etc' 
                   className='w-full m-2 outline-none cursor-pointer' />
                    <FaSearch className=' text-gray-400 my-3 md:my-3 mx-2 cursor-pointer'/>
                </div>
            </div>

            <div className='flex flex-wrap gap-[5px] justify-center items-center'>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Fitness</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Mental Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Mental Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Body Building</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Dental Health</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Sleep</button>
                <button className='py-[5px] px-2.5 border border-[#C0C3C8] rounded-[8px] text-sm md:text-lg cursor-pointer hover:border-black hover:text-black transition duration-300 hover:scale-105'>Sleep</button>
            </div>
      </div>

{/* Right Side Image  */}
      <div>
      <img src="/images/RightImage.png" alt="Description" className='2xs:float-end ' />
      
      </div>
    </div>
  )
}
