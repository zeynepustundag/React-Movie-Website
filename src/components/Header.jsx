import React from 'react'

import { Link } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header = ({darkModeHandler,darkMode}) => {
    return (
        <div className='header-div'>
            <div className='header-div-fixed'>
                <div className={`header-container ${darkMode ? "dark": ""}`}>
                <div className='header-left' >
                    <h1 className='header-logo'>CinemaLand</h1>
                    <div className='links'>
                        <Link to="/movies" className='link ml-10'>MOVIES</Link>
                        <Link to="/celebrities" className="link">CELEBRITIES</Link>
                        <Link to="/blog" className="link">BLOG</Link>
                        <Link to="/news" className="link">NEWS</Link>
                        <Link to="/about" className="link">ABOUT</Link>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-search'>
                        <input type="text" />
                        <IoSearch />
                    </div>
                    <Link className='header-login'>LOGIN</Link>
                    <Link className='header-signup'>SIGN UP</Link>
                </div>
                <div className='header-menu-logo'>
                    <IoMenu />
                </div>
                <div className='flex'>
                <MdLightMode className={`cursor-pointer ${darkMode ? "block" : "hidden"}`} onClick={darkModeHandler}/>
                <MdDarkMode className={`cursor-pointer ${darkMode ? "hidden" : "block"}`} onClick={darkModeHandler}/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header