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
    ],
    otherState: 'Something else!'
  }

  switchNamedHandler = (newName) => {
   // Dont do this!! this.state.persons[0].name = 'Darien Hernandez';
   this.setState({
     persons: [
      { name: newName, age: 31 },
      { name: 'Justin Pla', age: 31 },
      { name: 'Joey G', age: 32 },
    ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>Learning to code with React</p>
        <button onClick={this.switchNamedHandler.bind(this, 'Darien!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}> My hobbies: Video games</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNamedHandler.bind(this, 'Darien Hernandez')}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
