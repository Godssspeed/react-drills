import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput:'',
      listArray:['Naruto',
                 'Sasuke',
                 'Kakashi',
                 'Hashirama',
                 'Orochimaru',
                 'Obito'],
    }
   //this.handleChange = this.handleChange.bind(this)
    //this.handlelistArry = this.handlelistArry.bind(this)
  }

  handleChange(e){
    this.setState({userInput:e.target.value})
  }

  // handlelistArry(prop){
  //   let listArray = this.state.listArray;
  //   for (let i; i<listArray.length; i++){
  //     if (listArray[i] === prop){
  //       listArray[i].pop()
  //     }
  //   }
  //   this.setState({listArray:listArray})
  // }

  render() {
    let arrToDisplay = this.state.listArray.filter((e,i) => {
      return e.includes(this.state.userInput);
    }).map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })

    console.log(this.state.userInput)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={(e)=> this.handleChange(e)}
        />
        {arrToDisplay}
      </div>
    );
  }
}

export default App;
