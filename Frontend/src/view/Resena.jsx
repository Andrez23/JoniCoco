import React from "react";
import Portada from "../images/Portada.jpg";
import Footer from "../Components/Footer";
import "../view/EstilosResena.css";

const Resena = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 mt-2">
            <h1 className="mb-4">
              <span style={{ color: "#911625" }}>Nuestra </span>historia
            </h1>
            <div className="text-start textT">
              Jonicoco tuvo su inicio alrededor del año 2019, participando en
              mercados campesinos y en el parque de nuestro municipio natal, Don
              Matías. Su presencia fue bien recibida tanto por comerciantes como
              por individuos independientes. Durante la infancia de Doña Rosa,
              surgieron cuestionamientos relacionados con el coco. Su padre
              solía llevarla a misa cada fin de semana, y después de esta,
              solían comprar un dulce: una velita y un pedazo de coco. Esta
              combinación de ingredientes generó curiosidad en Doña Rosa,
              planteándose cómo fusionarlos. Con el paso de los años, su hija
              viajó a Chocó debido a asuntos de estudio y regresó con la idea de
              crear bombones de coco. Doña Rosa intentó recrear la receta
              tradicional, pero sus esfuerzos no dieron los resultados
              esperados. A pesar de esto, no se rindió y continuó experimentando
              con distintas variaciones del coco, lo que finalmente la llevó a
              crear las panelitas de coco. Una vez logrado el producto deseado,
              comenzaron a participar en plazas y mercados, y gracias a su
              desempeño exitoso, despertaron el interés de la alcaldía.
              Recibieron apoyo de la oficina de productividad y competitividad,
              lo cual contribuyó a que el producto ganara visibilidad entre la
              población local. Posteriormente, la llegada de la pandemia actuó
              como un catalizador para el crecimiento y la funcionalidad de la
              empresa. La demanda aumentó considerablemente, ya que las
              residencias y las empresas locales, como las fábricas de
              confección, realizaron numerosos pedidos. Este contexto impulsó la
              expansión de Jonicoco a varias áreas del norte de Antioquia. Como
              resultado de estos acontecimientos, están muy satisfechos con los
              logros obtenidos en los últimos meses.
            </div>
          </div>

          {/* Foto madre e hijo */}
          <div className="col-md-6 mt-3">
            <div className="container">
              <img
                className="bordeado img-fluid"
                src={Portada}
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resena;
