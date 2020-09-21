import React, { Component } from 'react';
import {Navbar,NavbarBrand, Media} from 'reactstrap';
import './App.css';

import Menu from './components/MenuComponent';

class App extends Component {
  render (){
    return (
      <div>
        <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
  
}

export default App;
