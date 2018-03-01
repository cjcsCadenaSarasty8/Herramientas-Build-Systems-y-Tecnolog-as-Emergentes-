import React, { Component } from 'react';
import Content from './componentes/Global/Content/Content';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {

  static PropTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Content body={children}/>
      </div>
    );
  }
}

export default App;
