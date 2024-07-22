import React from 'react'

import transformers from "../assets/transformers.jpg"

const FeaturedSection = () => {
    return (
        <div className='bg-black dark:bg-white text-white dark:text-black flex items-center relative h-56 justify-center'>
            <div className='absolute w-24 h-24 rounded-full bg-purple-400 -top-10 -left-5 sm:left-10 text-center flex items-center -rotate-45 border-2 border-black'>
                <p className='font-bold ml-2'>POPULAR</p>
            </div>
            <div className='lg:basis-1/2 md:basis-1/3 hidden md:block ml-12 pl-10'>
                <img className='rounded-full border-2 border-black w-80 h-60' src={transformers} alt="" />
            </div>
            <div className='flex flex-col lg:basis-1/2 md:basis-2/3 md:p-0 p-10 pt-14 lg:ml-0 ml-5'>
                <h3 className='text-purple-400 uppercase font-bold text-sm sm:text-base'>Action · Adventure · Sci-Fi</h3>
                <h1 className='uppercase  text-xl sm:text-2xl'>Transformers: Rise of the Beasts</h1>
                <p className='text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorum sit maiores ipsum, velit veritatis! Consectetur veniam rerum sunt dolore?</p>
                <span className='font-bold tracking-tighter text-sm sm:text-base'>15 WINS 42 NOMINATIONS</span>
            </div>
        </div>
    )
}

export default FeaturedSection