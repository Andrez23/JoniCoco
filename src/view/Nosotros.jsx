import React from "react";
import Jonicoco1 from "../images/Jonicoco1.jpeg";
import Jonicoco2 from "../images/Jonicoco6.jpeg";
import Jonicoco3 from "../images/Jonicoco5.jpeg";
import videoCoco from "../images/videoCoco.mp4";

const Nosotros = () => {
  return (
    <div className="mt-5">
      <h1><span style={{color:"#911625"}}>¿Quienes</span> Somos?</h1>
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
                      className="npm video"
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
        <h2 className="text-aligin-center mt-5">FUNDADORES</h2>

        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={Jonicoco1} className=" w-50" alt="jonicoco1" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">
                  Etiqueta de la primera diapositiva
                </h5>
                <p className="text-white">
                  Algún contenido placeholder representativo para la primera
                  diapositiva.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Jonicoco2} className=" w-50" alt="jonicoco2" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-black">
                  Etiqueta de la segunda diapositiva
                </h5>
                <p className="text-black">
                  Algún contenido placeholder representativo para la segunda
                  diapositiva.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Jonicoco3} className=" w-50" alt="jonicoco3" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-black">
                  Etiqueta de la tercera diapositiva
                </h5>
                <p className="text-black">
                  Algún contenido placeholder representativo para la tercera
                  diapositiva.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>

        <div className="mt-5">
          <p className="d-inline-flex gap-1">
            <a
              className="btn btn-danger"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              Vision
            </a>
            <button
              className="btn btn-danger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              Mision
            </button>
            <button
              className="btn btn-danger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="multiCollapseExample1 multiCollapseExample2"
            >
              Mostrar ambos
            </button>
          </p>
          <div className="row">
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div className="card card-body">
                  En un futuro se plantea que Jonicoco este presente en
                  almacenes de cadena del pais, que pueda atreaer al visitante
                  en aeropuertos y terminales.
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <div className="card card-body">
                  Some placeholder content for the second collapse component of
                  this multi-collapse example. This panel is hidden by default
                  but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-aligin-center">
            <span style={{ color: "#911625" }}>Jonicoco </span>tiene:
          </h2>
          <div class="container text-center">
            <div className="mt-5">
              <div className="container-md flex ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col ">
                    <div className="card h-100">
                      <img
                        src={Jonicoco1}
                        alt="Forma"
                        className="card-img-top"
                        width="300"
                        height="250"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <figure className="text-center">
                            <h2>Artesanias realizadas en coco</h2>
                            <p>
                              Con el producto restante tal como la cascara del
                              coco, realizamos artesanias de excelente calidad
                              asi dandole un buen uso a todo nuestro material
                              primario
                            </p>
                          </figure>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={Jonicoco2}
                        alt="Forma"
                        className="card-img-top"
                        width="400"
                        height="300"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <figure className="text-center">
                            <h2>Ingredientes de alta calidad</h2>

                            <p>
                              {" "}
                              Jonicoco pretende Fabricar una excelente mezcla
                              natural de panela y coco, para obtener un producto
                              de alta calidad, buen precio y sabor.{" "}
                            </p>
                          </figure>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={Jonicoco3}
                        alt="Prov"
                        className="card-img-top"
                        width="300"
                        height="250"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <figure className="text-center">
                            <h2>Estamos entrando en el comercio local</h2>
                            <p>
                              Acompañar las panelitas con una deliciosa
                              mazamorra pilada y prestar un excelente servicio
                              en el local principal.
                            </p>
                          </figure>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
