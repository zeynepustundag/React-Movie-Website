import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import FeaturedSection from './components/FeaturedSection'
import Comment from "./components/Comment"
import Footer from './components/Footer'

import { useEffect, useState } from 'react'

function App() {
 
const [darkMode, setDarkMode]=useState(true);


const darkModeHandler = ()=>{
  setDarkMode(!darkMode);
}

useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark");
  }
},[darkMode])

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <BrowserRouter>
    <Header darkModeHandler={darkModeHandler} darkMode={darkMode}></Header>
    <Hero></Hero>
    <Content></Content>
    <FeaturedSection></FeaturedSection>
    <Comment></Comment>
    <Footer></Footer>
    <Routes>
      <Route path=''></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
