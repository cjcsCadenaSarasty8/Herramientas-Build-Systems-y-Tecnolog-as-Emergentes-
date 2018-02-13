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

  export let ArticulosCarro:Articulo[]=[];

  
  
export const Articulos:Articulo[] =[

    {id:1, urlImagen:"../recursos/imagen/ajo.jpg", nombre: "ajo",precio:55,unidades:5},
    {id:2, urlImagen:"../recursos/imagen/almendras.jpg", nombre: "almendras",precio:30,unidades:10},
    {id:3, urlImagen:"../recursos/imagen/arandanos.jpg", nombre: "arandanos",precio:30,unidades:10},
    {id:4, urlImagen:"../recursos/imagen/brocoli.png", nombre: "brocoli",precio:30,unidades:10},
    {id:5, urlImagen:"../recursos/imagen/calabaza.jpg", nombre: "calabaza",precio:30,unidades:10},
    {id:6, urlImagen:"../recursos/imagen/canela.jpg", nombre: "canela",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/cebolla.jpg", nombre: "cebolla",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/fresa.jpg", nombre: "fresa",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/kiwi.jpg", nombre: "kiwi",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/limon.jpg", nombre: "limon",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/lychee.jpg", nombre: "lychee",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/maiz.jpg", nombre: "maiz",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/manzana.jpg", nombre: "manzana",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/naranja.jpg", nombre: "naranja",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/papa.jpg", nombre: "papa",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/pasta.jpg", nombre: "pasta",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/pimienta.jpg", nombre: "pimienta",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/repollo.jpg", nombre: "repollo",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/tomate.jpg", nombre: "tomate",precio:30,unidades:10},
    {id:7, urlImagen:"../recursos/imagen/zanahoria.jpg", nombre: "zanahoria",precio:30,unidades:10}

];