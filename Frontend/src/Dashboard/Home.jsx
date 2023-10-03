import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='mt-5'>
      <h1 style={{ color: "#911625" }}>Bienvenido a Jonicoco</h1>
      <div className='container-md'>

        <div className="row mt-5">

          <div className="col-4">
            <div className="card border-black mb-3">
              <div className="card-body">
                <h5 className="card-title">Generar Pedidos </h5>
                <br></br>
                <Link to="Pedidos" className="btn btn-danger">Ir a pedidos</Link>
              </div>
            </div>
          </div>


          <div className="col-4">
            <div className="card border-black mb-3">
              <div className="card-body">
                <h5 className="card-title">Buscar clientes</h5>
                <br></br>
                <Link to="Clientes" className="btn btn-danger">Ir a clientes</Link>
              </div>
            </div>
          </div>

          
          <div className="col-4  ">
            <div className="card border-black mb-3">
              <div className="card-body">
                <h5 className="card-title">Buscar productos</h5>
                <br></br>
                <Link to="Productos" className="btn btn-danger">Ir a productos</Link>
              </div>
            </div>
          </div>

        

        
          
        </div>
      </div>
    </div>



  )
}

export default Home