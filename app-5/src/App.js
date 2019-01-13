import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Component/Image'
import Image2 from './Component/Image2';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
       <Image />
       <Image2 />
      </div>
    );
  }
}

export default App;
