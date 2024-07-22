import React from 'react'

import { Link } from "react-router-dom"

import MoviesData from "../helpers/MoviesData";
import NewsData from "../helpers/NewsData";

import { FaPlay } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const Content = () => {
    return (
        <div className='bg-white dark:bg-black dark:text-white text-black lg:flex lg:items-center lg:justify-center flex-col py-24'>
            <div className='lg:flex w-full xl:w-5/6 xl:space-x-20'>
                <div className='lg:basis-2/3 flex flex-col mt-8'>
                    <div className='ml-10 space-x-4 mb-8 text-lg'>
                        <Link className="uppercase text-purple-400 pr-2 border-r-2 border-purple-400 border-opacity-50">Latest</Link>
                        <Link className="uppercase hover:text-purple-400 pr-2 border-r-2 border-purple-400 border-opacity-50">Popular</Link>
                        <Link className="uppercase hover:text-purple-400 ">Best</Link>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 flex-1 sm:ml-10'>
                        {MoviesData.map((item) => {
                            return (
                                <div key={item.id} className='group relative overflow-hidden'>
                                    <img className='w-full h-full top-0 left-0 group-hover:opacity-50 group-hover:scale-110 duration-500 object-cover' src={item.MovieImg} alt="" />
                                    <div className='absolute px-6 bottom-8'>
                                        <h1 className='uppercase dark:group-hover:text-purple-400 group-hover:text-purple-600 group-hover:mb-4 font-bold duration-500 text-white'>{item.MovieTitle}</h1>
                                        <p className='opacity-0 group-hover:opacity-100 mb-2 text-xs group-hover:mb-10'>{item.MovieInfo}</p>
                                    </div>
                                    <div className='absolute bottom-8 px-6 flex items-center space-x-4  opacity-0 group-hover:opacity-100 duration-500'>
                                        <FaPlay className=' hover:text-purple-400 cursor-pointer' />
                                        <FaArrowRight className=' hover:text-purple-400 cursor-pointer' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='lg:basis-1/3 flex flex-col gap-3 lg:h-full lg:w-full'>
                    <Link className='uppercase mb-8 text-lg mt-8 ml-10'>Hot News</Link>
                    <div className='lg:flex lg:flex-col gap-3 lg:h-full md:grid md:grid-cols-2 flex flex-col sm:ml-10'>
                    {NewsData.map((item) => {
                        return (
                            <div key={item.id} className='group flex space-x-8'>
                                <img className='w-28 h-32' src={item.NewsImg} alt="" />
                                <div className='flex flex-col gap-3 group-hover:text-purple-400 cursor-pointer duration-500'>
                                    <p className='text-sm' >{item.NewsContent}</p>
                                    <span className='text-xs tracking-tight'>{item.NewsDate}</span>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Content

