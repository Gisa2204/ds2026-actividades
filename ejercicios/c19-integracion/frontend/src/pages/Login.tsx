import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Form, Alert, Container, Button } from 'react-bootstrap';

import type { LoginValidado } from '../schemas/loginSchema';
import type { Sesion } from '../types/sesionType';
import { loginSchema } from '../schemas/loginSchema';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { apiFetch } from '../services/api';
import { guardarToken } from '../services/sesion';


export default function Login() {
    const navigate = useNavigate();
    const [errorApi, setErrorApi] = useState<string | null>(null);

    //inicializar react-hook-form de zod
    const { register, handleSubmit, formState: { errors } } = useForm<LoginValidado>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (datos: LoginValidado) => {
        try {
            const sesion = await apiFetch<Sesion>('/auth/login',
                { method: 'POST', body: JSON.stringify(datos) });
            guardarToken(sesion.token);
            navigate('/catalogo');
        } catch (e) {
            setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
        }
    };

    return (
        <Container className="py-5 mt-3 mb-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Iniciar sesión</h2>

            <Form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 rounded shadow-sm" noValidate>
                
                {/* Error del backend (ej: Credenciales inválidas) */}
                {errorApi && (
                    <Alert variant="danger" className="mb-4">
                        {errorApi}
                    </Alert>
                )}

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="admin@libreria.test"
                        {...register('email')}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="fw-bold">Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="********"
                        {...register('password')}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fs-5 mt-3">
                    Ingresar
                </Button>

            </Form>
        </Container>
    );

}