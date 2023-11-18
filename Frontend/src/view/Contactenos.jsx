import React from "react";
import Footer from "../Components/Footer";
import "../view/EstilosContactanos.css";
import MapContainer from "../view/MapContainer";
import Jonicoco8 from "../images/Jonicoco8.jpg";

const Contactenos = () => {
  return (
    <div>
      <div className="fondo">
        {/*Inicio de ubicación*/}
        <div style={{ height: "400px", width: "100%" }}>
          <MapContainer />
        </div>
        {/*Final Ubicación */}
        <div className="mt-5">
          <div className="container" style={{ marginTop: "3%" }}>
            <div className="mt-5">
              <div className="container" style={{ marginTop: "3%" }}>
                <div className="row ">
                  <div className="col-md-12 col-lg-6 ">
                    <div className="container" style={{ marginTop: "7%" }}>
                      <div className="base_footer mb-5 ">
                        <div className="borde">
                          <img className="imgC" src={Jonicoco8} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="container" style={{ marginTop: "15%" }}>
                      <div className="base_footer">
                        <h3 className="mb-3">Horarios de atención</h3>
                        <hr />
                        <p className="parraf">
                          <span style={{ color: "#911625" }}>
                            Lunes a viernes:{" "}
                          </span>
                          8am a 12:00pm <br /> 2pm a 4 y 30pm <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contactenos;
