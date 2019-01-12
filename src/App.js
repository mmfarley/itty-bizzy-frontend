import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SectionLogin from './login.js'

class App extends Component {
  render() {
    return (
      <div>
       <h1>Welcome to Itty Bizzy</h1>
       <SectionLogin />
     </div>
    );
  }
}

export default App;
