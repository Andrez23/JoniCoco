import React from "react";
import Jonicoco1 from "../images/Jonicoco1.jpeg";
import Jonicoco2 from "../images/Jonicoco6.jpeg";
import Jonicoco3 from "../images/Jonicoco5.jpeg";
import videoCoco from "../images/videoCoco.mp4";
import "../view/EstilosNosotros.css";

const Nosotros = () => {
  return (
    <div className="container mt-5">
      <h1>
        <span style={{ color: "#911625" }}>¿Quienes</span> Somos?
      </h1>
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

        <h2 className="text-aligin-center mt-5 mb-4">FUNDADORES</h2>

        <div className="contenedor">
          <div className="card ">
            <div className="bkg"></div>
            <img src={Jonicoco2} id="profile" alt="" />
            <div className="info">
              <h1>Rosa Angelica Medina</h1>
              <h3>Empresaria</h3>
            </div>
            <div className="descript">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur maxime tempore quibusdam itaque facere. Non a atque
                totam deleniti ex?
              </p>
              <p>-Rosita</p>
            </div>
            <div className="social">
              <img src={Jonicoco2} alt="" /> {/*Aqui van las redes sociales */}
              <img src={Jonicoco2} alt="" />
              <img src={Jonicoco2} alt="" />
              <img src={Jonicoco2} alt="" />
            </div>
          </div>
        </div>

        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
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
            <div className="row tamañoL">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample1"
                >
                  <div className="card card-body">
                    "Nuestra misión es endulzar momentos y crear sonrisas en la
                    vida de las personas. A través de la innovación, la calidad
                    y la creatividad, nos esforzamos por ser líderes en el
                    mercado de las panelitas de coco, ofreciendo productos que
                    deleiten los sentidos y despierten la alegría en cada
                    bocado. Estamos comprometidos con la excelencia en la
                    producción, manteniendo altos estándares de seguridad
                    alimentaria y responsabilidad ambiental. Guiados por nuestra
                    pasión por la diversión y el placer, buscamos ser un símbolo
                    de felicidad en cada ocasión y para cada generación."
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample2"
                >
                  <div className="card card-body">
                    Nos visualizamos como la principal fuente de felicidad e
                    indulgencia en el mercado de las panelitas de coco. Buscamos
                    ser reconocidos por nuestra innovación continua, calidad
                    excepcional y compromiso con la creatividad. Aspiramos a
                    expandir nuestra presencia en nuevos mercados, cautivando
                    los corazones de personas de todas las edades con nuestra
                    amplia gama de productos irresistibles. A medida que
                    crecemos, mantenemos nuestro enfoque en la sostenibilidad y
                    la responsabilidad social, contribuyendo positivamente a las
                    comunidades en las que operamos. Nuestra visión es ser el
                    nombre al que acuden las personas en busca de momentos
                    dulces y memorables, creando conexiones duraderas a través
                    de la alegría que brindamos."
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
                                natural de panela y coco, para obtener un
                                producto de alta calidad, buen precio y sabor.{" "}
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
    </div>
  );
};

export default Nosotros;
