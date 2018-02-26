import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './componentes/login/login';
import registerServiceWorker from './registerServiceWorker';

import FondoLogin from './recursos/imagen/login-fondo.jpg'


ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
