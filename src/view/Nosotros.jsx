import React from 'react'
import Jonicoco1 from "../images/Jonicoco1.jpeg";
import Jonicoco2 from "../images/Jonicoco6.jpeg";
import Jonicoco3 from "../images/Jonicoco5.jpeg";

const Nosotros = () => {
  return (
    <div class="card-group">
  <div class="card border-danger">
    <img src={Jonicoco1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-danger">Artesanias realizadas en coco</h5>
      <p class="card-text">Con el producto restante tal como la cascara del coco, realizamos artesanias de excelente calidad asi dandole un buen uso a todo nuestro material primario.</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card  border-danger">
    <img src={Jonicoco2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-danger">Ingredientes de alta calidad</h5>
      <p class="card-text">Jonicoco pretende Fabricar una excelente mezcla natural de panela y coco, para obtener un producto de alta calidad, buen precio y sabor. </p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card border-danger">
    <img src={Jonicoco3} class="card-img-top " alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-danger">Entrando en el comercio local</h5>
      <p class="card-text">Acompañar las panelitas con una deliciosa mazamorra pilada y prestar un excelente servicio en el local comercial.</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div>
    
  </div>
</div>

  )
}

export default Nosotros