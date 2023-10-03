import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const Usuario = () => {

  const [usuario, setUsuario] = useState([])

  const [tipodocumento, setTipodocumento] = useState('')
  const [numerodocumento, setNumerodocumento] = useState('')
  const [primernombre, setPrimernombre] = useState('')
  const [segundonombre, setSegundonombre] = useState('')
  const [primerapellido, setPrimerapellido] = useState('')
  const [segundoapellido, setSegundoapellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [rolusuario, setRolusuario] = useState('')
 
  const [edit, setEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    getData();
  }, []);

  const cleanData = () => {

    setUsuario('')
    //setTimeout('')
    setTipodocumento('')
    setNumerodocumento('')
    setPrimernombre('')
    setSegundonombre('')
    setPrimerapellido('')
    setSegundoapellido('')
    setTelefono('')
    setContrasena('')
    setRolusuario('')
    setEdit(false);

  }


  const getData = async () => {
    const { data } = await axios.get("http://localhost:4000/usuario/listar");
    setUsuario(data.usuario);
  };

  const saveUsuario = async () => {
    try {
      const newUsuario = {
        tipodocumento,
        numerodocumento,
        primernombre,
        segundonombre,
        primerapellido,
        segundoapellido,
        telefono,
        contrasena,
        rolusuario
        
      }
      await axios.post('http://localhost:4000/usuario/add', newUsuario);
      cleanData();
      getData();


      Swal.fire({
        icon: 'success',
        title: 'El Usuario a sido registrado exitosamente',
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        getData(); // Recargar los datos después de un breve tiempo
      }, 1000); // Esperar 1 segundo antes de recargar


    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message)
      }
      console.log('error en saveUsuario', error.message);

    }
  }

  const updateUsuario = async () => {
    try {
      const id = localStorage.getItem('id');
      const updateUsuario = {
        tipodocumento,
        numerodocumento,
        primernombre,
        segundonombre,
        primerapellido,
        segundoapellido,
        telefono,
        contrasena,
        rolusuario
      }
      const { data } = await axios.put('http://localhost:4000/usuario/update' + id, updateUsuario);
      cleanData();
      getData();


      Swal.fire({
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message)
      }
      console.log('error en saveUsuario', error.message);
    }
  }

  const editData = (item) => {
  
    setEdit(true);
    setTipodocumento(item.tipodocumento || '')
    setNumerodocumento(item.numerodocumento || '')
    setPrimernombre(item.primernombre || '')
    setSegundonombre(item.segundonombre || '')
    setPrimerapellido(item.primerapellido || '')
    setSegundoapellido(item.segundoapellido || '')
    setTelefono(item.telefono || '')
    setContrasena (item.contrasena  || '' )
    setRolusuario(item.rolusuario || '')

    localStorage.setItem('id', item._id)
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const deleteUsuario = async (id) => {
    try {
      Swal.fire({
        title: '¿Esta seguro de eliminar?',
        text: "No se podra regresar el proceso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.delete('http://localhost:4000/usuario/delete' + id);
          getData();
          Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } catch (error) {
      if (!error.response.data.ok) {
        return alert(error.response.data.message)
      }
      console.log('error en deleteUsuario', error.message);
    }
  }

  const actions = async (e) => {
    e.preventDefault();
    edit ? updateUsuario() : saveUsuario();
  };


  return (
    <div>
    <div className='container-md mt-5'>

    
    <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden={!isModalOpen} style={{ display: isModalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#d84052" }}>
            <h5 className="modal-title text-white" id="exampleModalLabel">Ingreso de Clientes</h5>
                <button type="button" className="btn-close bg-white" onClick={() => {
                  cleanData(); // Limpia los campos del formulario
                  getData(); // Carga los datos actualizados
                  closeModal();
                }} />
              </div>
              
            <div className="modal-body">

              <form id='usuarioForm' onSubmit={actions}>
               <div className="row g-3">

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Tipo de Documento </label>
                  <select className="form-select border-dark" aria-label="Default select example"
                   value={tipodocumento}
                   onChange={(e) => setTipodocumento(e.target.value)}
                   required>
                  
                    <option selected>Elije...</option>
                    <option value="CC">Cedula de Ciudadania</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="PS">Numero Pasaporte</option>
                  </select>
                </div>

                <div className="col-6">
                  <label for="inputAddress" className="form-label">Numero de documento</label>
                  <input type="number" className="form-control border border-dark"
                        value={numerodocumento} onChange={(e) => setNumerodocumento(e.target.value.toUpperCase())} required />
                    </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Primer Nombre</label>
                  <input type="text" className="form-control border border-dark"
                      value={primernombre} onChange={(e) => setPrimernombre(e.target.value.toUpperCase())} required />
                  </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Segundo Nombre</label>
                  <input type="text" className="form-control border border-dark"
                      value={segundonombre} onChange={(e) => setSegundonombre(e.target.value.toUpperCase())} />
                  </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Primer Apellido</label>
                  <input type="text" className="form-control border border-dark"
                      value={primerapellido} onChange={(e) => setPrimerapellido(e.target.value.toUpperCase())} required />
                  </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Segundo Apellido</label>
                  <input type="text" className="form-control border border-dark"
                      value={segundoapellido} onChange={(e) => setSegundoapellido(e.target.value.toUpperCase())} required />
                  </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Telefono</label>
                  <input type="number" className="form-control border border-dark" id="inputPassword4"
                      value={telefono} onChange={(e) => setTelefono(e.target.value.toUpperCase())} />
                  </div>


                <div className="col-md-6">
                  <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                  <input type="number" className="form-control border border-dark" id="inputPassword4"
                      value={contrasena} onChange={(e) => setContrasena(e.target.value.toUpperCase())} />
                  </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Rol del Usuario </label>
                  <select className="form-select border-dark" aria-label="Default select example"
                   value={rolusuario}
                   onChange={(e) => setRolusuario(e.target.value)}
                   required>
                    <option selected>Elije...</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                    <option value="3">Invitado</option>
                  </select>
                </div>
                <div className="modal-footer border-5">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        getData(); // Carga los datos actualizados
                        cleanData(); // Limpia los campos del formulario
                        closeModal();
                      }}
                      data-bs-dismiss="modal">
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-success">Guardar Registro</button>
                  </div>

               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='container container-flex card Larger shadow p-0 mb-15 bg-body rounded'>
    <div className="card-header d-flex justify-content-between align-items-center">

      <div >
        <h4 className="text-danger fw-bold m-0 mt-2 text-center"> Usuarios</h4>
        <div>
          <button type="button" className="btn btn-danger rounded-circle mt-3" style={{ backgroundColor: "#7a1520" }}
            onClick={() => {
              setIsModalOpen(true);
            }} title="Haga clic para agregar un nuevo cliente">< i className="fa-solid fa-plus fa-beat "></i></button>
        </div>


        <div className='container-fluid d-flex d-none d-md-block '>

          <div className="container container-fluid table-responsive">

            <table className='table table-bordered table-hover mt-2'>

              <thead className='table-danger'>
                <tr>
                  <th scope="col" className="responsive-text">#</th>
                  <th scope="col" className="responsive-text">Tipo documento</th>
                  <th scope="col" className="responsive-text">Numero documento</th>
                  <th scope="col" className="responsive-text">Primer nombre</th>
                  <th scope="col" className="responsive-text">Segundo nombre</th>
                  <th scope="col" className="responsive-text">Primer apellido</th>
                  <th scope="col" className="responsive-text">Segundo apellido</th>
                  <th scope="col" className="responsive-text">Telefono</th>
                  <th scope="col" className='responsive-text'>Contraseña</th>
                  <th scope="col" className="responsive-text">Rol Usuario</th>
                  <th scope="col" className="responsive-text">Acciones</th>
                </tr>
              </thead>

              <tbody>

                {Array.isArray(usuario) && usuario.map((item, i) => (
                  <tr key={item._id}>
                    <td className="responsive-text">{i + 1}</td>
                    <td className="responsive-text">{item.tipodocumento}</td>
                    <td className="responsive-text">{item.numerodocumento}</td>
                    <td className="responsive-text">{item.primernombre}</td>
                    <td className="responsive-text">{item.segundonombre}</td>
                    <td className="responsive-text">{item.primerapellido}</td>
                    <td className="responsive-text">{item.segundoapellido}</td>
                    <td className="responsive-text">{item.telefono}</td>
                    <td className="responsive-text" >{item.contrasena}</td>
                    <td className="responsive-text">{item.rolusuario}</td>
                    <td >

                      <div className="btn-group btn-group-sm" role="group">

                        <span className='btn btn-primary d-flex align-items-center me-2'
                          onClick={() => editData(item)}>
                          <i className="fa-solid fa-pencil space-i"></i>
                        </span>

                        <span className='btn btn-danger d-flex align-items-center'
                          onClick={() => deleteUsuario(item._id)} ><i className="fa-solid fa-trash" ></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='d-md-none'>
        {Array.isArray(usuario) && usuario.map((item, i) => (
          <div key={item._id} className='card border-3 border-dark'>
            {/* Contenido de la tarjeta */}
            <div className='card-body'>
              <h5 className='card-title'>Usuarios {i + 1}</h5>
              <p className='card-text'>
                <strong>Tipo de documento:</strong> {item.tipodocumento}<br />
                <strong>Numero de documento:</strong> {item.numerodocumento}<br />
                <strong>Primer nombre:</strong> {item.primernombre}<br />
                <strong>Segundo nombre:</strong> {item.segundonombre}<br />
                <strong>Primer apellido:</strong> {item.primerapellido}<br />
                <strong>Segundo apellido:</strong> {item.segundoapellido}<br />
                <strong>Telefono:</strong> {item.telefono}<br />
                <strong>Contraseña:</strong> {item.contrasena}
                <strong>Rol Usuario:</strong> {item.rolusuario} 
              </p>
              <div className='btn-group btn-group-xl '>
                <span className='btn btn-primary d-flex align-items-center me-2 '
                  onClick={() => editData(item)}>
                  <i className="fa-solid fa-pencil space-i"></i>
                </span>
                <span className='btn btn-danger d-flex align-items-center'
                  onClick={() => deleteUsuario(item._id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-1 d-flex justify-content-end mb-3 border-5">

      </div>
    </div>
  </div>
    </div>
  )
}

export default Usuario