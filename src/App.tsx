import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/home'
import { useState } from 'react';
import { SelectedPage } from './shared/types';
import Benefits from './Components/benefits';
import OurClasses from './Components/OurClasses'
import ContactUs from './Components/ContactUS';
import Footer from './Components/Footer';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(isTopOfPage)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(!isTopOfPage)
      }
         
    }
     window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
      <div className='bg-gray-20 app'>
        <Navbar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} isTopOfPage = {isTopOfPage} />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer setSelectedPage={setSelectedPage} />
      </div>
  )
}

export default App
