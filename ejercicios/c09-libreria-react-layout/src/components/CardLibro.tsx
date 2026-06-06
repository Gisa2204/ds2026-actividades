import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import type { cardLibroProps } from '../types/libro';
import { Link } from 'react-router-dom';

function CardLibro({ titulo, autor, precio, imgSrc, id }: cardLibroProps) {

  const [itemCarrito, setItemCarrito] = useState(0);
  const incrementarCarrito = () => {
    setItemCarrito(itemCarrito + 1);
  }

  return (
    <Col lg={4}>
      <Card className='px-1 py-1'>
        <Card.Img variant="top" src={imgSrc} height={600} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Subtitle className='py-1'>{autor}</Card.Subtitle>
          <Card.Subtitle className='py-3 fs-5' style={{ color: "green" }}>${precio}</Card.Subtitle>
        </Card.Body>
        <Button
          variant="outline-primary" size='lg'
          onClick={incrementarCarrito}
        >Agregar al carrito ({itemCarrito})
        </Button>
        <Link
          to={`/libro/${id}`}
          className="btn btn-primary btn-lg mt-1"
        >
          Ver libro
        </Link>
      </Card>
    </Col>
  );
}

export default CardLibro;