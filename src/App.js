import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Contactenos from './view/Contactenos';
import Home from './view/Home';
import Nosotros from './view/Nosotros';
import Resena from './view/Resena';
import Footer from './Components/Footer';

import Login from "./view/Login"
import Aplication from './Dashboard/Aplication'
import NavbarDashboard from './Dashboard/components/NavbarDashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
        <Route path='resena' element={<Resena/>}/>
        <Route path='contactenos' element={<Contactenos/>}/>
        <Route path="login" element={<Login/>} />
      </Routes>
      <Footer/>



      <NavbarDashboard/>
      <Routes>
      <Route path="login" element={<Login/>} />
        <Route exact path="/aplication/*" element={<Aplication/>} />
       <Route path="*" element={<h1>Not found - No insista tienes una pagina que no existe</h1>} />
        
      </Routes>
    </div>
  );
}

export default App;
