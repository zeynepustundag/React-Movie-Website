import React from 'react'

import CommentsData from "../helpers/CommentsData";

import { Link } from "react-router-dom"

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const Blog = () => {
    return (
        <div className='bg-white dark:bg-black dark:text-white text-black py-24'>
            <Link className='uppercase text-purple-400 ml-10 text-xl xl:ml-36'>Popular Comments</Link>
            <div className='grid grid-cols-6 gap-8 mt-8 xl:w-5/6 xl:mx-auto sm:pl-10'>
                {CommentsData.map((item) => {
                    return (
                        <div key={item.commentId} className='border border-purple-400 md:col-span-3 col-span-6'>
                            <div className='flex items-center justify-between border-b border-purple-400 px-4 py-2'>
                                <h3 className='uppercase text-sm'>{item.commentTitle}</h3>
                                <img className='w-10 h-10 rounded-full' src={item.commentImg} alt="avatar" />
                            </div>
                            <div>
                                <p className='p-4 text-sm'>{item.commentContent}</p>
                            </div>
                            <div className='flex items-center justify-end border-t border-purple-400 pr-4 py-2 text-xs'>
                                <span className='mr-2'>{item.commentDate}</span>
                                <div className='flex items-center mr-1'>
                                    <FaRegComment />
                                    <span>{item.commentFromOthers}</span>
                                </div>
                                <div className='flex items-center'>
                                    <FaRegHeart />
                                    <span>{item.commentLike}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog

