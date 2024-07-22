import React from 'react'

import herospiderman from "../assets/hero-spiderman.jpg"

import { FaPlayCircle } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  return (
    <div className="h-128 relative top-20 lg:top-24 text-xs md:text-base">
    <img className='w-full h-full' src={herospiderman} alt="hero-spiderman" />
    <div className='group absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black pl-10'>
      <div className='xl:w-5/6 m-auto'>
        <h3 className='text-purple-400 text-base md:text-lg lg:text-xl group-hover:mb-2 duration-500'>ACTION · ADVENTURE · SCI-FI</h3>
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl group-hover:mb-2 duration-500' >Spider-Man: No Way Home</h1>
        <p className='text-white  group-hover:mb-2 duration-500 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tenetur modi, dicta, aperiam illum harum doloribus dolorem, asperiores recusandae quibusdam sapiente fugit? Earum suscipit sunt ex, ipsum ad harum! Enim.</p>
      </div>
      <div className='flex items-center opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-1000 xl:w-5/6 m-auto'>
        <div className='cursor-pointer flex items-center'>
          <h3 className='text-white hover:text-purple-400 text-sm xs:text-base md:text-lg lg:text-xl whitespace-nowrap'>WATCH TRAILER</h3>
          <FaPlayCircle className='text-purple-400 ml-1 xs:ml-4' />
        </div>
        <div className='cursor-pointer flex items-center ml-4 sm:ml-8'>
          <h3 className='text-white hover:text-purple-400 text-sm xs:text-base md:text-lg lg:text-xl whitespace-nowrap'>FULL SYNOPSIS</h3>
          <FaArrowCircleRight className='text-purple-400 ml-1 xs:ml-4' />
        </div>
      </div>
      <div className='opacity-0 group-hover:opacity-100 flex items-center text-3xl  xl:w-5/6 m-auto'>
        <GoDotFill className='text-white' />
        <GoDotFill className='text-purple-400' />
        <GoDotFill className='text-white' />
        <GoDotFill className='text-white' />
      </div>
    </div>
  </div>
  )
}

export default Hero