import React from 'react'

const Facturas = () => {
  return (

    <div className='mt-5'>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Crear Prefactura
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Nueva factura</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Codigo Producto</label>
                  <input type="text" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Nombre Producto</label>
                  <input type="text" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-6">
                  <label for="inputAddress" className="form-label">Cantidad</label>
                  <input type="number" className="form-control" id="inputAddress"  />
                </div>
                <div className="col-6">
                  <label for="inputAddress2" className="form-label">Precio Unitario</label>
                  <input type="text" className="form-control" id="inputAddress2" />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">subtotal</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facturas