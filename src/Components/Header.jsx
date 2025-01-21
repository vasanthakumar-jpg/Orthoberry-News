import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <div className='flex justify-between m-4 md:my-[15px] md:mx-[50px]'>
      <div>
        <Link to="/">
        <img src="/Orthoberry_logo.png" className='h-9' alt="" />
        </Link>
      </div>
      <div>
       <div className='flex '>
       <FaSearch className='m-3 text-lg font-medium cursor-pointer'/>
       <button className='bg-black text-white rounded-md p-1 md:px-2 md:py-2 hover:bg-white hover:text-black border hover:border-black '>Sign In</button>
        </div> 
      </div>
    </div>
  )
}
