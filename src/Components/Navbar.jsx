import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StiloJonicoco.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  const navigateTo = (path) => {
    handleLinkClick();
    navigate(path);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg colormenu">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end${
              isCollapsed ? "" : " show"
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto font">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("/")}
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="nosotros"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("/")}
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="resena"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("/")}
                  aria-current="page"
                >
                  Reseña
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contactenos"
                  className="nav-link active py-3 px-5 text-white btn-2"
                  onClick={() => navigateTo("/")}
                  aria-current="page"
                >
                  Contactenos
                </Link>
              </li>
            </ul>
            {/*<form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>*/}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;