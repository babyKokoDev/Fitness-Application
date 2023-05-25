import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react';
import { SelectedPage } from './shared/types';




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
      <div className='bg-gray-20 app'>
        <Navbar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} />
      </div>
  )
}

export default App
