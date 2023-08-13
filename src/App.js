import { Route, Routes } from 'react-router-dom';
import './App.css';

import Contactenos from './view/Contactenos';
import Home from './view/Home';
import Nosotros from './view/Nosotros';
import Resena from './view/Resena';

import Login from "./view/Login"
import Aplication from './Dashboard/Aplication'

import Homee from "./Tienda/Inicio";
import Inicio from './Tienda/Inicio';


function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='nosotros' element={<Nosotros/>}/>
      <Route path='resena' element={<Resena/>}/>
      <Route path='contactenos' element={<Contactenos/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='inicio' element={<Inicio/>}/>

      <Route exact path="/aplication/*" element={<Aplication/>} />
     </Routes>

     
    </div>
  );
}

export default App;
