import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Logo from "../images/Logo Jonicoco.png";




const Footer = () => {
  return (
    <DIV>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Logo} />
    <Card.Body>
      <Card.Title>hola mor</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  <H1> PARA PUBLICAR EN EL GIT - PUSH DE PRUEBA </H1>
  </DIV>
  )
}

export default Footer