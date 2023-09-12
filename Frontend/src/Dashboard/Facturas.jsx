import React from 'react'

const Facturas = () => {
  return (

    <div className='container-md mt-5'>

      <button type="button" className="btn btn-primary" style={{ backgroundColor: "#7a1520" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        < i className="fa-solid fa-plus fa-beat fa-lg me-2" style={{ color: "#ffffff" }}></i>Facturar
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#d84052" }}>
              <h5 className="modal-title" id="staticBackdropLabel">Nueva Factura</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Còdigo factura </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-6">
                  <label for="inputAddress" className="form-label">Fecha</label>
                  <input type="date" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div> 
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Metodo de pago </label>
                  <select className="form-select form-select-sm" aria-label="Ejemplo de .form-select-sm">
                    <option selected>selecione uno</option>
                    <option value="1">Efectivo</option>
                    <option value="2">Tarjeta debito/credito</option>
                    <option value="3">Transferencia Qr</option>
                    <option value="4">Transferencia Nequi</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Documento cliente</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Nombre  cliente</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Còdigo pedido</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Producto</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">cantidad</label>
                  <input type="number" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">precio unitario</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Precio Total</label>
                  <input type="text" className="form-control" />
                </div>

               
                
              </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" style={{ backgroundColor: "#403b3b" }} data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: "#7a1520" }} >Guardar Factura</button>
            </div>
          </div>
        </div>
      </div>


      <div className='container-xl'>
        <div className='d-none d-md-block '>
          <div className="table-responsive">
            <table className='table table-bordered border-danger table-hover mt-2'>
              <thead>
                <tr>
                  <th scope="col" className="responsive-text">#</th>
                  <th scope="col" className="responsive-text">Codigo factura</th>
                  <th scope="col" className="responsive-text">Fecha</th>
                  <th scope="col" className="responsive-text">Metodo de pago</th>
                  <th scope="col" className="responsive-text">Documento cliente </th>
                  <th scope="col" className="responsive-text">Nombre cliente</th>
                  <th scope="col" className="responsive-text">Codigo pedido</th>
                  <th scope="col" className="responsive-text">Producto</th>
                  <th scope="col" className="responsive-text">Cantidad</th>
                  <th scope="col" className="responsive-text">Precio unitario</th>
                  <th scope="col" className="responsive-text">Precio total</th>
                  <th scope="col" className="responsive-text">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="responsive-text">Mark</td>
                  <td className="responsive-text">Otto</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text" >@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td >
                    <div className="btn-group btn-group-sm" role="group">
                      <span className='btn btn-primary d-flex align-items-center me-2'>
                        <i className="fa-solid fa-pencil space-i"></i>
                      </span>
                      <span className='btn btn-danger d-flex align-items-center'

                      ><i className="fa-solid fa-trash"></i>
                      </span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td className="responsive-text">Mark</td>
                  <td className="responsive-text">Otto</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td >
                    <div className="btn-group btn-group-sm" role="group">
                      <span className='btn btn-primary d-flex align-items-center me-2'>
                        <i className="fa-solid fa-pencil space-i"></i>
                      </span>
                      <span className='btn btn-danger d-flex align-items-center'>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </div>

                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td className="responsive-text">Mark</td>
                  <td className="responsive-text">Otto</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td className="responsive-text">@mdo</td>
                  <td >
                    <div className="btn-group btn-group-sm" role="group">
                      <span className='btn btn-primary d-flex align-items-center me-2'>
                        <i className="fa-solid fa-pencil space-i"></i>
                      </span>
                      <span className='btn btn-danger d-flex align-items-center'>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </div>

                  </td>
                </tr>
              </tbody>

            </table>


          </div>
        </div>
      </div>








    </div>
  )
}

export default Facturas