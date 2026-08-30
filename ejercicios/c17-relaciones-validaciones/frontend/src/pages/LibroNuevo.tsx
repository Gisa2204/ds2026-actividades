import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { cardLibroProps } from '../types/libro';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';

interface LibroNuevoProps {
  onAgregarLibro: (libro: cardLibroProps) => void;
}

function LibroNuevo({ onAgregarLibro }: LibroNuevoProps) {
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<LibroValidado>({
    resolver: zodResolver(libroSchema)
  });

  const guardarLibro = (data: LibroValidado) => {
    const nuevoLibro: cardLibroProps = {
      id: Date.now(),
      titulo: data.titulo,
      autor: data.autor,
      precio: data.precio,
      imgSrc: data.imgSrc || 'logo.svg'
    };

    onAgregarLibro(nuevoLibro);
    navigate('/catalogo');
  };

  return (
    <Container className="py-5 mt-3 mb-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Agregar un nuevo libro al catálogo</h2>
      
      <Form onSubmit={handleSubmit(guardarLibro)} className="bg-light p-4 rounded shadow-sm" noValidate>
        
        <Form.Group className="mb-3" controlId="formTitulo">
          <Form.Label className="fw-bold">Título del libro</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese título" 
            {...register('titulo')}
            isInvalid={!!errors.titulo} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.titulo?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAutor">
          <Form.Label className="fw-bold">Autor</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese autor" 
            {...register('autor')}
            isInvalid={!!errors.autor}
          />
          <Form.Control.Feedback type="invalid">
            {errors.autor?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="fw-bold">Precio</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Ingrese un precio"
            {...register('precio', { valueAsNumber: true })}
            isInvalid={!!errors.precio}
          />
          <Form.Control.Feedback type="invalid">
            {errors.precio?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImgSrc">
          <Form.Label className="fw-bold">Imagen (opcional)</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingrese una url (debe terminar en jpg)" 
            {...register('imgSrc')}
            isInvalid={!!errors.imgSrc}
          />
          <Form.Control.Feedback type="invalid">
            {errors.imgSrc?.message}
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