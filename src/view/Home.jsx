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
      <hr />
      {/*inicio primera columna */}
      <div className="mt-0 fonduco">
        <h1 className="titulo">Algunos productos</h1>
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="container">
                <img
                  className="bordeado rounded-start"
                  src={Jonicoco2}
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="container" style={{ marginTop: "7%" }}>
                <div className="base_header">
                  <span>
                    <small className="bor_header_left"></small> Producto1
                  </span>
                  <h3>Cajita</h3>
                </div>
                <div className="base_footer">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vero dolorem eligendi nobis, distinctio quasi recusandae
                    officiis veritatis at non maiores molestias deleniti
                    accusamus et ab alias vitae tempora cum. Commodi.{" "}
                  </p>
                  <button className="leerMas">Mas información</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Final primera columna */}
        {/*Inicio segunda columna */}
        <div className="container" style={{ marginTop: "5%" }}>
          <div className="row ">
            <div className="col-md-12 col-lg-6">
              <div className="container" style={{ marginTop: "7%" }}>
                <div className="base_header">
                  <span>
                    <small className="bor_header_left"></small>Producto2
                  </span>
                  <h3>Bolsita</h3>
                </div>
                <div className="base_footer">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    cumque dolore dicta at odio aperiam velit a, eius quaerat
                    libero, sapiente assumenda quis nemo neque tenetur quod quas
                    eligendi magni!
                  </p>
                  <button className="leerMas">Mas información</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="container">
                <img
                  className="bordeado rounded-end"
                  src={Jonicoco2}
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/*Final segunda columna */}
        {/*Inicio tercera columna */}
        <div className="container" style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <div className="container">
                <img
                  className="bordeado rounded-start"
                  src={Jonicoco2}
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="container" style={{ marginTop: "2%" }}>
                <div className="base_header">
                  <span>
                    <small className="bor_header_left"></small>Producto3
                  </span>
                  <h3>Tarriro</h3>
                </div>
                <div className="base_footer">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates unde non ipsam vel, iste itaque ea sunt aut
                    explicabo esse perferendis quam! Aliquam eaque quibusdam,
                    dolor doloribus distinctio id aut!
                  </p>
                  <button className="leerMas">Mas información</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Final tercera columna */}
      <hr />
      {/*Inicio Conocenos */}

      <div class="container text-center">
      <h1>Conocenos</h1>
        <div class="row">
          <div class="col">
            <div>
              <div className="mt-3">
                <div className="col-md-12 col-lg-12 ">
                  <div className="container " style={{ padding: "0%" }}>
                    <div className=" embed-responsive embed-responsive-16by9">
                      <video 
                        controls
                        width="100%"
                        height="100%"
                        className="video"
                      >
                        <source src={videoCoco} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">2 of 2</div>
        </div>
        {/*Final conocenos */}
        <hr />
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
    </div>
  );
};

export default Home;
