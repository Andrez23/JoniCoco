import React from "react";
import { Link } from "react-router-dom";
import "./StiloJonicoco.css";


const Navbar = () => {
  return (
    //Inicio Navbar
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg colormenu">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto font">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="nosotros"
                  className="nav-link active py-3 px-5 text-white btn-2 "
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="resena"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  aria-current="page"
                >
                  Reseña
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contactenos"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  aria-current="page"
                >
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
