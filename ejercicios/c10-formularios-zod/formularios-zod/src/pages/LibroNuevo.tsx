import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import type { cardLibroProps } from '../types/libro';
import { libroSchema } from '../schemas/libroSchema'; // Ajusta la ruta correcta

interface LibroNuevoProps {
  onAgregarLibro: (libro: cardLibroProps) => void;
}

function LibroNuevo({ onAgregarLibro }: LibroNuevoProps) {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [precio, setPrecio] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  const [errores, setErrores] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = {
      titulo,
      autor,
      precio: Number(precio),
      imgSrc
    };

    const resultado = libroSchema.safeParse(form);

    if (!resultado.success) {
      const nuevosErrores: Record<string, string> = {};
      
      resultado.error.issues.forEach((issue) => {
        const campo = issue.path[0] as string;
        nuevosErrores[campo] = issue.message;
      });

      setErrores(nuevosErrores);
      return;
    }

    const nuevoLibro: cardLibroProps = {
      id: Date.now(),
      titulo: resultado.data.titulo,
      autor: resultado.data.autor,
      precio: resultado.data.precio,
      imgSrc: resultado.data.imgSrc || 'logo.svg'
    };

    onAgregarLibro(nuevoLibro);
    navigate('/catalogo');
  };

  return (
    <Container className="py-5 mt-3 mb-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Agregar un nuevo libro al catálogo</h2>
      
      <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm" noValidate>
        
        <Form.Group className="mb-3" controlId="formTitulo">
          <Form.Label className="fw-bold">Título del libro</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese título" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            isInvalid={!!errores.titulo} 
          />
          <Form.Control.Feedback type="invalid">
            {errores.titulo}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAutor">
          <Form.Label className="fw-bold">Autor</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese autor" 
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            isInvalid={!!errores.autor}
          />
          <Form.Control.Feedback type="invalid">
            {errores.autor}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="fw-bold">Precio</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ingrese un precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            isInvalid={!!errores.precio}
          />
          <Form.Control.Feedback type="invalid">
            {errores.precio}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImgSrc">
          <Form.Label className="fw-bold">Imagen (opcional)</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese una url (debe terminar en jpg)" 
            value={imgSrc}
            onChange={(e) => setImgSrc(e.target.value)}
            isInvalid={!!errores.imgSrc}
          />
          <Form.Control.Feedback type="invalid">
            {errores.imgSrc}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 fs-5 mt-3">
          Guardar Libro
        </Button>
      </Form>
    </Container>
  );
}

export default LibroNuevo;