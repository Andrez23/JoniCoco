import React from 'react'

import { Route, Routes } from 'react-router'
import Clientes from "../Dashboard/Clientes"
import Home from "../Dashboard/Home"
import Pedidos from "../Dashboard/Pedidos"
import Productos from "../Dashboard/Productos"
import Usuario from "../Dashboard/Usuario"
import NavbarDashboard from './components/NavbarDashboard'

const Aplication = () => {
  return (
    <div>
        <NavbarDashboard/>  
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='clientes' element={<Clientes/>}/>
              <Route path='productos' element={<Productos/>}/>
              <Route path='pedidos' element={<Pedidos/>}/>
              <Route path='usuario' element={<Usuario/>}/>
        </Routes>
        
        
    </div>
  )
}

export default Aplication