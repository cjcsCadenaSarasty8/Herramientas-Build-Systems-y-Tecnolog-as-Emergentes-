import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './componentes/login/login';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion';
import Catalogo from './componentes/catalogo/catalogo';
import registerServiceWorker from './registerServiceWorker';




let IdUser=Number(window.localStorage.getItem('idUser'));
if(IdUser!=0){
    ReactDOM.render(<Login/>, document.getElementById('login'));
}else{
    
    ReactDOM.render(<Catalogo/>, document.getElementById('catalogo'));
}
ReactDOM.render(<BarraNavegacion/>, document.getElementById('BarraNavegacion'));
// ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
