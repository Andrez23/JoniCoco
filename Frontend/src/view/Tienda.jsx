import React from "react";
import "../view/EstilosTienda.css";
import { Link } from "react-router-dom";
import Bolsita from "../images/bolsitadetal.jpg";
import Cajita6unidades from "../images/cajita6unidades.jpg";


const Tienda = () => {
  return (
    <div >
      <div className="mt-2">
      <h1 > Catá<span style={{ color: "#911625" }}>logo</span></h1>
      </div>
      <hr />
      <div className="container-t mt-4">
        {" "}
        {/*La "t" , es de tienda, para que las demas clases no interfieran*/}
        <div className="card">
          <div className="imgBx img-fluid">
            <img src={Cajita6unidades} alt="" />
          </div>
          <div className="content">
            <h2>Cajita</h2>
            <p>
            Apta para cualquier tipo de ocasion, la cajita la hace más especial para compartir con las personas que más quieres, practica para enmarcar y regalar momentos especiales. 
            </p>
            <Link to="#" className="bt">ir a WhatsApp</Link>
          </div>
        </div>
        <div className="card">
          <div className="imgBx img-fluid">
            <img src={Bolsita} alt="" />
          </div>
          <div className="content">
            <h2>Bolsita</h2>
            <p>
            Una presentación que va desde lo individual hasta la cantidad que desees, practica para llevar a cualquier lado y disfrutar en cualquier momento del día.
            </p>
            <Link to="#" className="bt">ir a WhatsApp</Link>
          </div>
        </div>
        <div className="card">
          <div className="imgBx img-fluid">
            <img src={Bolsita} alt="" />
          </div>
          <div className="content">
            <h2>Tarrito</h2>
            <p>
            Una presentación que se acomoda según tus necesidades y tus gustos, con la comodidad de elegir cuantas unidades deseas y luego puedes reutilizarlo a tu modo.
            </p>
            <Link to="#" className="bt">ir a WhatsApp</Link>
          </div>
        </div>
        <div className="card">
          <div className="imgBx img-fluid">
            <img src={Bolsita} alt="" />
          </div>
          <div className="content">
            <h2>Tarrito x10</h2>
            <p>
            Una presentación que se acomoda según tus necesidades y tus gustos, con la comodidad de elegir cuantas unidades deseas y luego puedes reutilizarlo a tu modo.
            </p>
            <Link to="#" className="bt">ir a WhatsApp</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
