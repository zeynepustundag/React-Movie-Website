import React from 'react'

import { Link } from "react-router-dom"

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='bg-white dark:bg-black dark:text-white text-black pb-12'>
            <div className='flex xl:w-5/6 xl:m-auto flex-wrap mobile:flex-nowrap sm:ml-10'>
                <div className='flex mobile:basis-3/12 flex-col basis-1/2'>
                    <h1 className='p-2 pl-0 text-base lg:text-xl cursor-pointer font-playwrite text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200'>CinemaLand</h1>
                    <p className='xl:hidden mt-4 text-opacity-80 flex text-xs md:text-base'><FaRegCopyright /> 2024 CinemaLand. <br /> All rights reserved.</p>
                </div>
                <div className='mobile:basis-4/12 flex flex-col basis-1/2'>
                    <h2 className='text-base md:text-xl mb-4 text-purple-400'>LINKS</h2>
                    <div className='grid grid-cols-2 w-2/3'>
                        <Link className='text-xs md:text-sm mb-2'>MOVIES</Link>
                        <Link className='text-xs md:text-sm mb-2'>CELEBRITIES</Link>
                        <Link className='text-xs md:text-sm mb-2'>BLOG</Link>
                        <Link className='text-xs md:text-sm mb-2'>NEWS</Link>
                        <Link className='text-xs md:text-sm mb-2'>ABOUT</Link>
                    </div>
                </div>
                <div className='mobile:basis-5/12 flex-col space-y-6 basis-1'>
                    
                        <h2 className='uppercase text-purple-400 text-base md:text-xl mb-4'>Follow Us</h2>
                        <div className='flex space-x-3 text-sm md:text-base'>
                            <FaInstagram />
                            <FaFacebookF />
                            <FaXTwitter />
                        </div>
                    
                    <div className='flex space-x-2 text-sm md:text-base'>
                        <input className='rounded-3xl outline-none p-2 border text-black border-black' type="text" placeholder='enter email address..'/>
                        <button className='bg-purple-500 rounded-3xl p-2'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='hidden xl:block border-t border-opacity-50 dark:border-white border-black w-5/6 mx-auto mt-6'>
                <p className='mt-4 text-opacity-80 flex items-center justify-center'><FaRegCopyright /> 2024 CinemaLand. All rights reserved.</p>
                </div>
        </div>
    )
}

export default Footer