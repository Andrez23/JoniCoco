import { Route, Routes } from 'react-router-dom';
import './App.css';

import Contactenos from './view/Contactenos';
import Home from './view/Home';
import Nosotros from './view/Nosotros';
import Resena from './view/Resena';

import Login from "./view/Login"
import Aplication from './Dashboard/Aplication'


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
        <Route path='resena' element={<Resena/>}/>
        <Route path='contactenos' element={<Contactenos/>}/>
        <Route path="login" element={<Login/>} />
        <Route exact path="/aplication/*" element={<Aplication/>} />
       
      </Routes>
      

     
    </div>
  );
}

export default App;
