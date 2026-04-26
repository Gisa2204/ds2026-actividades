export interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible:boolean;
    genero?: string;
}