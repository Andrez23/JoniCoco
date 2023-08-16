import React from 'react'

const Usuario = () => {
  return (
    <div>
      <div>
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




    </div>
  )
}

export default Usuario