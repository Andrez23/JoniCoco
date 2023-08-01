import React from 'react'
import Jonicoco1 from "../images/Jonicoco1.jpeg";
import Jonicoco2 from "../images/Jonicoco6.jpeg";
import Jonicoco3 from "../images/Jonicoco5.jpeg";
import Accordion from 'react-bootstrap/Accordion';
import { Card, CardHeader, CardBody, Box, Text, Heading, Image, } from '@chakra-ui/react'

const Nosotros = () => {
  return (


    <div>


      <div class="card-group" style={{ padding: '' }}>

        <div class="card border-danger">
          <img src={Jonicoco1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-danger">Artesanias realizadas en cocococ</h5>
            <p class="card-text">Con el producto restante tal como la cascara del coco, realizamos artesanias de excelente calidad asi dandole un buen uso a todo nuestro material primario</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card  border-danger">
          <img src={Jonicoco2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-danger">Ingredientes de alta calidad</h5>
            <p class="card-text">Jonicoco pretende Fabricar una excelente mezcla natural de panela y coco, para obtener un producto de alta calidad, buen precio y sabor. </p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-danger">
          <img src={Jonicoco3} class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title text-danger">Entrando en el comercio local</h5>
            <p class="card-text">Acompañar las panelitas con una deliciosa mazamorra pilada y prestar un excelente servicio en el local comercial.</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-danger' style={{ padding: '20px' }}>Quienes somos </h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header > <h5 className='text-danger text-center ' >Como nace Jonicoco</h5></Accordion.Header>
            <Accordion.Body className='estilos de carrusel' style={{ padding: '50x', width: "50" }}>
              Jonicoco nace de varias inquietudes, la primera es que para Rosa quienes es la emprendedora de pequeña su padre la llevaba a comer después de misa coco con velita, y para ella era una duda por qué no se podían comer juntos, en un solo producto. Junto con su hija, a pesar de que la idea era realizar bombones, el resultado fue la panelita de coco, con la que se desarrolla Jonicoco
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> <h5 className='text-danger text-center'> Crecimiento exponencial</h5> </Accordion.Header>
            <Accordion.Body>
              El negocio de Jonicoco ha crecido mucho porque gusta. Acá en el municipio de Donmatías nos han hecho propaganda por redes sociales y ayudado mucho la voz a voz. En el municipio se vende en tiendas, fábricas de confección, escuelas, colegios. También a los municipios de Yarumal, Santa Rosa, Medellín, San Jose de la Montaña, San Andrés de Cuerquia
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><h5 className='text-danger text-center'>Valores corporativos</h5></Accordion.Header>
            <Accordion.Body>
              Para Jonicoco es importante que haya transparencia, donde haya confianza para futuras negociaciones, además de que el cliente se sienta seguro consumiendo el producto.

              La puntualidad es vital ya que se realizan pedidos y para Jonicoco es importante que se cumplan los tiempos pactados, en los que se valora la producción y la distribución del producto.

              Y sin olvidar que la pasión con la que se hace el producto se transmita al consumidor quien finalmente es quien está deleitándose y sintiendo las emociones de felicidad, alegrías que van inmersas en cada panelita

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header><h5 className='text-danger text-center'>Responsabilidad social empresarial</h5></Accordion.Header>
            <Accordion.Body>
              Para Jonicoco es importante disminuir la generación de residuos, por ello se intenta dentro de lo posible la disminución de residuos sólidos. La generación de empleos es importante dentro del municipio de Donmatías y que hay diversificación, de esta manera Jonicoco se convierte una opción para que familias se unan al equipo de trabajo y se les pueda brindar una equidad salarial para todos.

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header><h5 className='text-danger text-center'>Mision y Vision</h5></Accordion.Header>
            <Accordion.Body>
              MISION <br />
              <br />

              Jonicoco pretende Fabricar una excelente mezcla natural de panela y coco, para obtener un producto de alta calidad, buen precio y sabor. Acompañar las panelitas con una deliciosa mazamorra pilada y prestar un excelente servicio en el local comercial. <br />

              VISION <br />
              <br />
              En un futuro se plantea que Jonicoco esté presente en almacenes de cadena del país, que pueda atraer al visitante en aeropuertos y terminales y de que se pueda internacionalizar, exportando a los países vecinos


            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
      {/*inicio de carta*/}

      <div className='Titulo' style={{ width: "100%", padding: "30px" }}><h2>Encargados de la empresa</h2></div>

      <div className='nombres' style={{ display: "flex", flexDirection: "row", margin: "20px" }}>


        <div className='container' style={{ width: "30%", border: "2px solid #ddd", boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}>
          <h2>Encargados de la empresa</h2>
          <Card maxW='md'>
            <CardHeader>
              <img src="https://bit.ly/sage-adebayo" alt="" style={{ borderRadius: "50%", width: "15%" }} />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>

            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Chakra UI'
            />


          </Card>
        </div>
        <div className='container' style={{ padding: "20px", width: "30%", border: "2px solid #ddd", boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}>
          <h2>Encargados de la empresa</h2>
          <Card maxW='md'>
            <CardHeader>
              <img src="https://bit.ly/sage-adebayo" alt="" style={{ borderRadius: "50%", width: "15%" }} />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>

            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
      
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Chakra UI'
            />
          </Card>
        </div>
      </div>

    </div>

  )
}

export default Nosotros