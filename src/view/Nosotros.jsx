import React from 'react'
import Jonicoco1 from "../images/Jonicoco1.jpeg";
import Jonicoco2 from "../images/Jonicoco6.jpeg";
import Jonicoco3 from "../images/Jonicoco5.jpeg";

const Nosotros = () => {
  return (
    <div class="card-group">
  <div class="card">
    <img src={Jonicoco1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
      <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
    </div>
  </div>
  <div class="card">
    <img src={Jonicoco2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta tarjeta tiene texto de apoyo a continuación como una introducción natural a contenido adicional.</p>
      <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
    </div>
  </div>
  <div class="card">
    <img src={Jonicoco3} class="card-img-top " alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Título de la tarjeta</h5>
      <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura.</p>
      <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
    </div>
  </div>
</div>
  )
}

export default Nosotros