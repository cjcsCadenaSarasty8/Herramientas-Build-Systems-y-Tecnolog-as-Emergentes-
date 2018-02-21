export class Articulo {
    id: number;
    urlImagen:string;
    nombre: string;
    precio: number;
    unidades: number;
    constructor(id: number, urlImagen:string, nombre: string, precio: number, unidades: number){
    this.id=id;
    this.urlImagen=urlImagen;
    this.nombre=nombre;
    this.precio=precio;
    this.unidades=unidades;
    }
  }
