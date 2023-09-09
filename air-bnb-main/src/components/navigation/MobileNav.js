import React from 'react'
import {BsSearch} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";


const MobileNav = () => {
  return (

    <div className="p-3 flex justify-center gap-8 bg-gray-100 fixed w-full z-40  bottom-0 lg:hidden font-nun font-semibold text-gray-600 shadow-md shadow-black/20">
    <div className="flex flex-col items-center">
        <BsSearch className='h-6 w-6 font-bold'/>
        <p>Explore</p>
    </div>
    <div className="flex flex-col items-center">
        <AiOutlineHeart className='h-6 w-6 font-bold' />
        <p>Wishlists</p>
    </div>
    <div className="flex  flex-col items-center">
        <CgProfile className='h-6 w-6 font-bold' />
        <p>Log in</p>
    </div>
    </div>
   
  )
}

export default MobileNav