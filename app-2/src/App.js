import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      // userInput:'',
      listArry: ['Goku','Vegeta','Jiren',"Broly",'Hit', "Beerus","Whis"]
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleListArray = this.handleListArray.bind(this)
  }

  // handleChange(e){
  //   this.setState({userInput: e.target.value})
  // }

  // handleListArray(prop){
  //   let userInput = this.state.userInput;
  //   let listArry = this.state.userInput;

  // }

  render() {

    // console.log(this.state.userInput);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h2>{this.state.listArry[0]}</h2>
        <h2>{this.state.listArry[1]}</h2>
        <h2>{this.state.listArry[2]}</h2>
        <h2>{this.state.listArry[3]}</h2>
        <h2>{this.state.listArry[4]}</h2>
        <h2>{this.state.listArry[5]}</h2>
        <h2>{this.state.listArry[6]}</h2>
      </div>
    );
  }
}

export default App;
