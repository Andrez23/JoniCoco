import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import '../estilos_jonicoco.css';



const Navbar = () => {
  return (
    //Inicio Navbar
    <div>

      <div className=" color_jonicoco">
      <Link class Name="navbar-brand" >
            <img src={Logo} className="w-25 p-3 h-50" alt="..." />
          </Link>
      </div>
      <div>

      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">   
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-2 ">
              <li className="nav-item">
                <Link to='/' className="nav-link active px-5" aria-current="page" >
                  Inicio
                </Link>
              </li>
              <li  className="nav-item">
                <Link to="nosotros" className="nav-link active px-5" aria-current="page" >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="resena" className="nav-link active px-5" aria-current="page" >
                  Reseña
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contactenos" className="nav-link active px-5" aria-current="page" >
                  Contactenos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
    //Final Navbar
  );
};

export default Navbar;