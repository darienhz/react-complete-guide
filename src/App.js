import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'



class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>Learning to code with React</p>
        <Person name="Darien" age="31"/>
        <Person name="Justin" age="31"/>
        <Person name="Joey" age="32"/>
      </div>


    );
  }
}

export default App;
