import React from 'react'
import Home from "../Dashboard/Home"
import { Route, Routes } from 'react-router'
import NavbarDashboard from './components/NavbarDashboard'
import Clientes from "../Dashboard/Clientes"
import Facturas from "../Dashboard/Facturas"
import Productos from "../Dashboard/Productos"
<<<<<<< HEAD
import Usuario from "../view/Usuario"
import Pedidos from '../Dashboard/Pedidos'
=======
import Usuario from "../Dashboard/Usuario"
import Pedidos from "../Dashboard/Pedidos"

>>>>>>> 4bb89d4749e8741a6af42cb0773319ea4f0181b2
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
<<<<<<< HEAD
          
=======
           
>>>>>>> 4bb89d4749e8741a6af42cb0773319ea4f0181b2
        </Routes>
        <Routes>
        <Route path='usuario' element={<Usuario/>}/>
        </Routes>
        
    </div>
  )
}

export default Aplication