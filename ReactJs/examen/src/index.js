//dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

//rutas
import AppRoutes from './routes';


// if(IdUser!=0){
    ReactDOM.render(
    <Router>
        <AppRoutes/>
    </Router>
        , document.getElementById('root'));
// }else{
    
//     ReactDOM.render(<Catalogo/>, document.getElementById('catalogo'));
// }
// ReactDOM.render(<BarraNavegacion/>, document.getElementById('BarraNavegacion'));
// ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
