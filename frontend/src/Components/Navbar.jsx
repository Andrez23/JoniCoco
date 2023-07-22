import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    //Inicio Navbar
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">   
        <div className="container-fluid">
          <Link className="navbar-brand" >
            Navbar
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='home' className="nav-link active" aria-current="page" >
                  Inicio
                </Link>
              </li>
              <li  className="nav-item">
                <Link to="nosotros" className="nav-link active" aria-current="page" >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="resena" className="nav-link active" aria-current="page" >
                  Reseña
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contactenos" className="nav-link active" aria-current="page" >
                  Contactenos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    //Final Navbar
  );
};

export default Navbar;