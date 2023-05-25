import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react';
import { SelectedPage } from './shared/types';






function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  useEffect(()=>{
    const handleScroll = () => {
      if (window.screenY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.screenY !== 0) {
        setIsTopOfPage(false)
      }
         
    }
     window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
      <div className='bg-gray-20 app'>
        <Navbar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} isTopOfPage = {isTopOfPage} />
      </div>
  )
}

export default App
