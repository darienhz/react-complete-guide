import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'



class App extends Component {
  state = {
    persons: [
      { name: 'Darien', age: 31 },
      { name: 'Justin', age: 31 },
      { name: 'Joey', age: 32 },
    ]

  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>Learning to code with React</p>
        <button>Switch Name</button>
        <Person name="Darien" age="31"> My hobbies: Video games</Person>
        <Person name="Justin" age="31"/>
        <Person name="Joey" age="32"/>
      </div>
    );
  }
}

export default App;
