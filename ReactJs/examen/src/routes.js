//dependencias
import React from 'react';
import { Route, Switch} from 'react-router-dom';

//componentes

import App from './App';
import Login from './componentes/login/login';
import Catalogo from './componentes/catalogo/catalogo';
import Page404 from './componentes/Page404/Page404';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/catalogo" component={Catalogo}/>
        <Route  component={Page404}/>
    </Switch>
</App>;

export default AppRoutes;