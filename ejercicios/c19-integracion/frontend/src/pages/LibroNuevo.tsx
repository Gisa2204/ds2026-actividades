import { useNavigate } from 'react-router-dom';

import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { Autor, cardLibroProps } from '../types/libro';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';

import { apiFetch } from '../services/api';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

function LibroNuevo() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const { data: autores, loading, error } = useFetch<Autor[]>('/autores');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LibroValidado>({
    resolver: zodResolver(libroSchema)
  });

  const guardarLibro = async (data: LibroValidado) => {

    //Esto es para asignar una imagen por defecto si no ingresa nada (la DB necesita un campo)
    const payload = {
      ...data,
      imgSrc: data.imgSrc || 'logo.svg' 
    };

    try {
      await apiFetch<cardLibroProps>('/libros', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      navigate('/catalogo');
    }
    catch (e) {
      setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    }
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-5 mt-3 mb-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Agregar un nuevo libro al catálogo</h2>

      <Form onSubmit={handleSubmit(guardarLibro)} className="bg-light p-4 rounded shadow-sm" noValidate>

        {errorApi && <Alert variant="danger">{errorApi}</Alert>}

        { /*TITULO DEL LIBRO*/}
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

        { /*AUTOR*/}
        <Form.Group className="mb-3" controlId="formAutorId">
          <Form.Label className="fw-bold">Autor</Form.Label>
          <Form.Select
            {...register('autorId', { valueAsNumber: true })}
            isInvalid={!!errors.autorId}
          >
            <option value="">Seleccione un autor...</option>
            {autores?.map((autor) => (
              <option key={autor.id} value={autor.id}>
                {autor.nombreApellido} ({autor.nacionalidad})
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.autorId?.message}
          </Form.Control.Feedback>
        </Form.Group>

        { /*PRECIO DEL LIBRO*/}
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

        { /*IMAGEN DEL LIBRO*/}
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