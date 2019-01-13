import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[],
      userInput:''

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({userInput:e.target.value})
  }

  handleClick(){
    let {list, userInput} = this.state
    if (userInput){
      list.push(userInput)
    }
    this.setState({list:list})

  }



  render() {
    console.log(this.state.list);
    console.log(this.state.userInput);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input type='text' onChange = {(e => this.handleChange(e))} />
        <button onClick={()=> this.handleClick()}>Add</button>
        <Todo title="Todo List" list={this.state.list} />
      </div>
    );
  }
}

export default App;
