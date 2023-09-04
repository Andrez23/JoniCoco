import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div classNameName='container-md'>

      <div className="row mt-5">

        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Generar Pedidos </h5>
              <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
              <Link to="Pedidos" className="btn btn-primary">Ir a pedidos</Link>
            </div>
          </div>
        </div>


        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Generar Factura</h5>
              <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
              <Link to="Facturas" className="btn btn-primary">Ir a facturar</Link>
            </div>
          </div>
        </div>
        

        <div className="row mt-3">

          <div className="col-6 ">
            <div className="card border-danger mb-3" style={{ maxWidth: "650px" }}>
              <div className="card-header">Pedidos Activos </div>
              <div className="card-body text-danger">
                <h5 className="card-title">Título de la tarjeta Danger</h5>
                <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
              </div>
            </div>
            </div>

            <div className="col-6">
            <div className="card border-danger mb-3" style={{ maxWidth: "650px" }}>
              <div className="card-header">Ultimas facturas</div>
              <div className="card-body text-danger">
                <h5 className="card-title">Título de la tarjeta Danger</h5>
                <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
              </div>
            </div>
          </div>
          </div>
          </div>


        </div>



        )
}

        export default Home