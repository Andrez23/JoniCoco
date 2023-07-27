import React from "react";
import EditJoniCoco3 from "../images/EditJoniCoco3 - banner.png";
import Jonicoco2 from "../images/Jonicoco2.jpeg";
import videoCoco from "../images/videoCoco.mp4";
import "../view/EstilosHome.css";
import MapContainer from "../view/MapContainer";

const Home = () => {
  return (
    <div className="mb-5">
      <header className="img-fluid">
        <img src={EditJoniCoco3} className="d-block w-100 cover" alt="..." />
      </header>
      {/*inicio primera columna */}
      <div className="mt-5 fonduco">
        <h1>Algunos productos</h1>
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="container">
                <img src={Jonicoco2} style={{ width: "75%" }} alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="container" style={{ marginTop: "7%" }}>
                <div className="base_header">
                  <span>
                    <small className="bor_header_left"></small>Elije tus
                    VACACIONES<small className="bor_header_right"></small>
                  </span>
                  <h3>Nosotros las hacemos realidad.</h3>
                </div>
                <div className="base_footer">
                  <p>
                    Si estás pensando en viajar, planea tus vacaciones con
                    Jukumari Travels y no dejes de vivir una experiencia
                    inolvidable al lado de tu pareja, amigos, o familiares.{" "}
                    <br />
                    <br />
                    Deja todo en nuestras manos y dedícate a disfrutar y a que
                    te atiendan como te lo mereces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Final primera columna */}
        {/*Inicio segunda columna */}
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="container" style={{ marginTop: "7%" }}>
                <div className="base_header">
                  <span>
                    <small className="bor_header_left"></small>Elije tus
                    VACACIONES<small className="bor_header_right"></small>
                  </span>
                  <h3>Nosotros las hacemos realidad.</h3>
                </div>
                <div className="base_footer">
                  <p>
                    Si estás pensando en viajar, planea tus vacaciones con
                    Jukumari Travels y no dejes de vivir una experiencia
                    inolvidable al lado de tu pareja, amigos, o familiares.{" "}
                    <br />
                    <br />
                    Deja todo en nuestras manos y dedícate a disfrutar y a que
                    te atiendan como te lo mereces.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="container">
                <img src={Jonicoco2} style={{ width: "75%" }} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/*Final segunda columna */}
        {/*Inicio tercera columna */}
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="col-md-8 col-lg-6 joni2 border rounded-end-5 ">
              <div className="container">
                <img src={Jonicoco2} style={{ width: "100%" }} alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="container" style={{ marginTop: "2%" }}>
                <div className="base_header">
                  <span>
                    <small className="bor_header_left"></small>Elije tus
                    VACACIONES<small className="bor_header_right"></small>
                  </span>
                  <h3>Nosotros las hacemos realidad.</h3>
                </div>
                <div className="base_footer" >
                  <p>
                    Si estás pensando en viajar, planea tus vacaciones con
                    Jukumari Travels y no dejes de vivir una experiencia
                    inolvidable al lado de tu pareja, amigos, o familiares.{" "}
                    <br />
                    <br />
                    Deja todo en nuestras manos y dedícate a disfrutar y a que
                    te atiendan como te lo mereces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Final tercera columna */}
      {/*Inicio Conocenos */}
      <div>
        <div className="mt-5">
          <h1>Conocenos</h1>
          <div className="col-md-12 col-lg-12">
            <div className="container" style={{ padding: "0%" }}>
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  controls
                  width="100%"
                  height="100%"
                  className="border border-3 rounded-top "
                >
                  <source src={videoCoco} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Final conocenos */}
      {/*Inicio Ubicacion */}
      <div>
        <div className="mt-5 mb-5">
          <h1>Ubicacion</h1>
          <div className="container" style={{ marginTop: "3%" }}>
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="container">
                  <MapContainer />
                </div>
              </div>
              <div className="col-md- col-lg-4">
                <div className="container" style={{ marginTop: "40%" }}>
                  <div className="base_header">
                    <span>
                      <small className="bor_header_left"></small>Local Físico
                      <small className="bor_header_right"></small>
                    </span>
                    <h3>Dónde nos Ubicamos.</h3>
                  </div>
                  <div className="base_footer">
                    <p>
                      <strong>Atención de Calidad</strong>
                      <br />
                      Estamos ubicados en el Centro comercial
                      <h3>Plaza Real</h3>
                      Segundo piso <h3>L-205</h3>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Final Ubicación */}
      </div>
    </div>
  );
};

export default Home;
