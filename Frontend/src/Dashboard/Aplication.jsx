import React from 'react'
import Home from "../Dashboard/Home"
import { Route, Routes } from 'react-router'
import NavbarDashboard from './components/NavbarDashboard'
import Clientes from "../Dashboard/Clientes"
import Facturas from "../Dashboard/Facturas"
import Productos from "../Dashboard/Productos"
import Usuario from "../view/Usuario"
import Pedidos from '../Dashboard/Pedidos'
const Aplication = () => {
  return (
    <div>
        <NavbarDashboard/>  
        <Routes>
      
            <Route path='/' element={<Home/>}/>
            <Route path='clientes' element={<Clientes/>}/>
            <Route path='productos' element={<Productos/>}/>
            <Route path='facturas' element={<Facturas/>}/>
            <Route path='pedidos' element={<Pedidos/>}/>
          
        </Routes>
        <Routes>
        <Route path='Usuario' element={<Usuario/>}/>
        </Routes>
        
    </div>
  )
}

export default Aplication