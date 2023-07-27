import React from "react";
import "../view/EstilosContactanos.css"

const Contactenos = () => {
  return (
 <div className="mt-5 fondo">
    <section className="d-flex justify-content-center py-5">
      <div className="card col-sm-6 p-3"> 
        <div className="mb-3">
          <h4>Contactanos</h4>
        </div>
        <div className="mb-2">
          <form action="">
            <div className="mb-2">
              <label for=""></label>
              <input type="text" className="form-control"name="nombre" id="nombre" placeholder="Nombre" />
            </div>
            <div className="mb-2">
              <label for=""></label>
              <input type="text" className="form-control"name="apellido" id="apellido" placeholder="Apellido" />
            </div>
            <div className="mb-2">
              <label for=""></label>
              <input type="text" className="form-control"name="telefono" id="telefono" placeholder="Teléfono" />
            </div>
            <div className="mb-2">
              <label for=""></label>
              <input type="text" className="form-control"name="correo" id="correo" placeholder="Correo" />
            </div>
            <div className="mb-2">
              <label for=""></label>
              <input type="text" className="form-control"name="direccion" id="dirección" placeholder="Dirección" />
            </div>

            <div className="mb-2">
              <button className="btn btn-primary " >Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    
 </div>
  );
};

export default Contactenos;
