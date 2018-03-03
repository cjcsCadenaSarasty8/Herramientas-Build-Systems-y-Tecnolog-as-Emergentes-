//dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';

//rutas
import AppRoutes from './routes';

    ReactDOM.render(
    <Router>
        <AppRoutes/>
    </Router>
        , document.getElementById('root'));
registerServiceWorker();
