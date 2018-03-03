import React, { Component } from 'react';
import Content from './componentes/Global/Content/Content';
import PropTypes from 'prop-types';
import BarraNavegacion  from './componentes/BarraNavegacion/BarraNavegacion';
import './App.css';
import ReactDOM from 'react-dom';
class App extends Component {

  static PropTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(){
    super();
    var IdUser=Number(window.localStorage.getItem("idUsuario"));
    // alert(window.location.pathname);
    if(IdUser==0 && window.location.pathname!="/login"){
        window.location.href = "/login";
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Content body={children}/>
      </div>
    );
  }

  componentDidMount(){
    if(window.location.pathname!="/login" && window.location.pathname!="/"){
      ReactDOM.render(<BarraNavegacion/>, document.getElementById('BarraNavegacion'));
    }
  }
}

export default App;
