export interface Autor {
  id: number;
  nombreApellido: string;
  nacionalidad: string;
}

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Libro {
  id: number;
  titulo: string;
  autorId: number;
  precio: number;
  imgSrc: string;
  disponible: boolean;
  autor: Autor;
  categorias: Categoria[];
}

export interface cardLibroProps {
  id: number;
  titulo: string;
  autor: Autor;
  precio: number;
  imgSrc: string;
}