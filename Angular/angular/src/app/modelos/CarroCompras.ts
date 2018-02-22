export class CarroCompras {

  id : number;
  idProducto : number;
  idUsuario : number;
  Cantidad : number;
    constructor(id : number, idProducto : number, idUsuario : number, Cantidad : number){
      this.id =id;
      this.idProducto = idProducto;
      this.idUsuario = idUsuario;
      this.Cantidad = Cantidad;
    }
  }
