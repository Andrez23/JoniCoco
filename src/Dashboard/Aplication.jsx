import React from 'react'
import Home from "../Dashboard/Home"
import { Route, Routes } from 'react-router'
import NavbarDashboard from './components/NavbarDashboard'

const Aplication = () => {
  return (
    <div>
        <NavbarDashboard/>  
        <Routes>
      
            <Route path='/' element={<Home/>}/>
           
        </Routes>
        
    </div>
  )
}

export default Aplication