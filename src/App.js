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

/*import Homee from "./Tienda/Inicio";*/
import Inicio from './Tienda/Inicio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
        <Route path='resena' element={<Resena/>}/>
        <Route path='contactenos' element={<Contactenos/>}/>
        <Route path='login' element={<Login/>}/>
      <Route path='inicio' element={<Inicio/>}/>
      <Route exact path="/aplication/*" element={<Aplication/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
