import axios from 'axios';

class BaseDatos{

    ObtenerArticulos():void{
        axios.get (`https://angularcarlos-6b6a8.firebaseio.com/articulo/.json`) 
        .then(function (response) {
            console.log(response.data);
          })
    }

}